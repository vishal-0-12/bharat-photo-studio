import {
  useState,
  type FormEvent,
  type ChangeEvent,
  type ReactNode,
} from 'react';

import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
  Calendar,
  Heart,
} from 'lucide-react';

import { supabase } from '../lib/supabase';
import { useReveal } from '../hooks/useReveal';

const eventTypes = [
  'Normal Package',
  'Medium Package',
  'Gold Package',
  'Candid Photography',
  'Pre-Wedding Shoot',
  'Other',
];

type ContactForm = {
  client_name: string;
  phone: string;
  email: string;
  event_type: string;
  event_date: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialForm: ContactForm = {
  client_name: '',
  phone: '',
  email: '',
  event_type: '',
  event_date: '',
  message: '',
};

const inputClass = 'contact-input';

export default function Contact() {
  const { ref, isVisible } = useReveal();

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMsg('');

    let formattedDate = 'Not provided';

    if (form.event_date) {
      const date = new Date(form.event_date);

      formattedDate = date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }

    const whatsappNumber = '917404620633';

    const whatsappMessage = `
📸 *NEW BOOKING REQUEST*

━━━━━━━━━━━━━━━━━━━━

👤 *Client Name*
${form.client_name}

📞 *Phone Number*
${form.phone}

📧 *Email*
${form.email || 'Not provided'}

📅 *Event Date*
${formattedDate}

💍 *Package / Service*
${form.event_type || 'Not selected'}

💬 *Message*
${form.message || 'No message provided'}

━━━━━━━━━━━━━━━━━━━━

📸 *Bharat Photo Studio*
Wedding Photography | Cinematic Videography
`.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');

    // Save enquiry to Supabase
    try {
      const { error } = await supabase
        .from('inquiries')
        .insert({
          client_name: form.client_name,
          phone: form.phone,
          email: form.email || null,
          event_type: form.event_type || null,
          event_date: form.event_date || null,
          message: form.message || null,
        });

      if (error) {
        console.error('Supabase booking error:', error);
      }

      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      console.error('Supabase connection error:', error);

      // WhatsApp has already opened,
      // so still show success to the customer.
      setStatus('success');
      setForm(initialForm);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Subtle background texture */}
      <div className="contact-grain" />

      <div
        ref={ref}
        className={`contact-container reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="contact-header">
          <span className="contact-eyebrow">
            Get in touch
          </span>

          <h2 className="contact-title">
            Let&apos;s plan something
            <br />
            <em>beautiful.</em>
          </h2>

          <p className="contact-intro">
            Tell us a little about your celebration.
            We&apos;ll take care of the rest.
          </p>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="contact-layout">

          {/* =======================================
              LEFT SIDE
          ======================================= */}

          <div className="contact-information">

            <div className="contact-number">
              04
            </div>

            <div className="contact-info-line" />

            <p className="contact-info-heading">
              Your story deserves
              <br />
              to be remembered.
            </p>

            <p className="contact-info-text">
              From the first conversation to the final
              photograph, we create a calm, thoughtful
              experience around your celebration.
            </p>

            {/* CONTACT DETAILS */}

            <div className="contact-details">

              {/* Phone */}

              <a
                href="tel:8740000983"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Phone />
                </span>

                <span>
                  <small>Call us</small>
                  <strong>8740000983</strong>
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:bharatstudio4@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Mail />
                </span>

                <span>
                  <small>Email</small>
                  <strong>
                    bharatstudio4@gmail.com
                  </strong>
                </span>
              </a>

              {/* Location */}

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin />
                </span>

                <span>
                  <small>Based in</small>
                  <strong>
                    Badhra, Loharu Road,
                    <br />
                    NCR Delhi
                  </strong>
                </span>
              </div>

            </div>

            <div className="contact-quote">
              <Heart />
              <span>
                Your happiness is our priority.
              </span>
            </div>
          </div>

          {/* =======================================
              RIGHT SIDE FORM
          ======================================= */}

          <div className="contact-form-wrapper">

            {status === 'success' ? (
              <div className="contact-success">

                <div className="success-icon">
                  <CheckCircle2 />
                </div>

                <span className="contact-eyebrow">
                  Request received
                </span>

                <h3>
                  Thank you.
                </h3>

                <p>
                  Your booking request has been received.
                  We&apos;ll contact you shortly to discuss
                  your celebration.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="contact-secondary-button"
                >
                  Send another request
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                <div className="form-heading">
                  <span>
                    Start a conversation
                  </span>

                  <p>
                    We&apos;d love to hear about your day.
                  </p>
                </div>

                {/* NAME + PHONE */}

                <div className="form-grid">

                  <Field
                    icon={<User />}
                    label="Your name"
                    required
                    focused={focused === 'client_name'}
                  >
                    <input
                      type="text"
                      name="client_name"
                      value={form.client_name}
                      onChange={handleChange}
                      onFocus={() =>
                        setFocused('client_name')
                      }
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </Field>

                  <Field
                    icon={<Phone />}
                    label="Phone number"
                    required
                    focused={focused === 'phone'}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() =>
                        setFocused('phone')
                      }
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </Field>

                </div>

                {/* EMAIL + DATE */}

                <div className="form-grid">

                  <Field
                    icon={<Mail />}
                    label="Email"
                    focused={focused === 'email'}
                  >
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() =>
                        setFocused('email')
                      }
                      onBlur={() => setFocused(null)}
                      placeholder="email@example.com"
                      className={inputClass}
                    />
                  </Field>

                  <Field
                    icon={<Calendar />}
                    label="Event date"
                    focused={focused === 'event_date'}
                  >
                    <input
                      type="date"
                      name="event_date"
                      value={form.event_date}
                      onChange={handleChange}
                      onFocus={() =>
                        setFocused('event_date')
                      }
                      onBlur={() => setFocused(null)}
                      className={`${inputClass} contact-date-input`}
                    />
                  </Field>

                </div>

                {/* PACKAGE */}

                <Field
                  icon={<Calendar />}
                  label="Package or service"
                  focused={focused === 'event_type'}
                >
                  <select
                    name="event_type"
                    value={form.event_type}
                    onChange={handleChange}
                    onFocus={() =>
                      setFocused('event_type')
                    }
                    onBlur={() => setFocused(null)}
                    className={inputClass}
                  >
                    <option value="">
                      Select a service
                    </option>

                    {eventTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* MESSAGE */}

                <Field
                  icon={<MessageSquare />}
                  label="Tell us about your day"
                  focused={focused === 'message'}
                >
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() =>
                      setFocused('message')
                    }
                    onBlur={() => setFocused(null)}
                    rows={5}
                    placeholder="Tell us about your wedding, location, guest count or anything you'd like us to know..."
                    className={`${inputClass} contact-textarea`}
                  />
                </Field>

                {/* ERROR */}

                {status === 'error' && (
                  <div className="contact-error">
                    <AlertCircle />
                    <p>{errorMsg}</p>
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="contact-submit"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="contact-spinner" />
                      Sending request...
                    </>
                  ) : (
                    <>
                      Send booking request
                      <Send />
                    </>
                  )}
                </button>

                <p className="form-note">
                  Your details are used only to contact
                  you regarding your photography enquiry.
                </p>

              </form>
            )}
          </div>
        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <div className="contact-bottom">
          <span>
            Weddings • Chandigarh • India
          </span>

          <span className="contact-bottom-line" />

          <span>
            Bharat Photo Studio
          </span>
        </div>

      </div>
    </section>
  );
}

// ============================================================
// FIELD COMPONENT
// ============================================================

type FieldProps = {
  icon: ReactNode;
  label: string;
  required?: boolean;
  focused: boolean;
  children: ReactNode;
};

function Field({
  icon,
  label,
  required = false,
  focused,
  children,
}: FieldProps) {
  return (
    <div
      className={`contact-field ${
        focused ? 'field-focused' : ''
      }`}
    >
      <label className="contact-label">
        <span className="contact-label-icon">
          {icon}
        </span>

        <span>
          {label}
        </span>

        {required && (
          <span className="required-mark">*</span>
        )}
      </label>

      {children}
    </div>
  );
}