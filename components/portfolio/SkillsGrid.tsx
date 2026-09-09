import { skillGroups } from '@/data/skills';
import { BrainCircuit, ChartNoAxesCombined, Database, FlaskConical, Server, Workflow } from 'lucide-react';

const icons = [BrainCircuit, FlaskConical, ChartNoAxesCombined, Database, Server, Workflow];

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => {
        const Icon = icons[index] ?? BrainCircuit;
        return (
        <article key={group.title} data-reveal="up" data-reveal-delay={index * 80}>
          <div className="skill-number"><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
          <ul>
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ); })}
    </div>
  );
}
