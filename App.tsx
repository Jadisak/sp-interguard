import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import SmartAssistant from './components/SmartAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
      <SmartAssistant />
    </div>
  );
};

export default App;