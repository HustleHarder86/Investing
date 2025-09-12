import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

export default function FAQSection({ 
  faqs, 
  title = "Frequently Asked Questions",
  className = '' 
}: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section 
        className={`faq-section mt-12 mb-8 ${className}`}
        itemScope 
        itemType="https://schema.org/FAQPage"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
          {title}
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <h3 
                className="text-lg font-semibold text-gray-900 mb-3 flex items-start"
                itemProp="name"
              >
                <span className="text-blue-600 mr-3 flex-shrink-0 text-xl">Q:</span>
                {faq.question}
              </h3>
              <div 
                itemScope 
                itemProp="acceptedAnswer" 
                itemType="https://schema.org/Answer"
              >
                <p 
                  className="text-gray-700 leading-relaxed pl-8"
                  itemProp="text"
                >
                  <span className="text-green-600 font-semibold mr-2">A:</span>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Voice Search Optimization - Hidden but crawlable */}
        <div className="sr-only">
          {faqs.map((faq, index) => (
            <div key={`voice-${index}`}>
              <p>Question: {faq.question}</p>
              <p>Answer: {faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}