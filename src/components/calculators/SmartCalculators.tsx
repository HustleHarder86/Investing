'use client';

import { useState, useEffect } from 'react';

interface CalculatorProps {
  onClose: () => void;
}

interface DivorceCalculatorData {
  income: number;
  assets: number;
  children: number;
  duration: number;
}

interface DivorceResults {
  supportEstimate: number;
  assetSplit: number;
  planningCosts: number;
  netPosition: number;
}

interface InheritanceCalculatorData {
  estateValue: number;
  beneficiaries: number;
  taxRate: number;
}

interface InheritanceResults {
  totalTax: number;
  netEstate: number;
  perBeneficiary: number;
  planningFee: number;
  savings: number;
}

function DivorceCalculator({ onClose }: CalculatorProps) {
  const [data, setData] = useState<DivorceCalculatorData>({
    income: 0,
    assets: 0,
    children: 0,
    duration: 0
  });
  const [results, setResults] = useState<DivorceResults | null>(null);

  const calculateDivorce = () => {
    const supportEstimate = data.income * 0.2 * data.children;
    const assetSplit = data.assets * 0.5;
    const planningCosts = Math.max(5000, data.assets * 0.01);
    
    setResults({
      supportEstimate,
      assetSplit,
      planningCosts,
      netPosition: assetSplit - planningCosts
    });
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-display font-bold text-slate-900">
          Divorce Financial Calculator
        </h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
        >
          ×
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Annual Income ($)
            </label>
            <input
              type="number"
              value={data.income || ''}
              onChange={(e) => setData({...data, income: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="150,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Total Assets ($)
            </label>
            <input
              type="number"
              value={data.assets || ''}
              onChange={(e) => setData({...data, assets: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="800,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Number of Children
            </label>
            <input
              type="number"
              value={data.children || ''}
              onChange={(e) => setData({...data, children: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Marriage Duration (years)
            </label>
            <input
              type="number"
              value={data.duration || ''}
              onChange={(e) => setData({...data, duration: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="15"
            />
          </div>
          
          <button
            onClick={calculateDivorce}
            className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 magnetic-hover"
          >
            Calculate Estimates
          </button>
        </div>
        
        {results && (
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Estimated Results</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-700">Child Support (annual):</span>
                <span className="font-semibold text-slate-900">
                  ${results.supportEstimate.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">Asset Split (50%):</span>
                <span className="font-semibold text-slate-900">
                  ${results.assetSplit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">Planning Costs:</span>
                <span className="font-semibold text-red-600">
                  -${results.planningCosts.toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="text-slate-700 font-semibold">Net Position:</span>
                <span className="font-bold text-teal-600">
                  ${results.netPosition.toLocaleString()}
                </span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-teal-50 rounded-lg">
              <p className="text-sm text-teal-800">
                💡 These are estimates only. Professional consultation required for accurate planning.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InheritanceCalculator({ onClose }: CalculatorProps) {
  const [data, setData] = useState<InheritanceCalculatorData>({
    estateValue: 0,
    beneficiaries: 0,
    taxRate: 0.3
  });
  const [results, setResults] = useState<InheritanceResults | null>(null);

  const calculateInheritance = () => {
    const taxableAmount = Math.max(0, data.estateValue - 100000); // Basic exemption
    const totalTax = taxableAmount * data.taxRate;
    const netEstate = data.estateValue - totalTax;
    const perBeneficiary = data.beneficiaries > 0 ? netEstate / data.beneficiaries : netEstate;
    const planningFee = Math.max(3000, data.estateValue * 0.005);
    
    setResults({
      totalTax,
      netEstate,
      perBeneficiary,
      planningFee,
      savings: totalTax * 0.3 // Potential savings with planning
    });
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-display font-bold text-slate-900">
          Inheritance Tax Calculator
        </h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
        >
          ×
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Estate Value ($)
            </label>
            <input
              type="number"
              value={data.estateValue || ''}
              onChange={(e) => setData({...data, estateValue: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="1,500,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Number of Beneficiaries
            </label>
            <input
              type="number"
              value={data.beneficiaries || ''}
              onChange={(e) => setData({...data, beneficiaries: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="3"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Tax Rate
            </label>
            <select
              value={data.taxRate}
              onChange={(e) => setData({...data, taxRate: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value={0.2}>20% (Ontario)</option>
              <option value={0.25}>25% (BC)</option>
              <option value={0.3}>30% (Combined)</option>
              <option value={0.35}>35% (High bracket)</option>
            </select>
          </div>
          
          <button
            onClick={calculateInheritance}
            className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 magnetic-hover"
          >
            Calculate Tax Impact
          </button>
        </div>
        
        {results && (
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Tax Analysis</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-700">Total Tax:</span>
                <span className="font-semibold text-red-600">
                  -${results.totalTax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">Net Estate:</span>
                <span className="font-semibold text-slate-900">
                  ${results.netEstate.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">Per Beneficiary:</span>
                <span className="font-semibold text-slate-900">
                  ${results.perBeneficiary.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">Planning Fee:</span>
                <span className="font-semibold text-blue-600">
                  ${results.planningFee.toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="text-slate-700 font-semibold">Potential Savings:</span>
                <span className="font-bold text-green-600">
                  ${results.savings.toLocaleString()}
                </span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                💰 Professional planning could save ${results.savings.toLocaleString()} in taxes
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SmartCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const calculators = [
    {
      id: 'divorce',
      title: 'Divorce Planning',
      description: 'Estimate settlement amounts and planning costs',
      icon: '⚖️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'inheritance',
      title: 'Inheritance Planning',
      description: 'Calculate tax implications and savings',
      icon: '🏛️',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'business',
      title: 'Business Sale',
      description: 'Optimize your business exit strategy',
      icon: '🏢',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'severance',
      title: 'Job Transition',
      description: 'Plan your financial transition',
      icon: '💼',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-700">AI-Powered Financial Tools</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Calculators</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get instant insights with our AI-powered financial calculators. Plan your future with confidence using data-driven estimates.
          </p>
        </div>

        {/* Calculator grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {calculators.map((calc, index) => (
            <div
              key={calc.id}
              className={`group relative bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-500 magnetic-hover ${activeCalculator === calc.id ? 'ring-2 ring-teal-500' : ''}`}
              onClick={() => setActiveCalculator(calc.id)}
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${calc.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {calc.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                  {calc.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {calc.description}
                </p>
                
                {/* CTA */}
                <div className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 group-hover:text-teal-700">
                  Calculate Now
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active calculator */}
        {activeCalculator && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              {activeCalculator === 'divorce' && (
                <DivorceCalculator onClose={() => setActiveCalculator(null)} />
              )}
              {activeCalculator === 'inheritance' && (
                <InheritanceCalculator onClose={() => setActiveCalculator(null)} />
              )}
              {activeCalculator === 'business' && (
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-xl text-center">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                    Business Sale Calculator
                  </h3>
                  <p className="text-slate-600 mb-6">Coming soon! This advanced calculator will help optimize your business exit strategy.</p>
                  <button
                    onClick={() => setActiveCalculator(null)}
                    className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              )}
              {activeCalculator === 'severance' && (
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-xl text-center">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                    Job Transition Calculator
                  </h3>
                  <p className="text-slate-600 mb-6">Coming soon! Plan your financial transition during career changes.</p>
                  <button
                    onClick={() => setActiveCalculator(null)}
                    className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}