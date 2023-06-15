/* Generate Sizes */

module.exports = () => {
  const sizes = {}

  /* ----- Borders ----- */

  /* Border Radius */
  sizes.borderRadius = {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
    base: 'var(--rounded)',
    container: 'var(--rounded-container)',
  }

  /* Border Width */
  sizes.borderWidth = {
    DEFAULT: '1px',
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
    base: 'var(--border)',
    container: 'var(--border-container)',
  }

  /* Divide Width */
  sizes.divideWidth = {
    DEFAULT: '1px',
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
    base: 'var(--divide)',
    container: 'var(--divide-container)',
  }

  /* ----- Typography ----- */

  /* Font Weight */
  sizes.fontWeight = {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    base: 'var(--font)',
    heading: 'var(--font-heading)',
  }

  /* Letter Spacing */
  sizes.letterSpacing = {
    tighter: '-.05em',
    tight: '-.025em',
    normal: '0',
    wide: '.025em',
    wider: '.05em',
    widest: '.1em',
    base: 'var(--tracking)',
    heading: 'var(--tracking-heading)',
  }

  return sizes
}
