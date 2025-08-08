import { useEffect, useState } from 'react';
import axios from 'axios';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedChat) {
      axios.get(`http://localhost:5000/api/conversations/${selectedChat._id}`)
        .then(res => setMessages(res.data))
        .catch(err => console.error(err));
    }
  }, [selectedChat]);

  const handleSend = async (text) => {
    const payload = {
      wa_id: selectedChat._id,
      name: selectedChat.name,
      text
    };

    const res = await axios.post('http://localhost:5000/api/conversations/send-message', payload);
    setMessages(prev => [...prev, res.data]);
  };

  if (!selectedChat) {
    return <div className="w-2/3 flex items-center justify-center text-gray-500">Select a chat to start</div>;
  }

  return (
    <div className="w-2/3 flex flex-col justify-between bg-gray-50">
      <div className="p-4 border-b font-semibold">{selectedChat.name}</div>
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map(msg => (
          <MessageBubble key={msg.message_id} message={msg} />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
