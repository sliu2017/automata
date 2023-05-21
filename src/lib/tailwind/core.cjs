/* Automata Core Tailwind Plugin */

const plugin = require('tailwindcss/plugin')

/* Theme Modules */
const themeColors = require('./theme/colors')

/* Token Modules */
const backgroundTokens = require('./tokens/backgrounds')
const borderTokens = require('./tokens/borders')
const effectTokens = require('./tokens/effects')
const interactivityTokens = require('./tokens/interactivity')
const svgTokens = require('./tokens/svg')
const transitionTokens = require('./tokens/transitions')
const typographyTokens = require('./tokens/typography')

module.exports = plugin(
  ({addUtilities}) => {
    addUtilities({
      ...backgroundTokens(),
      ...borderTokens(),
      ...effectTokens(),
      ...interactivityTokens(),
      ...svgTokens(),
      ...transitionTokens(),
      ...typographyTokens(),
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
