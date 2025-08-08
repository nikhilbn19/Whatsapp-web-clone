
# WhatsApp Web Clone – Full Stack Project

A full-stack **WhatsApp Web Clone** built with **React**, **Tailwind CSS**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. This project simulates a WhatsApp-like experience including real-time messaging, responsive design, and webhook-based message ingestion.

---

## 🌐 Live Demo

- **Frontend**: [Vercel URL](https://whatsapp-web-clone-lake.vercel.app/)
- **Backend**: [Render API URL](https://whatsapp-web-clone-f6k9.onrender.com)

---

## 🧩 Project Structure

```
whatsapp-web-clone/
├── whatsapp-frontend/     # React + Tailwind + Axios + Socket.IO-client
└── whatsapp-backend/      # Express + MongoDB + Socket.IO + Webhooks
```

---

## 🧑‍💻 Tech Stack

**Frontend:**
- React (Hooks)
- Tailwind CSS
- Axios
- Socket.IO Client

**Backend:**
- Node.js with Express
- MongoDB (Mongoose)
- Socket.IO Server
- Webhook endpoint to process WhatsApp messages

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone https://github.com/nikhilbn19/Whatsapp-web-clone.git
cd whatsapp-web-clone
```

### 📦 Backend Setup

```bash
cd whatsapp-backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your-mongodb-uri
```

Run the server:

```bash
node index.js
```

### 🖥️ Frontend Setup

```bash
cd whatsapp-frontend
npm install
```

Create a `.env` file:

```
VITE_API_BASE_URL=https://whatsapp-web-clone-f6k9.onrender.com
```

Run the frontend locally:

```bash
npm run dev
```

---

## 🚀 Deployment

### Backend on Render

1. Push backend folder to GitHub
2. Create a new Web Service on [Render](https://whatsapp-web-clone-f6k9.onrender.com)
3. Add environment variables
4. Use `index.js` as entry point
5. Deploy

### Frontend on Vercel

1. Push frontend folder to GitHub
2. Import project into [Vercel](https://whatsapp-web-clone-lake.vercel.app/)
3. Set environment variable:
   - `VITE_API_BASE_URL=https://whatsapp-web-clone-f6k9.onrender.com`
4. Deploy

---

## 💡 Features

- WhatsApp Web inspired UI
- Responsive on all screen sizes
- Sidebar with conversation list
- Message view with status ticks
- Webhook ingestion for new messages
- REST APIs to fetch and send messages
- Real-time message updates using WebSocket (Socket.IO)

---

## ✅ Evaluation Criteria Checklist

- ✅ Closeness to WhatsApp Web UI
- ✅ Mobile responsiveness
- ✅ Well-structured backend APIs
- ✅ Real-time updates (Bonus ✅)
- ✅ Clean and readable code

---


© 2025 WhatsApp Web Clone
