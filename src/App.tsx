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

  /*
   * Home uses cream background.
   * All separate pages use dark background.
   */
  const isHome = route === 'home';

  return (
    <div
      className={
        isHome
          ? 'min-h-screen bg-cream-50'
          : 'min-h-screen bg-[#171614]'
      }
    >
      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar
        navigate={navigate}
        scrollToSection={scrollToSection}
      />

      <main>

        {/* =========================================
            HOME PAGE
        ========================================= */}

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

        {/* =========================================
            SERVICES PAGE
        ========================================= */}

        {route === 'services' && (
          <Services />
        )}

        {/* =========================================
            PORTFOLIO PAGE
        ========================================= */}

        {route === 'portfolio' && (
          <Gallery />
        )}

        {/* =========================================
            PACKAGES PAGE
        ========================================= */}

        {route === 'packages' && (
          <Package
            navigate={navigate}
          />
        )}

        {/* =========================================
            CONTACT PAGE
        ========================================= */}

        {route === 'contact' && (
          <Contact />
        )}

      </main>

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />
    </div>
  );
}

export default App;