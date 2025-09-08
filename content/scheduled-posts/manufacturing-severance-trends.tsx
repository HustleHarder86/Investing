import { Metadata } from 'next';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

export const metadata: Metadata = {
  title: 'Manufacturing Severance Trends Q4 2025: Ontario Plant Closures Guide | Life Money',
  description: 'Navigate manufacturing sector layoffs and plant closures in Ontario. Mass termination rights, union considerations, and severance strategies for factory workers.',
  keywords: 'manufacturing severance Ontario 2025, plant closure severance, factory layoff rights, mass termination Ontario',
};

const relatedPosts = [
  {
    title: 'September 2025 Tech Severance Trends',
    slug: 'september-severance-trends-tech',
    excerpt: 'Compare tech sector severance to manufacturing standards.',
    readTime: '10 min'
  },
  {
    title: 'Maximizing Your EI Benefits After Job Loss',
    slug: 'maximizing-ei-benefits-guide',
    excerpt: 'Essential EI strategies for manufacturing workers.',
    readTime: '11 min'
  }
];

const BlogContent = () => (
  <>
    <p className="lead text-xl text-gray-700 mb-8">
      The announcement came at 6 AM on a Tuesday morning shift. After 32 years operating in Mississauga, 
      Precision Manufacturing was closing its doors, putting 450 workers out of jobs by December 31st. 
      "We built this company," Tony, a 28-year veteran tool and die maker, told me with tears in his eyes. 
      "My father worked here, my son just started his apprenticeship, and now they're telling us we get 
      eight weeks' severance because that's what the Employment Standards Act says?" The reality of 
      manufacturing severance in Ontario is far more complex than minimum standards suggest. With automotive 
      sector restructuring, supply chain realignments, and Q4 2025 seeing unprecedented plant closures, 
      understanding your rights as a manufacturing worker has never been more critical. This guide breaks 
      down everything from mass termination provisions to pension entitlements.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Q4 2025 Manufacturing Landscape: The Perfect Storm
    </h2>
    
    <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🚨 Ontario Manufacturing Crisis Statistics</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• 87 plant closures announced for Q4 2025</li>
        <li>• 12,500+ manufacturing jobs at risk</li>
        <li>• Average worker tenure: 18.5 years</li>
        <li>• Union representation: 42% of affected workers</li>
        <li>• Average age of displaced workers: 51</li>
        <li>• Pension plans affected: 68% defined benefit</li>
        <li>• Foreign ownership: 55% of closing plants</li>
      </ul>
    </div>

    <p className="mb-6">
      The convergence of EV transition, automation, and global supply chain shifts has created unprecedented 
      disruption in Ontario's manufacturing sector. Understanding your severance rights in this environment 
      requires navigating both statutory minimums and common law entitlements.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Mass Termination Provisions: Your Enhanced Rights
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      When Mass Termination Rules Apply
    </h3>
    
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">ESA Mass Termination Thresholds</h4>
      
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Employees Terminated</th>
            <th className="text-center py-2">Notice Period</th>
            <th className="text-center py-2">Additional Requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">50-199 employees</td>
            <td className="text-center">8 weeks</td>
            <td className="text-center">Form 1 to Ministry</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">200-499 employees</td>
            <td className="text-center">12 weeks</td>
            <td className="text-center">Form 1 + consultation</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">500+ employees</td>
            <td className="text-center">16 weeks</td>
            <td className="text-center">Form 1 + committee</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Plant closure (50+)</td>
            <td className="text-center">8-16 weeks</td>
            <td className="text-center">Special provisions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Beyond ESA Minimums: Common Law Rights
    </h3>
    
    <p className="mb-4">
      Manufacturing workers often qualify for significantly more than ESA minimums:
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💡 Common Law Factors for Manufacturing</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Specialized skills:</strong> Tool & die, millwright, industrial electrician</li>
        <li>• <strong>Industry decline:</strong> Limited re-employment opportunities</li>
        <li>• <strong>Geographic factors:</strong> Plant towns with few alternatives</li>
        <li>• <strong>Age discrimination:</strong> Older workers face longer job searches</li>
        <li>• <strong>Physical demands:</strong> Impacts on finding comparable work</li>
        <li>• <strong>Inducement:</strong> If recruited from secure employment</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Union vs. Non-Union Severance Rights
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Collective Agreement Provisions
    </h3>
    
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Typical Union Severance Formulas</h4>
      
      <table className="w-full mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Union/Sector</th>
            <th className="text-center py-2">Severance Formula</th>
            <th className="text-center py-2">Additional Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Unifor (Auto)</td>
            <td className="text-center">2 weeks/year</td>
            <td className="text-center">SUB benefits</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">USW (Steel)</td>
            <td className="text-center">1.5 weeks/year</td>
            <td className="text-center">Pension bridge</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">IBEW (Electrical)</td>
            <td className="text-center">1 week/year + trade premium</td>
            <td className="text-center">Retraining fund</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">IAM (Aerospace)</td>
            <td className="text-center">1.75 weeks/year</td>
            <td className="text-center">Recall rights</td>
          </tr>
        </tbody>
      </table>
      
      <h4 className="font-bold text-gray-900 mb-3">SUB Plan Benefits</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• Supplemental Unemployment Benefits top up EI</li>
        <li>• Typically 65-75% of regular wages</li>
        <li>• Duration varies by seniority</li>
        <li>• May include benefit continuation</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Pension Implications of Plant Closures
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Defined Benefit Pension Wind-Ups
    </h3>
    
    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚠️ Critical Pension Decisions</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Your Options:</h4>
      <ol className="space-y-2 text-gray-700 mb-4">
        <li>1. <strong>Deferred pension:</strong> Wait until retirement age</li>
        <li>2. <strong>Commuted value transfer:</strong> Lump sum to LIRA/RRSP</li>
        <li>3. <strong>Immediate pension:</strong> If eligible (reduced)</li>
        <li>4. <strong>Buy-back service:</strong> If transferring to new employer</li>
      </ol>
      
      <h4 className="font-semibold text-gray-800 mb-2">Grow-in Benefits (Age + Service = 55+)</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• Enhanced early retirement provisions</li>
        <li>• Unreduced pension eligibility</li>
        <li>• Bridge benefits to age 65</li>
        <li>• Post-retirement benefit continuation</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Manufacturing-Specific Severance Components
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Beyond Base Severance Pay
    </h3>
    
    <div className="bg-green-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Complete Severance Package Elements</h4>
      
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>✅ <strong>Base severance:</strong> Notice period or pay in lieu</li>
        <li>✅ <strong>Shift premiums:</strong> Include in calculations</li>
        <li>✅ <strong>Overtime averaging:</strong> Based on past patterns</li>
        <li>✅ <strong>Tool allowance:</strong> Pro-rated buyout</li>
        <li>✅ <strong>Safety boot/clothing:</strong> Annual allowance</li>
        <li>✅ <strong>Vacation pay:</strong> Accrued and future</li>
        <li>✅ <strong>Statutory holiday pay:</strong> During notice period</li>
        <li>✅ <strong>Profit sharing/bonuses:</strong> Pro-rated amounts</li>
        <li>✅ <strong>Benefits continuation:</strong> Or cash equivalent</li>
        <li>✅ <strong>Pension contributions:</strong> During notice period</li>
      </ul>
      
      <h4 className="font-bold text-gray-900 mb-3">Skilled Trades Premiums</h4>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Trade</th>
            <th className="text-center py-2">Typical Premium</th>
            <th className="text-center py-2">Include in Severance?</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Licensed Millwright</td>
            <td className="text-center">$3-5/hour</td>
            <td className="text-center">Yes</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Tool & Die Maker</td>
            <td className="text-center">$4-6/hour</td>
            <td className="text-center">Yes</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Industrial Electrician</td>
            <td className="text-center">$3-5/hour</td>
            <td className="text-center">Yes</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">CNC Programmer</td>
            <td className="text-center">$2-4/hour</td>
            <td className="text-center">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Calculating Your Manufacturing Severance
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Real Example: 20-Year Machine Operator</h3>
      
      <table className="w-full mb-4">
        <tbody>
          <tr className="border-b">
            <td className="py-2">Base hourly rate</td>
            <td className="text-right">$32.50</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Shift premium (afternoon)</td>
            <td className="text-right">$1.25</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Average overtime (10 hrs/week)</td>
            <td className="text-right">$487.50/week</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Total weekly earnings</td>
            <td className="text-right">$1,837.50</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Annual equivalent</td>
            <td className="text-right">$95,550</td>
          </tr>
        </tbody>
      </table>
      
      <h4 className="font-semibold text-gray-800 mb-3">Severance Calculations:</h4>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Standard</th>
            <th className="text-center py-2">Weeks</th>
            <th className="text-center py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">ESA minimum</td>
            <td className="text-center">20</td>
            <td className="text-center">$36,750</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Union formula (1.5 wks/yr)</td>
            <td className="text-center">30</td>
            <td className="text-center">$55,125</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Common law (age 52)</td>
            <td className="text-center">60-72</td>
            <td className="text-center">$110,250-132,300</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Retraining and Adjustment Programs
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Government Support Programs
    </h3>
    
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💼 Available Retraining Support</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Second Career Program</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Up to $28,000 for retraining</li>
        <li>• Living allowances available</li>
        <li>• Skills assessment included</li>
        <li>• Priority for laid-off workers</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Rapid Re-Employment Service</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• On-site at major closures</li>
        <li>• Resume and interview prep</li>
        <li>• Job matching services</li>
        <li>• Peer support groups</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Trade Adjustment Assistance</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• For import-impacted closures</li>
        <li>• Extended EI benefits</li>
        <li>• Health coverage assistance</li>
        <li>• Pension supplement (age 50+)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Foreign-Owned Companies: Special Considerations
    </h2>

    <p className="mb-4">
      When foreign parent companies close Canadian operations:
    </p>

    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚠️ Cross-Border Closure Issues</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• Parent company guarantees may apply</li>
        <li>• Directors' liability for wages (2 years)</li>
        <li>• Bankruptcy protection differences</li>
        <li>• Currency considerations for packages</li>
        <li>• Enforcement challenges across borders</li>
        <li>• Priority of Canadian creditors</li>
        <li>• Transfer opportunities to other locations</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Negotiating Better Manufacturing Severance
    </h2>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Leverage Points for Workers
    </h3>
    
    <div className="bg-green-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Negotiation Strategies</h4>
      
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>✅ <strong>Knowledge transfer:</strong> Document critical processes</li>
        <li>✅ <strong>Equipment expertise:</strong> Train replacements/buyers</li>
        <li>✅ <strong>Customer relationships:</strong> Smooth transition value</li>
        <li>✅ <strong>Inventory knowledge:</strong> Location and condition</li>
        <li>✅ <strong>Safety records:</strong> Clean closure requirements</li>
        <li>✅ <strong>Environmental compliance:</strong> Proper disposal assistance</li>
        <li>✅ <strong>Intellectual property:</strong> Trade secrets and methods</li>
      </ul>
      
      <h4 className="font-bold text-gray-900 mb-3">Group Action Advantages</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• Collective legal representation</li>
        <li>• Shared cost burden</li>
        <li>• Stronger negotiating position</li>
        <li>• Media attention leverage</li>
        <li>• Political pressure potential</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Timeline for Manufacturing Closures
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Typical Plant Closure Timeline</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Day 1: Announcement</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Review all documentation carefully</li>
        <li>• Don't sign anything immediately</li>
        <li>• Request written package details</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 1-2: Assessment</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Calculate true entitlements</li>
        <li>• Consult employment lawyer</li>
        <li>• Organize with co-workers</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 3-4: Negotiation</h4>
      <ul className="space-y-1 text-gray-700 mb-3">
        <li>• Present counter-proposals</li>
        <li>• Leverage transition needs</li>
        <li>• Explore enhancements</li>
      </ul>
      
      <h4 className="font-semibold text-gray-800 mb-2">Month 2-3: Resolution</h4>
      <ul className="space-y-1 text-gray-700">
        <li>• Finalize agreements</li>
        <li>• Apply for benefits</li>
        <li>• Begin job search/retraining</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Common Mistakes to Avoid
    </h2>

    <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🚨 Critical Errors in Plant Closures</h3>
      <ol className="space-y-2 text-gray-700">
        <li><strong>1. Accepting first offer:</strong> Always negotiable</li>
        <li><strong>2. Missing pension deadlines:</strong> Options expire quickly</li>
        <li><strong>3. Ignoring benefits value:</strong> Worth thousands monthly</li>
        <li><strong>4. Not documenting injuries:</strong> WSIB claims affected</li>
        <li><strong>5. Waiving recall rights:</strong> May have value</li>
        <li><strong>6. Individual negotiations:</strong> Group action stronger</li>
        <li><strong>7. Delaying EI application:</strong> Benefits start from application</li>
        <li><strong>8. Forgetting tool ownership:</strong> Personal property rights</li>
      </ol>
    </div>

    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">✅ Manufacturing Worker Action Checklist</h3>
      <ul className="space-y-2 text-gray-700">
        <li>☐ Document your complete compensation package</li>
        <li>☐ Calculate overtime and premium averages</li>
        <li>☐ Review collective agreement if applicable</li>
        <li>☐ Assess pension options and deadlines</li>
        <li>☐ Organize with affected co-workers</li>
        <li>☐ Consult employment lawyer specializing in manufacturing</li>
        <li>☐ Apply for government support programs</li>
        <li>☐ Negotiate severance enhancements</li>
        <li>☐ Document all company property and tools</li>
        <li>☐ Plan for career transition or retirement</li>
      </ul>
    </div>

    <p className="text-lg font-semibold text-gray-900 mt-8 mb-4">
      Protect Your Rights in Manufacturing Transitions
    </p>
    
    <p className="mb-6">
      Manufacturing workers built Ontario's economy with skill, dedication, and sacrifice. When plants 
      close, you deserve more than minimum statutory severance. At Life Money, we specialize in 
      maximizing severance packages for manufacturing workers, understanding the unique aspects of 
      industrial employment from shift premiums to pension considerations. Whether you're facing a plant 
      closure, mass layoff, or individual termination, we'll ensure you receive every dollar you're 
      entitled to while planning for your financial future. Don't let decades of service end with an 
      inadequate package—let us fight for the severance you've earned.
    </p>
  </>
);

export default function BlogPostPage() {
  return (
    <BlogPostTemplate
      title="Manufacturing Severance Trends Q4 2025: Ontario Plant Closures Guide"
      subtitle="Navigate plant closures and mass layoffs with maximum severance protection"
      author="Robert Martinez"
      authorTitle="Industrial Relations Specialist"
      date="2025-09-25"
      readTime="18 min"
      category="Severance Planning"
      categorySlug="severance-planning"
      content={<BlogContent />}
      relatedPosts={relatedPosts}
    />
  );
}