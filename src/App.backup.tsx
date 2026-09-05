import React from 'react';

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Package from './components/Package.tsx';
import Gallery from './components/Gallery.tsx';
import Schedule from './components/Schedule.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

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