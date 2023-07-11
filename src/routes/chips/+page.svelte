<script>
  const colors = [
    {
      label: 'Primary',
      standard: 'bt-primary-950-50-token',
    },
    {
      label: 'Secondary',
      standard: 'bt-secondary-950-50-token',
    },
    {
      label: 'Tertiary',
      standard: 'bt-tertiary-950-50-token',
    },
  ]
  const alertColors = [
    {
      label: 'Success',
      standard: 'bt-success-token',
    },
    {
      label: 'Warning',
      standard: 'bt-warning-token',
    },
    {
      label: 'Error',
      standard: 'bt-error-token',
    },
    {
      label: 'Info',
      standard: 'bt-info-token',
    },
    {
      label: 'On Success',
      standard: 'bt-on-success-token',
    },
    {
      label: 'On Warning',
      standard: 'bt-on-warning-token',
    },
    {
      label: 'On Error',
      standard: 'bt-on-error-token',
    },
    {
      label: 'On Info',
      standard: 'bt-on-info-token',
    },
  ]

  const sizes = [
    {
      label: 'Extra Small',
      chipSize: 'chip-xs',
    },
    {
      label: 'Small',
      chipSize: 'chip-sm',
    },
    {
      label: 'Normal',
      chipSize: '',
    },
    {
      label: 'Large',
      chipSize: 'chip-lg',
    },
    {
      label: 'Extra Large',
      chipSize: 'chip-xl',
    },
  ]
</script>

<h1 class="h1">Chips</h1>
<h2 class="h2 heading-banner border-primary-950-50-token">Chips</h2>
<div class="card m-4">
  <header class="card-header-yorha">Standard Variant</header>
  <section class="card-section-yorha flex flex-col gap-4">
    <div class="grid grid-cols-3 justify-items-center gap-4">
      {#each colors as color}
        <span class="chip chip-standard {color.standard}">
          Standard {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip chip-standard {color.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip chip-standard {alertColor.standard}">
          Standard {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip chip-standard {alertColor.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {alertColor.label}</span>
        </div>
      {/each}
    </div>
  </section>
</div>
<div class="card m-4">
  <header class="card-header-yorha">Rounded Variant</header>
  <section class="card-section-yorha flex flex-col gap-4">
    <div class="grid grid-cols-3 justify-items-center gap-4">
      {#each colors as color}
        <span class="chip chip-rounded {color.standard}">
          Rounded {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip chip-rounded {color.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Rounded {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip chip-rounded {alertColor.standard}">
          Rounded {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip chip-rounded {alertColor.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Rounded {alertColor.label}</span>
        </div>
      {/each}
    </div>
  </section>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Interactive Chips</h2>
<div class="card m-4">
  <header class="card-header-yorha">Standard Variant</header>
  <section class="card-section-yorha flex flex-col gap-4">
    <div class="grid grid-cols-3 justify-items-center gap-4">
      {#each colors as color}
        <span class="chip-interactive chip-standard {color.standard}">
          Standard {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip-interactive chip-standard {color.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip-interactive chip-standard {alertColor.standard}">
          Standard {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip-interactive chip-standard {alertColor.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {alertColor.label}</span>
        </div>
      {/each}
    </div>
  </section>
</div>
<div class="card m-4">
  <header class="card-header-yorha">Rounded Variant</header>
  <section class="card-section-yorha flex flex-col gap-4">
    <div class="grid grid-cols-3 justify-items-center gap-4">
      {#each colors as color}
        <span class="chip-interactive chip-rounded {color.standard}">
          Rounded {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip-interactive chip-rounded {color.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Rounded {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip-interactive chip-rounded {alertColor.standard}">
          Rounded {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip-interactive chip-rounded {alertColor.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Rounded {alertColor.label}</span>
        </div>
      {/each}
    </div>
  </section>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Chip Sizes</h2>
<div class="card m-4">
  <header class="card-header-yorha">Standard Variant</header>
  <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
    {#each sizes as size}
      <span class="chip chip-standard bt-primary-950-50-token {size.chipSize}">
        {size.label}
      </span>
      <div class="chip chip-standard bt-primary-950-50-token {size.chipSize}">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>{size.label}</span>
      </div>
    {/each}
  </section>
</div>
<div class="card m-4">
  <header class="card-header-yorha">Rounded Variant</header>
  <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
    {#each sizes as size}
      <span class="chip chip-rounded bt-primary-950-50-token {size.chipSize}">
        {size.label}
      </span>
      <div class="chip chip-rounded bt-primary-950-50-token {size.chipSize}">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>{size.label}</span>
      </div>
    {/each}
  </section>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Disabled</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Standard Variant</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <span class="chip chip-standard bt-primary-950-50-token chip-disabled">Disabled Class</span>
      <div class="chip chip-standard bt-primary-950-50-token chip-disabled">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Disabled Class</span>
      </div>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Rounded Variant</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      <span class="chip chip-rounded bt-primary-950-50-token chip-disabled">Disabled Class</span>
      <div class="chip chip-rounded bt-primary-950-50-token chip-disabled">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Disabled Class</span>
      </div>
    </section>
  </div>
</div>
