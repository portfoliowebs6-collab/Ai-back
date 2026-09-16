import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Message from './Message';
import ChatInput from './ChatInput';
import { sendMessageToBackend } from '../services/api';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Hello Kewa, how are you today?', timestamp: '10:24 AM' },
    { id: 2, sender: 'ai', text: "Hello! 😊\nI'm doing great! Thanks for asking.\n\nI'm Kewa AI, your personal assistant. What would you like to do today?", timestamp: '10:24 AM', type: 'response-actions' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (text, imageFile) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : null;

    // 1. Add User Message
    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text,
      imageUrl,
      timestamp: timeNow
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setLoading(true);

    // 2. Call Backend API
    const response = await sendMessageToBackend(text, imageFile);

    // 3. Add AI Response
    const newAiMessage = {
      id: Date.now() + 1,
      sender: 'ai',
      text: response.reply,
      imageUrl: response.imageUrl || null,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'response-actions'
    };

    setMessages((prev) => [...prev, newAiMessage]);
    setLoading(false);
  };

  return (
    <main className="flex-1 glass rounded-2xl flex flex-col justify-between overflow-hidden shadow-2xl h-full">
      <Header />
      
      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
        
        {/* Thinking Indicator */}
        {loading && <Message message={{ sender: 'ai', isThinking: true }} />}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} loading={loading} />
    </main>
  );
}
