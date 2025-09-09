import { Metadata } from 'next';
import Link from 'next/link';
import scheduleData from '@/../../../../content/blog-schedule.json';

export const metadata: Metadata = {
  title: 'Blog Content Calendar | Life Money',
  description: 'Upcoming blog posts and content schedule for Life Money financial planning blog.',
  robots: 'noindex, nofollow' // Don't index the calendar page
};

const CategoryBadge = ({ category }: { category: string }) => {
  const colors = {
    'Divorce Planning': 'bg-purple-100 text-purple-800',
    'Inheritance Planning': 'bg-blue-100 text-blue-800',
    'Business Sale': 'bg-green-100 text-green-800',
    'Severance Planning': 'bg-orange-100 text-orange-800'
  };
  
  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
      {category}
    </span>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const colors = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'completed': 'bg-blue-100 text-blue-800',
    'published': 'bg-green-100 text-green-800',
    'draft': 'bg-gray-100 text-gray-800'
  };
  
  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default function BlogCalendarPage() {
  // Group posts by month
  const postsByMonth: { [key: string]: typeof scheduleData.schedule } = {};
  
  scheduleData.schedule.forEach(post => {
    const date = new Date(post.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
    if (!postsByMonth[monthName]) {
      postsByMonth[monthName] = [];
    }
    postsByMonth[monthName].push(post);
  });
  
  // Get stats
  const totalPosts = scheduleData.schedule.length;
  const publishedPosts = scheduleData.schedule.filter(p => p.status === 'published').length;
  const completedPosts = scheduleData.schedule.filter(p => p.status === 'completed').length;
  const pendingPosts = scheduleData.schedule.filter(p => p.status === 'pending').length;
  
  // Get next post to publish
  const today = new Date().toISOString().split('T')[0];
  const nextPost = scheduleData.schedule
    .filter(p => p.status === 'pending' && p.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              Life Money
            </Link>
            <div className="flex space-x-8">
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/blog/calendar" className="text-blue-600 font-semibold">
                Calendar
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Content Calendar</h1>
          <p className="text-gray-600 mb-6">
            Track and manage upcoming blog posts for Life Money
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900">{totalPosts}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600">Published</p>
              <p className="text-2xl font-bold text-green-900">{publishedPosts}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600">Completed</p>
              <p className="text-2xl font-bold text-blue-900">{completedPosts}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-900">{pendingPosts}</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-indigo-600">Next Post</p>
              <p className="text-lg font-bold text-indigo-900">
                {nextPost ? new Date(nextPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'None'}
              </p>
            </div>
          </div>
          
          {/* Next post preview */}
          {nextPost && (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
              <p className="text-sm text-blue-600 mb-1">Next Scheduled Post</p>
              <p className="font-semibold text-gray-900">{nextPost.title}</p>
              <p className="text-sm text-gray-600 mt-1">
                {new Date(nextPost.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                {' • '}{nextPost.author}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Calendar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.entries(postsByMonth).map(([month, posts]) => (
          <div key={month} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{month}</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post) => {
                    const date = new Date(post.date);
                    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const dayNumber = date.getDate();
                    const isPast = post.date < new Date().toISOString().split('T')[0];
                    
                    return (
                      <tr key={post.slug} className={isPast && post.status === 'pending' ? 'bg-red-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {dayOfWeek}, {dayNumber}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-900">{post.title}</p>
                          <p className="text-xs text-gray-500">{post.slug}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <CategoryBadge category={post.category} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {post.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={post.status} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            © 2025 Life Money. Internal tool - not for public access.
          </p>
        </div>
      </footer>
    </div>
  );
}