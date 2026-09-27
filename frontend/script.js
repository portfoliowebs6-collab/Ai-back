function handleSuggestion(text) {
    document.getElementById('userInput').value = text;
    sendMessage();
}

async function sendMessage() {
    const inputField = document.getElementById('userInput');
    const messageText = inputField.value.trim();
    if (!messageText) return;

    // Hide welcome box and show messages list
    document.getElementById('welcomeBox').style.display = 'none';
    const messagesList = document.getElementById('messagesList');
    messagesList.style.display = 'flex';

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.innerText = messageText;
    messagesList.appendChild(userMsg);

    inputField.value = '';
    const container = document.getElementById('chatContainer');
    container.scrollTop = container.scrollHeight;

    try {
        // Backend API call
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: messageText })
        });

        const data = await response.json();

        // Append AI Response
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai';
        aiMsg.innerText = data.reply || "Kuch gadbad ho gayi, dubara koshish karein.";
        messagesList.appendChild(aiMsg);
        container.scrollTop = container.scrollHeight;

    } catch (error) {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'message ai';
        errorMsg.innerText = "Server se connect nahi ho pa raha hai.";
        messagesList.appendChild(errorMsg);
        container.scrollTop = container.scrollHeight;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
