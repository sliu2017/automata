# Menus

Menu styles come in three types of menu classes: `.menu`, `.menu-dl`, and `.menu-nav` for menus, description menus, and navigation menus respectively.

## Menu (.menu)

To create a menu, apply the `.menu` class to a `ul` tag for unordered menus or a `ol` tag for ordered menus.

```html
<ul class="menu">
  <li class="menu-item">
    <span class="badge-icon">
      <i class="fa-solid fa-robot" />
    </span>
    <span class="flex-auto">Item</span>
  </li>
</ul>

<ol class="menu">
  <li class="menu-item">
    <span class="badge-icon">1</span>
    <span class="flex-auto">Item</span>
  </li>
</ol>
```

The `.menu` class contains the following styles:

```css
.menu {
  /* List Style */
  @apply list-none;
  /* Spacing */
  @apply space-y-1;
}
```

## Description Menu (.menu-dl)

To create a description menu, apply the `.menu-dl` class to a `dl` tag.

```html
<dl class="menu">
  <div class="menu-dl-item">
    <span class="badge"><i class="fa-solid fa-robot" /></span>
    <span class="flex-auto">
      <dt>Title</dt>
      <dd>Description</dd>
    </span>
  </div>
</dl>
```

The `.menu-dl` class contains the following styles:

```css
.menu-dl {
  /* List Style */
  @apply list-none;
  /* Spacing */
  @apply space-y-1;
}
```

## Navigation Menu (.menu-nav)

To create a navigation menu, apply the `.menu-nav` class to a `ul` tag. Please note that the `ul` element should be the child of a `nav` element.

```html
<nav>
  <ul class="menu-nav">
    <li class="menu-nav-item-interactive">
      <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
        <span class="badge"><i class="fa-solid fa-robot" /></span>
        <span class="flex-auto">Item</span>
      </a>
    </li>
  </ul>
</nav>
```

The `.menu-nav` class contains the following styles:

```css
.menu-nav {
  /* List Style */
  @apply list-none;
  /* Spacing */
  @apply space-y-1;
}
```

## Menu Items

Menu item styles come in three types of menu item classes: `.menu-item`, `.menu-dl-item`, and `.menu-nav-item` for menus, description menus, and navigation menus respectively. These classes should be used when creating items within menus.

Menu items also have three types of interactive menu item classes: `.menu-item-interactive`, `.menu-dl-item-interactive`, and `.menu-nav-item-interactive` that may be used in place of the aforementioned classes. These classes should be used when created menu items should be interactive.

All menu item classes apply a shared set of styles called `.menu-item-base-styles`. This class contains the following styles:

```css
.menu-item-base-styles {
  /* Borders */
  @apply rounded-base border-base outline-base outline-offset-base ring-base ring-offset-base border-token outline-token;
  /* Flex */
  @apply flex items-center gap-4;
}
```

### Menu Item (.menu-item)

To create a menu item with base menu item styles (`.menu-item-base-styles`) and menu item (`.menu-item`) specific styles, apply the `.menu-item` class to a `li` tag.

```html
<li class="menu-item">
  <span class="badge-icon">...</span>
  <span class="flex-auto">Item</span>
</li>

<li class="menu-item">
  <span class="badge-icon">...</span>
  <span class="flex-auto">Item</span>
  <div class="menu-item-actions">
    <button class="menu-item-actions-btn">Action</button>
    <button class="menu-item-actions-btn-icon">
      <i class="fa-solid fa-arrow-up-right-from-square" />
    </button>
  </div>
</li>
```

The `.menu-item` class contains the following styles:

```css
.menu-item {
  @apply menu-item-base-styles;
  /* Typography */
  @apply whitespace-normal break-words;
}
```

### Interactive Menu Item (.menu-item-interactive)

To create an interactive menu item with base menu item styles (`.menu-item-base-styles`) and interactive menu item (`.menu-item-interactive`) specific styles, apply the `.menu-item-interactive` class to a `li` tag. Please note that menu items can be wrapped by an anchor `a` element that must have the `.menu-item-a-wrapper` class.

```html
<li
  class="menu-item-interactive"
  on:click={() => {}}
  on:keypress
>
  <span class="badge-icon">
    ...
  </span>
  <span class="flex-auto">Item</span>
</li>

<a class="menu-item-a-wrapper" href="https://www.google.com/">
  <li class="menu-item-interactive">
    <span class="badge-icon">
      ...
    </span>
    <span class="flex-auto">Item</span>
  </li>
</a>
```

The `.menu-item-interactive` class contains the following styles:

```css
.menu-item-interactive {
  @apply menu-item cursor-pointer;
}
```

The `.menu-item-a-wrapper` class contains the following styles:

```css
.menu-item-a-wrapper {
  @apply z-10 block;
}
```

### Description Menu Item (.menu-dl-item)

To create a menu item with base menu item styles (`.menu-item-base-styles`) and description menu item (`.menu-dl-item`) specific styles, apply the `.menu-dl-item` class to a `div` tag.

```html
<div class="menu-dl-item">
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>Title</dt>
    <dd>Description</dd>
  </span>
</div>

<div class="menu-dl-item">
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>Title</dt>
    <dd>Description</dd>
  </span>
  <div class="menu-item-actions">
    <button class="menu-item-actions-btn">Action</button>
    <button class="menu-item-actions-btn-icon">
      <i class="fa-solid fa-arrow-up-right-from-square" />
    </button>
  </div>
</div>
```

The `.menu-dl-item` class contains the following styles:

```css
.menu-dl-item {
  @apply menu-item-base-styles;
  /* Typography */
  @apply whitespace-nowrap;
}
```

### Interactive Description Menu Item (.menu-dl-item-interactive)

To create an interactive description menu item with base menu item styles (`.menu-item-base-styles`) and interactive description menu item (`.menu-dl-item-interactive`) specific styles, apply the `.menu-dl-item-interactive` class to a `div` or `a` tag.

```html
<div
  class="menu-dl-item-interactive"
  on:click={() => {}}
  on:keypress
>
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>Title</dt>
    <dd>Description</dd>
  </span>
</div>

<a
  class="menu-dl-item-interactive"
  href="https://www.google.com/"
>
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>Title</dt>
    <dd>Description</dd>
  </span>
</a>
```

The `.menu-dl-item-interactive` class contains the following styles:

```css
.menu-dl-item-interactive {
  @apply menu-dl-item cursor-pointer;
}
```

### Navigation Menu Item (.menu-nav-item)

Although the `.menu-nav-item` class exists, it is not advised to apply this class to navigation menu items for accessibility purposes.

The `.menu-nav-item` class contains the following styles:

```css
.menu-nav-item {
  @apply menu-item-base-styles;
  /* Typography */
  @apply whitespace-normal break-words;
}
```

### Interactive Navigation Menu Item (.menu-nav-item-interactive)

To create an interactive navigation menu item with base menu item styles (`.menu-item-base-styles`) and interactive navigation menu item (`.menu-nav-item-interactive`) specific styles, apply the `.menu-nav-item-interactive` class to a `li` tag. Please note that the item contents should be wrapped by an anchor `a` element that must have the `.menu-nav-item-a-wrapper` class.

```html
<li class="menu-nav-item-interactive">
  <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
    <span class="badge"><i class="fa-solid fa-robot" /></span>
    <span class="flex-auto">Item</span>
  </a>
</li>
```

The `.menu-nav-item-interactive` class contains the following styles:

```css
.menu-nav-item-interactive {
  @apply menu-nav-item cursor-pointer;
}
```

The `.menu-nav-item-a-wrapper` class contains the following styles:

```css
.menu-nav-item-a-wrapper {
  @apply z-10 flex w-full whitespace-nowrap;
}
```

### Actions

Menu items (`.menu-item`) and description menu items (`.menu-dl-item`) may contain a section for action items. To create this section, apply the `.menu-item-actions` class to a `div` element whose parent element contains the `.menu-item` or `.menu-dl-item` class.

Within this section may be buttons `button` or anchor `a` elements with the `.menu-item-actions-btn` or `.menu-item-actions-btn-icon` classes for buttons or icon buttons respectively.

```html
<!-- Menu Item -->
<li class="menu-item">
  <span class="badge-icon">...</span>
  <span class="flex-auto">Item</span>
  <div class="menu-item-actions">
    <button class="menu-item-actions-btn">Action</button>
    <button class="menu-item-actions-btn-icon">
      <i class="fa-solid fa-arrow-up-right-from-square" />
    </button>
  </div>
</li>

<!-- Description Menu Item -->
<div class="menu-dl-item">
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>Title</dt>
    <dd>Description</dd>
  </span>
  <div class="menu-item-actions">
    <button class="menu-item-actions-btn">Action</button>
    <button class="menu-item-actions-btn-icon">
      <i class="fa-solid fa-arrow-up-right-from-square" />
    </button>
  </div>
</div>
```

The `.menu-item-actions` class contains the following styles:

```css
.menu-item-actions {
  @apply flex flex-none flex-nowrap items-center;
}
```

The `.menu-item-actions-btn` class contains the following styles:

```css
.menu-item-actions-btn {
  /* Button Styles */
  @apply btn btn-sm;
  /* Hover Brightness */
  @apply hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:brightness-[1.15];
  /* Transitions */
  @apply transition-all;
}
```

The `.menu-item-actions-btn-icon` class contains the following styles:

```css
.menu-item-actions-btn-icon {
  /* Button Styles */
  @apply btn-icon btn-icon-sm;
  /* Hover Brightness */
  @apply hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:brightness-[1.15];
  /* Transitions */
  @apply transition-all;
}
```

### Disabled

To apply disabled styles to an interactive menu item, apply the `.menu-item-disabled` class to the element that contains the interactive menu item class.

```html
<!-- Menu Item -->
<li
  class="menu-item-interactive menu-item-disabled"
  on:click={() => {}}
  on:keypress
>
  <span class="badge-icon">
    ...
  </span>
  <span class="flex-auto">Item</span>
</li>

<!-- Description Menu Item -->
<div
  class="menu-dl-item-interactive menu-item-disabled"
  on:click={() => {}}
  on:keypress
>
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>Title</dt>
    <dd>Description</dd>
  </span>
</div>

<!-- Navigation Menu Item -->
<li
  class="menu-nav-item-interactive menu-item-disabled"
>
  <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
    <span class="badge"><i class="fa-solid fa-robot" /></span>
    <span class="flex-auto">Item</span>
  </a>
</li>
```

The `.menu-item-disabled` class contains the following styles:

```css
.menu-item-disabled {
  @apply !cursor-not-allowed !opacity-50;
}
```

### Variants

Menu items come with two variant style classes, Standard (`.menu-item-standard`) and YoRHa (`.menu-item-yorha`).

#### Standard

To style a menu item with the Standard variant, apply the `.menu-item-standard` class with an optional `.bt` token or other background-text colors.

```html
<!-- Menu Item -->
<li
  class="menu-item-interactive menu-item-standard"
  on:click={() => {}}
  on:keypress
>
  <span class="badge-icon">
    ...
  </span>
  <span class="flex-auto">Standard</span>
</li>

<!-- Description Menu Item -->
<div
  class="menu-dl-item-interactive menu-item-standard bt-primary-950-50-token"
  on:click={() => {}}
  on:keypress
>
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>Standard</dt>
    <dd>Primary</dd>
  </span>
</div>

<!-- Navigation Menu Item -->
<li
  class="menu-nav-item-interactive menu-item-standard bt-success-token"
>
  <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
    <span class="badge"><i class="fa-solid fa-robot" /></span>
    <span class="flex-auto">Standard Success</span>
  </a>
</li>
```

The `.menu-item-standard` class contains the following styles:

```css
.menu-item-standard {
  /* Hover Brightness */
  @apply hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:brightness-[1.15];
  /* Transitions */
  @apply transition-all;
}
```

#### YoRHa

To style a menu item with the YoRHa variant, apply the `.menu-item-yorha` class with an optional `.yorha` token.

```html
<!-- Menu Item -->
<li
  class="menu-item-interactive menu-item-yorha yorha-primary-950-50-token"
  on:click={() => {}}
  on:keypress
>
  <span class="badge-icon">
    ...
  </span>
  <span class="flex-auto">YoRHa Primary</span>
</li>

<!-- Description Menu Item -->
<div
  class="menu-dl-item-interactive menu-item-yorha yorha-success-token"
  on:click={() => {}}
  on:keypress
>
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>YoRHa</dt>
    <dd>Success</dd>
  </span>
</div>

<!-- Navigation Menu Item -->
<li
  class="menu-nav-item-interactive menu-item-yorha yorha-on-error-token"
>
  <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
    <span class="badge"><i class="fa-solid fa-robot" /></span>
    <span class="flex-auto">YoRHa On Error</span>
  </a>
</li>
```

The `.menu-item-yorha` class contains the following styles:

```css
.menu-item-yorha {
  /* Content Area */
  @apply relative z-0 transition-all;
  /* Border Lines */
  @apply before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:w-0 before:border-y-2 before:transition-all before:duration-150 before:ease-out before:content-[''];
  /* Content Area Animation */
  @apply after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-[-1] after:w-0 after:transition-all after:duration-150 after:ease-out after:content-[''];
  /* Content Area on Hover */
  @apply hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:bg-transparent hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:shadow-base;
  /* Border Lines on Hover */
  @apply hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:before:bottom-[-4px] hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:before:top-[-4px] hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:before:w-full;
  /* Content Area Animation on Hover */
  @apply hover:[&:not(*:disabled)]:[&:not(.menu-item-disabled)]:after:w-full;
}
```

##### Active

To style a menu item with the YoRHa variant in an active state, apply the `.menu-item-yorha-active` class with an optional `.yorha` active token.

```html
<!-- Menu Item -->
<li
  class="menu-item-interactive menu-item-yorha-active yorha-primary-950-50-active-token"
  on:click={() => {}}
  on:keypress
>
  <span class="badge-icon">
    ...
  </span>
  <span class="flex-auto">YoRHa Primary Active</span>
</li>

<!-- Description Menu Item -->
<div
  class="menu-dl-item-interactive menu-item-yorha-active yorha-success-active-token"
  on:click={() => {}}
  on:keypress
>
  <span class="badge"><i class="fa-solid fa-robot" /></span>
  <span class="flex-auto">
    <dt>YoRHa</dt>
    <dd>Success Active</dd>
  </span>
</div>

<!-- Navigation Menu Item -->
<li
  class="menu-nav-item-interactive menu-item-yorha-active yorha-on-error-active-token"
>
  <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
    <span class="badge"><i class="fa-solid fa-robot" /></span>
    <span class="flex-auto">YoRHa On Error Active</span>
  </a>
</li>
```

The `.menu-item-yorha-active` class contains the following styles:

```css
.menu-item-yorha-active {
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

## Submenus

Creating submenus for menus, description menus, and navigation menus is demonstrated below:

```html
<!-- Menus -->
<ul class="menu">
  <li class="menu-item bt-primary-950-50-token">
    <span class="badge-icon">
      <i class="fa-solid fa-robot" />
    </span>
    <span class="flex-auto">Item</span>
  </li>
  <li class="menu-submenu-li-wrapper">
    <details class="menu-submenu-details-wrapper">
      <summary class="menu-submenu-summary">Submenu</summary>
      <ul class="menu menu-submenu-list border-primary-950-50-token">
        <li class="menu-item bt-primary-950-50-token">
          <div class="menu-submenu-item-click-wrapper">
            <span class="badge-icon">
              <i class="fa-solid fa-robot" />
            </span>
            <span class="flex-auto">Item</span>
          </div>
        </li>
        <li class="menu-submenu-li-wrapper">
          <details class="menu-submenu-details-wrapper">
            <summary class="menu-submenu-summary">Submenu</summary>
            <ul class="menu menu-submenu-list border-primary-950-50-token">
              <li class="menu-item bt-primary-950-50-token">
                <div class="menu-submenu-item-click-wrapper">
                  <span class="badge-icon">
                    <i class="fa-solid fa-robot" />
                  </span>
                  <span class="flex-auto">Item</span>
                </div>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
</ul>

<!-- Description Menus -->
<dl class="menu-dl">
  <div class="menu-dl-item bt-primary-950-50-token">
    <span class="badge"><i class="fa-solid fa-robot" /></span>
    <span class="flex-auto">
      <dt>Title</dt>
      <dd>Description</dd>
    </span>
  </div>
  <div class="menu-submenu-li-wrapper">
    <details class="menu-submenu-details-wrapper">
      <summary class="menu-submenu-summary">Submenu</summary>
      <dl class="menu-dl menu-submenu-list border-primary-950-50-token">
        <div class="menu-dl-item bt-primary-950-50-token">
          <div class="menu-submenu-item-click-wrapper">
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>Title</dt>
              <dd>Description</dd>
            </span>
          </div>
        </div>
        <div class="menu-submenu-li-wrapper">
          <details class="menu-submenu-details-wrapper">
            <summary class="menu-submenu-summary">Submenu</summary>
            <dl class="menu-dl menu-submenu-list border-primary-950-50-token">
              <div class="menu-dl-item bt-primary-950-50-token">
                <div class="menu-submenu-item-click-wrapper">
                  <span class="badge"><i class="fa-solid fa-robot" /></span>
                  <span class="flex-auto">
                    <dt>Title</dt>
                    <dd>Description</dd>
                  </span>
                </div>
              </div>
            </dl>
          </details>
        </div>
      </dl>
    </details>
  </div>
</dl>

<!-- Navigation Menus -->
<nav>
  <ul class="menu-nav">
    <li class="menu-nav-item bt-primary-950-50-token">
      <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
        <span class="badge"><i class="fa-solid fa-robot" /></span>
        <span class="flex-auto">Item</span>
      </a>
    </li>
    <li class="menu-submenu-li-wrapper">
      <details class="menu-submenu-details-wrapper">
        <summary class="menu-submenu-summary">Submenu</summary>
        <ul class="menu-nav menu-submenu-list border-primary-950-50-token">
          <li class="menu-nav-item bt-primary-950-50-token">
            <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
              <span class="badge"><i class="fa-solid fa-robot" /></span>
              <span class="flex-auto">Item</span>
            </a>
          </li>
          <li class="menu-submenu-li-wrapper">
            <details class="menu-submenu-details-wrapper">
              <summary class="menu-submenu-summary">Submenu</summary>
              <ul class="menu-nav menu-submenu-list border-primary-950-50-token">
                <li class="menu-nav-item bt-primary-950-50-token">
                  <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
                    <span class="badge"><i class="fa-solid fa-robot" /></span>
                    <span class="flex-auto">Item</span>
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
```

The `.menu-submenu-summary` class contains the following styles:

```css
.menu-submenu-summary {
  @apply cursor-pointer whitespace-nowrap transition-all hover:brightness-[1.15];
}
```

The `.menu-submenu-li-wrapper` class contains the following styles:

```css
.menu-submenu-li-wrapper {
  @apply z-10 flex w-full;
}
```

The `.menu-submenu-details-wrapper` class contains the following styles:

```css
.menu-submenu-details-wrapper {
  @apply z-10 flex w-full;
}
```

The `.menu-submenu-list` class contains the following styles:

```css
.menu-submenu-list {
  /* Margins */
  @apply ml-5 mt-1;
  /* Content Area */
  @apply relative z-0;
  /* Border Lines */
  @apply before:absolute before:bottom-0 before:left-[-16px] before:right-0 before:top-0 before:border-l-2;
}
```

The `.menu-submenu-item-click-wrapper` class contains the following styles:

```css
.menu-submenu-item-click-wrapper {
  @apply z-10 flex w-full whitespace-nowrap;
}
```
