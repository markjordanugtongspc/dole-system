<?php
/**
 * Vite Asset Helper
 * Automatically detects IP and loads assets from Vite dev server or production build
 */

/**
 * Get Vite host dynamically based on request
 * This ensures Vite assets load correctly whether accessed via localhost or network IP
 */
function getViteHost()
{
    // Get the host from the current HTTP request
    $requestHost = $_SERVER['HTTP_HOST'] ?? 'localhost';

    // Remove port if present (e.g., "192.168.1.124:80" becomes "192.168.1.124")
    $cleanHost = explode(':', $requestHost)[0];

    // Return the Vite dev server URL using the detected host
    return "http://$cleanHost:5173";
}

/**
 * Check if Vite dev server is running
 * Always checks localhost since the Vite server runs on the same machine as PHP
 */
function isViteRunning()
{
    // Always check localhost (127.0.0.1) for the dev server
    // This works regardless of whether the page is accessed via localhost or LAN IP
    // because the Vite dev server runs on the same machine as the PHP server
    $host = '127.0.0.1';
    $port = 5173;

    $handle = @fsockopen($host, $port, $errno, $errstr, 0.1);
    $isRunning = $handle !== false;

    if ($handle) {
        fclose($handle);
    }

    return $isRunning;
}

/**
 * Get Base Path (e.g., /github/dole-system)
 */
function getBaseUrl()
{
    $scriptName = $_SERVER['SCRIPT_NAME'];
    $dir = dirname($scriptName);
    // If it's the root, normalize to empty string, otherwise ensure leading/trailing slashes are handled
    return rtrim($dir, '/\\');
}

/**
 * Load Vite assets (dev or production)
 */
function vite($entry)
{
    $baseUrl = getBaseUrl();

    if (isViteRunning()) {
        // Development mode
        $viteHost = getViteHost();
        echo '    <link rel="modulepreload" href="' . $viteHost . '/@vite/client">' . PHP_EOL;
        echo '    <script type="module" src="' . $viteHost . '/@vite/client"></script>' . PHP_EOL;
        echo '    <script type="module" src="' . $viteHost . '/' . ltrim($entry, './') . '"></script>' . PHP_EOL;
    } else {
        // Production mode - load from manifest
        $manifestPath = __DIR__ . '/../dist/.vite/manifest.json';

        if (file_exists($manifestPath)) {
            $manifest = json_decode(file_get_contents($manifestPath), true);
            $entryKey = ltrim($entry, './');

            if (isset($manifest[$entryKey])) {
                $file = $manifest[$entryKey]['file'];

                // Load CSS with Preload
                if (isset($manifest[$entryKey]['css'])) {
                    foreach ($manifest[$entryKey]['css'] as $cssFile) {
                        $href = $baseUrl . '/dist/' . $cssFile;
                        echo '    <link rel="preload" href="' . $href . '" as="style">' . PHP_EOL;
                        echo '    <link rel="stylesheet" href="' . $href . '">' . PHP_EOL;
                    }
                }

                // Load JS with Preload
                $jsHref = $baseUrl . '/dist/' . $file;
                echo '    <link rel="modulepreload" href="' . $jsHref . '">' . PHP_EOL;
                echo '    <script type="module" src="' . $jsHref . '"></script>' . PHP_EOL;
            }
        }
    }
}
