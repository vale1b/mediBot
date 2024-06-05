import { useState, useEffect } from "react"; // Importa useEffect para ejecutar código después del primer render

// Definición del componente Chatbot
const Chatbot = () => {
  // Estado messages: guarda los mensajes del chat
  const [messages, setMessages] = useState([]);
  // Estado input: guarda el texto del campo de entrada
  const [input, setInput] = useState("");
  // Estado loading: indica si el bot está respondiendo
  const [loading, setLoading] = useState(false);

  // Añade un mensaje inicial del bot cuando el componente se monta
  useEffect(() => {
    const initialBotMessage = {
      text: "Hola, soy Medibot. ¿En qué puedo ayudarte?",
      sender: "bot",
    };
    setMessages([initialBotMessage]);
  }, []);

  // Función handleSendMessage: maneja el envío de mensajes
  const handleSendMessage = async () => {
    // Verifica si el input no está vacío o solo contiene espacios en blanco
    if (input.trim()) {
      // Crea un objeto userMessage con el texto del input y el remitente "user"
      const userMessage = { text: input, sender: "user" };
      // Actualiza el estado messages agregando el mensaje del usuario
      setMessages([...messages, userMessage]);
      // Establece loading a true
      setLoading(true);

      try {
        // Envía una solicitud POST a la API
        const response = await fetch("http://localhost:3000/chat", {
          method: "POST", // Método de la solicitud
          headers: {
            "Content-Type": "application/json", // Tipo de contenido
          },
          // Cuerpo de la solicitud: el mensaje del usuario en formato JSON
          body: JSON.stringify({ message: input }),
        });
        // Convierte la respuesta de la API a JSON
        const data = await response.json();
        // Crea un objeto botMessage con el texto de la respuesta de la API y el remitente "bot"
        const botMessage = { text: data.response, sender: "bot" };
        // Introduce un retraso simulado antes de agregar el mensaje del bot
        setTimeout(() => {
          // Actualiza el estado messages agregando el mensaje del bot
          setMessages((prevMessages) => [...prevMessages, botMessage]);
          // Establece loading a false
          setLoading(false);
        }, 1500); // Retraso de 2000 milisegundos (2 segundos)
      } catch (error) {
        // Manejo de errores: muestra el error en la consola
        console.error("Error fetching response from API:", error);
        // Establece loading a false incluso si ocurre un error
        setLoading(false);
      }

      // Limpia el campo de entrada
      setInput("");
    }
  };

  // Renderizado del componente
  return (
    <div className="flex flex-col h-screen mx-auto bg-white shadow-lg border rounded-lg overflow-hidden max-w-[800px] max-h-[500px] my-10">
      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          // Renderiza cada mensaje en el chat
          <div
            key={index} // Clave única para cada mensaje
            className={`mb-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`} // Estilo condicional basado en el remitente del mensaje
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#0B0064] text-white" // Estilo para mensajes del usuario
                  : "bg-gray-200 text-gray-800" // Estilo para mensajes del bot
              }`}
            >
              {message.text} {/* Contenido del mensaje */}
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
      {/* Área de entrada */}
      <div className="border-t p-4 flex bg-[#0B0064]">
        <input
          type="text" // Tipo de input: texto
          className="flex-1 border rounded-lg p-2" // Estilos del campo de entrada
          value={input} // Valor del campo de entrada vinculado al estado input
          onChange={(e) => setInput(e.target.value)} // Actualiza el estado input al cambiar el valor del campo
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} // Envía el mensaje al presionar Enter
        />
        <button
          onClick={handleSendMessage} // Llama a handleSendMessage al hacer clic en el botón
          className="ml-2 bg-[#3D5A98] text-white px-4 py-2 rounded-lg" // Estilos del botón
        >
          Send {/* Texto del botón */}
        </button>
      </div>
    </div>
  );
};

export default Chatbot; // Exporta el componente Chatbot como exportación predeterminada
