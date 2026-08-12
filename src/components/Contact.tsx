import { Mail, MessageSquare } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '1rem', marginBottom: '20px' }}>
        04. What's Next?
      </h2>
      <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
        Get In Touch
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '50px' }}>
        Whether you have a question about Cloud Architecture, DevOps, or just want to say hi, I'll try my best to get back to you! I'm always open to discussing new projects, creative ideas, or opportunities.
      </p>
      
      <a href="mailto:jfoa92@icloud.com" className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem', marginBottom: '60px' }}>
        Say Hello <Mail size={20} />
      </a>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
        <a href="https://github.com/chamakov" target="_blank" rel="noreferrer" title="GitHub" style={{ color: 'var(--text-secondary)', transition: 'all 0.2s transform 0.2s' }} onMouseOver={e => {e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'}}>
          <GithubIcon size={28} />
        </a>
        <a href="https://www.linkedin.com/in/juan-francisco-ortega-aguilar-044099148/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: 'var(--text-secondary)', transition: 'all 0.2s transform 0.2s' }} onMouseOver={e => {e.currentTarget.style.color = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'}}>
          <LinkedinIcon size={28} />
        </a>
        <a href="#" title="Discord: chamakov" style={{ color: 'var(--text-secondary)', transition: 'all 0.2s transform 0.2s' }} onMouseOver={e => {e.currentTarget.style.color = 'var(--accent-purple)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'}}>
          <MessageSquare size={28} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
