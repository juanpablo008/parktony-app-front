import LandingHeader from './components/LandingHeader';
import Hero from './components/Hero';
import Features from './components/Features';
import MobileApp from './components/MobileApp';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <Hero />
      <Features />
      <MobileApp />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
