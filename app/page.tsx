"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, BookOpen, BriefcaseBusiness, ChevronRight, Code2, Download, ExternalLink, Github, GraduationCap, LockKeyhole, Mail, Menu, Network, Phone, ShieldCheck, Terminal, Trophy, UserRound, X } from "lucide-react";

const linkedIn = "https://www.linkedin.com/in/sanvir-kaur-86968739b/";
const github = "https://github.com/14mSana";
const cyberWhatIf = "https://github.com/14mSana/cyber-what-if";
const tryHackMe = "https://tryhackme.com/p/sanvir";
const email = "sanvir8036@gmail.com";
const phone = "+919478613498";

const nav = ["Home", "About", "Skills", "Projects", "Training", "Certificates", "Achievements", "Education", "Contact"];

const skills: [string, string[]][] = [
  ["Languages", ["Python", "C", "C++", "JavaScript"]],
  ["Technologies", ["HTML", "CSS", "Bootstrap"]],
  ["Databases / Tools", ["MySQL", "Git", "GitHub", "Nmap", "Wireshark", "Gobuster", "Hydra", "Burp Suite"]],
  ["Cybersecurity", ["Networking Fundamentals", "Linux", "Log Analysis", "Security Monitoring", "Web Application Security"]],
  ["Soft Skills", ["Problem Solving", "Adaptability", "Time Management", "Communication", "Planning", "Leadership"]]
];

const certificates = [
  { title: "Cyber Security 101 Learning Path", issuer: "TryHackMe", date: "July 2026", image: "/images/certificates/cyber-security-101.jpeg", file: "/images/certificates/cyber-security-101.pdf" },
  { title: "Networking Basics", issuer: "Cisco Networking Academy", date: "January 2026", image: "/images/certificates/networking-basics.jpeg" },
  { title: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard", date: "February 2026", image: "/images/certificates/artificial-intelligence.jpeg" },
  { title: "Introduction to Python (CS105)", issuer: "Saylor Academy", date: "February 2026", image: "/images/certificates/introduction-to-python.jpeg", meta: "36 hours · Grade 95.26%" },
  { title: "Leadership Fundamentals", issuer: "EduTech Hub", date: "October 2025", image: "/images/certificates/leadership.jpeg" },
  { title: "Community Development Project", issuer: "Times Foundation × LPU", date: "July 2026", image: "/images/certificates/community-development.png" },
  { title: "QuizOff 2026: India’s Biggest AI Quiz", issuer: "CampusCrew / Unstop", date: "July 2026", image: "/images/certificates/quizoff-2026.png" },
  { title: "Hacker Holidays 2026 — The Byte Lotus", issuer: "TryHackMe", date: "July 27 – August 10, 2026", image: "/images/certificates/hacker-holidays-2026.png", meta: "Certificate issued August 12, 2026" }
];

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <header className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

function ProfileLinks({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "profile-links compact" : "profile-links"}>
    <a className="icon-button" href={linkedIn} target="_blank" rel="noreferrer" aria-label="Sanvir Kaur on LinkedIn"><BriefcaseBusiness size={18} /></a>
    <a className="icon-button" href={github} target="_blank" rel="noreferrer" aria-label="Sanvir Kaur on GitHub"><Github size={18} /></a>
    <a className="icon-button" href={tryHackMe} target="_blank" rel="noreferrer" aria-label="Sanvir Kaur on TryHackMe"><ShieldCheck size={18} /></a>
  </div>;
}

function CertificateModal({ cert, close }: { cert: typeof certificates[number]; close: () => void }) {
  return <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${cert.title} certificate`} onClick={close}>
    <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={close} aria-label="Close certificate"><X size={20} /></button>
      <div className="modal-image"><Image src={cert.image} alt={`${cert.title} certificate issued by ${cert.issuer}`} fill sizes="(max-width: 720px) 92vw, 850px" /></div>
      <div className="modal-info"><span className="eyebrow">{cert.issuer}</span><h3>{cert.title}</h3><p>{cert.date}{cert.meta ? ` · ${cert.meta}` : ""}</p>{cert.file && <a className="text-link" href={cert.file} target="_blank" rel="noreferrer">Open original PDF <ArrowUpRight size={15}/></a>}</div>
    </div>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [selected, setSelected] = useState<typeof certificates[number] | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id === "home" ? "Home" : entry.target.id[0].toUpperCase() + entry.target.id.slice(1)); }), { rootMargin: "-35% 0px -55%" });
    document.querySelectorAll("section[id]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const go = () => setMenuOpen(false);
  return <main>
    <nav className="nav-wrap" aria-label="Primary navigation">
      <a className="brand" href="#home" onClick={go}>SK<span>.</span></a>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>{nav.map(item => <a key={item} className={active === item ? "active" : ""} href={`#${item.toLowerCase()}`} onClick={go}>{item}</a>)}<a className="nav-contact" href="#contact" onClick={go}>Let&apos;s Connect <ChevronRight size={15}/></a></div>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </nav>

    <section id="home" className="hero section-shell">
      <div className="hero-copy"><p className="eyebrow"><span className="pulse"/> CYBERSECURITY &amp; TECHNOLOGY</p><h1>Sanvir<br/><em>Kaur.</em></h1><div className="hero-role">B.Tech. (Hons.) — CSE<br/><strong>Cyber Security &amp; Blockchain</strong></div><p className="hero-intro">Cybersecurity &amp; technology student building practical skills in security monitoring, networking, Linux, programming, and security analysis.</p><div className="hero-actions"><a className="button primary" href="#projects">View Projects <ArrowUpRight size={17}/></a><a className="button secondary" href="/documents/Sanvir_Kaur_CV.docx" download>View Resume <Download size={16}/></a></div><ProfileLinks /></div>
      <div className="hero-visual"><div className="portrait-frame"><Image src="/images/profile/sanvir-kaur.jpeg" alt="Sanvir Kaur" fill priority sizes="(max-width: 800px) 80vw, 430px" /></div><div className="image-label"><span>01</span><p>Student portfolio<br/>Punjab, India</p></div></div>
    </section>

    <section id="about" className="section-shell split-section"><div><SectionTitle eyebrow="ABOUT ME" title="Learning by building."/><p className="lead">I am a B.Tech. (Hons.) CSE student specializing in Cyber Security &amp; Blockchain at Lovely Professional University.</p><p>I am developing practical skills across cybersecurity, networking, Linux, programming, security monitoring, and web application security. I learn through hands-on projects, cybersecurity labs, practical challenges, and security-focused applications.</p></div><aside className="glass info-card"><UserRound/><dl><div><dt>Education</dt><dd>B.Tech. (Hons.) — CSE<br/>Cyber Security &amp; Blockchain</dd></div><div><dt>University</dt><dd>Lovely Professional University</dd></div><div><dt>Current CGPA</dt><dd>9.73</dd></div><div><dt>Location</dt><dd>Punjab, India</dd></div></dl></aside></section>

    <section id="skills" className="section-shell"><SectionTitle eyebrow="CAPABILITIES" title="An evolving technical foundation." copy="Focused on practical security learning alongside core engineering fundamentals."/><div className="skills-grid">{skills.map(([name, items], i) => <article className={`glass skill-group skill-${i}`} key={name}><span className="skill-number">0{i + 1}</span><h3>{name}</h3><div>{items.map(item => <span className="pill" key={item}>{item}</span>)}</div></article>)}</div></section>

    <section id="projects" className="section-shell"><SectionTitle eyebrow="SELECTED WORK" title="Projects with a security focus."/><div className="projects-grid">
      <article className="glass project-card"><div className="card-top"><span className="status ongoing">Ongoing</span><LockKeyhole size={20}/></div><h3>Personal SOC &amp;<br/>Security Monitoring Lab</h3><p>Building a hands-on Security Operations Center (SOC) environment to develop practical skills in security monitoring, network activity analysis, log analysis, and threat detection.</p><ul><li>Python-based workflow to parse events and identify potentially suspicious activity</li><li>Expanding Linux and networking workflows while exploring Azure integration</li></ul><div className="tech-list"><span>Python</span><span>Linux</span><span>Networking</span><span>Git/GitHub</span><span>Microsoft Azure</span></div><div className="private-note"><LockKeyhole size={14}/> Private repository · Available on request</div></article>
      <article className="glass project-card featured"><div className="card-top"><span className="status completed">Completed · Aug 2026</span><Code2 size={20}/></div><p className="project-kicker">CYBERSECURITY RISK SIMULATION TOOL</p><h3>CyberWhat-If<br/>Engine</h3><p>Developed a rule-based cybersecurity risk simulation application using Python and Streamlit that evaluates how enabling or disabling security controls affects individual threats and overall security risk.</p><ul><li>Weighted risk calculations and threat-level impact analysis</li><li>Before/after comparisons with rule-based security explanations</li></ul><div className="tech-list"><span>Python</span><span>Streamlit</span></div><a className="button secondary" href={cyberWhatIf} target="_blank" rel="noreferrer"><Github size={16}/> View on GitHub <ExternalLink size={15}/></a></article>
    </div></section>

    <section id="training" className="section-shell"><SectionTitle eyebrow="PRACTICAL LEARNING" title="Training &amp; simulations."/><div className="training-list"><article className="training-item"><span>01</span><div><h3>Deloitte Australia — Cyber Job Simulation <i>· Forage</i></h3><p>June 2026</p><ul><li>Completed a job simulation involving reading web activity logs.</li><li>Supported a client in a simulated cybersecurity breach investigation.</li><li>Answered questions to identify suspicious user activity.</li></ul></div></article><article className="training-item"><span>02</span><div><h3>Mastercard — Cybersecurity Virtual Experience Program <i>· Forage</i></h3><p>June 2026</p><ul><li>Completed a job simulation as an analyst on Mastercard&apos;s Security Awareness Team.</li><li>Helped identify and report security threats such as phishing.</li><li>Analyzed areas requiring stronger security training and procedures.</li></ul></div></article><article className="training-item"><span>03</span><div><h3>Hands-On Cybersecurity Learning <i>· TryHackMe</i></h3><p>Ongoing</p><ul><li>Completed hands-on labs covering networking, Linux, web security, vulnerability assessment, and security fundamentals.</li></ul><a className="text-link" target="_blank" rel="noreferrer" href={tryHackMe}>View TryHackMe Profile <ArrowUpRight size={15}/></a></div></article></div></section>

    <section id="certificates" className="section-shell"><SectionTitle eyebrow="CREDENTIALS" title="Certificates &amp; learning records."/><div className="certificates-grid">{certificates.map(cert => <article className="glass certificate-card" key={cert.title}><button className="certificate-image" onClick={() => setSelected(cert)} aria-label={`View ${cert.title} certificate`}><Image src={cert.image} alt={`${cert.title} certificate`} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw" /></button><div className="certificate-content"><p>{cert.issuer}</p><h3>{cert.title}</h3><span>{cert.date}</span>{cert.meta && <small>{cert.meta}</small>}<button className="text-link" onClick={() => setSelected(cert)}>View Certificate <ArrowUpRight size={15}/></button></div></article>)}</div></section>

    <section id="achievements" className="section-shell"><SectionTitle eyebrow="MILESTONES" title="Learning with momentum."/><div className="achievement-grid"><article className="glass achievement"><Trophy/><strong>Top 4%</strong><p>of TryHackMe users</p></article><article className="glass achievement"><Award/><strong>18 badges</strong><p>earned through TryHackMe learning paths and challenges</p></article><article className="glass achievement"><Terminal/><strong>45+ hours</strong><p>Cyber Security 101 Learning Path completed</p></article><article className="glass achievement"><BookOpen/><strong>95.26%</strong><p>in Saylor Academy&apos;s Introduction to Python course</p></article></div></section>

    <section id="education" className="section-shell"><SectionTitle eyebrow="EDUCATION" title="Academic path."/><div className="timeline"><article className="timeline-item current"><div className="timeline-dot"/><p className="timeline-date">AUG 2025 — PRESENT</p><h3>Lovely Professional University</h3><p className="place">Phagwara, Punjab</p><strong>B.Tech. (Hons.) — CSE<br/>Cyber Security &amp; Blockchain</strong><p className="score">CGPA: 9.73</p></article><article className="timeline-item"><div className="timeline-dot"/><p className="timeline-date">APR 2023 — MAR 2025</p><h3>Sanskriti KMV School</h3><p className="place">Jalandhar, Punjab</p><strong>Higher Secondary Education</strong><p className="score">Percentage: 92.6%</p></article><article className="timeline-item"><div className="timeline-dot"/><p className="timeline-date">APR 2021 — MAR 2023</p><h3>Sanskriti KMV School</h3><p className="place">Jalandhar, Punjab</p><strong>Secondary Education</strong><p className="score">Percentage: 96.6%</p></article></div></section>

    <section id="contact" className="contact section-shell"><div><p className="eyebrow">GET IN TOUCH</p><h2>Let&apos;s build<br/><em>something secure.</em></h2><p>Open to thoughtful conversations around cybersecurity, technology, and learning.</p></div><div className="contact-links"><a href={`mailto:${email}`}><Mail/><span><small>EMAIL</small>{email}</span><ArrowUpRight/></a><a href={`tel:${phone}`}><Phone/><span><small>MOBILE</small>+91-9478613498</span><ArrowUpRight/></a><a href={linkedIn} target="_blank" rel="noreferrer"><BriefcaseBusiness/><span><small>LINKEDIN</small>Sanvir Kaur</span><ArrowUpRight/></a><a href={github} target="_blank" rel="noreferrer"><Github/><span><small>GITHUB</small>14mSana</span><ArrowUpRight/></a><a href={tryHackMe} target="_blank" rel="noreferrer"><ShieldCheck/><span><small>TRYHACKME</small>sanvir</span><ArrowUpRight/></a></div></section>
    <footer><a className="brand" href="#home">SK<span>.</span></a><p>Cybersecurity · Networking · Technology</p><p>© 2026 Sanvir Kaur. All rights reserved.</p><ProfileLinks compact /></footer>
    {selected && <CertificateModal cert={selected} close={() => setSelected(null)} />}
  </main>;
}
