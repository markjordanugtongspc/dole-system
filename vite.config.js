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
        strictPort: false, // Allow fallback if 5173 is locked
        cors: true,

        // Allow access via all hostnames in development
        allowedHosts: true,

        // Optional: Force a specific origin for assets if auto-detection fails
        origin: undefined,

        hmr: {
            // Setting host to true allows the HMR connection to automatically use 
            // the IP/Host from which the page was loaded.
            host: true,
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
