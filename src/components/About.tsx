import {
  Award,
  ArrowUpRight,
  Camera,
  Heart,
  MapPin,
} from 'lucide-react';

import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useAnimations';

const highlights = [
  {
    icon: Camera,
    value: 500,
    suffix: '+',
    label: 'Weddings Covered',
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Customer Satisfaction',
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    icon: MapPin,
    value: 0,
    suffix: 'NCR',
    label: 'Delhi Coverage',
    textOnly: true,
  },
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="about-section">
      <div className="about-grain" />

      <div
        ref={ref}
        className={`about-container ${
          isVisible ? 'about-visible' : ''
        }`}
      >
        {/* =====================================================
            TOP
        ====================================================== */}

        <div className="about-top">

          <div className="about-eyebrow">
            <span>About the studio</span>
          </div>

          <div className="about-location">
            <span>Badhra</span>
            <span className="about-dot">•</span>
            <span>NCR Delhi</span>
          </div>

        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="about-main">

          {/* ===================================================
              IMAGE AREA
          ==================================================== */}

          <div className="about-image-column">

            {/* LARGE IMAGE */}

            <div className="about-image-wrap">

              <img
                src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Wedding couple portrait"
                className="about-image"
                loading="lazy"
              />

              <div className="about-image-overlay" />

              <div className="about-image-number">
                01
              </div>

              <div className="about-image-caption">
                <span>Behind the photographs</span>
                <span>BHARAT PHOTO STUDIO</span>
              </div>

            </div>

            {/* SECONDARY IMAGE */}

            <div className="about-secondary-image">

              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Wedding celebration"
                loading="lazy"
              />

              <div className="about-secondary-overlay" />

              <div className="about-secondary-label">
                <span>02</span>
                <span>Real moments</span>
              </div>

            </div>

            {/* DECORATIVE FRAMES */}

            <div className="about-frame about-frame-top" />
            <div className="about-frame about-frame-bottom" />

          </div>

          {/* ===================================================
              CONTENT
          ==================================================== */}

          <div className="about-content">

            <div className="about-small-heading">
              <span className="about-line" />
              <span>Our approach</span>
            </div>

            <h2 className="about-title">
              We capture
              <br />
              <em>what you felt.</em>
            </h2>

            <div className="about-divider">
              <span />
              <span>✦</span>
              <span />
            </div>

            <p className="about-lead">
              A wedding is more than a collection of photographs.
              It is laughter between two moments, a quiet glance,
              the hands of a parent, and the energy of everyone
              celebrating together.
            </p>

            <p className="about-text">
              At Bharat Digital Studio, we document those moments
              naturally and thoughtfully. From intimate ceremonies
              to grand celebrations, our approach combines
              candid photography, cinematic frames, and timeless
              storytelling.
            </p>

            <p className="about-text">
              Based in Badhra on Loharu Road, NCR Delhi, we bring
              an experienced team and a calm, professional presence
              to every celebration we photograph.
            </p>

            {/* CTA */}

            <a
              href="#gallery"
              className="about-link"
            >
              <span>Explore our stories</span>

              <span className="about-link-icon">
                <ArrowUpRight />
              </span>
            </a>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="about-stats">

              {highlights.map(
                ({
                  icon: Icon,
                  value,
                  suffix,
                  label,
                  textOnly,
                }) => {

                  const {
                    ref: counterRef,
                    value: counterValue,
                  } = useCounter(value);

                  return (
                    <div
                      key={label}
                      className="about-stat"
                    >
                      <Icon className="about-stat-icon" />

                      <div className="about-stat-value">

                        {textOnly ? (
                          <span ref={counterRef}>
                            {suffix}
                          </span>
                        ) : (
                          <span ref={counterRef}>
                            {counterValue}
                            {suffix}
                          </span>
                        )}

                      </div>

                      <div className="about-stat-label">
                        {label}
                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="about-bottom">

          <div className="about-bottom-line" />

          <div className="about-bottom-content">

            <p>
              We don't simply photograph weddings.
              <br />
              <em>We preserve the way they felt.</em>
            </p>

            <span>
              Since 2005
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}