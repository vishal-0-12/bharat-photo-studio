import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Portfolio';
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
      {/* Navbar */}
      <Navbar
        navigate={navigate}
        scrollToSection={scrollToSection}
      />

      <main>
        {/* ========================================= */}
        {/* HOME PAGE */}
        {/* ========================================= */}

        {route === 'home' && (
          <>
            <Hero />

            <About />

            <Services />

            <Package
              navigate={navigate}
            />

            <Gallery />

            <Schedule />

            <Contact />
          </>
        )}

        {/* ========================================= */}
        {/* PACKAGES PAGE */}
        {/* ========================================= */}

        {route === 'packages' && (
          <Package
            navigate={navigate}
          />
        )}

        {/* ========================================= */}
        {/* CONTACT PAGE */}
        {/* ========================================= */}

        {route === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;