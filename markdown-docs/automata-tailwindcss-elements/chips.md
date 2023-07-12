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

To style a chip with the Standard variant, apply the `.chip-standard` class with an optional `.bt` token or other background-text colors.

```html
<span class="chip chip-standard">Chip</span>
<div class="chip chip-standard bt-primary-950-50-token">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
<span class="chip-interactive chip-standard bt-success-token" on:click={() => {}} on:keypress>Chip</span>
<div class="chip-interactive chip-standard bt-on-error-token" on:click={() => {}} on:keypress>
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
```

The `.chip-standard` class contains the following styles:

```css
.chip-standard {
  /* Shadow */
  @apply shadow-base;
}
```

#### Rounded (.chip-rounded)

To style a chip with the Rounded variant, apply the `.chip-rounded` class with an optional `.bt` token or other background-text colors.

```html
<span class="chip chip-rounded">Chip</span>
<div class="chip chip-rounded bt-primary-950-50-token">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
<span class="chip-interactive chip-rounded bt-success-token" on:click={() => {}} on:keypress>Chip</span>
<div class="chip-interactive chip-rounded bt-on-error-token" on:click={() => {}} on:keypress>
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Chip</span>
</div>
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

### Disabled

To disable a chip, apply the `.chip-disabled` class.

The `.chip-disabled` class contains the following styles:

```css
.chip-disabled {
  @apply !cursor-not-allowed !opacity-50;
}
```
