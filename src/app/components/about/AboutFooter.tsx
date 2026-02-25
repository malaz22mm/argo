import type { FooterContent } from '../../data/about';
import { footer } from '../../data/about';

export function AboutFooter() {
  const data: FooterContent = footer;

  return (
    <footer
      style={{
        backgroundColor: '#020617',
        color: '#E2E8F0',
        borderTop: '1px solid #1F2933',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(2.8rem,5vw,3.6rem) clamp(1.5rem,4vw,3rem) 1.8rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.2rem',
            marginBottom: '2.2rem',
          }}
        >
          {data.columns.map((column) => (
            <div key={column.heading}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#FACC15',
                  marginBottom: '0.9rem',
                }}
              >
                {column.heading}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {column.lines.map((line, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      color: '#CBD5F5',
                      lineHeight: 1.7,
                    }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(148, 163, 184, 0.35)',
            paddingTop: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            color: '#94A3B8',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'space-between' }}>
            <span>{data.bottomBarLeft}</span>
            <span style={{ fontWeight: 500 }}>{data.bottomBarRight}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

