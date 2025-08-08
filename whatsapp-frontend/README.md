
# WhatsApp Web Clone – Frontend

This is the frontend of the **WhatsApp Web Clone** built using **React** and **Tailwind CSS**. It connects to the backend via REST APIs and supports real-time message updates using **Socket.IO**.

---

## 📦 Features

- Chat UI similar to WhatsApp Web
- Mobile responsive design
- Conversation list and message window
- Send messages via API
- Real-time message updates with WebSocket (Socket.IO)
- Online deployment ready (Vercel)

---

## 🧑‍💻 Tech Stack

- **React** (with Hooks)
- **Tailwind CSS**
- **Axios** for API requests
- **Socket.IO Client** for real-time communication

---

## 📁 Folder Structure

```
whatsapp-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── MessageBubble.jsx
│   │   └── MessageInput.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
└── tailwind.config.js
```

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/nikhilbn19/Whatsapp-web-clone.git
cd whatsapp-web-clone/whatsapp-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the root and add:

```
VITE_API_BASE_URL=https://whatsapp-web-clone-f6k9.onrender.com
```

### 4. Run locally

```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`.

---

## 🚀 Deploy to Vercel

- Connect your GitHub repository to [Vercel](https://vercel.com)
- Set environment variable in **Project Settings → Environment Variables**:
  - `VITE_API_BASE_URL=https://whatsapp-web-clone-f6k9.onrender.com`
- Deploy! ✅

---

## ✅ Evaluation Criteria Covered

- ✅ WhatsApp Web-like UI
- ✅ Responsive on mobile
- ✅ Structured and clean frontend
- ✅ Real-time updates (Bonus)
