import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import Carousel from '@/components/Carousel';
import EasyProcess from '@/components/EasyProcess';
import Favourite from '@/components/Favourite';
import Questions from '@/components/Questions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Carousel/>
      <ServicesSection />
      <EasyProcess />
      <Favourite />
      <TestimonialsSlider />
      <Questions />
      <Footer/>
    </div>
  );
};

export default Index;
