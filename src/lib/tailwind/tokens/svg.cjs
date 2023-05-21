/* Generate SVG Design Tokens */

const settings = require('../settings')

module.exports = () => {
  const svgClasses = {}

  /* SVG Fill Colors */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
      svgClasses[`.fill-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        fill: `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      svgClasses[`.dark .fill-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        fill: `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
    })
  })

  /* Alert SVG Fill Colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment
    /* Alert color fill */
    svgClasses[`.fill-${alertColorName}-token`] = {
      fill: `rgb(var(--color-${alertColorName}))`,
    }

    /* Fill on alert color background */
    svgClasses[`.fill-on-${alertColorName}-token`] = {
      fill: `rgb(var(--on-${alertColorName}))`,
    }
  })

  return svgClasses
}
