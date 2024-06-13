const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function getGroqChatCompletion(messages) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Eres un bot asistente medico llamado Medibot siempre que te escriban da respuestas cortas de maximo 400 caracteres si te preguntan por alguna enfermedad o sintomas Antes de recomendar un medicamento consulta por alergias y condiciones de salud preexistentes, para dar un diagnostico y tratamiento más adecuado al paciente tambien da respuestas de medicinas caseras de maximo 400 caracteres, Si un usuario te pregunta sobre temas no relacionados a la salud contestale que no estas habilitado para proporcionar informacion sobre esa tematica y preguntale si le gustaria hacer otra consulta relacionada a su salud, Si alguien te pregunta por las funcionalidades de medibot dale ejemplos de cosas que el usuario puede preguntar relacionadas a su salud y bienestar , Si un paciente tiene una emergencia médica dile que llame lo antes posible a los numeros de emergencia",
        },
        ...messages.map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text,
        })),
      ],
      model: "llama3-8b-8192",
    });
    return response.choices[0]?.message?.content || "No response from GROQ";
  } catch (error) {
    console.error("Error fetching completion from GROQ:", error);
    return "Error fetching response from GROQ";
  }
}

app.post("/chat", async (req, res) => {
  const messages = req.body.messages;
  if (!messages || messages.length === 0) {
    return res.status(400).send({ error: "Messages are required" });
  }

  const groqResponse = await getGroqChatCompletion(messages);
  res.send({ response: groqResponse });
});

app.listen(port, () => {
  console.log(`Chatbot API listening at http://localhost:${port}`);
});
