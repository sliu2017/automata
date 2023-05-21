/* Generate SVG Fill Design Tokens */

const settings = require('../settings')

module.exports = () => {
  const svgFillClasses = {}

  /* SVG Fill Colors */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
      svgFillClasses[`.fill-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        fill: `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      svgFillClasses[`.dark .fill-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] =
        {fill: `rgb(var(--color-${colorName}-${colorPairing.dark}))`}
    })
  })

  /* Alert SVG Fill Colors */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment
    svgFillClasses[`.fill-${alertColorName}-token`] = {
      fill: `rgb(var(--on-${alertColorName}))`,
    }
  })

  return svgFillClasses
}
