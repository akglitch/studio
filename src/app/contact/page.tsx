'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Instagram = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* ─────────────── PAGE HEADER ─────────────── */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div className="section-label" style={{ marginBottom: '1rem' }}>
          Get in Touch
        </div>
        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
            maxWidth: '640px',
            marginBottom: '1.5rem',
          }}
        >
          Let&apos;s create something{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            extraordinary
          </em>.
        </h1>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: 'var(--fg-muted)',
            lineHeight: 1.8,
            maxWidth: '500px',
          }}
        >
          We take on a limited number of projects each year. Share a little about your
          vision and we&apos;ll be in touch within 48 hours.
        </p>
      </section>

      {/* ─────────────── MAIN CONTENT ─────────────── */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2.5rem 7rem',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* ─ Form ─ */}
        <div>
          {submitted ? (
            <div
              style={{
                padding: '4rem',
                background: 'var(--bg-dark)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Send size={22} color="#FDFAF7" />
              </div>
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: 'var(--fg)',
                }}
              >
                Message Received
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--fg-muted)',
                  lineHeight: 1.8,
                  maxWidth: '340px',
                }}
              >
                Thank you for reaching out. We will review your enquiry and come back
                to you within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
              id="contact-form"
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                }}
                className="form-row"
              >
                <div>
                  <label className="form-label" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    className="form-input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    className="form-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                }}
                className="form-row"
              >
                <div>
                  <label className="form-label" htmlFor="projectType">
                    Project Type *
                  </label>
                  <select
                    className="form-input"
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="" disabled>
                      Select type...
                    </option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="budget">
                    Approximate Budget
                  </label>
                  <select
                    className="form-input"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Prefer not to say</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-150k">$50,000 – $150,000</option>
                    <option value="150k-500k">$150,000 – $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="message">
                  Tell Us About Your Project *
                </label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Describe your project, its location, timeline, and what you're hoping to achieve..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                  {!loading && <Send size={14} />}
                </button>
              </div>
            </form>
          )}

          <style>{`
            @media (max-width: 600px) {
              .form-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>

        {/* ─ Info sidebar ─ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Studio info */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>
              The Studio
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--fg-muted)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    Address
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: 'var(--fg)',
                    }}
                  >
                    14 Yiyiwa Drive<br />
                    Abelenkpe, Accra<br />
                    Ghana
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--fg-muted)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    Phone
                  </div>
                  <a
                    href="tel:+233200000000"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      color: 'var(--fg)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                  >
                    +233 20 000 0000
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--fg-muted)',
                    }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:hello@elikh.com"
                    className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-300"
                    style={{ 
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 300
                    }}
                  >
                    hello@elikh.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div style={{ background: 'var(--bg-dark)', padding: '2rem' }}>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>
              Studio Hours
            </div>
            {[
              { day: 'Monday – Friday', hours: '9:00 – 18:00' },
              { day: 'Saturday', hours: 'By appointment' },
              { day: 'Sunday', hours: 'Closed' },
            ].map((h) => (
              <div
                key={h.day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.625rem 0',
                  borderBottom: '1px solid var(--border)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                }}
              >
                <span style={{ color: 'var(--fg-muted)' }}>{h.day}</span>
                <span style={{ color: 'var(--fg)' }}>{h.hours}</span>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>
              Follow the Studio
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ padding: '0.625rem 1.25rem', fontSize: '0.6875rem', gap: '0.5rem' }}
              >
                <Instagram size={14} /> Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ padding: '0.625rem 1.25rem', fontSize: '0.6875rem', gap: '0.5rem' }}
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
