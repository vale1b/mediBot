
"use strict";
const GROQ_API_KEY = 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;
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: GROQ_API_KEY
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
                content: "Explain the importance of fast language models"
            }
        ],
        model: "llama3-8b-8192"
    });
}
module.exports = {
    main,
    getGroqChatCompletion
};

