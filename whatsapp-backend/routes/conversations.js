const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/', async (req, res) => {
  try {
    const messages = await Message.aggregate([
      { $sort: { timestamp: -1 } },
      {
        $group: {
          _id: '$wa_id',
          name: { $first: '$name' },
          lastMessage: { $first: '$text' },
          lastTimestamp: { $first: '$timestamp' },
        }
      },
      { $sort: { lastTimestamp: -1 } }
    ]);

    res.json(messages);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:wa_id', async (req, res) => {
  try {
    const { wa_id } = req.params;
    const messages = await Message.find({ wa_id }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/send-message', async (req, res) => {
  try {
    const { wa_id, name, text } = req.body;

    const newMessage = new Message({
      message_id: `local-${Date.now()}`,
      wa_id,
      name,
      text,
      from: process.env.BUSINESS_PHONE || '918329446654',
      to: wa_id,
      timestamp: Date.now() / 1000,
      direction: 'out',
      status: 'sent',
      conversation_id: null
    });

    await newMessage.save();

    
    const io = req.app.get('io');
    io.emit('newMessage', newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
