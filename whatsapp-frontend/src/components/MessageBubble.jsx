import { BsCheck, BsCheckAll } from 'react-icons/bs';

const MessageBubble = ({ message }) => {
  const isOutgoing = message.direction === 'out';


  const bubbleStyle = isOutgoing
    ? 'bg-green-200 text-gray-900 rounded-tl-xl rounded-bl-xl rounded-tr-xl'
    : 'bg-white text-gray-900 rounded-tr-xl rounded-br-xl rounded-tl-xl';

  const getStatusIcon = (status) => {
    if (status === 'sent') return <BsCheck className="inline ml-1 text-xs text-gray-500" />;
    if (status === 'delivered') return <BsCheckAll className="inline ml-1 text-xs text-gray-500" />;
    if (status === 'read') return <BsCheckAll className="inline ml-1 text-xs text-blue-500" />;
    return null;
  };
  
  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} px-2`}>
      <div className={`w-fit max-w-[80%] sm:max-w-md px-4 py-2 shadow-md break-words ${bubbleStyle}`}>
       <div className="text-sm whitespace-pre-wrap">
            {typeof message.text === 'string' ? message.text : message.text?.body || '[no text]'}
        </div>

        <div className="text-xs text-gray-500 text-right mt-1 flex items-center justify-end gap-1">
          {new Date(message.timestamp * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
          {isOutgoing && getStatusIcon(message.status)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
