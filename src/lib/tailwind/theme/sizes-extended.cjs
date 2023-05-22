/* Generate Sizes Extended */

module.exports = () => {
  const sizesExtended = {}

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

  return sizesExtended
}
