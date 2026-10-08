import { skillGroups } from '@/data/skills';

export function SkillsGrid() {
  return (
    <dl className="skills-list">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <dt>{group.title}</dt>
          <dd>{group.items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  );
}
