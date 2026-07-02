'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const Instagram = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--fg)',
        color: 'var(--white)',
        padding: '5rem 2.5rem 2.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                marginBottom: '0.25rem',
              }}
            >
              ElikH
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              Accra · Interior Architecture
            </div>
          </div>
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(253,250,247,0.6)',
              maxWidth: '260px',
            }}
          >
            French interior design sensibility, rooted in the warmth and vitality of Accra, Ghana.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgba(253,250,247,0.5)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,250,247,0.5)')}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgba(253,250,247,0.5)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,250,247,0.5)')}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@atelier-accra.com"
              style={{ color: 'rgba(253,250,247,0.5)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,250,247,0.5)')}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}
          >
            Studio
          </div>
          {['/', '/projects', '/about', '/contact'].map((href, i) => {
            const labels = ['Home', 'Projects', 'About', 'Contact'];
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'rgba(253,250,247,0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,250,247,0.65)')}
              >
                {labels[i]}
              </Link>
            );
          })}
        </div>

        {/* Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}
          >
            Services
          </div>
          {['Residential Design', 'Commercial Design', 'Space Planning', 'FF&E Procurement', 'Design Consultation'].map((s) => (
            <span
              key={s}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 300,
                color: 'rgba(253,250,247,0.65)',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Address */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}
          >
            Find Us
          </div>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start',
              color: 'rgba(253,250,247,0.65)',
            }}
          >
            <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent)' }} />
            <div style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.8 }}>
              14 Yiyiwa Drive<br />
              Abelenkpe, Accra<br />
              Ghana
            </div>
          </div>
          <a
            href="tel:+233200000000"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 300,
              color: 'rgba(253,250,247,0.65)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,250,247,0.65)')}
          >
            +233 20 000 0000
          </a>
          <a
            href="mailto:hello@elikh.com"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 300,
              color: 'rgba(253,250,247,0.65)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,250,247,0.65)')}
          >
            hello@elikh.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(253,250,247,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ color: 'var(--border)' }}>
          © {new Date().getFullYear()} ElikH — Accra · Interior Architecture. 
          All rights reserved.
        </div>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            color: 'rgba(253,250,247,0.3)',
          }}
        >
          Design with intention.
        </p>
      </div>
    </footer>
  );
}
