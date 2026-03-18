import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles, MapPin } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Bright Future AI", the official virtual assistant for Bright Future Academy. 
Your goal is to help students and parents with information about the academy.
Be professional, encouraging, and helpful.

Key Information:
- Academy Name: Bright Future Academy
- Location: Mumbai, India (Knowledge Park)
- Programs: 
  1. School Excellence (Grades 8-10): Focus on conceptual depth and board exams.
  2. Science Elite (Grades 11-12): Rigorous prep for Physics, Chemistry, Biology, Math.
  3. Competitive Edge: Intensive coaching for JEE (Engineering) and NEET (Medical).
- Key Features: 1:12 student-teacher ratio, PhD mentors, AI-powered analytics, 24/7 doubt support.
- Success Rate: 94% selection rate in top colleges.
- Contact: +91 98765 43210, hello@brightfuture.edu

New Features to Mention:
- Methodology: We have a unique 5-step success science (Conceptual Depth, Rigorous Practice, Adaptive Testing, Personal Mentoring, AI Insights). Suggest users visit the "Explore Methodology" page for details.
- Results: Our hall of fame is filled with top achievers. Suggest users visit the "View All Results" page to see our success stories.

If you don't know something, suggest they contact a human counselor at the academy.
Keep responses concise and formatted with markdown if needed.
`;

const QUICK_QUESTIONS = [
  "Tell me about your methodology",
  "Show me recent results",
  "What courses do you offer?",
  "How can I apply?",
  "Where is the academy located?"
];

interface Message {
  role: "user" | "model";
  text: string;
  groundingLinks?: { uri: string; title: string }[];
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hello! I'm Bright Future AI. How can I help you with your academic journey today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const handleResize = () => {
      if (window.visualViewport) {
        setViewportHeight(window.visualViewport.height);
        // If viewport height is significantly less than window height, keyboard is likely open
        setIsKeyboardOpen(window.visualViewport.height < window.innerHeight * 0.85);
      }
    };

    window.visualViewport.addEventListener("resize", handleResize);
    return () => window.visualViewport?.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Geolocation error:", error);
        }
      );
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isKeyboardOpen]);

  const handleSend = async (textOverride?: string) => {
    // Ensure textOverride is a string and not an event object
    const textToSend = (typeof textOverride === 'string' ? textOverride : input).trim();
    if (!textToSend || isLoading) return;

    const userMessage = textToSend;
    if (typeof textOverride !== 'string') setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
      const ai = new GoogleGenAI({ apiKey });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ googleMaps: {} }],
          toolConfig: userLocation ? {
            retrievalConfig: {
              latLng: userLocation
            }
          } : undefined
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const response = await chat.sendMessage({ message: userMessage });
      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again.";
      
      const groundingLinks: { uri: string; title: string }[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        chunks.forEach((chunk: any) => {
          if (chunk.maps) {
            groundingLinks.push({
              uri: chunk.maps.uri,
              title: chunk.maps.title || "View on Google Maps"
            });
          }
        });
      }

      setMessages(prev => [...prev, { role: "model", text: aiText, groundingLinks }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: "model", text: "I'm having some trouble connecting right now. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isKeyboardOpen ? viewportHeight - 100 : "min(700px, 80vh)"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{ 
              bottom: "72px",
              right: "0px"
            }}
            className="absolute w-[calc(100vw-48px)] md:w-[400px] bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 bg-academy-dark text-white flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-50%] right-[-20%] w-[100%] h-[100%] bg-blue-600 rounded-full blur-[80px]"></div>
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                  <Bot className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Bright Future AI</h3>
                  <p className="text-xs text-blue-300 font-black uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                    Active Now
                  </p>
                </div>
              </div>
                <div className="flex items-center gap-2 relative z-10">
                  <button 
                    onClick={() => setMessages([{ role: "model", text: "Chat cleared. How can I help you now?" }])}
                    className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                    title="Clear Chat"
                  >
                    <Sparkles className="w-5 h-5 text-blue-300" />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-slate-50/30 no-scrollbar">
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {QUICK_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-academy-blue hover:text-academy-blue transition-all shadow-sm"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-4 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm ${msg.role === "user" ? "bg-academy-dark text-white" : "bg-white text-academy-blue border border-slate-100"}`}>
                      {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div className={`p-6 rounded-[2rem] text-base font-medium leading-relaxed shadow-md transition-all ${
                      msg.role === "user" 
                        ? "bg-gradient-to-br from-academy-blue to-blue-700 text-white rounded-tr-none" 
                        : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
                    }`}>
                      {msg.text}
                      {msg.groundingLinks && msg.groundingLinks.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Map References:</p>
                          {msg.groundingLinks.map((link, idx) => (
                            <a 
                              key={idx} 
                              href={link.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-academy-blue hover:text-blue-700 transition-colors text-sm font-black group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MapPin className="w-4 h-4" />
                              </div>
                              {link.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white text-academy-blue border border-slate-100 flex items-center justify-center shadow-sm">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="p-6 bg-white rounded-[2rem] rounded-tl-none shadow-sm border border-slate-100 flex items-center gap-2">
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1] }} 
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-2 h-2 bg-blue-400 rounded-full" 
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1] }} 
                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        className="w-2 h-2 bg-blue-400 rounded-full" 
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1] }} 
                        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                        className="w-2 h-2 bg-blue-400 rounded-full" 
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-8 bg-white border-t border-slate-100">
              <div className="relative flex items-center group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about admissions, courses..."
                  className="w-full pl-8 pr-16 py-5 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none font-bold text-base transition-all shadow-inner"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 w-12 h-12 bg-academy-blue text-white rounded-2xl flex items-center justify-center hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-academy-blue transition-all shadow-lg shadow-blue-200"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="h-[1px] flex-grow bg-slate-100"></div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] flex items-center gap-2">
                  Powered by <Sparkles className="w-3 h-3 text-blue-400" /> Gemini 3
                </p>
                <div className="h-[1px] flex-grow bg-slate-100"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        animate={!isOpen ? {
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 30px 60px rgba(59,130,246,0.3)",
            "0 30px 80px rgba(59,130,246,0.5)",
            "0 30px 60px rgba(59,130,246,0.3)"
          ]
        } : { scale: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-academy-dark text-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center justify-center group relative overflow-hidden border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              className="relative z-10"
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              className="flex items-center justify-center relative z-10"
            >
              <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
