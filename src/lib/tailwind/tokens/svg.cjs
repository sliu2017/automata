/* Generate SVG Design Tokens */

const settings = require('../settings')

module.exports = () => {
  const svgClasses = {}

  /* SVG Fill and Stroke Colors */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
      /* SVG Fill Colors */
      svgClasses[`.fill-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        fill: `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      svgClasses[`.dark .fill-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        fill: `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }

      /* SVG Stroke Colors */
      svgClasses[`.stroke-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        stroke: `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      svgClasses[`.dark .stroke-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        stroke: `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
    })
  })

  /* Alert SVG Fill and Stroke Colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment

    /* SVG Fill Color on Alert Color Background */
    svgClasses[`.fill-on-${alertColorName}-token`] = {
      fill: `rgb(var(--on-${alertColorName}))`,
    }

    /* SVG Stroke Color on Alert Color Background */
    svgClasses[`.stroke-on-${alertColorName}-token`] = {
      stroke: `rgb(var(--on-${alertColorName}))`,
    }
  })

  return svgClasses
}
