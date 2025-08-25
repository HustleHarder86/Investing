import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface BlogPostTemplateProps {
  title: string;
  subtitle?: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  category: string;
  categorySlug: string;
  content: React.ReactNode;
  relatedPosts?: {
    title: string;
    slug: string;
    excerpt: string;
    readTime: string;
  }[];
}

export default function BlogPostTemplate({
  title,
  subtitle,
  author,
  authorTitle,
  date,
  readTime,
  category,
  categorySlug,
  content,
  relatedPosts = []
}: BlogPostTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Money in Motion
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services/divorce-financial-planning" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 transition-colors">Locations</Link>
              <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
              <a 
                href="tel:1-647-555-0123" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                1-647-555-0123
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <Link href={`/blog/category/${categorySlug}`} className="hover:text-blue-600">{category}</Link>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b border-gray-200">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <div>
                <span className="font-semibold text-gray-900">{author}</span>
                <span className="text-sm text-gray-500 ml-2">{authorTitle}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{readTime} read</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600 font-semibold">Share this article:</span>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  Twitter
                </button>
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  LinkedIn
                </button>
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  Facebook
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{author}</h3>
                <p className="text-gray-600 text-sm mb-2">{authorTitle}</p>
                <p className="text-gray-600 text-sm">
                  Certified Financial Planner (CFP®) with over 15 years of experience helping 
                  Greater Toronto Area families navigate complex financial transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post, idx) => (
                <Link 
                  key={idx}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Financial Planning Guidance?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our certified advisors are here to help you navigate your financial transition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1-647-555-0123" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Call 1-647-555-0123
            </a>
            <Link 
              href="/services/divorce-financial-planning" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Money in Motion</h3>
              <p className="text-gray-400">
                Expert financial planning for life's major transitions.
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
                <li>1-647-555-0123</li>
                <li>info@lifemoney.ca</li>
                <li>Mon-Fri 9AM-6PM EST</li>
                <li>Sat 10AM-4PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Money in Motion Financial Planning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}