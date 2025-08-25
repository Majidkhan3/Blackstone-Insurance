// src/pages/CreditRepair.jsx
"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Shield, FileCheck, BarChart3, Target, Clock, CheckCircle, Phone, Calendar, ArrowRight, Users, FileText, CreditCard, TrendingUp, BadgeDollarSign } from "lucide-react";

export default function CreditRepair() {
  const services = [
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Credit Report Analysis",
      description: "Comprehensive review of your credit reports from all three bureaus",
      details: [
        "Tri-bureau credit report analysis",
        "Identification of errors and inaccuracies",
        "Customized dispute strategy",
        "Credit score factors explanation",
        "Personalized action plan"
      ],
      requirements: ["Current credit reports", "Personal identification", "Financial history details"],
      process: "Initial analysis completed within 2-3 business days"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Dispute Services",
      description: "Professional dispute of inaccurate, unverified, or outdated information",
      details: [
        "Custom dispute letter preparation",
        "Creditor and bureau communication",
        "Follow-up on all disputes",
        "Documentation management",
        "Results tracking and reporting"
      ],
      requirements: ["Authorization to act on your behalf", "Supporting documentation", "Credit report copies"],
      process: "Dispute process typically takes 30-45 days per round"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Credit Score Optimization",
      description: "Strategies to improve your credit score through positive credit behaviors",
      details: [
        "Credit utilization optimization",
        "Payment history improvement plan",
        "Credit mix recommendations",
        "New credit application guidance",
        "Age of credit strategies"
      ],
      requirements: ["Current financial situation", "Credit goals", "Spending patterns"],
      process: "Score improvement typically seen within 3-6 months"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Debt Validation",
      description: "Request validation of debts to ensure their legitimacy and accuracy",
      details: [
        "Debt validation letter preparation",
        "Creditor communication",
        "Statute of limitations review",
        "Debt settlement negotiation",
        "Payment plan establishment"
      ],
      requirements: ["Collection notices", "Creditor information", "Debt details"],
      process: "Validation process typically takes 30 days per debt"
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10" />,
      title: "Creditor Negotiation",
      description: "Professional negotiation with creditors to improve your credit situation",
      details: [
        "Goodwill adjustment requests",
        "Pay-for-delete negotiations",
        "Settlement offers",
        "Payment plan arrangements",
        "Creditor relationship management"
      ],
      requirements: ["Account information", "Payment history", "Financial capability details"],
      process: "Negotiations can take 2-4 weeks depending on creditor responsiveness"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Credit Education & Coaching",
      description: "Ongoing education and support to maintain healthy credit long-term",
      details: [
        "Personalized credit education",
        "Financial habit coaching",
        "Credit monitoring guidance",
        "Identity theft protection strategies",
        "Long-term credit maintenance plan"
      ],
      requirements: ["Willingness to learn", "Commitment to financial health", "Regular check-ins"],
      process: "Ongoing service with monthly consultations and progress reviews"
    }
  ];

  const steps = [
    {
      number: "1-",
      title: "Free Consultation & Credit Report Review",
      description: "We analyze your current credit situation and identify opportunities for improvement.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      )
    },
    {
      number: "2-",
      title: "Customized Action Plan Development",
      description: "We create a personalized strategy to address inaccuracies and improve your credit profile.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      number: "3-",
      title: "Implementation & Ongoing Support",
      description: "We execute your plan and provide continuous monitoring and adjustments as needed.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Higher Credit Scores",
      description: "Average clients see a 50-100 point increase in their credit scores"
    },
    {
      title: "Error Identification",
      description: "79% of credit reports contain errors that we can help dispute"
    },
    {
      title: "Debt Reduction",
      description: "Negotiate with creditors to reduce what you owe"
    },
    {
      title: "Financial Opportunities",
      description: "Better rates on loans, credit cards, and insurance"
    },
    {
      title: "Time Savings",
      description: "We handle the complex paperwork and follow-ups for you"
    },
    {
      title: "Long-Term Strategies",
      description: "Education and tools to maintain good credit forever"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden text-white">
        {/* Decorative glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-5">
            Professional <span className="text-[#00A1FC]">Credit Repair</span> Services
          </h1>
          <div className="w-24 h-1 bg-[#00A1FC] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We help you dispute inaccuracies, improve your credit score, and unlock financial opportunities
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full py-20 bg-gradient-to-b from-[#111827] to-[#0B0B0B] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Credit Repair Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-xl shadow-lg p-6 border border-gray-800 group hover:border-[#00A1FC] transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-[#00A1FC]/10 p-3 rounded-full mr-4">
                    <div className="text-[#00A1FC]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-[#F4C538]">Services Include:</h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#00A1FC] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-[#F4C538]">Requirements:</h4>
                  <ul className="space-y-1">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#00A1FC] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-[#F4C538]">Timeline:</h4>
                  <p className="text-gray-300 text-sm">{service.process}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Benefits of Credit Repair</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
                <div className="w-12 h-12 rounded-lg bg-[#00A1FC]/10 flex items-center justify-center text-[#00A1FC] mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden text-white">
        {/* Decorative glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#00A1FC]">Credit Repair Process</span> is as easy as <span className="text-[#F4C538]">1-2-3</span>
            </h2>
            <div className="w-24 h-1 bg-[#00A1FC] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our proven process makes credit repair straightforward and effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-[#1A1A1A] rounded-xl shadow-lg p-8 h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-800">
                  
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#00A1FC] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>

                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-[#00A1FC]/10 flex items-center justify-center text-[#00A1FC] mb-6 mx-auto">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-center leading-tight text-[#F4C538]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-1 bg-[#F4C538]/40">
                    <div className="absolute top-1/2 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F4C538] transform rotate-45 -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#111827] to-[#0B0B0B] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">How long does credit repair take?</h3>
              <p className="text-gray-400">The credit repair process typically takes 3-6 months to see significant results, though some clients see improvements in as little as 30 days. The timeline depends on the complexity of your credit issues and how quickly creditors respond to disputes.</p>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Is credit repair legal?</h3>
              <p className="text-gray-400">Yes, credit repair is completely legal. The Credit Repair Organizations Act (CROA) gives consumers the right to dispute inaccurate information on their credit reports. We operate in full compliance with all federal and state laws governing credit repair services.</p>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">How much does credit repair cost?</h3>
              <p className="text-gray-400">We offer transparent pricing with no hidden fees. Our services start at $99 per month, with a one-time setup fee of $99. We only charge for results, and you can cancel at any time with no long-term commitment required.</p>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Can you guarantee results?</h3>
              <p className="text-gray-400">While we cannot guarantee specific results due to the nature of credit reporting, we have a proven track record of success. We're so confident in our services that we offer a 90-day money-back guarantee if we don't successfully remove any inaccurate items from your credit report.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Credit?</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:+917-487-9110" className="flex items-center bg-[#00A1FC] hover:bg-[#0088D1] text-white py-3 px-6 rounded-md transition-colors">
              <Phone className="mr-2 w-5 h-5" /> Call Us: 917-487-9110
            </a>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}