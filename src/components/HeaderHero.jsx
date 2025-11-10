import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Menu, X } from 'lucide-react';

export default function HeaderHero() {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="relative bg-gray-950 text-gray-100 overflow-hidden">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">Rico Shandika J. A.</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#resume" className="hover:text-cyan-400 transition-colors">Resume</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#certificate" className="hover:text-cyan-400 transition-colors">Certificate</a>
          </nav>
          <button onClick={() => setOpen(true)} className="hidden md:inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-gray-900 px-4 py-2 font-medium transition-colors">Show Contacts</button>

          <button className="md:hidden" aria-label="Open menu" onClick={() => setNavOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile Drawer */}
        {navOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-start justify-between">
              <div className="flex flex-col gap-4 text-sm">
                <a href="#about" onClick={() => setNavOpen(false)} className="hover:text-cyan-400">About</a>
                <a href="#resume" onClick={() => setNavOpen(false)} className="hover:text-cyan-400">Resume</a>
                <a href="#portfolio" onClick={() => setNavOpen(false)} className="hover:text-cyan-400">Portfolio</a>
                <a href="#certificate" onClick={() => setNavOpen(false)} className="hover:text-cyan-400">Certificate</a>
              </div>
              <button onClick={() => setNavOpen(false)} aria-label="Close menu" className="p-2 rounded-lg border border-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div id="home" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
            Available for work
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">Rico Shandika J. A.</h1>
          <p className="mt-3 text-cyan-300 font-medium">IT Enthusiast</p>
          <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
            I craft modern, fast, and accessible digital experiences. Clean design, solid engineering, and delightful micro-interactions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-5 py-3 font-semibold transition-colors">
              Show Contacts
            </button>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 hover:bg-white/5 transition-colors">See Work</a>
          </div>

          {/* Profile image for mobile */}
          <div className="mt-10 md:hidden">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Profile" className="mx-auto h-40 w-40 rounded-full object-cover ring-4 ring-white/10 shadow-xl" />
          </div>
        </div>

        {/* Right: Spline and profile for desktop */}
        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent"></div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Profile" className="hidden md:block absolute -bottom-6 -left-6 h-32 w-32 rounded-full object-cover ring-4 ring-white/10 shadow-2xl" />
        </div>
      </div>

      {/* Contact Modal */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)}></div>
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-gray-900 border border-white/10 p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Get in touch</h2>
                <p className="text-sm text-gray-400">Email, WhatsApp, location, and socials</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-lg p-2 hover:bg-white/5">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-6 grid gap-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>hello@example.com</span>
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+62 812-3456-7890</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Bandung, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <a aria-label="GitHub" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a aria-label="LinkedIn" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a aria-label="Instagram" href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
