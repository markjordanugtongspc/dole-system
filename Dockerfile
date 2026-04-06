# ==================== STAGE 1: Build Vite + Tailwind assets ====================
FROM node:20-alpine AS asset-builder

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build Vite assets (TailwindCSS, SweetAlert2, Flowbite, ApexCharts, etc.)
RUN npm install
RUN npm run build

# ==================== STAGE 2: PHP + Nginx (production-ready for Render) ====================
FROM richarvey/nginx-php-fpm:3.1.6

# Copy entire PHP project
COPY . /var/www/html

# Copy the built frontend assets from Node stage
# Since Vite outputs to 'dist', we copy 'dist' instead of 'public'
COPY --from=asset-builder /app/dist /var/www/html/dist

# Render + PHP best-practice settings
ENV SKIP_COMPOSER=1
# The entrypoint for this app is at the root (index.php), so WEBROOT is /var/www/html
ENV WEBROOT=/var/www/html
ENV PHP_ERRORS_STDERR=1
ENV RUN_SCRIPTS=1
ENV REAL_IP_HEADER=1

ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr

# Allow larger file uploads
ENV PHP_POST_MAX_SIZE=50M
ENV PHP_UPLOAD_MAX_FILESIZE=50M

ENV COMPOSER_ALLOW_SUPERUSER=1

# If you use Composer, uncomment these two lines:
# COPY composer.json composer.lock ./
# RUN composer install --no-dev --optimize-autoloader --no-interaction

CMD ["/start.sh"]
