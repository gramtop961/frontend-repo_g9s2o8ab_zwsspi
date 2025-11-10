import { Code, MonitorSmartphone, Camera, Palette } from 'lucide-react';

export default function AboutServices() {
  return (
    <section id="about" className="bg-gray-950 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">About</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              I am an IT enthusiast passionate about clean interfaces and reliable engineering. This is placeholder text for a short bio. You can replace it later with your story, values, and what drives your work.
            </p>
            <p className="mt-3 text-gray-400 text-sm">
              Based in Indonesia. Focused on web, product, and delightful details.
            </p>
          </div>

          {/* Services */}
          <div id="services">
            <h3 className="text-xl font-semibold text-white">What I'm Doing</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <ServiceCard icon={<Palette className="w-5 h-5" />} title="Web Design" desc="Clean, modern, and responsive UI design." />
              <ServiceCard icon={<Code className="w-5 h-5" />} title="Web Development" desc="Robust and scalable web apps." />
              <ServiceCard icon={<MonitorSmartphone className="w-5 h-5" />} title="Mobile Apps" desc="Cross-platform experiences." />
              <ServiceCard icon={<Camera className="w-5 h-5" />} title="Photography" desc="Product and lifestyle shots." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
        {icon}
      </div>
      <h4 className="mt-4 font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm text-gray-300">{desc}</p>
    </div>
  );
}
