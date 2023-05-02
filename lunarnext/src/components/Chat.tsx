import React, { useState } from 'react';
// import { Configuration, OpenAIApi } from 'openai';
import { useChatStore, ChatMessage } from '../../store/chatdata';

interface ChatProps {
  currUser: any;
}

const Chat: React.FC<ChatProps> = ({ currUser }) => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const messages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);
  const sendMessage = useChatStore((state) => state.sendMessage);

  const sendMessageToAPI = async (message: string) => {
    try {
      const response = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message, user: currUser }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.response;
        addMessage({ sender: 'AI', content: aiResponse });
      } else {
        console.error('Error sending message to API:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message to API:', error);
    }
  };

  const handleSendMessage = (message: string) => {
    //removes whitespace, etc.
    if (message.trim()) {
      const chatMessage: ChatMessage = { sender: 'User', content: message };
      sendMessage(chatMessage, currUser);
      setMessage('');
    }
  };
  

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="text-white bg-lightpurp rounded-full p-4 shadow-lg focus:outline-none"
        onClick={() => setShowChat(!showChat)}
      >
        Chat
      </button>
      {showChat && (
        <div className="bg-white w-80 h-96 p-4 mt-4 rounded-lg shadow-lg">
          <div className="flex flex-col h-full">
            <div className="chat-messages-container">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender === 'AI' ? 'message-ai' : 'message-user'}`}>
                  <div className={`message-content`}>{message.content}</div>
                </div>
              ))}
            </div>
            <div className="flex mt-auto"> {/* Add "mt-auto" class to push the input to the bottom */}
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 mr-2 border border-gray-300 rounded"
              />
              <button
                onClick={() => handleSendMessage(message)}
                className="text-white bg-blue-500 p-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
