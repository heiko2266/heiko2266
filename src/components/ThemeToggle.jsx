import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'var(--accent-grad)',
        color: '#ffffff',
        border: 'none',
        boxShadow: '0 4px 20px var(--accent-glow-strong)',
        transition: 'var(--transition-smooth)',
      }}
      className="theme-toggle-btn animate-float"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0px)';
      }}
    >
      {theme === 'dark' ? (
        <Sun size={24} style={{ transition: 'var(--transition-fast)' }} />
      ) : (
        <Moon size={24} style={{ transition: 'var(--transition-fast)' }} />
      )}
    </button>
  );
}
