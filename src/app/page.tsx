'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

/* ── Fade-up reveal wrapper ── */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Service item ── */
function ServiceItem({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: '2.5rem 0',
        borderBottom: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '60px 1fr',
        gap: '2rem',
        alignItems: 'start',
        cursor: 'default',
      }}
    >
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.875rem',
          color: 'var(--accent)',
          paddingTop: '0.2rem',
        }}
      >
        {number}
      </span>
      <div>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.25rem',
            fontWeight: 400,
            color: 'var(--fg)',
            marginBottom: '0.625rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 300,
            color: 'var(--fg-muted)',
            lineHeight: 1.8,
          }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: '640px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '5rem',
        }}
      >
        {/* Background image with parallax */}
        <motion.div
          style={{
            position: 'absolute',
            inset: '-10%',
            y: heroY,
          }}
        >
          <Image
            src="/images/hero.png"
            alt="Interior Architecture Studio — Accra"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(26,26,24,0.82) 0%, rgba(26,26,24,0.3) 50%, rgba(26,26,24,0.1) 100%)',
            }}
          />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0 2.5rem',
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            opacity: heroOpacity,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent-light)',
              marginBottom: '1.25rem',
            }}
          >
            Interior Architecture Studio · Accra, Ghana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              fontWeight: 400,
              color: '#FDFAF7',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              marginBottom: '2rem',
              maxWidth: '780px',
            }}
          >
            We design spaces that feel like they've{' '}
            <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>
              always
            </em>{' '}
            been there.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link href="/projects" className="btn-primary">
              View Projects <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="btn-outline" style={{ color: '#FDFAF7', borderColor: 'rgba(253,250,247,0.4)' }}>
              Our Studio
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.625rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(253,250,247,0.5)',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ width: '1px', height: '40px', background: 'rgba(196,134,106,0.6)' }}
          />
        </motion.div>
      </section>

      {/* ─────────────── ABOUT STRIP ─────────────── */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '7rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="about-strip"
      >
        <Reveal>
          <div className="section-label" style={{ marginBottom: '1.25rem' }}>
            About the Studio
          </div>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.75rem',
            }}
          >
            A meticulous eye for detail.<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>A deep reverence</em> for context.
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'var(--fg-muted)',
              marginBottom: '1.25rem',
            }}
          >
            My name is Isabelle, and I started this studio because I believe the best 
            interiors don't shout. They quietly support the lives lived within them. 
            We pair an obsessive attention to proportion and restraint with the warmth, 
            texture, and extraordinary craft traditions of West Africa.
          </p>
          <p
            style={{
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'var(--fg-muted)',
              marginBottom: '2.5rem',
            }}
          >
            Every project begins with listening — to the client, to the building, and to
            the neighbourhood — before a single line is drawn.
          </p>
          <Link href="/about" className="btn-outline">
            The Studio <ArrowRight size={13} />
          </Link>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
            className="img-hover"
          >
            <Image
              src="/images/designer.png"
              alt="Studio Designer"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Floating accent */}
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '-1.5rem',
                background: 'var(--bg)',
                padding: '1.25rem 1.75rem',
                boxShadow: '0 8px 40px rgba(26,26,24,0.12)',
              }}
            >
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.625rem',
                  fontWeight: 400,
                  color: 'var(--fg)',
                  lineHeight: 1,
                }}
              >
                8+
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginTop: '0.25rem',
                }}
              >
                Years of Practice
              </div>
            </div>
          </div>
        </Reveal>

        <style>{`
          @media (max-width: 768px) {
            .about-strip { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ─────────────── FEATURED PROJECTS ─────────────── */}
      <section
        style={{
          background: 'var(--bg-dark)',
          padding: '7rem 2.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: '4rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: '0.875rem' }}>
                  Selected Work
                </div>
                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Recent Projects
                </h2>
              </div>
              <Link href="/projects" className="btn-outline">
                All Projects <ArrowUpRight size={13} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-8">
            {featuredProjects.map((project, i) => {
              const mdColSpan = [
                'md:col-span-7 md:mt-0',
                'md:col-span-5 md:mt-32',
                'md:col-span-5 md:mt-0',
                'md:col-span-6 md:col-start-7 md:-mt-24',
              ];
              const colClass = mdColSpan[i] || 'md:col-span-6';

              const ref = useRef<HTMLDivElement>(null);
              const inView = useInView(ref, { once: true, margin: '-60px' });
              return (
                <motion.div
                  key={project.slug}
                  ref={ref}
                  className={colClass}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                    <div
                      className="project-card"
                      style={{
                        aspectRatio: i % 2 === 0 ? '4/3' : '3/4',
                        borderRadius: '2px',
                      }}
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="project-card-overlay">
                        <div
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.625rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--accent-light)',
                            marginBottom: '0.375rem',
                          }}
                        >
                          {project.category} · {project.year}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: 'Playfair Display, serif',
                              fontSize: '1.25rem',
                              fontWeight: 400,
                              color: '#FDFAF7',
                            }}
                          >
                            {project.title}
                          </h3>
                          <ArrowUpRight size={16} color="#FDFAF7" />
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '0.875rem 0' }}>
                      <div
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '0.9375rem',
                          fontWeight: 400,
                          color: 'var(--fg)',
                        }}
                      >
                        {project.title}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.75rem',
                          fontWeight: 300,
                          color: 'var(--fg-muted)',
                          marginTop: '0.2rem',
                        }}
                      >
                        {project.location}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── SERVICES ─────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '6rem',
          }}
          className="services-grid"
        >
          <Reveal>
            <div style={{ position: 'sticky', top: '8rem' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>
                What We Do
              </div>
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Our Services
              </h2>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: 'var(--fg-muted)',
                }}
              >
                From concept to completion, we offer a full suite of interior architecture
                services for residential and commercial clients across Accra and beyond.
              </p>
            </div>
          </Reveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {[
              {
                n: '01',
                title: 'Residential Design',
                desc: 'Bespoke interiors for private homes, villas, and apartments. We transform living spaces into deeply personal environments that reflect who you are.',
              },
              {
                n: '02',
                title: 'Commercial Design',
                desc: 'Offices, restaurants, hotels, and retail environments designed to inspire, perform, and leave a lasting impression on every visitor.',
              },
              {
                n: '03',
                title: 'Space Planning',
                desc: 'Precise spatial analysis and planning that maximises flow, function, and beauty within any footprint or architectural constraint.',
              },
              {
                n: '04',
                title: 'FF&E Procurement',
                desc: 'Curated sourcing of furniture, fixtures, and equipment — balancing local Ghanaian craftsmanship with international design excellence.',
              },
            ].map((s) => (
              <ServiceItem key={s.n} number={s.n} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .services-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ─────────────── PHILOSOPHY QUOTE ─────────────── */}
      <section
        style={{
          background: 'var(--fg)',
          padding: '7rem 2.5rem',
          textAlign: 'center',
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '2.5rem',
            }}
          >
            Studio Philosophy
          </div>
          <blockquote
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#FDFAF7',
              lineHeight: 1.45,
              maxWidth: '820px',
              margin: '0 auto 3rem',
              letterSpacing: '0.01em',
            }}
          >
            &ldquo;A beautiful space is not a destination — it is the quiet backdrop
            against which a life unfolds.&rdquo;
          </blockquote>
          <cite
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(253,250,247,0.45)',
              fontStyle: 'normal',
            }}
          >
            — Founder, ElikH
          </cite>
        </Reveal>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section style={{ padding: '7rem 2.5rem', textAlign: 'center' }}>
        <Reveal>
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            Start a Project
          </div>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s shape your space.
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: 'var(--fg-muted)',
              lineHeight: 1.8,
              maxWidth: '480px',
              margin: '0 auto 3rem',
            }}
          >
            Whether you&apos;re building a home, a workplace, or a hospitality experience —
            we&apos;d love to hear about your vision.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
