import { Metadata } from 'next';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

export const metadata: Metadata = {
  title: 'Custody Arrangements: Financial Impact Assessment 2025 | Life Money',
  description: 'Understand the true financial impact of custody arrangements. Toronto advisors explain child support, expenses, and tax implications of different custody models.',
  keywords: 'custody arrangements financial impact Toronto, child support calculator Ontario, shared custody costs GTA, divorce custody expenses',
};

const relatedPosts = [
  {
    title: 'Child Support Modifications for School Year Changes',
    slug: 'child-support-modifications-school-year',
    excerpt: 'Navigate support changes as children grow and needs evolve.',
    readTime: '11 min'
  },
  {
    title: 'Holiday Co-Parenting: Expense Sharing Agreements',
    slug: 'holiday-co-parenting-expense-sharing',
    excerpt: 'Create fair expense sharing for holidays and special occasions.',
    readTime: '10 min'
  }
];

const BlogContent = () => (
  <>
    <p className="lead text-xl text-gray-700 mb-8">
      "I thought 50/50 custody meant no child support," David Chen said, staring at his financial statement 
      showing $2,400 monthly payments despite equal parenting time. His ex-wife Lisa earned $65,000 as a 
      teacher while David's tech sales role brought in $145,000. Their three children – ages 8, 12, and 14 – 
      split time equally between their Markham home and Lisa's Scarborough townhouse. Yet David discovered 
      that shared custody doesn't mean shared costs when there's income disparity. Between child support, 
      Section 7 expenses for hockey and tutoring, maintaining two child-ready homes, and the hidden costs of 
      constant transitions, their "amicable" custody arrangement was costing David $58,000 annually – far more 
      than the full-custody support he'd initially feared. This financial shock reverberates across the GTA, 
      where custody arrangements dramatically impact not just children's lives but parents' financial futures. 
      With Ontario's child support guidelines, tax implications, and extraordinary expenses creating a complex 
      web of obligations, understanding the true cost of different custody models becomes essential for 
      financial planning. This comprehensive guide reveals how custody decisions translate into decades of 
      financial commitments and how to structure arrangements that protect both children's needs and parents' 
      financial stability.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Custody Spectrum: Financial Implications of Each Model
    </h2>
    
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚖️ Custody Models and Support Obligations</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-blue-700 mb-2">Sole Custody (0-39% time):</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Full table child support amount</li>
            <li>• No reduction for access time</li>
            <li>• Payor covers Section 7 share</li>
            <li>• Recipient claims child tax benefits</li>
            <li>• One primary residence cost</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-blue-700 mb-2">Shared Custody (40%+ time):</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Set-off support calculation</li>
            <li>• Both parents' incomes considered</li>
            <li>• Proportional Section 7 sharing</li>
            <li>• Split or rotated tax benefits</li>
            <li>• Two full residence costs</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      The 40% Threshold: Why Every Day Counts
    </h3>

    <p className="mb-6">
      In Ontario, the magic number is 40% – or 146 days annually. Once a parent has children 40% of the time, 
      child support calculations shift from the simple table amount to a complex set-off formula. This can 
      reduce support obligations by 30-50%, making the difference between 39% and 40% worth thousands monthly.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Child Support: The Mathematical Reality
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Ontario Child Support Guidelines (2025)</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Sole Custody Support (Income: $100,000, 2 Children):</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• <strong>Base table amount:</strong> $1,451/month</li>
        <li>• <strong>Annual obligation:</strong> $17,412</li>
        <li>• <strong>Section 7 expenses:</strong> Additional 60-70% share</li>
        <li>• <strong>No reduction for access:</strong> Weekend visits don't reduce amount</li>
        <li>• <strong>Total annual cost:</strong> $25,000-30,000 typical</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Shared Custody Calculation (50/50 time):</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li><strong>Parent A income:</strong> $100,000 → Table: $1,451</li>
        <li><strong>Parent B income:</strong> $60,000 → Table: $889</li>
        <li><strong>Set-off payment:</strong> $1,451 - $889 = $562/month</li>
        <li><strong>Annual obligation:</strong> $6,744</li>
        <li><strong>Savings vs. sole:</strong> $10,668 annually</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Split Custody (Children with Different Parents):</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Each parent pays table amount for children with other</li>
        <li>• Set-off applied to determine net payment</li>
        <li>• Often results in minimal or no support</li>
        <li>• Section 7 becomes primary expense</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Section 7 Expenses: The Hidden Budget Killer
    </h2>

    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💰 Extraordinary Expenses Breakdown</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Mandatory Section 7 Expenses:</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• <strong>Childcare:</strong> Daycare, before/after school ($500-1,500/month)</li>
        <li>• <strong>Medical/dental:</strong> Orthodontics, therapy ($200-500/month)</li>
        <li>• <strong>Health premiums:</strong> Extended health coverage ($100-300/month)</li>
        <li>• <strong>Post-secondary:</strong> Tuition, residence ($15,000-30,000/year)</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Discretionary Section 7 (Court Considers):</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Extracurriculars:</strong> Sports, music, arts ($200-1,000/month/child)</li>
        <li>• <strong>Tutoring:</strong> Academic support ($200-800/month)</li>
        <li>• <strong>Summer camps:</strong> Day or overnight ($500-3,000/summer)</li>
        <li>• <strong>Special needs:</strong> Therapy, equipment (varies widely)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Two-Home Reality: Duplicate Infrastructure Costs
    </h2>

    <p className="mb-6">
      Shared custody means maintaining two fully equipped homes. Each parent needs bedrooms, furniture, 
      clothing, toys, electronics, and supplies for the children. This duplication can add $20,000-40,000 
      to annual costs that intact families avoid.
    </p>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Duplicate Infrastructure Costs</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Housing Requirements:</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• <strong>Extra bedrooms:</strong> $500-1,000/month additional rent/mortgage</li>
        <li>• <strong>Utilities:</strong> Two sets of bills ($300-500/month)</li>
        <li>• <strong>Furniture:</strong> Beds, desks, storage ($5,000-10,000 initial)</li>
        <li>• <strong>Location premium:</strong> Same school district requirement</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Daily Living Duplication:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Clothing:</strong> Two complete wardrobes ($2,000-4,000/year)</li>
        <li>• <strong>School supplies:</strong> Double sets ($500-1,000/year)</li>
        <li>• <strong>Electronics:</strong> Devices at both homes ($1,000-3,000)</li>
        <li>• <strong>Food:</strong> Full grocery needs at both homes</li>
        <li>• <strong>Transportation:</strong> Car seats, bikes at both homes</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Tax Implications: The Government's Role in Custody
    </h2>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🧾 Tax Benefits and Custody</h3>
      
      <h4 className="font-semibold text-blue-700 mb-2">Canada Child Benefit (CCB):</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• <strong>Sole custody:</strong> All to primary caregiver</li>
        <li>• <strong>Shared custody:</strong> Split 50/50 or rotate monthly</li>
        <li>• <strong>Maximum benefit:</strong> $7,437/child under 6</li>
        <li>• <strong>Income testing:</strong> Reduced above $34,863</li>
        <li>• <strong>Impact:</strong> Up to $20,000/year for 3 children</li>
      </ul>

      <h4 className="font-semibold text-blue-700 mb-2">Other Tax Considerations:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Eligible dependent:</strong> $15,000 credit to custodial parent</li>
        <li>• <strong>Childcare expenses:</strong> Lower income parent claims</li>
        <li>• <strong>Medical expenses:</strong> Either parent can claim</li>
        <li>• <strong>Support payments:</strong> Not deductible/taxable</li>
        <li>• <strong>GST credit:</strong> Based on custody arrangement</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Real GTA Custody Cost Scenarios
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Case Study 1: The High-Income Sole Custody</h3>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li><strong>Father's income:</strong> $180,000 (Bay Street lawyer)</li>
        <li><strong>Mother's income:</strong> $45,000 (part-time work)</li>
        <li><strong>Custody:</strong> Mother has children 80% of time</li>
        <li><strong>Base support:</strong> $2,598/month (3 children)</li>
        <li><strong>Section 7:</strong> $1,800/month (80% of $2,250)</li>
        <li><strong>Annual cost to father:</strong> $52,776</li>
        <li><strong>Mother's net position:</strong> +$35,000 after tax benefits</li>
      </ul>

      <h3 className="font-bold text-gray-900 mb-3">Case Study 2: The Equal Earners Shared Custody</h3>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li><strong>Both incomes:</strong> $85,000 each</li>
        <li><strong>Custody:</strong> True 50/50 split</li>
        <li><strong>Base support:</strong> $0 (equal incomes)</li>
        <li><strong>Section 7:</strong> Split 50/50 ($800/month each)</li>
        <li><strong>Duplicate costs:</strong> $2,000/month each</li>
        <li><strong>Annual cost per parent:</strong> $33,600</li>
      </ul>

      <h3 className="font-bold text-gray-900 mb-3">Case Study 3: The Strategic 39% Access</h3>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Mother's income:</strong> $120,000</li>
        <li><strong>Father's income:</strong> $70,000</li>
        <li><strong>Father's time:</strong> 39% (every weekend + one weeknight)</li>
        <li><strong>Mother pays:</strong> Full table amount $1,731/month</li>
        <li><strong>If 40% time:</strong> Would pay only $863/month</li>
        <li><strong>Annual difference:</strong> $10,416 for 1% time change</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Hidden Costs of Custody Transitions
    </h2>

    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🚗 Transition and Logistics Costs</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Transportation:</strong> Gas, wear for exchanges ($200-500/month)</li>
        <li>• <strong>Time loss:</strong> Work flexibility for pickups/dropoffs</li>
        <li>• <strong>Communication tools:</strong> Apps, phones for kids ($50-100/month)</li>
        <li>• <strong>Emergency coverage:</strong> Backup childcare both homes</li>
        <li>• <strong>Activity logistics:</strong> Driving to practices from both homes</li>
        <li>• <strong>School proximity:</strong> Higher housing costs for location</li>
        <li>• <strong>Professional coordination:</strong> Lawyers, mediators ($5,000-20,000/year)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Post-Secondary Education: The $200,000 Question
    </h2>

    <p className="mb-6">
      Child support doesn't automatically end at 18. Parents must contribute to post-secondary education based 
      on means, with costs split proportionally. For GTA families with university-bound children, this extends 
      financial obligations by 4-8 years and can exceed $200,000 per child.
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🎓 University Cost Sharing</h3>
      
      <h4 className="font-semibold text-blue-700 mb-2">Typical University Expenses (Ontario):</h4>
      <ul className="space-y-1 text-gray-700 mb-4">
        <li>• Tuition: $7,000-15,000/year</li>
        <li>• Residence/rent: $8,000-15,000/year</li>
        <li>• Books/supplies: $2,000-3,000/year</li>
        <li>• Living expenses: $5,000-10,000/year</li>
        <li>• Total: $22,000-43,000/year</li>
      </ul>

      <h4 className="font-semibold text-blue-700 mb-2">Contribution Formula:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Based on proportional incomes</li>
        <li>• Child expected to contribute (loans, work)</li>
        <li>• RESP funds applied first</li>
        <li>• Support continues during school</li>
        <li>• Professional programs extended timeline</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Special Needs Children: Lifetime Financial Impact
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Special Needs Considerations</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Extended support:</strong> May continue indefinitely past 18</li>
        <li>• <strong>Therapy costs:</strong> $500-3,000/month ongoing</li>
        <li>• <strong>Special education:</strong> Private school $20,000-40,000/year</li>
        <li>• <strong>Respite care:</strong> Additional childcare needs</li>
        <li>• <strong>Equipment:</strong> Adaptive devices, modifications</li>
        <li>• <strong>Future planning:</strong> Henson trusts, RDSP contributions</li>
        <li>• <strong>Guardianship:</strong> Long-term care arrangements</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Modifying Custody: When Circumstances Change
    </h2>

    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">📋 Grounds for Modification</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Material Changes Triggering Review:</h4>
      <ul className="space-y-1 text-gray-700 mb-4">
        <li>□ Income change >15%</li>
        <li>□ Relocation affecting access</li>
        <li>□ Children's needs evolution</li>
        <li>□ Remarriage with new children</li>
        <li>□ Health issues affecting care</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Modification Process:</h4>
      <ul className="space-y-1 text-gray-700">
        <li>□ Document changed circumstances</li>
        <li>□ Attempt negotiation first</li>
        <li>□ Mediation before court</li>
        <li>□ Update financial statements</li>
        <li>□ Legal costs: $10,000-30,000</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Strategic Custody Planning: Balancing Children and Finances
    </h2>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💡 Financial Optimization Strategies</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Document everything:</strong> Time, expenses, communications</li>
        <li>• <strong>Understand thresholds:</strong> 40% rule, income breakpoints</li>
        <li>• <strong>Plan housing strategically:</strong> School districts, proximity</li>
        <li>• <strong>Coordinate benefits:</strong> Maximize insurance coverage</li>
        <li>• <strong>RESP planning:</strong> Joint vs. individual accounts</li>
        <li>• <strong>Tax optimization:</strong> Rotate credits appropriately</li>
        <li>• <strong>Future-proof agreements:</strong> Include adjustment formulas</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Long-Term View: 18 Years of Financial Impact
    </h2>

    <p className="mb-6">
      David Chen's initial shock at his custody costs evolved into strategic planning. By documenting his time 
      meticulously, he achieved true 50/50 custody, reducing his support payments while maintaining strong 
      relationships with his children. The key was understanding that custody arrangements aren't just about 
      time – they're about creating sustainable financial structures that allow both parents to provide for 
      their children.
    </p>

    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
      <h3 className="text-2xl font-bold mb-4">Navigate Custody Finances with Expert Guidance</h3>
      <p className="mb-6">
        Don't let custody arrangements derail your financial future. Our specialists help you understand the 
        true costs, optimize support calculations, and create sustainable financial plans that prioritize 
        children's needs while protecting your long-term security.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="/contact" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
        >
          Get Custody Financial Analysis
        </a>
        <a 
          href="/services/divorce-financial-planning" 
          className="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
        >
          Learn About Support Planning
        </a>
      </div>
    </div>

    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="font-bold text-gray-900 mb-3">📍 Supporting Families Across the GTA</h3>
      <p className="text-gray-700">
        From Rosedale split-custody arrangements to Brampton shared parenting, from Oakville sole custody to 
        Scarborough joint custody, we help GTA families navigate the complex financial landscape of custody 
        arrangements. Our expertise in Ontario family law, support calculations, and tax planning ensures your 
        custody arrangement supports your children's best interests while maintaining financial sustainability. 
        Because the true measure of successful custody isn't just time – it's creating stable, supportive 
        environments where children can thrive.
      </p>
    </div>
  </>
);

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="Custody Arrangements: Financial Impact Assessment"
      subtitle="Understanding the true costs of different custody models"
      author="Michael Chen"
      authorTitle="Senior Divorce Financial Analyst"
      date="November 13, 2025"
      readTime="14 min"
      category="Divorce Planning"
      categorySlug="divorce-planning"
      relatedPosts={relatedPosts}
    >
      <BlogContent />
    </BlogPostTemplate>
  );
}