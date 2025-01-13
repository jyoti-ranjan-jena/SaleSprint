import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import cancel from "../assets/cancel.svg";
import chat from "../assets/chatbot.png";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your assistant. Ask me anything about the Realme Wireless 3 Neckband!" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatBotOpen, setChatBotOpen] = useState(true);
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchResponse = async (userMessage) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "mixtral-8x7b-32768",
          messages: [
            { role: "system", content: "You are a chatbot that only answers questions about the Realme Wireless 3 Neckband." },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            "Content-Type": "application/json"
          },
        }
      );

      const botMessage = response.data.choices[0].message.content.trim();
      setMessages((prev) => [...prev, { sender: "bot", text: botMessage }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    fetchResponse(userInput);
    setUserInput("");
  };
  
  return (
    <>
      {chatBotOpen ? (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-80">
          <div className="flex flex-row justify-between bg-sky-600 text-white p-4 rounded-t-lg">
            <h2 className="text-lg font-bold">Product Chatbot</h2>
            <img
              src={cancel}
              alt="cancel"
              className="h-7 cursor-pointer"
              onClick={() => setChatBotOpen(false)}
            />
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  msg.sender === "bot"
                    ? "bg-sky-100 text-gray-800"
                    : "bg-sky-600 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-600">Typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 flex border-t">
            <input
              type="text"
              className="flex-1 border rounded-l-lg p-2"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-sky-600 text-white px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <img
          className="fixed bottom-4 right-4 h-14 cursor-pointer"
          src={chat}
          alt="chatbot"
          onClick={() => setChatBotOpen(true)}
        />
      )}
    </>
  );
};

export default Chatbot;
