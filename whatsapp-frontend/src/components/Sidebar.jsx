import { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = ({ setSelectedChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/conversations')
      .then(res => setChats(res.data))
      .catch(err => console.error(err));
  }, []);

  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="w-full h-1/2 md:h-full md:w-1/3 border-r bg-white flex flex-col">
      <div className="px-4 py-3 flex items-center justify-between border-b bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            W
          </div>
          <h1 className="text-lg font-semibold text-gray-800">WhatsApp</h1>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 py-2 border-b bg-white">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full px-3 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      
      <div className="flex-1 overflow-y-auto">
        {chats.map(chat => (
          <div
            key={chat._id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
            onClick={() => setSelectedChat(chat)}
          >
            {/* Avatar */}
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
              {getInitials(chat.name)}
            </div>

            {/* Chat info */}
            <div className="flex-1 border-b border-gray-100 pb-2">
              <div className="flex justify-between items-center">
                <div className="font-medium text-sm">{chat.name}</div>
                <div className="text-xs text-gray-400">
                  {chat.lastTimestamp && new Date(chat.lastTimestamp * 1000).toLocaleTimeString([], {
                    hour: '2-digit', minute: '2-digit'
                  })}
                </div>
              </div>
              <div className="text-xs text-gray-500 truncate">{chat.lastMessage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
