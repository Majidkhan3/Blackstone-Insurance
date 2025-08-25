import Navigation from '@/components/Navigation';
import { Home, Shield, Wrench, Leaf, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import EasyProcess from '@/components/EasyProcess';
import Favourite from '@/components/Favourite';

const HomeInsurance = () => {
  const protectionFeatures = [
    {
      icon: Home,
      title: "Dwelling Protection",
      description: "Comprehensive coverage for your home's structure and architectural features"
    },
    {
      icon: Shield,
      title: "Personal Property",
      description: "Premium protection for your valuable belongings and family treasures"
    },
    {
      icon: Wrench,
      title: "Home Systems",
      description: "Advanced coverage for HVAC, plumbing, and electrical systems"
    },
    {
      icon: Leaf,
      title: "Natural Disasters",
      description: "Elite protection against weather events and natural catastrophes"
    }
  ];

  const coverageTypes = [
    "Dwelling Coverage",
    "Personal Property Protection",
    "Liability Insurance",
    "Additional Living Expenses",
    "Medical Payments Coverage",
    "Equipment Breakdown",
    "Water Backup Coverage",
    "Home Office Protection"
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
              Home Insurance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Premium protection for your most precious investment. 
              Safeguard your home and family with our elite residential insurance solutions.
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

      {/* Protection Features */}
      <section className="py-20 bg-gradient-to-b from-background to-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-reveal-delay-1">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
              Fortress-Level Home Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced home insurance solutions engineered for discerning homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 text-center hover:shadow-glow transition-all duration-500 animate-reveal-delay-2"
              >
                <div className="w-16 h-16 bg-gradient-matrix rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-matrix" />
                </div>
                <h3 className="text-xl font-semibold text-luxury mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EasyProcess/>
      {/* Coverage Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-8">
                Comprehensive Home Coverage
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our premium home insurance provides complete protection for your property, 
                possessions, and peace of mind with coverage that exceeds industry standards.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {coverageTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-matrix flex-shrink-0" />
                    <span className="text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-reveal-delay-1">
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-matrix-green/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-luxury mb-6">Elite Homeowner Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Guaranteed Replacement Cost</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Premium Contractor Network</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Smart Home Device Discounts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">24/7 Emergency Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Favourite/>

      {/* Home Value Protection */}
      <section className="py-20 bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6 animate-reveal">
              Protecting What Matters Most
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-reveal-delay-1">
              Your home is more than an investment—it's where your life unfolds. 
              Our premium coverage ensures every precious moment is protected.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-reveal">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-luxury mb-4">Family First</h3>
              <p className="text-muted-foreground">Protection designed around your family's unique needs and lifestyle</p>
            </div>
            
            <div className="text-center animate-reveal-delay-1">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-luxury mb-4">Total Security</h3>
              <p className="text-muted-foreground">Comprehensive protection against all risks and uncertainties</p>
            </div>
            
            <div className="text-center animate-reveal-delay-2">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-luxury mb-4">Home Investment</h3>
              <p className="text-muted-foreground">Safeguarding your property value and future financial security</p>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-reveal">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">250,000+</div>
              <p className="text-muted-foreground">Homes Protected</p>
            </div>
            <div className="animate-reveal-delay-1">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">$5.2B+</div>
              <p className="text-muted-foreground">Property Value Covered</p>
            </div>
            <div className="animate-reveal-delay-2">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">99.1%</div>
              <p className="text-muted-foreground">Claims Satisfaction</p>
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
            Secure Your Home's Future
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-reveal-delay-1">
            Join hundreds of thousands of homeowners who trust Blackstone Insurance 
            for premium home protection and unparalleled peace of mind.
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

export default HomeInsurance;