# 📦 WhatsApp Clone - Backend

This is the backend server for a WhatsApp Web Clone. It handles:

- Message storage in MongoDB
- Sending/receiving messages via REST APIs
- Webhook integration (e.g., WhatsApp Business API)
- Real-time messaging using Socket.IO (WebSockets)

---

## 🔧 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Socket.IO (real-time)
- REST API
- CORS + dotenv

---

## 📁 Project Structure

```
whatsapp-backend/
│
├── models/               # Mongoose schemas (Message.js)
├── routes/               # API routes
│   ├── conversations.js  # Message send/fetch routes
│   └── webhook.js        # Webhook listener (e.g., WhatsApp API)
│
├── utils/
│   └── db.js             # MongoDB connection helper
│
├── .env                  # Environment variables
├── app.js                # Main server + socket entry point
└── package.json
```

---

## 📦 Setup & Run

### 1. Clone the repo

```bash
git clone https://github.com/nikhilbn19/Whatsapp-web-clone.git
cd whatsapp-web-clone/whatsapp-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb+srv://your_mongo_url
```

### 4. Run the server

```bash
# Run locally
npm start

# Or with nodemon
npx nodemon app.js
```

Server will run on:  
```
http://localhost:5000
```

---

## 🧪 API Endpoints

### ✅ Get All Conversations
```
GET /api/conversations
```

### ✅ Get All Messages of a Contact
```
GET /api/conversations/:wa_id
```

### ✅ Send Message
```
POST /api/conversations/send-message

Body:
{
  "wa_id": "92996xxxxxx",
  "name": "John Doe",
  "text": "Hello!"
}
```

### ✅ WhatsApp Webhook (Optional)
```
POST /api/webhook
```

---

## 🔁 Real-time with WebSockets

Socket.IO is used to push new messages to the frontend automatically.

- When a message is sent (via API), it is **broadcast** to all connected clients using:

```js
io.emit('newMessage', newMessage);
```

- Frontend listens using:

```js
socket.on('newMessage', msg => { ... });
```

---

## 📡 Deployment

### Recommended Backend Deployment
- Render: https://render.com
- Railway: https://railway.app
- Glitch: https://glitch.com

Make sure to:
- Enable CORS for your frontend origin
- Use a hosted MongoDB (like Atlas)
- Set environment variables properly in the dashboard

---

## 🔐 Notes

- Use HTTPS in production for WebSocket support
- Always sanitize incoming data (you can use `express-validator`)
- Consider adding authentication and rate limiting for security

---

## 🧑‍💻 Author

Built with ❤️ by NIKHIL B N
