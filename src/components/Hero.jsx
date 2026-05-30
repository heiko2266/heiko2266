import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

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


export default function Hero() {
  const words = ["React Developer", "Fullstack Engineer", "Creative Creator", "UI/UX Specialist"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullWord) {
          // Pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contact.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background glow effects */}
      <div className="bg-glow-spot" style={{ top: '20%', left: '10%' }} />
      <div className="bg-glow-spot" style={{ bottom: '20%', right: '10%', background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', zIndex: 2 }}>
        {/* Left side text contents */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span className="badge" style={{ marginBottom: '1rem' }}>Welcome to my universe</span>
            <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, fontWeight: 800 }}>
              Halo, Saya <span style={{ background: 'var(--accent-grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creative Coder</span>
            </h1>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: '3rem' }}>
              Saya seorang <span style={{ color: 'var(--accent-color)' }}>{currentText}</span>
              <span className="cursor" style={{ animation: 'blink 0.8s infinite', fontWeight: 300 }}>|</span>
            </h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px' }}>
            Membangun pengalaman web modern, berkinerja tinggi, dan menawan secara visual. Menggabungkan estetika premium dengan kode yang bersih dan terstruktur.
          </p>

          {/* Buttons and Social Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
            <a href="#contact" onClick={scrollToContact} className="btn-primary">
              Hubungi Saya <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn-secondary">
              Lihat Project <Download size={18} />
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Temukan saya di:</span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Github size={20} />, url: 'https://github.com' },
                { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
                { icon: <Mail size={20} />, url: 'mailto:developer@example.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right side floating IDE / graphics mockup */}
        <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-graphic">
          <div
            className="glass-card animate-float"
            style={{
              width: '100%',
              maxWidth: '460px',
              padding: '1.5rem',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden'
            }}
          >
            {/* Header circles */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '1rem', fontFamily: 'monospace' }}>Portfolio.jsx</span>
            </div>

            {/* Code simulation */}
            <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#80cbc4', lineHeight: 1.6 }}>
              <p><span style={{ color: '#c792ea' }}>const</span> <span style={{ color: '#82b1ff' }}>developer</span> = &#123;</p>
              <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#f07178' }}>nama</span>: <span style={{ color: '#c3e88d' }}>"Ahmad Fauzi"</span>,</p>
              <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#f07178' }}>peran</span>: <span style={{ color: '#c3e88d' }}>"Fullstack Developer"</span>,</p>
              <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#f07178' }}>keahlian</span>: [</p>
              <p style={{ paddingLeft: '3rem' }}><span style={{ color: '#c3e88d' }}>"React"</span>, <span style={{ color: '#c3e88d' }}>"Node.js"</span>, <span style={{ color: '#c3e88d' }}>"Laravel"</span></p>
              <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#89ddff' }}>]</span>,</p>
              <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#f07178' }}>sukaKopi</span>: <span style={{ color: '#f78c6c' }}>true</span>,</p>
              <p style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#f07178' }}>desainPremium</span>: <span style={{ color: '#f78c6c' }}>true</span></p>
              <p>&#125;;</p>
              <br />
              <p style={{ color: '#89ddff' }}><span style={{ color: '#c792ea' }}>function</span> <span style={{ color: '#82b1ff' }}>createAwesomeWeb</span>() &#123;</p>
              <p style={{ paddingLeft: '1.5rem', color: '#c792ea' }}>return <span style={{ color: '#80cbc4' }}>coding</span>.with(&#123; <span style={{ color: '#f07178' }}>passion</span>: <span style={{ color: '#f78c6c' }}>100</span> &#125;);</p>
              <p>&#125;</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .section {
            padding: 6rem 0 2rem 0;
          }
          .container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .container > div {
            align-items: center;
          }
          h1 {
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
            justify-content: center !important;
          }
          .hero-graphic {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
