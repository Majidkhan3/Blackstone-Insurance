import React from "react";
import {
  FaMoneyBillWave,
  FaClock,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

const WhyWeAreFavorite = () => {
  const features = [
    {
      icon: <FaMoneyBillWave className="w-8 h-8 text-neon-green"style={{color:"#00A1FC"}} />,
      title: "We save our clients their hard earned money",
      description:
        "Our experts find you the best rates without compromising on coverage quality.",
    },
    {
      icon: <FaClock className="w-8 h-8 text-neon-yellow" style={{color:"#00A1FC"}}/>,
      title: "Same Day Free Quotes",
      description:
        "Get multiple insurance quotes on the same day without any obligation.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-neon-green"style={{color:"#00A1FC"}} />,
      title: "Over 100+ Insurance Carriers",
      description:
        "Access to the largest network of insurance providers in the country.",
    },
    {
      icon: <FaAward className="w-8 h-8 text-neon-yellow"style={{color:"#00A1FC"}} />,
      title: "We will help you insure anything... Literally!",
      description:
        "From standard policies to unique coverage needs, we've got you covered.",
    },
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#0B0F0E] to-[#141A19] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-neon-green/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neon-yellow/20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why We're <span style={{color:'#F4C538'}}>America's</span>{" "}
            <span style={{color:"#00A1FC"}}>Favorite Insurance</span> Company?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-yellow mx-auto mb-6"></div>
          <p className="text-lg text-neon-yellow max-w-3xl mx-auto">
            Discover why thousands of clients trust us with their insurance
            needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-8 
                         border border-neon-green/40 shadow-lg 
                         transition-all duration-300 
                         hover:shadow-neon-green/60 hover:-translate-y-2
                         text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <div
                  className="bg-gradient-to-br from-neon-green/20 to-neon-yellow/20 
                                rounded-xl p-4 flex items-center justify-center shadow-inner"
                                style={{color:'#12C855'}}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 leading-tight" style={{color:'#F4C538'}}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreFavorite;
