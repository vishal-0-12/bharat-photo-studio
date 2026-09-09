import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CalendarDays, Menu, X } from 'lucide-react';

import type { Route } from '../hooks/useRouter';

type NavbarProps = {
  navigate: (route: Route) => void;
  scrollToSection: (
    sectionId: 'gallery' | 'services'
  ) => void;
};

export default function Navbar({
  navigate,
  scrollToSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*
   * Detect current page directly from the URL.
   * This makes sure Contact always gets the black navbar.
   */
  const [isContactPage, setIsContactPage] = useState(
    window.location.hash === '#/contact'
  );

  /* =========================================
     SCROLL
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================================
     ROUTE / HASH CHANGE
  ========================================= */

  useEffect(() => {
    const handleHashChange = () => {
      setIsContactPage(
        window.location.hash === '#/contact'
      );

      setIsMenuOpen(false);

      /*
       * Contact and Packages always open at top
       */
      if (
        window.location.hash === '#/contact' ||
        window.location.hash === '#/packages'
      ) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }
    };

    window.addEventListener(
      'hashchange',
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange
      );
    };
  }, []);

  /* =========================================
     HOME
  ========================================= */

  const handleHome = () => {
    setIsMenuOpen(false);

    navigate('home');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  /* =========================================
     STORIES
  ========================================= */

  const handleStories = () => {
    setIsMenuOpen(false);

    /*
     * Already on Home
     */
    if (
      window.location.hash === '' ||
      window.location.hash === '#/'
    ) {
      scrollToSection('gallery');
      return;
    }

    /*
     * Coming from Contact / Packages
     */
    navigate('home');

    setTimeout(() => {
      scrollToSection('gallery');
    }, 300);
  };

  /* =========================================
     SERVICES
  ========================================= */

  const handleServices = () => {
    setIsMenuOpen(false);

    /*
     * Already on Home
     */
    if (
      window.location.hash === '' ||
      window.location.hash === '#/'
    ) {
      scrollToSection('services');
      return;
    }

    /*
     * Coming from Contact / Packages
     */
    navigate('home');

    setTimeout(() => {
      scrollToSection('services');
    }, 300);
  };

  /* =========================================
     PACKAGES
  ========================================= */

  const handlePackages = () => {
    setIsMenuOpen(false);

    navigate('packages');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 100);
  };

  /* =========================================
     CONTACT
  ========================================= */

  const handleContact = () => {
    setIsMenuOpen(false);

    navigate('contact');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 100);
  };

  /* =========================================
     NAVBAR BACKGROUND
     
     THIS IS THE IMPORTANT PART.
  ========================================= */

  const navbarBackground = isContactPage
    ? 'bg-[#171614]'
    : isScrolled
      ? 'bg-[#171614]/95 backdrop-blur-md'
      : 'bg-transparent';

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[100]
          ${navbarBackground}
          transition-all
          duration-500
        `}
      >
        <div
          className={`
            mx-auto
            flex
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-12
            transition-all
            duration-500
            ${
              isScrolled
                ? 'h-[72px]'
                : 'h-[82px]'
            }
          `}
        >
          {/* =====================================
              LOGO
          ===================================== */}

          <button
            type="button"
            onClick={handleHome}
            aria-label="Bharat Photo Studio Home"
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                overflow-hidden
              "
            >
             <img
  src={`${import.meta.env.BASE_URL}bharatstudio.jpeg`}
  alt="Bharat Photo Studio"
  className="h-full w-full object-contain"
  onError={(e) => {
    console.error(
      'Navbar logo failed to load:',
      e.currentTarget.src
    );
  }}
/>
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="
                  font-serif
                  text-[17px]
                  tracking-[0.16em]
                  text-white
                "
              >
                BHARAT
              </span>

              <span
                className="
                  mt-1
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-[#d6b36a]
                "
              >
                PHOTO STUDIO
              </span>
            </div>
          </button>

          {/* =====================================
              DESKTOP NAVIGATION
          ===================================== */}

          <nav
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
          >
            {/* HOME */}

            <button
              type="button"
              onClick={handleHome}
              className="
                group
                relative
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              HOME

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#d6b36a]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>

            {/* STORIES */}

            <button
              type="button"
              onClick={handleStories}
              className="
                group
                relative
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              STORIES

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#d6b36a]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>

            {/* SERVICES */}

            <button
              type="button"
              onClick={handleServices}
              className="
                group
                relative
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              SERVICES

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#d6b36a]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>

            {/* PACKAGES */}

            <button
              type="button"
              onClick={handlePackages}
              className="
                group
                relative
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              PACKAGES

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#d6b36a]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>

            {/* CONTACT */}

            <button
              type="button"
              onClick={handleContact}
              className="
                group
                relative
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              CONTACT

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#d6b36a]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>
          </nav>

          {/* =====================================
              BOOK A DATE
          ===================================== */}

          <button
            type="button"
            onClick={handleContact}
            className="
              hidden
              items-center
              gap-3
              rounded-full
              bg-[#d6b36a]
              px-6
              py-3.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#171614]
              transition-all
              duration-300
              hover:bg-[#c5a158]
              lg:flex
            "
          >
            BOOK A DATE

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#171614]
                text-[#d6b36a]
              "
            >
              <ArrowUpRight
                className="h-3 w-3"
                strokeWidth={1.5}
              />
            </span>
          </button>

          {/* =====================================
              MOBILE MENU BUTTON
          ===================================== */}

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
            aria-label={
              isMenuOpen
                ? 'Close menu'
                : 'Open menu'
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/30
              text-white
              lg:hidden
            "
          >
            {isMenuOpen ? (
              <X
                className="h-5 w-5"
                strokeWidth={1.3}
              />
            ) : (
              <Menu
                className="h-5 w-5"
                strokeWidth={1.3}
              />
            )}
          </button>
        </div>
      </header>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <div
        className={`
          fixed
          inset-0
          z-[90]
          bg-[#171614]
          transition-all
          duration-500
          lg:hidden
          ${
            isMenuOpen
              ? 'visible opacity-100'
              : 'pointer-events-none invisible opacity-0'
          }
        `}
      >
        <div
          className="
            flex
            h-full
            flex-col
            px-6
            pb-8
            pt-28
            sm:px-10
          "
        >
          {/* MOBILE LOGO */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-3
              border-b
              border-white/10
              pb-7
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
              "
            >
             <img
  src={`${import.meta.env.BASE_URL}bharatstudio.jpeg`}
  alt="Bharat Photo Studio"
  className="h-full w-full object-contain"
  onError={(e) => {
    console.error(
      'Navbar logo failed to load:',
      e.currentTarget.src
    );
  }}
/>
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="
                  font-serif
                  text-lg
                  tracking-[0.16em]
                  text-white
                "
              >
                BHARAT
              </span>

              <span
                className="
                  mt-1
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-[#d6b36a]
                "
              >
                PHOTO STUDIO
              </span>
            </div>
          </div>

          {/* MOBILE LINKS */}

          <nav className="flex flex-col">
            <button
              type="button"
              onClick={handleHome}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                text-left
              "
            >
              <span className="font-serif text-2xl text-white">
                Home
              </span>

              <ArrowUpRight
                className="h-5 w-5 text-[#d6b36a]"
                strokeWidth={1.3}
              />
            </button>

            <button
              type="button"
              onClick={handleStories}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                text-left
              "
            >
              <span className="font-serif text-2xl text-white">
                Stories
              </span>

              <ArrowUpRight
                className="h-5 w-5 text-[#d6b36a]"
                strokeWidth={1.3}
              />
            </button>

            <button
              type="button"
              onClick={handleServices}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                text-left
              "
            >
              <span className="font-serif text-2xl text-white">
                Services
              </span>

              <ArrowUpRight
                className="h-5 w-5 text-[#d6b36a]"
                strokeWidth={1.3}
              />
            </button>

            <button
              type="button"
              onClick={handlePackages}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                text-left
              "
            >
              <span className="font-serif text-2xl text-white">
                Packages
              </span>

              <ArrowUpRight
                className="h-5 w-5 text-[#d6b36a]"
                strokeWidth={1.3}
              />
            </button>

            <button
              type="button"
              onClick={handleContact}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                text-left
              "
            >
              <span className="font-serif text-2xl text-white">
                Contact
              </span>

              <ArrowUpRight
                className="h-5 w-5 text-[#d6b36a]"
                strokeWidth={1.3}
              />
            </button>
          </nav>

          {/* MOBILE BOOK A DATE */}

          <button
            type="button"
            onClick={handleContact}
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#d6b36a]
              px-6
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#171614]
            "
          >
            <CalendarDays
              className="h-4 w-4"
              strokeWidth={1.3}
            />

            BOOK A DATE

            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.3}
            />
          </button>
        </div>
      </div>
    </>
  );
}