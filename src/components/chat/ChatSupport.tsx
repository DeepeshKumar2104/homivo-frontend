import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, MessageCircle, Mail, Power } from "lucide-react";
import { chatGPTService } from "@/services/chatgpt";

// Dummy DB lookup function (replace with your actual API/DB call)
async function getUserNameByEmail(email: string): Promise<string | null> {
  if (email.toLowerCase() === "deepesh@gmail.com") return "Deepesh";
  if (email.toLowerCase() === "john@gmail.com") return "John";
  return null;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"email" | "chat">("email");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen, step]);

  // Handle email submit
  const handleEmailSubmit = async () => {
    if (!email.trim()) return;
    setIsLoading(true);
    const name = await getUserNameByEmail(email.trim());
    setUserName(name);
    setIsLoading(false);
    setStep("chat");
    setMessages([
      {
        id: "greet",
        text: `Hello${name ? " " + name : ""}! 👋\nI'm your AI assistant for Homivo. How can I help you find your perfect accommodation today?`,
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  // Handle chat send
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await chatGPTService.sendMessage(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const fallbackResponse = chatGPTService.getFallbackResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (step === "email") handleEmailSubmit();
      else handleSendMessage();
    }
  };

  // End session handler
  const handleEndSession = () => {
    setStep("email");
    setEmail("");
    setUserName(null);
    setMessages([]);
    setInputValue("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl bg-gradient-to-br from-primary to-indigo-800 hover:from-primary/90 hover:to-indigo-800/90 z-50 flex items-center justify-center"
        size="icon"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-end sm:justify-end bg-black/30">
          <Card className="w-full max-w-full sm:max-w-[420px] h-[90dvh] sm:h-[70vh] max-h-[90dvh] sm:max-h-[600px] flex flex-col rounded-t-3xl sm:rounded-3xl rounded-b-none sm:rounded-b-3xl shadow-2xl bg-white/95 border border-primary/10 backdrop-blur-lg relative m-0 sm:mr-4 sm:mb-24">
            {/* Header */}
            <CardHeader className="sticky top-0 z-10 bg-transparent flex flex-row items-center justify-between px-6 py-4 border-b-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-indigo-800 shadow-lg">
                  <MessageCircle className="text-white w-6 h-6" />
                </span>
                <span className="font-bold text-lg text-primary">Homivo Chat</span>
              </div>
              <div className="flex gap-1">
                {step === "chat" && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleEndSession}
                    className="h-8 w-8 text-indigo-300 hover:bg-indigo-800/20"
                    title="End Session"
                  >
                    <Power className="h-5 w-5" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-primary hover:bg-primary/10"
                  title="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Email Step */}
              {step === "email" && (
                <div className="flex flex-col items-center justify-center h-full px-6 py-10 gap-6">
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-indigo-800 shadow-lg">
                        <Mail className="text-white w-7 h-7" />
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-1">Welcome to Homivo!</h2>
                    <p className="text-gray-700 text-sm">Let's get started. Please enter your email to continue.</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Input
                      ref={inputRef}
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isLoading}
                      className="h-12 rounded-xl bg-white/90 border-2 border-primary/20 focus:ring-2 focus:ring-primary/30 text-base"
                    />
                    <Button
                      onClick={handleEmailSubmit}
                      disabled={!email.trim() || isLoading}
                      className="h-12 rounded-xl bg-gradient-to-r from-primary to-indigo-800 text-white font-semibold text-base shadow-lg"
                    >
                      {isLoading ? "Checking..." : "Continue"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Chat Step */}
              {step === "chat" && (
                <>
                  <div className="flex-1 min-h-0">
                    <ScrollArea className="h-full max-h-[60dvh] sm:max-h-[420px] px-4 py-2">
                      <div className="space-y-4 pb-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${
                                message.isUser
                                  ? "bg-gradient-to-br from-primary to-indigo-800 text-white"
                                  : "bg-white/90 text-gray-900 border border-primary/10"
                              }`}
                            >
                              <p className="text-sm whitespace-pre-line">{message.text}</p>
                              <p className="text-xs opacity-60 mt-1 text-right">
                                {message.timestamp.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex justify-start">
                            <div className="bg-white/90 border border-primary/10 rounded-2xl px-4 py-2 flex items-center gap-1">
                              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>
                  </div>
                  {/* Input Bar */}
                  <div className="sticky bottom-0 left-0 w-full  px-3 py-3 border-t border-primary/10 z-10">
                    <div className="flex gap-2 items-center">
                      <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        disabled={isLoading}
                        className="flex-1 h-12 rounded-full bg-white shadow-sm border border-gray-200 focus:ring-2 focus:ring-primary/30 text-base px-4"
                        style={{ minWidth: 0 }}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        size="icon"
                        className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-indigo-800 text-white shadow-lg flex items-center justify-center"
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}