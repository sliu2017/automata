/* eslint-disable max-len */
/* Generate YoRHa Design Tokens */

const settings = require('../settings.cjs')

module.exports = () => {
  const yorhaClasses = {}

  /* Generate YoRHa color tokens */
  settings.colorNames.forEach((colorName) => {
    // eslint-disable-next-line lines-around-comment
    /* Light-Dark, Dark-Light Pairings */
    settings.colorPairings.forEach((colorPairing) => {
      yorhaClasses[`.yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
        '--tw-text-opacity': '1',
        color: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity))`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity))`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity))`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      yorhaClasses[`.dark .yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
        '--tw-text-opacity': '1',
        color: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity))`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity))`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity))`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }

      /* Hover */
      yorhaClasses[
        `.yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token:not(*:disabled):not(.btn-disabled):hover`
      ] = {
        color: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.dark})) !important`,
      }
      yorhaClasses[
        `.dark .yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token:not(*:disabled):not(.btn-disabled):hover`
      ] = {
        '--tw-text-opacity': '1',
        color: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.light})) !important`,
      }

      /* Active */
      yorhaClasses[`.yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token`] =
        {
          'background-color': `rgb(var(--color-${colorName}-${colorPairing.light})) !important`,
          '--tw-text-opacity': '1',
          color: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
          fill: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
          stroke: `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-text-opacity)) !important`,
          'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.dark})) !important`,
        }
      yorhaClasses[
        `.dark .yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token`
      ] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.dark})) !important`,
        '--tw-text-opacity': '1',
        color: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        fill: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        stroke: `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-text-opacity)) !important`,
        'text-decoration-color': `rgb(var(--color-${colorName}-${colorPairing.light})) !important`,
      }

      /* Before */
      yorhaClasses[`.yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token::before`] =
        {
          'border-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
        }
      yorhaClasses[
        `.dark .yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token::before`
      ] = {
        'border-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
      yorhaClasses[
        `.yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token::before`
      ] = {
        'border-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      yorhaClasses[
        `.dark .yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token::before`
      ] = {
        'border-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }

      /* After */
      yorhaClasses[`.yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token::after`] =
        {
          'background-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
        }
      yorhaClasses[
        `.dark .yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-token::after`
      ] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
      yorhaClasses[
        `.yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token::after`
      ] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      yorhaClasses[
        `.dark .yorha-${colorName}-${colorPairing.light}-${colorPairing.dark}-active-token::after`
      ] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
    })
  })

  /* Generate YoRHa color tokens for alert colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment
    /* Hover */
    yorhaClasses[`.yorha-${alertColorName}-token:not(*:disabled):not(.btn-disabled):hover`] = {
      '--tw-text-opacity': '1',
      color: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      fill: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      stroke: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      'text-decoration-color': `rgb(var(--on-${alertColorName})) !important`,
    }
    yorhaClasses[`.yorha-on-${alertColorName}-token:not(*:disabled):not(.btn-disabled):hover`] = {
      '--tw-text-opacity': '1',
      color: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      fill: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      stroke: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      'text-decoration-color': `rgb(var(--color-${alertColorName})) !important`,
    }

    /* Active */
    yorhaClasses[`.yorha-${alertColorName}-active-token`] = {
      'background-color': `rgb(var(--color-${alertColorName})) !important`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      fill: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      stroke: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity)) !important`,
      'text-decoration-color': `rgb(var(--on-${alertColorName})) !important`,
    }
    yorhaClasses[`.yorha-on-${alertColorName}-active-token`] = {
      'background-color': `rgb(var(--on-${alertColorName})) !important`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      fill: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      stroke: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity)) !important`,
      'text-decoration-color': `rgb(var(--color-${alertColorName})) !important`,
    }

    /* Before */
    yorhaClasses[`.yorha-${alertColorName}-token::before`] = {
      'border-color': `rgb(var(--color-${alertColorName}))`,
    }
    yorhaClasses[`.yorha-on-${alertColorName}-token::before`] = {
      'border-color': `rgb(var(--on-${alertColorName}))`,
    }
    yorhaClasses[`.yorha-${alertColorName}-active-token::before`] = {
      'border-color': `rgb(var(--color-${alertColorName}))`,
    }
    yorhaClasses[`.yorha-on-${alertColorName}-active-token::before`] = {
      'border-color': `rgb(var(--on-${alertColorName}))`,
    }

    /* After */
    yorhaClasses[`.yorha-${alertColorName}-token::after`] = {
      'background-color': `rgb(var(--color-${alertColorName}))`,
    }
    yorhaClasses[`.yorha-on-${alertColorName}-token::after`] = {
      'background-color': `rgb(var(--on-${alertColorName}))`,
    }
    yorhaClasses[`.yorha-${alertColorName}-active-token::after`] = {
      'background-color': `rgb(var(--color-${alertColorName}))`,
    }
    yorhaClasses[`.yorha-on-${alertColorName}-active-token::after`] = {
      'background-color': `rgb(var(--on-${alertColorName}))`,
    }

    /* YoRHa Colors */
    yorhaClasses[`.yorha-${alertColorName}-token`] = {
      'background-color': `rgb(var(--on-${alertColorName}))`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity))`,
      fill: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity))`,
      stroke: `rgb(var(--color-${alertColorName})/var(--tw-text-opacity))`,
      'text-decoration-color': `rgb(var(--color-${alertColorName}))`,
    }

    /* "On" YoRHa Colors */
    yorhaClasses[`.yorha-on-${alertColorName}-token`] = {
      'background-color': `rgb(var(--color-${alertColorName}))`,
      '--tw-text-opacity': '1',
      color: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity))`,
      fill: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity))`,
      stroke: `rgb(var(--on-${alertColorName})/var(--tw-text-opacity))`,
      'text-decoration-color': `rgb(var(--on-${alertColorName}))`,
    }
  })

  return yorhaClasses
}
