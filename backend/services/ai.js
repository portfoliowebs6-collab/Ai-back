const { GoogleGenAI } = require('@google/genai');

// .env file se API key automatically utha lega
const ai = new GoogleGenAI({ apiKey: process.env.AI_API_KEY });

async function generateResponse(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        return response.text || "Mujhe iska jawab samajh nahi aaya.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Server par AI ko connect karte waqt error aa gaya hai.";
    }
}

module.exports = {
    generateResponse
};
