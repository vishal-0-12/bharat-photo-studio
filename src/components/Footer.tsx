import {
  ArrowUp,
  ArrowUpRight,
  Camera,
  Heart,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const links = [
  { label: 'Home', href: '#/' },
  { label: 'Stories', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#/packages' },
  { label: 'Contact', href: '#/contact' },
];

const services = [
  'Wedding Photography',
  'Cinematic Videography',
  'Candid Photography',
  'Pre-Wedding Shoots',
  'Drone Coverage',
  'Photo Albums',
];

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* =====================================================
          TOP LINE
      ====================================================== */}

      <div className="footer-top-line" />

      <div className="footer-container">

        {/* =====================================================
            BRAND INTRO
        ====================================================== */}

        <div className="footer-intro">

          <div className="footer-brand-mark">

            <div className="footer-camera">
              <Camera />
            </div>

            <div>
              <span className="footer-brand-name">
                BHARAT
              </span>

              <span className="footer-brand-subtitle">
                Digital Studio
              </span>
            </div>

          </div>

          <div className="footer-statement">
            <p>
              Your story deserves
              <br />
              <em>to be remembered.</em>
            </p>
          </div>

          <div className="footer-year">
            <span>EST.</span>
            <strong>2005</strong>
          </div>

        </div>

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <div className="footer-grid">

          {/* ===================================================
              ABOUT THE STUDIO
          ==================================================== */}

          <div className="footer-column footer-about">

            <div className="footer-heading">
              <span>About the studio</span>
            </div>

            <p>
              Wedding photography and cinematic
              storytelling for celebrations that
              deserve to live beyond the day itself.
            </p>

            <div className="footer-love">
              <Heart />
              <span>Crafted with love</span>
            </div>

          </div>

          {/* ===================================================
              EXPLORE
          ==================================================== */}

          <div className="footer-column">

            <div className="footer-heading">
              <span>Explore</span>
            </div>

            <ul className="footer-links">

              {links.map((link, index) => (
                <li key={link.href}>

                  <a href={link.href}>

                    <span className="footer-link-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="footer-link-label">
                      {link.label}
                    </span>

                    <ArrowUpRight className="footer-link-arrow" />

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* ===================================================
              WHAT WE DO
          ==================================================== */}

          <div className="footer-column">

            <div className="footer-heading">
              <span>What we do</span>
            </div>

            <ul className="footer-service-list">

              {services.map((service, index) => (
                <li key={service}>

                  <span className="footer-service-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span>
                    {service}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* ===================================================
              GET IN TOUCH
          ==================================================== */}

          <div className="footer-column">

            <div className="footer-heading">
              <span>Get in touch</span>
            </div>

            <div className="footer-contact-list">

              {/* PHONE */}

              <a
                href="tel:9813220325"
                className="footer-contact"
              >
                <span className="footer-contact-icon">
                  <Phone />
                </span>

                <span>
                  <small>Call us</small>
                  <strong>9813220325</strong>
                </span>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:bharatstudio4@gmail.com"
                className="footer-contact"
              >
                <span className="footer-contact-icon">
                  <Mail />
                </span>

                <span>
                  <small>Email</small>
                  <strong>
                    bharatstudio591@gmail.com
                  </strong>
                </span>
              </a>

              {/* LOCATION */}

              <div className="footer-contact">

                <span className="footer-contact-icon">
                  <MapPin />
                </span>

                <span>
                  <small>Studio</small>
                  <strong>
                  Loharu Road Badhra, 
                    <br />
                    NCR Delhi
                  </strong>
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOOKING CTA
        ====================================================== */}

        <div className="footer-cta">

          <div className="footer-cta-content">

            <span className="footer-cta-label">
              Let's create something timeless
            </span>

            <h3>
              Planning your
              <em> wedding?</em>
            </h3>

          </div>

          <a
            href="#/contact"
            className="footer-cta-button"
          >
            <span>
              Get Ready and Book
            </span>

            <span className="footer-cta-icon">
              <ArrowUpRight />
            </span>
          </a>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="footer-bottom">

          <p>
            © 2026 Bharat Digital Studio.
            All rights reserved.
          </p>

          <div className="footer-bottom-center">
            <span>Weddings</span>
            <span>•</span>
            <span>Stories</span>
            <span>•</span>
            <span>Memories</span>
          </div>

          <a
            href="#/"
            className="footer-back-top"
          >
            <span>
              Back to top
            </span>

            <span className="footer-back-icon">
              <ArrowUp />
            </span>
          </a>

        </div>

        {/* =====================================================
            WEBSITE CREDIT
        ====================================================== */}

        <div className="footer-credit">

          <span>
            Made by
          </span>

          <span className="footer-credit-brand">
            YR IT Solutions
          </span>

          <span className="footer-credit-heart">
            ♥
          </span>

        </div>

      </div>
    </footer>
  );
}