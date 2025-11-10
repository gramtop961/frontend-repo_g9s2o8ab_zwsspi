import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Rico Shandika J. A. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-lg hover:bg-white/5"><Mail className="w-5 h-5" /></a>
            <a aria-label="GitHub" href="#" className="p-2 rounded-lg hover:bg-white/5"><Github className="w-5 h-5" /></a>
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg hover:bg-white/5"><Linkedin className="w-5 h-5" /></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-lg hover:bg-white/5"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
