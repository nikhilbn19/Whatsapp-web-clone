const Message = require('../models/Message');

const handleWebhook = async (req, res) => {
  try {
    const body = req.body;

    const changes = body?.metaData?.entry?.[0]?.changes || [];

    for (const change of changes) {
      const value = change.value;

      if (value?.messages) {
        for (const msg of value.messages) {
          const isIncoming = msg.from !== value.metadata.display_phone_number;

          const contact = value.contacts?.[0];
          const messageData = {
            message_id: msg.id,
            wa_id: contact?.wa_id,
            name: contact?.profile?.name,
            text: msg.text?.body || '',
            from: msg.from,
            to: isIncoming ? value.metadata.display_phone_number : contact.wa_id,
            timestamp: +msg.timestamp,
            direction: isIncoming ? 'in' : 'out',
            status: 'sent',
            conversation_id: null,
          };

          await Message.findOneAndUpdate(
            { message_id: msg.id },
            messageData,
            { upsert: true, new: true }
          );
        }
      }

      if (value?.statuses) {
        for (const statusObj of value.statuses) {
          await Message.findOneAndUpdate(
            { message_id: statusObj.id },
            { status: statusObj.status }
          );
        }
      }
    }

    return res.status(200).json({ message: 'Webhook processed' });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { handleWebhook };
