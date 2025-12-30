# User Management & Authentication System – Frontend

## Overview
This is the frontend application for the **User Management & Authentication System**.  
It provides a clean, responsive UI with authentication, role-based dashboards, and secure API integration.

---

## Tech Stack
- React (Vite)
- React Router
- Context API (Auth & Theme)
- Tailwind CSS
- Axios
- React Hot Toast

---

## Features
- User Registration & Login
- Role-based dashboards (Admin / User)
- User profile management
- Admin user management panel
- Protected routes
- Dark / Light theme support
- Proper loading & error states
- Responsive UI

---

## Folder Structure
```
src/
├─ api/
│ └─ axios.js
├─ components/
│ ├─ admin/
│ │ └─ Topbar.jsx
│ └─ ThemeToggle.jsx
├─ context/
│ ├─ AuthContext.jsx
│ └─ ThemeContext.jsx
├─ pages/
│ ├─ Login.jsx
│ ├─ Register.jsx
│ ├─ UserDashboard.jsx
│ └─ AdminDashboard.jsx
├─ routes/
│ └─ ProtectedRoute.jsx
├─ App.jsx
└─ main.jsx
public/
README.md
```

---

## Environment Variables
```
Create a `.env` file in the root directory:

VITE_API_URL
```


> `.env` files are ignored and must not be committed.

---

## Setup Instructions
```
1. Clone the repository:

Install dependencies:

npm install


Run the development server:

npm run dev


Frontend will run at:

http://localhost:5173
```
---
## Authentication Flow

- JWT handled via HTTP-only cookies

- Auth state managed using Context API

- Protected routes based on user role

- Automatic redirect after login

- UI/UX Highlights

- Clean admin-style dashboard

- Responsive layout

- Clear success & error messages

- Dark / Light mode toggle

---
## Notes

- Backend must be running for full functionality

- Admin routes are protected

- Designed to be scalable and production-ready