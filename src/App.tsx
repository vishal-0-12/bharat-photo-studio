import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Package from './components/Package';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Package />
        <Gallery />
        <Schedule />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;