type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <header className="section-heading" data-reveal="up">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </header>
  );
}
