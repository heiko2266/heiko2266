import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: "work",
      role: "Senior Frontend Developer",
      company: "Creative Tech Studio",
      period: "2024 - Sekarang",
      desc: "Memimpin tim frontend dalam pembuatan aplikasi SaaS berbasis AI. Mengoptimalkan performa React hingga 40% dan merancang library komponen UI bersama tim desain.",
      icon: <Briefcase size={20} />
    },
    {
      type: "work",
      role: "Fullstack Web Developer",
      company: "Solusi Digital Indonesia",
      period: "2022 - 2024",
      desc: "Membangun dan memelihara aplikasi web e-learning menggunakan Laravel dan React JS. Merancang arsitektur API RESTful dan mengintegrasikan gateway pembayaran pihak ketiga.",
      icon: <Briefcase size={20} />
    },
    {
      type: "work",
      role: "Junior Web Developer",
      company: "Startup Maju Bersama",
      period: "2021 - 2022",
      desc: "Mengembangkan halaman arahan promosi responsif dan modul e-commerce sederhana menggunakan PHP, HTML5, dan Javascript murni.",
      icon: <Briefcase size={20} />
    },
    {
      type: "education",
      role: "Sarjana Teknik Informatika (S1)",
      company: "Universitas Teknologi Terkemuka",
      period: "2017 - 2021",
      desc: "Lulus dengan IPK 3.80/4.00. Aktif dalam laboratorium riset pengembangan web dan memenangkan kompetisi peretasan (hackathon) tingkat nasional.",
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="bg-glow-spot" style={{ bottom: '15%', left: '10%' }} />

      <div className="container">
        <h2 className="section-title">Riwayat <span>Saya</span></h2>
        <p className="section-subtitle">
          Perjalanan karir profesional dan latar belakang akademis saya dari tahun ke tahun.
        </p>

        {/* Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '1rem 0' }}>
          {/* Vertical central line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '30px',
              width: '4px',
              background: 'linear-gradient(to bottom, #6366f1, #a855f7, #ec4899)',
              borderRadius: '2px',
              opacity: 0.8
            }}
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  position: 'relative',
                  paddingLeft: '75px',
                  alignItems: 'flex-start'
                }}
              >
                {/* Timeline node icon */}
                <div
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '2px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '3px solid var(--accent-color)',
                    color: 'var(--accent-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px var(--accent-glow-strong)',
                    zIndex: 2
                  }}
                >
                  {exp.icon}
                </div>

                {/* Timeline Card */}
                <div
                  className="glass-card"
                  style={{
                    width: '100%',
                    padding: '1.75rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-color)', marginTop: '0.15rem' }}>{exp.company}</h4>
                    </div>
                    {/* Period badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        background: 'var(--border-color)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '50px',
                        border: '1px solid var(--border-hover)'
                      }}
                    >
                      <Calendar size={14} />
                      <span style={{ fontWeight: 500 }}>{exp.period}</span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
