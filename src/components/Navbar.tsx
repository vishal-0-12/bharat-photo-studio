import { useEffect, useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream-50/95 py-3 shadow-lg shadow-gold-900/5 backdrop-blur-md' : 'bg-transparent py-5'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2.5">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-500 ${scrolled ? 'border-gold-600 text-gold-600' : 'border-gold-300 text-gold-200'}`}>
            <Camera className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-serif text-lg font-bold transition-colors duration-500 ${scrolled ? 'text-charcoal-800' : 'text-white'}`}>Bharat Photo Studio</span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-gold-600' : 'text-gold-200'}`}>Wedding Films</span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`text-sm font-medium transition-colors duration-300 hover:text-gold-500 ${scrolled ? 'text-charcoal-700' : 'text-white/90'}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 lg:inline-block ${scrolled ? 'bg-gold-600 text-white hover:bg-gold-700' : 'border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25'}`}>Book Now</a>

        <button onClick={() => setMenuOpen(!menuOpen)} className={`lg:hidden ${scrolled ? 'text-charcoal-800' : 'text-white'}`} aria-label="Toggle menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="mx-5 mt-3 space-y-1 rounded-2xl bg-cream-50 p-4 shadow-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-charcoal-700 transition-colors hover:bg-gold-100 hover:text-gold-700">{link.label}</a>
            </li>
          ))}
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-lg bg-gold-600 px-4 py-3 text-center text-sm font-semibold text-white">Book Now</a></li>
        </ul>
      </div>
    </header>
  );
}
