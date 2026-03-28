# Notes App — fullstack example

Simple notes app (add / view / delete) using:

- Frontend: plain HTML/CSS/JS
- Backend: Node.js + Express
- Database: Supabase (Postgres)

Quick start (local):

1. Backend

```powershell
cd backend
npm install
# create .env with DATABASE_URL and PORT
node server.js
```

2. Frontend

Open `frontend/index.html` in your browser, or serve static files (recommended):

```powershell
cd frontend
npx serve -p 5000 .
# then open http://localhost:5000
```

Before deploying, update `frontend/main.js` `API_BASE` to point to your deployed backend (Render) URL.

Deployment checklist: GitHub → Render (backend) → Vercel (frontend). See assignment instructions for details.
