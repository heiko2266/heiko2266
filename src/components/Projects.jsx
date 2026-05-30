import React, { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const Github = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('semua');

  const categories = [
    { id: 'semua', label: 'Semua' },
    { id: 'ar', label: 'AR / 3D' },
    { id: 'web', label: 'Web App' }
  ];

  const projectsData = [
    {
      title: "AR 3D Pertumbuhan Tanaman",
      desc: "Aplikasi Augmented Reality (AR) yang menampilkan simulasi 3D pertumbuhan tanaman secara interaktif. Pengguna dapat melihat proses tumbuh tanaman dalam dunia nyata menggunakan kamera perangkat mereka.",
      tech: ["3D Modeling", "Augmented Reality", "Unity", "ARCore"],
      category: "ar",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Oma Risol Banjarmasin",
      desc: "Website promosi untuk usaha kuliner Oma Risol Banjarmasin. Menampilkan menu lengkap, informasi kontak, lokasi, dan sistem pemesanan online yang memudahkan pelanggan memesan produk.",
      tech: ["PHP Laravel", "MySQL", "React", "CSS3"],
      category: "web",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  const filteredProjects = activeFilter === 'semua'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="bg-glow-spot" style={{ top: '20%', right: '15%' }} />

      <div className="container">
        <h2 className="section-title">Project <span>Unggulan</span></h2>
        <p className="section-subtitle">
          Beberapa proyek terbaik yang telah saya selesaikan baru-baru ini. Menyatukan teknologi terkini dengan desain elegan.
        </p>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '50px',
                border: activeFilter === cat.id ? '1px solid transparent' : '1px solid var(--border-color)',
                background: activeFilter === cat.id ? 'var(--accent-grad)' : 'transparent',
                color: activeFilter === cat.id ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: activeFilter === cat.id ? '0 4px 15px var(--accent-glow-strong)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--text-primary)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '1.75rem',
                border: '1px solid var(--border-color)',
                position: 'relative'
              }}
            >
              {/* Card Top Icons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-color)', background: 'var(--accent-glow)', padding: '0.5rem', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                  <Folder size={22} />
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--text-secondary)', transition: 'var(--transition-fast)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--text-secondary)', transition: 'var(--transition-fast)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Title & Desc */}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                {project.desc}
              </p>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tech.map((techItem, techIdx) => (
                  <span
                    key={techIdx}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: 'var(--text-secondary)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
