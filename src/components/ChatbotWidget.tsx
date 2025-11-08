// src/components/ChatbotWidget.tsx
// THIS IS YOUR COMPLETE CODE + SESSION MEMORY

import { useState, useRef, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
// 💡 Correct import for Framer Motion (fixed from 'motion/react')
import { motion, AnimatePresence } from "framer-motion"; 

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatbotWidget() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Just send the welcome message
      initializeChat();
    }
  }, [isOpen]);

  const initializeChat = () => {
    // No API call needed, just send the welcome message
    setIsTyping(true);
    setTimeout(() => {
      setMessages([{
        id: Date.now(),
        text: "Hello! I'm MIRA, your Medical Intelligence Response Assistant. I can help you with health questions, finding the right doctor, or booking appointments. How can I assist you today?",
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 800);
  };

  // ==========================================================
  // 💡 THIS IS THE UPDATED getBotResponse FUNCTION
  // It now accepts the message history
  // ==========================================================
  const getBotResponse = async (userMessage: string, currentMessages: Message[]): Promise<string> => {
    try {
      // Fetch from your OWN backend server
      const response = await fetch("http://localhost:3001/api/mira-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // 💡 ADDITION: Send the new message AND the history
        body: JSON.stringify({ 
          message: userMessage,
          history: currentMessages // Pass the message history
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return errorData.error || "I'm having trouble connecting to my services.";
      }

      const data = await response.json();
      return data.reply; // Get the "reply" field

    } catch (error) {
      console.error("Error getting bot response:", error); // This log is fine
      return "I apologize, but I'm having trouble connecting. For immediate medical assistance, please book a consultation with one of our available doctors. They're available 24/7 to help you.";
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");

    setIsTyping(true);

    // 💡 ADDITION: Pass the 'messages' state to the function.
    // (This works because 'messages' here is the state *before*
    // the new userMessage was added, which is what we want)
    const botResponseText = await getBotResponse(currentInput, messages);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: botResponseText,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Your JSX is unchanged
  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-2xl relative group"
              size="icon"
            >
              <MessageCircle className="w-7 h-7 text-white" />
              <span className="absolute inset-0 rounded-full bg-teal-400 opacity-75 animate-ping" />
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed bottom-6 right-6 w-96 h-[600px] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden ${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <h3 className="text-white">MIRA</h3>
                  <p className="text-xs text-white/80">Medical AI Assistant</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'
            }`}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.isBot
                        ? theme === 'dark'
                          ? 'bg-zinc-800 text-white'
                          : 'bg-white text-gray-900 shadow-sm'
                        : 'bg-gradient-to-r from-teal-500 to-blue-600 text-white'
                    }`}
                  >
                    {message.isBot && (
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span className="text-xs opacity-70">MIRA</span>
                      </div>
                    )}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className={`rounded-2xl px-4 py-3 ${
                    theme === 'dark' ? 'bg-zinc-800' : 'bg-white shadow-sm'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className={`w-2 h-2 rounded-full ${
                            theme === 'dark' ? 'bg-gray-500' : 'bg-gray-400'
                          }`}
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className={`w-2 h-2 rounded-full ${
                            theme === 'dark' ? 'bg-gray-500' : 'bg-gray-400'
                          }`}
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className={`w-2 h-2 rounded-full ${
                            theme === 'dark' ? 'bg-gray-500' : 'bg-gray-400'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${
              theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200'
            }`}>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-2 rounded-full outline-none transition-all ${
                    theme === 'dark'
                      // 💡 Fixed typo 'Tsing-teal' -> 'teal'
                      ? 'bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500'
                  }`}
                />
                <Button
                  onClick={handleSendMessage}
                  className="rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
                  size="icon"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}