/* Automata Core Tailwind Plugin */

const plugin = require('tailwindcss/plugin')

/* Theme Modules */
const colorsTheme = require('./theme/colors')
const sizesTheme = require('./theme/sizes')
const sizesExtendedTheme = require('./theme/sizes-extended')
const timesExtendedTheme = require('./theme/times-extended')

/* Token Modules */
const backgroundTokens = require('./tokens/backgrounds')
const borderTokens = require('./tokens/borders')
const effectTokens = require('./tokens/effects')
const interactivityTokens = require('./tokens/interactivity')
const svgTokens = require('./tokens/svg')
const typographyTokens = require('./tokens/typography')

module.exports = plugin(
  ({addUtilities}) => {
    addUtilities({
      ...backgroundTokens(),
      ...borderTokens(),
      ...effectTokens(),
      ...interactivityTokens(),
      ...svgTokens(),
      ...typographyTokens(),
    })
  },
  {
    theme: {
      extend: {
        colors: colorsTheme(),
        ...sizesExtendedTheme(),
        ...timesExtendedTheme(),
      },
      ...sizesTheme(),
    },
  }
)
