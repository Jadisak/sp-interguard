import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ShieldAlert, Bot } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const SmartAssistant: React.FC = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Gemini Setup
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize greeting when language changes or component mounts
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: t.chat.greeting }]);
    }
  }, [t, messages.length]);

  const initChat = () => {
    if (!process.env.API_KEY) {
      console.warn("API Key not found");
      return;
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSessionRef.current = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are the AI Virtual Assistant for "S&P INTER GUARD", a leading security company in Thailand. 
        Your tone is professional, reassuring, alert, and polite. 
        The user is currently browsing the site in ${lang === 'en' ? 'English' : 'Thai'}.
        Please respond in the language the user speaks to you, but default to ${lang === 'en' ? 'English' : 'Thai'} if unsure.
        
        You can answer questions about:
        - Security Guards (Standard, Premium, VIP)
        - CCTV and Surveillance Systems
        - Event Security and Traffic Control
        - General safety tips in Thailand context.
        
        If asked about prices, ask the user to provide their contact details in the "Contact Us" form for a customized quote.`,
      },
    });
  };

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      initChat();
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
         initChat();
      }

      if (chatSessionRef.current) {
        const result: GenerateContentResponse = await chatSessionRef.current.sendMessage({
            message: userMsg
        });
        setMessages(prev => [...prev, { role: 'model', text: result.text || "I'm sorry, I couldn't process that." }]);
      } else {
         setMessages(prev => [...prev, { role: 'model', text: "Service is currently unavailable. Please check the API Key configuration.", isError: true }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting to the security server right now.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-gold hover:bg-yellow-400'
        }`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-brand-dark" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px' }}
      >
        {/* Header */}
        <div className="bg-brand-dark p-4 flex items-center space-x-3 border-b border-slate-700">
          <div className="bg-brand-gold/20 p-2 rounded-full">
            <Bot className="h-6 w-6 text-brand-gold" />
          </div>
          <div>
            <h3 className="text-white font-bold font-thai">Guardian AI</h3>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-400">Online | S&P Support</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4 font-thai">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-brand-blue text-white rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.chat.inputPlaceholder}
              className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm text-slate-800 placeholder-slate-400 font-thai"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-brand-gold rounded-lg text-brand-dark hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 text-center">
             <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1 font-thai">
               <ShieldAlert className="h-3 w-3" />
               {t.chat.disclaimer}
             </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SmartAssistant;