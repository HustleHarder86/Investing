export interface City {
  name: string;
  slug: string;
  tier: 1 | 2 | 3 | 4;
  population: number;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromMississauga: number;
  demographics: {
    medianAge: number;
    medianHouseholdIncome: number;
    homeOwnershipRate: number;
    averageHomePrice: number;
  };
  neighborhoods: string[];
  landmarks: string[];
  economicProfile: string;
  localChallenges: string[];
}

export const cities: City[] = [
  // Tier 1 - Major centers
  {
    name: "Toronto",
    slug: "toronto",
    tier: 1,
    population: 2794356,
    description: "Canada's largest city and financial capital, home to the Toronto Stock Exchange and major financial institutions",
    coordinates: { lat: 43.6532, lng: -79.3832 },
    distanceFromMississauga: 25,
    demographics: {
      medianAge: 39.3,
      medianHouseholdIncome: 84500,
      homeOwnershipRate: 68.2,
      averageHomePrice: 1150000
    },
    neighborhoods: [
      "Downtown Core", "North York", "Scarborough", "Etobicoke", "York", 
      "East York", "The Beaches", "Leslieville", "The Junction", "High Park",
      "Rosedale", "Forest Hill", "Lawrence Park", "Leaside", "The Danforth"
    ],
    landmarks: [
      "CN Tower", "Toronto Stock Exchange", "Royal Ontario Museum", 
      "Casa Loma", "Harbourfront Centre", "University of Toronto",
      "Toronto City Hall", "Rogers Centre", "Scotiabank Arena",
      "Distillery District", "St. Lawrence Market", "Financial District"
    ],
    economicProfile: "Major financial hub with banking, insurance, and investment sectors. High concentration of Bay Street professionals, tech companies, and real estate activity.",
    localChallenges: [
      "High cost of living and housing prices",
      "Complex divorce asset valuations due to expensive real estate",
      "Business sale opportunities in competitive tech market",
      "Inheritance tax planning for high-net-worth individuals",
      "Severance negotiations in financial services sector"
    ]
  },
  {
    name: "Mississauga",
    slug: "mississauga",
    tier: 1,
    population: 717961,
    description: "Life Money Financial Advisory's home base in the heart of the GTA",
    coordinates: { lat: 43.5890, lng: -79.6441 },
    distanceFromMississauga: 0,
    demographics: {
      medianAge: 37.8,
      medianHouseholdIncome: 79500,
      homeOwnershipRate: 74.5,
      averageHomePrice: 980000
    },
    neighborhoods: [
      "Port Credit", "Streetsville", "Clarkson", "Lakeview", "Meadowvale", 
      "Erin Mills", "Square One District", "Cooksville", "Malton", "Heartland"
    ],
    landmarks: [
      "Square One Shopping Centre", "Port Credit Harbour", "Credit Valley Hospital",
      "University of Toronto Mississauga", "Living Arts Centre", "Celebration Square"
    ],
    economicProfile: "Major suburban center with diverse economy including corporate headquarters, manufacturing, and service industries.",
    localChallenges: [
      "Growing property values in transit-oriented developments",
      "Diverse population requiring multilingual financial services",
      "Business succession planning for family enterprises",
      "Estate planning for multi-generational families"
    ]
  },
  {
    name: "Brampton",
    slug: "brampton",
    tier: 1,
    population: 656480,
    description: "Growing suburban community in Peel Region",
    coordinates: { lat: 43.7315, lng: -79.7624 },
    distanceFromMississauga: 15
  },
  {
    name: "Hamilton",
    slug: "hamilton",
    tier: 1,
    population: 569353,
    description: "Steel city with growing tech and finance sectors",
    coordinates: { lat: 43.2557, lng: -79.8711 },
    distanceFromMississauga: 45
  },
  {
    name: "Markham",
    slug: "markham",
    tier: 1,
    population: 338503,
    description: "High-tech hub with many business professionals",
    coordinates: { lat: 43.8561, lng: -79.3370 },
    distanceFromMississauga: 35
  },
  
  // Tier 2 - Major suburbs
  {
    name: "Vaughan",
    slug: "vaughan",
    tier: 2,
    population: 323103,
    description: "Affluent community north of Toronto",
    coordinates: { lat: 43.8361, lng: -79.4982 },
    distanceFromMississauga: 30
  },
  {
    name: "Richmond Hill",
    slug: "richmond-hill",
    tier: 2,
    population: 195022,
    description: "Upscale York Region community",
    coordinates: { lat: 43.8828, lng: -79.4403 },
    distanceFromMississauga: 40
  },
  {
    name: "Oakville",
    slug: "oakville",
    tier: 2,
    population: 193832,
    description: "Affluent lakefront community",
    coordinates: { lat: 43.4675, lng: -79.6877 },
    distanceFromMississauga: 20
  },
  {
    name: "Burlington",
    slug: "burlington",
    tier: 2,
    population: 186948,
    description: "Mature suburban community between Toronto and Hamilton",
    coordinates: { lat: 43.3255, lng: -79.7990 },
    distanceFromMississauga: 35
  },
  {
    name: "Milton",
    slug: "milton",
    tier: 2,
    population: 132979,
    description: "Fast-growing community in Halton Region",
    coordinates: { lat: 43.5183, lng: -79.8774 },
    distanceFromMississauga: 25
  },

  // Tier 3 - Durham and York Region
  {
    name: "Ajax",
    slug: "ajax",
    tier: 3,
    population: 126666,
    description: "Durham Region community east of Toronto",
    coordinates: { lat: 43.8509, lng: -79.0204 },
    distanceFromMississauga: 55
  },
  {
    name: "Pickering",
    slug: "pickering",
    tier: 3,
    population: 99186,
    description: "Established Durham Region community",
    coordinates: { lat: 43.8384, lng: -79.0868 },
    distanceFromMississauga: 50
  },
  {
    name: "Whitby",
    slug: "whitby",
    tier: 3,
    population: 138501,
    description: "Historic Durham Region town",
    coordinates: { lat: 43.8975, lng: -78.9429 },
    distanceFromMississauga: 60
  },
  {
    name: "Oshawa",
    slug: "oshawa",
    tier: 3,
    population: 166000,
    description: "Eastern GTA automotive center",
    coordinates: { lat: 43.8971, lng: -78.8658 },
    distanceFromMississauga: 70
  },
  {
    name: "Newmarket",
    slug: "newmarket",
    tier: 3,
    population: 87942,
    description: "Historic York Region community",
    coordinates: { lat: 44.0592, lng: -79.4613 },
    distanceFromMississauga: 50
  },

  // Tier 4 - Outer communities
  {
    name: "Aurora",
    slug: "aurora",
    tier: 4,
    population: 62057,
    description: "Established York Region town",
    coordinates: { lat: 44.0065, lng: -79.4504 },
    distanceFromMississauga: 55
  },
  {
    name: "King",
    slug: "king",
    tier: 4,
    population: 27333,
    description: "Rural township in York Region",
    coordinates: { lat: 43.9334, lng: -79.5225 },
    distanceFromMississauga: 45
  },
  {
    name: "Caledon",
    slug: "caledon",
    tier: 4,
    population: 71183,
    description: "Rural Peel Region community",
    coordinates: { lat: 43.8667, lng: -79.9167 },
    distanceFromMississauga: 40
  },
  {
    name: "Halton Hills",
    slug: "halton-hills",
    tier: 4,
    population: 62951,
    description: "Rural Halton Region community",
    coordinates: { lat: 43.6455, lng: -79.9186 },
    distanceFromMississauga: 35
  },
  {
    name: "Georgina",
    slug: "georgina",
    tier: 4,
    population: 48146,
    description: "Northern York Region lakefront community",
    coordinates: { lat: 44.2886, lng: -79.4365 },
    distanceFromMississauga: 80
  },
  {
    name: "Uxbridge",
    slug: "uxbridge",
    tier: 4,
    population: 21176,
    description: "Rural Durham Region township",
    coordinates: { lat: 44.1084, lng: -79.1204 },
    distanceFromMississauga: 70
  }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getCitiesByTier = (tier: 1 | 2 | 3 | 4): City[] => {
  return cities.filter(city => city.tier === tier);
};