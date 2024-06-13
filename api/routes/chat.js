const { Router } = require("express");
const { getGroqChatCompletion } = require("../controllers/groq");
const { Chat } = require("../db");
const router = Router();

/* router.get("/", async (req, res) => {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion);
}); */

/* router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).send({ error: "Message is required" });
  }
  const chat = await Chat.create({ message });

  res.send({ message: "Chat created successfully" });
  console.log(chat);
}); */

module.exports = router;
