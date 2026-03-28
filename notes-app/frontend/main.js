// API base: change to your deployed backend (Render) URL before deploying frontend
const API_BASE = 'http://localhost:3000';

const notesContainer = document.getElementById('notes-container');
const addBtn = document.getElementById('add-btn');
const contentEl = document.getElementById('note-content');

async function fetchNotes() {
  try {
    const res = await fetch(`${API_BASE}/notes`);
    if (!res.ok) throw new Error('Failed to fetch');
    const notes = await res.json();
    renderNotes(notes);
  } catch (err) {
    console.error(err);
    notesContainer.innerHTML = '<p class="error">Could not load notes.</p>';
  }
}

function renderNotes(notes) {
  if (!notes || notes.length === 0) {
    notesContainer.innerHTML = '<p>No notes yet.</p>';
    return;
  }

  notesContainer.innerHTML = '';
  for (const note of notes) {
    const el = document.createElement('div');
    el.className = 'note';
    const left = document.createElement('div');
    left.innerHTML = `<div class="content">${escapeHtml(note.content)}</div><div class="meta">${new Date(note.created_at).toLocaleString()}</div>`;
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';
    del.onclick = () => deleteNote(note.id);
    el.appendChild(left);
    el.appendChild(del);
    notesContainer.appendChild(el);
  }
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function addNote() {
  const content = contentEl.value.trim();
  if (!content) return alert('Please write a note first.');
  try {
    const res = await fetch(`${API_BASE}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    if (!res.ok) throw new Error('Failed to add note');
    contentEl.value = '';
    fetchNotes();
  } catch (err) {
    console.error(err);
    alert('Could not add note');
  }
}

async function deleteNote(id) {
  if (!confirm('Delete this note?')) return;
  try {
    const res = await fetch(`${API_BASE}/notes/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Delete failed');
    fetchNotes();
  } catch (err) {
    console.error(err);
    alert('Could not delete note');
  }
}

addBtn.addEventListener('click', addNote);
window.addEventListener('DOMContentLoaded', fetchNotes);
