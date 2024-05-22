"use strict";
import { Groq } from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();
const { GROQ_API_KEY } = process.env;

const groq = new Groq({
  apiKey: GROQ_API_KEY,
});
async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
}
async function getGroqChatCompletion(userMessage) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: userMessage,
      },
    ],
    model: "llama3-8b-8192",
  });
}
export { getGroqChatCompletion };
