import React from 'react';
import { Camera, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-gold-500/10">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        
        {/* Brand */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-600 text-gold-500">
                <Camera className="h-5 w-5" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-white">
                  Bharat Photo Studio
                </span>

                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold-500">
                  Wedding Films
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Wedding Photography | Cinematic Videography | Wedding Films
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#home"
                  className="text-sm text-white/50 transition-colors hover:text-gold-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#package"
                  className="text-sm text-white/50 transition-colors hover:text-gold-400"
                >
                  Package
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-white/50 transition-colors hover:text-gold-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="text-sm text-white/50 transition-colors hover:text-gold-400"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#schedule"
                  className="text-sm text-white/50 transition-colors hover:text-gold-400"
                >
                  Schedule
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/50 transition-colors hover:text-gold-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Contact
            </h4>

            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-500" />
                <span>____________________</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-500" />
                <span>____________________</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 flex-shrink-0 text-gold-500" />
                <span>____________________</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-white/30">
            © 2026 Bharat Photo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}