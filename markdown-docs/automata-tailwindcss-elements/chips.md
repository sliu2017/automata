# Chips

Chip styles are implemented through the `.chip` and `.chip-interactive` classes.

These classes are typically added to `span` elements.

Both `.chip` and `.chip-interactive` apply a shared set of styles called `.chip-base-styles`. This class contains the following styles:

```css
.chip-base-styles {
  /* Typography */
  @apply whitespace-nowrap text-center;
  /* Borders */
  @apply rounded-base border-base outline-base outline-offset-base ring-base ring-offset-base border-token outline-token;
  /* Flex */
  @apply inline-flex items-center justify-center gap-2;
  /* Padding */
  @apply px-3 py-1.5;
}
```

## Chip (.chip)

To create a chip with base chip styles (`.chip-base-styles`) and chip (`.chip`) specific styles, apply the `.chip` class to a `span` tag.

The following contains only text:

```html
<span class="chip">Chip</span>
```

The following contains text prefixed by an icon:

```html
<div class="chip">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
```

The `.chip` class contains the following styles:

```css
.chip {
  @apply chip-base-styles;
}
```

### Interactive Chip (.chip-interactive)

To create an interactive chip with base chip styles (`.chip-base-styles`) and interactive chip (`.chip-interactive`) specific styles, apply the `.chip-interactive` class to a `span` tag.

The following contains only text:

```html
<span class="chip-interactive" on:click={() => {}} on:keypress>Chip</span>
```

The following contains text prefixed by an icon:

```html
<div class="chip-interactive" on:click={() => {}} on:keypress>
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
```

The `.chip-interactive` class contains the following styles:

```css
.chip-interactive {
  @apply chip-base-styles;
  /* Cursor */
  @apply cursor-pointer;
  /* Hover Brightness */
  @apply hover:brightness-[1.15];
  /* Transitions */
  @apply transition-all;
}
```

### Chip Sizes

To change the preset size of a chip, apply a `.chip-xs`, `.chip-sm`, `.chip-lg`, or `.chip-xl` class for extra small, small, large, or extra large chips respectively.

```html
<span class="chip chip-xs">Extra Small Chip</span>
<div class="chip chip-sm">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Small Chip</span>
</div>
<span class="chip-interactive chip-lg" on:click={() => {}} on:keypress>Large Chip</span>
<div class="chip-interactive chip-xl" on:click={() => {}} on:keypress>
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Extra Large Chip</span>
</div>
```

The `.chip-xs` class contains the following styles:

```css
.chip-xs {
  @apply text-xs;
}
```

The `.chip-sm` class contains the following styles:

```css
.chip-sm {
  @apply text-sm;
}
```

The `.chip-lg` class contains the following styles:

```css
.chip-lg {
  @apply text-lg;
}
```

The `.chip-xl` class contains the following styles:

```css
.chip-xl {
  @apply text-xl;
}
```

### Chip Variants

Chips come with two types of variant styles classes, Standard (`.chip-standard`) and Rounded (`.chip-rounded`).

#### Standard (.chip-standard)

To style a chip with the Standard variant, apply the `.chip-standard` or a `.chip-standard-{color}`/`.chip-standard-{alertColor}`/`.chip-standard-on-{alertColor}` class.

```html
<span class="chip chip-standard">Chip</span>
<div class="chip chip-standard-primary">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
<span class="chip-interactive chip-standard-success" on:click={() => {}} on:keypress>Chip</span>
<div class="chip-interactive chip-standard-on-error" on:click={() => {}} on:keypress>
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
```

To use custom colors or shadings, apply the `.chip-standard` with background and text color classes.

```html
<span class="chip chip-standard bg-primary-800-200-token text-primary-200-800-token">Chip</span>
```

The `.chip-standard` class contains the following styles:

```css
.chip-standard {
  /* Shadow */
  @apply shadow-base;
}
```

The `.chip-standard-{color}` class contains the following styles:

```css
.chip-standard-{color} {
  /* Standard Styles */
  @apply chip-standard;
  /* Color */
  @apply bg-{color}-950-50-token text-{color}-50-950-token;
}
```

The `.chip-standard-{alertColor}` class contains the following styles:

```css
.chip-standard-{alertColor} {
  /* Standard Styles */
  @apply chip-standard;
  /* Color */
  @apply bg-{alertColor} text-on-{alertColor}-token;
}
```

The `.chip-standard-on-{alertColor}` class contains the following styles:

```css
.chip-standard-on-{alertColor} {
  /* Standard Styles */
  @apply chip-standard;
  /* Color */
  @apply text-{alertColor} bg-on-{alertColor}-token;
}
```

#### Rounded (.chip-rounded)

To style a chip with the Rounded variant, apply the `.chip-rounded` or a `.chip-rounded-{color}`/`.chip-rounded-{alertColor}`/`.chip-rounded-on-{alertColor}` class.

```html
<span class="chip chip-rounded">Chip</span>
<div class="chip chip-rounded-primary">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
<span class="chip-interactive chip-rounded-success" on:click={() => {}} on:keypress>Chip</span>
<div class="chip-interactive chip-rounded-on-error" on:click={() => {}} on:keypress>
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
```

To use custom colors or shadings, apply the `.chip-rounded` with background and text color classes.

```html
<span class="chip chip-rounded bg-primary-800-200-token text-primary-200-800-token">Chip</span>
```

The `.chip-rounded` class contains the following styles:

```css
.chip-rounded {
  /* Borders */
  @apply rounded-full;
  /* Shadow */
  @apply shadow-base;
}
```

The `.chip-rounded-{color}` class contains the following styles:

```css
.chip-rounded-{color} {
  /* Rounded Styles */
  @apply chip-rounded;
  /* Color */
  @apply bg-{color}-950-50-token text-{color}-50-950-token;
}
```

The `.chip-rounded-{alertColor}` class contains the following styles:

```css
.chip-rounded-{alertColor} {
  /* Rounded Styles */
  @apply chip-rounded;
  /* Color */
  @apply bg-{alertColor} text-on-{alertColor}-token;
}
```

The `.chip-rounded-on-{alertColor}` class contains the following styles:

```css
.chip-rounded-on-{alertColor} {
  /* Rounded Styles */
  @apply chip-rounded;
  /* Color */
  @apply text-{alertColor} bg-on-{alertColor}-token;
}
```

### Disabled

To disable a chip, apply the `.chip-disabled` class.

The `.chip-disabled` class contains the following styles:

```css
.chip-disabled {
  @apply !cursor-not-allowed !opacity-50;
}
```
