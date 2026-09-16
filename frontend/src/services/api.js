// frontend/src/services/api.js
const API_BASE_URL = "https://ai-back-z62i.onrender.com"; 

export const sendMessageToBackend = async (prompt, imageFile = null) => {
  try {
    const formData = new FormData();
    formData.append("prompt", prompt);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    // Yahan '/api/chat' kar diya hai taaki server ke route se match ho jaye
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to communicate with backend");
    }

    const data = await response.json();
    return data; // Expected format: { reply: "AI response text", imageUrl: "..." }
  } catch (error) {
    console.error("API Error:", error);
    return { 
      reply: "Oops! Backend se connect nahi ho paya. Kripya apna server URL check karein.",
      isError: true 
    };
  }
};
