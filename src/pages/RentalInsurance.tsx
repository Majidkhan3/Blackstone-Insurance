import Navigation from '@/components/Navigation';
import { Home, Key, Umbrella, Clock, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import EasyProcess from '@/components/EasyProcess';
import Favourite from '@/components/Favourite';

const RentalInsurance = () => {
  const coverageOptions = [
    {
      icon: Home,
      title: "Personal Property",
      description: "Comprehensive protection for your belongings and personal assets"
    },
    {
      icon: Umbrella,
      title: "Liability Protection",
      description: "Premium coverage against accidents and legal claims"
    },
    {
      icon: Clock,
      title: "Loss of Use",
      description: "Temporary housing assistance when your rental becomes uninhabitable"
    },
    {
      icon: MapPin,
      title: "Worldwide Coverage",
      description: "Protection that follows you anywhere in the world"
    }
  ];

  const protectionTypes = [
    "Personal Belongings Coverage",
    "Liability Insurance",
    "Medical Payments",
    "Loss of Use Coverage",
    "Identity Theft Protection",
    "Water Backup Coverage",
    "Valuable Items Protection",
    "Pet Liability Coverage"
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
              Rental Insurance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Premium protection for modern renters who demand excellence. 
              Safeguard your lifestyle with our elite rental insurance solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury text-lg px-8 py-4">
                Get Rental Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Carousel/>
      {/* Coverage Options */}
      <section className="py-20 bg-gradient-to-b from-background to-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-reveal-delay-1">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
              Complete Rental Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sophisticated coverage designed for the discerning renter's lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageOptions.map((option, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 text-center hover:shadow-glow transition-all duration-500 animate-reveal-delay-2"
              >
                <div className="w-16 h-16 bg-gradient-matrix rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-matrix" />
                </div>
                <h3 className="text-xl font-semibold text-luxury mb-4">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-8">
                Comprehensive Protection Matrix
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our rental insurance goes beyond basic coverage, providing comprehensive 
                protection tailored for modern renters who value quality and peace of mind.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {protectionTypes.map((type, index) => (
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
                  <h3 className="text-2xl font-bold text-luxury mb-6">Premium Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Instant Digital Claims Processing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">24/7 Customer Support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Replacement Cost Coverage</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">No Deductible Claims Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EasyProcess/>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6 animate-reveal">
              Why Choose Blackstone Rental Insurance?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-reveal">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Key className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-luxury mb-4">Instant Coverage</h3>
              <p className="text-muted-foreground">Get protected in minutes with our streamlined digital process</p>
            </div>
            
            <div className="text-center animate-reveal-delay-1">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-luxury mb-4">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock assistance whenever you need it</p>
            </div>
            
            <div className="text-center animate-reveal-delay-2">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Umbrella className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-luxury mb-4">Premium Protection</h3>
              <p className="text-muted-foreground">Comprehensive coverage that adapts to your lifestyle</p>
            </div>
          </div>
        </div>
      </section>
      <Favourite/>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-charcoal-light to-background" />
        <div className="matrix-rain opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6 animate-reveal">
            Protect Your Rental Lifestyle
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-reveal-delay-1">
            Join thousands of renters who trust Blackstone Insurance for premium protection 
            and unmatched peace of mind.
          </p>
          <Button className="btn-luxury text-lg px-12 py-4 animate-reveal-delay-2">
            Get Your Rental Coverage Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default RentalInsurance;