'use client';

import React, { useState } from 'react';

export interface RelatedQuestion {
  question: string;
  answer: string;
}

interface RelatedQuestionsProps {
  questions: string[] | RelatedQuestion[];
  title?: string;
  className?: string;
}

export default function RelatedQuestions({
  questions,
  title = "People Also Ask",
  className = ''
}: RelatedQuestionsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!questions || questions.length === 0) return null;

  // Convert to RelatedQuestion format if old string array format is used
  const questionItems: RelatedQuestion[] = questions.map(q =>
    typeof q === 'string'
      ? { question: q, answer: '' }
      : q
  );

  const handleQuestionClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className={`related-questions bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 ${className}`}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 8.228a4 4 0 015.657 0m2.829 2.829a4 4 0 01-5.657 0m-2.829-2.829a4 4 0 000 5.657m2.829 2.829a4 4 0 005.657 0M15 12h.01M9 12h.01M12 12h.01m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>
      </div>

      <div className="grid gap-3">
        {questionItems.map((item, index) => (
          <div
            key={index}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            className="bg-white bg-opacity-70 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => handleQuestionClick(index)}
              className="w-full p-4 hover:bg-opacity-100 transition-all cursor-pointer group text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-expanded={expandedIndex === index}
              aria-label={`${expandedIndex === index ? 'Collapse' : 'Expand'} answer for: ${item.question}`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-gray-800 group-hover:text-purple-700 transition-colors flex-1"
                  itemProp="name"
                >
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-all flex-shrink-0 ml-3 ${
                    expandedIndex === index ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Expandable answer section */}
            {item.answer && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div
                  className="px-4 pb-4 text-gray-700"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text" className="leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional context for search engines */}
      <div className="mt-4 pt-4 border-t border-purple-200">
        <p className="text-xs text-gray-600 italic">
          Related searches: {questionItems.slice(0, 3).map(q =>
            typeof q === 'string' ? q : q.question
          ).join(' | ')}
        </p>
        {questionItems.some(q => !q.answer) && (
          <p className="text-xs text-gray-500 mt-1">
            Click any question to expand the answer
          </p>
        )}
      </div>
    </section>
  );
}