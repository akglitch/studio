'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
        <div className="project-card" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          {/* Overlay */}
          <div className="project-card-overlay">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-light)',
                marginBottom: '0.5rem',
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
                  fontSize: '1.375rem',
                  fontWeight: 400,
                  color: '#FDFAF7',
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid rgba(253,250,247,0.4)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginLeft: '1rem',
                }}
              >
                <ArrowUpRight size={14} color="#FDFAF7" />
              </div>
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div
          style={{
            padding: '1rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--fg)',
                marginBottom: '0.2rem',
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
                letterSpacing: '0.05em',
              }}
            >
              {project.location}
            </div>
          </div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              padding: '0.25rem 0.625rem',
              borderRadius: '20px',
            }}
          >
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
