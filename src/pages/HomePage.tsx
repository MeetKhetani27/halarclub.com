import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import FeaturesSection from '../components/home/FeaturesSection';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <div className="space-y-20">
      <HeroSection />
      <AboutPreview />
      <FeaturesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;