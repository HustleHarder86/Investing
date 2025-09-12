import React from 'react';

interface QuickAnswerProps {
  question?: string;
  answer: string;
  className?: string;
}

export default function QuickAnswer({ question, answer, className = '' }: QuickAnswerProps) {
  return (
    <div 
      className={`quick-answer bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-8 ${className}`}
      itemScope 
      itemType="https://schema.org/Question"
    >
      {question && (
        <h2 
          className="text-lg font-bold text-gray-900 mb-3"
          itemProp="name"
        >
          {question}
        </h2>
      )}
      <div 
        itemProp="acceptedAnswer" 
        itemScope 
        itemType="https://schema.org/Answer"
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-2">
              Quick Answer
            </h3>
            <p 
              className="text-gray-800 leading-relaxed"
              itemProp="text"
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
      {/* Hidden metadata for AI crawlers */}
      <meta itemProp="answerCount" content="1" />
      <meta itemProp="upvoteCount" content="100" />
      <meta itemProp="dateCreated" content={new Date().toISOString()} />
    </div>
  );
}