# Badges

Badge styles come in two types of badge classes: `.badge` and `.badge-icon` for badges and icons badges respectively.

These classes are typically added to `span` or `div` elements.

Both `.badge` and `.badge-icon` apply a shared set of styles called `.badge-base-styles`. This class contains the following styles:

```css
.badge-base-styles {
  /* Typography */
  @apply whitespace-nowrap stroke-base text-base font-base tracking-base font-token text-transform-token;
  /* Borders */
  @apply rounded-base border-base outline-base outline-offset-base ring-base ring-offset-base border-token outline-token;
  /* Flex */
  @apply items-center justify-center gap-2;
}
```

## Badge (.badge)

To create a badge with base badge styles (`.badge-base-styles`) and badge (`.badge`) specific styles, apply the `.badge` class to a `span` or `div` tag.

The following contains only text:

```html
<span class="badge">Badge</span>
```

The following contains text prefixed by an icon:

```html
<div class="badge">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Badge</span>
</div>
```

The `.badge` class contains the following styles:

```css
.badge {
  @apply badge-base-styles;
  /* Padding */
  @apply px-2 py-0.5;
  /* Flex */
  @apply inline-flex;
}
```

### Badge Sizes

To change the preset size of a badge, apply a `.badge-xs`, `.badge-sm`, `.badge-lg`, or `.badge-xl` class for extra small, small, large, or extra large badges respectively.

```html
<span class="badge badge-xs">Extra Small Badge</span>
<div class="badge badge-sm">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Small Badge</span>
</div>
<span class="badge badge-lg">Large Badge</span>
<div class="badge badge-xl">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Extra Large Badge</span>
</div>
```

The `.badge-xs` class contains the following styles:

```css
.badge-xs {
  @apply px-1 py-0 text-xs;
}
```

The `.badge-sm` class contains the following styles:

```css
.badge-sm {
  @apply px-1.5 py-px text-sm;
}
```

The `.badge-lg` class contains the following styles:

```css
.badge-lg {
  @apply px-2.5 py-1 text-lg;
}
```

The `.badge-xl` class contains the following styles:

```css
.badge-xl {
  @apply px-3 py-1.5 text-xl;
}
```

### Badge Variants

Badges come with one type of variant style classes, Standard (`.badge-standard`).

#### Standard (.badge-standard)

To style a badge with the Standard variant, apply the `.badge-standard` class with an optional `.bt` token or other background-text colors.

```html
<span class="badge badge-standard">Standard</span>
<div class="badge badge-standard bt-primary-950-50-token">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Standard Primary</span>
</div>
<span class="badge badge bt-success-token">Standard Success</span>
<div class="badge badge-standard bt-on-error-token">
  <span>
    <i class="fa-solid fa-robot" />
  </span>
  <span>Standard On Error</span>
</div>
```

The `.badge-standard` class contains the following styles:

```css
.badge-standard {
  /* Shadow */
  @apply shadow-base;
}
```

## Icon Badge (.badge-icon)

To create an icon badge with base badge styles (`.badge-base-styles`) and icon badge (`.badge-icon`) specific styles, apply the `.badge-icon` class to a `span` tag.

```html
<span class="badge-icon">
  <i class="fa-solid fa-robot" />
</span>
```

The `.badge-icon` class contains the following styles:

```css
.badge-icon {
  @apply badge-base-styles;
  /* Padding */
  @apply p-0;
  /* Dimensions */
  @apply aspect-square w-7;
  /* Flex */
  @apply flex;
}
```

### Icon Badge Sizes

To change the preset size of an icon badge, apply a `.badge-icon-xs`, `.badge-icon-sm`, `.badge-icon-lg`, or `.badge-icon-xl` class for extra small, small, large, or extra large icon badges respectively.

```html
<span class="badge-icon badge-icon-xs">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-sm">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-lg">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-xl">
  <i class="fa-solid fa-robot" />
</span>
```

The `.badge-icon-xs` class contains the following styles:

```css
.badge-icon-xs {
  @apply w-5 text-xs;
}
```

The `.badge-icon-sm` class contains the following styles:

```css
.badge-icon-sm {
  @apply w-6 text-sm;
}
```

The `.badge-icon-lg` class contains the following styles:

```css
.badge-icon-lg {
  @apply w-8 text-lg;
}
```

The `.badge-icon-xl` class contains the following styles:

```css
.badge-icon-xl {
  @apply w-9 text-xl;
}
```

### Icon Badge Variants

Icon badges come with two variant style classes, Standard (.badge-icon-standard) and Circle (.badge-icon-circle).

#### Standard (.badge-icon-standard)

To style an icon badge with the Standard variant, apply the `.badge-icon-standard` class with an optional `.bt` token or other background-text colors.

```html
<span class="badge-icon badge-icon-standard">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-standard bt-primary-950-50-token">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-standard bt-success-token">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-standard bt-on-error-token">
  <i class="fa-solid fa-robot" />
</span>
```

The `.badge-icon-standard` class contains the following styles:

```css
.badge-icon-standard {
  /* Shadow */
  @apply shadow-base;
}
```

#### Circle (.badge-icon-circle)

To style an icon badge with the Circle variant, apply the `.badge-icon-circle` class with an optional `.bt` token or other background-text colors.

```html
<span class="badge-icon badge-icon-circle">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-circle bt-primary-950-50-token">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-circle bt-success-token">
  <i class="fa-solid fa-robot" />
</span>
<span class="badge-icon badge-icon-circle bt-on-error-token">
  <i class="fa-solid fa-robot" />
</span>
```

The `.badge-icon-circle` class contains the following styles:

```css
.badge-icon-circle {
  /* Borders */
  @apply rounded-full;
  /* Shadow */
  @apply shadow-base;
}
```

## Overlapping

The following is an example of how to overlap a badge:

```html
<div class="relative inline-block">
  <span class="badge badge-xs absolute -right-0 -top-0 z-10">Badge</span>
  <div class="badge badge-xl">Content</div>
</div>
```
