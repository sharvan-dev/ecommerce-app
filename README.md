# Ecommerce App

This is an ecommerce application with three parts: frontend, backend, and admin.

## Deployment on Vercel

Since this is a monorepo with multiple applications, you need to deploy each part separately on Vercel.

### 1. Deploy Backend

- Go to Vercel dashboard
- Create new project
- Connect to this repo, set root directory to `backend`
- Set environment variables:
  - MONGODB_URI
  - CLOUDINARY_NAME
  - CLOUDINARY_API_KEY
  - CLOUDINARY_SECRET_KEY
  - JWT_SECRET
  - PORT (optional, defaults to 4000)
- Deploy

Get the deployed URL, e.g., https://your-backend.vercel.app

### 2. Deploy Frontend

- Create new project
- Root directory: `frontend`
- Environment variables:
  - VITE_BACKEND_URL = https://your-backend.vercel.app
- Deploy

### 3. Deploy Admin

- Create new project
- Root directory: `admin`
- Environment variables:
  - VITE_BACKEND_URL = https://your-backend.vercel.app
- Deploy

## Local Development

For local development, set up environment variables in .env files in each folder.

For frontend and admin, set VITE_BACKEND_URL=http://localhost:4000

Run backend: cd backend && npm install && npm start

Run frontend: cd frontend && npm install && npm run dev

Run admin: cd admin && npm install && npm run dev