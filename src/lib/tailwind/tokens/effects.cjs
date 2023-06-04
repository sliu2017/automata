/* Generate Effect Design Tokens */

const settings = require('../settings')

/* Box Shadow Alpha */
const boxShadowAlpha = 0.4

module.exports = () => {
  const effectClasses = {}

  /* Effect Colors */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
      /* Box Shadow Colors */
      effectClasses[`.shadow-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        // eslint-disable-next-line max-len
        '--tw-shadow-color': `rgb(var(--color-${colorName}-${colorPairing.light}) / ${boxShadowAlpha})`,
        '--tw-shadow': 'var(--tw-shadow-colored)',
      }
      effectClasses[`.dark .shadow-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] =
        {
          // eslint-disable-next-line max-len
          '--tw-shadow-color': `rgb(var(--color-${colorName}-${colorPairing.dark}) / ${boxShadowAlpha})`,
          '--tw-shadow': 'var(--tw-shadow-colored)',
        }
    })
  })

  /* Alert Effects Colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment

    /* Box Shadow Colors on Alert Color Background */
    effectClasses[`.shadow-on-${alertColorName}-token`] = {
      // eslint-disable-next-line max-len
      '--tw-shadow-color': `rgb(var(--on-${alertColorName}) / ${boxShadowAlpha})`,
      '--tw-shadow': 'var(--tw-shadow-colored)',
    }
  })

  return effectClasses
}
