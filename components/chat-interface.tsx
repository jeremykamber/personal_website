"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Message } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground group"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[70vh] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-muted/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Chat with Jeremy</h3>
                  <p className="text-[10px] text-muted-foreground leading-none">AI Twin • Always Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Ask me anything!</p>
                    <p className="text-xs text-muted-foreground">
                      I know about Jeremy's projects, blog posts, and his background in PM and Eng.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Who are you?", "Recent projects?", "Hexagonal Architecture?"].map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          const e = { target: { value: q } } as any;
                          handleInputChange(e);
                        }}
                        className="text-[10px] px-2 py-1 rounded-full border border-border hover:bg-muted transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex w-full mb-4",
                    m.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl p-3 text-sm",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted text-foreground rounded-tl-none border border-border/50"
                    )}
                  >
                    <div className="prose prose-sm dark:prose-invert break-words">
                      {parseContent(m.content)}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl p-3 rounded-tl-none animate-pulse">
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground/20 animate-bounce" />
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground/20 animate-bounce [animation-delay:0.2s]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground/20 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-border bg-background/50 flex gap-2"
            >
              <Input
                placeholder="Ask something..."
                value={input}
                onChange={handleInputChange}
                className="flex-1 rounded-full bg-muted/30 focus-visible:ring-primary/20"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input || isLoading}
                className="rounded-full h-10 w-10 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper to parse citations like ^Ref^[Label](URL)
function parseContent(content: string) {
  const parts = content.split(/(\^Ref\^\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\^Ref\^\[(.*?)\]\((.*?)\)/);
    if (match) {
      const [_, label, url] = match;
      return (
        <a
          key={i}
          href={url}
          target={url.startsWith('http') ? '_blank' : '_self'}
          className="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium decoration-none"
        >
          <Sparkles className="h-3 w-3" />
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
