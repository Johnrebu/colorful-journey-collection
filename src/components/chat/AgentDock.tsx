import React, { useState, useRef, FormEvent, KeyboardEvent, ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageSquare, Mic, Send, X, Sparkles } from "lucide-react";

export type AgentDockMode = "idle" | "composing" | "working";

export type AgentDockProps = {
  agentName?: string;
  avatarSrc?: string;
  className?: string;
  idleStatus?: string;
  workingStatus?: string;
  onMessageSubmit?: (message: string) => void | Promise<void>;
  onVoiceClick?: () => void;
  isWorking?: boolean;
};

const dockTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function AgentDock({
  agentName = "Johnson's AI Assistant",
  avatarSrc = "/profile-photo.jpg",
  className = "",
  idleStatus = "Ready to assist",
  workingStatus = "Thinking...",
  onMessageSubmit,
  onVoiceClick,
  isWorking = false,
}: AgentDockProps) {
  const [mode, setMode] = useState<AgentDockMode>("idle");
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const currentMode = isWorking ? "working" : mode;

  function openComposer() {
    setMode("composing");
    window.requestAnimationFrame(() => textareaRef.current?.focus());
  }

  async function submitMessage() {
    const nextMessage = message.trim();
    if (!nextMessage) {
      openComposer();
      return;
    }
    setMessage("");
    setMode("working");
    await onMessageSubmit?.(nextMessage);
    setMode("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mode === "composing") {
      void submitMessage();
      return;
    }
    openComposer();
  }

  function handleTextareaKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }
    event.preventDefault();
    void submitMessage();
  }

  return (
    <form className={`w-full ${className}`} onSubmit={handleSubmit}>
      <div className="flex w-full flex-col-reverse overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-2.5 text-white shadow-xl dark:bg-zinc-950 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <img
            alt={agentName}
            aria-hidden="true"
            className="size-9 shrink-0 rounded-xl object-cover ring-2 ring-[#4285F4]/30"
            height={36}
            src={avatarSrc}
            width={36}
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold leading-none text-slate-100 dark:text-zinc-100 flex items-center gap-1.5">
              <span>{agentName}</span>
              <Sparkles className="size-3.5 text-[#4285F4] animate-pulse" />
            </p>
            <AnimatePresence initial={false} mode="popLayout">
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 truncate text-xs text-slate-400 dark:text-zinc-400"
                exit={{ opacity: 0, y: -6 }}
                initial={{ opacity: 0, y: 6 }}
                key={currentMode}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                {currentMode === "working" ? workingStatus : idleStatus}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <DockButton
              icon={<Mic className="size-4 text-[#EA4335]" />}
              label="Voice"
              shortcut="V"
              onClick={onVoiceClick}
              type="button"
            />
            <DockButton
              icon={
                mode === "composing" ? (
                  <Send className="size-4 text-[#34A853]" />
                ) : (
                  <MessageSquare className="size-4 text-[#4285F4]" />
                )
              }
              label={mode === "composing" ? "Send" : "Chat"}
              shortcut="C"
              type="submit"
            />
          </div>
        </div>
        <motion.div
          animate={{
            height: mode === "composing" ? 110 : 0,
            opacity: mode === "composing" ? 1 : 0,
          }}
          aria-hidden={mode !== "composing"}
          className="overflow-hidden"
          initial={false}
          transition={shouldReduceMotion ? { duration: 0 } : dockTransition}
        >
          <div className="relative mb-2">
            <button
              aria-label="Close composer"
              className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-md text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
              onClick={() => setMode("idle")}
              type="button"
            >
              <X className="size-3.5" />
            </button>
            <textarea
              aria-label="Message agent"
              className="h-24 w-full resize-none bg-transparent px-2.5 py-2 pr-9 text-sm leading-6 outline-none placeholder:text-slate-500 text-slate-100"
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder="Ask anything about Johnson's skills, experience, projects..."
              ref={textareaRef}
              value={message}
            />
          </div>
        </motion.div>
      </div>
    </form>
  );
}

function DockButton({
  icon,
  label,
  shortcut,
  type = "button",
  onClick,
}: {
  icon: ReactNode;
  label: string;
  shortcut: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button
      className="flex h-9 items-center gap-1.5 rounded-lg px-2 text-xs font-medium text-slate-200 hover:bg-white/10 transition-all active:scale-95"
      onClick={onClick}
      type={type}
    >
      <span className="size-4 flex items-center justify-center">{icon}</span>
      <span>{label}</span>
      <kbd className="hidden sm:flex size-5 items-center justify-center rounded bg-white/10 font-mono text-[10px] text-slate-300">
        {shortcut}
      </kbd>
    </button>
  );
}

export default AgentDock;
