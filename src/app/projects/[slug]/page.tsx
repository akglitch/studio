import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { ArrowLeft, MapPin, Calendar, Maximize2, Tag } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter(
    (p) => p.slug !== slug && p.category === project.category
  ).slice(0, 2);

  return (
    <>
      {/* ─── Hero ─── */}
      <section
        style={{
          position: 'relative',
          height: '85svh',
          minHeight: '560px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(26,26,24,0.75) 0%, rgba(26,26,24,0.1) 60%, transparent 100%)',
          }}
        />

        {/* Back button */}
        <div style={{ position: 'absolute', top: '7rem', left: '2.5rem', zIndex: 2 }}>
          <Link
            href="/projects"
            className="text-[rgba(253,250,247,0.75)] hover:text-[#FDFAF7] transition-colors duration-300"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
        </div>

        {/* Title */}
        <div
          style={{
            position: 'absolute',
            bottom: '3.5rem',
            left: '2.5rem',
            right: '2.5rem',
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent-light)',
              marginBottom: '0.75rem',
            }}
          >
            {project.category} Project
          </div>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 400,
              color: '#FDFAF7',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h1>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '6rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '5rem',
        }}
        className="project-detail-grid"
      >
        {/* Left: Description */}
        <div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.625rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--fg)',
              lineHeight: 1.55,
              marginBottom: '2.5rem',
              letterSpacing: '0.01em',
            }}
          >
            {project.description}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'var(--fg-muted)',
            }}
          >
            {project.longDescription}
          </p>
        </div>

        {/* Right: Meta */}
        <div
          style={{
            background: 'var(--bg-dark)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            alignSelf: 'start',
            borderLeft: '3px solid var(--accent)',
          }}
        >
          {[
            {
              icon: <MapPin size={14} color="var(--accent)" />,
              label: 'Location',
              value: project.location,
            },
            {
              icon: <Calendar size={14} color="var(--accent)" />,
              label: 'Year',
              value: project.year,
            },
            {
              icon: <Maximize2 size={14} color="var(--accent)" />,
              label: 'Area',
              value: project.area,
            },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-muted)',
                }}
              >
                {icon} {label}
              </div>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.0625rem',
                  fontWeight: 400,
                  color: 'var(--fg)',
                }}
              >
                {value}
              </div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
                marginBottom: '0.75rem',
              }}
            >
              <Tag size={14} color="var(--accent)" /> Tags
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.625rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    padding: '0.2rem 0.625rem',
                    borderRadius: '20px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href="/contact" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
            Enquire About This Project
          </Link>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .project-detail-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          }
        `}</style>
      </section>

      {/* ─── Image Gallery ─── */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2.5rem 6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {project.images.map((src, i) => (
          <div
            key={i}
            style={{
              aspectRatio: i === 0 ? '4/3' : '3/4',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '2px',
            }}
            className="img-hover"
          >
            <Image
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </section>

      {/* ─── Related Projects ─── */}
      {related.length > 0 && (
        <section style={{ background: 'var(--bg-dark)', padding: '6rem 2.5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.875rem',
              }}
            >
              Continue Exploring
            </div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                fontWeight: 400,
                marginBottom: '3rem',
                letterSpacing: '-0.02em',
              }}
            >
              Related Projects
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {related.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
