/* eslint-disable max-len */
/* Generate Background Text Combination Design Tokens */

const settings = require('../settings.cjs')

/* ----- Default Alphas ----- */

/* Applies when selection is active. Should only be used with alert colors */
const activeAlpha = 0.4

module.exports = () => {
  const btClasses = {}

  /* Generate background text color tokens */
  settings.colorNames.forEach((colorName) => {
    // eslint-disable-next-line lines-around-comment
    /* Light-Dark, Dark-Light Pairings */
    settings.colorPairings.forEach((colorPairing) => {
      btClasses[`.bt-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
        '--tw-text-opacity': '1',
        color: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity))`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity))`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity))`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
      btClasses[`.dark .bt-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
        '--tw-text-opacity': '1',
        color: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity))`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity))`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity))`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }

      /* Active */
      btClasses[`.bt-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token`] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.dark})) !important`,
        '--tw-text-opacity': '1',
        color: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.light})) !important`,
      }
      btClasses[`.dark .bt-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token`] =
        {
          'background-color': `rgb(var(--color-${colorName}-${colorPairing.light})) !important`,
          '--tw-text-opacity': '1',
          color: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
          fill: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
          stroke: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
          'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.dark})) !important`,
        }
    })
  })

  /* Generate background text color tokens for alert colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment
    /* Active */
    btClasses[`.bt-${alertColorName}-active-token`] = {
      'background-color': `rgb(var(--color-${alertColorName}) / ${activeAlpha}) !important`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      fill: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      stroke: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      'text-decoration-color': `rgb(var(--on-${alertColorName})) !important`,
    }
    btClasses[`.bt-on-${alertColorName}-active-token`] = {
      'background-color': `rgb(var(--on-${alertColorName}) / ${activeAlpha}) !important`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      fill: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      stroke: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      'text-decoration-color': `rgb(var(--color-${alertColorName})) !important`,
    }

    /* Background Text Colors */
    btClasses[`.bt-${alertColorName}-token`] = {
      'background-color': `rgb(var(--color-${alertColorName}))`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity))`,
      fill: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity))`,
      stroke: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity))`,
      'text-decoration-color': `rgb(var(--on-${alertColorName}))`,
    }

    /* "On" Background Text Colors */
    btClasses[`.bt-on-${alertColorName}-token`] = {
      'background-color': `rgb(var(--on-${alertColorName}))`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity))`,
      fill: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity))`,
      stroke: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity))`,
      'text-decoration-color': `rgb(var(--color-${alertColorName}))`,
    }
  })

  return btClasses
}
