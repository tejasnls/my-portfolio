import { Icon } from "@iconify/react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold tracking-widest uppercase">
            <Icon icon="lucide:user" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Engineering for Scale & Impact
          </h2>
          <p className="text-lg opacity-70 leading-relaxed">
            With over 5 years of experience embedded at American Express, I&apos;ve
            spent my career evolving enterprise-scale micro-frontend systems. I
            don&apos;t just build components; I design systems that prioritize
            platform decoupling, observability, and production reliability.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-bold text-2xl text-purple-500">5+</h4>
              <p className="text-sm opacity-60">Years Experience</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-bold text-2xl text-purple-500">30%</h4>
              <p className="text-sm opacity-60">Perf Optimization</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-[2rem] space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Icon icon="lucide:graduation-cap" />
            Education
          </h3>
          <div className="relative pl-8 border-l border-white/10">
            <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-purple-500" />
            <h4 className="text-xl font-bold">B.E. Computer Science</h4>
            <p className="text-sm opacity-60">2015 – 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
}
