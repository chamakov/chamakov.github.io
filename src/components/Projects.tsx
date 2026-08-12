import { ExternalLink, FolderGit2 } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'PomoFlow',
      description: 'A productivity application that combines the Pomodoro Technique with workflow management to help you stay focused and get things done.',
      tech: ['React', 'TypeScript', 'Productivity'],
      github: 'https://github.com/chamakov/PomoFlow'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem', marginRight: '10px' }}>03.</span>
        Some Things I've Built
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <FolderGit2 size={40} color="var(--accent-cyan)" />
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <GithubIcon size={20} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px' }}>
              {project.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', flexGrow: 1, marginBottom: '25px' }}>
              {project.description}
            </p>
            
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', listStyle: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <a href="https://github.com/chamakov?tab=repositories" target="_blank" rel="noreferrer" className="btn-primary">
          View all on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
