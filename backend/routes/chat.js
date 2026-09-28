const { GoogleGenerativeAI } = require('@google/generative-ai');

// Yahan proper dotenv load hone ke baad key uthata hai
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateResponse(prompt) {
    try {
        // Model select kar lo (jaise gemini-1.5-flash ya jo bhi tu use kar raha hai)
        const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' });
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw new Error('Failed to generate response from AI');
    }
}

module.exports = { generateResponse };
