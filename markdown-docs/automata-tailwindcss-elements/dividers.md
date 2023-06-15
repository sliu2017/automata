# Dividers

Horizontal and vertical dividers are implemented through the `.hr` and `.divider-vertical` classes respectively.

## .hr

To create a horizontal divider, apply the `.hr` class to the `hr` tag.

```html
<hr class="hr" />
```

To change its thickness, apply a top border width class marked with `!important`.

```html
<hr class="hr !border-t-2" />
```

To change its styling, apply a border style class marked with `!important`.

```html
<hr class="hr !border-dashed" />
<hr class="hr !border-dotted" />
<hr class="hr !border-double" />
```

To change its color, apply a border color class marked with `!important`.

```html
<hr class="hr !border-secondary-300-700-token" />
```

The `.hr` class is equivalent to the following:

```html
<hr class="mx-auto block border-t-[0.1rem] border-solid border-primary-300-700-token" />
```

## .divider-vertical

To create a vertical divider, apply the `.divider-vertical` class to the `span` tag and add a height class.

```html
<span class="divider-vertical h-8" />
```

To change its thickness, apply a left border width class marked with `!important`.

```html
<span class="divider-vertical h-8 !border-l-2" />
```

To change its styling, apply a border style class marked with `!important`.

```html
<span class="divider-vertical h-8 !border-dashed" />
<span class="divider-vertical h-8 !border-dotted" />
<span class="divider-vertical h-8 !border-double" />
```

To change its color, apply a border color class marked with `!important`.

```html
<span class="divider-vertical h-8 !border-secondary-300-700-token" />
```

The `.divider-vertical` class is equivalent to the following:

```html
<span
  class="... mx-auto inline-block min-h-[10px] border-l border-solid border-primary-300-700-token"
/>
```
