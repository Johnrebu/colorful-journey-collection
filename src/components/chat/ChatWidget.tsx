import React, { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const getContextualPrompts = (pathname: string) => {
  const prompts = {
    "/": [
      "Tell me about your skills",
      "What projects have you worked on?",
      "How can I contact you?"
    ],
    "/about": [
      "What's your background?",
      "What technologies do you use?",
      "What makes you unique?"
    ],
    "/bio": [
      "Tell me about your journey",
      "What are your interests?",
      "Where are you based?"
    ],
    "/resume": [
      "What's your experience?",
      "Can I download your resume?",
      "What are your key skills?"
    ],
    "/projects": [
      "Show me your best work",
      "What technologies did you use?",
      "Can I see the source code?"
    ],
    "/contact": [
      "How can we work together?",
      "What's your availability?",
      "What are your rates?"
    ]
  };
  
  return prompts[pathname as keyof typeof prompts] || prompts["/"];
};

const getBotResponse = (message: string, pathname: string): string => {
  const lowerMessage = message.toLowerCase();
  
  // Context-aware responses
  if (pathname === "/contact" && (lowerMessage.includes("contact") || lowerMessage.includes("work together"))) {
    return "You can reach me through the contact form on this page, or connect with me on LinkedIn and GitHub. I'm always open to discussing new opportunities!";
  }
  
  if (pathname === "/projects" && lowerMessage.includes("project")) {
    return "I've worked on various projects including web applications, mobile apps, and full-stack solutions. Check out my featured projects on this page for detailed case studies!";
  }
  
  if (pathname === "/resume" && (lowerMessage.includes("resume") || lowerMessage.includes("download"))) {
    return "You can download my complete resume using the button on this page. It includes my full work experience, education, and technical skills.";
  }
  
  // General responses
  if (lowerMessage.includes("skill") || lowerMessage.includes("technology")) {
    return "I specialize in React, TypeScript, Node.js, and modern web technologies. I'm passionate about creating responsive, user-friendly applications with clean, maintainable code.";
  }
  
  if (lowerMessage.includes("experience") || lowerMessage.includes("background")) {
    return "I'm a full-stack developer with experience in both frontend and backend development. I love solving complex problems and creating intuitive user experiences.";
  }
  
  if (lowerMessage.includes("contact") || lowerMessage.includes("reach")) {
    return "You can reach me through the contact page, or connect with me on LinkedIn and GitHub. I'm always happy to discuss new projects and opportunities!";
  }
  
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! 👋 I'm excited you're here. Feel free to ask me anything about my work, skills, or experience. How can I help you today?";
  }
  
  return "Thanks for your message! I'd love to help you learn more about my work and experience. You can explore my projects, check out my resume, or get in touch through the contact page.";
};

const ChatContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you learn more about my work and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const location = useLocation();
  const contextualPrompts = getContextualPrompts(location.pathname);

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText, location.pathname),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
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
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
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
      className="fixed bottom-20 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-lg z-40 hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
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
        <DrawerTrigger asChild>
          {trigger}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Chat with me</DrawerTitle>
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
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Chat with me</SheetTitle>
        </SheetHeader>
        <Suspense fallback={<div className="p-4 text-center">Loading chat...</div>}>
          <ChatContent />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};

export default ChatWidget;