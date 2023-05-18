/* Generate Colors */

const settings = require('../settings.cjs')

const generateColorShades = (colorName) => {
  const colorShades = {}
  settings.colorShades.forEach((colorShade) => {
    colorShades[colorShade] = `rgb(var(--color-${colorName}-${colorShade}) / <alpha-value>)`
  })

  return colorShades
}

module.exports = () => {
  const colors = {}

  /* Generate color shades for each color */
  settings.colorNames.forEach((colorName) => {
    colors[colorName] = generateColorShades(colorName)
  })

  /* Generate colors for each alert color */
  settings.alertColorNames.forEach((alertColorName) => {
    colors[alertColorName] = `rgb(var(--color-${alertColorName}) / <alpha-value>)`
  })

  return colors
}
