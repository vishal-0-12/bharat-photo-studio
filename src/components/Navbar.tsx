import {
  useEffect,
  useState,
  type MouseEvent,
} from 'react';

import {
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';

import type { Route } from '../hooks/useRouter';

type NavbarProps = {
  navigate: (route: Route) => void;
  scrollToSection: (
    sectionId: 'gallery' | 'services'
  ) => void;
};

const navLinks = [
  {
    label: 'Home',
    type: 'home',
  },
  {
    label: 'Stories',
    type: 'gallery',
  },
  {
    label: 'Services',
    type: 'services',
  },
  {
    label: 'Packages',
    type: 'packages',
  },
  {
    label: 'Contact',
    type: 'contact',
  },
] as const;

type NavType =
  (typeof navLinks)[number]['type'];

export default function Navbar({
  navigate,
  scrollToSection,
}: NavbarProps) {
  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  // =========================================================
  // NAVBAR SCROLL EFFECT
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  // =========================================================
  // PREVENT BACKGROUND SCROLL
  // WHEN MOBILE MENU IS OPEN
  // =========================================================

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // =========================================================
  // CHECK CURRENT ROUTE
  // =========================================================

  const isSeparatePage = () => {
    const hash = window.location.hash;

    return (
      hash === '#/packages' ||
      hash === '#/contact'
    );
  };

  // =========================================================
  // RETURN HOME THEN SCROLL
  // =========================================================

  const goHomeAndScroll = (
    sectionId: 'gallery' | 'services'
  ) => {
    navigate('home');

    /*
      Wait for App to render the Home page.
    */
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 200);
  };

  // =========================================================
  // NAVIGATION
  // =========================================================

  const handleNavigation = (
    type: NavType
  ) => {
    // Close mobile menu
    setMenuOpen(false);

    // -------------------------------------------------------
    // HOME
    // -------------------------------------------------------

    if (type === 'home') {
      if (isSeparatePage()) {
        navigate('home');

        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }, 150);

        return;
      }

      /*
        Already on Home.
      */

      window.history.replaceState(
        null,
        '',
        '#/'
      );

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    // -------------------------------------------------------
    // STORIES
    // -------------------------------------------------------

    if (type === 'gallery') {
      if (isSeparatePage()) {
        goHomeAndScroll('gallery');
        return;
      }

      scrollToSection('gallery');

      return;
    }

    // -------------------------------------------------------
    // SERVICES
    // -------------------------------------------------------

    if (type === 'services') {
      if (isSeparatePage()) {
        goHomeAndScroll('services');
        return;
      }

      scrollToSection('services');

      return;
    }

    // -------------------------------------------------------
    // PACKAGES
    // -------------------------------------------------------

    if (type === 'packages') {
      navigate('packages');

      return;
    }

    // -------------------------------------------------------
    // CONTACT
    // -------------------------------------------------------

    if (type === 'contact') {
      navigate('contact');

      return;
    }
  };

  // =========================================================
  // LOGO CLICK
  // =========================================================

  const handleLogoClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    handleNavigation('home');
  };

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-[100]
        transition-all
        duration-500
        ease-out

        ${
          scrolled
            ? `
              border-b
              border-white/[0.08]
              bg-[#151513]/95
              backdrop-blur-xl
            `
            : `
              bg-transparent
            `
        }
      `}
    >

      {/* =====================================================
          NAVIGATION BAR
      ====================================================== */}

      <nav
        className={`
          mx-auto
          flex
          max-w-[1500px]
          items-center
          justify-between
          px-5
          transition-all
          duration-500
          sm:px-8
          lg:px-12
          xl:px-16

          ${
            scrolled
              ? 'h-[76px]'
              : 'h-[92px]'
          }
        `}
      >

        {/* =================================================
            BRAND / LOGO + COMPANY NAME
        ================================================== */}

        <a
          href="#/"
          onClick={handleLogoClick}
          aria-label="Bharat Photo Studio - Home"
          className="
            group
            relative
            z-[110]
            flex
            items-center
            gap-3
            sm:gap-4
          "
        >

          {/* -------------------------------------------------
              LOGO IMAGE
          -------------------------------------------------- */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              sm:h-12
              sm:w-12
            "
          >
            <img
              src="/bharatstudio.jpeg"
              alt="Bharat Photo Studio logo"
              className="
                h-full
                w-full
                object-contain
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* -------------------------------------------------
              COMPANY NAME
          -------------------------------------------------- */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >
            <span
              className="
                font-serif
                text-[19px]
                font-medium
                leading-none
                tracking-[0.20em]
                text-white
                transition-colors
                duration-500
                group-hover:text-[#d8b878]
                sm:text-[23px]
              "
            >
              BHARAT
            </span>

            <span
              className="
                mt-1.5
                text-[7px]
                font-medium
                uppercase
                leading-none
                tracking-[0.42em]
                text-[#d8b878]
                sm:text-[9px]
              "
            >
              Photo Studio
            </span>
          </div>

        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <ul
          className="
            hidden
            items-center
            gap-8
            lg:flex
            xl:gap-11
          "
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();

                  handleNavigation(
                    link.type
                  );
                }}
                className="
                  group
                  relative
                  block
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.30em]
                  text-white/70
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}

                {/* Gold underline */}

                <span
                  className="
                    absolute
                    bottom-1
                    left-0
                    h-px
                    w-0
                    bg-[#d8b878]
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* =================================================
            DESKTOP BOOK BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() =>
            handleNavigation('contact')
          }
          className="
            group
            hidden
            items-center
            gap-3
            rounded-full
            border
            border-[#d8b878]/50
            bg-[#d8b878]
            px-5
            py-2.5
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#171614]
            transition-all
            duration-500
            hover:bg-[#ead39a]
            lg:flex
          "
        >
          <span>
            Book a Date
          </span>

          <span
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-[#171614]
              text-white
              transition-transform
              duration-500
              group-hover:rotate-45
            "
          >
            <ArrowUpRight
              className="h-3 w-3"
            />
          </span>
        </button>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen(
              (previous) => !previous
            )
          }
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          className="
            relative
            z-[110]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/[0.06]
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#d8b878]/60
            hover:text-[#d8b878]
            lg:hidden
          "
        >
          {menuOpen ? (
            <X className="h-[18px] w-[18px]" />
          ) : (
            <Menu className="h-[18px] w-[18px]" />
          )}
        </button>

      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[90]
          bg-[#11110f]
          transition-all
          duration-500
          lg:hidden

          ${
            menuOpen
              ? `
                pointer-events-auto
                visible
                opacity-100
              `
              : `
                pointer-events-none
                invisible
                opacity-0
              `
          }
        `}
      >

        <div
          className="
            flex
            h-full
            flex-col
            px-6
            pt-28
            sm:px-10
            sm:pt-32
          "
        >

          {/* =================================================
              MOBILE BRAND
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-3
              border-b
              border-white/10
              pb-5
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
              "
            >
              <img
                src="/logo.png"
                alt="Bharat Photo Studio logo"
                className="
                  h-full
                  w-full
                  object-contain
                "
              />
            </div>

            <div className="flex flex-col">

              <span
                className="
                  font-serif
                  text-[19px]
                  font-medium
                  leading-none
                  tracking-[0.20em]
                  text-white
                "
              >
                BHARAT
              </span>

              <span
                className="
                  mt-1.5
                  text-[7px]
                  font-medium
                  uppercase
                  leading-none
                  tracking-[0.42em]
                  text-[#d8b878]
                "
              >
                Photo Studio
              </span>

            </div>

          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================== */}

          <nav className="mt-8">
            <ul className="space-y-1">

              {navLinks.map(
                (link, index) => (
                  <li
                    key={link.label}
                    className={`
                      transition-all
                      duration-500

                      ${
                        menuOpen
                          ? `
                            translate-y-0
                            opacity-100
                          `
                          : `
                            translate-y-5
                            opacity-0
                          `
                      }
                    `}
                    style={{
                      transitionDelay:
                        `${index * 70}ms`,
                    }}
                  >

                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();

                        handleNavigation(
                          link.type
                        );
                      }}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/[0.07]
                        py-5
                        text-2xl
                        font-light
                        text-white
                        transition-colors
                        duration-300
                        hover:text-[#d8b878]
                        sm:text-3xl
                      "
                    >

                      <span>
                        {link.label}
                      </span>

                      <ArrowUpRight
                        className="
                          h-5
                          w-5
                          text-[#d8b878]
                          opacity-40
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:opacity-100
                        "
                      />

                    </a>

                  </li>
                )
              )}

            </ul>
          </nav>

          {/* =================================================
              MOBILE BOOKING AREA
          ================================================== */}

          <div className="mt-auto pb-10">

            <button
              type="button"
              onClick={() =>
                handleNavigation('contact')
              }
              className="
                flex
                w-full
                items-center
                justify-between
                border
                border-[#d8b878]/40
                bg-[#d8b878]
                px-5
                py-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#171614]
                transition-all
                duration-300
                hover:bg-[#ead39a]
              "
            >
              <span>
                Book Your Date
              </span>

              <ArrowUpRight
                className="h-4 w-4"
              />
            </button>

            <p
              className="
                mt-5
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Weddings • Stories • Memories
            </p>

          </div>

        </div>
      </div>
    </header>
  );
}