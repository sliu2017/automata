/* Generate Border Radius Design Tokens */

module.exports = () => ({
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
})
