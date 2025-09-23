import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import QuickAnswer from '@/components/seo/QuickAnswer';
import FAQSection, { FAQItem } from '@/components/seo/FAQSection';
import KeyTakeaways from '@/components/seo/KeyTakeaways';
import RelatedQuestions, { RelatedQuestion } from '@/components/seo/RelatedQuestions';
import StructuredData from '@/components/seo/StructuredData';

interface BlogPostTemplateProps {
  title: string;
  subtitle?: string;
  author: string;
  authorTitle?: string;
  date: string;
  readTime: string;
  category: string;
  categorySlug?: string;
  excerpt: string;
  keywords?: string[];
  quickAnswer?: string;
  keyTakeaways?: string[];
  faqs?: FAQItem[];
  relatedQuestions?: string[] | RelatedQuestion[];
  content?: React.ReactNode;
  children?: React.ReactNode;
  relatedPosts?: {
    title: string;
    slug: string;
    excerpt: string;
    readTime: string;
  }[];
  wordCount?: number;
  image?: string;
  url?: string;
}

export default function BlogPostTemplateEnhanced({
  title,
  subtitle,
  author,
  authorTitle = 'Financial Advisor',
  date,
  readTime,
  category,
  categorySlug = category.toLowerCase().replace(/\s+/g, '-'),
  excerpt,
  keywords = [],
  quickAnswer,
  keyTakeaways = [],
  faqs = [],
  relatedQuestions = [],
  content,
  children,
  relatedPosts = [],
  wordCount,
  image = '/images/blog-default.jpg',
  url
}: BlogPostTemplateProps) {

  // Use provided FAQs or empty array - no auto-generation of generic content
  const defaultFAQs: FAQItem[] = faqs;

  // Generate default related questions if none provided
  const defaultRelatedQuestions = relatedQuestions.length === 0 ? [
    { question: `How much does ${category.toLowerCase()} cost in Toronto?`, answer: '' },
    { question: `What are the best ${category.toLowerCase()} strategies for 2025?`, answer: '' },
    { question: `How do I find a ${category.toLowerCase()} advisor near me?`, answer: '' },
    { question: `What documents do I need for ${category.toLowerCase()}?`, answer: '' },
    { question: `Is ${category.toLowerCase()} tax deductible in Ontario?`, answer: '' }
  ] : relatedQuestions;

  // Generate default key takeaways if none provided
  const defaultKeyTakeaways = keyTakeaways.length === 0 ? [
    `Understanding ${title.toLowerCase()} is crucial for financial success`,
    `Professional guidance can save thousands in taxes and fees`,
    `Early planning leads to better outcomes`,
    `GTA residents have unique considerations for ${category.toLowerCase()}`,
    `Taking action now prevents costly mistakes later`
  ] : keyTakeaways;

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData
        type="BlogPosting"
        title={title}
        description={excerpt}
        author={{ name: author, title: authorTitle }}
        datePublished={date}
        dateModified={new Date().toISOString()}
        image={image}
        keywords={keywords}
        wordCount={wordCount}
        readTime={readTime}
        url={url}
        breadcrumbs={[
          { name: 'Home', url: 'https://lifemoney.ca' },
          { name: 'Blog', url: 'https://lifemoney.ca/blog' },
          { name: category, url: `https://lifemoney.ca/blog/category/${categorySlug}` },
          { name: title, url: url || '#' }
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Life Money
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/services/divorce-financial-planning" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
                <Link href="/locations" className="text-gray-700 hover:text-blue-600 transition-colors">Locations</Link>
                <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <Link href={`/blog/category/${categorySlug}`} className="hover:text-blue-600">{category}</Link>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
            )}
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={date}>{new Date(date).toLocaleDateString('en-CA', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{readTime} read</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                <Link href={`/blog/category/${categorySlug}`} className="hover:text-blue-600">
                  {category}
                </Link>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Quick Answer Box - For AI Extraction */}
            {quickAnswer && (
              <QuickAnswer 
                answer={quickAnswer}
                className="mb-8"
              />
            )}

            {/* Key Takeaways - Early in content for AI */}
            {defaultKeyTakeaways.length > 0 && (
              <KeyTakeaways 
                takeaways={defaultKeyTakeaways}
                className="mb-8"
              />
            )}

            {/* Main Content */}
            {content || children}

            {/* FAQ Section - Critical for featured snippets */}
            {defaultFAQs.length > 0 && (
              <FAQSection 
                faqs={defaultFAQs}
                className="mt-12"
              />
            )}

            {/* Related Questions - People Also Ask */}
            {defaultRelatedQuestions.length > 0 && (
              <RelatedQuestions 
                questions={defaultRelatedQuestions}
                className="mt-8"
              />
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((post, index) => (
                  <Link 
                    key={index}
                    href={`/blog/${post.slug}`}
                    className="group block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                    <span className="text-blue-600 text-sm font-medium">
                      {post.readTime} read →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Take Control of Your Financial Future?</h2>
            <p className="mb-6 text-blue-50">
              Get personalized {category.toLowerCase()} advice from Toronto's trusted financial advisors.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Schedule Your Free Consultation
            </Link>
          </section>

          {/* Share Section */}
          <div className="mt-8 flex items-center justify-between py-6 border-t border-gray-200">
            <Link 
              href="/blog"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </button>
          </div>
        </article>
      </div>
    </>
  );
}