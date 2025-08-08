import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (selectedChat) {
      axios.get(`http://localhost:5000/api/conversations/${selectedChat._id}`)
        .then(res => setMessages(res.data))
        .catch(err => console.error(err));
    }
  }, [selectedChat]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a chat to start
      </div>
    );
  }

  return (
    <div className="w-full h-1/2 md:h-full md:w-2/3 flex flex-col bg-gray-100 relative">
      <div className="flex items-center px-4 py-3 bg-white border-b">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
          {selectedChat.name?.[0]}
        </div>
        <div className="ml-3">
          <div className="font-semibold text-gray-800 text-sm">{selectedChat.name}</div>
          <div className="text-xs text-gray-500">{selectedChat._id}</div>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {messages.map((msg, index) => (
          <MessageBubble key={msg.message_id || index} message={msg} />
        ))}
        <div ref={chatEndRef} />
      </div>

      
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
