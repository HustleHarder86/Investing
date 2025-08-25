'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, PiggyBank, Home, Briefcase, Users, AlertTriangle } from 'lucide-react';

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  // Retirement Calculator State
  const [retirementData, setRetirementData] = useState({
    currentAge: '',
    retirementAge: '',
    currentSavings: '',
    monthlyContribution: '',
    expectedReturn: '6',
    desiredIncome: ''
  });

  // Severance Calculator State
  const [severanceData, setSeveranceData] = useState({
    salary: '',
    yearsService: '',
    severanceWeeks: '',
    hasGroup: false,
    eiBenefits: ''
  });

  // Mortgage Calculator State
  const [mortgageData, setMortgageData] = useState({
    homePrice: '',
    downPayment: '',
    interestRate: '',
    amortization: '25',
    paymentFreq: 'monthly'
  });

  // Estate Calculator State
  const [estateData, setEstateData] = useState({
    estateValue: '',
    province: 'ontario',
    beneficiaries: '1',
    hasWill: true
  });

  // Calculation Functions
  const calculateRetirement = () => {
    const current = parseFloat(retirementData.currentAge);
    const retirement = parseFloat(retirementData.retirementAge);
    const savings = parseFloat(retirementData.currentSavings);
    const monthly = parseFloat(retirementData.monthlyContribution);
    const rate = parseFloat(retirementData.expectedReturn) / 100;
    const years = retirement - current;

    if (isNaN(current) || isNaN(retirement) || isNaN(savings) || isNaN(monthly) || years <= 0) {
      return null;
    }

    const monthlyRate = rate / 12;
    const months = years * 12;
    
    const futureValueCurrent = savings * Math.pow(1 + rate, years);
    const futureValueContributions = monthly * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    const totalSavings = futureValueCurrent + futureValueContributions;

    return {
      totalSavings: totalSavings,
      monthlyIncome: totalSavings * 0.04 / 12, // 4% withdrawal rule
      years: years
    };
  };

  const calculateSeverance = () => {
    const salary = parseFloat(severanceData.salary);
    const years = parseFloat(severanceData.yearsService);
    const weeks = parseFloat(severanceData.severanceWeeks);

    if (isNaN(salary) || isNaN(years) || isNaN(weeks)) {
      return null;
    }

    const weeklySalary = salary / 52;
    const severancePay = weeklySalary * weeks;
    const maxEI = 668 * 45; // Max EI for 2025
    const monthlyBudget = salary / 12;

    return {
      severancePay: severancePay,
      totalPackage: severancePay + (severanceData.hasGroup ? 5000 : 0),
      monthsCovered: severancePay / monthlyBudget,
      eiEstimate: Math.min(maxEI, salary * 0.55 * 0.87)
    };
  };

  const calculateMortgage = () => {
    const price = parseFloat(mortgageData.homePrice);
    const down = parseFloat(mortgageData.downPayment);
    const rate = parseFloat(mortgageData.interestRate) / 100;
    const years = parseFloat(mortgageData.amortization);

    if (isNaN(price) || isNaN(down) || isNaN(rate) || isNaN(years)) {
      return null;
    }

    const principal = price - down;
    const monthlyRate = rate / 12;
    const payments = years * 12;
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);

    return {
      principal: principal,
      monthlyPayment: monthlyPayment,
      totalInterest: (monthlyPayment * payments) - principal,
      downPaymentPercent: (down / price) * 100
    };
  };

  const calculateEstate = () => {
    const value = parseFloat(estateData.estateValue);
    const beneficiaries = parseInt(estateData.beneficiaries);

    if (isNaN(value) || isNaN(beneficiaries)) {
      return null;
    }

    // Ontario probate fees
    let probateFees = 0;
    if (value > 50000) {
      probateFees = Math.min(value, 50000) * 0.005 + Math.max(0, value - 50000) * 0.015;
    }

    const executorFees = value * 0.05; // Typical 5%
    const legalFees = 15000; // Estimated legal costs
    const totalCosts = probateFees + executorFees + legalFees;
    const netEstate = value - totalCosts;

    return {
      grossEstate: value,
      probateFees: probateFees,
      totalCosts: totalCosts,
      netEstate: netEstate,
      perBeneficiary: netEstate / beneficiaries
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculators = [
    {
      id: 'retirement',
      title: 'Retirement Planning Calculator',
      description: 'Calculate how much you need to save for retirement',
      icon: PiggyBank,
      color: 'blue'
    },
    {
      id: 'severance',
      title: 'Severance Package Calculator',
      description: 'Evaluate your severance package and plan your transition',
      icon: Briefcase,
      color: 'purple'
    },
    {
      id: 'mortgage',
      title: 'Mortgage Payment Calculator',
      description: 'Calculate monthly payments and affordability',
      icon: Home,
      color: 'green'
    },
    {
      id: 'estate',
      title: 'Estate Planning Calculator',
      description: 'Estimate probate fees and estate distribution',
      icon: Users,
      color: 'red'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calculator className="w-16 h-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Financial Calculators</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Use these tools to plan your financial future. Get instant estimates for retirement, 
              severance, mortgages, and estate planning to make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Calculator Grid */}
        {!activeCalculator && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <div
                  key={calc.id}
                  onClick={() => setActiveCalculator(calc.id)}
                  className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-${calc.color}-100 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 text-${calc.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{calc.title}</h3>
                  <p className="text-gray-600 mb-4">{calc.description}</p>
                  <button className={`bg-${calc.color}-600 text-white px-4 py-2 rounded-lg hover:bg-${calc.color}-700 transition-colors`}>
                    Start Calculator
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Retirement Calculator */}
        {activeCalculator === 'retirement' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <PiggyBank className="w-8 h-8 text-blue-600 mr-3" />
                Retirement Planning Calculator
              </h2>
              <button
                onClick={() => setActiveCalculator(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back to all calculators
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Age
                      </label>
                      <input
                        type="number"
                        value={retirementData.currentAge}
                        onChange={(e) => setRetirementData(prev => ({ ...prev, currentAge: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="35"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Retirement Age
                      </label>
                      <input
                        type="number"
                        value={retirementData.retirementAge}
                        onChange={(e) => setRetirementData(prev => ({ ...prev, retirementAge: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="65"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Savings ($)
                    </label>
                    <input
                      type="number"
                      value={retirementData.currentSavings}
                      onChange={(e) => setRetirementData(prev => ({ ...prev, currentSavings: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="50000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Contribution ($)
                    </label>
                    <input
                      type="number"
                      value={retirementData.monthlyContribution}
                      onChange={(e) => setRetirementData(prev => ({ ...prev, monthlyContribution: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Annual Return (%)
                    </label>
                    <select
                      value={retirementData.expectedReturn}
                      onChange={(e) => setRetirementData(prev => ({ ...prev, expectedReturn: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="4">4% (Conservative)</option>
                      <option value="6">6% (Moderate)</option>
                      <option value="8">8% (Aggressive)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Retirement Projection</h3>
                {(() => {
                  const result = calculateRetirement();
                  if (!result) {
                    return (
                      <p className="text-gray-500">Enter your information to see projections</p>
                    );
                  }
                  return (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600">
                          {formatCurrency(result.totalSavings)}
                        </div>
                        <div className="text-sm text-gray-600">Total at Retirement</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-xl font-semibold text-green-600">
                          {formatCurrency(result.monthlyIncome)}
                        </div>
                        <div className="text-sm text-gray-600">Monthly Income (4% rule)</div>
                      </div>
                      
                      <div className="text-sm text-blue-700 bg-blue-100 rounded-lg p-3">
                        <strong>Planning Timeline:</strong> {result.years} years until retirement
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-4">
                        * Estimates based on consistent contributions and returns. 
                        Actual results may vary. Consult with a financial advisor for personalized planning.
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Severance Calculator */}
        {activeCalculator === 'severance' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
                Severance Package Calculator
              </h2>
              <button
                onClick={() => setActiveCalculator(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back to all calculators
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Salary ($)
                    </label>
                    <input
                      type="number"
                      value={severanceData.salary}
                      onChange={(e) => setSeveranceData(prev => ({ ...prev, salary: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="75000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Service
                    </label>
                    <input
                      type="number"
                      value={severanceData.yearsService}
                      onChange={(e) => setSeveranceData(prev => ({ ...prev, yearsService: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="5"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Severance Weeks Offered
                    </label>
                    <input
                      type="number"
                      value={severanceData.severanceWeeks}
                      onChange={(e) => setSeveranceData(prev => ({ ...prev, severanceWeeks: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="8"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasGroup"
                      checked={severanceData.hasGroup}
                      onChange={(e) => setSeveranceData(prev => ({ ...prev, hasGroup: e.target.checked }))}
                      className="mr-2"
                    />
                    <label htmlFor="hasGroup" className="text-sm text-gray-700">
                      Extended health/group benefits included
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Severance Analysis</h3>
                {(() => {
                  const result = calculateSeverance();
                  if (!result) {
                    return (
                      <p className="text-gray-500">Enter your information to see analysis</p>
                    );
                  }
                  return (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600">
                          {formatCurrency(result.severancePay)}
                        </div>
                        <div className="text-sm text-gray-600">Severance Payment</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-xl font-semibold text-green-600">
                          {result.monthsCovered.toFixed(1)} months
                        </div>
                        <div className="text-sm text-gray-600">Income Coverage</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-lg font-semibold text-blue-600">
                          {formatCurrency(result.eiEstimate)}
                        </div>
                        <div className="text-sm text-gray-600">Estimated EI Benefits</div>
                      </div>
                      
                      <div className="text-sm text-purple-700 bg-purple-100 rounded-lg p-3">
                        <strong>Total Package Value:</strong> {formatCurrency(result.totalPackage)}
                        {severanceData.hasGroup && <span> (includes benefits)</span>}
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-4">
                        * This is an estimate. Actual severance entitlements may be higher 
                        under common law. Consider consulting with an employment lawyer.
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-800 text-sm">
                These calculators provide estimates based on the information you provide and standard assumptions. 
                They are for educational purposes only and should not be considered as financial advice. 
                Actual results may vary significantly based on market conditions, tax changes, and individual circumstances. 
                For personalized financial planning, please schedule a consultation with one of our certified financial advisors.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Financial Planning?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            These calculators give you a starting point, but every financial situation is unique. 
            Get expert guidance tailored to your specific needs and goals.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}