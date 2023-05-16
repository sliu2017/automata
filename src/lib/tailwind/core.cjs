/* Automata Core Tailwind Plugin */

import * as plugin from 'tailwindcss/plugin'

/* Theme Modules */
import * as themeColors from './theme/colors.cjs'

/* Token Modules */
import * as tokensBackgrounds from './tokens/backgrounds.cjs'
import * as tokensBorders from './tokens/borders.cjs'
import * as tokensBorderRadius from './tokens/border-radius.cjs'
import * as tokensFills from './tokens/fills.cjs'
import * as tokensText from './tokens/text.cjs'
import * as tokensRings from './tokens/rings.cjs'

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
