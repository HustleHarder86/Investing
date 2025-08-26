import { City } from '@/lib/cities';
import { Service } from '@/lib/services';

interface LocalSchemaProps {
  city?: City;
  service?: Service;
  isHomepage?: boolean;
}

export default function LocalSchema({ city, service, isHomepage = false }: LocalSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Life Money Financial Advisory",
    "alternateName": "Life Money",
    "description": "Specialized CFP® certified financial planning for major life transitions including divorce, inheritance, business sales, and job loss across the Greater Toronto Area.",
    "url": "https://lifemoney.ca",
    "logo": "https://lifemoney.ca/logo.png",
    "image": "https://lifemoney.ca/logo.png",
    "telephone": "+1-647-XXX-XXXX",
    "email": "info@lifemoney.ca",
    "foundingDate": "2020",
    "slogan": "Expert Financial Planning for Life's Transitions",
    "knowsAbout": [
      "Divorce Financial Planning",
      "Inheritance Tax Planning", 
      "Business Exit Planning",
      "Severance Package Optimization",
      "RRSP vs TFSA Strategy",
      "Estate Planning",
      "Tax-Efficient Investing"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Professional Office Complex",
      "addressLocality": "Mississauga",
      "addressRegion": "ON", 
      "postalCode": "L5B 0A1",
      "addressCountry": "CA"
    },
    "areaServed": [
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Hamilton" },
      { "@type": "City", "name": "Markham" },
      { "@type": "City", "name": "Vaughan" },
      { "@type": "City", "name": "Richmond Hill" },
      { "@type": "City", "name": "Oakville" },
      { "@type": "City", "name": "Burlington" },
      { "@type": "City", "name": "Milton" },
      { "@type": "City", "name": "Ajax" },
      { "@type": "City", "name": "Pickering" },
      { "@type": "City", "name": "Whitby" },
      { "@type": "City", "name": "Oshawa" },
      { "@type": "City", "name": "Newmarket" },
      { "@type": "City", "name": "Aurora" },
      { "@type": "City", "name": "King" },
      { "@type": "City", "name": "Caledon" },
      { "@type": "City", "name": "Halton Hills" },
      { "@type": "City", "name": "Georgina" },
      { "@type": "City", "name": "Uxbridge" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/life-money-financial",
      "https://www.facebook.com/lifemoneyfinancial"
    ]
  };

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "LocalBusiness"],
    "name": "Life Money Financial Advisory",
    "alternateName": "Life Money", 
    "description": service && city 
      ? `${service.name} in ${city.name}, Ontario. Expert CFP® certified financial planning for major life transitions.`
      : "CFP® certified financial planning for divorce, inheritance, business sales, and job loss in the Greater Toronto Area.",
    "url": isHomepage ? "https://lifemoney.ca" : undefined,
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema, null, 2) }}
      />
    </>
  );
}