'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

type Category = 'all' | 'residential' | 'commercial';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
  ];

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
        ref={headerRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            Our Work
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
            Selected{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              Projects
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: 'var(--fg-muted)',
              lineHeight: 1.8,
              maxWidth: '520px',
            }}
          >
            A curated selection of residential and commercial interiors designed across
            Accra and beyond — each one a considered response to its client and context.
          </p>
        </motion.div>
      </section>

      {/* ─────────────── FILTERS ─────────────── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          paddingBottom: '3.5rem',
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}
      >
        {filters.map((f) => (
          <button
            key={f.value}
            id={`filter-${f.value}`}
            onClick={() => setActiveFilter(f.value)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.625rem 1.5rem',
              border: '1px solid',
              borderColor: activeFilter === f.value ? 'var(--fg)' : 'var(--border)',
              background: activeFilter === f.value ? 'var(--fg)' : 'transparent',
              color: activeFilter === f.value ? 'var(--white)' : 'var(--fg-muted)',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ─────────────── PROJECT GRID ─────────────── */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          paddingBottom: '7rem',
        }}
      >
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-8"
        >
          {filtered.map((project, i) => {
            const mdColSpan = [
              'md:col-span-7 md:mt-0',
              'md:col-span-5 md:mt-40',
              'md:col-span-5 md:mt-0',
              'md:col-span-6 md:col-start-7 md:-mt-32',
              'md:col-span-8 md:col-start-3 md:mt-12',
            ];
            const colClass = mdColSpan[i % 5] || 'md:col-span-6';

            return (
              <motion.div layout key={project.slug} className={colClass}>
                <ProjectCard project={project} index={i} />
              </motion.div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 0',
              color: 'var(--fg-muted)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
            }}
          >
            No projects found.
          </div>
        )}
      </section>
    </>
  );
}
