import { createClient } from '@supabase/supabase-js'

// The ! at the end tells TypeScript we are sure these variables will exist
// (because we set them in Vercel and .env.local)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)