<script>
  const colors = [
    {
      label: '',
      standard: '',
      yorha: '',
      yorhaActive: '',
    },
    {
      label: 'Primary',
      standard: 'bt-primary-950-50-token',
      yorha: 'yorha-primary-950-50-token',
      yorhaActive: 'yorha-primary-950-50-active-token',
    },
    {
      label: 'Secondary',
      standard: 'bt-secondary-950-50-token',
      yorha: 'yorha-secondary-950-50-token',
      yorhaActive: 'yorha-secondary-950-50-active-token',
    },
    {
      label: 'Tertiary',
      standard: 'bt-tertiary-950-50-token',
      yorha: 'yorha-tertiary-950-50-token',
      yorhaActive: 'yorha-primary-950-50-active-token',
    },
    {
      label: 'Success',
      standard: 'bt-success-token',
      yorha: 'yorha-success-token',
      yorhaActive: 'yorha-success-active-token',
    },
    {
      label: 'Warning',
      standard: 'bt-warning-token',
      yorha: 'yorha-warning-token',
      yorhaActive: 'yorha-warning-active-token',
    },
    {
      label: 'Error',
      standard: 'bt-error-token',
      yorha: 'yorha-error-token',
      yorhaActive: 'yorha-error-active-token',
    },
    {
      label: 'Info',
      standard: 'bt-info-token',
      yorha: 'yorha-info-token',
      yorhaActive: 'yorha-info-active-token',
    },
    {
      label: 'On Success',
      standard: 'bt-on-success-token',
      yorha: 'yorha-on-success-token',
      yorhaActive: 'yorha-on-success-active-token',
    },
    {
      label: 'On Warning',
      standard: 'bt-on-warning-token',
      yorha: 'yorha-on-warning-token',
      yorhaActive: 'yorha-on-warning-active-token',
    },
    {
      label: 'On Error',
      standard: 'bt-on-error-token',
      yorha: 'yorha-on-error-token',
      yorhaActive: 'yorha-on-error-active-token',
    },
    {
      label: 'On Info',
      standard: 'bt-on-info-token',
      yorha: 'yorha-on-info-token',
      yorhaActive: 'yorha-on-info-active-token',
    },
  ]
</script>

<h1 class="h1">Menus</h1>

<h2 class="h2 heading-banner border-primary-950-50-token">Menu</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Menu Items</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each colors as color}
          <li class="menu-item {color.standard}">
            <span class="badge-icon">
              <i class="fa-solid fa-robot" />
            </span>
            <span class="flex-auto">{color.label} Item</span>
          </li>
        {/each}
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Menu Items with Actions</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each colors as color}
          <li class="menu-item {color.standard}">
            <span class="badge-icon">
              <i class="fa-solid fa-robot" />
            </span>
            <span class="flex-auto">{color.label} Item</span>
            <div class="menu-item-actions">
              <button class="menu-item-actions-btn">Action</button>
              <button class="menu-item-actions-btn-icon">
                <i class="fa-solid fa-arrow-up-right-from-square" />
              </button>
            </div>
          </li>
        {/each}
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive Standard Menu Item Buttons</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each colors as color}
          <li
            class="menu-item-interactive menu-item-standard {color.standard}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">
              <i class="fa-solid fa-robot" />
            </span>
            <span class="flex-auto">{color.label} Item</span>
          </li>
        {/each}
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive YoRHa Menu Item Buttons</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each colors as color}
          <li
            class="menu-item-interactive menu-item-yorha {color.yorha}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">
              <i class="fa-solid fa-robot" />
            </span>
            <span class="flex-auto">{color.label} Item</span>
          </li>
        {/each}
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive Standard Menu Item Links</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each colors as color}
          <a class="menu-item-a-wrapper" href="https://www.google.com/">
            <li class="menu-item-interactive menu-item-standard {color.standard}">
              <span class="badge-icon">
                <i class="fa-solid fa-robot" />
              </span>
              <span class="flex-auto">{color.label} Item</span>
            </li>
          </a>
        {/each}
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive YoRHa Menu Item Links</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each colors as color}
          <a class="menu-item-a-wrapper" href="https://www.google.com/">
            <li class="menu-item-interactive menu-item-yorha {color.yorha}">
              <span class="badge-icon">
                <i class="fa-solid fa-robot" />
              </span>
              <span class="flex-auto">{color.label} Item</span>
            </li>
          </a>
        {/each}
      </ul>
    </section>
  </div>
</div>

<h2 class="h2 heading-banner border-primary-950-50-token">Numbered Menu</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Menu Items</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each colors as color, i}
          <li class="menu-item {color.standard}">
            <span class="badge-icon">{i + 1}</span>
            <span class="flex-auto">{color.label} Item</span>
          </li>
        {/each}
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Menu Items with Actions</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each colors as color, i}
          <li class="menu-item {color.standard}">
            <span class="badge-icon">{i + 1}</span>
            <span class="flex-auto">{color.label} Item</span>
            <div class="menu-item-actions">
              <button class="menu-item-actions-btn">Action</button>
              <button class="menu-item-actions-btn-icon">
                <i class="fa-solid fa-arrow-up-right-from-square" />
              </button>
            </div>
          </li>
        {/each}
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive Standard Menu Item Buttons</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each colors as color, i}
          <li
            class="menu-item-interactive menu-item-standard {color.standard}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">{i + 1}</span>
            <span class="flex-auto">{color.label} Item</span>
          </li>
        {/each}
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive YoRHa Menu Item Buttons</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each colors as color, i}
          <li
            class="menu-item-interactive menu-item-yorha {color.yorha}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">{i + 1}</span>
            <span class="flex-auto">{color.label} Item</span>
          </li>
        {/each}
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive Standard Menu Item Links</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each colors as color, i}
          <a class="menu-item-a-wrapper" href="https://www.google.com/">
            <li class="menu-item-interactive menu-item-standard {color.standard}">
              <span class="badge-icon">{i + 1}</span>
              <span class="flex-auto">{color.label} Item</span>
            </li>
          </a>
        {/each}
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive YoRHa Menu Item Links</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each colors as color, i}
          <a class="menu-item-a-wrapper" href="https://www.google.com/">
            <li class="menu-item-interactive menu-item-yorha {color.yorha}">
              <span class="badge-icon">{i + 1}</span>
              <span class="flex-auto">{color.label} Item</span>
            </li>
          </a>
        {/each}
      </ol>
    </section>
  </div>
</div>

<h2 class="h2 heading-banner border-primary-950-50-token">Description Menu</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Menu Items</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each colors as color}
          <div class="menu-dl-item {color.standard}">
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>{color.label} Title</dt>
              <dd>{color.label} Description</dd>
            </span>
          </div>
        {/each}
      </dl>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Menu Items with Actions</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each colors as color}
          <div class="menu-dl-item {color.standard}">
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>{color.label} Title</dt>
              <dd>{color.label} Description</dd>
            </span>
            <div class="menu-item-actions">
              <button class="menu-item-actions-btn">Action</button>
              <button class="menu-item-actions-btn-icon">
                <i class="fa-solid fa-arrow-up-right-from-square" />
              </button>
            </div>
          </div>
        {/each}
      </dl>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive Standard Menu Item Buttons</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each colors as color}
          <div
            class="menu-dl-item-interactive menu-item-standard {color.standard}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>{color.label} Title</dt>
              <dd>{color.label} Description</dd>
            </span>
          </div>
        {/each}
      </dl>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive YoRHa Menu Item Buttons</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each colors as color}
          <div
            class="menu-dl-item-interactive menu-item-yorha {color.yorha}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>{color.label} Title</dt>
              <dd>{color.label} Description</dd>
            </span>
          </div>
        {/each}
      </dl>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive Standard Menu Item Links</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each colors as color}
          <a
            class="menu-dl-item-interactive menu-item-standard {color.standard}"
            href="https://www.google.com/"
          >
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>{color.label} Title</dt>
              <dd>{color.label} Description</dd>
            </span>
          </a>
        {/each}
      </dl>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive YoRHa Menu Item Links</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each colors as color}
          <a
            class="menu-dl-item-interactive menu-item-yorha {color.yorha}"
            href="https://www.google.com/"
          >
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>{color.label} Title</dt>
              <dd>{color.label} Description</dd>
            </span>
          </a>
        {/each}
      </dl>
    </section>
  </div>
</div>

<h2 class="h2 heading-banner border-primary-950-50-token">Navigation Menu</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Interactive Standard Menu Items</header>
    <section class="card-section-yorha">
      <nav>
        <ul class="menu-nav">
          {#each colors as color}
            <li class="menu-item-interactive menu-item-standard {color.standard}">
              <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
                <span class="badge"><i class="fa-solid fa-robot" /></span>
                <span class="flex-auto">{color.label} Item</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Interactive YoRHa Menu Items</header>
    <section class="card-section-yorha">
      <nav>
        <ul class="menu-nav">
          {#each colors as color}
            <li class="menu-item-interactive menu-item-yorha {color.yorha}">
              <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
                <span class="badge"><i class="fa-solid fa-robot" /></span>
                <span class="flex-auto">{color.label} Item</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </section>
  </div>
</div>

<h2 class="h2 heading-banner border-primary-950-50-token">Submenus</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Menu</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each Array.from(Array(3)) as _, i}
          <li
            class="menu-item-interactive menu-item-standard bt-primary-950-50-token"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">
              <i class="fa-solid fa-robot" />
            </span>
            <span class="flex-auto">Item {i + 1}</span>
          </li>
        {/each}
        <li>
          <details>
            <summary class="menu-submenu-summary menu-submenu-summary-standard">Submenu</summary>
            <ul class="menu menu-submenu-list border-primary-950-50-token">
              {#each Array.from(Array(3)) as _, i}
                <li class="menu-item-interactive menu-item-standard bt-primary-950-50-token">
                  <div class="menu-submenu-item-click-wrapper" on:click={() => {}} on:keypress>
                    <span class="badge-icon">
                      <i class="fa-solid fa-robot" />
                    </span>
                    <span class="flex-auto">Item {i + 1}</span>
                  </div>
                </li>
              {/each}
            </ul>
          </details>
        </li>
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Numbered Menu</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each Array.from(Array(3)) as _, i}
          <li
            class="menu-item-interactive menu-item-standard bt-primary-950-50-token"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">{i + 1}</span>
            <span class="flex-auto">Item {i + 1}</span>
          </li>
        {/each}
        <li>
          <details>
            <summary class="menu-submenu-summary menu-submenu-summary-standard">Submenu</summary>
            <ol class="menu menu-submenu-list border-primary-950-50-token">
              {#each Array.from(Array(3)) as _, i}
                <li class="menu-item-interactive menu-item-standard bt-primary-950-50-token">
                  <div class="menu-submenu-item-click-wrapper" on:click={() => {}} on:keypress>
                    <span class="badge-icon">{i + 1}</span>
                    <span class="flex-auto">Item {i + 1}</span>
                  </div>
                </li>
              {/each}
            </ol>
          </details>
        </li>
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Description Menu</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each Array.from(Array(3)) as _, i}
          <div
            class="menu-dl-item-interactive menu-item-standard bt-primary-950-50-token"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>Title {i + 1}</dt>
              <dd>Description {i + 1}</dd>
            </span>
          </div>
        {/each}
        <div>
          <details>
            <summary class="menu-submenu-summary menu-submenu-summary-standard">Submenu</summary>
            <dl class="menu-dl menu-submenu-list border-primary-950-50-token">
              {#each Array.from(Array(3)) as _, i}
                <div class="menu-dl-item-interactive menu-item-standard bt-primary-950-50-token">
                  <div class="menu-submenu-item-click-wrapper" on:click={() => {}} on:keypress>
                    <span class="badge"><i class="fa-solid fa-robot" /></span>
                    <span class="flex-auto">
                      <dt>Title {i + 1}</dt>
                      <dd>Description {i + 1}</dd>
                    </span>
                  </div>
                </div>
              {/each}
            </dl>
          </details>
        </div>
      </dl>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Navigation Menu</header>
    <section class="card-section-yorha">
      <nav>
        <ul class="menu-nav">
          {#each Array.from(Array(3)) as _, i}
            <li class="menu-item-interactive menu-item-standard bt-primary-950-50-token">
              <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
                <span class="badge"><i class="fa-solid fa-robot" /></span>
                <span class="flex-auto">Item {i + 1}</span>
              </a>
            </li>
          {/each}
          <li>
            <details>
              <summary class="menu-submenu-summary menu-submenu-summary-standard">Submenu</summary>
              <ul class="menu-nav menu-submenu-list border-primary-950-50-token">
                {#each Array.from(Array(3)) as _, i}
                  <li class="menu-item-interactive menu-item-standard bt-primary-950-50-token">
                    <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
                      <span class="badge"><i class="fa-solid fa-robot" /></span>
                      <span class="flex-auto">Item {i + 1}</span>
                    </a>
                  </li>
                {/each}
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</div>

<h2 class="h2 heading-banner border-primary-950-50-token">Disabled</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Menu</header>
    <section class="card-section-yorha">
      <ul class="menu">
        <li
          class="menu-item-interactive menu-item-standard menu-item-disabled bt-primary-950-50-token"
          on:click={() => {}}
          on:keypress
        >
          <span class="badge-icon">
            <i class="fa-solid fa-robot" />
          </span>
          <span class="flex-auto">Item</span>
        </li>
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Numbered Menu</header>
    <section class="card-section-yorha">
      <ol class="menu">
        <li
          class="menu-item-interactive menu-item-standard menu-item-disabled bt-primary-950-50-token"
          on:click={() => {}}
          on:keypress
        >
          <span class="badge-icon">1</span>
          <span class="flex-auto">Item</span>
        </li>
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Description Menu</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        <div
          class="menu-dl-item-interactive menu-item-standard menu-item-disabled bt-primary-950-50-token"
          on:click={() => {}}
          on:keypress
        >
          <span class="badge"><i class="fa-solid fa-robot" /></span>
          <span class="flex-auto">
            <dt>Title</dt>
            <dd>Description</dd>
          </span>
        </div>
      </dl>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Navigation Menu</header>
    <section class="card-section-yorha">
      <nav>
        <ul class="menu-nav">
          <li
            class="menu-item-interactive menu-item-standard menu-item-disabled bt-primary-950-50-token"
          >
            <a class="menu-nav-item-a-wrapper" href="https://www.google.com/">
              <span class="badge"><i class="fa-solid fa-robot" /></span>
              <span class="flex-auto">Item</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</div>

<h2 class="h2 heading-banner border-primary-950-50-token">YoRHa Active</h2>
<div class="m-4 grid grid-cols-1 gap-4">
  <div class="card">
    <header class="card-header-yorha">Menu</header>
    <section class="card-section-yorha">
      <ul class="menu">
        {#each colors as color}
          <li
            class="menu-item-interactive menu-item-yorha-active {color.yorhaActive}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">
              <i class="fa-solid fa-robot" />
            </span>
            <span class="flex-auto">{color.label} Active Item</span>
          </li>
        {/each}
      </ul>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Numbered Menu</header>
    <section class="card-section-yorha">
      <ol class="menu">
        {#each colors as color, i}
          <li
            class="menu-item-interactive menu-item-yorha-active {color.yorhaActive}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge-icon">{i + 1}</span>
            <span class="flex-auto">{color.label} Active Item</span>
          </li>
        {/each}
      </ol>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Description Menu</header>
    <section class="card-section-yorha">
      <dl class="menu-dl">
        {#each colors as color}
          <div
            class="menu-dl-item-interactive menu-item-yorha-active {color.yorhaActive}"
            on:click={() => {}}
            on:keypress
          >
            <span class="badge"><i class="fa-solid fa-robot" /></span>
            <span class="flex-auto">
              <dt>{color.label} Active Title</dt>
              <dd>{color.label} Active Description</dd>
            </span>
          </div>
        {/each}
      </dl>
    </section>
  </div>
</div>
