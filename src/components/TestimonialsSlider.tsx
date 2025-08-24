import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Business Owner",
    rating: 5,
    text: "Blackstone Insurance provided exceptional coverage for my business. Their matrix-level security protocols and premium service exceeded all expectations. Truly the gold standard in insurance.",
    image: "/lady.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Homeowner",
    rating: 5,
    text: "The level of sophistication and attention to detail is unmatched. When I needed to file a claim, their response was swift and professional. Blackstone truly delivers luxury insurance.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Jennifer Rodriguez",
    role: "Car Owner",
    rating: 5,
    text: "From the moment I contacted Blackstone, I knew I was dealing with premium professionals. Their car insurance coverage is comprehensive and their service is absolutely stellar.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">
            Trusted by Elite Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the luxury of premium protection with testimonials from our distinguished clientele
          </p>
        </div>

        <div className="relative">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-matrix-green/10 rounded-full blur-3xl" />
            
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="text-matrix hover:bg-matrix-green/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-matrix-green' : 'bg-border'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="text-matrix hover:bg-matrix-green/10 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="transition-all duration-500 transform">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full border-2 border-matrix-green/30 mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-luxury">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-muted-foreground">{testimonials[currentSlide].role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <span className="text-matrix font-semibold">98% Satisfaction Rate</span>
            <div className="w-px h-6 bg-border" />
            <span className="text-matrix font-semibold">Premium Protection</span>
            <div className="w-px h-6 bg-border" />
            <span className="text-matrix font-semibold">Elite Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;