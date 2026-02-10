<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Setup - DOLE-GIP System</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        h1 {
            color: #2d3748;
            margin-bottom: 10px;
            font-size: 32px;
        }

        .subtitle {
            color: #718096;
            margin-bottom: 30px;
            font-size: 14px;
        }

        .section {
            background: #f7fafc;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 20px;
            border-left: 4px solid #667eea;
        }

        .section h2 {
            color: #2d3748;
            font-size: 18px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .status {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .status.success {
            background: #c6f6d5;
            color: #22543d;
        }

        .status.error {
            background: #fed7d7;
            color: #742a2a;
        }

        .status.pending {
            background: #feebc8;
            color: #7c2d12;
        }

        .code-block {
            background: #2d3748;
            color: #e2e8f0;
            padding: 16px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            overflow-x: auto;
            margin: 12px 0;
        }

        .step {
            background: white;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 12px;
            border: 2px solid #e2e8f0;
        }

        .step-number {
            display: inline-block;
            width: 28px;
            height: 28px;
            background: #667eea;
            color: white;
            border-radius: 50%;
            text-align: center;
            line-height: 28px;
            font-weight: bold;
            margin-right: 12px;
        }

        .btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .btn:hover {
            background: #5568d3;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .btn:disabled {
            background: #cbd5e0;
            cursor: not-allowed;
            transform: none;
        }

        .alert {
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .alert.info {
            background: #bee3f8;
            color: #2c5282;
            border-left: 4px solid #3182ce;
        }

        .alert.warning {
            background: #feebc8;
            color: #7c2d12;
            border-left: 4px solid #dd6b20;
        }

        pre {
            margin: 0;
            white-space: pre-wrap;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>🗄️ Database Setup</h1>
        <p class="subtitle">DOLE-GIP System - MySQL Backend Configuration</p>

        <div class="alert info">
            <strong>📋 Setup Instructions:</strong> Follow the steps below to set up your database backend. Make sure
            XAMPP MySQL is running before proceeding.
        </div>

        <!-- Step 1: Test Connection -->
        <div class="section">
            <h2>
                <span class="step-number">1</span>
                Test Database Connection
            </h2>
            <p style="margin-bottom: 16px; color: #4a5568;">Verify that PHP can connect to your MySQL database.</p>
            <button class="btn" onclick="testConnection()">Test Connection</button>
            <div id="connection-result" style="margin-top: 16px;"></div>
        </div>

        <!-- Step 2: Create Database Schema -->
        <div class="section">
            <h2>
                <span class="step-number">2</span>
                Create Database Schema
            </h2>
            <p style="margin-bottom: 16px; color: #4a5568;">Run the SQL script to create all tables, indexes, and stored
                procedures.</p>
            <div class="alert warning">
                <strong>⚠️ Important:</strong> Open phpMyAdmin at <a href="http://localhost/phpmyadmin" target="_blank"
                    style="color: #c05621; font-weight: bold;">http://localhost/phpmyadmin</a>
            </div>
            <div class="step">
                <strong>Manual Steps:</strong>
                <ol style="margin-left: 20px; margin-top: 8px; color: #4a5568;">
                    <li>Open phpMyAdmin in your browser</li>
                    <li>Click on "SQL" tab at the top</li>
                    <li>Copy the contents of <code
                            style="background: #edf2f7; padding: 2px 6px; border-radius: 4px;">config/database_schema.sql</code>
                    </li>
                    <li>Paste into the SQL query box and click "Go"</li>
                    <li>Verify that database <strong>dole_db</strong> was created</li>
                </ol>
            </div>
            <div class="code-block">
                File location: c:\xampp\htdocs\Github\dole-system\config\database_schema.sql
            </div>
        </div>

        <!-- Step 3: Insert Sample Data -->
        <div class="section">
            <h2>
                <span class="step-number">3</span>
                Insert Sample Data
            </h2>
            <p style="margin-bottom: 16px; color: #4a5568;">Load the 4 sample beneficiaries from the JavaScript files
                into MySQL.</p>
            <div class="step">
                <strong>Manual Steps:</strong>
                <ol style="margin-left: 20px; margin-top: 8px; color: #4a5568;">
                    <li>In phpMyAdmin, select the <strong>dole_db</strong> database</li>
                    <li>Click on "SQL" tab</li>
                    <li>Copy the contents of <code
                            style="background: #edf2f7; padding: 2px 6px; border-radius: 4px;">config/sample_data.sql</code>
                    </li>
                    <li>Paste and click "Go"</li>
                    <li>Verify data by clicking on "beneficiaries" table → "Browse"</li>
                </ol>
            </div>
            <div class="code-block">
                File location: c:\xampp\htdocs\Github\dole-system\config\sample_data.sql
            </div>
        </div>

        <!-- Step 4: Verify API -->
        <div class="section">
            <h2>
                <span class="step-number">4</span>
                Test API Endpoints
            </h2>
            <p style="margin-bottom: 16px; color: #4a5568;">Verify that the backend API is working correctly.</p>
            <button class="btn" onclick="testAPI()">Test API</button>
            <div id="api-result" style="margin-top: 16px;"></div>
        </div>

        <!-- Step 5: Environment Check -->
        <div class="section">
            <h2>
                <span class="step-number">5</span>
                Environment Configuration
            </h2>
            <p style="margin-bottom: 16px; color: #4a5568;">Current environment settings:</p>
            <div id="env-info">
                <div class="code-block">
                    <pre><?php
                    require_once __DIR__ . '/config/db.php';
                    echo "Database: " . env('DB_DATABASE', 'Not Set') . "\n";
                    echo "Host: " . env('DB_HOST', 'Not Set') . "\n";
                    echo "Username: " . env('DB_USERNAME', 'Not Set') . "\n";
                    echo "Timezone: " . env('APP_TIMEZONE', 'Not Set');
                    ?></pre>
                </div>
            </div>
        </div>
    </div>

    <script>
        async function testConnection() {
            const resultDiv = document.getElementById('connection-result');
            resultDiv.innerHTML = '<span class="status pending">Testing...</span>';

            try {
                const response = await fetch('/config/db.php');
                const text = await response.text();

                if (response.ok) {
                    resultDiv.innerHTML = '<span class="status success">✓ Connection Successful</span><div class="code-block" style="margin-top: 12px;">Database connection established successfully!</div>';
                } else {
                    resultDiv.innerHTML = '<span class="status error">✗ Connection Failed</span><div class="code-block" style="margin-top: 12px;">Error: ' + text + '</div>';
                }
            } catch (error) {
                resultDiv.innerHTML = '<span class="status error">✗ Connection Failed</span><div class="code-block" style="margin-top: 12px;">Error: ' + error.message + '</div>';
            }
        }

        async function testAPI() {
            const resultDiv = document.getElementById('api-result');
            resultDiv.innerHTML = '<span class="status pending">Testing API...</span>';

            try {
                const response = await fetch('/api/beneficiaries.php');
                const data = await response.json();

                if (data.success) {
                    const count = data.beneficiaries ? data.beneficiaries.length : 0;
                    resultDiv.innerHTML = `
                        <span class="status success">✓ API Working</span>
                        <div class="code-block" style="margin-top: 12px;">
                            <strong>Response:</strong><br>
                            Found ${count} beneficiaries in database<br>
                            <pre>${JSON.stringify(data, null, 2)}</pre>
                        </div>
                    `;
                } else {
                    resultDiv.innerHTML = '<span class="status error">✗ API Error</span><div class="code-block" style="margin-top: 12px;">Error: ' + data.error + '</div>';
                }
            } catch (error) {
                resultDiv.innerHTML = '<span class="status error">✗ API Failed</span><div class="code-block" style="margin-top: 12px;">Error: ' + error.message + '</div>';
            }
        }
    </script>
</body>

</html>