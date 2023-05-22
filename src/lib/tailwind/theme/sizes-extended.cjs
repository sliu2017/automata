/* Generate Sizes Extended */

module.exports = () => {
  const sizesExtended = {}

  /* ----- Borders ----- */

  /* Outline Width */
  sizesExtended.outlineWidth = {
    base: 'var(--outline)',
    container: 'var(--outline-container)',
  }

  /* Outline Offset */
  sizesExtended.outlineOffset = {
    base: 'var(--outline-offset)',
    container: 'var(--outline-offset-container)',
  }

  /* Ring Width */
  sizesExtended.ringWidth = {
    base: 'var(--ring)',
    container: 'var(--ring-container)',
  }

  /* Ring Offset Width */
  sizesExtended.ringOffsetWidth = {
    base: 'var(--ring-offset)',
    container: 'var(--ring-offset-container)',
  }

  /* ----- Effects ----- */

  /* Box Shadow */
  sizesExtended.boxShadow = {
    base: 'var(--shadow)',
    container: 'var(--shadow-container)',
  }

  /* ----- SVG ----- */

  /* Stroke Width */
  sizesExtended.strokeWidth = {
    base: 'var(--stroke)',
    heading: 'var(--stroke-heading)',
  }

  /* ----- Typography ----- */

  /* Line Height */
  sizesExtended.lineHeight = {
    base: 'var(--leading)',
    heading: 'var(--leading-heading)',
  }

  /* Text Decoration Thickness */
  sizesExtended.textDecorationThickness = {
    base: 'var(--decoration)',
    heading: 'var(--decoration-heading)',
  }

  /* Text Underline Offset */
  sizesExtended.textUnderlineOffset = {
    base: 'var(--underline-offset)',
    heading: 'var(--underline-offset-heading)',
  }

  /* Text Indent */
  sizesExtended.textIndent = {
    base: 'var(--indent)',
    heading: 'var(--indent-heading)',
  }

  return sizesExtended
}
