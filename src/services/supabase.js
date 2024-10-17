import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cjkiiosbakwkplwtsydy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqa2lpb3NiYWt3a3Bsd3RzeWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNzc3MDYsImV4cCI6MjA0NDc1MzcwNn0.MtjPQCWC1hI8mEjcAdY2lK-T2-6lLDEH_nL5B-w-C5E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
