/* Generate Border Design Tokens */

const settings = require('../settings')

module.exports = () => {
  const borderClasses = {
    // eslint-disable-next-line lines-around-comment
    /* Border Style */
    '.border-token': {'border-style': 'var(--border-style)'},
    '.border-container-token': {'border-style': 'var(--border-style-container)'},

    /* Divide Style */
    '.divide-token': {'border-style': 'var(--divide-style)'},
    '.divide-container-token': {'border-style': 'var(--divide-style-container)'},

    /* Outline Style */
    '.outline-token': {'outline-style': 'var(--outline-style)'},
    '.outline-container-token': {'outline-style': 'var(--outline-style-container)'},
  }

  /* Border, Divide, Outline, Ring, and Ring Offset Colors */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
      /* ----- Border ----- */

      /* All Sides */
      borderClasses[`.border-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'border-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[`.dark .border-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] =
        {'border-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}

      /* Top Side */
      borderClasses[`.border-t-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'border-top-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[
        `.dark .border-t-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'border-top-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}

      /* Right Side */
      borderClasses[`.border-r-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'border-right-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[
        `.dark .border-r-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'border-right-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}

      /* Bottom Side */
      borderClasses[`.border-b-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'border-bottom-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[
        `.dark .border-b-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'border-bottom-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}

      /* Left Side */
      borderClasses[`.border-l-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'border-left-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[
        `.dark .border-l-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'border-left-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}

      /* Vertical Sides */
      borderClasses[`.border-x-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'border-right-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
        'border-left-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[
        `.dark .border-x-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {
        'border-right-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
        'border-left-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }

      /* Horizontal Sides */
      borderClasses[`.border-y-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'border-top-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
        'border-bottom-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[
        `.dark .border-y-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {
        'border-top-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
        'border-bottom-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }

      /* ----- Divide ----- */

      borderClasses[`.divide-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        '--tw-divide-opacity': 1,
        // eslint-disable-next-line max-len
        'border-color': `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-divide-opacity))`,
      }
      borderClasses[`.dark .divide-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] =
        {
          '--tw-divide-opacity': 1,
          // eslint-disable-next-line max-len
          'border-color': `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-divide-opacity))`,
        }

      /* ----- Outline ----- */

      borderClasses[`.outline-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        'outline-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
      }
      borderClasses[
        `.dark .outline-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {'outline-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`}

      /* ----- Ring ----- */

      borderClasses[`.ring-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        '--tw-ring-opacity': 1,
        // eslint-disable-next-line max-len
        '--tw-ring-color': `rgb(var(--color-${colorName}-${colorPairing.light})/var(--tw-ring-opacity))`,
      }
      borderClasses[`.dark .ring-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] = {
        '--tw-ring-opacity': 1,
        // eslint-disable-next-line max-len
        '--tw-ring-color': `rgb(var(--color-${colorName}-${colorPairing.dark})/var(--tw-ring-opacity))`,
      }

      /* ----- Ring Offset ----- */

      borderClasses[`.ring-offset-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`] =
        {
          '--tw-ring-offset-color': `rgb(var(--color-${colorName}-${colorPairing.light}))`,
        }
      borderClasses[
        `.dark .ring-offset-${colorName}-${colorPairing.light}-${colorPairing.dark}-token`
      ] = {
        '--tw-ring-offset-color': `rgb(var(--color-${colorName}-${colorPairing.dark}))`,
      }
    })
  })

  return borderClasses
}
