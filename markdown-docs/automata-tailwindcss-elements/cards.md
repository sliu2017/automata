# Cards

Cards are implemented through the `.card` class and provide container styles.

The class is typically added to `div` tags with the intention of separating its children from its neighbors.

## Card (.card)

To create a card, apply the `.card` class to a `.div` or any similar tag.

```html
<div class="card">Card</div>
```

To change the card's preset colors or shades, add background and text color classes with the important (`!`) modifier.

```html
<div class="card !bg-success !text-primary-950">Card</div>
```

The `.card` class contains the following styles:

```css
.card {
  /* Background Color */
  @apply bg-primary-200-800-token;
  /* Text Color */
  @apply text-primary-800-200-token;
  /* Borders */
  @apply rounded-container border-container outline-container outline-offset-container ring-container ring-offset-container border-container-token outline-container-token;
  /* Shadow */
  @apply shadow-container;
}
```

### Card with Regions

A card may have `header`, `section`, and/or `footer` elements as its children. These elements may be styled by applying the `.card-header`, `.card-section`, and `.card-footer` classes respectively.

```html
<div class="card">
  <header class="card-header">Header</header>
  <section class="card-section">Section</section>
  <footer class="card-footer">Footer</footer>
</div>
```

The `.card-header` class contains the following styles:

```css
.card-header {
  @apply p-4 pb-2;
}
```

The `.card-section` class contains the following styles:

```css
.card-section {
  @apply px-4 py-2;
}
```

The `.card-footer` class contains the following styles:

```css
.card-footer {
  @apply p-4 pt-2;
}
```

### Card with YoRHa Regions

Alternatively, the `header`, `section`, and `footer` elements may be styled with the `.card-header-yorha`, `.card-section-yorha`, and `.card-footer-yorha` classes respectively.

```html
<div class="card">
  <header class="card-header-yorha">Header</header>
  <section class="card-section-yorha">Section</section>
  <footer class="card-footer-yorha">Footer</footer>
</div>
```

The `.card-header-yorha` class contains the following styles:

```css
.card-header-yorha {
  /* Background Color */
  @apply bg-primary-800-200-token;
  /* Text Color */
  @apply text-primary-200-800-token;
  /* Text Size */
  @apply text-xl;
  /* Padding */
  @apply px-4 py-2;
}
```

The `.card-section-yorha` class contains the following styles:

```css
.card-section-yorha {
  @apply p-4;
}
```

The `.card-footer-yorha` class contains the following styles:

```css
.card-footer-yorha {
  @apply px-4 pb-4;
}
```
