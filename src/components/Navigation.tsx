import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Car,
  Building,
  Home,
  Key,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      name: "Car Insurance",
      path: "/car-insurance",
      icon: Car,
      description: "Comprehensive auto coverage",
    },
    {
      name: "Business Insurance",
      path: "/business-insurance",
      icon: Building,
      description: "Protect your business assets",
    },
    {
      name: "Rental Insurance",
      path: "/rental-insurance",
      icon: Key,
      description: "Coverage for rental properties",
    },
    {
      name: "Home Insurance",
      path: "/home-insurance",
      icon: Home,
      description: "Secure your family home",
    },
  ];

  // Close dropdown when clicking outside (only for desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        window.innerWidth >= 768 // Only apply to desktop
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu and services dropdown when navigating
  const handleMobileNavigation = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={handleMobileNavigation}>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Blackstone Logo"
                  className="w-10 h-18 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-luxury">BLACKSTONE</span>
              <span className="text-xl font-light text-foreground">
                INSURANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-matrix transition-colors py-2 font-medium"
            >
              Home
            </Link>

            {/* Enhanced Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-foreground hover:text-matrix transition-colors py-2 font-medium group"
              >
                <Shield className="w-4 h-4 mr-2" />
                Services
              
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-matrix/30 rounded-xl shadow-2xl shadow-matrix/20 py-3 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-matrix/20 mb-2">
                    <h3 className="text-matrix font-semibold text-sm uppercase tracking-wider">
                      Insurance Services
                    </h3>
                  </div>

                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-start px-4 py-3 text-foreground hover:text-matrix hover:bg-matrix/5 transition-all duration-200 group border-l-2 border-transparent hover:border-matrix/50"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="flex-shrink-0 mr-3 mt-0.5">
                          <IconComponent className="w-5 h-5 text-matrix/70 group-hover:text-matrix transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm group-hover:text-matrix transition-colors">
                            {service.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5 group-hover:text-matrix/70 transition-colors">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}

                  <div className="mt-3 pt-3 border-t border-matrix/20 px-4">
                    <div className="text-xs text-muted-foreground text-center">
                      <span className="text-matrix">✓</span> Licensed & Trusted
                      Coverage
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-foreground hover:text-matrix transition-colors py-2 font-medium"
            >
              About Us
            </Link>

            <Link
              to="/connect"
              className="text-foreground hover:text-matrix transition-colors py-2 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              // Close services dropdown when toggling mobile menu
              if (!isOpen) {
                setIsServicesOpen(false);
              }
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-matrix/30">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block text-foreground hover:text-matrix transition-colors py-3 font-medium"
              onClick={handleMobileNavigation}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className="flex items-center justify-between w-full text-foreground hover:text-matrix transition-colors py-3 font-medium"
              >
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Services
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-6 mt-2 space-y-1 border-l border-matrix/30 pl-4">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-start text-foreground hover:text-matrix transition-colors py-3 text-sm group"
                        onClick={handleMobileNavigation}
                      >
                        <IconComponent className="w-4 h-4 mr-3 mt-0.5 text-matrix/70 group-hover:text-matrix transition-colors flex-shrink-0" />
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-muted-foreground group-hover:text-matrix/70 transition-colors mt-0.5">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="block text-foreground hover:text-matrix transition-colors py-3 font-medium"
              onClick={handleMobileNavigation}
            >
              About Us
            </Link>

            <Link
              to="/connect"
              className="block text-foreground hover:text-matrix transition-colors py-3 font-medium"
              onClick={handleMobileNavigation}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;