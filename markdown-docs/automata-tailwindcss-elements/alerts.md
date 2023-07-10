# Alerts

Alerts are implemented through the `.alert` class and provide container styles for alert notifications.

The class is typically added to `aside` tags.

## Alert (.alert)

To create an alert, apply the `.alert` class to an `aside` tag.

```html
<aside class="alert">Alert</aside>
<aside class="alert">
  <span><i class="fa-solid fa-robot" /></span>
  <span>Alert</span>
</aside>
```

The `.alert` class contains the following styles:

```css
.alert {
  /* Flex */
  @apply flex flex-nowrap items-center justify-center gap-4 overflow-hidden text-center;
  /* Padding */
  @apply p-4;
  /* Borders */
  @apply rounded-container border-container outline-container outline-offset-container ring-container ring-offset-container border-container-token outline-container-token;
}
```

### Alert Message

An alert may have a message section as its child. This may be added by applying the `alert-message` class to a `div` tag.

```html
<aside class="alert">
  <div class="alert-message">
    <h5 class="h5">Alert</h5>
    <p>Alert Message</p>
  </div>
</aside>
```

The `.alert-message` class contains the following styles:

```css
.alert-message {
  @apply flex flex-auto flex-col gap-1 overflow-auto text-left;
}
```

### Alert Actions

An alert may also have an actions section as its child. This may be added by applying the `alert-actions` class to a `div` tag.

```html
<aside class="alert">
  <span>Alert</span>
  <div class="alert-actions">
    <button class="btn-icon">
      <i class="fa-solid fa-xmark" />
    </button>
  </div>
</aside>
```

The `.alert-actions` class contains the following styles:

```css
.alert-actions {
  @apply flex flex-none flex-nowrap items-center gap-2;
}
```

### Alert Variants

Alerts come with one type of variant styles classes, Standard (`.alert-standard`).

#### Standard (.alert-standard)

To style an alert with the Standard variant, apply the `.alert-standard` or an `.alert-standard-{color}`/`.alert-standard-{alertColor}`/`.alert-standard-on-{alertColor}` class.

```html
<aside class="alert alert-standard">Alert</aside>
<aside class="alert alert-standard-primary">
  <span><i class="fa-solid fa-robot" /></span>
  <span>Alert</span>
</aside>
<aside class="alert alert-standard-success">Alert</aside>
<aside class="alert alert-standard-on-success">
  <span><i class="fa-solid fa-robot" /></span>
  <span>Alert</span>
</aside>
```

To use custom colors or shadings, apply the `.alert-standard` with background and text color classes.

```html
<aside class="alert alert-standard bg-primary-800-200-token text-primary-200-800-token">
  Alert
</aside>
```

The `.alert-standard` class contains the following styles:

```css
.alert-standard {
  /* Shadow */
  @apply shadow-container;
}
```

The `.alert-standard-{color}` class contains the following styles:

```css
.alert-standard-{color} {
  /* Standard Styles */
  @apply alert-standard;
  /* Color */
  @apply bg-{color}-950-50-token text-{color}-50-950-token;
}
```

The `.alert-standard-{alertColor}` class contains the following styles:

```css
.alert-standard-{alertColor} {
  /* Standard Styles */
  @apply alert-standard;
  /* Color */
  @apply bg-{alertColor} text-on-{alertColor}-token;
}
```

The `.alert-standard-on-{alertColor}` class contains the following styles:

```css
.alert-standard-on-{alertColor} {
  /* Standard Styles */
  @apply alert-standard;
  /* Color */
  @apply text-{alertColor} bg-on-{alertColor}-token;
}
```
