import { Metadata } from 'next';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

export const metadata: Metadata = {
  title: 'Child Support Modifications for School Year 2025: Complete Ontario Guide | Life Money',
  description: 'Navigate child support adjustments for back-to-school 2025. Private school costs, extracurricular expenses, and Section 7 modifications for GTA families.',
  keywords: 'child support modifications Ontario 2025, school expenses child support, Section 7 expenses Toronto, private school support calculations',
};

const relatedPosts = [
  {
    title: 'Back-to-School Budgeting for Newly Divorced Parents',
    slug: 'back-to-school-budgeting-divorced-parents',
    excerpt: 'Financial strategies for managing school costs post-divorce.',
    readTime: '9 min'
  },
  {
    title: 'Toronto Real Estate Division in Divorce',
    slug: 'toronto-real-estate-division-september',
    excerpt: 'Navigate property division to maintain school districts.',
    readTime: '13 min'
  }
];

const BlogContent = () => (
  <>
    <p className="lead text-xl text-gray-700 mb-8">
      September hit differently for Marcus this year. As his three children excitedly prepared for their 
      return to school—his eldest starting Grade 9 at Upper Canada College, the twins entering their 
      specialized arts program—he stared at an expense spreadsheet that would have made his eyes water even 
      during his marriage. But now, navigating these costs with his ex-spouse through their separation 
      agreement felt like negotiating international trade deals. The $35,000 UCC tuition, $8,000 in hockey 
      fees, $4,500 for music lessons, plus regular support payments were creating a financial storm. "The 
      agreement we signed in January doesn't even cover half of what September is throwing at us," he told 
      me. If you're facing similar challenges this school year, understanding Ontario's child support 
      modification rules and Section 7 expenses could save your family thousands while ensuring your 
      children's needs are met.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Understanding Section 7 Expenses: Beyond Basic Support
    </h2>
    
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">📊 Section 7 Special Expenses Defined</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Childcare:</strong> Work or education-related daycare</li>
        <li>• <strong>Medical/Dental:</strong> Uninsured health expenses over $100/year</li>
        <li>• <strong>Health insurance:</strong> Premiums for extended coverage</li>
        <li>• <strong>Education:</strong> Private school, tutoring, post-secondary</li>
        <li>• <strong>Extracurricular:</strong> Sports, arts, music activities</li>
        <li>• <strong>Other:</strong> Extraordinary expenses for gifted/special needs</li>
      </ul>
    </div>

    <p className="mb-6">
      The September 2025 school year brings unique challenges: private school tuitions have increased 8-12%, 
      extracurricular costs are up 15%, and new technology requirements add unexpected expenses. Understanding 
      how these qualify as Section 7 expenses is crucial for fair cost-sharing.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      When Child Support Modifications Are Justified
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Material Change in Circumstances
    </h3>
    
    <p className="mb-4">
      Ontario courts require a "material change" to modify support. September often triggers these:
    </p>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Qualifying School-Related Changes</h4>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold text-green-700 mb-2">✅ Likely Successful</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Child starts private school</li>
            <li>• Special needs diagnosis</li>
            <li>• Gifted program enrollment</li>
            <li>• Elite sports team selection</li>
            <li>• Post-secondary commencement</li>
            <li>• Income change >15%</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-red-700 mb-2">❌ Unlikely to Succeed</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Regular grade progression</li>
            <li>• Inflation adjustments only</li>
            <li>• Voluntary activity choices</li>
            <li>• Convenience preferences</li>
            <li>• Brand name supplies</li>
            <li>• Duplicate equipment</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Private School Costs: The September Battleground
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      GTA Private School Landscape 2025
    </h3>
    
    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚠️ Private School Tuition Ranges</h3>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">School Type</th>
            <th className="text-center py-2">Annual Tuition</th>
            <th className="text-center py-2">Additional Costs</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Elite Independent (UCC, BSS)</td>
            <td className="text-center">$35,000-42,000</td>
            <td className="text-center">$5,000-10,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Mid-Tier Private</td>
            <td className="text-center">$20,000-30,000</td>
            <td className="text-center">$3,000-5,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Montessori/Waldorf</td>
            <td className="text-center">$15,000-22,000</td>
            <td className="text-center">$2,000-3,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Religious Schools</td>
            <td className="text-center">$8,000-15,000</td>
            <td className="text-center">$1,500-2,500</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">French Lycée</td>
            <td className="text-center">$18,000-24,000</td>
            <td className="text-center">$2,500-4,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Negotiating Private School as Section 7
    </h3>
    
    <p className="mb-4">
      Courts consider multiple factors for private school expenses:
    </p>

    <ol className="space-y-3 text-gray-700 mb-8">
      <li>
        <strong>1. Historical enrollment:</strong> Was child already attending before separation?
      </li>
      <li>
        <strong>2. Parents' education:</strong> Did parents attend private school?
      </li>
      <li>
        <strong>3. Financial capacity:</strong> Combined income typically needs to exceed $200,000
      </li>
      <li>
        <strong>4. Child's needs:</strong> Special programs not available publicly
      </li>
      <li>
        <strong>5. Both parents' agreement:</strong> Unilateral enrollment rarely succeeds
      </li>
    </ol>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Calculating Proportional Sharing of Expenses
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Section 7 Expense Sharing Formula</h3>
      
      <h4 className="font-semibold text-gray-800 mb-3">Example: Two-Parent Scenario</h4>
      
      <table className="w-full mb-4">
        <tbody>
          <tr className="border-b">
            <td className="py-2">Parent A Income</td>
            <td className="text-right">$120,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Parent B Income</td>
            <td className="text-right">$80,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Combined Income</td>
            <td className="text-right">$200,000</td>
          </tr>
          <tr className="border-b font-bold">
            <td className="py-2">Parent A Share</td>
            <td className="text-right">60%</td>
          </tr>
          <tr className="border-b font-bold">
            <td className="py-2">Parent B Share</td>
            <td className="text-right">40%</td>
          </tr>
        </tbody>
      </table>
      
      <h4 className="font-semibold text-gray-800 mb-3">Applied to School Expenses</h4>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Expense</th>
            <th className="text-center py-2">Total</th>
            <th className="text-center py-2">Parent A (60%)</th>
            <th className="text-center py-2">Parent B (40%)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Private school tuition</td>
            <td className="text-center">$25,000</td>
            <td className="text-center">$15,000</td>
            <td className="text-center">$10,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Hockey (rep team)</td>
            <td className="text-center">$8,000</td>
            <td className="text-center">$4,800</td>
            <td className="text-center">$3,200</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Tutoring</td>
            <td className="text-center">$3,600</td>
            <td className="text-center">$2,160</td>
            <td className="text-center">$1,440</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">School uniforms</td>
            <td className="text-center">$1,200</td>
            <td className="text-center">$720</td>
            <td className="text-center">$480</td>
          </tr>
          <tr className="font-bold">
            <td className="py-2">Annual Total</td>
            <td className="text-center">$37,800</td>
            <td className="text-center">$22,680</td>
            <td className="text-center">$15,120</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Extracurricular Activities: Drawing the Line
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      What Courts Consider "Extraordinary"
    </h3>
    
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💡 Extraordinary vs. Regular Activities</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold text-green-700 mb-2">Generally Extraordinary</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Rep/competitive sports teams</li>
            <li>• Private music lessons</li>
            <li>• Elite dance programs</li>
            <li>• Specialized camps</li>
            <li>• Travel teams</li>
            <li>• Equipment over $500</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-blue-700 mb-2">Generally Regular</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• House league sports</li>
            <li>• School band/choir</li>
            <li>• Recreational swimming</li>
            <li>• Local day camps</li>
            <li>• School clubs</li>
            <li>• Basic equipment</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      The September Activity Enrollment Surge
    </h3>
    
    <p className="mb-4">
      September registrations often create conflict. Here's how to navigate:
    </p>

    <div className="bg-green-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Best Practices for Activity Enrollment</h4>
      <ul className="space-y-2 text-gray-700">
        <li>✅ <strong>Communicate first:</strong> Email proposed activities with costs</li>
        <li>✅ <strong>Provide options:</strong> Offer alternatives at different price points</li>
        <li>✅ <strong>Document historically:</strong> Show continuity from marriage</li>
        <li>✅ <strong>Consider capacity:</strong> Respect both parents' financial limits</li>
        <li>✅ <strong>Child's input:</strong> Age-appropriate involvement in decisions</li>
        <li>❌ <strong>Avoid:</strong> Unilateral enrollment expecting reimbursement</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Post-Secondary Education: The Looming Expense
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      University Costs 2025-2026
    </h3>
    
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Ontario University Annual Costs</h4>
      
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Expense Category</th>
            <th className="text-center py-2">Living at Home</th>
            <th className="text-center py-2">On Campus</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Tuition (Arts/Science)</td>
            <td className="text-center">$6,500</td>
            <td className="text-center">$6,500</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Tuition (Engineering)</td>
            <td className="text-center">$14,000</td>
            <td className="text-center">$14,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Books & Supplies</td>
            <td className="text-center">$1,500</td>
            <td className="text-center">$1,500</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Residence/Rent</td>
            <td className="text-center">$0</td>
            <td className="text-center">$12,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Meal Plan/Food</td>
            <td className="text-center">$2,000</td>
            <td className="text-center">$4,500</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Transportation</td>
            <td className="text-center">$1,200</td>
            <td className="text-center">$500</td>
          </tr>
          <tr className="font-bold">
            <td className="py-2">Total (Arts)</td>
            <td className="text-center">$11,200</td>
            <td className="text-center">$24,500</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Child Support Beyond 18
    </h3>
    
    <p className="mb-4">
      Ontario law continues support for adult children in school:
    </p>

    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
      <li>Full-time enrollment typically required</li>
      <li>Support continues through first degree</li>
      <li>Summer earnings may reduce support</li>
      <li>RESP funds must be considered</li>
      <li>Both parents contribute based on income</li>
      <li>Child may need to contribute from loans/work</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Modification Process: Step-by-Step
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Informal Modification Attempts
    </h3>
    
    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚠️ Before Going to Court</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 1-2: Documentation</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Compile all school-related expenses</li>
        <li>• Update income information</li>
        <li>• Calculate proposed modifications</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 3: Communication</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Send detailed proposal via email</li>
        <li>• Include supporting documentation</li>
        <li>• Propose meeting or mediation</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 4-6: Negotiation</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• Consider mediation ($300-500/hour)</li>
        <li>• Document all agreements</li>
        <li>• Formalize through consent order</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Formal Court Modification
    </h3>
    
    <p className="mb-4">
      If informal methods fail, court intervention may be necessary:
    </p>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Court Process Timeline</h4>
      
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Stage</th>
            <th className="text-center py-2">Timeline</th>
            <th className="text-center py-2">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Motion to Change filing</td>
            <td className="text-center">Day 1</td>
            <td className="text-center">$190</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Service of documents</td>
            <td className="text-center">Week 1-2</td>
            <td className="text-center">$100</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Response period</td>
            <td className="text-center">30 days</td>
            <td className="text-center">-</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Case conference</td>
            <td className="text-center">Month 2-3</td>
            <td className="text-center">$2,000-3,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Settlement conference</td>
            <td className="text-center">Month 4-5</td>
            <td className="text-center">$3,000-5,000</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Trial (if needed)</td>
            <td className="text-center">Month 8-12</td>
            <td className="text-center">$15,000+</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Technology and Modern School Expenses
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      The Digital Divide in Education
    </h3>
    
    <p className="mb-4">
      September 2025 brings new technology requirements:
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💻 Technology Expenses as Section 7</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• Mandatory school laptops/tablets: Usually qualifies</li>
        <li>• High-speed internet for homework: Often shared</li>
        <li>• Educational software subscriptions: Case-by-case</li>
        <li>• Gaming computers: Rarely approved</li>
        <li>• Phones for safety: Contentious, age-dependent</li>
        <li>• Printer/scanner for home: Generally reasonable</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Special Needs and Exceptional Expenses
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      When Children Require Extra Support
    </h3>
    
    <div className="bg-green-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Commonly Approved Special Needs Expenses</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Psychological assessments ($3,000-5,000)</li>
        <li>• Speech therapy ($150-200/session)</li>
        <li>• Occupational therapy ($140-180/session)</li>
        <li>• Specialized tutoring ($60-100/hour)</li>
        <li>• Assistive technology ($500-3,000)</li>
        <li>• Private special education ($25,000-45,000)</li>
        <li>• Therapy animals and training ($5,000-15,000)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Strategies for Reducing School Year Conflicts
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Annual Planning Calendar</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">March-April</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Discuss next year's school placement</li>
        <li>• Review private school applications</li>
        <li>• Plan summer programs</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">May-June</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Register for September activities</li>
        <li>• Confirm school enrollment</li>
        <li>• Budget for fall expenses</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">July-August</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Purchase school supplies together</li>
        <li>• Finalize activity schedules</li>
        <li>• Update support if needed</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">September</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• Implement agreed expenses</li>
        <li>• Track actual costs</li>
        <li>• Address surprises quickly</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Common Pitfalls and How to Avoid Them
    </h2>

    <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🚨 Mistakes That Cost Thousands</h3>
      <ol className="space-y-2 text-gray-700">
        <li><strong>1. Verbal agreements:</strong> Always document in writing</li>
        <li><strong>2. Assuming consent:</strong> Explicit agreement required for major expenses</li>
        <li><strong>3. Retroactive claims:</strong> Courts rarely order past reimbursement</li>
        <li><strong>4. Ignoring income changes:</strong> Update support annually</li>
        <li><strong>5. Competing enrollments:</strong> Children in different programs</li>
        <li><strong>6. Emergency expenses:</strong> No protocol for unexpected costs</li>
        <li><strong>7. Poor documentation:</strong> Missing receipts and records</li>
      </ol>
    </div>

    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">✅ September School Expense Checklist</h3>
      <ul className="space-y-2 text-gray-700">
        <li>☐ Review existing support order/agreement</li>
        <li>☐ Calculate all September expenses</li>
        <li>☐ Determine Section 7 qualifications</li>
        <li>☐ Update income information</li>
        <li>☐ Propose proportional sharing</li>
        <li>☐ Document all communications</li>
        <li>☐ Consider children's best interests</li>
        <li>☐ Explore mediation if disputed</li>
        <li>☐ Formalize any agreements</li>
        <li>☐ Plan for next year early</li>
      </ul>
    </div>

    <p className="text-lg font-semibold text-gray-900 mt-8 mb-4">
      Navigate School Expenses with Professional Support
    </p>
    
    <p className="mb-6">
      September's school expenses don't have to derail your family's financial stability or create 
      unnecessary conflict. At Life Money, our Certified Financial Planners specialize in child 
      support modifications and Section 7 expense calculations. We work with family lawyers and mediators 
      to ensure fair, sustainable arrangements that prioritize your children's education while respecting 
      both parents' financial realities. Don't let September surprises strain your co-parenting 
      relationship—let us help you create a comprehensive education expense plan that works for everyone.
    </p>
  </>
);

export default function BlogPostPage() {
  return (
    <BlogPostTemplate
      title="Child Support Modifications for School Year 2025: Complete Ontario Guide"
      subtitle="Master Section 7 expenses and support adjustments for September success"
      author="Michael Chen"
      authorTitle="Family Financial Specialist, CFP®"
      date="2025-09-12"
      readTime="14 min"
      category="Divorce Planning"
      categorySlug="divorce-planning"
      content={<BlogContent />}
      relatedPosts={relatedPosts}
    />
  );
}