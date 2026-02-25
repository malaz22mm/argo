import type { FeatureItem, FeaturesSection } from '../../data/about';
import { featuresSection } from '../../data/about';
import { Card } from '../ui/card';
import { cn } from '../ui/utils';
import MemoryIcon from '@mui/icons-material/Memory';
import TuneIcon from '@mui/icons-material/Tune';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import InsightsIcon from '@mui/icons-material/Insights';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { useRevealOnScroll } from './useRevealOnScroll';

const ICONS: Record<FeatureItem['iconKey'], JSX.Element> = {
  intelligence: <MemoryIcon fontSize="small" />,
  flexibility: <TuneIcon fontSize="small" />,
  coverage: <PublicIcon fontSize="small" />,
  security: <SecurityIcon fontSize="small" />,
  analytics: <InsightsIcon fontSize="small" />,
};

export function AboutFeatures() {
  const { ref, isVisible, prefersReducedMotion } = useRevealOnScroll<HTMLDivElement>();
  const data: FeaturesSection = featuresSection;

  return (
    <section
      ref={ref}
      className={cn(
        'w-full px-4 py-10 sm:px-6 sm:py-14 lg:py-16',
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        prefersReducedMotion && 'opacity-100 translate-y-0',
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl bg-slate-900 text-slate-50 shadow-[0_24px_80px_rgba(15,23,42,0.55)] lg:grid-cols-12">
          {/* Left panel */}
          <div className="relative flex flex-col gap-7 px-6 py-10 sm:px-8 lg:col-span-5 lg:py-14">
            {data.label && (
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400/80">
                {data.label}
              </p>
            )}
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              {data.heading}
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-slate-300">
              {data.intro}
            </p>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Designed to empower travel professionals with scalable technology, automation, and
              real-time operational control.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-[0.7rem] font-semibold text-sky-300">
                400+
              </span>
              <span>airlines, hotels, and services unified in one modern platform.</span>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-sky-400/50 bg-slate-900 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_18px_60px_rgba(8,47,73,0.75)]">
                <div className="absolute inset-3 rounded-full border border-sky-500/30" />
                <div className="absolute inset-6 rounded-full border border-sky-500/30" />
                <TrackChangesIcon className="relative z-10 h-9 w-9 text-sky-300" />
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 sm:py-8 lg:col-span-7">
            <div className="space-y-3">
              {data.items.map((item, index) => {
                const icon = ICONS[item.iconKey];
                const highlight = item.highlight;

                return (
                  <Card
                    key={item.title}
                    className={cn(
                      'group relative flex items-start gap-4 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm transition-all duration-300 ease-out sm:px-5 sm:py-5',
                      'transform-gpu',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                      highlight &&
                        'border-sky-400/20 shadow-lg before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:from-sky-500/20 before:via-transparent before:to-sky-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
                      'hover:-translate-y-1 hover:shadow-xl',
                    )}
                    style={{
                      transitionDelay: isVisible && !prefersReducedMotion ? `${index * 80}ms` : '0ms',
                    }}
                  >
                    <div
                      className={cn(
                        'flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sky-600 transition-transform duration-300 ease-out',
                        'group-hover:scale-110 group-hover:rotate-3',
                      )}
                    >
                      {icon}
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-display text-[0.98rem] font-semibold tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-[0.86rem] leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

