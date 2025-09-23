import React from 'react';

interface RelatedQuestionsProps {
  questions: string[];
  title?: string;
  className?: string;
}

export default function RelatedQuestions({
  questions,
  title = "People Also Ask",
  className = ''
}: RelatedQuestionsProps) {
  if (!questions || questions.length === 0) return null;

  const handleQuestionClick = (question: string) => {
    // Find the FAQ section on the page
    const faqSection = document.querySelector('.faq-section');
    if (faqSection) {
      // Smooth scroll to FAQ section
      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Optional: Highlight the relevant FAQ if it exists
      setTimeout(() => {
        const faqItems = faqSection.querySelectorAll('[itemProp="mainEntity"]');
        faqItems.forEach(item => {
          const questionText = item.querySelector('[itemProp="name"]')?.textContent;
          if (questionText && questionText.toLowerCase().includes(question.toLowerCase().split(' ').slice(0, 3).join(' '))) {
            item.classList.add('ring-2', 'ring-purple-500', 'ring-opacity-50');
            setTimeout(() => {
              item.classList.remove('ring-2', 'ring-purple-500', 'ring-opacity-50');
            }, 2000);
          }
        });
      }, 500);
    }
  };

  return (
    <section
      className={`related-questions bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 ${className}`}
      itemScope
      itemType="https://schema.org/WebPage"
      itemProp="relatedLink"
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
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(question)}
            className="bg-white bg-opacity-70 rounded-lg p-4 hover:bg-opacity-100 transition-all cursor-pointer group text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            itemScope
            itemType="https://schema.org/Question"
            aria-label={`View answer for: ${question}`}
          >
            <div className="flex items-center justify-between">
              <h3
                className="text-gray-800 group-hover:text-purple-700 transition-colors flex-1"
                itemProp="name"
              >
                {question}
              </h3>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 ml-3 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {/* Voice search optimization */}
            <meta itemProp="answerCount" content="1" />
            <meta itemProp="suggestedAnswer" content={`Learn more about ${question.toLowerCase()}`} />
          </button>
        ))}
      </div>

      {/* Additional context for search engines */}
      <div className="mt-4 pt-4 border-t border-purple-200">
        <p className="text-xs text-gray-600 italic">
          Related searches: {questions.slice(0, 3).join(' | ')}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Click any question above to see relevant answers in the FAQ section
        </p>
      </div>
    </section>
  );
}