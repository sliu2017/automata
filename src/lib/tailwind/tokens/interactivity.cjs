/* Generate Interactivity Design Tokens */

const settings = require('../settings')

module.exports = () => {
  const interactivityClasses = {}

  /* Interactivity Colors */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
      /* Accent Colors */
      interactivityClasses[
        `.accent-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'accent-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`}
      interactivityClasses[
        `.dark .accent-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'accent-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}

      /* Caret Colors */
      interactivityClasses[`.caret-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] =
        {'caret-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`}
      interactivityClasses[
        `.dark .caret-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'caret-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}
    })
  })

  /* Alert Interactivity Colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment

    /* Accent Colors on Alert Color Background */
    interactivityClasses[`.accent-on-${alertColorName}-token`] = {
      'accent-color': `rgb(var(--on-${alertColorName}))`,
    }

    /* Caret Colors on Alert Color Background */
    interactivityClasses[`.caret-on-${alertColorName}-token`] = {
      'caret-color': `rgb(var(--on-${alertColorName}))`,
    }
  })

  return interactivityClasses
}
