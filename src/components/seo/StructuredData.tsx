import React from 'react';

interface Author {
  name: string;
  title?: string;
  url?: string;
}

interface StructuredDataProps {
  type?: 'Article' | 'BlogPosting' | 'NewsArticle' | 'FAQPage' | 'HowTo';
  title: string;
  description: string;
  author: Author;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  wordCount?: number;
  readTime?: string;
  url?: string;
  mainEntityOfPage?: string;
  publisher?: {
    name: string;
    logo?: string;
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export default function StructuredData({
  type = 'BlogPosting',
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  keywords = [],
  wordCount,
  readTime,
  url,
  mainEntityOfPage,
  publisher = {
    name: 'Life Money',
    logo: 'https://lifemoney.ca/logo.png'
  },
  breadcrumbs = []
}: StructuredDataProps) {
  
  // Article/BlogPosting Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author.name,
      ...(author.title && { "jobTitle": author.title }),
      ...(author.url && { "url": author.url })
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    ...(image && { 
      "image": {
        "@type": "ImageObject",
        "url": image,
        "width": 1200,
        "height": 630
      }
    }),
    ...(keywords.length > 0 && { "keywords": keywords.join(', ') }),
    ...(wordCount && { "wordCount": wordCount }),
    ...(readTime && { "timeRequired": `PT${readTime}` }),
    ...(url && { "url": url }),
    ...(mainEntityOfPage && { "mainEntityOfPage": mainEntityOfPage }),
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      ...(publisher.logo && {
        "logo": {
          "@type": "ImageObject",
          "url": publisher.logo
        }
      })
    },
    "inLanguage": "en-CA"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Life Money",
    "description": "Financial planning and advisory services in the Greater Toronto Area",
    "url": "https://lifemoney.ca",
    "logo": publisher.logo,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "City",
      "name": "Greater Toronto Area"
    },
    "serviceType": [
      "Divorce Financial Planning",
      "Retirement Planning",
      "Inheritance Planning",
      "Business Sale Planning",
      "Severance Planning"
    ],
    "priceRange": "$$",
    "telephone": "+1-416-555-0100"
  };

  // WebPage Schema for better SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url || mainEntityOfPage,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Life Money",
      "url": "https://lifemoney.ca"
    },
    "primaryImageOfPage": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "inLanguage": "en-CA",
    "potentialAction": {
      "@type": "ReadAction",
      "target": url || mainEntityOfPage
    }
  };

  // Combine all schemas
  const allSchemas = [
    articleSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    organizationSchema,
    webPageSchema
  ];

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}