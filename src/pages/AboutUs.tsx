import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6 py-12">
        <h1 className="mt-16 text-3xl md:text-5xl font-bold text-luxury mb-6">
          About Blackstone Insurance
        </h1>

        <div className="glass-card p-8 rounded-2xl w-full max-w-4xl space-y-6">
          <div className="text-left space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-matrix mb-4">
                Who We Are
              </h2>
              <p className="text-foreground leading-relaxed">
                Blackstone Insurance is your trusted partner in comprehensive
                insurance solutions. We specialize in providing tailored
                coverage for all your insurance needs, from personal auto and
                home insurance to business and rental property protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-matrix mb-4">
                Our Mission
              </h2>
              <p className="text-foreground leading-relaxed">
                Our mission is to protect what matters most to you. We believe
                that everyone deserves affordable, reliable insurance coverage
                that provides peace of mind and financial security. Our team of
                experienced professionals works tirelessly to find the best
                coverage options at competitive rates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-matrix mb-4">
                Our Services
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-luxury mb-2">
                    Personal Insurance
                  </h3>
                  <ul className="text-foreground space-y-1">
                    <li>• Auto Insurance</li>
                    <li>• Home Insurance</li>
                    <li>• Rental Insurance</li>
                  </ul>
                </div>
                <div className="bg-black/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-luxury mb-2">
                    Business Insurance
                  </h3>
                  <ul className="text-foreground space-y-1">
                    <li>• General Liability</li>
                    <li>• Professional Liability</li>
                    <li>• Workers Compensation</li>
                    <li>• Business Owner Policy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-matrix mb-4">
                Why Choose Us
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="text-lg font-semibold text-luxury mb-2">
                    Comprehensive Coverage
                  </h3>
                  <p className="text-foreground text-sm">
                    We offer complete protection tailored to your specific
                    needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="text-lg font-semibold text-luxury mb-2">
                    Competitive Rates
                  </h3>
                  <p className="text-foreground text-sm">
                    Get the best value for your insurance investment.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="text-lg font-semibold text-luxury mb-2">
                    Expert Support
                  </h3>
                  <p className="text-foreground text-sm">
                    Our experienced team is here to help you every step of the
                    way.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
