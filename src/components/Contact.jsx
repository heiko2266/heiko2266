import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Github = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return 'Nama, Email, dan Pesan wajib diisi!';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Format email tidak valid!';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = validateForm();
    if (errMsg) {
      setError(errMsg);
      return;
    }

    setError('');
    setLoading(true);

    // Simulate sending message to backend
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfos = [
    { icon: <Mail size={22} style={{ color: '#6366f1' }} />, label: "Email", value: "developer@example.com", link: "mailto:developer@example.com" },
    { icon: <Linkedin size={22} style={{ color: '#a855f7' }} />, label: "LinkedIn", value: "linkedin.com/in/ahmadfauzi", link: "https://linkedin.com" },
    { icon: <Github size={22} style={{ color: '#ec4899' }} />, label: "GitHub", value: "github.com/ahmadfauzi", link: "https://github.com" },
    { icon: <MapPin size={22} style={{ color: '#f59e0b' }} />, label: "Lokasi", value: "Jakarta, Indonesia", link: null }
  ];

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="bg-glow-spot" style={{ top: '25%', left: '10%' }} />

      <div className="container">
        <h2 className="section-title">Hubungi <span>Saya</span></h2>
        <p className="section-subtitle">
          Punya proyek menarik, pertanyaan, atau sekadar ingin menyapa? Hubungi saya kapan saja!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '4fr 6fr', gap: '3rem' }} className="contact-grid">
          {/* Left Column: Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Mari Bekerja Sama!</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Silakan isi formulir kontak yang tersedia, atau kirimkan email langsung. Saya biasanya merespon dalam waktu kurang dari 24 jam.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactInfos.map((info, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px'
                  }}
                >
                  <div
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {info.label}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', transition: 'var(--transition-fast)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {submitted ? (
              <div
                className="glass-card"
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px solid var(--border-color)',
                  height: '100%',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--accent-color)',
                    marginBottom: '1rem'
                  }}
                >
                  <MessageSquare size={30} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Pesan Terkirim!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                  Terima kasih telah menghubungi saya! Pesan Anda telah diterima dan saya akan segera menghubungi Anda kembali.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '1.5rem', padding: '0.6rem 1.5rem' }}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Kirim Pesan</h3>

                {error && (
                  <div
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#ef4444',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  >
                    {error}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Nama Anda *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ahmad Fauzi"
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        transition: 'var(--transition-fast)'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Anda *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ahmad@fauzi.dev"
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        transition: 'var(--transition-fast)'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Kerjasama Proyek Web"
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Pesan Anda *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tulis pesan Anda di sini..."
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '0.9rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    width: '100%',
                    marginTop: '0.5rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Mengirim...' : 'Kirim Pesan'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 576px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
