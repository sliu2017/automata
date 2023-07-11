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
      badgeSize: 'badge-xs',
      badgeIconSize: 'badge-icon-xs',
    },
    {
      label: 'Small',
      badgeSize: 'badge-sm',
      badgeIconSize: 'badge-icon-sm',
    },
    {
      label: 'Normal',
      badgeSize: '',
      badgeIconSize: '',
    },
    {
      label: 'Large',
      badgeSize: 'badge-lg',
      badgeIconSize: 'badge-icon-lg',
    },
    {
      label: 'Extra Large',
      badgeSize: 'badge-xl',
      badgeIconSize: 'badge-icon-xl',
    },
  ]
</script>

<h1 class="h1">Badges</h1>
<h2 class="h2 heading-banner border-primary-950-50-token">Badges</h2>
<div class="card m-4">
  <section class="card-section-yorha flex flex-col gap-4">
    <div class="grid grid-cols-3 justify-items-center gap-4">
      {#each colors as color}
        <span class="badge badge-standard {color.standard}">
          Standard {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="badge badge-standard {color.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="badge badge-standard {alertColor.standard}">
          Standard {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="badge badge-standard {alertColor.standard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {alertColor.label}</span>
        </div>
      {/each}
    </div>
  </section>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Icon Badges</h2>
<div class="m-4 grid grid-cols-2 gap-4">
  <div class="card">
    <header class="card-header-yorha">Standard Badge</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each colors as color}
        <div class="flex items-center gap-4">
          <span class="badge-icon badge-icon-standard {color.standard}">
            <i class="fa-solid fa-robot" />
          </span>
          <span>{color.label}</span>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <span class="badge-icon badge-icon-standard {alertColor.standard}">
            <i class="fa-solid fa-robot" />
          </span>
          <span>{alertColor.label}</span>
        </div>
      {/each}
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Circle Badge</header>
    <section class="card-section-yorha flex flex-col gap-4">
      {#each colors as color}
        <div class="flex items-center gap-4">
          <span class="badge-icon badge-icon-circle {color.standard}">
            <i class="fa-solid fa-robot" />
          </span>
          <span>{color.label}</span>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <span class="badge-icon badge-icon-circle {alertColor.standard}">
            <i class="fa-solid fa-robot" />
          </span>
          <span>{alertColor.label}</span>
        </div>
      {/each}
    </section>
  </div>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Badge Sizes</h2>
<div class="m-4 flex flex-col gap-4">
  <div class="card">
    <header class="card-header-yorha">Standard Badge</header>
    <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4">
      {#each sizes as size}
        <span class="badge badge-standard bt-primary-950-50-token {size.badgeSize}">
          {size.label}
        </span>
        <div class="badge badge-standard bt-primary-950-50-token {size.badgeSize}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>{size.label}</span>
        </div>
      {/each}
    </section>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="card">
      <header class="card-header-yorha">Standard Icon Badge</header>
      <section class="card-section-yorha flex flex-col gap-4">
        {#each sizes as size}
          <div class="flex items-center gap-4">
            <span
              class="badge-icon badge-icon-standard bt-primary-950-50-token {size.badgeIconSize}"
            >
              <i class="fa-solid fa-robot" />
            </span>
            <span>{size.label}</span>
          </div>
        {/each}
      </section>
    </div>
    <div class="card">
      <header class="card-header-yorha">Circle Icon Badge</header>
      <section class="card-section-yorha flex flex-col gap-4">
        {#each sizes as size}
          <div class="flex items-center gap-4">
            <span class="badge-icon badge-icon-circle bt-primary-950-50-token {size.badgeIconSize}">
              <i class="fa-solid fa-robot" />
            </span>
            <span>{size.label}</span>
          </div>
        {/each}
      </section>
    </div>
  </div>
</div>
<h2 class="h2 heading-banner border-primary-950-50-token">Overlapping</h2>
<div class="card m-4">
  <section class="card-section-yorha">
    <div class="grid grid-cols-2 justify-items-center gap-4">
      <div class="relative inline-block">
        <span
          class="badge badge-standard badge-xs bt-primary-950-50-active-token absolute -right-5 -top-2 z-10"
        >
          Badge
        </span>
        <div class="badge badge-standard bt-primary-950-50-token badge-xl">Content</div>
      </div>
      <div class="relative inline-block">
        <div
          class="badge badge-standard badge-xs bt-primary-950-50-active-token absolute -right-7 -top-2 z-10"
        >
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Badge</span>
        </div>
        <div class="badge badge-standard bt-primary-950-50-token badge-xl">Content</div>
      </div>
      <div class="relative inline-block">
        <span
          class="badge-icon badge-icon-standard badge-icon-xs bt-primary-950-50-active-token absolute -right-2.5 -top-2 z-10"
        >
          <i class="fa-solid fa-robot" />
        </span>
        <div class="badge badge-standard bt-primary-950-50-token badge-xl">Content</div>
      </div>
      <div class="relative inline-block">
        <span
          class="badge-icon badge-icon-circle badge-icon-xs bt-primary-950-50-active-token absolute -right-2.5 -top-2 z-10"
        >
          <i class="fa-solid fa-robot" />
        </span>
        <div class="badge badge-standard bt-primary-950-50-token badge-xl">Content</div>
      </div>
    </div>
  </section>
</div>
