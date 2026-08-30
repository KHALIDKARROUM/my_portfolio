import { ArrowRight } from 'lucide-react';

type ArchitectureFlowProps = {
  steps: string[];
  label?: string;
};

export function ArchitectureFlow({ steps, label = 'System architecture' }: ArchitectureFlowProps) {
  return (
    <div className="architecture-panel">
      <div className="architecture-label">
        <span>FLOW / SYSTEM</span>
        <span>{label}</span>
      </div>
      <div className="architecture-flow" aria-label={label}>
        {steps.map((step, index) => (
          <div className="architecture-node-wrap" key={step}>
            <div className="architecture-node">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
            {index < steps.length - 1 && <ArrowRight aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}
