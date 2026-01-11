"use client";

import dayjs from "dayjs";
import React, { useState, useRef, useEffect } from "react";
import { getGeminiResponse } from "../actions";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function DentalAIChat() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "สวัสดีค่ะ! 👋 ยินดีต้อนรับสู่ Dental AI ฉันเป็นผู้ช่วยทันตกรรมอัจฉริยะ พร้อมช่วยตอบคำถามเกี่ยวกับสุขภาพช่องปาก วิเคราะห์อาการ และให้คำแนะนำการดูแลฟัน มีอะไรให้ฉันช่วยไหมคะ? 😊",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    {
      icon: "🦷",
      text: "ฟันผุคืออะไร?",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "😬",
      text: "ฟันบิ่นต้องทำอย่างไร?",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: "🪥",
      text: "แปรงฟันอย่างไรให้ถูกวิธี?",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💎",
      text: "จัดฟันใช้เวลานานไหม?",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const handleSendMessage = () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: dayjs().toDate(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Get real AI response from Gemini
    getGeminiResponse(input)
      .then((response) => {
        const assistantMessage: Message = {
          id: Date.now().toString(),
          type: "assistant",
          content: response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      })
      .catch((error) => {
        console.error("error", error);
        const errorMessage: Message = {
          id: Date.now().toString(),
          type: "assistant",
          content: "ขออภัยด้วยค่ะ ระบบขัดข้องเล็กน้อย กรุณาลองใหม่นะคะ",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        type: "assistant",
        content:
          "สวัสดีค่ะ! 👋 ยินดีต้อนรับสู่ Dental AI ฉันเป็นผู้ช่วยทันตกรรมอัจฉริยะ พร้อมช่วยตอบคำถามเกี่ยวกับสุขภาพช่องปาก วิเคราะห์อาการ และให้คำแนะนำการดูแลฟัน มีอะไรให้ฉันช่วยไหมคะ? 😊",
        timestamp: dayjs().toDate(),
      },
    ]);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-purple-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br from-purple-600 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-300/50 group-hover:shadow-xl group-hover:shadow-purple-400/60 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">🦷</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Dental AI
                </h1>
                <p className="text-xs text-gray-500">ผู้ช่วยทันตกรรมอัจฉริยะ</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all duration-300 hover:scale-110">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2.5 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-purple-100 py-2 z-50">
                    <button
                      onClick={clearChat}
                      className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 transition-colors flex items-center gap-2"
                    >
                      <span className="text-lg">🗑️</span>
                      ล้างการสนทนา
                    </button>
                    <button className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 transition-colors flex items-center gap-2">
                      <span className="text-lg">⚙️</span>
                      ตั้งค่า
                    </button>
                    <button className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-50 transition-colors flex items-center gap-2">
                      <span className="text-lg">ℹ️</span>
                      เกี่ยวกับ
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 max-w-6xl w-full mx-auto flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6 max-w-4xl mx-auto">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === "user" ? "flex-row-reverse" : "flex-row"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Avatar */}
                <div
                  className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${
                    message.type === "assistant"
                      ? "bg-linear-to-br from-purple-500 to-indigo-500 shadow-lg shadow-purple-300/50"
                      : "bg-linear-to-br from-purple-100 to-purple-300 shadow-lg shadow-gray-300/50"
                  }`}
                >
                  <span className="text-xl">
                    {message.type === "assistant" ? "🦷" : "👤"}
                  </span>
                </div>

                {/* Message Bubble */}
                <div
                  className={`flex-1 max-w-xl ${
                    message.type === "user" ? "flex justify-end" : ""
                  }`}
                >
                  <div
                    className={`px-5 py-4 rounded-3xl shadow-md ${
                      message.type === "user"
                        ? "bg-linear-to-br from-purple-600 to-indigo-600 text-white rounded-tr-md"
                        : "bg-white text-gray-800 border border-purple-100 rounded-tl-md"
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <span
                      suppressHydrationWarning
                      className={`text-xs mt-2 block ${
                        message.type === "user"
                          ? "text-purple-100"
                          : "text-gray-400"
                      }`}
                    >
                      {mounted
                        ? new Date(message.timestamp).toLocaleTimeString(
                            "th-TH",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )
                        : "—"}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 animate-slide-up">
                <div className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center bg-linear-to-br from-purple-500 to-indigo-500 shadow-lg shadow-purple-300/50">
                  <span className="text-xl">🦷</span>
                </div>
                <div className="bg-white text-gray-900 border border-purple-100 rounded-3xl rounded-tl-md px-5 py-4 shadow-md">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce"></div>
                    <div
                      className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    ></div>
                    <div
                      className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-4 sm:px-6 lg:px-8 pb-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-gray-600 mb-3 font-medium">
                💬 คำถามที่ถามบ่อย:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q.text)}
                    className="group p-4 bg-white hover:bg-linear-to-br hover:from-purple-50 hover:to-indigo-50 border border-purple-200 rounded-2xl text-left transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-linear-to-br ${q.color} rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform`}
                      >
                        {q.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition-colors">
                        {q.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-purple-200 bg-white/80 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-4 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  placeholder="พิมพ์คำถามเกี่ยวกับสุขภาพช่องปาก..."
                  className="w-full px-5 py-4 bg-white border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-gray-800 placeholder-gray-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-purple-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="group px-6 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span className="hidden sm:inline">ส่ง</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                ฉันเป็น AI ผู้ช่วย สำหรับปัญหาร้ายแรง กรุณาปรึกษาทันตแพทย์
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #9333ea, #6366f1);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7e22ce, #4f46e5);
        }
      `}</style>
    </div>
  );
}
