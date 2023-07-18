# Placeholders

Placeholder styles are implemented through the `.placeholder`, `.placeholder-rounded`, `.placeholder-icon`, and `.placeholder-icon-circle` classes.

These classes are typically added to `div` elements with a background `.bg` class.

## Placeholder

Placeholders have two variants in `.placeholder` and `.placeholder-rounded`. They may be applied with a background `.bg` class for color and a height `.h` class for size.

### Placeholder (.placeholder)

To create an icon placeholder, apply the `.placeholder` class to a `div` tag.

```html
<div class="placeholder h-5 bg-primary-100-900-token" />
```

The `.placeholder` class contains the following styles:

```css
.placeholder {
  @apply rounded-base;
}
```

### Rounded Placeholder (.placeholder-rounded)

To create an icon placeholder, apply the `.placeholder-rounded` class to a `div` tag.

```html
<div class="placeholder-rounded h-5 bg-primary-100-900-token" />
```

The `.placeholder-rounded` class contains the following styles:

```css
.placeholder-rounded {
  @apply rounded-full;
}
```

## Icon Placeholder

Icon placeholders have two variants in `.placeholder-icon` and `.placeholder-icon-circle`. They may be applied with a background `.bg` class for color and a width `.w` class for size.

### Icon Placeholder (.placeholder-icon)

To create an icon placeholder, apply the `.placeholder-icon` class to a `div` tag.

```html
<div class="placeholder-icon w-10 bg-primary-100-900-token" />
```

The `.placeholder-icon` class contains the following styles:

```css
.placeholder-icon {
  @apply aspect-square rounded-base;
}
```

### Circle Icon Placholder (.placeholder-icon-circle)

To create a circle icon placeholder, apply the `.placeholder-icon-circle` class to a `div` tag.

```html
<div class="placeholder-icon-circle w-10 bg-primary-100-900-token" />
```

The `.placeholder-icon-circle` class contains the following styles:

```css
.placeholder-icon-circle {
  @apply aspect-square rounded-full;
}
```

## Animate Pulse (.animate-pulse)

To style a placeholder with an animated pulse, apply Tailwind CSS's `.animate-pulse` class.

```html
<div class="placeholder ... animate-pulse" />
<div class="placeholder-rounded ... animate-pulse" />
<div class="placeholder-icon ... animate-pulse" />
<div class="placeholder-icon-circle ... animate-pulse" />
```
