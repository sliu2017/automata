# Breadcrumbs

Breadcrumb styles can be implemented by applying the `.breadcrumb` and `.crumb` classes to the `ol` and `li` tags respectively.

```html
<ol class="breadcrumb">
  <li class="crumb">Page 1</li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">Page 2</li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">Page 3</li>
</ol>
```

## Breadcrumb (.breadcrumb)

To create the breadcrumb container, apply the `.breadcrumb` class to an `ol` tag.

```html
<ol class="breadcrumb">
  ...
</ol>
```

The `.breadcrumb` class contains the following styles:

```css
.breadcrumb {
  @apply flex w-full items-center space-x-4 overflow-x-auto;
}
```

## Crumb (.crumb)

To create a crumb, apply the `.crumb` class to a `li` tag.

```html
<ol class="breadcrumb">
  <li class="crumb">Page 1</li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">Page 2</li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">Page 3</li>
</ol>
```

Crumbs may also be a link or button by wrapping its contents with an `a` or `button` tag respectively.

```html
<ol class="breadcrumb">
  <li class="crumb">
    <a href="https://www.google.com/">Page 1</a>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <button>Page 2</button>
  </li>
</ol>
```

Crumb contents may also be an icon or text prefixed by an icon.

```html
<ol class="breadcrumb">
  <li class="crumb">
    <a href="https://www.google.com/">
      <i class="fa-solid fa-robot" />
    </a>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <button>
      <span><i class="fa-solid fa-robot" /></span>
      <span>Page 2</span>
    </button>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <i class="fa-solid fa-robot" />
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <span><i class="fa-solid fa-robot" /></span>
    <span>Page 4</span>
  </li>
</ol>
```

The `.crumb` class applies the following styles:

```css
.crumb {
  @apply flex items-center justify-center space-x-2 whitespace-nowrap;
}

.crumb a,
.crumb button {
  @apply flex items-center justify-center space-x-2 whitespace-nowrap;
}
```

### Clickable Crumb (.crumb-clickable)

To apply clickable styles to a crumb, apply the `.crumb-clickable` class to the `a` or `button` tag.

```html
<ol class="breadcrumb">
  <li class="crumb">
    <a class="crumb-clickable" href="https://www.google.com/">Page 1</a>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <button class="crumb-clickable">Page 2</button>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">Page 3</li>
</ol>
```

The `.crumb-clickable` class contains the following styles:

```css
.crumb-clickable {
  @apply flex items-center justify-center space-x-2 whitespace-nowrap underline hover:[&:not(*:disabled)]:[&:not(.crumb-disabled)]:brightness-[1.15];
}
```

### Disabled Crumb (.crumb-disabled)

To apply disabled styles to a crumb, apply the `.crumb-disabled` class to the `a` or `button` tag.

```html
<ol class="breadcrumb">
  <li class="crumb">
    <a class="... crumb-disabled" href="https://www.google.com/">Page 1</a>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <button class="... crumb-disabled">Page 2</button>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">Page 3</li>
</ol>
```

Alternatively, you may apply the `disabled` attribute if your crumb uses a `button` element. This will automatically apply the `.btn-disabled` class which contains the same styles as `.crumb-disabled`.

```html
<ol class="breadcrumb">
  <li class="crumb">
    <button ... disabled>Page 1</button>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <button ... disabled>Page 2</button>
  </li>
  <li aria-hidden>&rsaquo;</li>
  <li class="crumb">Page 3</li>
</ol>
```

The `.crumb-disabled` class contains the following styles:

```css
.crumb-disabled {
  @apply !cursor-not-allowed !opacity-50;
}
```

## Crumb Separators

`li` elements not marked by the `.crumb` class should be treated as separators and marked by the `aria-hidden` attribute. To change the separator, replace the contents with an icon or any valid unicode symbol.

```html
<ol class="breadcrumb">
  <li class="crumb">...</li>
  <li aria-hidden>/</li>
  <li class="crumb">...</li>
  <li aria-hidden>/</li>
  <li class="crumb">...</li>
</ol>
```
