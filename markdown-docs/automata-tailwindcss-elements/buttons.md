# Buttons

Button styles come in two types of button classes: `.btn` and `.btn-icon` for buttons and icons buttons respectively.

These classes are typically added to anchor (`a`) elements or button (`button`) elements.

Both `.btn` and `.btn-icon` apply a shared set of styles called `.btn-base-styles`. This class contains the following styles:

```css
.btn-base-styles {
  /* Typography */
  @apply whitespace-nowrap stroke-base text-center text-base font-base tracking-base font-token text-transform-token;
  /* Borders */
  @apply rounded-base border-base outline-base outline-offset-base ring-base ring-offset-base border-token outline-token;
  /* Flex Columns */
  @apply inline-flex items-center justify-center gap-2;
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

Buttons come with two variant style classes, Standard (`.btn-standard`) and YoRHa (`.btn-yorha`).

#### Standard (.btn-standard)

To style a button with the Standard variant, apply the `.btn-standard` class with an optional `.bt` token or other background-text colors.

```html
<button class="btn btn-standard">Standard</button>
<a class="btn btn-standard bt-primary-950-50-token" href="https://www.google.com/">
  Standard Primary
</a>
<button class="btn btn-standard bt-success-token">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Standard Success</span>
</button>
<a class="btn btn-standard bt-on-error-token" href="https://www.google.com/">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Standard On Error</span>
</a>
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

#### YoRHa (.btn-yorha)

To style a button with the YoRHa variant, apply the `.btn-yorha` class with an optional `.yorha` token.

```html
<button class="btn btn-yorha">YoRHa</button>
<a class="btn btn-yorha yorha-primary-950-50-token" href="https://www.google.com/">YoRHa Primary</a>
<button class="btn btn-yorha yorha-success-token">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>YoRHa Success</span>
</button>
<a class="btn btn-yorha yorha-on-error-token" href="https://www.google.com/">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>YoRHa On Error</span>
</a>
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

##### Active (.btn-yorha-active)

To style a button with the YoRHa variant in an active state, apply the `.btn-yorha-active` class with an optional `.yorha` active token.

```html
<button class="btn btn-yorha-active">YoRHa Active</button>
<a class="btn btn-yorha-active yorha-primary-950-50-active-token" href="https://www.google.com/">
  YoRHa Primary Active
</a>
<button class="btn btn-yorha-active yorha-success-active-token">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>YoRHa Success Active</span>
</button>
<a class="btn btn-yorha-active yorha-on-error-active-token" href="https://www.google.com/">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>YoRHa On Error Active</span>
</a>
```

The `.btn-yorha-active` class contains the following styles:

```css
.btn-yorha-active {
  /* Content Area */
  @apply relative z-0 transition-all;
  /* Border Lines */
  @apply before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:w-0 before:border-y-2 before:transition-all before:duration-150 before:ease-out before:content-[''];
  /* Content Area Animation */
  @apply after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-[-1] after:w-0 after:transition-all after:duration-150 after:ease-out after:content-[''];
  /* Content Area */
  @apply bg-transparent shadow-base;
  /* Border Lines */
  @apply before:bottom-[-4px] before:top-[-4px] before:w-full;
  /* Content Area Animation */
  @apply after:w-full;
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

To style an icon button with the Standard variant, apply the `.btn-icon-standard` class with an optional `.bt` token or other background-text colors.

```html
<button class="btn btn-icon-standard">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-standard bt-primary-950-50-token" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
<button class="btn btn-icon-standard bt-success-token">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-standard bt-on-error-token" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
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

#### Circle (.btn-icon-circle)

To style an icon button with the Circle variant, apply the `.btn-icon-circle` class with an optional `.bt` token or other background-text colors.

```html
<button class="btn btn-icon-circle">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-circle bt-primary-950-50-token" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
<button class="btn btn-icon-circle bt-success-token">
  <i class="fa-solid fa-robot" />
</button>
<a class="btn btn-icon-circle bt-on-error-token" href="https://www.google.com/">
  <i class="fa-solid fa-robot" />
</a>
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

## Disabled Buttons

To disable a button or an icon button, add the `disabled` attribute to the `button` element. This will apply the `.btn-disabled` class which will apply a set of styles and disable other button styles. The `.btn-disabled` class may also be used to force an element to show the disabled state.

The `.btn-disabled` class contains the following styles:

```css
.btn-disabled {
  @apply !cursor-not-allowed !opacity-50;
}
```
