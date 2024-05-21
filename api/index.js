import express from 'express';
import { getGroqChatCompletion } from "./controllers/apisGroq.js";

const app = express();
const port = 3001;

app.get("/api/groq", async (req, res) => {
  const chatCompletion = await getGroqChatCompletion();
  res.json(chatCompletion);
});

app.post("/chat", async (req, res) => {
  const { message } = req.query;
  if (!message) {
    return res.status(400).send({ error: "Message is required" });
  }

  const chatResponse = await getGroqChatCompletion(message);
  res.send({ response: chatResponse });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});