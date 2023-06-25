# Buttons

Button styles come in two types of button classes: `.btn` and `.btn-icon` for buttons and icons buttons respectively.

These classes are typically added to anchor (`a`) elements or button (`button`) elements.

Both `.btn` and `.btn-icon` apply a shared set of styles called `.btn-base-styles`. This class contains the following styles:

```css
.btn-base-styles {
  /* Typography */
  @apply whitespace-nowrap stroke-base text-center text-base font-base tracking-base font-token text-transform-token;
  /* Borders */
  @apply border-base outline-base outline-offset-base ring-base ring-offset-base border-token outline-token;
  /* Flex Columns */
  @apply inline-flex items-center justify-center space-x-2;
  /* Appearance */
  @apply appearance-none;
}
```

## Button (.btn)

To create a button with base button styles (`.btn-base-styles`) and button (`.btn`) specific styles, apply the `.btn` class to an `a` or `button` tag.

```html
<button class="btn">Button</button>
<a class="btn" href="https://www.google.com/">Button</a>
```

Button text may also be prefixed by an icon.

```html
<button class="btn">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Button</span>
</button>
```

The `.btn` class contains the following styles:

```css
.btn {
  @apply btn-base-styles;
  /* Borders */
  @apply rounded-base;
  /* Padding */
  @apply px-5 py-2;
}
```

### Button Sizes

To change the preset size of a button, apply a `.btn-sm`, `.btn-lg`, or `.btn-xl` class for small, large, or extra large buttons respectively.

```html
<button class="btn btn-sm">Small Button</button>
<button class="btn btn-lg">Large Button</button>
<button class="btn btn-xl">Extra Large Button</button>
```

The `.btn-sm` class contains the following styles:

```css
.btn-sm {
  @apply px-3 py-1 text-sm;
}
```

The `.btn-lg` class contains the following styles:

```css
.btn-lg {
  @apply px-7 py-3 text-lg;
}
```

The `.btn-xl` class contains the following styles:

```css
.btn-xl {
  @apply px-9 py-4 text-xl;
}
```

### Button Variants

Buttons come with two variant style classes, Standard (.btn-standard) and YoRHa (.btn-yorha).

#### Standard (.btn-standard)

To style a button with the Standard variant, apply the `.btn-standard` or a `.btn-standard-{color}`/`.btn-standard-{alertColor}`/`.btn-standard-on-{alertColor}` class.

```html
<button class="btn btn-standard">Standard</button>
<a class="btn btn-standard-primary" href="https://www.google.com/">Standard Primary</a>
<button class="btn btn-standard-success">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Standard Success</span>
</button>
<a class="btn btn-standard-on-error" href="https://www.google.com/">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Standard On Error</span>
</a>
```

To use custom colors or shadings, apply the `.btn-standard` with background and text color classes.

```html
<button class="btn btn-standard bg-primary-800-200-token text-primary-200-800-token">
  Standard
</button>
```

The `.btn-standard` class contains the following styles:

```css
.btn-standard {
  /* Shadow */
  @apply shadow-base;
  /* Hover Brightness */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:brightness-[1.15];
  /* Transitions */
  @apply transition-all;
}
```

The `.btn-standard-{color}` class contains the following styles:

```css
.btn-standard-{color} {
  /* Standard Styles */
  @apply btn-standard;
  /* Color */
  @apply bg-{color}-950-50-token text-{color}-50-950-token;
}
```

The `.btn-standard-{alertColor}` class contains the following styles:

```css
.btn-standard-{alertColor} {
  /* Standard Styles */
  @apply btn-standard;
  /* Color */
  @apply bg-{alertColor} text-on-{alertColor}-token;
}
```

The `.btn-standard-on-{alertColor}` class contains the following styles:

```css
.btn-standard-on-{alertColor} {
  /* Standard Styles */
  @apply btn-standard;
  /* Color */
  @apply text-{alertColor} bg-on-{alertColor}-token;
}
```

#### YoRHa (.btn-yorha)

To style a button with the YoRHa variant, apply the `.btn-yorha` or a `.btn-yorha-{color}`/`.btn-yorha-{alertColor}`/`.btn-yorha-on-{alertColor}` class.

```html
<button class="btn btn-yorha">YoRHa</button>
<a class="btn btn-yorha-primary" href="https://www.google.com/">YoRHa Primary</a>
<button class="btn btn-yorha-success">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>YoRHa Success</span>
</button>
<a class="btn btn-yorha-on-error" href="https://www.google.com/">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>YoRHa On Error</span>
</a>
```

An example of a YoRHa styled button with custom colors and shadings may look like the following:

```html
<button
  class="
    btn
    btn-yorha
    bg-primary-200-200-token
    hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:text-{color}-50-950-token
    text-primary-800-200-token
    before:border-primary-800-200-token
    after:bg-primary-800-200-token
  "
>
  YoRHa
</button>
```

The `.btn-yorha` class contains the following styles:

```css
.btn-yorha {
  /* Content Area */
  @apply relative z-0 transition-all;
  /* Border Lines */
  @apply before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:w-0 before:border-y-2 before:transition-all before:duration-150 before:ease-out before:content-[''];
  /* Content Area Animation */
  @apply after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-[-1] after:w-0 after:transition-all after:duration-150 after:ease-out after:content-[''];
  /* Content Area on Hover */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:bg-transparent hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:shadow-base;
  /* Border Lines on Hover */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:before:bottom-[-4px] hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:before:top-[-4px] hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:before:w-full;
  /* Content Area Animation on Hover */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:after:w-full;
}
```

The `.btn-yorha-{color}` class contains the following styles:

```css
.btn-yorha-{color} {
  /* YoRHa Styles */
  @apply btn-yorha;
  /* Color */
  @apply bg-{color}-50-950-token text-{color}-950-50-token;
  /* Border Lines Color */
  @apply before:border-{color}-950-50-token;
  /* Content Area Animation Color */
  @apply after:bg-{color}-950-50-token;
  /* Text Hover Color */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:text-{color}-50-950-token;
}
```

The `.btn-yorha-{alertColor}` class contains the following styles:

```css
.btn-yorha-{alertColor} {
  /* YoRHa Styles */
  @apply btn-yorha;
  /* Color */
  @apply text-{alertColor} bg-on-{alertColor}-token;
  /* Border Lines Color */
  @apply before:border-{alertColor};
  /* Content Area Animation Color */
  @apply after:bg-{alertColor};
  /* Text Hover Color */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:text-on-{alertColor}-token;
}
```

The `.btn-yorha-on-{alertColor}` class contains the following styles:

```css
.btn-yorha-on-{alertColor} {
  /* YoRHa Styles */
  @apply btn-yorha;
  /* Color */
  @apply bg-{alertColor} text-on-{alertColor}-token;
  /* Border Lines Color */
  @apply before:border-on-{alertColor}-token;
  /* Content Area Animation Color */
  @apply after:bg-on-{alertColor}-token;
  /* Text Hover Color */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:text-{alertColor};
}
```

## Icon Button (.btn-icon)

To create an icon button with base button styles (`.btn-base-styles`) and icon button (`.btn-icon`) specific styles, apply the `.btn-icon` class to an `a` or `button` tag.

```html
<button class="btn-icon">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn-icon" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
```

The `.btn-icon` class contains the following styles:

```css
.btn-icon {
  @apply btn-base-styles;
  /* Borders */
  @apply rounded-none;
  /* Padding */
  @apply p-0;
  /* Dimensions */
  @apply aspect-square w-10;
}
```

### Icon Button Sizes

To change the preset size of an icon button, apply a `.btn-icon-sm`, `.btn-icon-lg`, or `.btn-icon-xl` class for small, large, or extra large icon buttons respectively.

```html
<button class="btn btn-icon-sm">
  <i class="fa-solid fa-robot" />
</button>
<button class="btn btn-icon-lg">
  <i class="fa-solid fa-robot" />
</button>
<button class="btn btn-icon-xl">
  <i class="fa-solid fa-robot" />
</button>
```

The `.btn-icon-sm` class contains the following styles:

```css
.btn-icon-sm {
  @apply w-7 text-sm;
}
```

The `.btn-icon-lg` class contains the following styles:

```css
.btn-icon-lg {
  @apply w-[3.25rem] text-lg;
}
```

The `.btn-icon-xl` class contains the following styles:

```css
.btn-icon-xl {
  @apply w-[3.75rem] text-xl;
}
```

### Icon Button Variants

Icon buttons come with two variant style classes, Standard (.btn-icon-standard) and Circle (.btn-icon-circle).

#### Standard (.btn-icon-standard)

To style an icon button with the Standard variant, apply the `.btn-icon-standard` or a `.btn-icon-standard-{color}`/`.btn-icon-standard-{alertColor}`/`.btn-icon-standard-on-{alertColor}` class.

```html
<button class="btn btn-icon-standard">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-standard-primary" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
<button class="btn btn-icon-standard-success">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-standard-on-error" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
```

To use custom colors or shadings, apply the `.btn-icon-standard` with background and text color classes.

```html
<button class="btn btn-icon-standard bg-primary-800-200-token text-primary-200-800-token">
  <i class="fa-solid fa-robot" />
</button>
```

The `.btn-icon-standard` class contains the following styles:

```css
.btn-icon-standard {
  /* Shadow */
  @apply shadow-base;
  /* Hover Brightness */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:brightness-[1.15];
  /* Transitions */
  @apply transition-all;
}
```

The `.btn-icon-standard-{color}` class contains the following styles:

```css
.btn-icon-standard-{color} {
  /* Standard Styles */
  @apply btn-icon-standard;
  /* Color */
  @apply bg-{color}-950-50-token text-{color}-50-950-token;
}
```

The `.btn-icon-standard-{alertColor}` class contains the following styles:

```css
.btn-icon-standard-{alertColor} {
  /* Standard Styles */
  @apply btn-icon-standard;
  /* Color */
  @apply bg-{alertColor} text-on-{alertColor}-token;
}
```

The `.btn-icon-standard-on-{alertColor}` class contains the following styles:

```css
.btn-icon-standard-on-{alertColor} {
  /* Standard Styles */
  @apply btn-icon-standard;
  /* Color */
  @apply text-{alertColor} bg-on-{alertColor}-token;
}
```

#### Circle (.btn-icon-circle)

To style an icon button with the Circle variant, apply the `.btn-icon-circle` or a `.btn-icon-circle-{color}`/`.btn-icon-circle-{alertColor}`/`.btn-icon-circle-on-{alertColor}` class.

```html
<button class="btn btn-icon-circle">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-circle-primary" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
<button class="btn btn-icon-circle-success">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-circle-on-error" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
```

To use custom colors or shadings, apply the `.btn-icon-circle` with background and text color classes.

```html
<button class="btn btn-icon-circle bg-primary-800-200-token text-primary-200-800-token">
  <i class="fa-solid fa-robot" />
</button>
```

The `.btn-icon-circle` class contains the following styles:

```css
.btn-icon-circle {
  /* Borders */
  @apply rounded-full;
  /* Shadow */
  @apply shadow-base;
  /* Hover Brightness */
  @apply hover:[&:not(*:disabled)]:[&:not(.btn-disabled)]:brightness-[1.15];
  /* Transitions */
  @apply transition-all;
}
```

The `.btn-icon-circle-{color}` class contains the following styles:

```css
.btn-icon-circle-{color} {
  /* Circle Styles */
  @apply btn-icon-circle;
  /* Color */
  @apply bg-{color}-950-50-token text-{color}-50-950-token;
}
```

The `.btn-icon-circle-{alertColor}` class contains the following styles:

```css
.btn-icon-circle-{alertColor} {
  /* Circle Styles */
  @apply btn-icon-circle;
  /* Color */
  @apply bg-{alertColor} text-on-{alertColor}-token;
}
```

The `.btn-icon-circle-on-{alertColor}` class contains the following styles:

```css
.btn-icon-circle-on-{alertColor} {
  /* Circle Styles */
  @apply btn-icon-circle;
  /* Color */
  @apply text-{alertColor} bg-on-{alertColor}-token;
}
```

## Disabled Buttons

To disable a button or an icon button, add the `disabled` attribute to the `button` element. This will apply the `.btn-disabled` class which will apply a set of styles and disable other button styles. The `btn-disabled` class may also be used to force an element to show the disabled state.

The `.btn-disabled` class contains the following styles:

```css
.btn-disabled {
  @apply !cursor-not-allowed !opacity-50;
}
```
