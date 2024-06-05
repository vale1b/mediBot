import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Aquí puedes agregar la lógica para enviar el mensaje a GROQ
    }
  };

  return (
    <div className="flex flex-col h-screen  mx-auto bg-white shadow-lg border rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#0B0064] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t p-4 flex bg-[#0B0064] ">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-[#3D5A98]  text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
