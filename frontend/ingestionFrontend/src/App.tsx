import './App.css'
import photoUrl from './assets/PhotoForResume.jpg'
import resumeUrl from './assets/Elijah_Early_Resume_PDF.pdf'
 
const strengths = [
  'TS/SCI clearance — eligible for roles most candidates cannot fill',
  'CompTIA Security+ and CySA+ certified',
  'Signals monitoring and adversary detection (U.S. Army 17E)',
  'AWS & GCP cloud security, IAM, and infrastructure-as-code',
  'Log analysis, SIEM-style pipelines, and event correlation',
  'Software engineering precision applied to detection and response',
]
 
const focusAreas = [
  {
    title: 'Threat Detection & Analysis',
    items: [
      'Trained in signals monitoring, adversary detection, and SCIF-based operations',
      'Pattern recognition across communications and event streams',
      'Translates noisy telemetry into clear, actionable findings',
    ],
  },
  {
    title: 'Cloud Security & Identity',
    items: [
      'AWS IAM, VPCs, CloudFormation, SSM, WorkSpaces, AppStream 2.0, Bedrock',
      'GCP BigQuery and Spanner, Vertex AI, Firestore',
      'Secure remote desktop architecture with domain join, Simple AD, and SSO',
    ],
  },
  {
    title: 'SIEM & Data Pipelines',
    items: [
      'Amazon OpenSearch ingestion, embedding pipelines, and semantic matching',
      'Event-driven pipelines with SNS/SQS, Pub/Sub, and deduplication logic',
      'Log normalization and enrichment patterns transferable to SOC tooling',
    ],
  },
  {
    title: 'Engineering Edge',
    items: [
      'Python, TypeScript, FastAPI, React, Node.js, Docker',
      'CI/CD with GitHub Actions, GitLab, Jenkins, CloudFormation, Terraform',
      'Comfortable bridging detection engineers, developers, and SOC analysts',
    ],
  },
]
 
const experience = [
  {
    role: 'Electronic Warfare Specialist (17E)',
    org: 'U.S. Army National Guard',
    dates: 'Jan 2025 – Present  ·  AIT: Nov 2025 – Present',
    meta: 'TS/SCI Cleared · Signals intelligence · OPSEC · SCIF operations',
    bullets: [
      'Trained in electromagnetic spectrum operations, signals intelligence, and adversary detection — directly applicable to network traffic analysis and threat hunting.',
      'Identified signal patterns and analyzed communications activity to determine potential hostile or unauthorized behavior.',
      'Applied OPSEC principles and classified information handling procedures across SCIF-based mission operations.',
      'Completed 17E AIT covering basic electronics, networking fundamentals, military frequency bands, and field intelligence operations.',
    ],
  },
  {
    role: 'Full Stack Software / DevOps Engineer',
    org: 'HiveTek',
    dates: 'May 2025 – Sep 2025',
    meta: 'AWS · Bedrock · OpenSearch · WorkSpaces · CloudFormation · Terraform',
    bullets: [
      'Automated Data Validation Pipeline — ingested and validated 50K+ unstructured business records using Amazon Bedrock (Claude) and the Google Places API; deduplicated entries, flagged suspicious inputs, and applied data-integrity rules analogous to IOC enrichment and threat triage.',
      'AWS Sherpa (RAG / OpenSearch) — designed a document ingestion pipeline that chunked and embedded large documents into OpenSearch for AI-driven contextual retrieval, transferable to SIEM log enrichment and threat intelligence platforms.',
      'Secure Virtual Desktop Platform — deployed an AWS WorkSpaces proof-of-concept (IaC via CloudFormation and SSM) with domain-joined Windows Server, Simple AD, and SSO, demonstrating secure remote access and endpoint controls.',
      'Authored reusable CloudFormation modules for AppStream 2.0, VPC configuration, and automated directory joins — reducing environment spin-up from days to hours.',
    ],
  },
  {
    role: 'Full Stack Software Engineer',
    org: 'Intelagen',
    dates: 'Dec 2024 – Jun 2025',
    meta: 'GCP · Vertex AI · FastAPI · BigQuery · Spanner · high-volume ingestion',
    bullets: [
      'NLP Orchestration System — built an orchestrator mapping natural language queries to backend services using FastAPI and Vertex AI (Claude Sonnet), achieving sub-450ms response at 1,000+ rps under operational load.',
      'High-Volume Data Ingestion — engineered event-driven pipelines streaming on-chain data into BigQuery and Cloud Spanner with semantic deduplication and keyword tracking, transferable to log normalization and SIEM ingestion workflows.',
      'LLM Routing & Orchestration — developed a TypeScript routing layer directing 12+ query types to specialized LLM endpoints, analogous to alert triage routing and playbook automation.',
      'Implemented Firestore-backed dashboards surfacing real-time analytics to 5,000+ daily active users — experience with live data visualization and monitoring interfaces.',
    ],
  },
  {
    role: 'Firefighter',
    org: 'City of Newark, Texas',
    dates: 'May 2020 – Aug 2022',
    meta: 'Incident response · high-pressure decision-making · team coordination',
    bullets: [
      'Responded to emergencies in a high-pressure, resource-constrained environment requiring rapid decision-making, composure, and team coordination — qualities directly applicable to SOC incident response.',
    ],
  },
]
 
const projects = [
  {
    title: 'Automated Data Validation Pipeline',
    description:
      'Validated 50K+ unstructured business records using Amazon Bedrock (Claude) with the Google Places API. Deduplicated entries, flagged suspicious inputs, and applied data-integrity rules analogous to IOC enrichment and threat triage.',
    tags: ['AWS Bedrock', 'Lambda', 'Python', 'Data Integrity'],
  },
  {
    title: 'AWS Sherpa — RAG / OpenSearch',
    description:
      'Designed a document ingestion pipeline that chunked and embedded large documents into Amazon OpenSearch for AI-driven contextual retrieval. Patterns directly transferable to SIEM log enrichment and threat intelligence platforms.',
    tags: ['OpenSearch', 'RAG', 'Embeddings', 'SIEM Patterns'],
  },
  {
    title: 'Secure Virtual Desktop Platform',
    description:
      'AWS WorkSpaces proof-of-concept built with CloudFormation and SSM, deploying domain-joined Windows Server with Simple AD and SSO — a working demonstration of secure remote access architecture and endpoint security controls.',
    tags: ['AWS WorkSpaces', 'CloudFormation', 'Simple AD', 'SSO'],
  },
  {
    title: 'NLP Orchestration System',
    description:
      'FastAPI + Vertex AI orchestrator mapping natural language queries to backend services with sub-450ms response at 1,000+ rps. Demonstrates the ability to build scalable, analyst-facing tooling under operational load.',
    tags: ['FastAPI', 'Vertex AI', 'Python', 'Low-Latency'],
  },
  {
    title: 'High-Volume Event Pipelines',
    description:
      'Event-driven ingestion streaming on-chain data into BigQuery and Cloud Spanner with semantic deduplication and keyword tracking — patterns that map cleanly to log normalization, correlation, and SIEM ingestion.',
    tags: ['GCP', 'BigQuery', 'Pub/Sub', 'Deduplication'],
  },
  {
    title: 'LLM Routing & Orchestration',
    description:
      'TypeScript routing layer directing 12+ query types to specialized LLM endpoints, enabling modular experimentation — analogous to alert triage routing and playbook automation.',
    tags: ['TypeScript', 'LLM Routing', 'Automation', 'Playbooks'],
  },
]
 
const education = [
  {
    org: 'U.S. Army',
    program: '17E Electronic Warfare AIT',
    dates: 'Nov 2025 – Apr 2026',
    detail:
      'Coursework: Basic Electronics, Networking, Antennas & Military Bands, Field Intelligence, Physics.',
  },
  {
    org: 'General Assembly',
    program: 'Software Engineering Immersive — Certificate of Completion',
    dates: 'Jan 2023 – Apr 2023',
    detail:
      'Full-stack curriculum: React, JavaScript, Python, Django, REST/GraphQL, PostgreSQL, MongoDB.',
  },
]
 
const certifications = [
  'CompTIA Security+',
  'CompTIA CySA+',
  'Software Engineering Immersive — General Assembly',
]
 
function App() {
  return (
    <main className="portfolio">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SOC Analyst · Cybersecurity Analyst · TS/SCI · Security+ · CySA+</p>
          <h1>
            I bring a software engineer’s precision to threat detection,
            log analysis, and incident response.
          </h1>
          <p className="intro">
            Security-focused analyst with an active TS/SCI clearance, CompTIA Security+
            and CySA+ certifications, and hands-on experience building data pipelines,
            cloud infrastructure, and AI-driven systems on AWS and GCP. Trained as a
            U.S. Army 17E Electronic Warfare Specialist in signals monitoring,
            adversary detection, and SCIF-based operations — with the clearance to
            work where most entry-level candidates cannot.
          </p>
 
          <div className="hero-highlights">
            <span>TS/SCI Cleared</span>
            <span>Security+</span>
            <span>CySA+</span>
            <span>U.S. Army 17E</span>
            <span>AWS &amp; GCP</span>
          </div>
 
          <div className="hero-actions">
            <a
              className="button primary"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              className="button secondary"
              href="mailto:elijah.early@gmail.com"
            >
              Email Me
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/elijah-early/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <img src={photoUrl} alt="Elijah Early" className="hero-photo" />
      </header>
 
      <section className="section summary">
        <div className="section-header">
          <span className="section-tag">Why me</span>
          <h2>A cleared analyst with a builder’s toolkit</h2>
        </div>
        <p>
          Most entry-level candidates understand security theory. I pair that
          mindset with an active TS/SCI clearance, two CompTIA certifications,
          and production experience building cloud infrastructure, log and
          event pipelines, and AI-driven systems. I can read logs, follow
          application behavior, investigate access issues, communicate with
          developers, and contribute to practical remediation from day one.
        </p>
 
        <ul className="pill-list">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
 
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Focus</span>
          <h2>What I bring to a SOC or cybersecurity analyst role</h2>
        </div>
 
        <div className="grid-list">
          {focusAreas.map((area) => (
            <article className="card" key={area.title}>
              <h3>{area.title}</h3>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
 
      <section className="section experience">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2>Professional background</h2>
        </div>
 
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.role}-${item.org}`}>
              <h3>
                {item.role} <span>@ {item.org}</span>
              </h3>
              <p className="meta">
                {item.dates}
                <br />
                {item.meta}
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
 
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2>Selected work mapped to security operations</h2>
        </div>
 
        <div className="grid-list">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="mini-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
 
      <section className="section grid-list">
        <article className="card">
          <h3>Tools &amp; technologies</h3>
          <ul>
            <li>AWS: IAM, VPC, Lambda, CloudFormation, SSM, WorkSpaces, AppStream 2.0, Bedrock, OpenSearch, Glue, Athena, S3</li>
            <li>GCP: BigQuery, Cloud Spanner, Firestore, Pub/Sub, Vertex AI</li>
            <li>IaC &amp; DevOps: Terraform, CloudFormation, GitHub Actions, GitLab, Jenkins, Docker</li>
            <li>Languages &amp; frameworks: Python, TypeScript, FastAPI, React, Node.js, REST/GraphQL</li>
            <li>Security &amp; analysis: SIEM-style pipelines, log analysis, IAM, OPSEC, SCIF operations</li>
          </ul>
        </article>
 
        <article className="card">
          <h3>Certifications</h3>
          <p style={{ marginBottom: 14 }}>Certifications</p>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </article>
      </section>
 
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2>Education &amp; training</h2>
        </div>
 
        <div className="grid-list">
          {education.map((item) => (
            <article className="card" key={`${item.org}-${item.program}`}>
              <h3>
                {item.program} <span style={{ color: 'var(--accent)', fontWeight: 600 }}>@ {item.org}</span>
              </h3>
              <p className="meta" style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: 12 }}>
                {item.dates}
              </p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
 
      <section className="section contact">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Let’s connect</h2>
        </div>
        <p>
          I’m looking for SOC and cybersecurity analyst opportunities where I
          can apply my clearance, certifications, and cloud + engineering
          background to defend systems, investigate incidents, and improve
          detection and response.
        </p>
 
        <div className="contact-list">
          <a href="mailto:elijah.early@gmail.com">elijah.early@gmail.com</a>
          <a href="tel:8172336608">817.233.6608</a>
          <a href="https://github.com/eearly01" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elijah-early/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}
 
export default App