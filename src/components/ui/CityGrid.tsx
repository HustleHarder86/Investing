import Link from 'next/link';
import { cities, getCitiesByTier } from '@/lib/cities';

interface CityGridProps {
  showAllCities?: boolean;
  maxCities?: number;
}

export default function CityGrid({ showAllCities = false, maxCities = 12 }: CityGridProps) {
  const displayCities = showAllCities 
    ? cities 
    : [...getCitiesByTier(1), ...getCitiesByTier(2)].slice(0, maxCities);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {displayCities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div className="text-center">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {city.slug === 'mississauga' 
                    ? 'Our Office' 
                    : `${city.distanceFromMississauga}km away`
                  }
                </p>
              </div>
            </Link>
          ))}
        </div>

        {!showAllCities && cities.length > maxCities && (
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All {cities.length} Locations
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}