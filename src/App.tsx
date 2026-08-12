import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Terminal } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: scrolled ? '15px 0' : '25px 0',
        background: scrolled ? 'rgba(11, 15, 25, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>
            <Terminal size={24} color="var(--accent-cyan)" />
            <span>chamakov</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>01. About</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>02. Experience</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>03. Projects</a>
            <a href="#contact" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>04. Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '30px 0', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', borderTop: '1px solid var(--glass-border)' }}>
        <p>Built with React & Vite.</p>
        <p style={{ marginTop: '5px' }}>© {new Date().getFullYear()} chamakov. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
