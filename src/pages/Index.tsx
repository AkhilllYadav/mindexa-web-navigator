
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Teams from '../components/Teams';
import Testimonials from '../components/Testimonials';
import Awards from '../components/Awards';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Teams />
        <CaseStudies />
        <Testimonials />
        <Awards />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
