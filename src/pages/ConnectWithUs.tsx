import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

const ConnectWithUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: Phone,
      title: "Elite Support Line",
      description: "24/7 premium customer service",
      detail: "(917)-487-9110",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Executive Email",
      description: "Direct communication with our specialists",
      detail: "Info@blackstonemultiservices.com",
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Corporate Headquarters",
      description: "Visit our luxury offices",
      detail: "New York, NY 10001",
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Always available for our clients",
      detail: "24/7 Emergency • Mon-Fri 8AM-8PM",
      action: "Schedule Call",
    },
  ];

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // Add null check to fix the TypeScript error
    if (!form.current) {
      console.error("Form reference is not available");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_m642kos", // Your EmailJS service ID
        "template_wxx716l", // Your EmailJS template ID
        form.current,
        "phbzi59vZjaozZbbR" // Your EmailJS public key
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setSubmitStatus("success");
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24 pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="matrix-rain opacity-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16 animate-reveal">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-luxury mb-4 md:mb-6">
                Get Started
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
                Experience premium service and personalized attention. Our elite
                team is ready to provide you with exceptional insurance
                solutions.
              </p>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <Carousel />
        </div>

        {/* Contact Methods */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-charcoal-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 animate-reveal-delay-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxury mb-4 md:mb-6">
                Premium Communication Channels
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Multiple ways to connect with our elite insurance specialists
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 md:p-8 text-center hover:shadow-glow transition-all duration-500 animate-reveal-delay-2"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-matrix rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <method.icon className="w-6 h-6 md:w-8 md:h-8 text-matrix" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-luxury mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                    {method.description}
                  </p>
                  <p className="text-foreground font-medium text-base md:text-lg mb-3 md:mb-4 break-words whitespace-normal">
                    {method.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="animate-reveal">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxury mb-6 md:mb-8">
                  Get Premium Consultation
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Ready to experience the Blackstone difference? Fill out our
                  exclusive consultation form and one of our elite specialists
                  will contact you within 24 hours.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-matrix flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">
                      Personalized insurance assessment
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-matrix flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">
                      Flexible scheduling options
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Send className="w-5 h-5 md:w-6 md:h-6 text-matrix flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">
                      Immediate response guarantee
                    </span>
                  </div>
                </div>
              </div>

              <div className="animate-reveal-delay-1">
                <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-matrix-green/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="sm:col-span-1">
                          <label className="block text-sm font-medium text-foreground mb-2">
                            First Name
                          </label>
                          <Input
                            name="first_name"
                            placeholder="Enter your first name"
                            className="bg-background/50 border-border"
                            required
                          />
                        </div>
                        <div className="sm:col-span-1">
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Last Name
                          </label>
                          <Input
                            name="last_name"
                            placeholder="Enter your last name"
                            className="bg-background/50 border-border"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          className="bg-background/50 border-border"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          className="bg-background/50 border-border"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Insurance Type
                        </label>
                        <Select name="insurance_type" required>
                          <SelectTrigger className="bg-background/50 border-border">
                            <SelectValue placeholder="Select insurance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Car Insurance">
                              Car Insurance
                            </SelectItem>
                            <SelectItem value="Home Insurance">
                              Home Insurance
                            </SelectItem>
                            <SelectItem value="Business Insurance">
                              Business Insurance
                            </SelectItem>
                            <SelectItem value="Rental Insurance">
                              Rental Insurance
                            </SelectItem>
                            <SelectItem value="Multiple Policies">
                              Multiple Policies
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your insurance needs..."
                          rows={4}
                          className="bg-background/50 border-border"
                          required
                        />
                      </div>

                      {submitStatus === "success" && (
                        <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm md:text-base">
                          Thank you! Your message has been sent successfully.
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm md:text-base">
                          Sorry, there was an error sending your message. Please
                          try again.
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="btn-luxury w-full text-base md:text-lg py-3 md:py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Request Premium Consultation
                            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-charcoal-light to-background" />
          <div className="matrix-rain opacity-10" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxury mb-4 md:mb-6 animate-reveal">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 animate-reveal-delay-1 px-4">
              Connect with Blackstone Insurance today and discover why we're the
              preferred choice for discerning clients who demand the very best.
            </p>
            <a
              href="tel:9174879110"
              className="inline-block animate-reveal-delay-2"
            >
              <Button className="btn-luxury text-base md:text-lg px-8 md:px-12 py-3 md:py-4">
                Start Your Premium Experience
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ConnectWithUs;
