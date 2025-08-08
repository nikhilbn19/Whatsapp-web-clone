const MessageBubble = ({ message }) => {
  const isOutgoing = message.direction === 'out';
  const bubbleColor = isOutgoing ? 'bg-green-100' : 'bg-white';

  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
      <div className={`rounded px-4 py-2 max-w-sm shadow ${bubbleColor}`}>
        <div className="text-sm">{message.text}</div>
        <div className="text-xs text-gray-400 text-right mt-1">
          {new Date(message.timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          {isOutgoing && ` ✓ ${message.status}`}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
