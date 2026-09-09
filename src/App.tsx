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

import { useRouter } from './hooks/useRouter';

function App() {
  const {
    route,
    navigate,
    scrollToSection,
  } = useRouter();

  return (
    <div
      className={
        route === 'home'
          ? 'min-h-screen bg-cream-50'
          : 'min-h-screen bg-[#171614]'
      }
    >
      {/* IMPORTANT:
          Pass router functions to Navbar
      */}
      <Navbar
        navigate={navigate}
        scrollToSection={scrollToSection}
      />

      <main>
        {/* HOME */}
        {route === 'home' && (
          <>
            <Hero />
            <About />
            <Services />
            <Package />
            <Gallery />
            <Schedule />
            <Contact />
          </>
        )}

        {/* PACKAGES PAGE */}
        {route === 'packages' && (
          <Package />
        )}

        {/* CONTACT PAGE */}
        {route === 'contact' && (
          <Contact />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;