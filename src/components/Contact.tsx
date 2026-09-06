import {
  useState,
  type FormEvent,
  type ChangeEvent,
  type ReactNode,
} from 'react';

import {
  AlertCircle,
  CheckCircle2,
  Loader2,
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
import ParticleField from '../components/ParticleField';

// ============================================================
// EVENT TYPES
// ============================================================

const eventTypes = [
  'Normal Package',
  'Medium Package',
  'Gold Package',
  'Candid Photography',
  'Pre-Wedding Shoot',
  'Other',
];

// ============================================================
// FORM TYPE
// ============================================================

type ContactForm = {
  client_name: string;
  phone: string;
  email: string;
  event_type: string;
  event_date: string;
  message: string;
};

// ============================================================
// STATUS TYPE
// ============================================================

type Status = 'idle' | 'loading' | 'success' | 'error';

// ============================================================
// INITIAL FORM
// ============================================================

const initialForm: ContactForm = {
  client_name: '',
  phone: '',
  email: '',
  event_type: '',
  event_date: '',
  message: '',
};

// ============================================================
// INPUT CLASS
// ============================================================

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-gold-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/20';

// ============================================================
// CONTACT COMPONENT
// ============================================================

export default function Contact() {
  const { ref, isVisible } = useReveal();

  const [form, setForm] = useState<ContactForm>(initialForm);

  const [status, setStatus] = useState<Status>('idle');

  const [errorMsg, setErrorMsg] = useState<string>('');

  const [focused, setFocused] = useState<string | null>(null);

  // ============================================================
  // HANDLE INPUT CHANGE
  // ============================================================

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

  // ============================================================
  // HANDLE FORM SUBMIT
  // ============================================================

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMsg('');

    // ============================================================
    // FORMAT EVENT DATE
    // ============================================================

    let formattedDate = 'Not provided';

    if (form.event_date) {
      const date = new Date(form.event_date);

      formattedDate = date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }

    // ============================================================
    // WHATSAPP NUMBER
    // ============================================================

    const whatsappNumber = '917404620633';

    // ============================================================
    // CREATE WHATSAPP MESSAGE
    // ============================================================

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

    // ============================================================
    // ENCODE WHATSAPP MESSAGE
    // ============================================================

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // ============================================================
    // CREATE WHATSAPP URL
    // ============================================================

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // ============================================================
    // OPEN WHATSAPP
    // ============================================================

    window.open(
      whatsappURL,
      '_blank',
      'noopener,noreferrer'
    );

    // ============================================================
    // SAVE BOOKING TO SUPABASE
    // ============================================================

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

      // ==========================================================
      // SUPABASE ERROR
      // ==========================================================

      if (error) {
        console.error(
          'Supabase booking error:',
          error
        );

        // WhatsApp is already opened.
        // We don't stop the booking because of Supabase.
      }

      // ============================================================
      // SUCCESS
      // ============================================================

      setStatus('success');

      // ============================================================
      // RESET FORM
      // ============================================================

      setForm(initialForm);

    } catch (error) {
      // ============================================================
      // SUPABASE ERROR HANDLING
      // ============================================================

      console.error(
        'Supabase connection error:',
        error
      );

      // ============================================================
      // WHATSAPP HAS ALREADY OPENED
      // SO SHOW SUCCESS TO THE CUSTOMER
      // ============================================================

      setStatus('success');

      setForm(initialForm);
    }
  };

  // ============================================================
  // RETURN
  // ============================================================

  return (
    <section
      id="contact"
      className="
        section-pad
        relative
        overflow-hidden
        bg-gradient-to-b
        from-charcoal-950
        via-charcoal-900
        to-charcoal-950
      "
    >

      {/* ========================================================
          AMBIENT GLOWS
      ======================================================== */}

      <div className="absolute inset-0 opacity-10">

        <div
          className="
            absolute
            -left-20
            top-20
            h-80
            w-80
            rounded-full
            bg-gold-500
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-20
            bottom-20
            h-80
            w-80
            rounded-full
            bg-maroon-600
            blur-[100px]
          "
        />

      </div>

      {/* ========================================================
          PARTICLES
      ======================================================== */}

      <ParticleField
        count={25}
        color="212,168,74"
      />

      {/* ========================================================
          MAIN CONTAINER
      ======================================================== */}

      <div
        ref={ref}
        className={`
          relative
          mx-auto
          max-w-6xl
          reveal
          ${isVisible ? 'is-visible' : ''}
        `}
      >

        {/* ======================================================
            HEADING
        ====================================================== */}

        <div className="mb-12 text-center">

          <span
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-gold-400
            "
          >
            Get in Touch
          </span>

          <h2
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Book Your Date
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-white/60
            "
          >
            Tell us about your celebration and our team
            will get back to you soon.
          </p>

          {/* Decorative Line */}

          <div
            className="
              mx-auto
              mt-5
              flex
              items-center
              justify-center
              gap-3
            "
          >

            <span
              className="
                h-px
                w-16
                bg-gradient-to-r
                from-transparent
                to-gold-500/60
              "
            />

            <span className="text-gold-400">
              ✦
            </span>

            <span
              className="
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-gold-500/60
              "
            />

          </div>

        </div>

        {/* ======================================================
            CONTENT GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >

          {/* ====================================================
              LEFT CONTACT INFORMATION
          ==================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-gold-500/20
              bg-gradient-to-br
              from-charcoal-800/80
              to-charcoal-900/80
              p-8
              backdrop-blur-sm
            "
          >

            {/* Top Line */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
                from-gold-400
                to-gold-600
                opacity-60
              "
            />

            {/* Glow */}

            <div
              className="
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-gold-500/10
                blur-2xl
              "
            />

            {/* Studio Name */}

            <h3
              className="
                font-serif
                text-2xl
                font-bold
                text-white
              "
            >
              Bharat Photo Studio
            </h3>

            {/* Description */}

            <p
              className="
                mt-3
                text-sm
                leading-relaxed
                text-white/60
              "
            >
              Wedding Photography | Cinematic Videography |
              Candid Shoot | Pre-Wedding | Drone Coverage |
              Photo Album
            </p>

            {/* Contact Details */}

            <div className="mt-8 space-y-5">

              {/* Phone */}

              <a
                href="tel:8740000983"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-white/75
                  transition-all
                  hover:translate-x-1
                  hover:text-gold-300
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gold-500/15
                    text-gold-400
                    transition-all
                    group-hover:scale-110
                    group-hover:bg-gold-500/25
                  "
                >
                  <Phone className="h-5 w-5" />
                </span>

                <span>

                  <strong
                    className="
                      block
                      text-xs
                      uppercase
                      tracking-wider
                      text-gold-400
                    "
                  >
                    Call Us
                  </strong>

                  8740000983

                </span>

              </a>

              {/* Email */}

              <a
                href="mailto:bharatstudio4@gmail.com"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-white/75
                  transition-all
                  hover:translate-x-1
                  hover:text-gold-300
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gold-500/15
                    text-gold-400
                    transition-all
                    group-hover:scale-110
                    group-hover:bg-gold-500/25
                  "
                >
                  <Mail className="h-5 w-5" />
                </span>

                <span>

                  <strong
                    className="
                      block
                      text-xs
                      uppercase
                      tracking-wider
                      text-gold-400
                    "
                  >
                    Email
                  </strong>

                  bharatstudio4@gmail.com

                </span>

              </a>

              {/* Location */}

              <div
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-white/75
                  transition-all
                  hover:translate-x-1
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gold-500/15
                    text-gold-400
                    transition-all
                    group-hover:scale-110
                    group-hover:bg-gold-500/25
                  "
                >
                  <MapPin className="h-5 w-5" />
                </span>

                <span>

                  <strong
                    className="
                      block
                      text-xs
                      uppercase
                      tracking-wider
                      text-gold-400
                    "
                  >
                    Location
                  </strong>

                  Badhra, Loharu Road, NCR Delhi

                </span>

              </div>

            </div>

            {/* Happiness Box */}

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-gold-500/20
                bg-gradient-to-br
                from-gold-500/10
                to-maroon-500/10
                p-5
              "
            >

              <Heart className="mb-2 h-5 w-5 text-gold-400" />

              <p
                className="
                  font-serif
                  text-lg
                  italic
                  text-gold-300
                "
              >
                Your happiness is our priority.
              </p>

            </div>

          </div>

          {/* ====================================================
              RIGHT FORM
          ==================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-gold-500/20
              bg-gradient-to-br
              from-charcoal-800/60
              to-charcoal-900/60
              p-6
              backdrop-blur-sm
              sm:p-10
            "
          >

            {/* Top Border */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
                from-maroon-400
                via-gold-400
                to-maroon-400
                opacity-60
              "
            />

            {/* Glow */}

            <div
              className="
                absolute
                -bottom-10
                -left-10
                h-32
                w-32
                rounded-full
                bg-maroon-500/10
                blur-2xl
              "
            />

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {status === 'success' ? (

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  py-16
                  text-center
                  animate-scale-in
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-gold-400
                    to-gold-600
                    text-white
                    shadow-2xl
                    shadow-gold-900/40
                    glow-pulse
                  "
                >

                  <CheckCircle2 className="h-10 w-10" />

                </div>

                <h3
                  className="
                    font-serif
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Thank You!
                </h3>

                <p
                  className="
                    mt-2
                    max-w-md
                    text-sm
                    text-white/70
                  "
                >
                  Your booking request has been received.
                  We will contact you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="
                    mt-6
                    rounded-full
                    border
                    border-gold-500/30
                    bg-white/5
                    px-6
                    py-2.5
                    text-sm
                    font-semibold
                    text-gold-300
                    transition-all
                    hover:scale-105
                    hover:bg-white/10
                  "
                >
                  Send New Request
                </button>

              </div>

            ) : (

              /* =================================================
                 FORM
              ================================================= */

              <form
                onSubmit={handleSubmit}
                className="relative space-y-5"
              >

                {/* =================================================
                    NAME + PHONE
                ================================================= */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                  "
                >

                  {/* NAME */}

                  <Field
                    icon={<User className="h-4 w-4" />}
                    label="Name"
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
                      onBlur={() =>
                        setFocused(null)
                      }
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />

                  </Field>

                  {/* PHONE */}

                  <Field
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone Number"
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
                      onBlur={() =>
                        setFocused(null)
                      }
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />

                  </Field>

                  {/* EMAIL */}

                  <Field
                    icon={<Mail className="h-4 w-4" />}
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
                      onBlur={() =>
                        setFocused(null)
                      }
                      placeholder="email@example.com"
                      className={inputClass}
                    />

                  </Field>

                  {/* EVENT DATE */}

                  <Field
                    icon={<Calendar className="h-4 w-4" />}
                    label="Event Date"
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
                      onBlur={() =>
                        setFocused(null)
                      }
                      className={`${inputClass} [color-scheme:dark]`}
                    />

                  </Field>

                </div>

                {/* =================================================
                    PACKAGE
                ================================================= */}

                <Field
                  icon={<Calendar className="h-4 w-4" />}
                  label="Package or Service"
                  focused={focused === 'event_type'}
                >

                  <select
                    name="event_type"
                    value={form.event_type}
                    onChange={handleChange}
                    onFocus={() =>
                      setFocused('event_type')
                    }
                    onBlur={() =>
                      setFocused(null)
                    }
                    className={inputClass}
                  >

                    <option
                      value=""
                      className="bg-charcoal-800"
                    >
                      Select...
                    </option>

                    {eventTypes.map((type) => (

                      <option
                        key={type}
                        value={type}
                        className="bg-charcoal-800"
                      >
                        {type}
                      </option>

                    ))}

                  </select>

                </Field>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <Field
                  icon={<MessageSquare className="h-4 w-4" />}
                  label="Message"
                  focused={focused === 'message'}
                >

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() =>
                      setFocused('message')
                    }
                    onBlur={() =>
                      setFocused(null)
                    }
                    rows={4}
                    placeholder="Tell us about your event..."
                    className={`${inputClass} resize-none`}
                  />

                </Field>

                {/* =================================================
                    ERROR
                ================================================= */}

                {status === 'error' && (

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-maroon-500/30
                      bg-maroon-900/30
                      p-4
                      animate-fade-in
                    "
                  >

                    <AlertCircle
                      className="
                        h-5
                        w-5
                        flex-shrink-0
                        text-maroon-400
                      "
                    />

                    <p className="text-sm text-maroon-300">
                      {errorMsg}
                    </p>

                  </div>

                )}

                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="
                    shimmer-sweep
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-gold-600
                    to-gold-500
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-gold-900/30
                    transition-all
                    hover:from-gold-700
                    hover:to-gold-600
                    hover:shadow-xl
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {status === 'loading' ? (

                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>

                  ) : (

                    <>
                      <Send className="h-5 w-5" />
                      Send Booking Request
                    </>

                  )}

                </button>

              </form>

            )}

          </div>

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

// ============================================================
// FIELD COMPONENT
// ============================================================

function Field({
  icon,
  label,
  required = false,
  focused,
  children,
}: FieldProps) {

  return (
    <div
      className={`
        transition-all
        duration-300
        ${focused ? 'translate-x-1' : ''}
      `}
    >

      {/* Label */}

      <label
        className={`
          mb-2
          flex
          items-center
          gap-2
          text-sm
          font-medium
          transition-colors
          duration-300
          ${
            focused
              ? 'text-gold-300'
              : 'text-white/80'
          }
        `}
      >

        {/* Icon */}

        <span
          className={`
            transition-colors
            duration-300
            ${
              focused
                ? 'text-gold-400'
                : ''
            }
          `}
        >
          {icon}
        </span>

        {/* Label */}

        <span>
          {label}
        </span>

        {/* Required */}

        {required && (
          <span className="text-maroon-400">
            *
          </span>
        )}

      </label>

      {/* Input */}

      {children}

    </div>
  );
}