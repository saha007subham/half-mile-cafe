import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialSection from './components/TestimonialSection';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-text-dark font-poppins selection:bg-mint selection:text-text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialSection />
        <ReservationSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
