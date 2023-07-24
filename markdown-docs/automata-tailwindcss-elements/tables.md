# Tables

Automata provides the following classes that can be applied to the various elements that may be used to create a table.

## Table Container (.table-container)

To create a table container, apply the `.table-container` class to a `div` tag.

```html
<div class="table-container">...</div>
```

The `.table-container` class contains the following styles:

```css
.table-container {
  /* Width */
  @apply w-full;
  /* Overflow */
  @apply overflow-x-auto;
  /* Borders */
  @apply rounded-container border-container outline-container outline-offset-container ring-container ring-offset-container border-container-token outline-container-token;
}
```

## Table (.table)

To create a table, apply the `.table` class to a `table` tag.

```html
<div class="table-container">
  <table class="table">
    ...
  </div>
</div>
```

The `.table` class contains the following styles:

```css
.table {
  /* Width */
  @apply w-full;
  /* Overflow */
  @apply overflow-hidden;
  /* Borders */
  @apply rounded-container border-container outline-container outline-offset-container ring-container ring-offset-container border-container-token outline-container-token;
  /* Table Layout */
  @apply table-auto;
}
```

## Table Head (.table-thead)

To create a table head, apply the `.table-thead` class to a `thead` tag with an optional border color.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        ...
      </tr>
    </thead>
    ...
  </div>
</div>
```

The `.table-thead` class contains the following styles:

```css
.table-thead {
  /* Border */
  @apply border-b;
}
```

## Table Cells (.table-th and .table-td)

To create table cells, apply the `.table-th` and `.table-td` classes to `th` and `td` tags respectively.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        <th class="table-th">...</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-td">...</td>
        ...
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="table-th" colspan="2">...</th>
        <td class="table-td">...</td>
      </tr>
    </tfoot>
  </div>
</div>
```

The `.table-th` and `.table-td` classes contains the following styles:

```css
.table-th,
.table-td {
  /* Typography */
  @apply text-left;
  /* Padding */
  @apply p-2;
}
```

## Options

Tables have a variety of optional classes that may be applied to customize certain aspects of a table.

### Cells

These classes are used to adjust the vertical padding of cells to make rows appear bigger or smaller.

#### Comfortable (.table-th-comfortable and .table-td-comfortable)

To make comfortable cells, add the `.table-th-comfortable` and `.table-td-comfortable` classes to `th` and `td` tags respectively.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        <th class="table-th table-th-comfortable">...</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-td table-td-comfortable">...</td>
        ...
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="table-th table-th-comfortable" colspan="2">...</th>
        <td class="table-td table-td-comfortable">...</td>
      </tr>
    </tfoot>
  </div>
</div>
```

The `.table-th-comfortable` and `.table-td-comfortable` classes contains the following styles:

```css
.table-th-comfortable,
.table-td-comfortable {
  @apply !py-3;
}
```

#### Compact (.table-th-compact and .table-td-compact)

To make compact cells, add the `.table-th-compact` and `.table-td-compact` classes to `th` and `td` tags respectively.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        <th class="table-th table-th-compact">...</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-td table-td-compact">...</td>
        ...
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="table-th table-th-compact" colspan="2">...</th>
        <td class="table-td table-td-compact">...</td>
      </tr>
    </tfoot>
  </div>
</div>
```

The `.table-th-compact` and `.table-td-compact` classes contains the following styles:

```css
.table-th-compact,
.table-td-compact {
  @apply !py-1;
}
```

### Row Dividers (.table-row-divider)

To make row dividers, add the `.table-row-divider` class to the `tbody` `tr` tags with an optional border color.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        <th class="table-th">...</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr class="table-row-divider border-primary-500/20">
        <td class="table-td">...</td>
        ...
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="table-th" colspan="2">...</th>
        <td class="table-td">...</td>
      </tr>
    </tfoot>
  </div>
</div>
```

The `.table-row-divider` class contains the following styles:

```css
.table-row-divider {
  /* Border */
  @apply border-b;
}
```

### Fit Width (.table-cell-fit)

To make cells fit width, add the `.table-cell-fit` class to the `tbody` `td` tags.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        <th class="table-th">...</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-td table-cell-fit">...</td>
        ...
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="table-th" colspan="2">...</th>
        <td class="table-td">...</td>
      </tr>
    </tfoot>
  </div>
</div>
```

The `.table-cell-fit` class contains the following styles:

```css
.table-cell-fit {
  @apply w-[1%] whitespace-nowrap;
}
```

### Sorting

These classes are used to mark whether a column is ascending or descending by adding a up or down arrow after column header text.

#### Ascending (.table-sort-asc)

To mark a column as ascending, add the `.table-sort-asc` class to the `thead` `th` tag.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        <th class="table-th table-sort-asc">...</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-td">...</td>
        ...
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="table-th" colspan="2">...</th>
        <td class="table-td">...</td>
      </tr>
    </tfoot>
  </div>
</div>
```

The `.table-sort-asc` class contains the following styles:

```css
.table-sort-asc {
  @apply after:px-2 after:opacity-50 after:!content-['↑'];
}
```

#### Descending (.table-sort-dsc)

To mark a column as descending, add the `.table-sort-dsc` class to the `thead` `th` tag.

```html
<div class="table-container">
  <table class="table">
    <thead class="table-thead border-primary-950-50-token">
      <tr>
        <th class="table-th table-sort-dsc">...</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-td">...</td>
        ...
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="table-th" colspan="2">...</th>
        <td class="table-td">...</td>
      </tr>
    </tfoot>
  </div>
</div>
```

The `.table-sort-dsc` class contains the following styles:

```css
.table-sort-dsc {
  @apply after:px-2 after:opacity-50 after:!content-['↓'];
}
```
