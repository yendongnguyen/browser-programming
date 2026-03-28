require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

(async function test() {
  try {
    console.log('Testing Supabase connection...');
    
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    
    // Test: fetch notes count
    const { data, error } = await supabase
      .from('notes')
      .select('id', { count: 'exact' });
    
    if (error) throw error;
    
    console.log('✓ Supabase OK — notes count:', data.length);
    
    // Small delay before exit to allow cleanup
    await new Promise(r => setTimeout(r, 100));
    process.exit(0);
  } catch (err) {
    console.error('✗ Supabase test failed:');
    console.error(err && err.message ? err.message : err);
    console.error('\nHints:');
    console.error('- Verify backend/.env SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are correct');
    console.error('- Ensure the notes table exists in Supabase');
    console.error('- Check that service role key has database access');
    
    // Small delay before exit to allow cleanup
    await new Promise(r => setTimeout(r, 100));
    process.exit(2);
  }
})();
