import React, { useState } from 'react';

import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
} from 'lucide-react';

import { supabase } from '../lib/supabase';
import { useReveal } from '../hooks/useReveal';

const eventTypes = [
  'Ring Ceremony',
  'Haldi Ceremony',
  'Wedding Ceremony',
  'Full Wedding Package',
  'Other',
];

export default function Contact() {
  const { ref, isVisible } = useReveal();

  const [form, setForm] = useState({
    client_name: '',
    phone: '',
    email: '',
    event_type: '',
    event_date: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMsg('');

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
        throw error;
      }

      setStatus('success');

      setForm({
        client_name: '',
        phone: '',
        email: '',
        event_type: '',
        event_date: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');

      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-charcoal-900"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />

        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-maroon-600 blur-3xl" />
      </div>

      {/* Main Container */}
      <div
        ref={ref}
        className={`relative mx-auto max-w-5xl reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
            Get in Touch
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Booking & Contact
          </h2>

          <p className="mt-4 text-base text-white/60">
            Contact us today to book your date — we'll make your special day
            unforgettable.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold-500/60" />

            <span className="text-gold-400">✦</span>

            <span className="h-px w-16 bg-gold-500/60" />
          </div>
        </div>

        {/* Contact Form Box */}
        <div className="rounded-3xl border border-gold-500/20 bg-charcoal-800/60 p-6 backdrop-blur-sm sm:p-10">
          {status === 'success' ? (
            /* Success Message */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Thank You!
              </h3>

              <p className="mt-2 max-w-md text-sm text-white/70">
                Your booking request has been received successfully. We will
                contact you soon.
              </p>

              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 rounded-full border border-gold-500/30 bg-white/5 px-6 py-2.5 text-sm font-semibold text-gold-300 transition-all hover:bg-white/10"
              >
                Send New Request
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone + Email + Date */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                    <User className="h-4 w-4 text-gold-400" />

                    Name

                    <span className="text-maroon-400">*</span>
                  </label>

                  <input
                    type="text"
                    name="client_name"
                    value={form.client_name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-gold-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                    <Phone className="h-4 w-4 text-gold-400" />

                    Phone Number

                    <span className="text-maroon-400">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-gold-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                    <Mail className="h-4 w-4 text-gold-400" />

                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-gold-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                    <Calendar className="h-4 w-4 text-gold-400" />

                    Event Date
                  </label>

                  <input
                    type="date"
                    name="event_date"
                    value={form.event_date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-gold-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold-500/30 [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                  <Calendar className="h-4 w-4 text-gold-400" />

                  Event Type
                </label>

                <select
                  name="event_type"
                  value={form.event_type}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all focus:border-gold-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
                >
                  <option value="" className="bg-charcoal-800">
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
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                  <MessageSquare className="h-4 w-4 text-gold-400" />

                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your requirements or questions here..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-gold-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-3 rounded-xl border border-maroon-500/30 bg-maroon-900/30 p-4">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-maroon-400" />

                  <p className="text-sm text-maroon-300">
                    {errorMsg}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 py-4 text-sm font-semibold text-white shadow-lg shadow-gold-900/30 transition-all duration-300 hover:from-gold-700 hover:to-gold-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
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
    </section>
  );
}