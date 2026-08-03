# ==================== STAGE 1: Build Vite + Tailwind assets ====================
FROM node:20-alpine AS asset-builder

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Vite assets (TailwindCSS, SweetAlert2, Flowbite, ApexCharts, etc.)
RUN npm run build

# ==================== STAGE 2: PHP + Nginx (internal-only) ====================
FROM richarvey/nginx-php-fpm:3.1.6

# Copy entire PHP project
COPY . /var/www/html

# Copy the built frontend assets from Node stage
COPY --from=asset-builder /app/dist /var/www/html/dist

# PHP configuration
ENV SKIP_COMPOSER=1
ENV WEBROOT=/var/www/html
ENV PHP_ERRORS_STDERR=1
ENV RUN_SCRIPTS=1
ENV REAL_IP_HEADER=1

ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr
ENV DEBUG_MODE=false
ENV VITE_DEBUG=false
ENV LOG_LEVEL=error

# Allow larger file uploads
ENV PHP_POST_MAX_SIZE=50M
ENV PHP_UPLOAD_MAX_FILESIZE=50M
ENV PHP_MEMORY_LIMIT=256M

# PHP-FPM tuning
ENV PHP_FPM_MAX_CHILDREN=5
ENV PHP_FPM_START_SERVERS=2
ENV PHP_FPM_MIN_SPARE_SERVERS=1
ENV PHP_FPM_MAX_SPARE_SERVERS=2

ENV COMPOSER_ALLOW_SUPERUSER=1

CMD ["/start.sh"]
