import Navigation from '@/components/Navigation';
import { Building, TrendingUp, Users, Globe, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import EasyProcess from '@/components/EasyProcess';
import Favourite from '@/components/Favourite';

const BusinessInsurance = () => {
  const solutions = [
    {
      icon: Building,
      title: "Commercial Property",
      description: "Comprehensive protection for your business assets and real estate investments"
    },
    {
      icon: Users,
      title: "Workers' Compensation",
      description: "Elite coverage ensuring your team's safety and your business continuity"
    },
    {
      icon: Globe,
      title: "Cyber Security",
      description: "Advanced digital protection against modern cyber threats and data breaches"
    },
    {
      icon: Briefcase,
      title: "Professional Liability",
      description: "Executive-level protection for professional services and consultancy firms"
    }
  ];

  const industries = [
    "Technology & Software",
    "Healthcare & Medical",
    "Financial Services",
    "Manufacturing",
    "Real Estate",
    "Retail & E-commerce",
    "Professional Services",
    "Construction & Engineering"
  ];

  return (
    <>
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="matrix-rain opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-reveal">
            <h1 className="text-5xl md:text-7xl font-bold text-luxury mb-6">
              Business Insurance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade protection designed for visionary leaders and growing businesses. 
              Secure your company's future with our premium business insurance solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="tel:+1 917-487-9110
"
                className="px-6 py-3 rounded-xl bg-[#00A1FC] text-white font-semibold shadow-lg hover:bg-[#0B0B51] transition-colors"
              >
                Call Us Now: +1 917-487-9110
              </a>
            </div>
          </div>
        </div>
      </section>
      <Carousel/>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-background to-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-reveal-delay-1">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
              Enterprise Solutions Matrix
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business protection tailored for modern enterprises and industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 text-center hover:shadow-glow transition-all duration-500 animate-reveal-delay-2"
              >
                <div className="w-16 h-16 bg-gradient-matrix rounded-full flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-matrix" />
                </div>
                <h3 className="text-xl font-semibold text-luxury mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Favourite/>

      {/* Industry Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-8">
                Industry-Specific Coverage
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our specialized business insurance solutions are crafted for diverse industries, 
                providing targeted protection that understands your unique business challenges.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-matrix flex-shrink-0" />
                    <span className="text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-reveal-delay-1">
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-matrix-green/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-luxury mb-6">Executive Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Dedicated Business Account Manager</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">24/7 Risk Management Consulting</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Worldwide Coverage Options</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Custom Policy Design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <EasyProcess/>
      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-reveal">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">500+</div>
              <p className="text-muted-foreground">Enterprise Clients Protected</p>
            </div>
            <div className="animate-reveal-delay-1">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">$2.5B+</div>
              <p className="text-muted-foreground">Business Assets Covered</p>
            </div>
            <div className="animate-reveal-delay-2">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">99.8%</div>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-charcoal-light to-background" />
        <div className="matrix-rain opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6 animate-reveal">
            Elevate Your Business Protection
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-reveal-delay-1">
            Join industry leaders who trust Blackstone Insurance for comprehensive 
            business protection and risk management solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="tel:+1 917-487-9110
"
                className="px-6 py-3 rounded-xl bg-[#00A1FC] text-white font-semibold shadow-lg hover:bg-[#0B0B51] transition-colors"
              >
                Call Us Now: +1 917-487-9110
              </a>
            </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default BusinessInsurance;