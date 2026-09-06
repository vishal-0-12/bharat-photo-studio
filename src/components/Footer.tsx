import { Camera, Heart, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const services = ['Wedding Photography', 'Cinematic Videography', 'Candid Photography', 'Pre-Wedding Shoots', 'Drone Coverage', 'Photo Albums'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-500/15 bg-gradient-to-b from-charcoal-950 to-charcoal-900">
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute -bottom-20 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-gold-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold-500 text-gold-400 transition-all duration-300 hover:rotate-12 hover:border-gold-400 hover:text-gold-300">
                <Camera className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-white">Bharat Photo Studio</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-500">Wedding Films</span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">Wedding Photography | Cinematic Videography | Candid Shoot | Pre-Wedding | Drone Coverage | Photo Album</p>
            <div className="mt-5 flex items-center gap-2 text-gold-400">
              <Heart className="h-4 w-4 animate-pulse" />
              <span className="font-serif text-sm italic text-gold-300/70">Crafted with love</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">Quick Links</h4>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-gold-400 to-transparent" />
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-gold-400">
                    <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">Our Services</h4>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-gold-400 to-transparent" />
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service} className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-gold-400">
                  <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-4" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">Contact</h4>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-gold-400 to-transparent" />
            <ul className="mt-4 space-y-4">
              <li>
                <a href="tel:9813220325" className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold-400">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 transition-all group-hover:bg-gold-500/20 group-hover:scale-110">
                    <Phone className="h-4 w-4" />
                  </span>
                  9813220325
                </a>
              </li>
              <li>
                <a href="mailto:bharatstudio4@gmail.com" className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold-400">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 transition-all group-hover:bg-gold-500/20 group-hover:scale-110">
                    <Mail className="h-4 w-4" />
                  </span>
                  bharatstudio4@gmail.com
                </a>
              </li>
              <li className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold-400">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 transition-all group-hover:bg-gold-500/20 group-hover:scale-110">
                  <MapPin className="h-4 w-4" />
                </span>
                Badhra, Loharu Road, NCR Delhi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">© 2026 Bharat Photo Studio. All rights reserved.</p>
          <a href="#home" className="group flex items-center gap-2 rounded-full border border-gold-500/20 px-4 py-2 text-xs font-medium text-white/50 transition-all hover:border-gold-400/40 hover:text-gold-400">
            Back to Top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
