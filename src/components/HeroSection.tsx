import { ArrowRight, Shield, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatrixRain from "./MatrixRain";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      <MatrixRain />
      <div className="hero-gradient absolute inset-0 z-0" />

      <div className="mt-8 relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[100vh] sm:min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Left Column */}
        <div className="lg:w-1/2 w-full flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-luxury">BLACKSTONE</span>
            <br />
            <span className="text-matrix" style={{ color: "#00A1FC" }}>
              INSURANCE
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix to-luxury mx-auto lg:mx-0 mt-4"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Protecting your future with cutting-edge security and unmatched
            reliability. Experience insurance redefined through advanced
            technology and personalized service.
          </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link to="/connect">
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-[#00A1FC] to-[#0078CC] hover:from-[#0078CC] hover:to-[#005EA3] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl shadow-[#00A1FC]/30 border-2 border-[#00A1FC]/50 w-full sm:w-auto min-w-[200px] group transition-all duration-300 hover:scale-105 hover:shadow-[#00A1FC]/50"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Pulsing border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#00A1FC] animate-pulse opacity-75"></div>
              </Button>
            </Link>
            
            {/* Secondary button for contrast */}
            <Link to="/quote">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#00A1FC]/50 text-[#00A1FC] hover:bg-[#00A1FC]/10 hover:border-[#00A1FC] font-semibold px-6 py-4 rounded-xl w-full sm:w-auto transition-all duration-300"
              >
                Quick Quote
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 pt-8 justify-center lg:justify-start">
            <div className="flex items-center space-x-2">
              <Shield
                className="w-6 h-6 text-matrix"
                style={{ color: "#00A1FC" }}
              />
              <span className="text-sm text-muted-foreground">
                256-bit Encryption
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock
                className="w-6 h-6 text-matrix"
                style={{ color: "#00A1FC" }}
              />
              <span className="text-sm text-muted-foreground">
                Secure Claims
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap
                className="w-6 h-6 text-matrix"
                style={{ color: "#00A1FC" }}
              />
              <span className="text-sm text-muted-foreground">
                Instant Processing
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-luxury mb-2">
                  Coverage Calculator
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Get your personalized quote in seconds
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-lg text-center">
                  <div
                    className="text-2xl font-bold text-matrix"
                    style={{ color: "#00A1FC" }}
                  >
                    $2.5M+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Coverage Available
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div
                    className="text-2xl font-bold text-matrix"
                    style={{ color: "#00A1FC" }}
                  >
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Claims Support
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div
                    className="text-2xl font-bold text-matrix"
                    style={{ color: "#00A1FC" }}
                  >
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Uptime Guarantee
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div
                    className="text-2xl font-bold text-matrix"
                    style={{ color: "#00A1FC" }}
                  >
                    30sec
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quote Generation
                  </div>
                </div>
              </div>

              <Link to="/quote" className="mt-4 sm:mt-6 block">
                <Button className="btn-matrix w-full animate-pulse-matrix">
                  Start Your Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
