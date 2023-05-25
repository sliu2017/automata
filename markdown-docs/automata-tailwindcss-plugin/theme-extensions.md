# Theme Extensions

Theme Extensions (as the name implies) extend various Tailwind CSS classes in order to provide convenience in addition to utility when implementing theme settings.

**Table of Contents**

- [Typograhy](#typography)
  - [Font Weight](#font-weight)
  - [Letter Spacing](#letter-spacing)
  - [Line Height](#line-height)
  - [Text Decoration Thickness](#text-decoration-thickness)
  - [Text Underline Offset](#text-underline-offset)
  - [Text Indent](#text-indent)
- [SVG](#svg)
  - [Stroke Width](#stroke-width)
- [Borders](#borders)
  - [Border Radius](#border-radius)
  - [Border Width](#border-width)
  - [Border Style](#border-style)
  - [Divide Width](#divide-width)
  - [Divide Style](#divide-style)
  - [Outline Width](#outline-width)
  - [Outline Style](#outline-style)
  - [Outline Offset](#outline-offset)
  - [Ring Width](#ring-width)
  - [Ring Offset Width](#ring-offset-width)
- [Effects](#effects)
  - [Box Shadow](#box-shadow)
- [Transitions & Animation](#transitions--animation)
  - [Transition Duration](#transition-duration)
  - [Transition Delay](#transition-delay)
- [Colors](#colors)
  - [Color Palette](#color-palette)
  - [Alert Colors](#alert-colors)

## Typography

### Font Weight

Please note that each of these utilities are configured through the Font Weight CSS Variables.

```text
font-base
font-heading
```

### Letter Spacing

Please note that each of these utilities are configured through the Letter Spacing CSS Variables.

```text
tracking-base
tracking-heading
```

### Line Height

Please note that each of these utilities are configured through the Line Height CSS Variables.

```text
leading-base
leading-heading
```

### Text Decoration Thickness

Please note that each of these utilities are configured through the Text Decoration Thickness CSS Variables.

```text
decoration-base
decoration-heading
```

### Text Underline Offset

Please note that each of these utilities are configured through the Text Underline Offset CSS Variables.

```text
underline-offset-base
underline-offset-heading
```

### Text Indent

Please note that each of these utilities are configured through the Text Indent CSS Variables.

```text
indent-base
indent-heading
```

## SVG

### Stroke Width

Please note that each of these utilities are configured through the Stroke Width CSS Variables.

```text
stroke-base
stroke-heading
```

## Borders

### Border Radius

Please note that each of these utilities are configured through the Border Radius CSS Variables.

```text
rounded-base
rounded-container
```

### Border Width

Please note that each of these utilities are configured through the Border Width CSS Variables.

```text
border-base
border-container
```

### Divide Width

Please note that each of these utilities are configured through the Divide Width CSS Variables.

```text
divide-x-base
divide-y-base
divide-x-container
divide-y-container
```

### Outline Width

Please note that each of these utilities are configured through the Outline Width CSS Variables.

```text
outline-base
outline-container
```

### Outline Offset

Please note that each of these utilities are configured through the Outline Offset CSS Variables.

```text
outline-offset-base
outline-offset-container
```

### Ring Width

Please note that each of these utilities are configured through the Ring Width CSS Variables.

```text
ring-base
ring-container
```

### Ring Offset Width

Please note that each of these utilities are configured through the Ring Offset Width CSS Variables.

```text
ring-offset-base
ring-offset-container
```

## Effects

### Box Shadow

Please note that each of these utilities are configured through the Box Shadow CSS Variables.

```text
shadow-base
shadow-container
```

## Transitions & Animation

### Transition Duration

Please note that the utility is configured through the Transition Duration CSS Variable.

```text
duration-base
```

### Transition Delay

Please note that the utility is configured through the Transition Delay CSS Variable.

```text
delay-base
```

## Colors

### Color Palette

Please note that each of these color-shade combinations are configured through the Color Palette CSS Variables.

The following colors are available to use in addition to the default color palette provided by Tailwind CSS:

- `primary`
- `secondary`
- `tertiary`

Like the default color palette, these colors come with eleven shades:

- 50
- 100
- 200
- 300
- 400
- 500
- 600
- 700
- 800
- 900
- 950

**Class Examples**

```text
bg-primary-50
text-secondary-500
bg-tertiary-950/10
```

### Alert Colors

Please note that each of these alert colors are configured through the Alert Colors CSS Variables.

The following alert colors are available to use:

- `success`
- `warning`
- `error`
- `info`

Unlike colors in the color palette, alert colors do not come with shades.

**Class Examples**

```text
bg-success
text-warning
bg-error/10
text-info/50
```
