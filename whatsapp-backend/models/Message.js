const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message_id: String,
  wa_id: String,
  name: String,
  text: String,
  from: String,
  to: String,
  timestamp: Number,
  direction: String,
  status: String,
  conversation_id: String,
});

module.exports = mongoose.model('Message', messageSchema);
