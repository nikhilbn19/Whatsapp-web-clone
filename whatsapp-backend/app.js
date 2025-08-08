const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();


app.use('/api/webhook', require('./routes/webhook'));
app.use('/api/conversations', require('./routes/conversations'));


const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST']
  }
});


app.set('io', io);

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);
});


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
