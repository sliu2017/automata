/* Generate Sizes */

module.exports = () => {
  const sizes = {}

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

  return sizes
}
