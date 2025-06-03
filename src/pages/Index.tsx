
import React from 'react';
import Header from '../components/Header';
import ModeToggle from '../components/ModeToggle';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Awards from '../components/Awards';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <ModeToggle />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <Awards />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
