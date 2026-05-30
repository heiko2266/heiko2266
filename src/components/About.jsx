import React from 'react';
import { Award, Briefcase, Smile } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Award size={24} style={{ color: '#6366f1' }} />, title: "Pengalaman", value: "3+ Tahun", desc: "Pengembangan Web" },
    { icon: <Briefcase size={24} style={{ color: '#a855f7' }} />, title: "Project Selesai", value: "30+", desc: "Aplikasi Web & Mobile" },
    { icon: <Smile size={24} style={{ color: '#ec4899' }} />, title: "Kepuasan Klien", value: "100%", desc: "Ulasan Positif" }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="bg-glow-spot" style={{ top: '30%', right: '10%' }} />

      <div className="container">
        <h2 className="section-title">Tentang <span>Saya</span></h2>
        <p className="section-subtitle">
          Berikut adalah sedikit cerita tentang latar belakang saya, apa yang saya lakukan, dan bagaimana saya bekerja.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '4fr 6fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
          {/* Left profile/graphic box */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              style={{
                width: '300px',
                height: '380px',
                borderRadius: '24px',
                background: 'var(--accent-grad)',
                padding: '8px',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative'
              }}
              className="about-image-card"
            >
              {/* Inner content designed to look like a high-end avatar display */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '18px',
                  background: 'var(--bg-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Floating circles inside */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.2)', filter: 'blur(10px)' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.2)', filter: 'blur(15px)' }} />

                {/* Avatar Initial Circle */}
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'var(--accent-grad)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
                    border: '4px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  HPA
                </div>
                
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>Hafis Prawira Anggraini</h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', fontFamily: 'monospace' }}>@hafizprawira75</p>

                {/* Code badge overlay */}
                <span className="badge" style={{ fontSize: '0.8rem' }}>&lt;Code is Life /&gt;</span>
              </div>
            </div>
          </div>

          {/* Right Text details & Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Programmer & 3D Modeler Kreatif</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Saya adalah seorang programmer dan 3D modeler yang berdedikasi dari Banjarmasin. Saya memiliki keahlian dalam pengembangan web menggunakan PHP Laravel dan React, serta membuat model 3D yang imersif termasuk proyek AR. Saya selalu berupaya menghasilkan solusi digital yang inovatif dan berkualitas tinggi.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Dengan pengalaman dalam pengembangan aplikasi augmented reality dan website promosi bisnis, saya siap membantu mewujudkan ide-ide kreatif Anda menjadi produk digital yang memukau dan fungsional.
              </p>
            </div>

            {/* Stats Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {stat.icon}
                  </div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{stat.value}</h4>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{stat.title}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
