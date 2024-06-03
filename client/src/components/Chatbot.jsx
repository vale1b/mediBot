import React, { useState } from 'react';
import userImage from './imgs/user.png';  // img de prueba para el usuario
import botImage from './imgs/bot8.png';    // img de prueba del bot
//mx-auto -> no funciona
//flex justify-center -> tiene que estar aplicado en los dos div para que el input este abajo
//items-center  -> no, centra el bloque de dialogo al medio de la pantalla
//no se como ajustar el chat para que se vea en el medio y no a la izquierda

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'Esta es una respuesta automática', sender: 'bot' }]);
      }, 1000);
    }
  };

  //para que se pueda enviar el msj usando enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex flex-col w-full h-full bg-[#0B0064] rounded-lg">
        <div className="flex-1 p-4 overflow-y-auto w-full">
          {messages.map((message, index) => (
            <div key={index} className={`flex my-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.sender === 'bot' && <img src={botImage} alt="Bot" className="w-8 h-8 mr-2" />}
              <div className={`p-2 rounded-lg max-w-xs ${message.sender === 'user' ? 'bg-white text-black self-end' : 'bg-white text-black self-start'}`}>
                {message.text}
              </div>
              {message.sender === 'user' && <img src={userImage} alt="User" className="w-8 h-8 ml-2" />}
            </div>
          ))}
        </div>
        <div className="p-4 bg-[#0B0064] border-t w-full rounded-lg">
          <div className="flex justify-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="p-2 border rounded"
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded ml-2">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;