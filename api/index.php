<?php
/**
 * Vercel PHP Router
 * This file routes requests to the appropriate PHP files since Vercel
 * enforces that all functions must be inside the /api directory.
 */

$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);

// Simple routing logic based on your project structure
if ($path === '/' || $path === '/index.php') {
    require __DIR__ . '/../index.php';
    exit;
}

if (strpos($path, '/dashboard') === 0) {
    require __DIR__ . '/../frontend/dashboard/index.php';
    exit;
}

// Fallback to root index.php for any other unmatched routes
// Static files (dist, images) should be handled by vercel.json routes before reaching here
require __DIR__ . '/../index.php';
