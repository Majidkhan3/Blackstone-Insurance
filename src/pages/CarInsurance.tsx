import Navigation from "@/components/Navigation";
import {
  Shield,
  Zap,
  Lock,
  Award,
  CheckCircle,
  ArrowRight,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import EasyProcess from "@/components/EasyProcess";
import Favourite from "@/components/Favourite";
import CarQuestion from "@/components/CarsQuestion";
import { Link } from "react-router-dom";

const CarInsurance = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Protection",
      description:
        "Comprehensive coverage for all vehicle types with our elite protection matrix",
    },
    {
      icon: Zap,
      title: "Instant Claims",
      description:
        "Lightning-fast claim processing with our advanced AI-powered assessment system",
    },
    {
      icon: Lock,
      title: "Secure Coverage",
      description:
        "Bank-level security protocols protecting your policy and personal information",
    },
    {
      icon: Award,
      title: "Elite Benefits",
      description:
        "Exclusive perks including luxury rental cars and concierge services",
    },
  ];

  const coverageTypes = [
    "Comprehensive Coverage",
    "Collision Protection",
    "Liability Insurance",
    "Uninsured Motorist",
    "Medical Payments",
    "Rental Car Coverage",
    "Gap Insurance",
    "Custom Equipment",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="matrix-rain opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-reveal">
            <h1 className="text-4xl md:text-6xl font-extrabold text-luxury tracking-tight mb-6">
              Car Insurance Made Simple
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              The{" "}
              <span className="text-[#00A1FC] font-semibold">
                Car Insurance
              </span>{" "}
              you need, at the{" "}
              <span className="text-luxury">lowest prices</span>.
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-6">
              Get the coverage you need at the lowest prices — compare instant
              quotes from 100+ top insurance companies for free.
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
      <Carousel />
      <EasyProcess />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-reveal-delay-1">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
              Matrix-Level Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced automotive insurance solutions powered by cutting-edge
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 text-center hover:shadow-glow transition-all duration-500 animate-reveal-delay-2"
              >
                <div className="w-16 h-16 bg-gradient-matrix rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-matrix" />
                </div>
                <h3 className="text-xl font-semibold text-luxury mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Favourite />

      {/* Coverage Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-8">
                Comprehensive Coverage Matrix
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our elite car insurance portfolio offers unparalleled protection
                with luxury-grade coverage options tailored for discerning
                clients.
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
                  <h3 className="text-2xl font-bold text-luxury mb-6">
                    Premium Benefits
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        24/7 Concierge Claims Service
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        Luxury Rental Car Program
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        OEM Parts Guarantee
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-matrix mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        Zero Deductible Glass Repair
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal" />
        <div className="matrix-rain opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6 animate-reveal">
            Ready for Elite Protection?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-reveal-delay-1">
            Join thousands of satisfied clients who trust Blackstone Insurance
            for their premium automotive protection needs.
          </p>
          <Link to="/connect">
            <Button className="btn-luxury text-lg px-12 py-4 animate-reveal-delay-2">
              Get Your Premium Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      <CarQuestion />
      <Footer />
    </div>
  );
};

export default CarInsurance;
