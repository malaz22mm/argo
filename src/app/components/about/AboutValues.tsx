import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { values } from '../../data/about';

const ease = [0.22, 1, 0.36, 1] as const;

// Unique SVG icon per card
const ICONS: Record<string, React.ReactNode> = {
  mission: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2"  x2="12" y2="5"  />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2"  y1="12" x2="5"  y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  ),
  vision: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  values: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.9 6.2L22 9.3l-5.1 4.9 1.2 6.8L12 18l-6.1 3 1.2-6.8L2 9.3l7.1-1.1L12 2z" />
    </svg>
  ),
};

function ValueCard({ card, index }: { card: (typeof values)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#fff',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: hovered ? '#0EA5E9' : '#E2E8F0',
        borderRadius: 2,
        padding: 'clamp(1.8rem, 3vw, 2.4rem)',
        cursor: 'default',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 12px 40px rgba(14,165,233,0.10), 0 2px 8px rgba(14,165,233,0.06)'
          : '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: hovered ? '#EFF6FF' : '#F8FAFC',
          borderRadius: 8,
          marginBottom: '1.4rem',
          color: '#0EA5E9',
          transition: 'background-color 0.3s ease',
        }}
      >
        {ICONS[card.id] ?? null}
      </div>

      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: '0.62rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#0EA5E9',
          marginBottom: '0.5rem',
        }}
      >
        {card.eyebrow}
      </div>

      {/* Headline */}
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
          color: '#0C1F3F',
          margin: '0 0 0.9rem',
        }}
      >
        {card.headline}
      </h3>

      {/* Accent line */}
      <div
        style={{
          width: hovered ? 40 : 28,
          height: 2,
          backgroundColor: hovered ? '#0EA5E9' : '#E2E8F0',
          marginBottom: '1rem',
          transition: 'width 0.3s ease, background-color 0.3s ease',
        }}
      />

      {/* Body */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '0.9rem',
          lineHeight: 1.75,
          color: '#64748B',
          margin: 0,
        }}
      >
        {card.body}
      </p>
    </motion.div>
  );
}

export function AboutValues() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(4rem,7vw,7rem) clamp(1.5rem,4vw,3rem)',
        }}
      >
        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,4rem)' }}>
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
              Our Foundation
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
            Mission, Vision &{' '}
            <span style={{ color: '#0EA5E9' }}>Values</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {values.map((card, i) => (
            <ValueCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
