<script>
  const colors = [
    {
      label: 'Primary',
      standard: 'bt-primary-950-50-token',
      yorha: 'yorha-primary-950-50-token',
    },
    {
      label: 'Secondary',
      standard: 'bt-secondary-950-50-token',
      yorha: 'yorha-primary-950-50-token',
    },
    {
      label: 'Tertiary',
      standard: 'bt-tertiary-950-50-token',
      yorha: 'yorha-primary-950-50-token',
    },
  ]
  const alertColors = [
    {
      label: 'Success',
      standard: 'bt-success-token',
      yorha: 'yorha-success-token',
    },
    {
      label: 'Warning',
      standard: 'bt-warning-token',
      yorha: 'yorha-warning-token',
    },
    {
      label: 'Error',
      standard: 'bt-error-token',
      yorha: 'yorha-error-token',
    },
    {
      label: 'Info',
      standard: 'bt-info-token',
      yorha: 'yorha-info-token',
    },
    {
      label: 'On Success',
      standard: 'bt-on-success-token',
      yorha: 'yorha-on-success-token',
    },
    {
      label: 'On Warning',
      standard: 'bt-on-warning-token',
      yorha: 'yorha-on-warning-token',
    },
    {
      label: 'On Error',
      standard: 'bt-on-error-token',
      yorha: 'yorha-on-error-token',
    },
    {
      label: 'On Info',
      standard: 'bt-on-info-token',
      yorha: 'yorha-on-info-token',
    },
  ]

  const sizes = [
    {
      label: 'Small',
      btnSize: 'btn-sm',
      btnIconSize: 'btn-icon-sm',
    },
    {
      label: 'Normal',
      btnSize: '',
      btnIconSize: '',
    },
    {
      label: 'Large',
      btnSize: 'btn-lg',
      btnIconSize: 'btn-icon-lg',
    },
    {
      label: 'Extra Large',
      btnSize: 'btn-xl',
      btnIconSize: 'btn-icon-xl',
    },
  ]
</script>

<h1 class="h1">Buttons</h1>
<h2 class="h2 heading-banner border-primary-950-50-token">Buttons</h2>
<div class="m-4 flex flex-col gap-4">
  <div class="card">
    <header class="card-header-yorha">Standard Variant</header>
    <section class="card-section-yorha flex flex-col gap-4">
      <div class="grid grid-cols-3 justify-items-center gap-4">
        {#each colors as color}
          <button class="btn btn-standard {color.standard}">
            Standard {color.label}
          </button>
        {/each}
        {#each colors as color}
          <button class="btn btn-standard {color.standard}">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>Standard {color.label}</span>
          </button>
        {/each}
      </div>
      <div class="grid grid-cols-4 justify-items-center gap-4">
        {#each alertColors as alertColor}
          <button class="btn btn-standard {alertColor.standard}">
            Standard {alertColor.label}
          </button>
        {/each}
        {#each alertColors as alertColor}
          <button class="btn btn-standard {alertColor.standard}">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>Standard {alertColor.label}</span>
          </button>
        {/each}
      </div>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">YoRHa Variant</header>
    <section class="card-section-yorha flex flex-col gap-4">
      <div class="grid grid-cols-3 justify-items-center gap-4">
        {#each colors as color}
          <button class="btn btn-yorha {color.yorha}">
            YoRHa {color.label}
          </button>
        {/each}
        {#each colors as color}
          <button class="btn btn-yorha {color.yorha}">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>YoRHa {color.label}</span>
          </button>
        {/each}
      </div>
      <div class="grid grid-cols-4 justify-items-center gap-4">
        {#each alertColors as alertColor}
          <button class="btn btn-yorha {alertColor.yorha}">
            YoRHa {alertColor.label}
          </button>
        {/each}
        {#each alertColors as alertColor}
          <button class="btn btn-yorha {alertColor.yorha}">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>YoRHa {alertColor.label}</span>
          </button>
        {/each}
      </div>
    </section>
  </div>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Button Links</h2>
<div class="m-4 flex flex-col gap-4">
  <div class="card">
    <header class="card-header-yorha">Standard Variant</header>
    <section class="card-section-yorha flex flex-col gap-4">
      <div class="grid grid-cols-3 justify-items-center gap-4">
        {#each colors as color}
          <a class="btn btn-standard {color.standard}" href="https://www.google.com/">
            Standard {color.label}
          </a>
        {/each}
        {#each colors as color}
          <a class="btn btn-standard {color.standard}" href="https://www.google.com/">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>Standard {color.label}</span>
          </a>
        {/each}
      </div>
      <div class="grid grid-cols-4 justify-items-center gap-4">
        {#each alertColors as alertColor}
          <a class="btn btn-standard {alertColor.standard}" href="https://www.google.com/">
            Standard {alertColor.label}
          </a>
        {/each}
        {#each alertColors as alertColor}
          <a class="btn btn-standard {alertColor.standard}" href="https://www.google.com/">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>Standard {alertColor.label}</span>
          </a>
        {/each}
      </div>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">YoRHa Variant</header>
    <section class="card-section-yorha flex flex-col gap-4">
      <div class="grid grid-cols-3 justify-items-center gap-4">
        {#each colors as color}
          <a class="btn btn-yorha {color.yorha}" href="https://www.google.com/">
            YoRHa {color.label}
          </a>
        {/each}
        {#each colors as color}
          <a class="btn btn-yorha {color.yorha}" href="https://www.google.com/">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>YoRHa {color.label}</span>
          </a>
        {/each}
      </div>
      <div class="grid grid-cols-4 justify-items-center gap-4">
        {#each alertColors as alertColor}
          <a class="btn btn-yorha {alertColor.yorha}" href="https://www.google.com/">
            YoRHa {alertColor.label}
          </a>
        {/each}
        {#each alertColors as alertColor}
          <a class="btn btn-yorha {alertColor.yorha}" href="https://www.google.com/">
            <span>
              <i class="fa-solid fa-robot" />
            </span>
            <span>YoRHa {alertColor.label}</span>
          </a>
        {/each}
      </div>
    </section>
  </div>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Icon Buttons</h2>
<div class="m-4 grid grid-cols-4 gap-4">
  <div class="card">
    <header class="card-header-yorha">Standard Button</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each colors as color}
        <div class="flex items-center gap-4">
          <button class="btn-icon btn-icon-standard {color.standard}">
            <i class="fa-solid fa-robot" />
          </button>
          <p>{color.label}</p>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <button class="btn-icon btn-icon-standard {alertColor.standard}">
            <i class="fa-solid fa-robot" />
          </button>
          <p>{alertColor.label}</p>
        </div>
      {/each}
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Circle Button</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each colors as color}
        <div class="flex items-center gap-4">
          <button class="btn-icon btn-icon-circle {color.standard}">
            <i class="fa-solid fa-robot" />
          </button>
          <p>{color.label}</p>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <button class="btn-icon btn-icon-circle {alertColor.standard}">
            <i class="fa-solid fa-robot" />
          </button>
          <p>{alertColor.label}</p>
        </div>
      {/each}
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Standard Button Link</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each colors as color}
        <div class="flex items-center gap-4">
          <a class="btn-icon btn-icon-standard {color.standard}" href="https://www.google.com/">
            <i class="fa-solid fa-robot" />
          </a>
          <p>{color.label}</p>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <a
            class="btn-icon btn-icon-standard {alertColor.standard}"
            href="https://www.google.com/"
          >
            <i class="fa-solid fa-robot" />
          </a>
          <p>{alertColor.label}</p>
        </div>
      {/each}
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Circle Button Link</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each colors as color}
        <div class="flex items-center gap-4">
          <a class="btn-icon btn-icon-circle {color.standard}" href="https://www.google.com/">
            <i class="fa-solid fa-robot" />
          </a>
          <p>{color.label}</p>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <a class="btn-icon btn-icon-circle {alertColor.standard}" href="https://www.google.com/">
            <i class="fa-solid fa-robot" />
          </a>
          <p>{alertColor.label}</p>
        </div>
      {/each}
    </section>
  </div>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Button Sizes</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Standard Button</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      {#each sizes as size}
        <button class="btn btn-standard bt-primary-950-50-token {size.btnSize}">
          {size.label}
        </button>
        <button class="btn btn-standard bt-primary-950-50-token {size.btnSize}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>
            {size.label}
          </span>
        </button>
      {/each}
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">YoRHa Button</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      {#each sizes as size}
        <button class="btn btn-yorha yorha-primary-950-50-token {size.btnSize}">
          {size.label}
        </button>
        <button class="btn btn-yorha yorha-primary-950-50-token {size.btnSize}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>
            {size.label}
          </span>
        </button>
      {/each}
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Standard Icon Button</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each sizes as size}
        <div class="flex items-center gap-4">
          <button class="btn-icon btn-icon-standard bt-primary-950-50-token {size.btnIconSize}">
            <i class="fa-solid fa-robot" />
          </button>
          <p>{size.label}</p>
        </div>
      {/each}
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Circle Icon Button</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each sizes as size}
        <div class="flex items-center gap-4">
          <button class="btn-icon btn-icon-circle bt-primary-950-50-token {size.btnIconSize}">
            <i class="fa-solid fa-robot" />
          </button>
          <p>{size.label}</p>
        </div>
      {/each}
    </section>
  </div>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Disabled</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Disabled Standard Button</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <button class="btn btn-standard bt-primary-950-50-token" disabled>Disabled</button>
      <button class="btn btn-standard bt-primary-950-50-token" disabled>
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Disabled</span>
      </button>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Disabled YoRHa Button</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <button class="btn btn-yorha yorha-primary-950-50-token" disabled>Disabled</button>
      <button class="btn btn-yorha yorha-primary-950-50-token" disabled>
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Disabled</span>
      </button>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Standard Button with Disabled Class</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <button class="btn btn-standard bt-primary-950-50-token btn-disabled">Disabled Class</button>
      <button class="btn btn-standard bt-primary-950-50-token btn-disabled">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Disabled Class</span>
      </button>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">YoRHa Button with Disabled Class</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <button class="btn btn-yorha yorha-primary-950-50-token btn-disabled">Disabled Class</button>
      <button class="btn btn-yorha yorha-primary-950-50-token btn-disabled">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Disabled Class</span>
      </button>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Disabled Icon Buttons</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <button class="btn-icon btn-icon-standard bt-primary-950-50-token" disabled>
        <i class="fa-solid fa-robot" />
      </button>
      <button class="btn-icon btn-icon-circle bt-primary-950-50-token" disabled>
        <i class="fa-solid fa-robot" />
      </button>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Icon Buttons with Disabled Class</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <button class="btn-icon btn-icon-standard bt-primary-950-50-token btn-disabled">
        <i class="fa-solid fa-robot" />
      </button>
      <button class="btn-icon btn-icon-circle bt-primary-950-50-token btn-disabled">
        <i class="fa-solid fa-robot" />
      </button>
    </section>
  </div>
</div>
