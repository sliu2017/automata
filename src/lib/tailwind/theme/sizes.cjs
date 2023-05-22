/* Generate Sizes */

module.exports = () => {
  const sizes = {}

  /* ----- Borders ----- */

  /* Border Radius */
  sizes.borderRadius = {
    base: 'var(--rounded)',
    container: 'var(--rounded-container)',
  }

  /* Border Width */
  sizes.borderWidth = {
    base: 'var(--border)',
    container: 'var(--border-container)',
  }

  /* Divide Width */
  sizes.divideWidth = {
    base: 'var(--divide)',
    container: 'var(--divide-container)',
  }

  /* ----- Typography ----- */

  /* Font Weight */
  sizes.fontWeight = {
    base: 'var(--font)',
    heading: 'var(--font-heading)',
  }

  /* Letter Spacing */
  sizes.letterSpacing = {
    base: 'var(--tracking)',
    heading: 'var(--tracking-heading)',
  }

  return sizes
}
