# Lists

List styles are provided through several classes that correspond the list tag they are used on.

## List (.list)

To create a list, apply the `.list` class to a `ul` tag.

```html
<ul class="list">
  <li>Hot</li>
  <li>Cross</li>
  <li>Buns</li>
</ul>
```

The `.list` class contains the following styles:

```css
.list {
  @apply list-none indent-base;
}
```

## Unordered List (.list-ul)

To create a list, apply the `.list-ul` class to a `ul` tag.

```html
<ul class="list-ul">
  <li>Hot</li>
  <li>Cross</li>
  <li>Buns</li>
</ul>
```

The `.list-ul` class contains the following styles:

```css
.list-ul {
  @apply list-inside list-disc indent-base;
}
```

## Ordered List (.list-ol)

To create a list, apply the `.list-ol` class to a `ol` tag.

```html
<ol class="list-ol">
  <li>Hot</li>
  <li>Cross</li>
  <li>Buns</li>
</ol>
```

The `.list-ol` class contains the following styles:

```css
.list-ol {
  @apply list-inside list-decimal indent-base;
}
```

## Description List (.list-dl)

To create a description list, apply the `.list-dl` class to a `dl` tag.

```html
<dl class="list-dl">
  <dt>Hot</dt>
  <dd>Fire</dd>
  <dt>Cross</dt>
  <dd>X</dd>
  <dt>Buns</dt>
  <dd>Bread</dd>
</dl>
```

The `.list-dl` class contains the following styles:

```css
.list-dl {
  @apply indent-base;
}
```

### Description List Variants

Description lists come with two variant style classes, Bright (`.list-dl-bright`) and Indent (`.list-dl-indent`).

#### Bright Variant (.list-dl-bright)

To style a description list with the Bright variant, apply the `.list-dl-bright` class to the `dl` tag. This will alter the brightness of the children marked by the `dd` tag.

```html
<dl class="list-dl list-dl-bright">
  <dt>Hot</dt>
  <dd>Fire</dd>
  <dt>Cross</dt>
  <dd>X</dd>
  <dt>Buns</dt>
  <dd>Bread</dd>
</dl>
```

The `.list-dl-bright` class applies the following styles:

```css
.list-dl-bright dd {
  @apply brightness-75;
}
```

#### Indent Variant (.list-dl-indent)

To style a description list with the Indent variant, apply the `.list-dl-indent` class to the `dl` tag. This will alter the indentation of the children marked by the `dd` tag.

```html
<dl class="list-dl list-dl-indent">
  <dt>Hot</dt>
  <dd>Fire</dd>
  <dt>Cross</dt>
  <dd>X</dd>
  <dt>Buns</dt>
  <dd>Bread</dd>
</dl>
```

The `.list-dl-indent` class applies the following styles:

```css
.list-dl-indent dd {
  @apply list-indent-1;
}
```

## List Indents

The following list indent classes are provided for nested lists: `.list-indent-1`, `.list-indent-2`, `.list-indent-3`, `.list-indent-4`, `.list-indent-5`.

```html
<ul class="list">
  <li>Hot</li>
  <li>Cross</li>
  <li>Buns</li>
  <li>
    Repeat
    <ul class="list list-indent-1">
      <li>Hot</li>
      <li>Cross</li>
      <li>Buns</li>
      <li>
        Repeat
        <ul class="list list-indent-2">
          <li>Hot</li>
          <li>Cross</li>
          <li>Buns</li>
          <li>
            Repeat
            <ul class="list list-indent-3">
              <li>Hot</li>
              <li>Cross</li>
              <li>Buns</li>
              <li>
                Repeat
                <ul class="list list-indent-4">
                  <li>Hot</li>
                  <li>Cross</li>
                  <li>Buns</li>
                  <li>
                    Repeat
                    <ul class="list list-indent-5">
                      <li>Hot</li>
                      <li>Cross</li>
                      <li>Buns</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

The `.list-indent-1` class contains the following styles:

```css
.list-indent-1 {
  text-indent: calc(var(--indent) + 16px);
}
```

The `.list-indent-2` class contains the following styles:

```css
.list-indent-2 {
  text-indent: calc(var(--indent) + 32px);
}
```

The `.list-indent-3` class contains the following styles:

```css
.list-indent-3 {
  text-indent: calc(var(--indent) + 48px);
}
```

The `.list-indent-4` class contains the following styles:

```css
.list-indent-4 {
  text-indent: calc(var(--indent) + 64px);
}
```

The `.list-indent-5` class contains the following styles:

```css
.list-indent-5 {
  text-indent: calc(var(--indent) + 80px);
}
```
