require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase client with service role key (admin access)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.get('/', (req, res) => res.send({ ok: true }));

// GET /notes — fetch all notes ordered by created_at DESC
app.get('/notes', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('notes')
      .select('id, content, created_at')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// POST /notes — create a new note
app.post('/notes', async (req, res) => {
  const { content } = req.body;
  if (!content || !content.trim()) {
    return res.status(400).json({ error: 'Content required' });
  }
  
  try {
    const { data, error } = await supabase
      .from('notes')
      .insert([{ content }])
      .select();
    
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create note' });
  }
});

// DELETE /notes/:id — delete a note by id
app.delete('/notes/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const { data, error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id)
      .select();
    
    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
