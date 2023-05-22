/* Generate Typography Design Tokens */

const settings = require('../settings')

module.exports = () => {
  const typographyClasses = {}

  /* Typography Colors */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
      /* Text Colors */
      typographyClasses[`.text-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        '--tw-text-opacity': 1,
        color: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity))`,
      }
      typographyClasses[
        `.dark .text-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {
        '--tw-text-opacity': 1,
        color: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity))`,
      }

      /* Text Decoration Colors */
      typographyClasses[
        `.decoration-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      typographyClasses[
        `.dark .decoration-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
    })
  })

  /* Alert Typography Colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment

    /* Text Color on Alert Color Background */
    typographyClasses[`.text-on-${alertColorName}-token`] = {
      '--tw-text-opacity': 1,
      color: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity))`,
    }

    /* Text Decoration Color on Alert Color Background */
    typographyClasses[`.decoration-on-${alertColorName}-token`] = {
      'text-decoration-color': `rgb(var(--on-${alertColorName}))`,
    }
  })

  return typographyClasses
}
