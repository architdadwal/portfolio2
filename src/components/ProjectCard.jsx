import React from 'react'
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card reveal ${index % 2 ? 'offset-card' : ''}`}>
      <div className={`project-visual visual-${project.visual}`}>
        <div className="visual-top"><span>{project.visualNote}</span><span className="visual-index">{project.number}</span></div>
        <div className="visual-art" aria-hidden="true">
          {project.visual === 'paintball' && <><div className="paintball-disc disc-a" /><div className="paintball-disc disc-b" /><div className="paintball-cross">×</div><div className="paintball-grid" /></>}
          {project.visual === 'igot' && <><div className="igot-sun" /><div className="igot-panel"><span>iGOT</span><b>KARMAYOGI</b><i>MISSION KARMAYOGI</i></div><div className="igot-lines" /></>}
          {project.visual === 'health' && <><div className="health-cross">+</div><div className="health-card"><span>CASE OVERVIEW</span><b>Clinical insight</b><div /><div /><div /></div><div className="health-orbit" /></>}
          {project.visual === 'travel' && <><div className="travel-sun" /><div className="travel-mountain mountain-one" /><div className="travel-mountain mountain-two" /><div className="travel-road" /></>}
          {project.visual === 'suppx' && <><div className="suppx-can"><span>SUPPX</span><i>PERFORMANCE<br />FORMULA</i><b>01</b></div><div className="suppx-orbit" /></>}
          {project.visual === 'campus' && <><div className="campus-window window-a" /><div className="campus-window window-b" /><div className="campus-block" /><div className="campus-sun" /></>}
          {project.visual === 'salesforce' && <><div className="sales-node node-a">CRM</div><div className="sales-node node-b">API</div><div className="sales-node node-c">UI</div><div className="sales-line line-a" /><div className="sales-line line-b" /><div className="sales-core">↗</div></>}
        </div>
        <div className="visual-caption">{project.visualLabel}</div>
      </div>
      <div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div>
      <div className="project-title-row"><div><h3>{project.title}</h3><p>{project.subtitle}</p></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <details className="project-details"><summary>PROJECT NOTES <span>+</span></summary><p>{project.details}</p><small>{project.status}</small></details>
    </article>
  );
}
