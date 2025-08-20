import { Metadata } from 'next';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

export const metadata: Metadata = {
  title: 'Maximizing EI Benefits 2025: Complete Guide for Ontario Workers | ProsperBridge',
  description: 'Comprehensive guide to Employment Insurance optimization in Ontario. Eligibility, calculations, working while on claim, and strategies to maximize your benefits.',
  keywords: 'EI benefits Ontario 2025, Employment Insurance maximization, working while on EI, EI eligibility Toronto',
};

const relatedPosts = [
  {
    title: 'Fall Financial Reset After Job Loss',
    slug: 'fall-financial-reset-after-job-loss',
    excerpt: 'Strategic financial planning guide for fall 2025 after job loss.',
    readTime: '12 min'
  },
  {
    title: 'September 2025 Tech Severance Trends',
    slug: 'september-severance-trends-tech',
    excerpt: 'Latest tech industry severance trends and negotiation strategies.',
    readTime: '10 min'
  }
];

const BlogContent = () => (
  <>
    <p className="lead text-xl text-gray-700 mb-8">
      When Marcus received his Record of Employment after 12 years with a Bay Street firm, he thought 
      applying for EI would be straightforward. "I paid into it for over a decade," he reasoned, "how 
      complicated could it be?" Three weeks later, sitting across from me in our Toronto office, he was 
      overwhelmed. His claim was delayed due to severance allocation issues, he didn't understand why his 
      benefits were less than expected, and he'd accidentally jeopardized his claim by taking on consulting 
      work without proper reporting. Marcus's story isn't unique—in 2025, with new EI rules and enhanced 
      benefits, thousands of Ontario workers are leaving money on the table simply because they don't 
      understand the system. This guide will ensure you're not one of them.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      EI Benefits in 2025: What's New and What Matters
    </h2>
    
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">📊 2025 EI Quick Facts</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• Maximum insurable earnings: $63,200 (up from $61,500)</li>
        <li>• Maximum weekly benefit: $668 (55% of average earnings)</li>
        <li>• Minimum hours needed: 420-700 (depends on regional unemployment)</li>
        <li>• Benefit duration: 14-45 weeks (based on hours and unemployment rate)</li>
        <li>• Current processing time: 28 days (automated), 42 days (manual review)</li>
        <li>• Working while on claim threshold: $75 or 25% of benefits</li>
      </ul>
    </div>

    <p className="mb-6">
      The September 2025 updates brought significant changes: enhanced sickness benefits (26 weeks), 
      simplified reporting for gig workers, and new provisions for training while on claim. Understanding 
      these changes can mean thousands of additional dollars in support.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Step 1: Determining Your Eligibility
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      The Hours Calculation That Matters
    </h3>
    
    <p className="mb-4">
      Your insurable hours in the last 52 weeks determine everything. Here's the breakdown for the GTA:
    </p>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">GTA Regional Requirements (September 2025)</h4>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Region</th>
            <th className="text-center py-2">Unemployment Rate</th>
            <th className="text-center py-2">Hours Needed</th>
            <th className="text-center py-2">Max Weeks</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Toronto</td>
            <td className="text-center">6.8%</td>
            <td className="text-center">595</td>
            <td className="text-center">45</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Mississauga/Brampton</td>
            <td className="text-center">6.5%</td>
            <td className="text-center">595</td>
            <td className="text-center">45</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">York Region</td>
            <td className="text-center">5.9%</td>
            <td className="text-center">630</td>
            <td className="text-center">43</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Durham</td>
            <td className="text-center">7.2%</td>
            <td className="text-center">560</td>
            <td className="text-center">45</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Hamilton</td>
            <td className="text-center">6.1%</td>
            <td className="text-center">630</td>
            <td className="text-center">44</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Disqualifications to Avoid
    </h3>
    
    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚠️ Common Eligibility Pitfalls</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• Quitting without "just cause" (harassment, health, significant change)</li>
        <li>• Dismissal for misconduct (not same as poor performance)</li>
        <li>• Refusing reasonable job offers while on claim</li>
        <li>• Not being available for work (vacation, illness without medical note)</li>
        <li>• Self-employment income exceeding thresholds</li>
        <li>• Attending school full-time without approval</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Step 2: Calculating Your Actual Benefits
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      The Real Math Behind Your Payment
    </h3>
    
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💰 Benefit Calculation Example</h3>
      <p className="text-gray-700 mb-3"><strong>Scenario:</strong> Software Developer, $85,000 salary</p>
      
      <ol className="space-y-2 text-gray-700">
        <li><strong>1. Weekly earnings:</strong> $85,000 ÷ 52 = $1,634</li>
        <li><strong>2. Insurable earnings:</strong> Min($1,634, $1,215) = $1,215 (capped)</li>
        <li><strong>3. Calculate average:</strong> Best 14-22 weeks of last 52</li>
        <li><strong>4. Benefit rate:</strong> $1,215 × 55% = $668/week</li>
        <li><strong>5. After tax:</strong> ~$580/week (13% withholding)</li>
        <li><strong>6. Monthly net:</strong> ~$2,320</li>
      </ol>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Variable Best Weeks Calculation
    </h3>
    
    <p className="mb-4">
      The number of "best weeks" used depends on your regional unemployment rate:
    </p>

    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
      <li>Under 6%: Best 22 weeks</li>
      <li>6% to 7%: Best 21 weeks</li>
      <li>7% to 8%: Best 20 weeks</li>
      <li>8% to 9%: Best 19 weeks</li>
      <li>Over 13%: Best 14 weeks</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Step 3: The Application Process Optimized
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Timeline for Maximum Benefits
    </h3>
    
    <div className="bg-green-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">📅 Optimal Application Timeline</h3>
      
      <h4 className="font-semibold text-gray-800 mt-3 mb-2">Day 1 (Last day of work):</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Request ROE be submitted electronically</li>
        <li>• Document final pay details</li>
        <li>• Note any vacation pay or severance</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Day 2-7:</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Apply online (don't wait for ROE)</li>
        <li>• Gather supporting documents</li>
        <li>• Register for My Service Canada Account</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 2:</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Complete bi-weekly reports</li>
        <li>• Submit additional documents if requested</li>
        <li>• Call if ROE not received (follow up)</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 3-4:</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• First payment expected (after waiting period)</li>
        <li>• Review decision letter carefully</li>
        <li>• Appeal if benefits lower than expected</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Documents You Actually Need
    </h3>
    
    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
      <li><strong>Essential:</strong> SIN, ROE (electronic preferred), banking info</li>
      <li><strong>If applicable:</strong> Severance details, pension statements</li>
      <li><strong>For appeal:</strong> Employment contract, termination letter</li>
      <li><strong>Medical EI:</strong> Doctor's note, treatment plan</li>
      <li><strong>Training approval:</strong> Course enrollment, schedule</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Step 4: Working While on EI (The Smart Way)
    </h2>

    <p className="mb-6">
      The Working While on Claim provisions allow you to earn without losing your entire benefit. 
      Here's how to maximize this opportunity:
    </p>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Working While on Claim Calculator</h3>
      
      <h4 className="font-semibold text-gray-800 mb-3">Example: $668 weekly EI benefit</h4>
      
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Weekly Earnings</th>
            <th className="text-center py-2">EI Reduction</th>
            <th className="text-center py-2">Total Income</th>
            <th className="text-center py-2">Net Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">$0</td>
            <td className="text-center">$0</td>
            <td className="text-center">$668</td>
            <td className="text-center">Baseline</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">$167 (25%)</td>
            <td className="text-center">$0</td>
            <td className="text-center">$835</td>
            <td className="text-center">+$167</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">$300</td>
            <td className="text-center">$133</td>
            <td className="text-center">$835</td>
            <td className="text-center">+$167</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">$500</td>
            <td className="text-center">$333</td>
            <td className="text-center">$835</td>
            <td className="text-center">+$167</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">$1,000</td>
            <td className="text-center">$668</td>
            <td className="text-center">$1,000</td>
            <td className="text-center">+$332</td>
          </tr>
        </tbody>
      </table>
      
      <p className="text-sm text-gray-600 mt-3">
        *50¢ reduction per dollar earned above 25% of benefits or $75 (whichever is higher)
      </p>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Strategic Part-Time Work Approach
    </h3>
    
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💡 Optimal Working Strategies</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• Keep earnings at exactly 25% of benefits for no reduction</li>
        <li>• Work 2-3 days per week maximum to stay under thresholds</li>
        <li>• Batch consulting work into specific weeks</li>
        <li>• Consider deferring invoice payments to manage income timing</li>
        <li>• Track hours carefully—over 35 hours/week loses full benefits</li>
        <li>• Report all earnings in the week worked, not when paid</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Step 5: Severance and EI Interaction
    </h2>

    <p className="mb-6">
      How your severance is structured dramatically affects when EI benefits begin:
    </p>

    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚠️ Severance Allocation Rules</h3>
      
      <h4 className="font-semibold text-gray-800 mb-3">Allocated (Delays EI):</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Salary continuation</li>
        <li>• Pay in lieu of notice</li>
        <li>• Vacation pay</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-3">Not Allocated (Doesn't Delay EI):</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• Retiring allowance for years of service</li>
        <li>• Pension payments</li>
        <li>• Legal settlement amounts</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Structuring Severance for EI Optimization
    </h3>
    
    <p className="mb-4">
      Work with your employer to structure severance optimally:
    </p>

    <ol className="space-y-3 text-gray-700 mb-8">
      <li>
        <strong>1. Lump sum retiring allowance:</strong> Doesn't delay EI, can transfer to RRSP
      </li>
      <li>
        <strong>2. Benefits continuation:</strong> Valuable but doesn't affect EI timing
      </li>
      <li>
        <strong>3. Minimize salary continuation:</strong> Each week delays EI by a week
      </li>
      <li>
        <strong>4. Separate legal settlements:</strong> Wrongful dismissal damages not allocated
      </li>
    </ol>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Step 6: Training and Education While on EI
    </h2>

    <div className="bg-green-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">✅ Approved Training Programs</h3>
      
      <h4 className="font-semibold text-gray-800 mb-3">Maintains Full EI Eligibility:</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• Skills Boost pilot program courses</li>
        <li>• Provincial referrals (Second Career, Better Jobs Ontario)</li>
        <li>• Part-time courses (less than 10 hours/week)</li>
        <li>• Online self-paced programs</li>
        <li>• Employment agency workshops</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-3">Requires Permission:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Full-time college/university programs</li>
        <li>• Intensive bootcamps</li>
        <li>• Out-of-province training</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Step 7: Avoiding Common EI Mistakes
    </h2>

    <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🚨 Costly Errors to Avoid</h3>
      <ol className="space-y-2 text-gray-700">
        <li><strong>1. Late reporting:</strong> Miss 3 reports = claim terminated</li>
        <li><strong>2. Unreported earnings:</strong> Penalties plus repayment with interest</li>
        <li><strong>3. Unavailable for work:</strong> Leaving country without notifying</li>
        <li><strong>4. Refusing work:</strong> Must have valid reason or lose benefits</li>
        <li><strong>5. Not job searching:</strong> Must prove active search if audited</li>
        <li><strong>6. Wrong earnings period:</strong> Report when worked, not paid</li>
        <li><strong>7. Ignoring correspondence:</strong> 30 days to respond or claim closed</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Special Situations and Enhanced Benefits
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Family Supplement for Low-Income Families
    </h3>
    
    <p className="mb-4">
      If your family income is under $25,921 with children, you may receive up to 80% of earnings:
    </p>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Family Supplement Calculation</h4>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Base benefit:</strong> $500/week</li>
        <li><strong>Family income:</strong> $20,000</li>
        <li><strong>Number of children:</strong> 2</li>
        <li><strong>Supplement:</strong> Additional $135/week</li>
        <li><strong>Total benefit:</strong> $635/week (up to 80% max)</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Fishing, Farming, and Self-Employment
    </h3>
    
    <p className="mb-4">
      Special provisions exist for:
    </p>

    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
      <li><strong>Fishing benefits:</strong> Based on earnings, not hours</li>
      <li><strong>Farmers:</strong> Can claim if farming income under $7,000</li>
      <li><strong>Self-employed:</strong> Must opt-in and pay premiums for 12 months</li>
      <li><strong>Gig workers:</strong> New 2025 provisions for platform workers</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Appealing EI Decisions
    </h2>

    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">📝 Appeal Process Timeline</h3>
      <ol className="space-y-2 text-gray-700">
        <li><strong>Day 1-30:</strong> Request reconsideration from Service Canada</li>
        <li><strong>Day 31-60:</strong> File appeal to Social Security Tribunal</li>
        <li><strong>Month 3-6:</strong> Tribunal hearing (phone/video/written)</li>
        <li><strong>Month 7-8:</strong> Decision rendered</li>
        <li><strong>If needed:</strong> Appeal Division or Federal Court</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      EI and Tax Planning
    </h2>

    <p className="mb-4">
      EI benefits are taxable income. Plan accordingly:
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💰 Tax Optimization Strategies</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• Request additional tax withholding to avoid April surprises</li>
        <li>• RRSP contributions reduce taxable income including EI</li>
        <li>• Claim job search expenses against employment income</li>
        <li>• Child care expenses deductible during job search</li>
        <li>• Moving expenses if relocating for new employment</li>
        <li>• Consider income splitting with spouse if applicable</li>
      </ul>
    </div>

    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">✅ Your EI Maximization Checklist</h3>
      <ul className="space-y-2 text-gray-700">
        <li>☐ Apply immediately after job loss (don't wait)</li>
        <li>☐ Structure severance to minimize allocation</li>
        <li>☐ Keep earnings under 25% threshold when working</li>
        <li>☐ Complete reports on time, every time</li>
        <li>☐ Document all job search activities</li>
        <li>☐ Consider approved training programs</li>
        <li>☐ Request additional tax withholding</li>
        <li>☐ Appeal if benefits seem incorrect</li>
        <li>☐ Plan for benefit exhaustion before 45 weeks</li>
      </ul>
    </div>

    <p className="text-lg font-semibold text-gray-900 mt-8 mb-4">
      Expert Support for Your EI Journey
    </p>
    
    <p className="mb-6">
      Maximizing EI benefits while maintaining financial stability requires careful planning and expert 
      knowledge of the system. At ProsperBridge, we help GTA professionals navigate the complexities of 
      EI, severance interaction, and career transition financing. Our comprehensive approach ensures you 
      receive every dollar you're entitled to while building a sustainable financial bridge to your next 
      opportunity.
    </p>
  </>
);

export default function BlogPostPage() {
  return (
    <BlogPostTemplate
      title="Maximizing EI Benefits 2025: Complete Guide for Ontario Workers"
      subtitle="Everything you need to know about Employment Insurance optimization"
      author="David Kumar"
      authorTitle="Benefits Optimization Specialist"
      date="2025-09-15"
      readTime="14 min"
      category="Severance Planning"
      categorySlug="severance-planning"
      content={<BlogContent />}
      relatedPosts={relatedPosts}
    />
  );
}