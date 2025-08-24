import React from 'react';

const EasyProcess = () => {
  const steps = [
    {
      number: "1-",
      title: "Submit some basic info for a Free Quote",
      description: "Share a few details about your insurance needs through our secure form.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      )
    },
    {
      number: "2-",
      title: "Our experts compare rates & coverage from America's top insurers",
      description: "We analyze options from leading providers to find your best match.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      number: "3-",
      title: "Have your new policy started or switched — for free",
      description: "We handle all the paperwork at no cost to you.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden text-white">
      {/* Decorative glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            With us, <span className="text-[#12C855]"style={{color:"#00A1FC"}}>getting insurance</span> is as easy as <span className="text-[#F4C538]">1-2-3</span>
          </h2>
          <div className="w-24 h-1 bg-[#00A1FC] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes it simple to find the perfect coverage at the best price.
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
                <div className="w-16 h-16 rounded-lg bg-[#12C855]/10 flex items-center justify-center text-[#12C855] mb-6 mx-auto"  style={{color:"#00A1FC"}}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-center leading-tight" style={{color:'#F4C538'}}>
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
  );
};

export default EasyProcess;
