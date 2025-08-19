'use client';

import { useState, useEffect } from 'react';
import AIChatBot from './AIChatBot';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    // Show the widget after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show notification after another delay
      setTimeout(() => {
        if (!isOpen) {
          setHasUnread(true);
        }
      }, 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasUnread(false);
  };

  return (
    <>
      {/* Chat widget button */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <button
          onClick={handleToggle}
          className={`relative group bg-gradient-to-r from-teal-600 to-blue-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center magnetic-hover ${
            isOpen ? 'scale-0' : 'scale-100'
          }`}
        >
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 animate-ping opacity-30"></div>
          
          {/* Main icon */}
          <div className="relative z-10 text-2xl">
            🤖
          </div>
          
          {/* Unread indicator */}
          {hasUnread && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Ask me anything about financial planning!
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
          </div>
        </button>
      </div>

      {/* Chat interface */}
      <AIChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
      
      {/* Announcement popup */}
      {isVisible && !isOpen && hasUnread && (
        <div className="fixed bottom-24 right-6 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-4 shadow-xl z-30 max-w-sm">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              🤖
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-sm">AI Assistant Available</h4>
              <p className="text-slate-600 text-xs mt-1">
                I&apos;m here to help with your financial planning questions. Click to chat!
              </p>
            </div>
            <button
              onClick={() => setHasUnread(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}