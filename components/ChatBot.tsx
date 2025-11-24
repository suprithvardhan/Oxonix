import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, FAQS, CASE_STUDIES, BRAND_NAME, WHATSAPP_NUMBER } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm the Oxonix AI Assistant. Ask me anything about our EV retrofitting kits, pricing, or the conversion process.` }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Gemini Chat Session
  useEffect(() => {
    if (!chatSessionRef.current && process.env.API_KEY) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        // Construct System Context
        const systemContext = `
          You are the intelligent AI support assistant for ${BRAND_NAME}, an EV retrofitting company in India.
          Your goal is to answer user queries politely, concisely, and accurately based on the following data.
          
          --- COMPANY DETAILS ---
          Name: ${BRAND_NAME}
          Mission: Convert petrol/diesel vehicles to electric to reduce emissions and save costs.
          Contact: WhatsApp +${WHATSAPP_NUMBER}
          
          --- PRODUCTS (RETROFIT KITS) ---
          ${PRODUCTS.map(p => `
          ID: ${p.name} (${p.category})
          - Desc: ${p.description}
          - Specs: Range ${p.specs.range}, Speed ${p.specs.speed}, Charge Time ${p.specs.chargingTime}, Motor ${p.specs.motorPower}
          - Price Estimate: ${p.priceEstimate}
          - Features: ${p.features.join(', ')}
          `).join('\n')}

          --- FREQUENTLY ASKED QUESTIONS ---
          ${FAQS.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n')}

          --- CASE STUDIES (SUCCESS STORIES) ---
          ${CASE_STUDIES.map(c => `- ${c.title}: ${c.vehicleType} owner ${c.owner} saved ${c.savingsPerMonth}.`).join('\n')}

          --- GUIDELINES ---
          1. Keep answers short (2-3 sentences) unless asked for details.
          2. If asked about price, always mention it is an "estimate" and varies by battery choice.
          3. If you don't know an answer, ask the user to contact support via the WhatsApp button.
          4. Be enthusiastic about EV adoption!
          5. Format lists with dashes.
        `;

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: systemContext,
          },
        });
      } catch (error) {
        console.error("Failed to initialize AI:", error);
      }
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userMessage });
        setMessages(prev => [...prev, { role: 'model', text: result.text || "I'm having trouble thinking right now." }]);
      } else {
        // Fallback if API key is missing or init failed
        setMessages(prev => [...prev, { role: 'model', text: "I'm currently offline. Please try again later or contact us on WhatsApp." }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-surface w-[90vw] md:w-96 h-[500px] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col overflow-hidden mb-20 md:mb-0"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-black/20 p-1.5 rounded-lg">
                  <Bot size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm">Oxonix Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-800 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-medium text-black/70">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black/60 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/50 scrollbar-thin">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-primary text-black rounded-tr-none'
                      : 'bg-white dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/5 rounded-tl-none shadow-sm'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-white/10 p-3 rounded-2xl rounded-tl-none border border-gray-200 dark:border-white/5 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-surface border-t border-gray-200 dark:border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about range, price..."
                  className="w-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-primary text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-400 transition-colors"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
              <div className="text-[10px] text-center mt-2 text-gray-400 flex items-center justify-center gap-1">
                <Sparkles size={10} /> Powered by Gemini AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-surface text-primary border-2 border-primary p-4 rounded-full shadow-xl hover:shadow-primary/20 transition-all relative group"
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
        {!isOpen && (
          <span className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
