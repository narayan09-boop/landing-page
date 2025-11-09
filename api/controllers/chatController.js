const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// --- HELPER FUNCTION ---
// This turns your React 'messages' array into a plain text history
function formatHistory(history) {
  if (!history || history.length === 0) {
    return "";
  }
  return history
    .map(msg => `${msg.isBot ? "MIRA" : "User"}: ${msg.text}`)
    .join("\n");
}

// --- UPDATED CONTROLLER ---
const handleChatRequest = async (req, res) => {
  try {
    // 1. Get the new message AND the past history
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // 2. Format the past conversation
    const conversationHistory = formatHistory(history);

    // 3. Create the new, advanced system prompt
    const medicalPrompt = `
You are MIRA (Medical Intelligence Response Assistant), an AI for the Appoint'd telemedicine platform.
Your new primary role is "Symptom Guidance."

**YOUR WORKFLOW:**
1.  When a user starts describing symptoms (e.g., "I have a headache"), your goal is to gather more information.
2.  **Ask relevant follow-up questions** one at a time. Examples: "How long has this been happening?", "Can you describe the pain?", "Do you have a fever or any other symptoms?"
3.  Use the conversation history to remember what the user has already told you.
4.  After gathering 2-3 pieces of information, provide a helpful summary.
5.  List 2-3 **probable causes or possibilities** (e.g., "This might be related to tension headaches or perhaps dehydration.").
6.  **CRITICAL:** You MUST end your response with a disclaimer and a call to action.

**EXAMPLE DISCLAIMER:**
"Please remember, I am an AI assistant and this is not a medical diagnosis. For an accurate diagnosis, I recommend you book a consultation with one of our certified doctors. They are available 24/7."

---
**CONVERSATION SO FAR:**
${conversationHistory}

**USER'S NEW MESSAGE:**
User: ${message}

**MIRA's RESPONSE:**
`;

    // 4. Send the entire context to Gemini
    const result = await model.generateContent(medicalPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });

  } catch (error) {
    console.error("Error in chat controller:", error);
    res.status(500).json({
      error: "I apologize, but I'm having trouble processing your request right now. For immediate medical assistance, please book a consultation with one of our available doctors."
    });
  }
};

module.exports = {
  handleChatRequest
};