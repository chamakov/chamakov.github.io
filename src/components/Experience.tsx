import { Briefcase, Activity, Code2, Server } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'DevOps Specialist & AI Integrator',
      company: 'Softtek',
      date: 'Present',
      description: 'Leading cloud infrastructure automation with Terraform across AWS, GCP, and Azure. Managing GitOps workflows using K8s, Argo, Kargo, and GitHub Actions. Spearheading the integration of Generative AI solutions with AWS Bedrock and Anthropic Claude.',
      icon: <Server size={24} color="var(--accent-cyan)" />
    },
    {
      role: 'Senior IT Analyst',
      company: 'Grupo Flecha Amarilla',
      date: 'Aug 2016 - Oct 2022',
      description: 'Requirements gathering, design and development of diverse information systems, maintenance of existing software, and design of cloud-based solutions. Automated tasks using Python and designed and implemented an IVR-based payment gateway.',
      icon: <Code2 size={24} color="var(--accent-blue)" />
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem', marginRight: '10px' }}>02.</span>
        Where I've Worked
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', gap: '20px' }}>
            <div style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
              {exp.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '5px' }}>
                {exp.role} <span style={{ color: 'var(--accent-cyan)' }}>@ {exp.company}</span>
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>
                {exp.date}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
