'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedResponses = {
    'hello': {
      content: "Hello! I'm your AI financial assistant. I can help you with questions about divorce planning, inheritance, business sales, or job transitions. What would you like to know?",
      suggestions: ['Divorce planning costs', 'Inheritance tax rates', 'Business sale timeline', 'Severance planning']
    },
    'divorce': {
      content: "Divorce financial planning involves asset division, support calculations, and tax implications. Key considerations include: property valuation, pension splitting, child support guidelines, and tax-efficient settlements. Would you like me to explain any specific aspect?",
      suggestions: ['Asset division rules', 'Child support calculator', 'Pension splitting', 'Tax implications']
    },
    'inheritance': {
      content: "Inheritance planning helps minimize taxes and maximize what your beneficiaries receive. In Canada, we focus on capital gains, deemed dispositions, and various tax-deferral strategies. The key is planning before you need it.",
      suggestions: ['Tax-free savings', 'Trust structures', 'Will planning', 'Estate costs']
    },
    'business': {
      content: "Business sale planning involves timing, valuation, tax optimization, and succession planning. Capital gains exemptions, installment sales, and corporate structures all play important roles in maximizing your proceeds.",
      suggestions: ['Business valuation', 'Capital gains exemption', 'Sale timeline', 'Tax strategies']
    },
    'severance': {
      content: "Job transition planning includes severance optimization, benefit continuation, pension transfers, and career transition funding. We help bridge the gap between employment and ensure your financial security.",
      suggestions: ['Severance negotiation', 'RRSP transfers', 'Benefits continuation', 'Emergency planning']
    },
    'cost': {
      content: "Our fees are transparent and based on the complexity of your situation. Initial consultations are always free. For ongoing planning, we typically charge 1-2% of assets under management or project-based fees ranging from $2,500-$15,000.",
      suggestions: ['Free consultation', 'Payment options', 'Service packages', 'Value proposition']
    },
    'default': {
      content: "I understand you're asking about financial planning. While I can provide general information, every situation is unique. I'd recommend scheduling a free consultation with one of our certified financial planners for personalized advice.",
      suggestions: ['Book consultation', 'Learn about services', 'Client testimonials', 'Contact information']
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: "👋 Hi! I'm Sarah, your AI financial planning assistant. I'm here to help answer questions about our services and guide you to the right solutions. How can I help you today?",
        timestamp: new Date(),
        suggestions: ['Tell me about divorce planning', 'How much do services cost?', 'What is inheritance planning?', 'I need help with severance']
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const getBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    let responseKey = 'default';
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      responseKey = 'hello';
    } else if (lowerMessage.includes('divorce')) {
      responseKey = 'divorce';
    } else if (lowerMessage.includes('inheritance') || lowerMessage.includes('estate') || lowerMessage.includes('will')) {
      responseKey = 'inheritance';
    } else if (lowerMessage.includes('business') || lowerMessage.includes('sale') || lowerMessage.includes('sell company')) {
      responseKey = 'business';
    } else if (lowerMessage.includes('severance') || lowerMessage.includes('job') || lowerMessage.includes('layoff') || lowerMessage.includes('unemployment')) {
      responseKey = 'severance';
    } else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('fee') || lowerMessage.includes('how much')) {
      responseKey = 'cost';
    }

    const response = predefinedResponses[responseKey as keyof typeof predefinedResponses];
    
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: response.content,
      timestamp: new Date(),
      suggestions: response.suggestions
    };
  };

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(content);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              🤖
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs opacity-90">Financial Planning Help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-xl font-bold"
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white'
                  : 'bg-slate-100 text-slate-800'
              }`}>
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-white/70' : 'text-slate-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            
            {/* Suggestions */}
            {message.type === 'bot' && message.suggestions && (
              <div className="mt-2 space-y-1">
                {message.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="block text-left text-xs bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 transition-colors duration-200 w-full"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
            placeholder="Ask me anything about financial planning..."
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            disabled={isTyping}
          />
          <button
            onClick={() => sendMessage(inputValue)}
            disabled={isTyping || !inputValue.trim()}
            className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}