import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | ElikH',
  description:
    'Meet the French designer behind ElikH — an interior architecture studio rooted in Accra, Ghana.',
};

const values = [
  {
    title: 'Restraint',
    desc: 'We believe in doing less, better. Every material, every object, every detail is questioned until only what is essential remains.',
  },
  {
    title: 'Context',
    desc: "A beautiful interior doesn't ignore its surroundings — it responds to them. Culture, climate, and community are always part of our design brief.",
  },
  {
    title: 'Craft',
    desc: 'We champion local artisans and makers across Ghana, weaving their skill and knowledge into every project we undertake.',
  },
  {
    title: 'Longevity',
    desc: 'Trends fade. We design for permanence — spaces that will feel right and relevant decades from now.',
  },
];

const press = [
  { publication: 'AD Africa', title: 'Spaces That Speak', year: '2024' },
  { publication: 'FRAME Magazine', title: 'West African Modern', year: '2023' },
  { publication: 'Wallpaper*', title: 'Accra Design Rising', year: '2023' },
];

export default function AboutPage() {
  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'end',
        }}
        className="about-hero"
      >
        <div>
          <div className="section-label" style={{ marginBottom: '1.25rem' }}>
            About
          </div>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              marginBottom: '2rem',
            }}
          >
            A studio born<br />
            between two{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>worlds</em>.
          </h1>
          <p
            style={{
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'var(--fg-muted)',
              maxWidth: '480px',
            }}
          >
            ElikH was founded with a simple conviction: that the best interior architecture
            happens when you stop choosing between international sophistication and local
            soul — and find a way to hold both.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '4rem',
            justifyContent: 'flex-end',
          }}
        >
          {[
            { n: '8+', label: 'Years of Practice' },
            { n: '40+', label: 'Projects Completed' },
            { n: '3', label: 'International Awards' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 400,
                  color: 'var(--fg)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {stat.n}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-hero { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ─────────────── DESIGNER PORTRAIT + BIO ─────────────── */}
      <section
        style={{
          background: 'var(--bg-dark)',
          padding: '7rem 2.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="designer-grid"
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              borderRadius: '2px',
            }}
            className="img-hover"
          >
            <Image
              src="/images/designer.png"
              alt="Studio Founder & Designer"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Accent caption */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(to top, rgba(26,26,24,0.8), transparent)',
              }}
            >
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: '#FDFAF7',
                }}
              >
                Isabelle Moreau
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-light)',
                  marginTop: '0.25rem',
                }}
              >
                Founder & Principal Designer
              </div>
            </div>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>
              The Designer
            </div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '2rem',
              }}
            >
              Isabelle Moreau
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                fontSize: '0.9375rem',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'var(--fg-muted)',
              }}
            >
              <p>
                Born in Lyon, France, Isabelle trained as an interior architect at the 
                École Nationale Supérieure des Arts Décoratifs in Paris. She spent her early 
                career working on high-end residential projects across Marseille and London, 
                learning the rigorous discipline of European modernism.
              </p>
              <p>
                But in 2016, a single commission in Accra changed the trajectory of her work. 
                She arrived with a three-month contract and a suitcase, and never truly left. 
                The city's immense vitality, the saturated light, and the ingenuity of local 
                artisans offered a completely new vocabulary for her practice.
              </p>
              <p>
                Today, she leads a small, tightly-knit team from a studio in Abelenkpe. 
                They take on a very limited number of projects each year, ensuring that every 
                material choice, every spatial sequence, and every piece of custom joinery 
                receives obsessive attention. Great interiors, she believes, are never simply 
                imported or invented — they are uncovered through deep listening.
              </p>
            </div>

            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.375rem',
                fontStyle: 'italic',
                color: 'var(--fg)',
                marginTop: '2.5rem',
                paddingLeft: '1.5rem',
                borderLeft: '3px solid var(--accent)',
                lineHeight: 1.5,
              }}
            >
              &ldquo;I came to Accra for a project. I stayed for the light.&rdquo;
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .designer-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ─────────────── VALUES ─────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2.5rem' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>
          Our Approach
        </div>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            marginBottom: '4rem',
          }}
        >
          Studio Values
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0',
            borderTop: '1px solid var(--border)',
            borderLeft: '1px solid var(--border)',
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="hover:bg-[var(--bg-dark)]"
              style={{
                padding: '2.5rem',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.3s ease',
              }}
            >
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--fg)',
                  marginBottom: '0.875rem',
                }}
              >
                {v.title}
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'var(--fg-muted)',
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── PRESS ─────────────── */}
      <section style={{ background: 'var(--fg)', padding: '6rem 2.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '3rem',
            }}
          >
            As Seen In
          </div>

          <div style={{ borderTop: '1px solid rgba(253,250,247,0.1)' }}>
            {press.map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.75rem 0',
                  borderBottom: '1px solid rgba(253,250,247,0.1)',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: '#FDFAF7',
                  }}
                >
                  {item.publication}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: 'rgba(253,250,247,0.55)',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{item.title}&rdquo;
                </div>
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1rem',
                    color: 'var(--accent)',
                  }}
                >
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section style={{ padding: '7rem 2.5rem', textAlign: 'center' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>
          Work With Us
        </div>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}
        >
          Ready to begin?
        </h2>
        <p
          style={{
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: 'var(--fg-muted)',
            lineHeight: 1.8,
            maxWidth: '420px',
            margin: '0 auto 3rem',
          }}
        >
          Tell us about your project. We take on a limited number of commissions each year
          to ensure every client receives our full attention.
        </p>
        <Link href="/contact" className="btn-primary">
          Start a Conversation <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
