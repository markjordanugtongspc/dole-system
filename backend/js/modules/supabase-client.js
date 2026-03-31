import { createClient } from '@supabase/supabase-js';
import { isSupabaseMode } from './auth.js';

let supabase = null;

if (isSupabaseMode()) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
        try {
            // Initialize Supabase. 
            // We use standard options. You can add auth options if needed.
            supabase = createClient(supabaseUrl, supabaseAnonKey);
            console.log('[SUPABASE SDK] Client Initialized Successfully');
        } catch (e) {
            console.error('[SUPABASE SDK] Failed to initialize client:', e);
        }
    } else {
        console.error('[SUPABASE SDK] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in environment variables. Check your .env file or Vercel Environment Variables.');
    }
} else {
    console.log('[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).');
}

export { supabase };
