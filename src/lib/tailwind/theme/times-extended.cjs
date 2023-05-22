/* Generate Times Extended */

module.exports = () => {
  const timesExtended = {}

  /* ----- Transitions & Animation ----- */

  /* Transition Duration */
  timesExtended.transitionDuration = {base: 'var(--duration)'}

  /* Transition Delay */
  timesExtended.transitionDelay = {base: 'var(--delay)'}

  return timesExtended
}
