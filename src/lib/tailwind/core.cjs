/* Automata Core Tailwind Plugin */

const plugin = require('tailwindcss/plugin')

/* Theme Modules */
const themeColors = require('./theme/colors')

/* Token Modules */
const tokensBackgrounds = require('./tokens/backgrounds')
const tokensBorders = require('./tokens/borders')
const tokensBorderRadius = require('./tokens/border-radius')
const tokensFills = require('./tokens/svg-fills')
const tokensText = require('./tokens/text')
const tokensRings = require('./tokens/rings')

module.exports = plugin(
  ({addUtilities}) => {
    addUtilities({
      ...tokensBackgrounds(),
      ...tokensBorders(),
      ...tokensBorderRadius(),
      ...tokensFills(),
      ...tokensText(),
      ...tokensRings(),
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
