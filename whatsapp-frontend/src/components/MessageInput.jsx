import { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="p-4 border-t flex gap-2">
      <input
        type="text"
        className="flex-1 border rounded px-4 py-2"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
