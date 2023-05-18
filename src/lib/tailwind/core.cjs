/* Automata Core Tailwind Plugin */

const plugin = require('tailwindcss/plugin')

/* Theme Modules */
const themeColors = require('./theme/colors')

/* Token Modules */
const tokensBackgrounds = require('./tokens/backgrounds')
const tokensBorderRadius = require('./tokens/border-radius')
const tokensBorders = require('./tokens/borders')
const tokensRings = require('./tokens/rings')
const tokensSVGFills = require('./tokens/svg-fills')
const tokensText = require('./tokens/text')

module.exports = plugin(
  ({addUtilities}) => {
    addUtilities({
      ...tokensBackgrounds(),
      ...tokensBorderRadius(),
      ...tokensBorders(),
      ...tokensRings(),
      ...tokensSVGFills(),
      ...tokensText(),
    })
  },
  {
    theme: {
      extend: {
        colors: themeColors(),
      },
    },
  }
)
