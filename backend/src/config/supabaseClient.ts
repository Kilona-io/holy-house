import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.API_KEY_SERVICE_ROLE || '';

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
