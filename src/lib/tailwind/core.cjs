/* Automata Core Tailwind Plugin */

const plugin = require('tailwindcss/plugin')

/* Theme Modules */
const colorsTheme = require('./theme/colors.cjs')
const sizesTheme = require('./theme/sizes.cjs')
const sizesExtendedTheme = require('./theme/sizes-extended.cjs')
const timesExtendedTheme = require('./theme/times-extended.cjs')

/* Token Modules */
const backgroundTokens = require('./tokens/backgrounds.cjs')
const borderTokens = require('./tokens/borders.cjs')
const effectTokens = require('./tokens/effects.cjs')
const interactivityTokens = require('./tokens/interactivity.cjs')
const svgTokens = require('./tokens/svg.cjs')
const typographyTokens = require('./tokens/typography.cjs')

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
