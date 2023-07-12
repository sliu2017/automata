# Design Tokens

Design Tokens are custom CSS classes meant to provide utility and allow developers to implement theme settings in elements and components.

## Table of Contents

- [Typograhy](#typography)
  - [Font Family](#font-family)
  - [Text Color](#text-color)
  - [Text Decoration Color](#text-decoration-color)
  - [Text Transform](#text-transform)
- [SVG](#svg)
  - [Fill](#fill)
  - [Stroke](#stroke)
- [Borders](#borders)
  - [Border Color](#border-color)
  - [Border Style](#border-style)
  - [Divide Color](#divide-color)
  - [Divide Style](#divide-style)
  - [Outline Color](#outline-color)
  - [Outline Style](#outline-style)
  - [Ring Color](#ring-color)
  - [Ring Offset Color](#ring-offset-color)
- [Effects](#effects)
  - [Box Shadow Color](#box-shadow-color)
- [Interactivity](#interactivity)
  - [Accent Color](#accent-color)
  - [Caret Color](#caret-color)
- [Backgrounds](#backgrounds)
  - [Background Color](#background-color)
  - [Backdrop Color](#backdrop-color)
  - [Hover Color](#hover-color)
  - [Active Color](#active-color)
- [Background Text Combinations](#background-text-combinations)
- [YoRHa](#yorha)

## Typography

### Font Family

Please note that each of these tokens are configured through the Font Family CSS Variables.

```text
font-token
font-heading-token
```

### Text Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
text-primary-50-950-token
text-secondary-100-900-token
text-tertiary-200-800-token
...
text-primary-950-50-token
text-secondary-900-100-token
text-tertiary-800-200-token
```

#### Alert Colors

Use with text on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
text-on-success-token
text-on-warning-token
text-on-error-token
text-on-info-token
```

### Text Decoration Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
decoration-primary-50-950-token
decoration-secondary-100-900-token
decoration-tertiary-200-800-token
...
decoration-primary-950-50-token
decoration-secondary-900-100-token
decoration-tertiary-800-200-token
```

#### Alert Colors

Use with text decorations on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
decoration-on-success-token
decoration-on-warning-token
decoration-on-error-token
decoration-on-info-token
```

### Text Transform

Please note that each of these tokens are configured through the Text Transform CSS Variables.

```text
text-transform-token
text-transform-heading-token
```

## SVG

### Fill

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
fill-primary-50-950-token
fill-secondary-100-900-token
fill-tertiary-200-800-token
...
fill-primary-950-50-token
fill-secondary-900-100-token
fill-tertiary-800-200-token
```

#### Alert Colors

Use with fills on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
fill-on-success-token
fill-on-warning-token
fill-on-error-token
fill-on-info-token
```

### Stroke

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
stroke-primary-50-950-token
stroke-secondary-100-900-token
stroke-tertiary-200-800-token
...
stroke-primary-950-50-token
stroke-secondary-900-100-token
stroke-tertiary-800-200-token
```

#### Alert Colors

Use with strokes on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
stroke-on-success-token
stroke-on-warning-token
stroke-on-error-token
stroke-on-info-token
```

## Borders

### Border Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
border-primary-50-950-token
border-t-secondary-100-900-token
border-x-tertiary-200-800-token
...
border-y-primary-950-50-token
border-r-secondary-900-100-token
border-tertiary-800-200-token
```

#### Alert Colors

Use with borders on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
border-on-success-token
border-t-on-warning-token
border-r-on-error-token
border-x-on-info-token
```

### Border Style

Please note that each of these tokens are configured through the Border Style CSS Variables.

```text
border-token
border-container-token
```

### Divide Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
divide-primary-50-950-token
divide-secondary-100-900-token
divide-tertiary-200-800-token
...
divide-primary-950-50-token
divide-secondary-900-100-token
divide-tertiary-800-200-token
```

#### Alert Colors

Use with divides on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
divide-on-success-token
divide-on-warning-token
divide-on-error-token
divide-on-info-token
```

### Divide Style

Please note that each of these tokens are configured through the Divide Style CSS Variables.

```text
divide-token
divide-container-token
```

### Outline Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
outline-primary-50-950-token
outline-secondary-100-900-token
outline-tertiary-200-800-token
...
outline-primary-950-50-token
outline-secondary-900-100-token
outline-tertiary-800-200-token
```

#### Alert Colors

Use with outlines on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
outline-on-success-token
outline-on-warning-token
outline-on-error-token
outline-on-info-token
```

### Outline Style

Please note that each of these tokens are configured through the Outline Style CSS Variables.

```text
outline-token
outline-container-token
```

### Ring Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
ring-primary-50-950-token
ring-secondary-100-900-token
ring-tertiary-200-800-token
...
ring-primary-950-50-token
ring-secondary-900-100-token
ring-tertiary-800-200-token
```

#### Alert Colors

Use with rings on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
ring-on-success-token
ring-on-warning-token
ring-on-error-token
ring-on-info-token
```

### Ring Offset Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
ring-offset-primary-50-950-token
ring-offset-secondary-100-900-token
ring-offset-tertiary-200-800-token
...
ring-offset-primary-950-50-token
ring-offset-secondary-900-100-token
ring-offset-tertiary-800-200-token
```

#### Alert Colors

Use with ring offsets on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
ring-offset-on-success-token
ring-offset-on-warning-token
ring-offset-on-error-token
ring-offset-on-info-token
```

## Effects

### Box Shadow Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
shadow-primary-50-950-token
shadow-secondary-100-900-token
shadow-tertiary-200-800-token
...
shadow-primary-950-50-token
shadow-secondary-900-100-token
shadow-tertiary-800-200-token
```

#### Alert Colors

Use with box shadows on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
shadow-on-success-token
shadow-on-warning-token
shadow-on-error-token
shadow-on-info-token
```

## Interactivity

### Accent Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
accent-primary-50-950-token
accent-secondary-100-900-token
accent-tertiary-200-800-token
...
accent-primary-950-50-token
accent-secondary-900-100-token
accent-tertiary-800-200-token
```

#### Alert Colors

Use with accents on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
accent-on-success-token
accent-on-warning-token
accent-on-error-token
accent-on-info-token
```

### Caret Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
caret-primary-50-950-token
caret-secondary-100-900-token
caret-tertiary-200-800-token
...
caret-primary-950-50-token
caret-secondary-900-100-token
caret-tertiary-800-200-token
```

#### Alert Colors

Use with carets on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
caret-on-success-token
caret-on-warning-token
caret-on-error-token
caret-on-info-token
```

## Backgrounds

### Background Color

#### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
bg-primary-50-950-token
bg-secondary-100-900-token
bg-tertiary-200-800-token
...
bg-primary-950-50-token
bg-secondary-900-100-token
bg-tertiary-800-200-token
```

#### Alert Colors

Use with backgrounds on backgrounds set as an alert color.
Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
bg-on-success-token
bg-on-warning-token
bg-on-error-token
bg-on-info-token
```

### Backdrop Color

#### Color Palette

```text
bg-primary-backdrop-token
bg-secondary-backdrop-token
bg-tertiary-backdrop-token
...
bg-primary-backdrop-token
bg-secondary-backdrop-token
bg-tertiary-backdrop-token
```

#### Alert Colors

```text
bg-success-backdrop-token
bg-warning-backdrop-token
bg-error-backdrop-token
bg-info-backdrop-token
```

Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
bg-on-success-backdrop-token
bg-on-warning-backdrop-token
bg-on-error-backdrop-token
bg-on-info-backdrop-token
```

### Hover Color

#### Color Palette

```text
bg-primary-hover-token
bg-secondary-hover-token
bg-tertiary-hover-token
...
bg-primary-hover-token
bg-secondary-hover-token
bg-tertiary-hover-token
```

#### Alert Colors

```text
bg-success-hover-token
bg-warning-hover-token
bg-error-hover-token
bg-info-hover-token
```

Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
bg-on-success-hover-token
bg-on-warning-hover-token
bg-on-error-hover-token
bg-on-info-hover-token
```

### Active Color

#### Color Palette

```text
bg-primary-active-token
bg-secondary-active-token
bg-tertiary-active-token
...
bg-primary-active-token
bg-secondary-active-token
bg-tertiary-active-token
```

#### Alert Colors

```text
bg-success-active-token
bg-warning-active-token
bg-error-active-token
bg-info-active-token
```

Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
bg-on-success-active-token
bg-on-warning-active-token
bg-on-error-active-token
bg-on-info-active-token
```

## Background Text Combinations

### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
bt-primary-50-950-token
bt-secondary-100-900-token
bt-tertiary-200-800-token
...
bt-primary-950-50-token
bt-secondary-900-100-token
bt-tertiary-800-200-token
```

#### Alert Colors

```text
bt-success-token
bt-warning-token
bt-error-token
bt-info-token
```

Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
bt-on-success-token
bt-on-warning-token
bt-on-error-token
bt-on-info-token
```

### Active

#### Color Palette

```text
bt-primary-active-token
bt-secondary-active-token
bt-tertiary-active-token
...
bt-primary-active-token
bt-secondary-active-token
bt-tertiary-active-token
```

#### Alert Colors

```text
bt-success-active-token
bt-warning-active-token
bt-error-active-token
bt-info-active-token
```

Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
bt-on-success-active-token
bt-on-warning-active-token
bt-on-error-active-token
bt-on-info-active-token
```

## YoRHa

### Color Palette

Swaps between specified color shades on light/dark mode change.

```text
yorha-primary-50-950-token
yorha-secondary-100-900-token
yorha-tertiary-200-800-token
...
yorha-primary-950-50-token
yorha-secondary-900-100-token
yorha-tertiary-800-200-token
```

#### Alert Colors

```text
yorha-success-token
yorha-warning-token
yorha-error-token
yorha-info-token
```

Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
yorha-on-success-token
yorha-on-warning-token
yorha-on-error-token
yorha-on-info-token
```

### Active

#### Color Palette

```text
yorha-primary-active-token
yorha-secondary-active-token
yorha-tertiary-active-token
...
yorha-primary-active-token
yorha-secondary-active-token
yorha-tertiary-active-token
```

#### Alert Colors

```text
yorha-success-active-token
yorha-warning-active-token
yorha-error-active-token
yorha-info-active-token
```

Please note that each of these tokens are configured through the "On" Color CSS Variables.

```text
yorha-on-success-active-token
yorha-on-warning-active-token
yorha-on-error-active-token
yorha-on-info-active-token
```
