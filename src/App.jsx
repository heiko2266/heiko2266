import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Floating Theme Toggle (Dark/Light) */}
      <ThemeToggle />

      {/* Main Page Layout */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Gallery */}
        <Projects />

        {/* Experience Timeline */}
        <Experience />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
