import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bybpowkwfecaagbwjuyi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5YnBvd2t3ZmVjYWFnYndqdXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NDc5OTMsImV4cCI6MjAxNzAyMzk5M30.W1RPq_kgdL8Eh4JMBBErK0WqJkNCceSVWoU8RWXULS8'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log(supabase)
export default function useSupabase () {
  return supabase
}
