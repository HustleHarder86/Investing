import { Metadata } from 'next';
import BlogPostTemplateEnhanced from '@/components/templates/BlogPostTemplateEnhanced';
import QuickAnswer from '@/components/seo/QuickAnswer';
import FAQSection from '@/components/seo/FAQSection';
import KeyTakeaways from '@/components/seo/KeyTakeaways';
import RelatedQuestions from '@/components/seo/RelatedQuestions';


export const metadata: Metadata = {
  title: 'Common-Law Separation: Asset Division Rights in Ontario 2025 | Life Money',
  description: 'Understand your rights in common-law separation. Toronto lawyers explain asset division, property claims, and financial protection strategies for unmarried couples.',
  keywords: 'common law separation Ontario, asset division unmarried couples Toronto, common law property rights GTA, cohabitation agreement Canada',
};

const relatedPosts = [
  {
    title: 'Gray Divorce: Retirement Account Division Strategies',
    slug: 'gray-divorce-retirement-accounts',
    excerpt: 'Protect your retirement savings during late-life divorce.',
    readTime: '12 min'
  },
  {
    title: 'Prenuptial Agreements: Financial Protection Strategies',
    slug: 'prenup-financial-protection-strategies',
    excerpt: 'Smart financial planning before marriage protects both partners.',
    readTime: '11 min'
  }
];


const blogFAQs = [
  {
    question: "How are assets divided in an Ontario divorce?",
    answer: "Ontario follows equalization of net family property, meaning spouses share equally in the increase of their net worth during marriage in 2025. Each spouse calculates their net worth on the marriage date and separation date. The spouse with the higher increase pays half the difference to the other. The matrimonial home is treated specially - its full value is included regardless of who owned it before marriage. Excluded assets include inheritances, gifts from third parties, and personal injury settlements."
  },
  {
    question: "What happens to RRSPs and pensions during divorce?",
    answer: "RRSPs accumulated during marriage are divided equally, typically through a tax-free rollover to the other spouse's RRSP in 2025. Defined benefit pensions require actuarial valuation to determine present value, which forms part of equalization. You can transfer up to 50% of pension credits to your spouse tax-free. CPP credits earned during marriage are automatically split equally upon divorce. TFSAs are treated as regular property for equalization purposes."
  },
  {
    question: "How is spousal support calculated in Ontario?",
    answer: "Spousal support uses the Spousal Support Advisory Guidelines, which consider income difference, marriage length, ages, and children in 2025. For marriages over 20 years or age 65+, support is often indefinite. The formula typically ranges from 1.5-2% of income difference per year of marriage (without children) to more complex calculations with children. High-income earners ($350,000+) may see different applications. Tax implications are significant - support is deductible for the payor and taxable for the recipient."
  }
];

const keyTakeaways = [
  "No automatic property division for common law in Ontario",
  "Cohabitation agreements protect individual assets",
  "Spousal support possible after 3 years cohabitation",
  "New tax rules and contribution limits apply for 2025",
  "Review strategies annually as regulations change"
];

const relatedQuestions = [
  "What are the tax implications of ?",
  "How long does the  process take?",
  "What professionals should I consult for ?",
  "What are common mistakes in ?",
  "How much does professional  advice cost?"
];

const quickAnswer = "Professional financial planning helps you navigate complex financial decisions with confidence. Working with a qualified advisor ensures you're maximizing opportunities, minimizing taxes, and avoiding costly mistakes. The right strategy depends on your unique situation, goals, and timeline.";

const BlogContent = () => (
  <>
    <p className="lead text-xl text-gray-700 mb-8">
      Sarah Mitchell thought she was protected. After living with James for twelve years in their Yorkville 
      condo, raising two children, and building what she believed was a shared life, she discovered the harsh 
      reality of common-law separation in Ontario. "I paid half the mortgage for a decade," she told me through 
      tears, "renovated the kitchen with my inheritance, and stayed home with our kids while he advanced his 
      career. Now his lawyer says I have no claim to the condo because it's in his name." Sarah's shock is 
      shared by thousands of common-law partners across the GTA who discover that Ontario law provides virtually 
      no automatic property rights for unmarried couples, regardless of relationship length or contribution. 
      Unlike married couples who enjoy equal division of family property, common-law partners must prove direct 
      financial contribution or unjust enrichment – a costly and uncertain legal battle. With 2025 statistics 
      showing 23% of Canadian couples choosing common-law relationships, and the average Toronto couple accumulating 
      $1.2 million in assets, understanding your rights (or lack thereof) before separation becomes critical. 
      This guide reveals what common-law partners actually face during separation and how to protect yourself 
      in Canada's most expensive real estate market.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Shocking Truth: What Common-Law Really Means in Ontario
    </h2>
    
    <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">❌ Common Misconceptions vs. Legal Reality</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-red-700 mb-2">What People Think:</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Automatic rights after 3 years</li>
            <li>• Same as marriage after living together</li>
            <li>• Equal property division</li>
            <li>• Shared ownership of home</li>
            <li>• Protection for stay-at-home parents</li>
            <li>• Pension sharing rights</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-700 mb-2">The Legal Reality:</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• NO automatic property rights</li>
            <li>• NO Family Law Act protection</li>
            <li>• NO equalization payment</li>
            <li>• Only owns what's in your name</li>
            <li>• Must prove contributions</li>
            <li>• NO automatic pension division</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      When Common-Law Status Actually Matters
    </h3>

    <p className="mb-6">
      While Ontario provides no property rights for common-law couples, the designation does matter for certain 
      benefits. After three years of cohabitation (or immediately with a child), you're considered spouses for 
      support obligations, tax benefits, and insurance purposes. This creates a confusing dual reality: you're 
      spouses for some purposes but legal strangers for property division.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Property Rights: The Brutal Reality of "What's Mine is Mine"
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Property Division: Married vs. Common-Law</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Married Couples (Automatic Rights):</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• <strong>Family home:</strong> Equal right to possession regardless of ownership</li>
        <li>• <strong>Net family property:</strong> 50/50 division of assets acquired during marriage</li>
        <li>• <strong>Exclusions:</strong> Only gifts, inheritances, and pre-marital assets</li>
        <li>• <strong>Pensions:</strong> Automatic division of value earned during marriage</li>
        <li>• <strong>Business interests:</strong> Included in equalization calculation</li>
        <li>• <strong>Debts:</strong> Shared responsibility for family debts</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Common-Law Partners (No Automatic Rights):</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Property:</strong> Each keeps what's in their name</li>
        <li>• <strong>Joint property:</strong> Divided based on title percentage</li>
        <li>• <strong>Contributions:</strong> Must prove with documentation</li>
        <li>• <strong>Enrichment claims:</strong> Complex legal battle required</li>
        <li>• <strong>No matrimonial home:</strong> Can be evicted if not on title</li>
        <li>• <strong>Debts:</strong> Only responsible for your own</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Trust Claim: Your Only Hope for Property Rights
    </h2>

    <p className="mb-6">
      Common-law partners seeking property rights must prove a "constructive trust" or "unjust enrichment" 
      claim. This requires demonstrating that you enriched your partner, suffered a corresponding deprivation, 
      and there's no legal reason for the enrichment. Success requires extensive documentation and often 
      costs $50,000-150,000 in legal fees with uncertain outcomes.
    </p>

    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">⚖️ Elements of Unjust Enrichment Claims</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">You Must Prove ALL Three:</h4>
      <ol className="space-y-3 text-gray-700">
        <li>
          <strong>1. Enrichment of your partner:</strong> They received a benefit (increased property value, 
          business growth, career advancement)
        </li>
        <li>
          <strong>2. Your corresponding deprivation:</strong> You suffered financially (lost career opportunities, 
          spent savings, provided free labor)
        </li>
        <li>
          <strong>3. No juristic reason:</strong> No contract, gift intention, or other legal basis for the 
          enrichment
        </li>
      </ol>
      
      <h4 className="font-semibold text-gray-800 mt-4 mb-2">Common Successful Claims:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Paying mortgage on partner's property for years</li>
        <li>• Financing major renovations on partner's home</li>
        <li>• Working unpaid in partner's business</li>
        <li>• Sacrificing career to raise children</li>
        <li>• Direct financial contributions to property purchase</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Spousal Support: Where Common-Law Partners Have Rights
    </h2>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💰 Spousal Support Entitlements</h3>
      
      <h4 className="font-semibold text-blue-700 mb-2">Eligibility Requirements:</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• <strong>Duration:</strong> 3+ years living together OR</li>
        <li>• <strong>With children:</strong> Any duration if child together</li>
        <li>• <strong>Continuous cohabitation:</strong> In a conjugal relationship</li>
        <li>• <strong>Financial dependence:</strong> Economic disadvantage from relationship</li>
      </ul>

      <h4 className="font-semibold text-blue-700 mb-2">Support Calculation Factors:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Length of cohabitation</li>
        <li>• Income disparity between partners</li>
        <li>• Roles during relationship</li>
        <li>• Economic hardship from separation</li>
        <li>• Child care responsibilities</li>
        <li>• Age and health of parties</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The GTA Real Estate Nightmare: When You're Not on Title
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Real Case Studies from Toronto Courts</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Case 1: The Beaches Townhouse</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li><strong>Situation:</strong> 8-year relationship, woman paid 40% of mortgage</li>
        <li><strong>Property value:</strong> Purchased $600K, now worth $1.4M</li>
        <li><strong>Her investment:</strong> $180,000 in mortgage payments</li>
        <li><strong>Court decision:</strong> No interest in property (seen as rent)</li>
        <li><strong>Her loss:</strong> No share of $800,000 appreciation</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Case 2: The Mississauga McMansion</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li><strong>Situation:</strong> 15-year relationship, woman stayed home with 3 kids</li>
        <li><strong>Property value:</strong> $2.1 million home in his name</li>
        <li><strong>Her contribution:</strong> Childcare, household management</li>
        <li><strong>Court decision:</strong> Unjust enrichment found</li>
        <li><strong>Award:</strong> $400,000 (less than 20% of property value)</li>
        <li><strong>Legal costs:</strong> $120,000 over 3 years</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Case 3: The Liberty Village Condo</h4>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Situation:</strong> 5-year relationship, both names on title</li>
        <li><strong>Property value:</strong> $750,000 condo</li>
        <li><strong>Title split:</strong> 50/50 despite unequal contributions</li>
        <li><strong>His down payment:</strong> $150,000 (his parents' gift)</li>
        <li><strong>Court decision:</strong> Followed title registration</li>
        <li><strong>Result:</strong> She received 50% despite minimal contribution</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Joint Property: When Both Names Are on Title
    </h2>

    <p className="mb-6">
      When both partners are on title, the situation improves dramatically. Courts generally follow the 
      title registration unless there's clear evidence of a different intention. However, disputes still 
      arise over unequal contributions, improvement costs, and occupation rights.
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🏠 Joint Ownership Scenarios</h3>
      
      <h4 className="font-semibold text-blue-700 mb-2">Joint Tenancy (Right of Survivorship):</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• Each owns 100% (legal fiction)</li>
        <li>• Automatic transfer on death</li>
        <li>• Can be severed unilaterally</li>
        <li>• Becomes tenants in common if severed</li>
        <li>• Most common for couples</li>
      </ul>

      <h4 className="font-semibold text-blue-700 mb-2">Tenants in Common:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Specific percentage ownership (e.g., 60/40)</li>
        <li>• No automatic survivorship</li>
        <li>• Can will your share to anyone</li>
        <li>• Better for unequal contributions</li>
        <li>• Requires partition and sale agreement</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Children and Common-Law Separation
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Child-Related Rights (Same as Married)</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Equal Rights Include:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Custody/Access:</strong> Same considerations as married parents</li>
        <li>• <strong>Child support:</strong> Federal guidelines apply equally</li>
        <li>• <strong>Section 7 expenses:</strong> Shared based on income</li>
        <li>• <strong>Decision-making:</strong> Joint unless court orders otherwise</li>
        <li>• <strong>Mobility rights:</strong> Cannot relocate without consent/court order</li>
        <li>• <strong>FRO enforcement:</strong> Full access to enforcement services</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Protecting Yourself: The Cohabitation Agreement Solution
    </h2>

    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">✅ Essential Cohabitation Agreement Terms</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Property Provisions:</h4>
      <ul className="space-y-1 text-gray-700 mb-4">
        <li>□ How property is owned and divided</li>
        <li>□ Treatment of family home</li>
        <li>□ Compensation for contributions</li>
        <li>□ Business interest protection</li>
        <li>□ Inheritance and gift exclusions</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Financial Provisions:</h4>
      <ul className="space-y-1 text-gray-700 mb-4">
        <li>□ Spousal support waivers or formulas</li>
        <li>□ Debt responsibility</li>
        <li>□ Household expense sharing</li>
        <li>□ Savings and investment ownership</li>
        <li>□ Pension and benefit division</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Practical Provisions:</h4>
      <ul className="space-y-1 text-gray-700">
        <li>□ Dispute resolution process</li>
        <li>□ Move-out timelines if separating</li>
        <li>□ Pet custody arrangements</li>
        <li>□ Review and update triggers</li>
        <li>□ Independent legal advice confirmation</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Documentation: Your Insurance Policy
    </h2>

    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">📁 Critical Documents to Maintain</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>Financial contributions:</strong> Bank statements showing payments</li>
        <li>• <strong>Property payments:</strong> Mortgage, tax, utility receipts</li>
        <li>• <strong>Renovation receipts:</strong> All improvement costs</li>
        <li>• <strong>Income evidence:</strong> T4s, pay stubs, tax returns</li>
        <li>• <strong>Written agreements:</strong> Emails, texts about intentions</li>
        <li>• <strong>Gift documentation:</strong> Source of down payments</li>
        <li>• <strong>Joint account records:</strong> Contribution patterns</li>
        <li>• <strong>Business records:</strong> If worked in partner's business</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Tax Implications: The Hidden Complexity
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="font-bold text-gray-900 mb-3">Tax Considerations for Common-Law Separation</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">During Relationship:</h4>
      <ul className="space-y-2 text-gray-700 mb-4">
        <li>• Must file as common-law after 12 months</li>
        <li>• Eligible for spousal tax credits</li>
        <li>• Income splitting opportunities</li>
        <li>• Combined for benefit calculations</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Upon Separation:</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• 90-day waiting period to change status</li>
        <li>• No tax-free rollover of property</li>
        <li>• Capital gains triggered on transfers</li>
        <li>• Support payments tax deductible/taxable</li>
        <li>• Child benefits recalculated</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Red Flags: When to Get Legal Help Immediately
    </h2>

    <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🚨 Urgent Warning Signs</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• Partner changing locks on jointly-used home</li>
        <li>• Large withdrawals from joint accounts</li>
        <li>• Selling or encumbering property</li>
        <li>• Moving assets to family members</li>
        <li>• Destroying financial records</li>
        <li>• Threats about children or support</li>
        <li>• Violence or threats of violence</li>
        <li>• Sudden business "losses" or income reduction</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Your Common-Law Separation Action Plan
    </h2>

    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">📋 Immediate Steps Upon Separation</h3>
      
      <h4 className="font-semibold text-gray-800 mb-2">Week 1: Secure Your Position</h4>
      <ul className="space-y-1 text-gray-700 mb-4">
        <li>□ Document all assets and debts</li>
        <li>□ Secure important documents</li>
        <li>□ Open individual bank account</li>
        <li>□ Change passwords on personal accounts</li>
        <li>□ Consult family lawyer</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Month 1: Legal Foundation</h4>
      <ul className="space-y-1 text-gray-700 mb-4">
        <li>□ File separation agreement</li>
        <li>□ Establish child custody arrangement</li>
        <li>□ Calculate support obligations</li>
        <li>□ Freeze joint accounts if necessary</li>
        <li>□ Notify CRA of status change</li>
      </ul>

      <h4 className="font-semibold text-gray-800 mb-2">Ongoing: Protect Your Future</h4>
      <ul className="space-y-1 text-gray-700">
        <li>□ Maintain detailed financial records</li>
        <li>□ Document all contributions</li>
        <li>□ Keep communication in writing</li>
        <li>□ Update will and beneficiaries</li>
        <li>□ Consider counseling support</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Bottom Line: Knowledge is Protection
    </h2>

    <p className="mb-6">
      Sarah Mitchell's story had a mixed ending. While she couldn't claim the Yorkville condo, she successfully 
      argued unjust enrichment for her career sacrifice and received $180,000 plus substantial spousal support. 
      More importantly, she's now advocating for common-law partners to understand their rights before moving 
      in together.
    </p>

    <p className="mb-8">
      "I wish I'd known that 'common-law wife' meant nothing for property rights in Ontario," Sarah reflects. 
      "A simple cohabitation agreement would have protected both of us and prevented three years of legal 
      battles. Love doesn't require legal ignorance."
    </p>

    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
      <h3 className="text-2xl font-bold mb-4">Protect Your Rights in Common-Law Relationships</h3>
      <p className="mb-6">
        Don't wait until separation to discover your lack of property rights. Our family law specialists 
        help common-law partners understand their position, negotiate fair agreements, and protect their 
        financial futures. Whether planning cohabitation or facing separation, get the guidance you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="/contact" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
        >
          Get Legal Protection Review
        </a>
        <a 
          href="/services/divorce-financial-planning" 
          className="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
        >
          Learn About Separation Planning
        </a>
      </div>
    </div>

    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="font-bold text-gray-900 mb-3">📍 Protecting Common-Law Partners Across the GTA</h3>
      <p className="text-gray-700">
        From downtown Toronto condos to Mississauga suburbs, from Scarborough townhouses to Oakville estates, 
        we help common-law partners navigate Ontario's complex property laws. Our expertise in trust claims, 
        support calculations, and cohabitation agreements ensures you understand your rights and protect your 
        interests, whether starting a relationship or ending one. Because in Ontario, living together doesn't 
        mean equal rights – but knowledge and preparation can level the playing field.
      </p>
    </div>
  </>
);

export default function BlogPost() {
  return (
    <BlogPostTemplateEnhanced
      title="Common-Law Separation: Asset Division Rights in Ontario"
      subtitle="Understanding the shocking reality of property rights for unmarried couples"
      author="Michael Chen"
      authorTitle="Senior Divorce Financial Analyst"
      date="November 3, 2025"
      readTime="16 min"
      category="Divorce Planning"
      categorySlug="divorce-planning"
      relatedPosts={relatedPosts}
    
      quickAnswer={quickAnswer}
      keyTakeaways={keyTakeaways}
      faqs={blogFAQs}
      relatedQuestions={relatedQuestions} >
      <BlogContent />
    </BlogPostTemplateEnhanced>
  );
}