export interface Service {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  icon: string;
  primaryKeywords: string[];
  benefits: string[];
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const services: Service[] = [
  {
    name: "Divorce Financial Planning",
    slug: "divorce-financial-planning",
    shortName: "Divorce Planning",
    description: "Navigate the financial complexities of divorce with expert guidance on asset division, support obligations, and future security.",
    icon: "⚖️",
    primaryKeywords: [
      "divorce financial planner",
      "divorce investment advisor", 
      "separation financial planning",
      "CDFA advisor",
      "divorce pension division",
      "spousal support financial planning"
    ],
    benefits: [
      "Asset division analysis",
      "Spousal support optimization", 
      "Pension splitting strategies",
      "Tax-efficient settlements",
      "Future financial security",
      "CDFA certified guidance"
    ],
    color: {
      primary: "bg-blue-600",
      secondary: "bg-blue-100",
      accent: "text-blue-600"
    }
  },
  {
    name: "Inheritance Financial Planning",
    slug: "inheritance-financial-planning", 
    shortName: "Inheritance Planning",
    description: "Turn your inheritance into long-term wealth with strategic planning for taxes, investments, and estate protection.",
    icon: "🏛️",
    primaryKeywords: [
      "inheritance financial planner",
      "estate inheritance advisor",
      "sudden wealth advisor", 
      "inheritance tax planning",
      "estate settlement advisor",
      "inherited investment planning"
    ],
    benefits: [
      "Tax optimization strategies",
      "Investment portfolio design",
      "Estate preservation planning", 
      "Generational wealth building",
      "Probate process guidance",
      "Risk management"
    ],
    color: {
      primary: "bg-green-600", 
      secondary: "bg-green-100",
      accent: "text-green-600"
    }
  },
  {
    name: "Business Sale Financial Planning",
    slug: "business-sale-planning",
    shortName: "Business Sale Planning", 
    description: "Maximize the value of your business sale with strategic tax planning, succession strategies, and retirement preparation.",
    icon: "🏢",
    primaryKeywords: [
      "business sale financial planning",
      "business exit planning advisor",
      "capital gains planning business",
      "business succession advisor",
      "selling business retirement planning",
      "business transaction advisor"
    ],
    benefits: [
      "Capital gains optimization",
      "Tax-efficient deal structuring",
      "Succession planning",
      "Retirement readiness analysis", 
      "Investment strategy post-sale",
      "Legacy planning"
    ],
    color: {
      primary: "bg-purple-600",
      secondary: "bg-purple-100", 
      accent: "text-purple-600"
    }
  },
  {
    name: "Severance & Job Loss Planning",
    slug: "severance-job-loss-planning",
    shortName: "Severance Planning",
    description: "Navigate job loss with confidence through expert guidance on severance packages, benefits transitions, and career planning.",
    icon: "🔄",
    primaryKeywords: [
      "severance package financial advisor",
      "job loss financial planning",
      "layoff financial advisor",
      "termination package advisor", 
      "pension commutation advisor",
      "career transition advisor"
    ],
    benefits: [
      "Severance package optimization",
      "Tax strategy for packages",
      "EI benefits maximization",
      "Pension decision analysis",
      "Benefits transition planning",
      "Career pivot financial prep"
    ],
    color: {
      primary: "bg-orange-600",
      secondary: "bg-orange-100",
      accent: "text-orange-600"
    }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};