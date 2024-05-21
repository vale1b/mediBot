import express from 'express';
import { getGroqChatCompletion } from "./controllers/apisGroq.js";

const app = express();
const port = 3001;

app.get("/api/groq", async (req, res) => {
  const chatCompletion = await getGroqChatCompletion();
  res.json(chatCompletion);
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});