import { City } from '@/lib/cities';
import { Service } from '@/lib/services';

interface LocalSchemaProps {
  city?: City;
  service?: Service;
  isHomepage?: boolean;
}

export default function LocalSchema({ city, service, isHomepage = false }: LocalSchemaProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "ProsperBridge Financial Advisory",
    "description": service && city 
      ? `${service.name} in ${city.name}, Ontario. Expert financial planning for major life transitions.`
      : "Financial planning for divorce, inheritance, business sales, and job loss in the Greater Toronto Area.",
    "url": isHomepage ? "https://prosperbridge.ca" : undefined,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Professional Office Complex",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L5B 0A1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.5890,
      "longitude": -79.6441
    },
    "telephone": "+1-647-555-0123",
    "email": "info@prosperbridge.ca",
    "openingHours": [
      "Mo-Fr 09:00-17:00"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "CAD",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Invoice"],
    "areaServed": city ? {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ontario",
        "containedInPlace": {
          "@type": "Country",
          "name": "Canada"
        }
      }
    } : [
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Hamilton" },
      { "@type": "City", "name": "Markham" },
      { "@type": "City", "name": "Vaughan" },
      { "@type": "City", "name": "Richmond Hill" },
      { "@type": "City", "name": "Oakville" },
      { "@type": "City", "name": "Burlington" }
    ],
    "serviceType": service ? [service.name] : [
      "Divorce Financial Planning",
      "Inheritance Financial Planning", 
      "Business Sale Financial Planning",
      "Severance & Job Loss Financial Planning"
    ],
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": "Financial Planning Services",
      "itemListElement": service ? [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }] : [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Divorce Financial Planning",
            "description": "Comprehensive financial guidance through divorce proceedings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Inheritance Financial Planning", 
            "description": "Strategic planning for inherited wealth and assets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Sale Financial Planning",
            "description": "Exit planning and wealth optimization for business owners"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Severance & Job Loss Planning",
            "description": "Financial guidance through career transitions and job loss"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema, null, 2) }}
    />
  );
}