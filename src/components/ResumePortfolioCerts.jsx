import { Star, ExternalLink, FileBadge2 } from 'lucide-react';

export default function ResumePortfolioCerts() {
  return (
    <section id="resume" className="bg-gray-950 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Resume */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Resume</h2>
            <p className="mt-2 text-sm text-gray-400">Highlights of experience and education.</p>
          </div>
          <div className="lg:col-span-2 grid gap-6">
            <TimelineItem title="Frontend Developer" org="Company Name" period="2022 — Present" desc="Building accessible interfaces with React and Tailwind." />
            <TimelineItem title="Computer Science" org="University" period="2018 — 2022" desc="Studied algorithms, systems, and software engineering." />
          </div>
        </div>

        {/* Portfolio */}
        <div id="portfolio" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Portfolio</h2>
          <p className="mt-2 text-sm text-gray-400">Selected projects</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <ProjectCard title="Project One" tag="Web App" />
            <ProjectCard title="Project Two" tag="Mobile" />
            <ProjectCard title="Project Three" tag="Design" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Testimonials</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <TestimonialCard name="Happy Client" role="Product Manager" quote="Delivers high-quality work with great attention to detail." />
            <TestimonialCard name="Teammate" role="Engineer" quote="Collaborative, reliable, and proactive in solving problems." />
          </div>
        </div>

        {/* Certificates */}
        <div id="certificate" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Badges / Certificates</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <a key={i} href="#" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
                <FileBadge2 className="w-5 h-5 text-cyan-300" />
                <span className="text-sm">Certificate {i + 1}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, org, period, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-white">{title}</h4>
        <span className="text-xs text-gray-400">{period}</span>
      </div>
      <p className="text-sm text-gray-300">{org}</p>
      <p className="mt-2 text-sm text-gray-400">{desc}</p>
    </div>
  );
}

function ProjectCard({ title, tag }) {
  return (
    <a href="#" className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 hover:from-white/10 transition-colors block">
      <div className="h-40 rounded-xl bg-gray-800/60 flex items-center justify-center text-gray-400">Image</div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-xs text-gray-400">{tag}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-300" />
      </div>
    </a>
  );
}

function TestimonialCard({ name, role, quote }) {
  return (
    <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <Star className="w-5 h-5 text-yellow-300" />
      <p className="mt-3 text-gray-200">“{quote}”</p>
      <footer className="mt-3 text-sm text-gray-400">— {name}, {role}</footer>
    </blockquote>
  );
}
