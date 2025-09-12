import React from 'react';

interface KeyTakeawaysProps {
  takeaways: string[];
  title?: string;
  className?: string;
}

export default function KeyTakeaways({ 
  takeaways, 
  title = "Key Takeaways",
  className = '' 
}: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div 
      className={`key-takeaways bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-r-xl p-6 mb-8 ${className}`}
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 
          className="text-xl font-bold text-gray-900"
          itemProp="name"
        >
          {title}
        </h2>
      </div>
      
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li 
            key={index}
            className="flex items-start"
            itemScope 
            itemProp="itemListElement" 
            itemType="https://schema.org/ListItem"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
              {index + 1}
            </span>
            <span 
              className="text-gray-800 leading-relaxed"
              itemProp="name"
            >
              {takeaway}
            </span>
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ul>

      {/* TL;DR Summary for AI */}
      <div className="mt-6 pt-4 border-t border-green-200">
        <p className="text-sm font-semibold text-green-800 uppercase tracking-wider mb-2">
          TL;DR Summary
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          {takeaways.slice(0, 3).join(' • ')}
        </p>
      </div>

      {/* Structured data for voice search */}
      <meta itemProp="numberOfItems" content={String(takeaways.length)} />
      <meta itemProp="itemListOrder" content="Ascending" />
    </div>
  );
}