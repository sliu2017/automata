# Typography

Styling is automatically applied to all typography within the `body` element. The following classes are used:

```css
body {
  @apply stroke-base indent-base text-base font-base leading-base tracking-base decoration-base underline-offset-base font-token text-transform-token text-primary-950-50-token;
}
```

In addition to the typography styling, Automata provides classes that may be applied to certain elements...

## Inline Elements

### .a

To create an anchor element, apply the `.a` class to the `a` tag.

```html
<a class="a" href="www.google.com">a (anchor)</a>
```

The `.a` class is equivalent to the following:

```html
<a class="underline" href="www.google.com">a (anchor)</a>
```

### .code

To create a code element, apply the `.code` class to the `code` tag.

```html
<code class="code">code (code)</code>
```

The `.code` class is equivalent to the following:

```html
<code class="bg-primary-500/30 px-1 py-0.5 font-mono text-sm text-primary-900-100-token">
  code (code)
</code>
```

### .kbd

To create a kbd element, apply the `.kbd` class to the `kbd` tag.

```html
<kbd class="kbd">kbd (kbd)</kbd>
```

The `.kbd` class is equivalent to the following:

```html
<kbd
  class="border border-primary-200/70 bg-primary-100/70 p-0.5 font-sans text-sm font-bold ring-1 ring-primary-300/70 text-primary-900-100-token dark:border-primary-800/70 dark:bg-primary-900/70 dark:ring-primary-700/70"
>
  kbd (kbd)
</kbd>
```

### .mark

To create a mark element, apply the `.mark` class to the `mark` tag.

```html
<mark class="mark">mark (mark)</mark>
```

The `.mark` class is equivalent to the following:

```html
<mark class="bg-primary-500/30 text-primary-950-50-token">mark (mark)</mark>
```

### .time

To create a time element, apply the `.time` class to the `time` tag.

```html
<time class="time">time (datetime)</time>
```

The `.time` class is equivalent to the following:

```html
<time class="text-sm text-primary-900-100-token">time (datetime)</time>
```

## Headings

All heading classes are similar in styling with the only difference between each class being which font size class is used. Variant classes for applying a text shadow or banner style are also provided and can be used with all heading classes.

### .h1

To create a h1 element, apply the `.h1` class to the `h1` tag.

```html
<h1 class="h1">h1 (heading 1)</h1>
```

The `.h1` class is equivalent to the following:

```html
<h1
  class="stroke-heading indent-heading text-5xl font-heading leading-heading tracking-heading decoration-heading underline-offset-heading font-heading-token text-transform-heading-token"
>
  h1 (heading 1)
</h1>
```

### .h2

To create a h2 element, apply the `.h2` class to the `h2` tag.

```html
<h2 class="h2">h2 (heading 2)</h2>
```

The `.h2` class is equivalent to the following:

```html
<h2
  class="stroke-heading indent-heading text-4xl font-heading leading-heading tracking-heading decoration-heading underline-offset-heading font-heading-token text-transform-heading-token"
>
  h2 (heading 2)
</h2>
```

### .h3

To create a h3 element, apply the `.h3` class to the `h3` tag.

```html
<h3 class="h3">h3 (heading 3)</h3>
```

The `.h3` class is equivalent to the following:

```html
<h3
  class="stroke-heading indent-heading text-2xl font-heading leading-heading tracking-heading decoration-heading underline-offset-heading font-heading-token text-transform-heading-token"
>
  h3 (heading 3)
</h3>
```

### .h4

To create a h4 element, apply the `.h4` class to the `h4` tag.

```html
<h4 class="h4">h4 (heading 4)</h4>
```

The `.h4` class is equivalent to the following:

```html
<h4
  class="stroke-heading indent-heading text-xl font-heading leading-heading tracking-heading decoration-heading underline-offset-heading font-heading-token text-transform-heading-token"
>
  h4 (heading 4)
</h4>
```

### .h5

To create a h5 element, apply the `.h5` class to the `h5` tag.

```html
<h5 class="h5">h5 (heading 5)</h5>
```

The `.h5` class is equivalent to the following:

```html
<h5
  class="stroke-heading indent-heading text-lg font-heading leading-heading tracking-heading decoration-heading underline-offset-heading font-heading-token text-transform-heading-token"
>
  h5 (heading 5)
</h5>
```

### .h6

To create a h6 element, apply the `.h6` class to the `h6` tag.

```html
<h6 class="h6">h6 (heading 6)</h6>
```

The `.h6` class is equivalent to the following:

```html
<h6
  class="stroke-heading indent-heading text-base font-heading leading-heading tracking-heading decoration-heading underline-offset-heading font-heading-token text-transform-heading-token"
>
  h6 (heading 6)
</h6>
```

### Variants

#### Shadowed

To apply the shadowed variant to a headings element, append a `.heading-shadowed-{color}` class next to a headings class.

```html
<h1 class="h1 heading-shadowed-primary">h1 (heading 1)</h1>
<h2 class="h2 heading-shadowed-success">h2 (heading 2)</h2>
<h3 class="h3 heading-shadowed-on-error">h3 (heading 3)</h3>
```

The shadowed variant classes are formed using the following CSS templates:

```css
.heading-shadowed-{color} {
  text-shadow: 6px 6px 0 rgb(var(--color-{color}-500) / 0.3);
}
.heading-shadowed-{alertColor} {
  text-shadow: 6px 6px 0 rgb(var(--color-{alertColor}) / 0.3);
}
.heading-shadowed-on-{alertColor} {
  text-shadow: 6px 6px 0 rgb(var(--on-{alertColor}) / 0.3);
}
```

#### Banner

To apply the banner variant to a headings element, append a `.heading-banner` and a border color class next to a headings class.

```html
<h2 class="h2 heading-banner border-primary-950-50-token">
  h2 heading-banner border-primary-950-50-token
</h2>
```

The `.heading-banner` class is equivalent to the following:

```html
<h2 class="... border-y px-4 font-light">h2 heading-banner border-primary-950-50-token</h2>
```

## .blockquote

To create a blockquote element, apply the `.blockquote` class to the `blockquote` tag.

```html
<blockquote class="blockquote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut...
</blockquote>
```

The `.blockquote` class is equivalent to the following:

```html
<blockquote
  class="relative p-2 pl-8 before:absolute before:bottom-0 before:left-2 before:top-0 before:h-full before:w-4 before:border-l-8 before:border-r-2 before:border-primary-500/70"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut...
</blockquote>
```

## .pre

To create a preformatted element, apply the `.pre` class to the `pre` tag.

```html
<pre class="pre">
  const message = "Hello World!"
  console.log(message)
</pre>
```

The `.pre` class is equivalent to the following:

```html
<pre class="overflow-x-auto whitespace-pre-wrap bg-primary-500/30 p-4 font-mono text-sm">
  const message = "Hello World!"
  console.log(message)
</pre>
```

## Deleted and Inserted

### .del

To create a deleted element, apply the `.del` class to the `del` tag.

```html
<del class="del">del (deleted)</del>
```

The `.del` class contains the following tailwind classes:

```html
<del
  class="relative block overflow-x-auto whitespace-pre-wrap bg-error p-0.5 pl-5 font-mono text-sm text-on-error-token before:absolute before:left-1 before:content-['-']"
>
  del (deleted)
</del>
```

Please note that the `.del` class also contains `text-decoration: none;`.

### .ins

To create an inserted element, apply the `.ins` class to the `ins` tag.

```html
<ins class="ins">ins (inserted)</ins>
```

The `.ins` class contains the following tailwind classes:

```html
<ins
  class="relative block overflow-x-auto whitespace-pre-wrap bg-success p-0.5 pl-5 font-mono text-sm text-on-success-token before:absolute before:left-1 before:content-['+']"
>
  ins (inserted)
</ins>
```

Please note that the `.ins` class also contains `text-decoration: none;`.
