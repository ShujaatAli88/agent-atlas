# 📊 Data MANIA

![License](https://img.shields.io/badge/license-MIT-blue)
![Python](https://img.shields.io/badge/backend-Python%203.11-blue)
![FastAPI](https://img.shields.io/badge/framework-FastAPI-green)
![React](https://img.shields.io/badge/frontend-React-orange)

> **Data MANIA** is a full‑stack application demonstrating a modern data‑driven platform. It consists of a FastAPI backend with MongoDB and a React frontend with authentication, protected routes, and an interactive dashboard.

---

## 🚀 Project Overview

This repository is separated into two main folders:

- **backend/** – a FastAPI service exposing user registration, login, and site listing endpoints backed by MongoDB (via Motor).
- **frontend/** – a React single‑page application bootstrapped with `create-react-app` that consumes the API and provides a polished UI using `react-router`, `framer-motion` and scoped styles.

The goal of the project is to provide a template for building scalable data platforms with authentication and a rich UI.

---

## 🗂️ Repository Structure

```
/ (root)
├─ backend/                 # Python FastAPI application
│   ├─ requirements.txt      # Python dependencies
│   ├─ main.py               # FastAPI app entrypoint
│   ├─ database_manager.py   # MongoDB connection helper
│   ├─ models.py             # Pydantic models
│   ├─ routers/              # API route definitions
│   │   ├─ users.py          # user auth & site endpoints
│   │   └─ data_api.py       # (currently unused placeholder)
│   ├─ auth.py               # (planned authentication helpers)
│   ├─ crud.py               # (planned data access logic)
│   └─ schemas.py            # (planned request/response schemas)
└─ frontend/                # React client
    ├─ package.json         # npm metadata
    ├─ public/              # static assets (logo, index.html)
    └─ src/
        ├─ App.js           # router setup
        ├─ components/      # UI pieces
        │   ├─ Login.jsx
        │   ├─ Registration.jsx
        │   ├─ ProtectedRoute.jsx
        │   ├─ dashboard.jsx
        │   └─ dashboard.css
        └─ index.js         # ReactDOM bootstrap
```

> 💡 Empty `data_api.py`, `crud.py`, `auth.py` and `schemas.py` are placeholders for future expansion.

---

## 🛠️ Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Backend    | Python 3.11, FastAPI, Motor (async MongoDB)
| Database   | MongoDB (local or Atlas) 
| Frontend   | React, react-router-dom, framer-motion, CSS modules
| Dev Tools  | npm/yarn, uvicorn, dotenv, passlib

---

## ⚙️ Backend Setup

### 📥 Prerequisites

- Python 3.10+ (3.11 recommended)
- MongoDB running locally or a connection string
- `pip` available

### 🧩 Installation

```bash
cd backend
python -m venv .venv           # create virtualenv
. .venv/Scripts/activate        # Windows PowerShell
pip install -r requirements.txt
```

### 🔧 Configuration

Create a `.env` file in `backend/` with:

```env
MONGODB_URL=mongodb://localhost:27017   # or your Atlas URI
```

### 🏁 Run the server

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://127.0.0.1:8000/`.  Open `http://127.0.0.1:8000/docs` for interactive Swagger UI.

### 📬 Available Endpoints

| Method | Path              | Description                     |
|--------|-------------------|---------------------------------|
| GET    | `/`               | Health check                   |
| POST   | `/users/register` | Create new user               |
| POST   | `/users/login`    | Authenticate user (returns user info)
| GET    | `/users/sites`    | List sites (demo data)        |

> 🔐 Currently login returns a success message and user object. JWT support can be added in `routers/users.py`.

---

## 🎨 Frontend Setup

### 📦 Prerequisites

- Node.js 16+ and `npm` or `yarn`

### 📥 Installation

```bash
cd frontend
npm install        # or yarn install
```

### 🔧 Run in development

```bash
npm start          # runs on http://localhost:3000
```

The app proxies API requests to `http://127.0.0.1:8000` (configured in `package.json`).

### 📁 Key Features

- **Login/Registration** forms with client‑side validation
- **ProtectedRoute** ensures `/dashboard` is only accessible when `localStorage.isAuthenticated` is set
- **Dashboard** fetches `/users/sites` and displays clickable site cards
- Lightweight styling with glassmorphism and motion animations

---

## ✅ How to Use

1. Start the MongoDB server.
2. Launch the backend (`uvicorn` as above).
3. In another terminal, launch the frontend (`npm start`).
4. Open `http://localhost:3000` in your browser.
5. Register a new account, then log in to reach the dashboard.

> You can cure CORS issues are handled in `main.py`: all origins and methods are allowed for convenience.

---

## 🧪 Testing & Extensions

- No tests are currently included; you could add `pytest` with fixtures, or React testing library for frontend.
- To add new API routes or collections, update `database_manager`, add models in `models.py`, and define routes in `routers/`.
- JWT authentication support can be introduced using `python-jose` and FastAPI's security utilities.
- A `/sites` management interface, admin capabilities, or integration with real data sources can be implemented.

---

## 🧾 License

This project is distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙌 Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/foo`)  
3. Commit your changes  
4. Push to the branch  
5. Open a pull request

Please follow standard Python formatting (black) and JavaScript linting (eslint) in new contributions.

---

## 📞 Contact

Questions or suggestions? Open an issue or email `yourname@example.com`.

---

⭐ If you found this project helpful, please give it a star!
 
