import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financial Planning Blog | Expert Insights for GTA Families | ProsperBridge',
  description: 'Expert financial planning insights for divorce, inheritance, business sales, and severance. Stay updated with 2025 tax changes and GTA market trends.',
  keywords: 'financial planning blog Toronto, divorce finance articles, inheritance tax updates Ontario',
};

// Blog posts data - in production, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'ontario-inheritance-tax-changes-2025',
    title: '2025 Ontario Inheritance Tax Changes: What You Need to Know',
    excerpt: 'Major updates to capital gains inclusion rates and estate planning strategies that could save your family thousands in taxes.',
    author: 'Sarah Mitchell',
    authorTitle: 'CDFA®, Estate Planning Specialist',
    date: '2025-08-19',
    readTime: '8 min',
    category: 'Inheritance Planning',
    categorySlug: 'inheritance-planning',
    featured: true,
    image: '/blog/inheritance-tax-2025.jpg'
  },
  {
    slug: 'divorce-financial-planning-after-covid',
    title: 'Post-Pandemic Divorce Trends: Financial Planning in the New Normal',
    excerpt: 'How remote work, housing market changes, and economic uncertainty are reshaping divorce settlements in the Greater Toronto Area.',
    author: 'Michael Chen',
    authorTitle: 'CDFA®, Divorce Specialist',
    date: '2025-08-15',
    readTime: '10 min',
    category: 'Divorce Planning',
    categorySlug: 'divorce-planning',
    featured: true,
    image: '/blog/divorce-trends-2025.jpg'
  },
  {
    slug: 'tech-layoffs-severance-guide-2025',
    title: 'Tech Layoffs 2025: Maximizing Your Severance Package',
    excerpt: 'Essential strategies for tech professionals navigating job loss, from severance negotiation to tax optimization and career transition planning.',
    author: 'David Kumar',
    authorTitle: 'CFP®, Career Transition Advisor',
    date: '2025-08-12',
    readTime: '12 min',
    category: 'Severance Planning',
    categorySlug: 'severance-planning',
    featured: false,
    image: '/blog/tech-severance-2025.jpg'
  }
];

const categories = [
  { name: 'All Posts', slug: 'all', count: blogPosts.length },
  { name: 'Divorce Planning', slug: 'divorce-planning', count: 1 },
  { name: 'Inheritance Planning', slug: 'inheritance-planning', count: 1 },
  { name: 'Business Sale', slug: 'business-sale', count: 0 },
  { name: 'Severance Planning', slug: 'severance-planning', count: 1 },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ProsperBridge
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services/divorce-financial-planning" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 transition-colors">Locations</Link>
              <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
              <a 
                href="tel:1-800-PROSPER" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                1-800-PROSPER
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Planning Insights
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert guidance on divorce, inheritance, business sales, and career transitions. 
              Stay informed with the latest tax changes and financial strategies for 2025.
            </p>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-6 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                  category.slug === 'all' 
                    ? 'border-blue-600 text-blue-600 font-semibold' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.name} 
                {category.count > 0 && (
                  <span className="ml-2 text-sm text-gray-400">({category.count})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Link 
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center">
                  <div className="text-6xl">
                    {featuredPost.category === 'Inheritance Planning' && '🏛️'}
                    {featuredPost.category === 'Divorce Planning' && '💔'}
                    {featuredPost.category === 'Severance Planning' && '💼'}
                    {featuredPost.category === 'Business Sale' && '🏢'}
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
                  <div className="text-4xl">
                    {post.category === 'Inheritance Planning' && '🏛️'}
                    {post.category === 'Divorce Planning' && '💔'}
                    {post.category === 'Severance Planning' && '💼'}
                    {post.category === 'Business Sale' && '🏢'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Informed on Financial Planning
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get weekly insights on tax changes, market trends, and planning strategies delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button 
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            Join 5,000+ GTA professionals and families. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ProsperBridge</h3>
              <p className="text-gray-400">
                Expert financial planning for life&apos;s major transitions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/divorce-financial-planning" className="hover:text-white">Divorce Planning</Link></li>
                <li><Link href="/services/inheritance-financial-planning" className="hover:text-white">Inheritance Planning</Link></li>
                <li><Link href="/services/business-sale-planning" className="hover:text-white">Business Sale</Link></li>
                <li><Link href="/services/severance-job-loss-planning" className="hover:text-white">Severance Planning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/locations" className="hover:text-white">Locations</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-PROSPER</li>
                <li>info@prosperbridge.ca</li>
                <li>Mon-Fri 9AM-6PM EST</li>
                <li>Sat 10AM-4PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ProsperBridge Financial Planning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}