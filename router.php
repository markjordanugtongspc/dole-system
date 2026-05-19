<?php
/**
 * Page Router (cloud / Vercel fallback)
 * Maps incoming page requests to their corresponding PHP files.
 * This routes whole-site pages (/, /dashboard, /frontend/*) — it is NOT an API endpoint.
 */

$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);

// Simple routing logic based on the project structure
if ($path === '/' || $path === '/index.php') {
    require __DIR__ . '/index.php';
    exit;
}

if (strpos($path, '/dashboard') === 0) {
    require __DIR__ . '/frontend/dashboard/index.php';
    exit;
}

if (strpos($path, '/frontend/') === 0) {
    // Safely map any /frontend/ requests to their corresponding physical file or folder's index.php
    $targetPath = realpath(__DIR__) . $path;

    if (is_dir($targetPath)) {
        $targetPath = rtrim($targetPath, '/') . '/index.php';
    }

    if (file_exists($targetPath)) {
        require $targetPath;
        exit;
    }
}

// Fallback to root index.php for any other unmatched routes
// Static files (dist, images) should be handled by vercel.json routes before reaching here
require __DIR__ . '/index.php';
