import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    envDir: 'config',
    plugins: [
        tailwindcss(),
        {
            name: 'php-hmr-reload',
            handleHotUpdate({ file, server }) {
                // Comprehensive file watching for PHP changes
                if (file.endsWith('.php')) {
                    console.log(`[PHP Changed] ${path.basename(file)} - Triggering full reload...`);
                    server.ws.send({
                        type: 'full-reload',
                        path: '*'
                    });
                    return [];
                }
            },
            configureServer(server) {
                // Watch additional files
                server.watcher.add([
                    'frontend/**/*.php',
                    'backend/**/*.php',
                    'ARCHIVED/**/*.php',
                    'index.php',
                    'backend/css/**/*.css',
                ]);
            },
        },
    ],
    server: {
        // Listen on all network interfaces (0.0.0.0) to allow LAN access
        // This makes the dev server accessible from other devices on the same network
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        cors: true,

        // Allow access via IP addresses (crucial for Vite 7+)
        allowedHosts: true,

        // Origin is intentionally omitted to allow Vite to auto-detect the correct URL
        // based on the request. This works seamlessly with the PHP vite() helper which
        // uses HTTP_HOST to generate the correct asset URLs.
        // Optional: Set VITE_ORIGIN env var to override (e.g., VITE_ORIGIN=http://192.168.1.124:5173)
        origin: process.env.VITE_ORIGIN || undefined,

        hmr: {
            // protocol: 'ws', // Standard websocket
            clientPort: 5173,
        },
        watch: {
            usePolling: true,
            interval: 300,
        },
    },
    css: {
        devSourcemap: true,
        postcss: {},
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        manifest: true,
        cssCodeSplit: false,
        rollupOptions: {
            input: './backend/js/main.js',
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'assets/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
    optimizeDeps: {
        include: ['sweetalert2', 'apexcharts', 'flowbite'],
    },
});
