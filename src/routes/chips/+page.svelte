<script>
  const colors = [
    {
      label: 'Primary',
      chipStandard: 'chip-standard-primary',
      chipRounded: 'chip-rounded-primary',
    },
    {
      label: 'Secondary',
      chipStandard: 'chip-standard-secondary',
      chipRounded: 'chip-rounded-secondary',
    },
    {
      label: 'Tertiary',
      chipStandard: 'chip-standard-tertiary',
      chipRounded: 'chip-rounded-tertiary',
    },
  ]
  const alertColors = [
    {
      label: 'Success',
      chipStandard: 'chip-standard-success',
      chipRounded: 'chip-rounded-success',
    },
    {
      label: 'Warning',
      chipStandard: 'chip-standard-warning',
      chipRounded: 'chip-rounded-warning',
    },
    {
      label: 'Error',
      chipStandard: 'chip-standard-error',
      chipRounded: 'chip-rounded-error',
    },
    {
      label: 'Info',
      chipStandard: 'chip-standard-info',
      chipRounded: 'chip-rounded-info',
    },
    {
      label: 'On Success',
      chipStandard: 'chip-standard-on-success',
      chipRounded: 'chip-rounded-on-success',
    },
    {
      label: 'On Warning',
      chipStandard: 'chip-standard-on-warning',
      chipRounded: 'chip-rounded-on-warning',
    },
    {
      label: 'On Error',
      chipStandard: 'chip-standard-on-error',
      chipRounded: 'chip-rounded-on-error',
    },
    {
      label: 'On Info',
      chipStandard: 'chip-standard-on-info',
      chipRounded: 'chip-rounded-on-info',
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
        <span class="chip {color.chipStandard}">
          Standard {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip {color.chipStandard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip {alertColor.chipStandard}">
          Standard {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip {alertColor.chipStandard}">
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
        <span class="chip {color.chipRounded}">
          Rounded {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip {color.chipRounded}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Rounded {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip {alertColor.chipRounded}">
          Rounded {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip {alertColor.chipRounded}">
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
        <span class="chip-interactive {color.chipStandard}">
          Standard {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip-interactive {color.chipStandard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip-interactive {alertColor.chipStandard}">
          Standard {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip-interactive {alertColor.chipStandard}">
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
        <span class="chip-interactive {color.chipRounded}">
          Rounded {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="chip-interactive {color.chipRounded}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Rounded {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="chip-interactive {alertColor.chipRounded}">
          Rounded {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="chip-interactive {alertColor.chipRounded}">
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
      <span class="chip chip-standard-primary {size.chipSize}">
        {size.label}
      </span>
      <div class="chip chip-standard-primary {size.chipSize}">
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
      <span class="chip chip-rounded-primary {size.chipSize}">
        {size.label}
      </span>
      <div class="chip chip-rounded-primary {size.chipSize}">
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
      <span class="chip chip-standard-primary chip-disabled">Disabled Class</span>
      <div class="chip chip-standard-primary chip-disabled">
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
      <span class="chip chip-rounded-primary chip-disabled">Disabled Class</span>
      <div class="chip chip-rounded-primary chip-disabled">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Disabled Class</span>
      </div>
    </section>
  </div>
</div>
