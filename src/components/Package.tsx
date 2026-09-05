import React from 'react';
import {
  Check,
  Calendar,
  IndianRupee,
  Clock,
  FileText,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const includedServices = [
  'Professional Photography Coverage (All Functions)',
  'Cinematic Videography Coverage',
  'Traditional Video Recording',
  'Bride & Groom Special Portrait Session',
  'Family & Group Photography',
  'Haldi Ceremony Complete Coverage',
  'Ring Ceremony Complete Coverage',
  'Wedding Ceremony Complete Coverage',
  'High Resolution Edited Photos',
  'Cinematic Wedding Highlights Film (3-5 Minutes)',
  'All Raw Data in Digital Format',
  'Premium Photo Editing & Color Grading',
];

const deliverables = [
  '300+ Edited HD Photographs',
  'Cinematic Wedding Highlight Video',
  'Full Length Traditional Wedding Film',
  'All Data in Pen Drive / Online Transfer',
  'Professionally Edited Final Output',
];

const paymentTerms = [
  {
    label: '50% Advance Booking Amount',
    amount: '₹40,000/-',
  },
  {
    label: '50% Balance Amount',
    amount: '₹40,000/-',
  },
];

const terms = [
  'Any changes to the event date and time must be communicated in advance.',
  'Additional charges may apply for extra hours or coverage of additional events.',
  'Delivery of photos and videos will be completed within 30 to 45 working days.',
  'The advance amount will not be refunded under any circumstances.',
  'Travel and accommodation expenses (for out-of-town events) will be additional.',
];

export default function Package() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="package"
      className="section-pad relative overflow-hidden bg-charcoal-900"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />

        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-maroon-600 blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium tracking-[0.25em] uppercase text-gold-400">
            Premium Package
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Premium Wedding Coverage Package
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold-500/60" />

            <span className="text-gold-400">✦</span>

            <span className="h-px w-16 bg-gold-500/60" />
          </div>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Included Services */}
          <div className="rounded-2xl border border-gold-500/20 bg-charcoal-800/60 p-7 backdrop-blur-sm">
            <h3 className="mb-5 font-serif text-xl font-bold text-gold-300">
              Included Services
            </h3>

            <ul className="space-y-3">
              {includedServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <span className="text-sm leading-relaxed text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="rounded-2xl border border-gold-500/20 bg-charcoal-800/60 p-7 backdrop-blur-sm">
            <h3 className="mb-5 font-serif text-xl font-bold text-gold-300">
              Deliverables
            </h3>

            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0"
                >
                  <span className="mt-0.5 text-gold-400">
                    <FileText className="h-5 w-5" />
                  </span>

                  <span className="text-sm leading-relaxed text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Total Amount */}
            <div className="mt-6 rounded-xl bg-gradient-to-r from-gold-600/20 to-gold-400/10 p-5">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm text-white/70">
                  Total Package Amount
                </span>

                <span className="font-serif text-3xl font-bold text-gold-300">
                  ₹80,000
                </span>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="rounded-2xl border border-gold-500/20 bg-charcoal-800/60 p-7 backdrop-blur-sm">
            <h3 className="mb-5 font-serif text-xl font-bold text-gold-300">
              Payment Terms
            </h3>

            <div className="space-y-4">
              {paymentTerms.map((term) => (
                <div
                  key={term.label}
                  className="flex items-center justify-between rounded-xl bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-5 w-5 text-gold-400" />

                    <span className="text-sm text-white/80">
                      {term.label}
                    </span>
                  </div>

                  <span className="font-serif font-bold text-gold-300">
                    {term.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* Final Payment Notice */}
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-maroon-900/20 p-4">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-maroon-300" />

              <p className="text-xs leading-relaxed text-white/60">
                Final payment must be completed before delivery.
              </p>
            </div>

            {/* Book Now Button */}
            <a
              href="#contact"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold-600 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold-700"
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </a>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-8 rounded-2xl border border-gold-500/10 bg-charcoal-800/40 p-7">
          <h3 className="mb-5 font-serif text-xl font-bold text-gold-300">
            Terms & Conditions
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {terms.map((term, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15 font-serif text-xs font-bold text-gold-400">
                  {i + 1}
                </span>

                <p className="text-sm leading-relaxed text-white/70">
                  {term}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}