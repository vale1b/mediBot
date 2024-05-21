"use strict";
import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});
async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
}
async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "que opinas de Demichelis?",
      },
    ],
    model: "llama3-8b-8192",
  });
}
export { getGroqChatCompletion };



