import { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialBotMessage = {
      text: "Hola, soy Medibot. ¿En qué puedo ayudarte?",
      sender: "bot",
    };
    setMessages([initialBotMessage]);
  }, []);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setLoading(true);

      try {
        const response = await fetch("http://localhost:3000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        });

        const data = await response.json();
        const botMessage = { text: data.response, sender: "bot" };

        setTimeout(() => {
          setMessages((prevMessages) => [...prevMessages, botMessage]);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Error fetching response from API:", error);
        setLoading(false);
      }

      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen mx-auto bg-white shadow-lg border rounded-lg overflow-hidden max-w-[800px] max-h-[500px] my-10">
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
        {loading && (
          <div className="text-center text-gray-500 flex space-x-2  bg-white h-screen  justify-start ">
            <div className="h-2 w-2 bg-[#0B0064] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 bg-[#0B0064] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-[#0B0064] rounded-full animate-bounce"></div>
          </div>
        )}
      </div>
      <div className="border-t p-4 flex bg-[#0B0064]">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-[#3D5A98] text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
