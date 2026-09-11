import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react';

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

  /* =========================================
     CURRENT ROUTE
  ========================================= */

  const getCurrentRoute = (): Route => {
    const hash = window.location.hash;

    if (hash === '#/services') {
      return 'services';
    }

    if (hash === '#/portfolio') {
      return 'portfolio';
    }

    if (hash === '#/packages') {
      return 'packages';
    }

    if (hash === '#/contact') {
      return 'contact';
    }

    return 'home';
  };

  const [currentRoute, setCurrentRoute] =
    useState<Route>(getCurrentRoute);

  /* =========================================
     SOCIAL LINKS
  ========================================= */

  const INSTAGRAM_URL =
    'https://www.instagram.com/bharat_digitalstudio/';

  const FACEBOOK_URL =
    'https://www.facebook.com/profile.php?id=61594215032715';

  /* =========================================
     WHATSAPP + PHONE
  ========================================= */

  const WHATSAPP_URL =
    'https://wa.me/918740000983?text=Hello%20Bharat%20Photo%20Studio%2C%20I%20would%20like%20to%20know%20more%20about%20your%20photography%20services.';

  const PHONE_NUMBER =
    'tel:+918740000983';

  /* =========================================
     SCROLL DETECTION
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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

  /* =========================================
     ROUTE / HASH CHANGE
  ========================================= */

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getCurrentRoute();

      setCurrentRoute(newRoute);
      setIsMenuOpen(false);

      /*
       * Separate pages open from top.
       */
      if (newRoute !== 'home') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }

      /*
       * Home opens from top.
       */
      if (
        newRoute === 'home' &&
        window.location.hash === '#/'
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
     SERVICES
  ========================================= */

  const handleServices = () => {
    setIsMenuOpen(false);

    navigate('services');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 100);
  };

  /* =========================================
     PORTFOLIO
  ========================================= */

  const handlePortfolio = () => {
    setIsMenuOpen(false);

    navigate('portfolio');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 100);
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
  ========================================= */

  const isHomePage =
    currentRoute === 'home';

  const navbarBackground = !isHomePage
    ? 'bg-[#171614]'
    : isScrolled
      ? 'bg-[#171614]/95 backdrop-blur-md'
      : 'bg-transparent';

  return (
    <>
      {/* =========================================
          MAIN NAVBAR
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
            gap-4
            px-5
            sm:px-8
            lg:px-10
            xl:px-12
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
              shrink-0
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
                className="
                  h-full
                  w-full
                  object-contain
                "
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
              gap-5
              lg:flex
              xl:gap-7
            "
          >
            {/* HOME */}

            <button
              type="button"
              onClick={handleHome}
              className="
                group
                relative
                whitespace-nowrap
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
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

            {/* SERVICES */}

            <button
              type="button"
              onClick={handleServices}
              className="
                group
                relative
                whitespace-nowrap
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
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

            {/* PORTFOLIO */}

            <button
              type="button"
              onClick={handlePortfolio}
              className="
                group
                relative
                whitespace-nowrap
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              PORTFOLIO

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
                whitespace-nowrap
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
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
                whitespace-nowrap
                py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
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
              DESKTOP ACTIONS
          ===================================== */}

          <div
            className="
              hidden
              items-center
              gap-2
              lg:flex
            "
          >
            {/* =================================
                INSTAGRAM
            ================================= */}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                group
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white
                transition-all
                duration-300
                hover:border-[#E1306C]
                hover:bg-[#E1306C]/5
                hover:text-[#E1306C]
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  h-[17px]
                  w-[17px]
                "
                fill="none"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* =================================
                FACEBOOK
            ================================= */}

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                group
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white
                transition-all
                duration-300
                hover:border-[#1877F2]
                hover:bg-[#1877F2]/5
                hover:text-[#1877F2]
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  h-[17px]
                  w-[17px]
                "
                fill="currentColor"
              >
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.66.34-1 1-1Z" />
              </svg>
            </a>

            {/* =================================
                CHAT WITH US
            ================================= */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="
                group
                flex
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                px-4
                py-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                duration-300
                hover:border-[#d6b36a]
                hover:bg-[#d6b36a]/10
                hover:text-[#d6b36a]
              "
            >
              <MessageCircle
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                strokeWidth={1.5}
              />

              CHAT WITH US
            </a>

            {/* =================================
                CALL NOW
            ================================= */}

            <a
              href={PHONE_NUMBER}
              aria-label="Call Bharat Photo Studio"
              className="
                group
                flex
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                px-4
                py-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                duration-300
                hover:border-[#d6b36a]
                hover:bg-[#d6b36a]/10
                hover:text-[#d6b36a]
              "
            >
              <Phone
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:rotate-[-8deg]
                "
                strokeWidth={1.5}
              />

              CALL NOW
            </a>

            {/* =================================
                BOOK A DATE
            ================================= */}

            <button
              type="button"
              onClick={handleContact}
              className="
                group
                flex
                shrink-0
                items-center
                gap-2.5
                rounded-full
                bg-[#d6b36a]
                px-5
                py-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#171614]
                transition-all
                duration-300
                hover:bg-[#c5a158]
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
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              >
                <ArrowUpRight
                  className="h-3 w-3"
                  strokeWidth={1.5}
                />
              </span>
            </button>
          </div>

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
              shrink-0
              items-center
              justify-center
              border
              border-white/30
              text-white
              transition-all
              duration-300
              hover:border-[#d6b36a]
              hover:text-[#d6b36a]
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
            overflow-y-auto
            px-6
            pb-8
            pt-28
            sm:px-10
          "
        >
          {/* =====================================
              MOBILE LOGO
          ===================================== */}

          <div
            className="
              mb-7
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
                className="
                  h-full
                  w-full
                  object-contain
                "
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

          {/* =====================================
              MOBILE LINKS
          ===================================== */}

          <nav className="flex flex-col">

            {/* HOME */}

            <button
              type="button"
              onClick={handleHome}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-4
                text-left
              "
            >
              <span
                className="
                  font-serif
                  text-2xl
                  text-white
                "
              >
                Home
              </span>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-[#d6b36a]
                "
                strokeWidth={1.3}
              />
            </button>

            {/* SERVICES */}

            <button
              type="button"
              onClick={handleServices}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-4
                text-left
              "
            >
              <span
                className="
                  font-serif
                  text-2xl
                  text-white
                "
              >
                Services
              </span>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-[#d6b36a]
                "
                strokeWidth={1.3}
              />
            </button>

            {/* PORTFOLIO */}

            <button
              type="button"
              onClick={handlePortfolio}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-4
                text-left
              "
            >
              <span
                className="
                  font-serif
                  text-2xl
                  text-white
                "
              >
                Portfolio
              </span>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-[#d6b36a]
                "
                strokeWidth={1.3}
              />
            </button>

            {/* PACKAGES */}

            <button
              type="button"
              onClick={handlePackages}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-4
                text-left
              "
            >
              <span
                className="
                  font-serif
                  text-2xl
                  text-white
                "
              >
                Packages
              </span>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-[#d6b36a]
                "
                strokeWidth={1.3}
              />
            </button>

            {/* CONTACT */}

            <button
              type="button"
              onClick={handleContact}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-4
                text-left
              "
            >
              <span
                className="
                  font-serif
                  text-2xl
                  text-white
                "
              >
                Contact
              </span>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-[#d6b36a]
                "
                strokeWidth={1.3}
              />
            </button>

          </nav>

          {/* =====================================
              MOBILE CHAT WITH US
          ===================================== */}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="
              mt-7
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/20
              px-6
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              transition-all
              duration-300
              hover:border-[#d6b36a]
              hover:bg-[#d6b36a]/10
              hover:text-[#d6b36a]
            "
          >
            <MessageCircle
              className="h-4 w-4"
              strokeWidth={1.5}
            />

            CHAT WITH US

            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.3}
            />
          </a>

          {/* =====================================
              MOBILE CALL NOW
          ===================================== */}

          <a
            href={PHONE_NUMBER}
            aria-label="Call Bharat Photo Studio"
            className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/20
              px-6
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              transition-all
              duration-300
              hover:border-[#d6b36a]
              hover:bg-[#d6b36a]/10
              hover:text-[#d6b36a]
            "
          >
            <Phone
              className="h-4 w-4"
              strokeWidth={1.5}
            />

            CALL NOW

            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.3}
            />
          </a>

          {/* =====================================
              MOBILE BOOK A DATE
          ===================================== */}

          <button
            type="button"
            onClick={handleContact}
            className="
              mt-3
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
              transition-all
              duration-300
              hover:bg-[#c5a158]
            "
          >
            <CalendarDays
              className="
                h-4
                w-4
              "
              strokeWidth={1.3}
            />

            BOOK A DATE

            <ArrowUpRight
              className="
                h-4
                w-4
              "
              strokeWidth={1.3}
            />
          </button>

          {/* =====================================
              MOBILE SOCIAL LINKS
          ===================================== */}

          <div
            className="
              mt-auto
              flex
              items-center
              gap-3
              pt-8
            "
          >
            {/* =================================
                MOBILE INSTAGRAM
            ================================= */}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white
                transition-all
                duration-300
                hover:border-[#E1306C]
                hover:bg-[#E1306C]/5
                hover:text-[#E1306C]
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  h-5
                  w-5
                "
                fill="none"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* =================================
                MOBILE FACEBOOK
            ================================= */}

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white
                transition-all
                duration-300
                hover:border-[#1877F2]
                hover:bg-[#1877F2]/5
                hover:text-[#1877F2]
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  h-5
                  w-5
                "
                fill="currentColor"
              >
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.66.34-1 1-1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}