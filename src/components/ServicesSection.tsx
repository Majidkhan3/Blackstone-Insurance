import { Car, Home, Briefcase, Heart, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Comprehensive coverage for your vehicle with advanced collision detection and instant claims processing.",
    features: ["Collision Coverage", "Theft Protection", "24/7 Roadside Assistance"]
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Protect your home and belongings with smart monitoring and rapid response systems.",
    features: ["Property Protection", "Smart Home Integration", "Natural Disaster Coverage"]
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Enterprise-grade protection for your business operations and digital assets.",
    features: ["Cyber Security", "Liability Coverage", "Business Interruption"]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-luxury">Our</span>{" "}
            <span className="text-matrix">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced insurance solutions powered by cutting-edge technology and backed by uncompromising security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-matrix to-matrix-glow flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-matrix mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;