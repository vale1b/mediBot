// api.js
const express = require("express"); // Importa el framework Express para crear el servidor
const cors = require("cors"); // Importa el middleware CORS para manejar solicitudes entre diferentes dominios
const Groq = require("groq-sdk"); // Importa el SDK de GROQ para interactuar con su API
require("dotenv").config(); // Carga las variables de entorno desde un archivo .env

const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto en el que el servidor escuchará las solicitudes

app.use(cors()); // Habilita CORS para permitir solicitudes desde otros dominios
app.use(express.json()); // Usa el middleware de Express para parsear solicitudes JSON

// Crea una instancia del cliente de GROQ usando la clave API desde las variables de entorno
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Función asíncrona que obtiene una respuesta del modelo de chat de GROQ
async function getGroqChatCompletion(userMessage) {
  try {
    // Envía una solicitud al modelo de chat de GROQ con el mensaje del usuario
    const response = await groq.chat.completions.create({
      
      messages: [
        {
          role: "system",
          content: "Eres un bot asistente medico llamado Medibot siempre que te escriban da respuestas cortas de maximo 400 caracteres si te preguntan por alguna enfermedad o sintomas Antes de recomendar un medicamento consulta por alergias y condiciones de salud preexistentes, para dar un diagnostico y tratamiento más adecuado al paciente tambien da respuestas de medicinas caseras de maximo 400 caracteres, Si un usuario te pregunta sobre temas no relacionados a la salud contestale que no estas habilitado para proporcionar informacion sobre esa tematica y preguntale si le gustaria hacer otra consulta relacionada a su salud,Si alguien te pregunta por las funcionalidades de medibot dale ejemplos de cosas que el usuario puede preguntar relacionadas a su salud y bienestar , Si un paciente tiene una emergencia médica genera un link de llamada al 911",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      model: "llama3-8b-8192",
    });
    // Devuelve el contenido de la respuesta de GROQ o un mensaje por defecto si no hay respuesta
    return response.choices[0]?.message?.content || "No response from GROQ";
  } catch (error) {
    // Maneja los errores y los imprime en la consola
    console.error("Error fetching completion from GROQ:", error);
    // Devuelve un mensaje de error
    return "Error fetching response from GROQ";
  }
}

// Define una ruta POST en /chat para manejar las solicitudes de mensajes
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message; // Obtiene el mensaje del cuerpo de la solicitud
  if (!userMessage) {
    // Verifica si el mensaje está vacío y devuelve un error 400 si lo está
    return res.status(400).send({ error: "Message is required" });
  }

  // Obtiene la respuesta de GROQ usando la función definida anteriormente
  const groqResponse = await getGroqChatCompletion(userMessage);
  // Envía la respuesta de GROQ al cliente
  res.send({ response: groqResponse });
});

// Inicia el servidor y hace que escuche en el puerto definido
app.listen(port, () => {
  console.log(`Chatbot API listening at http://localhost:${port}`);
});

