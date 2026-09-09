export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brand-mark-gradient" x1="5" y1="3" x2="39" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EBFF9A" />
            <stop offset="1" stopColor="#B9F33C" />
          </linearGradient>
        </defs>
        <rect className="brand-mark-tile" width="44" height="44" rx="10" />
        <path className="brand-mark-glyph" d="M11 9.5H17V19.9L26.5 9.5H34L23.1 21L34.5 34.5H27L17 22.8V34.5H11V9.5Z" />
        <circle className="brand-mark-node" cx="35" cy="9" r="2.25" />
      </svg>
    </span>
  );
}
