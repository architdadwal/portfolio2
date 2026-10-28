import React from 'react'
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { projects, capabilities } from './data/portfolio.js';
import SectionLabel from './components/SectionLabel.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SkillPill from './components/SkillPill.jsx';
import { useReveal } from './hooks/useReveal.js';

const filters = ['All work', 'Commerce', 'Enterprise', 'Product concepts'];

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All work');
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  const visibleProjects = activeFilter === 'All work'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline">
        <a className="wordmark" href="#top" aria-label="Archit home">AD<span>®</span></a>
        <span className="topline-note">INDEPENDENT DEVELOPER <i /> AVAILABLE FOR SELECT PROJECTS</span>
        <a className="top-contact" href="#contact">LET’S TALK <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && <nav className="mobile-menu">
        <a onClick={closeMenu} href="#work">Selected work</a>
        <a onClick={closeMenu} href="#about">About</a>
        <a onClick={closeMenu} href="#contact">Contact</a>
      </nav>}

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-kicker reveal"><span className="eyebrow-dot" /> PORTFOLIO / 2026</div>
          <div className="hero-grid">
            <h1 className="hero-title reveal">Building digital<br /><span className="serif-word">experiences</span><span className="title-period">.</span></h1>
            <div className="hero-aside reveal">
              <p>I’m Archit — a developer who turns complex ideas into clear, capable, and considered digital products.</p>
              <a className="text-link" href="#work">EXPLORE SELECTED WORK <span><ArrowUpRight size={16} /></span></a>
            </div>
          </div>
          <div className="hero-bottom reveal">
            <div className="hero-stamp"><span>AD</span><span className="stamp-orbit">✳</span></div>
            <div className="hero-bottom-copy">FRONTEND ENGINEERING<br />PRODUCT-MINDED DEVELOPMENT</div>
            <div className="hero-scroll">SCROLL TO DISCOVER <span>↓</span></div>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <div className="graphic-ring ring-one" /><div className="graphic-ring ring-two" />
            <div className="graphic-core">MAKE<br /><span>IT</span><br />MATTER<span className="core-star">✳</span></div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading reveal">
            <SectionLabel number="01" label="SELECTED WORK" />
            <div className="heading-right"><h2>Useful by design.<br /><span>Distinct by nature.</span></h2><p>A selection of client work, enterprise experiences, and explorations in product design.</p></div>
          </div>
          <div className="filter-row reveal" role="tablist" aria-label="Filter projects">
            {filters.map(filter => <button key={filter} className={`filter-chip ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>{filter}<span>{filter === 'All work' ? projects.length.toString().padStart(2, '0') : projects.filter(p => p.category === filter).length.toString().padStart(2, '0')}</span></button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
          <div className="work-foot reveal"><span>MORE THAN PIXELS — PROBLEMS SOLVED.</span><span>SELECTED WORK / 2021—2026</span></div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading reveal">
            <SectionLabel number="02" label="A LITTLE ABOUT ME" />
            <div className="heading-right"><h2>Engineering with<br /><span>an eye for detail.</span></h2></div>
          </div>
          <div className="about-layout">
            <div className="about-statement reveal"><span className="quote-mark">“</span><p>Great software should feel as intuitive as it is powerful. I care about the details people notice — and the engineering they don’t.</p></div>
            <div className="about-copy reveal"><p>I'm a software professional with experience across frontend development, full-stack applications, eCommerce, and enterprise platforms. I enjoy making complex workflows feel simple, building reusable systems, and collaborating to ship products that work beautifully in the real world.</p><p>My approach blends thoughtful UI, pragmatic architecture, and performance-conscious implementation.</p><a className="text-link" href="#contact">HAVE A PROJECT IN MIND? <span><ArrowUpRight size={16} /></span></a></div>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((item, i) => <div className="capability reveal" key={item.title}><span className="cap-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p><div className="pill-list">{item.skills.map(skill => <SkillPill key={skill} label={skill} />)}</div></div>)}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top reveal"><SectionLabel number="03" label="NEXT UP" /><span className="contact-note">GOOD WORK STARTS WITH A CONVERSATION.</span></div>
          <div className="contact-main reveal"><h2>Have a good<br /><span>one in mind?</span></h2><a className="contact-circle" href="mailto:terabyte.about@gmail.com" aria-label="Email Archit"><ArrowUpRight size={38} /></a></div>
          <div className="contact-bottom">
            <p>Tell me what you're building. Let's make it useful, thoughtful, and a little unexpected.</p>
            <div className="contact-links"><a href="mailto:terabyte.about@gmail.com">EMAIL <ArrowUpRight size={14} /></a><a href="https://github.com/architdadwal" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/archit-dadwal-a53434221/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={14} /></a></div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="wordmark" href="#top">AD<span>®</span></a><span>DESIGNED & BUILT WITH INTENTION</span><span>© 2026 ARCHIT DADWAL</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
