export function getHSSLogoSVG(className = "w-8 h-8", withGlow = true): string {
  // We still keep the same function signature to avoid breaking changes, 
  // but we return an img tag with the new logo.
  const glowClass = withGlow ? "shadow-[0_0_15px_rgba(34,211,238,0.4)]" : "";
  return `
    <img 
      src="/logo.jpg" 
      alt="HSS Logo" 
      class="${className} ${glowClass} object-contain rounded-sm"
    />
  `;
}
