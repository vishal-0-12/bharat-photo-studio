import {
  CalendarDays,
  Heart,
  Sparkles,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const events = [
  {
    date: '23',
    month: 'JANUARY',
    title: 'Ring Ceremony',
    desc: 'The beginning of forever — an intimate celebration where two families come together and two hearts make a promise.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/18706408/pexels-photo-18706408.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    date: '24',
    month: 'JANUARY',
    title: 'Haldi Ceremony',
    desc: 'A morning filled with colour, laughter and blessings — capturing the warmth and beautiful chaos of the Haldi celebrations.',
    icon: CalendarDays,
    image:
      'https://images.pexels.com/photos/18897190/pexels-photo-18897190.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    date: '24',
    month: 'JANUARY',
    title: 'Wedding Ceremony',
    desc: 'The moment everything comes together — sacred rituals, family traditions and the beginning of a new chapter.',
    icon: Heart,
    image:
      'https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Schedule() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="schedule" className="schedule-section">
      <div className="schedule-grain" />

      <div
        ref={ref}
        className={`schedule-inner reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* HEADER */}
        <div className="schedule-header">
          <span className="schedule-eyebrow">
            The Celebration
          </span>

          <div className="schedule-heading-row">
            <h2>
              Days worth
              <br />
              <em>remembering.</em>
            </h2>

            <div className="schedule-intro">
              <span className="schedule-line" />

              <p>
                Every celebration has its own rhythm.
                <br />
                Here is how this one unfolds.
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="schedule-timeline">
          {events.map((event, index) => {
            const Icon = event.icon;
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={`${event.title}-${index}`}
                className={`schedule-event ${
                  isReversed
                    ? 'schedule-event-reverse'
                    : ''
                }`}
              >
                {/* IMAGE */}
                <div className="schedule-image-wrap">
                  <div className="schedule-image">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                    />

                    <div className="schedule-image-overlay" />

                    <span className="schedule-image-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* CENTER TIMELINE MARKER */}
                <div className="schedule-marker">
                  <span />
                </div>

                {/* CONTENT */}
                <div className="schedule-content">
                  {/* DATE */}
                  <div className="schedule-date">
                    <span className="schedule-date-number">
                      {event.date}
                    </span>

                    <span className="schedule-date-month">
                      {event.month}
                    </span>
                  </div>

                  {/* ICON */}
                  <div className="schedule-icon">
                    <Icon />
                  </div>

                  {/* EVENT NUMBER */}
                  <span className="schedule-small-title">
                    Event{' '}
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* TITLE */}
                  <h3>{event.title}</h3>

                  {/* DESCRIPTION */}
                  <p>{event.desc}</p>

                  {/* GOLD LINE */}
                  <div className="schedule-rule" />
                </div>
              </article>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="schedule-footer">
          <div className="schedule-footer-line" />

          <p>
            Three celebrations.
            <br />
            <em>One unforgettable story.</em>
          </p>

          <div className="schedule-footer-line" />
        </div>
      </div>
    </section>
  );
}