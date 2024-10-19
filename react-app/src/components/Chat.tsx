import React, { useState } from 'react';
import { Message } from '../Types';

interface ChatWindowProps {
  friendId: number;
  friendName: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

function ChatWindow(props: ChatWindowProps) {
  const { friendId, friendName, messages, onSendMessage } = props;
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSubmit  = (event: React.FormEvent) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  }

  return (
    <div style={{ marginLeft: '60px'}}>
      <h3>Chat with {friendName}</h3>
      <ul>
        {messages.map( (message) => {
          return (
            <li key={message.id}>
              {message.content}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={ (e) => {
            setNewMessage(e.target.value);
          }}
          placeholder="Write a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
