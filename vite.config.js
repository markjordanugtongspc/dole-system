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
        // host: true enables Vite to listen on all local IPv4 and IPv6 addresses.
        host: true,
        port: 5173,
        strictPort: true, // Use exactly 5173 or error (prevents hidden port jumping)
        cors: true,

        // Allow all hostnames (critical for cross-laptop access)
        allowedHosts: true,

        // Restore the dynamic origin check
        origin: process.env.VITE_ORIGIN || undefined,

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
