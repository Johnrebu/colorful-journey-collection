import React, { useState, lazy, Suspense, useEffect } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Dynamic imports for performance - loaded only when chat opens
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
    // Fallback prompts
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
  pathname: string
): Promise<string> => {
  try {
    if (!intentsModule) {
      await loadChatModules();
    }

    const intent = intentsModule.matchIntent(message, pathname);
    return intentsModule.answerForIntent(intent || "default", pathname);
  } catch (error) {
    console.error("Error generating bot response:", error);
    return "I can help with questions about Johnson's background, skills, projects, education, experience, availability, or how to contact him. Try asking: 'How did you transition from teaching to IT?'";
  }
};

const ChatContent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Johnson. I can help you learn about my background, skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [contextualPrompts, setContextualPrompts] = useState<string[]>([]);
  const [modulesLoaded, setModulesLoaded] = useState(false);
  const location = useLocation();

  // Load contextual prompts when pathname changes
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
      // Load modules if not already loaded
      if (!modulesLoaded) {
        await loadChatModules();
        setModulesLoaded(true);
      }

      // Generate bot response with reduced delay for better UX
      setTimeout(async () => {
        try {
          const botResponseText = await getBotResponse(
            messageText,
            location.pathname
          );
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: botResponseText,
            isBot: true,
            timestamp: new Date(),
          };

          setMessages((prev) => [...prev, botResponse]);
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
      }, 700); // Reduced from 1000+ for snappier responses
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

  return (
    <div className="flex flex-col h-full max-h-[600px]">
      {/* Quick Prompts */}
      <div className="p-4 border-b border-border">
        <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {contextualPrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSendMessage(prompt)}
              className="text-xs h-auto py-2 px-3"
            >
              {prompt}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-muted text-foreground p-3 rounded-lg">
                <div className="flex items-center space-x-1">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1"
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isTyping}
            size="sm"
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
      className="fixed bottom-20 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-lg z-50 hover:shadow-xl transition-shadow"
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
        <DrawerContent className="z-50">
          <DrawerHeader>
            <DrawerTitle>Chat with me</DrawerTitle>
          </DrawerHeader>
          <Suspense
            fallback={<div className="p-4 text-center">Loading chat...</div>}
          >
            <ChatContent />
          </Suspense>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] z-50">
        <SheetHeader>
          <SheetTitle>Chat with me</SheetTitle>
        </SheetHeader>
        <Suspense
          fallback={<div className="p-4 text-center">Loading chat...</div>}
        >
          <ChatContent />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};

export default ChatWidget;
