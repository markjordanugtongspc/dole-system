<?php
require_once __DIR__ . '/config/db.php';

// Handle API POST request for testing DB
if (isset($_GET['action'])) {
    header('Content-Type: application/json');
    if ($_GET['action'] === 'test_db') {
        try {
            $pdo = getDbConnection();
            echo json_encode([
                'success' => true, 
                'message' => 'Connection established successfully!', 
                'mode' => useSupabase() ? 'Supabase (PostgreSQL)' : 'Docker / Laragon (MySQL)'
            ]);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Diagnostics - DOLE-GIP System</title>
    <!-- Tailwind CSS (via CDN for standalone tester) -->
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @theme {
        --color-royal-blue: #0038A8;
        --color-golden-yellow: #FCD116;
      }
    </style>
    <!-- SweetAlert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-4 md:p-10 font-sans text-gray-800">
    <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <!-- Header -->
        <div class="bg-royal-blue text-white p-8">
            <h1 class="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.965 11.965 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                System Diagnostics Tool
            </h1>
            <p class="text-blue-100 mt-2 font-medium tracking-wide">DOLE-GIP Environment Configuration Manager</p>
        </div>

        <!-- Custom tabs -->
        <div class="flex border-b border-gray-200">
            <button class="tab-btn w-1/2 py-4 text-center font-bold text-sm uppercase tracking-wider text-royal-blue border-b-4 border-royal-blue transition-colors cursor-pointer" data-target="local-tab">
                Local (Docker / Laragon)
            </button>
            <button class="tab-btn w-1/2 py-4 text-center font-bold text-sm uppercase tracking-wider text-gray-400 border-b-4 border-transparent hover:text-gray-600 transition-colors cursor-pointer" data-target="supabase-tab">
                Production (Supabase)
            </button>
        </div>

        <div class="p-8">
            
            <!-- Global Test Connection Action -->
            <div class="bg-indigo-50 rounded-2xl p-6 mb-8 border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h3 class="text-indigo-900 font-bold text-lg">Live Connection Test</h3>
                    <p class="text-indigo-700 text-sm mt-1">Verify current database connectivity based on your <code class="bg-indigo-100 px-1 py-0.5 rounded font-bold">.env</code> configuration.</p>
                </div>
                <button onclick="testConnection()" class="bg-royal-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2 whitespace-nowrap">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    Run Diagnostics
                </button>
            </div>

            <!-- TAB CONTENT: LOCAL -->
            <div id="local-tab" class="tab-content block animate__animated animate__fadeIn">
                <div class="space-y-6">
                    <div class="bg-white rounded-2xl p-6 border-l-4 border-royal-blue shadow-md border border-gray-100">
                        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                            <span class="bg-royal-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                            Docker Setup (Recommended)
                        </h2>
                        <p class="text-gray-600 text-sm mb-4">When using the full Docker environment, the database schema and sample data are automatically injected during the first build via the <code class="bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-mono text-xs">docker-entrypoint-initdb.d</code> mapping.</p>
                        <p class="text-gray-600 text-sm">If you need to manually wipe and rebuild your local container database, run this in terminal:</p>
                        <div class="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-sm mt-3 overflow-x-auto shadow-inner">
                            docker compose down -v && docker compose up --build -d
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-6 border-l-4 border-gray-400 shadow-md border border-gray-100">
                        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                            <span class="bg-gray-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                            Laragon Manual Setup (Fallback)
                        </h2>
                        <p class="text-gray-600 text-sm mb-3">If you are skipping Docker and running Laragon directly, use an SQL client (like HeidiSQL) to manually configure your MySQL.</p>
                        <ul class="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2">
                            <li>Ensure Laragon's MySQL Service is started.</li>
                            <li>Create an empty database named <strong class="text-royal-blue">dole_db</strong>.</li>
                            <li>Import the <code class="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">./config/database_schema.sql</code> file.</li>
                            <li>Import the <code class="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">./config/sample_data.sql</code> file.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- TAB CONTENT: SUPABASE -->
            <div id="supabase-tab" class="tab-content hidden animate__animated animate__fadeIn">
                <div class="space-y-6">
                    <div class="bg-white rounded-2xl p-6 border-l-4 border-emerald-500 shadow-md border border-gray-100">
                        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                            <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                            Supabase Cloud Configuration
                        </h2>
                        <p class="text-gray-600 text-sm mb-4">To deploy into remote production, you must copy the contents of <code class="bg-gray-100 text-emerald-600 font-bold px-1 py-0.5 rounded font-mono text-xs">.env.supabase.backup</code> and paste them to override your main <code class="bg-gray-100 px-1 py-0.5 text-royal-blue font-bold rounded font-mono text-xs">.env</code>.</p>
                        
                        <div class="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 flex gap-3 text-sm font-bold uppercase tracking-wide">
                            <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            Vite Asset Rebuild is required after switching!
                        </div>
                        <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-sm mt-3 overflow-x-auto shadow-inner leading-relaxed">
                            <span class="text-slate-500"># If using Docker Container:</span><br>
                            <span class="text-emerald-400">docker compose exec app npm run build</span><br>
                            <br>
                            <span class="text-slate-500"># If Node is installed on your local Windows:</span><br>
                            <span class="text-emerald-400">npm run build</span>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-6 border-l-4 border-emerald-500 shadow-md border border-gray-100">
                        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                            <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                            Supabase SQL Editor Migrations
                        </h2>
                        <p class="text-gray-600 text-sm mb-3">To build your architecture inside Supabase:</p>
                        <ul class="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2">
                            <li>Open your <a href="https://supabase.com/dashboard" target="_blank" class="text-emerald-600 hover:text-emerald-700 underline font-bold cursor-pointer">Supabase Dashboard</a>.</li>
                            <li>Navigate to the <strong>SQL Editor</strong> menu.</li>
                            <li>Run the contents of <code class="bg-gray-100 font-bold px-1 py-0.5 rounded font-mono text-xs">config/database_schema.sql</code></li>
                            <li>Then run <code class="bg-gray-100 font-bold px-1 py-0.5 rounded font-mono text-xs">config/sample_data.sql</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- API Testing Section -->
            <div class="mt-8 border-t border-gray-200 pt-8">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    API Health Check
                </h3>
                <button onclick="testAPI()" class="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer text-sm mb-2 flex items-center gap-2">
                    Test /api/beneficiaries.php
                </button>
            </div>

            <!-- Env Config -->
            <div class="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                 <h3 class="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Loaded Environment (.env)</h3>
                 <div class="grid grid-cols-[160px_1fr] text-sm gap-y-3">
                    <div class="text-gray-500 font-medium">Database Engine:</div>
                    <div class="font-mono font-bold text-royal-blue"><?= env('DB_CONNECTION', 'Not Set') ?></div>
                    <div class="text-gray-500 font-medium">Host Address:</div>
                    <div class="font-mono font-bold text-gray-900"><?= env('DB_HOST', 'Not Set') ?></div>
                    <div class="text-gray-500 font-medium">App Timezone:</div>
                    <div class="font-mono font-bold text-gray-900"><?= env('APP_TIMEZONE', 'Not Set') ?></div>
                    <div class="text-gray-500 font-medium">Supabase Mode:</div>
                    <div class="font-mono font-bold text-<?= env('USE_SUPABASE') == 'true' ? 'emerald-600' : 'red-500' ?>"><?= env('USE_SUPABASE', 'Not Set') ?></div>
                 </div>
            </div>

        </div>
    </div>

    <!-- Modals Script (SweetAlert2) -->
    <script>
        // Tab Switching Logic
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Reset all tabs
                document.querySelectorAll('.tab-btn').forEach(t => {
                    t.classList.remove('text-royal-blue', 'border-royal-blue');
                    t.classList.add('text-gray-400', 'border-transparent');
                });
                document.querySelectorAll('.tab-content').forEach(c => {
                    c.classList.add('hidden');
                    c.classList.remove('block');
                });

                // Activate clicked tab
                const target = e.target;
                target.classList.remove('text-gray-400', 'border-transparent');
                target.classList.add('text-royal-blue', 'border-royal-blue');
                
                const contentId = target.getAttribute('data-target');
                document.getElementById(contentId).classList.remove('hidden');
                document.getElementById(contentId).classList.add('block');
            });
        });

        // Test DB Connection Function
        async function testConnection() {
            Swal.fire({
                title: 'Diagnosing Connection...',
                html: 'Attempting to ping the active database engine...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                const response = await fetch('system-tester.php?action=test_db');
                const data = await response.json();

                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Connection Established!',
                        html: `<div class="mt-4"><span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Active Mode: ${data.mode}</span></div><p class="mt-4 text-gray-600">${data.message}</p>`,
                        confirmButtonColor: '#0038A8',
                        customClass: {
                            popup: 'rounded-3xl shadow-2xl',
                            confirmButton: 'rounded-xl font-bold uppercase tracking-widest text-xs px-8 py-3'
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Connection Failed',
                        text: data.error,
                        confirmButtonColor: '#ef4444',
                        customClass: {
                            popup: 'rounded-3xl',
                            confirmButton: 'rounded-xl font-bold uppercase tracking-widest text-xs px-8 py-3'
                        }
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Network Error',
                    text: error.message,
                    confirmButtonColor: '#ef4444'
                });
            }
        }

        // Test API Endpoint
        async function testAPI() {
            Swal.fire({
                title: 'Testing API Endpoint...',
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });

            try {
                const response = await fetch('/api/beneficiaries.php');
                const textResponse = await response.text();
                
                let data;
                try {
                    data = JSON.parse(textResponse);
                } catch (e) {
                    throw new Error("Invalid JSON returned: " + textResponse.substring(0,100) + "...");
                }

                if (data.success || data.beneficiaries) {
                    const count = data.beneficiaries ? data.beneficiaries.length : 0;
                    Swal.fire({
                        icon: 'success',
                        title: 'API Working Perfectly',
                        html: `Fetched <b class="text-xl text-emerald-600 mx-1">${count}</b> test records currently inside the Database.`,
                        confirmButtonColor: '#0038A8',
                        customClass: {
                            popup: 'rounded-3xl shadow-2xl',
                            confirmButton: 'rounded-xl font-bold uppercase tracking-widest text-xs px-8 py-3'
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'API Error',
                        text: data.error || 'Unknown error occurred.',
                        confirmButtonColor: '#eab308',
                        customClass: { popup: 'rounded-3xl' }
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Fetch Error',
                    text: error.message,
                    confirmButtonColor: '#ef4444',
                    customClass: { popup: 'rounded-3xl' }
                });
            }
        }
    </script>
</body>
</html>