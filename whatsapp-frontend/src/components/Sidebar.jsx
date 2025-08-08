import { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = ({ setSelectedChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/conversations')
      .then(res => setChats(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="w-1/3 border-r bg-white overflow-y-auto">
      {chats.map(chat => (
        <div key={chat._id} className="p-4 hover:bg-gray-100 cursor-pointer"
          onClick={() => setSelectedChat(chat)}>
          <div className="font-bold">{chat.name}</div>
          <div className="text-sm text-gray-500 truncate">{chat.lastMessage}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
