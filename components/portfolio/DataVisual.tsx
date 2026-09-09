import { ArrowUpRight, Braces, Check, Network } from 'lucide-react';

const dots = Array.from({ length: 68 }, (_, i) => ({
  x: 84 + (i % 3) * 117 + Math.sin(i * 2.4) * (25 + i % 30),
  y: 155 - (i % 3) * 28 + Math.cos(i * 1.7) * (22 + i % 31),
  cluster: i % 3,
}));

export function DataVisual() {
  return (
    <div className="data-lab" data-reveal="right" data-reveal-delay="100">
      <div className="lab-topline"><span><Network size={16} aria-hidden="true" /> THE APPLIED ML LAB</span><span className="lab-dot" aria-hidden="true" /></div>
      <div className="lab-heading"><span>Finding the signal.</span><strong>Making it useful.</strong></div>
      <div className="lab-chart">
        <div className="chart-caption"><span>Feature space</span><span>Conceptual view</span></div>
        <svg viewBox="0 0 440 255" aria-labelledby="feature-space-title">
          <title id="feature-space-title">Illustrative scatter plot showing three groups of data points</title>
          {[50, 100, 150, 200].map(y => <path key={y} d={`M25 ${y} H420`} className="plot-grid" />)}
          {[60, 140, 220, 300, 380].map(x => <path key={x} d={`M${x} 25 V230`} className="plot-grid" />)}
          <path d="M25 230 H420 M25 230 V25" className="plot-axis" />
          <path d="M55 198 C135 195 140 80 223 116 S310 165 394 50" className="plot-curve" />
          {dots.map((dot, i) => <circle key={i} cx={dot.x} cy={dot.y} r={i % 5 === 0 ? 4 : 2.8} fill={['#d7ff64', '#77b5ff', '#ba9dff'][dot.cluster]} opacity={.45 + (i % 5) * .12} />)}
        </svg>
        <div className="chart-legend"><span>Explore</span><span>Model</span><span>Understand</span></div>
      </div>
      <div className="lab-pipeline"><Braces size={19} aria-hidden="true" /><span>Raw data <b>→</b> Reliable decisions</span><ArrowUpRight size={18} aria-hidden="true" /></div>
      <div className="lab-note"><Check size={14} aria-hidden="true" /> Python · Machine learning · Applications</div>
    </div>
  );
}

export function ProjectVisual({ slug }: { slug: string }) {
  const kind = slug === 'netguard' ? 'anomaly' : slug === 'telco-churn' ? 'churn' : slug === 'diabetes-prediction' ? 'classification' : slug === 'aegis-credit' ? 'risk' : 'product';
  const labels = { anomaly: ['NETWORK INTELLIGENCE', 'Detect the unexpected'], churn: ['CUSTOMER ANALYTICS', 'Understand who stays'], classification: ['EXPLORATORY ANALYSIS', 'From features to prediction'], risk: ['CREDIT RISK & GOVERNANCE', 'A score with a system behind it'], product: ['BACKEND ENGINEERING', 'Connect buyers and sellers'] };
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <div className="visual-label"><span>{labels[kind][0]}</span><ArrowUpRight size={17} /></div>
      <svg viewBox="0 0 500 170" preserveAspectRatio="xMidYMid meet">
        {[40, 80, 120, 160].map(y => <path key={y} d={`M0 ${y} H500`} className="plot-grid" />)}
        {kind === 'anomaly' ? <><path d="M0 105 L30 105 40 94 50 116 60 105 110 105 120 90 130 120 140 105 205 105 217 42 230 148 244 77 256 105 315 105 326 92 338 118 350 105 410 105 420 53 432 135 446 105 500 105" className="visual-line" /><circle cx="217" cy="42" r="9" className="visual-node" /></> : kind === 'classification' ? dots.map((dot, i) => <circle key={i} cx={dot.x * 1.15} cy={dot.y * .65} r={3.3} fill="currentColor" opacity={dot.cluster === 1 ? .25 : .8} />) : kind === 'product' ? [80, 200, 320].map((x, i) => <g key={x}><rect x={x} y={35 + i * 9} width="88" height="90" rx="8" className="visual-node" /><path d={`M${x + 15} ${68 + i * 9} h55 m-55 18 h36 m-36 18 h46`} className="visual-line" /></g>) : <>{[50, 76, 66, 95, 82, 113, 104, 130, 116, 140, 128, 152].map((height, i) => <rect key={i} x={18 + i * 40} y={160 - (kind === 'churn' ? 170 - height : height)} width="23" height={kind === 'churn' ? 170 - height : height} rx="3" fill="currentColor" opacity={.16 + i * .055} />)}<path d={kind === 'churn' ? 'M20 30 C120 22 180 110 270 102 S390 148 480 142' : 'M20 141 C120 135 145 70 235 78 S375 31 480 17'} className="visual-line" /></>}
      </svg>
      <div className="visual-bottom"><strong>{labels[kind][1]}</strong><span>Concept illustration</span></div>
    </div>
  );
}
