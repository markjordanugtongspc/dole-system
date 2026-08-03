import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    base: './',
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
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        cors: true,
        allowedHosts: true,
        hmr: {
            // Omitting hardcoded host allows client browser to automatically connect
            // to the exact IP/hostname used in the address bar (e.g. 192.168.1.24)
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
    // Development keeps diagnostics; production strips every console/debug statement.
    esbuild: { drop: ['console', 'debugger'] },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        manifest: true,
        cssCodeSplit: false,
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            input: [
                './backend/js/main.js',
                './backend/js/modules/settings.js'
            ],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'assets/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('apexcharts')) return 'vendor-charts';
                        if (id.includes('sweetalert2')) return 'vendor-swal';
                        if (id.includes('flowbite')) return 'vendor-flowbite';
                        return 'vendor';
                    }
                },
            },
        },
    },
    optimizeDeps: {
        include: ['sweetalert2', 'apexcharts', 'flowbite'],
    },
});
