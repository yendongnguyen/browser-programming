# Notes App — Full-Stack Web Application

A simple, fully deployed notes app demonstrating the complete web development workflow: frontend, backend, database, and deployment.

**Features:**
- Add new notes
- View all notes with timestamps
- Delete notes
- Data persists across page refreshes (stored in Supabase)

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (Fetch API)
- **Backend**: Node.js + Express.js
- **Database**: Supabase (PostgreSQL with REST API)
- **Backend Hosting**: Render
- **Frontend Hosting**: Vercel
- **Version Control**: GitHub

## Live Application

🚀 **Frontend (Vercel)**: https://notes-app-dong.vercel.app/

📡 **Backend API (Render)**: https://notes-app-backend-rh1j.onrender.com

## GitHub Repository

📦 **Full Project**: https://github.com/yendongnguyen/browser-programming/tree/main/notes-app

## Architecture Diagram

```
User Browser (Vercel)
        ↓ (fetch)
Render Backend API
        ↓ (HTTPS REST)
Supabase PostgreSQL
        ↓ (data)
Notes Table
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/notes` | List all notes (ordered by created_at DESC) |
| POST | `/notes` | Create a new note (body: `{content: string}`) |
| DELETE | `/notes/:id` | Delete a note by ID |

## Local Development

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Setup

1. **Clone repository**
```bash
git clone https://github.com/yendongnguyen/browser-programming.git
cd browser-programming/notes-app
```

2. **Backend Setup**
```bash
cd backend
npm install
# Create .env file with:
# SUPABASE_URL=https://viksesuspynhkecunded.supabase.co
# SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
# PORT=3000
node server.js
```

3. **Frontend Setup** (in another terminal)
```bash
cd frontend
npx serve -p 5000 .
# Open http://localhost:5000
```

## Deployment

### Backend (Render)
1. Create Render account
2. Connect GitHub repo
3. Create Web Service with Root Directory: `notes-app/backend`
4. Set environment variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
5. Start command: `node server.js`

### Frontend (Vercel)
1. Create Vercel account
2. Import GitHub repo
3. Set Root Directory: `notes-app/frontend`
4. Deploy

## Project Structure

```
notes-app/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── main.js
├── backend/
│   ├── server.js
│   ├── test-db.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

## Notes

- `.env` file is excluded from version control (see `.gitignore`)
- Service role key must be kept secret; never commit to Git
- Render free tier may have initial startup delay on first request
- Database is managed on Supabase; table schema includes `id`, `content`, `created_at`

## Learning Outcomes

This project demonstrates:
- ✅ Full-stack architecture (frontend → backend → database)
- ✅ REST API design and implementation
- ✅ Database integration (Supabase PostgreSQL)
- ✅ CORS handling in Express
- ✅ Environment variable management
- ✅ Multi-platform deployment (Vercel, Render, Supabase)
- ✅ Git workflows and GitHub integration

## Author

yendongnguyen — Savonia UAS, Browser Programming

---

**Submission Date**: March 28, 2026


