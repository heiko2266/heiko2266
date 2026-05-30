import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} style={{ color: '#6366f1' }} />,
      skills: [
        { name: "React JS", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server size={24} style={{ color: '#a855f7' }} />,
      skills: [
        { name: "Node.js & Express", level: 80 },
        { name: "PHP & Laravel", level: 85 },
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench size={24} style={{ color: '#ec4899' }} />,
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Figma (UI/UX)", level: 75 },
        { name: "Docker", level: 65 },
        { name: "Postman", level: 85 },
        { name: "Linux / VPS", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="bg-glow-spot" style={{ bottom: '10%', left: '10%' }} />

      <div className="container">
        <h2 className="section-title">Keahlian <span>Saya</span></h2>
        <p className="section-subtitle">
          Kumpulan teknologi dan alat pemrograman yang sering saya gunakan untuk menghidupkan proyek digital.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="skills-grid">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="glass-card"
              style={{
                padding: '2rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <div
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-hover)'
                  }}
                >
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{category.title}</h3>
              </div>

              {/* Skills list inside category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{skill.level}%</span>
                    </div>
                    {/* Skill progress bar container */}
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        background: 'var(--border-color)',
                        borderRadius: '10px',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Progress Fill */}
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'var(--accent-grad)',
                          borderRadius: '10px',
                          boxShadow: '0 0 10px var(--accent-glow-strong)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
