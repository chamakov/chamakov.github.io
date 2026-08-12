import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="animate-fade-in" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '1.1rem' }}>
          Hi, my name is
        </div>
        <h1 className="animate-fade-in delay-100" style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
          Juan Ortega.
        </h1>
        <h2 className="animate-fade-in delay-200" style={{ fontSize: 'clamp(30px, 6vw, 60px)', fontWeight: 600, color: 'var(--text-secondary)', lineHeight: 1.2 }}>
          I build <span className="text-gradient">cloud solutions</span> and bridge systems.
        </h2>
        <p className="animate-fade-in delay-300" style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '20px' }}>
          I'm a Developer with over 10 years of experience, a background that naturally evolved my career into becoming a DevOps Specialist and Cloud Architect. I specialize in building robust infrastructure, seamless integrations, and exceptional digital experiences.
        </p>
        
        <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          <a href="#projects" className="btn-primary">
            Check out my work <ArrowRight size={18} />
          </a>
          <a href="https://github.com/chamakov" target="_blank" rel="noreferrer" className="btn-primary" style={{ borderColor: 'var(--glass-border)', color: 'var(--text-primary)' }}>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
