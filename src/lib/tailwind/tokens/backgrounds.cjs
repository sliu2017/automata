/* Generate Background Design Tokens */

const settings = require('../settings.cjs')

/* ----- Default Alphas ----- */

/* Applies to backdrops of drawer and modal components */
const backdropAlpha = 0.7

/* Applies when hovering over list items or table rows */
const hoverAlpha = 0.1

/* Applies when selection is active. Should only be used with alert colors */
const activeAlpha = 0.4

module.exports = () => {
  const backgroundClasses = {}

  /* Generate background color tokens */
  settings.colorNames.forEach((colorName) => {
    // eslint-disable-next-line lines-around-comment
    /* Backdrops */
    backgroundClasses[`.bg-${colorName}-backdrop-token`] = {
      'background-color': `rgb(var(--color-${colorName}-500) / ${backdropAlpha})`,
    }

    /* Hover */
    backgroundClasses[`.bg-${colorName}-hover-token:hover`] = {
      'background-color': `rgb(var(--color-${colorName}-500) / ${hoverAlpha})`,
    }

    /* Active */
    backgroundClasses[`.bg-${colorName}-active-token`] = {
      'background-color': `rgb(var(--color-${colorName}-950)) !important`,
      color: `rgb(var(--color-${colorName}-50))`,
      fill: `rgb(var(--color-${colorName}-50))`,
    }
    backgroundClasses[`.dark .bg-${colorName}-active-token`] = {
      'background-color': `rgb(var(--color-${colorName}-50)) !important`,
      color: `rgb(var(--color-${colorName}-950))`,
      fill: `rgb(var(--color-${colorName}-950))`,
    }

    /* Light-Dark, Dark-Light Pairings */
    settings.colorPairings.forEach((colorPairing) => {
      backgroundClasses[`.bg-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'background-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      backgroundClasses[`.dark .bg-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] =
        {'background-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}
    })
  })

  /* Generate background color tokens for alert colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment
    /* Backdrops */
    backgroundClasses[`.bg-${alertColorName}-backdrop-token`] = {
      'background-color': `rgb(var(--color-${alertColorName}) / ${backdropAlpha})`,
    }
    backgroundClasses[`bg-on-${alertColorName}-backdrop-token`] = {
      'background-color': `rgb(var(--on-${alertColorName}) / ${backdropAlpha})`,
    }

    /* Hover */
    backgroundClasses[`.bg-${alertColorName}-hover-token:hover`] = {
      'background-color': `rgb(var(--color-${alertColorName}) / ${hoverAlpha})`,
    }
    backgroundClasses[`bg-on-${alertColorName}-hover-token`] = {
      'background-color': `rgb(var(--on-${alertColorName}) / ${hoverAlpha})`,
    }

    /* Active */
    backgroundClasses[`.bg-${alertColorName}-active-token`] = {
      'background-color': `rgb(var(--color-${alertColorName}) / ${activeAlpha}) !important`,
    }
    backgroundClasses[`bg-on-${alertColorName}-active-token`] = {
      'background-color': `rgb(var(--on-${alertColorName}) / ${activeAlpha}) !important`,
    }

    /* "On" Background Colors */
    backgroundClasses[`bg-on-${alertColorName}-token`] = {
      'background-color': `rgb(var(--on-${alertColorName}))`,
    }
  })

  return backgroundClasses
}
