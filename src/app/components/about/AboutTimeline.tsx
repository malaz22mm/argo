import { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeline } from '../../data/about';

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Desktop milestone (alternating sides) ────────────────────
function DesktopMilestone({
  m,
  index,
}: {
  m: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 64px 1fr',
        alignItems: 'start',
        marginBottom: '3rem',
      }}
    >
      {/* Left slot */}
      <div style={{ paddingRight: '2.5rem', paddingTop: 4 }}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            style={{
              backgroundColor: '#fff',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#E2E8F0',
              borderRight: '3px solid #0EA5E9',
              padding: '1.4rem 1.6rem',
              textAlign: 'right',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#0C1F3F',
                marginBottom: '0.45rem',
              }}
            >
              {m.title}
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: '#64748B',
                margin: 0,
              }}
            >
              {m.body}
            </p>
          </motion.div>
        )}
      </div>

      {/* Centre node */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 12 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.05, type: 'spring', stiffness: 200, damping: 18 }}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#fff',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#0EA5E9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 0 0 5px #F0F9FF',
          }}
        >
          <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#0EA5E9' }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            color: '#0EA5E9',
            marginTop: 7,
          }}
        >
          {m.year}
        </motion.div>
      </div>

      {/* Right slot */}
      <div style={{ paddingLeft: '2.5rem', paddingTop: 4 }}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            style={{
              backgroundColor: '#fff',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#E2E8F0',
              borderLeft: '3px solid #0EA5E9',
              padding: '1.4rem 1.6rem',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#0C1F3F',
                marginBottom: '0.45rem',
              }}
            >
              {m.title}
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: '#64748B',
                margin: 0,
              }}
            >
              {m.body}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Mobile milestone ─────────────────────────────────────────
function MobileMilestone({ m }: { m: (typeof timeline)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease }}
      style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.8rem',
        paddingLeft: '0.5rem',
        borderLeft: '2px solid #BAE6FD',
        paddingTop: 2,
      }}
    >
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            color: '#0EA5E9',
            marginBottom: '0.3rem',
          }}
        >
          {m.year}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '0.95rem',
            color: '#0C1F3F',
            marginBottom: '0.35rem',
          }}
        >
          {m.title}
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '0.85rem',
            lineHeight: 1.7,
            color: '#64748B',
            margin: 0,
          }}
        >
          {m.body}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────
export function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  // GSAP ScrollTrigger — draws the centre line
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineFillRef.current || !lineTrackRef.current) return;
      gsap.fromTo(
        lineFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: lineTrackRef.current,
            start: 'top 65%',
            end: 'bottom 35%',
            scrub: 1.4,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', position: 'relative' }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(4rem,7vw,7rem) clamp(1.5rem,4vw,3rem)',
        }}
      >
        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(3rem,5vw,5rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}
          >
            <span style={{ width: 20, height: 1.5, backgroundColor: '#CBD5E1', display: 'block' }} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '0.65rem',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#94A3B8',
              }}
            >
              Growth & Innovation
            </span>
            <span style={{ width: 20, height: 1.5, backgroundColor: '#CBD5E1', display: 'block' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.022em',
              color: '#0C1F3F',
              margin: 0,
            }}
          >
            Growth & Innovation
          </motion.h2>
        </div>

        {/* ── Desktop timeline ── (hidden on mobile via inline style) */}
        <div className="hidden md:block" style={{ position: 'relative' }}>
          {/* Track container for GSAP */}
          <div
            ref={lineTrackRef}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 1,
              transform: 'translateX(-50%)',
              backgroundColor: '#E2E8F0',
            }}
          >
            {/* Animated fill line */}
            <div
              ref={lineFillRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, #0EA5E9 0%, #38BDF8 100%)',
                transformOrigin: 'top center',
              }}
            />
          </div>

          {/* Milestones */}
          {timeline.map((m, i) => (
            <DesktopMilestone key={m.year} m={m} index={i} />
          ))}
        </div>

        {/* ── Mobile timeline ── */}
        <div className="md:hidden">
          {timeline.map((m) => (
            <MobileMilestone key={m.year} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
