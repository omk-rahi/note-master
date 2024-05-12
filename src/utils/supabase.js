import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzdoucvufsvnrtkikopw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZG91Y3Z1ZnN2bnJ0a2lrb3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0MTMyNjcsImV4cCI6MjAzMDk4OTI2N30.RaAe97IS0Z7mM9UON7hbcc57vbHe4tHtyTrfOnmVsPA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
