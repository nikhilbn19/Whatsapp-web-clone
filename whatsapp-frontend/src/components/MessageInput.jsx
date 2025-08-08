import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { BsEmojiSmile, BsPaperclip } from 'react-icons/bs';

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="p-3 border-t bg-white flex items-center gap-2">
      
      <button className="text-gray-500 hover:text-green-600 transition">
        <BsEmojiSmile size={20} />
      </button>

      
      <button className="text-gray-500 hover:text-green-600 transition">
        <BsPaperclip size={20} />
      </button>

      
      <input
        type="text"
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
        placeholder="Type a message"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
      />

      
      <button
        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
        onClick={handleSend}
      >
        <IoSend size={18} />
      </button>
    </div>
  );
};

export default MessageInput;
