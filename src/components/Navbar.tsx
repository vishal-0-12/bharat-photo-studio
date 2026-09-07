import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Stories', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
            ? 'border-b border-white/[0.08] bg-[#151513]/95 backdrop-blur-xl'
            : 'bg-transparent'
        }
      `}
    >
      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <nav
        className={`
          mx-auto
          flex
          max-w-[1500px]
          items-center
          justify-between
          px-6
          transition-all
          duration-500
          sm:px-10
          lg:px-14
          xl:px-20
          ${
            scrolled
              ? 'h-[76px]'
              : 'h-[92px]'
          }
        `}
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group relative z-[110] flex flex-col"
        >
          <span
            className="
              font-serif
              text-[21px]
              font-medium
              tracking-[0.22em]
              text-white
              transition-colors
              duration-500
              group-hover:text-[#d8b878]
              sm:text-[24px]
            "
          >
            BHARAT
          </span>

          <span
            className="
              mt-1
              text-[8px]
              font-medium
              uppercase
              tracking-[0.48em]
              text-[#d8b878]
              sm:text-[9px]
            "
          >
            Photo Studio
          </span>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <ul
          className="
            hidden
            items-center
            gap-9
            lg:flex
            xl:gap-11
          "
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  group
                  relative
                  block
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
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

        <a
          href="#contact"
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
          <span>Book a Date</span>

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
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </a>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
              ? 'pointer-events-auto visible opacity-100'
              : 'pointer-events-none invisible opacity-0'
          }
        `}
      >
        <div className="flex h-full flex-col px-6 pt-32 sm:px-10">
          {/* Small heading */}

          <div className="border-b border-white/10 pb-5">
            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-[#d8b878]
              "
            >
              Bharat Photo Studio
            </span>
          </div>

          {/* Navigation links */}

          <nav className="mt-8">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`
                    transition-all
                    duration-500
                    ${
                      menuOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-5 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
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
                    <span>{link.label}</span>

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
              ))}
            </ul>
          </nav>

          {/* Bottom booking area */}

          <div className="mt-auto pb-10">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
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
              <span>Book Your Date</span>

              <ArrowUpRight className="h-4 w-4" />
            </a>

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