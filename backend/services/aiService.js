// AI Service for Chat handling
exports.getAIResponse = async (message) => {
  try {
    // Yahan tum apni Gemini ya OpenAI ki API call integrate kar sakte ho
    // Example response:
    return {
      reply: `AI received your message: "${message}". Tumhara backend successfully chal raha hai!`
    };
  } catch (error) {
    throw new Error('AI Service Error: ' + error.message);
  }
};
