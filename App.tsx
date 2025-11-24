import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemOutcome from './components/ProblemOutcome';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import FAQ from './components/FAQ';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  const scrollToIntake = () => {
    const element = document.getElementById('intake');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={handleBookClick} />
      
      <main>
        <Hero onBookClick={handleBookClick} onIntakeClick={scrollToIntake} />
        <ProblemOutcome />
        <Services />
        <Pricing onBookClick={handleBookClick} />
        <Testimonials />
        <HowItWorks />
        <About />
        <FAQ />
        <IntakeForm />
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default App;