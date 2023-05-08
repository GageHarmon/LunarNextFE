import React, { useState } from "react";
import axios from "axios";

const ChatGPT = () => {
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState("");
  const [numLines, setNumLines] = useState(1); // default number of lines
  const [showChat, setShowChat] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const chatResponse = async () => {
    try {
      const messages = chatHistory.map((msg, idx) => {
        const role = idx % 2 === 0 ? "user" : "assistant";
        return { role: role, content: msg };
      });
  
      // Add the user's current message
      messages.push({ role: "user", content: title });
  
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: messages,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );
      const aiResponse = response.data.choices[0].message.content;
      setArticle(aiResponse);
  
      // Update the chat history
      setChatHistory([...chatHistory, title, aiResponse]);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    chatResponse();
    setTitle(''); // Clear the input after sending the message
  };

  const handleNumLinesChange = (e) => {
    const value = parseInt(e.target.value, 10); // Convert value to number
    setNumLines(value);
  };

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="text-white bg-gradient-to-br from-lightpurp to-pinkred rounded-full p-4 shadow-lg focus:outline-none"
        onClick={handleToggleChat}
      >
        Chat
      </button>
      {showChat && (
        <div className="bg-white w-80 h-96 p-4 mt-4 rounded-lg shadow-lg">
          <div className="flex flex-col h-full">
            <div className="chat-messages-container flex-grow overflow-y-auto mb-2">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`my-2 ${
                    index % 2 === 0 ? "text-right" : ""
                  }`}
                >
                  <span
                    className={`inline-block ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-lightpurp to-pinkred"
                        : "bg-gradient-to-br from-lightpurp to-navpurp"
                    } text-white p-2 rounded-lg`}
                  >
                    {msg}
                  </span>
                </div>
              ))}
            </div>
            <form className="flex mt-auto" onSubmit={handleSubmit}>
              <input
                className="border rounded-lg flex-grow p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Type your message..."
              />
              <button
                className="text-white bg-gradient-to-br from-lightpurp to-pinkred rounded-lg p-2 ml-2 focus:outline-none"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatGPT;