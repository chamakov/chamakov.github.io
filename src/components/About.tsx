import { Terminal, Code, Cloud, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Terminal size={20} color="var(--accent-cyan)" />, text: 'Python & Golang' },
    { icon: <Cloud size={20} color="var(--accent-blue)" />, text: 'AWS, GCP & Azure' },
    { icon: <Cpu size={20} color="var(--accent-purple)" />, text: 'GenAI & Claude' },
    { icon: <Code size={20} color="var(--accent-cyan)" />, text: 'Terraform & GitHub Actions' },
    { icon: <Terminal size={20} color="var(--accent-blue)" />, text: 'K8s, Argo & Kargo' },
    { icon: <Code size={20} color="var(--accent-purple)" />, text: 'Delphi & C#' },
  ];

  return (
    <section id="about" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem', marginRight: '10px' }}>01.</span>
        About Me
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 3fr) 2fr', gap: '50px', alignItems: 'center' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>
            Hello! My name is Juan and I enjoy creating things that live on the internet and in the cloud. With <strong>over 10 years of experience</strong> as a Developer, my journey started building desktop tools with <strong>Delphi</strong>, which eventually evolved and led me to the fascinating world of <strong>Cloud Architecture and DevOps</strong>.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working as a <strong>DevOps Specialist at Softtek</strong>. My main focus these days is building scalable, robust infrastructure using <strong>Terraform</strong> and integrating cutting-edge <strong>AI solutions</strong>. I am currently working heavily with <strong>AWS Bedrock, Claude, and various GenAI topics</strong> to automate workflows and create intelligent systems.
          </p>
          <p>
            Outside of my professional work, I'm a huge <strong>Pokémon enthusiast</strong>. I'm currently building various solutions tailored to this topic, including event management and attendee management systems!
          </p>
          <p>
            I also have a strong affinity for <strong>Infrastructure as Code (IaC)</strong> and consider myself an Alexa Enthusiast. Here are a few technologies I've been working with recently:
          </p>
          
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', listStyle: 'none', marginTop: '10px' }}>
            {skills.map((skill, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                {skill.icon}
                {skill.text}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
          {/* Decorative code block representation */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', width: '100%', overflowX: 'hidden' }}>
            <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>Juan</span> <span style={{ color: '#56b6c2' }}>=</span> {'{'} <br/>
            &nbsp;&nbsp;pronouns: <span style={{ color: '#98c379' }}>'He'</span> | <span style={{ color: '#98c379' }}>'Him'</span>, <br/>
            &nbsp;&nbsp;role: <span style={{ color: '#98c379' }}>'DevOps Specialist'</span>, <br/>
            &nbsp;&nbsp;company: <span style={{ color: '#98c379' }}>'Softtek'</span>, <br/>
            &nbsp;&nbsp;passions: [<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Terraform & GitOps'</span>, <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'K8s, Argo & Kargo'</span>, <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Generative AI'</span>, <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'Pokémon Ecosystems'</span><br/>
            &nbsp;&nbsp;]<br/>
            {'}'};
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
