import React, { useState, useEffect } from "react";

const PartnersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const partners = [
    {
      id: 1,
      name: "PROGRESSIVE",
      image: "https://logo.clearbit.com/progressive.com?size=256",
      tagline: "Insurance solutions for needs",
    },
    {
      id: 2,
      name: "ALLSTATE",
      image: "https://logo.clearbit.com/allstate.com?size=256",
      tagline: "You're in good hands",
    },
    {
      id: 3,
      name: "GEICO",
      image: "https://logo.clearbit.com/geico.com?size=256",
      tagline: "15 minutes could save you 15% or more",
    },
    {
      id: 4,
      name: "STATE FARM",
      image: "https://logo.clearbit.com/statefarm.com?size=256",
      tagline: "Like a good neighbor",
    },
    {
      id: 5,
      name: "TRAVELERS",
      image: "https://logo.clearbit.com/travelers.com?size=256",
      tagline: "Insurance. Surety. Claims.",
    },
    {
      id: 6,
      name: "LIBERTY MUTUAL",
      image: "https://logo.clearbit.com/libertymutual.com?size=256",
      tagline: "Insurance for all you do",
    },
    {
      id: 7,
      name: "BIBERK",
      image: "https://logo.clearbit.com/biberk.com?size=256",
      tagline: "Small business insurance made simple",
    },
    {
      id: 8,
      name: "HISCOX",
      image: "https://logo.clearbit.com/hiscox.com?size=256",
      tagline: "Built for business",
    },
  ];

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Create slides based on screen size
  const slides = [];
  if (isMobile) {
    // Mobile: 1 partner per slide
    partners.forEach((partner) => {
      slides.push([partner]);
    });
  } else {
    // Desktop: 4 partners per slide
    for (let i = 0; i < partners.length; i += 4) {
      slides.push(partners.slice(i, i + 4));
    }
  }

  useEffect(() => {
    const timer = setInterval(
      () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      },
      isMobile ? 3000 : 4000
    ); // Faster on mobile
    return () => clearInterval(timer);
  }, [slides.length, isMobile]);

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We collaborate with industry leaders to bring you the best coverage
            options
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-xl bg-gray-800/50 shadow-2xl border border-gray-700">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div
                  className={`p-8 md:p-12 grid gap-6 ${
                    isMobile
                      ? "grid-cols-1 place-items-center"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {slide.map((partner) => (
                    <div
                      key={partner.id}
                      className={`flex flex-col items-center text-center bg-gray-900/70 rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-500/20 transition ${
                        isMobile ? "w-full max-w-sm" : ""
                      }`}
                    >
                      <div className="h-28 w-full flex items-center justify-center mb-4 p-4">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="max-h-16 max-w-full object-contain"
                        />
                      </div>
                      <h3
                        className="text-lg font-bold text-white mb-2"
                        style={{ color: "#00A1FC" }}
                      >
                        {partner.name}
                      </h3>
                      {partner.tagline && (
                        <p className="text-yellow-400 text-sm font-medium mb-2">
                          {partner.tagline}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 border border-gray-600 rounded-full p-3 shadow-md hover:bg-yellow-400 hover:text-black transition z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 border border-gray-600 rounded-full p-3 shadow-md hover:bg-yellow-400 hover:text-black transition z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Mobile Slide Counter */}
          {isMobile && (
            <div className="absolute top-4 right-4 bg-gray-800/80 px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          )}

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  index === currentSlide ? "bg-yellow-400" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots Alternative */}
        {isMobile && (
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-8 rounded-full transition ${
                  index === currentSlide ? "bg-yellow-400" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersCarousel;
