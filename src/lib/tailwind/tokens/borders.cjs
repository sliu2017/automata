/* Generate Border Design Tokens */

const settings = require('../settings')

module.exports = () => {
  const borderClasses = {
    // eslint-disable-next-line lines-around-comment
    /* Default Border Radius */
    '.rounded-token': {'border-radius': 'var(--rounded)'},
    '.rounded-t-token': {
      'border-top-left-radius': 'var(--rounded)',
      'border-top-right-radius': 'var(--rounded)',
    },
    '.rounded-r-token': {
      'border-top-right-radius': 'var(--rounded)',
      'border-bottom-right-radius': 'var(--rounded)',
    },
    '.rounded-b-token': {
      'border-bottom-right-radius': 'var(--rounded)',
      'border-bottom-left-radius': 'var(--rounded)',
    },
    '.rounded-l-token': {
      'border-top-left-radius': 'var(--rounded)',
      'border-bottom-left-radius': 'var(--rounded)',
    },
    '.rounded-tl-token': {'border-top-left-radius': 'var(--rounded)'},
    '.rounded-tr-token': {'border-top-right-radius': 'var(--rounded)'},
    '.rounded-br-token': {'border-bottom-right-radius': 'var(--rounded)'},
    '.rounded-bl-token': {'border-bottom-left-radius': 'var(--rounded)'},

    /* Container Border Radius */
    '.rounded-container-token': {'border-radius': 'var(--rounded-container)'},
    '.rounded-t-container-token': {
      'border-top-left-radius': 'var(--rounded-container)',
      'border-top-right-radius': 'var(--rounded-container)',
    },
    '.rounded-r-container-token': {
      'border-top-right-radius': 'var(--rounded-container)',
      'border-bottom-right-radius': 'var(--rounded-container)',
    },
    '.rounded-b-container-token': {
      'border-bottom-right-radius': 'var(--rounded-container)',
      'border-bottom-left-radius': 'var(--rounded-container)',
    },
    '.rounded-l-container-token': {
      'border-top-left-radius': 'var(--rounded-container)',
      'border-bottom-left-radius': 'var(--rounded-container)',
    },
    '.rounded-tl-container-token': {'border-top-left-radius': 'var(--rounded-container)'},
    '.rounded-tr-container-token': {'border-top-right-radius': 'var(--rounded-container)'},
    '.rounded-br-container-token': {'border-bottom-right-radius': 'var(--rounded-container)'},
    '.rounded-bl-container-token': {'border-bottom-left-radius': 'var(--rounded-container)'},

    /* Default Border Width */
    '.border-token': {'border-width': 'var(--border)'},
    '.border-t-token': {'border-top-width': 'var(--border)'},
    '.border-r-token': {'border-right-width': 'var(--border)'},
    '.border-b-token': {'border-bottom-width': 'var(--border)'},
    '.border-l-token': {'border-left-width': 'var(--border)'},
    '.border-x-token': {
      'border-right-width': 'var(--border)',
      'border-left-width': 'var(--border)',
    },
    '.border-y-token': {
      'border-top-width': 'var(--border)',
      'border-bottom-width': 'var(--border)',
    },

    /* Container Border Width */
    '.border-container-token': {'border-width': 'var(--border-container)'},
    '.border-t-container-token': {'border-top-width': 'var(--border-container)'},
    '.border-r-container-token': {'border-right-width': 'var(--border-container)'},
    '.border-b-container-token': {'border-bottom-width': 'var(--border-container)'},
    '.border-l-container-token': {'border-left-width': 'var(--border-container)'},
    '.border-x-container-token': {
      'border-right-width': 'var(--border-container)',
      'border-left-width': 'var(--border-container)',
    },
    '.border-y-container-token': {
      'border-top-width': 'var(--border-container)',
      'border-bottom-width': 'var(--border-container)',
    },
  }

  /* Border Color */
  settings.colorNames.forEach((colorName) => {
    settings.colorPairings.forEach((colorPairing) => {
      // eslint-disable-next-line lines-around-comment
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
    })
  })

  /* Alert Border Color */
  settings.alertColorNames.forEach((alertColorName) => {
    // eslint-disable-next-line lines-around-comment
    /* All Sides */
    borderClasses[`.border-${alertColorName}-token`] = {
      'border-color': `rgb(var(--color-${alertColorName}))`,
    }

    /* Top Side */
    borderClasses[`.border-t-${alertColorName}-token`] = {
      'border-top-color': `rgb(var(--color-${alertColorName}))`,
    }

    /* Right Side */
    borderClasses[`.border-r-${alertColorName}-token`] = {
      'border-right-color': `rgb(var(--color-${alertColorName}))`,
    }

    /* Bottom Side */
    borderClasses[`.border-b-${alertColorName}-token`] = {
      'border-bottom-color': `rgb(var(--color-${alertColorName}))`,
    }

    /* Left Side */
    borderClasses[`.border-l-${alertColorName}-token`] = {
      'border-left-color': `rgb(var(--color-${alertColorName}))`,
    }

    /* Vertical Sides */
    borderClasses[`.border-x-${alertColorName}-token`] = {
      'border-right-color': `rgb(var(--color-${alertColorName}))`,
      'border-left-color': `rgb(var(--color-${alertColorName}))`,
    }

    /* Horizontal Sides */
    borderClasses[`.border-y-${alertColorName}-token`] = {
      'border-top-color': `rgb(var(--color-${alertColorName}))`,
      'border-bottom-color': `rgb(var(--color-${alertColorName}))`,
    }
  })

  return borderClasses
}
