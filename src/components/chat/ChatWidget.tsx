import React, { useState, Suspense, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

let knowledgeModule: any = null;
let intentsModule: any = null;

const loadChatModules = async () => {
  if (!knowledgeModule || !intentsModule) {
    const [knowledge, intents] = await Promise.all([
      import("@/lib/chat/knowledge"),
      import("@/lib/chat/intents"),
    ]);
    knowledgeModule = knowledge;
    intentsModule = intents;
  }
  return { knowledge: knowledgeModule, intents: intentsModule };
};

const getContextualPrompts = async (pathname: string): Promise<string[]> => {
  try {
    if (!knowledgeModule) {
      const { knowledge } = await loadChatModules();
      return knowledge.getSuggestedPrompts(pathname);
    }
    return knowledgeModule.getSuggestedPrompts(pathname);
  } catch (error) {
    console.error("Error loading prompts:", error);
    return pathname === "/bio"
      ? [
          "Tell me about your journey",
          "What are your interests?",
          "Where are you based?",
        ]
      : [
          "Tell me about yourself",
          "What are your skills?",
          "Show me your projects",
        ];
  }
};

const getBotResponse = async (
  message: string,
  pathname: string,
  previousIntent?: string | null
): Promise<{ response: string; intent: string }> => {
  try {
    if (!intentsModule) {
      await loadChatModules();
    }

    const reply = intentsModule.generateChatReply(message, pathname, {
      previousIntent: previousIntent || null,
    });

    return {
      response: reply.response,
      intent: reply.intent,
    };
  } catch (error) {
    console.error("Error generating bot response:", error);
    return {
      response:
        "I can help with Johnson's portfolio and also practical learning, interview, and career advice. Try asking: 'Create a 30-day frontend roadmap.'",
      intent: "default",
    };
  }
};

const ChatContent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Johnson's assistant. I can answer about Johnson's portfolio and also give practical guidance on learning, interviews, and career growth. What would you like to ask?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [contextualPrompts, setContextualPrompts] = useState<string[]>([]);
  const [modulesLoaded, setModulesLoaded] = useState(false);
  const [lastIntent, setLastIntent] = useState<string | null>(null);
  const location = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    getContextualPrompts(location.pathname).then(setContextualPrompts);
  }, [location.pathname]);

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      if (!modulesLoaded) {
        await loadChatModules();
        setModulesLoaded(true);
      }

      setTimeout(async () => {
        try {
          const botReply = await getBotResponse(messageText, location.pathname, lastIntent);
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: botReply.response,
            isBot: true,
            timestamp: new Date(),
          };

          setMessages((prev) => [...prev, botResponse]);
          setLastIntent(botReply.intent);
          setIsTyping(false);
        } catch (error) {
          console.error("Error in bot response:", error);
          const errorResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: "I'm having trouble processing that right now. Please try asking about Johnson's background, projects, or experience.",
            isBot: true,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, errorResponse]);
          setIsTyping(false);
        }
      }, 700);
    } catch (error) {
      console.error("Error loading chat modules:", error);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestionsRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (quickQuestionsRef.current && e.deltaY !== 0) {
      quickQuestionsRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!quickQuestionsRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - quickQuestionsRef.current.offsetLeft);
    setScrollLeftPos(quickQuestionsRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !quickQuestionsRef.current) return;
    const x = e.pageX - quickQuestionsRef.current.offsetLeft;
    if (Math.abs(x - startX) > 5) {
      setIsDragging(true);
    }
    const walk = (x - startX) * 1.5;
    quickQuestionsRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
      {/* Quick Questions Header */}
      <div className="border-b border-slate-200 p-3 dark:border-zinc-700 flex-shrink-0 bg-slate-50/50 dark:bg-zinc-900/50">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">Quick questions:</p>
          <span className="text-[10px] text-slate-400 dark:text-zinc-500 hidden sm:inline-block select-none">
            Scroll mouse wheel or drag
          </span>
        </div>
        <div
          ref={quickQuestionsRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto gap-2 pb-1 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x select-none ${
            isMouseDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {contextualPrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => {
                if (!isDragging) {
                  handleSendMessage(prompt);
                }
              }}
              className="h-auto whitespace-nowrap rounded-full border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-700 hover:border-[#4285F4] hover:text-[#4285F4] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 shrink-0"
            >
              {prompt}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages List Area */}
      <div
        className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 touch-pan-y [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700"
        data-vaul-no-drag
      >
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl ${
                  message.isBot
                    ? "border border-slate-200 bg-white text-slate-800 rounded-tl-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                    : "bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] text-white rounded-tr-sm"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="rounded-2xl rounded-tl-sm border border-slate-200 bg-white p-3 text-slate-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
                <div className="flex items-center space-x-1.5">
                  <Loader2 className="w-4 h-4 animate-spin text-[#4285F4]" />
                  <span className="text-sm font-medium">Typing...</span>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-slate-200 dark:border-zinc-700 flex-shrink-0 bg-white dark:bg-zinc-950">
        <div className="flex space-x-2 items-center">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 rounded-full border-slate-300 bg-slate-50 focus-visible:ring-[#4285F4]/40 dark:border-zinc-600 dark:bg-zinc-900 text-sm h-10 px-4"
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isTyping}
            size="icon"
            className="rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] text-white shrink-0 h-10 w-10"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const trigger = (
    <motion.button
      className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] p-4 text-white shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Open chat"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X size={24} />
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className="z-50 border-slate-200 bg-white/95 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-950/95 h-[85dvh] max-h-[85dvh] flex flex-col p-0 rounded-t-2xl">
          <DrawerHeader className="border-b border-slate-200 pb-3 pt-2 px-4 dark:border-zinc-700 flex-shrink-0 text-left">
            <DrawerTitle className="flex items-center justify-between font-display text-slate-900 dark:text-white text-base">
              <span>Chat with me</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
              </span>
            </DrawerTitle>
          </DrawerHeader>
          <Suspense fallback={<div className="p-4 text-center">Loading chat...</div>}>
            <ChatContent />
          </Suspense>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="right"
        className="z-50 w-full sm:w-[450px] p-0 flex flex-col border-slate-200 bg-white/95 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-950/95 h-full"
      >
        <SheetHeader className="border-b border-slate-200 p-4 dark:border-zinc-700 flex-shrink-0 text-left">
          <SheetTitle className="flex items-center justify-between font-display text-slate-900 dark:text-white text-base">
            <span>Chat with me</span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
            </span>
          </SheetTitle>
        </SheetHeader>
        <Suspense fallback={<div className="p-4 text-center">Loading chat...</div>}>
          <ChatContent />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};

export default ChatWidget;

