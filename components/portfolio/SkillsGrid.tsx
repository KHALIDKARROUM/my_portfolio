import { skillGroups } from '@/data/skills';

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <article key={group.title}>
          <div className="skill-number">0{index + 1}</div>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
          <ul>
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
