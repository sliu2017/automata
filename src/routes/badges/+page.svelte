<script>
  const colors = [
    {
      label: 'Primary',
      badgeStandard: 'badge-standard-primary',
      badgeIconStandard: 'badge-icon-standard-primary',
      badgeIconCircle: 'badge-icon-circle-primary',
    },
    {
      label: 'Secondary',
      badgeStandard: 'badge-standard-secondary',
      badgeIconStandard: 'badge-icon-standard-secondary',
      badgeIconCircle: 'badge-icon-circle-secondary',
    },
    {
      label: 'Tertiary',
      badgeStandard: 'badge-standard-tertiary',
      badgeIconStandard: 'badge-icon-standard-tertiary',
      badgeIconCircle: 'badge-icon-circle-tertiary',
    },
  ]
  const alertColors = [
    {
      label: 'Success',
      badgeStandard: 'badge-standard-success',
      badgeIconStandard: 'badge-icon-standard-success',
      badgeIconCircle: 'badge-icon-circle-success',
    },
    {
      label: 'Warning',
      badgeStandard: 'badge-standard-warning',
      badgeIconStandard: 'badge-icon-standard-warning',
      badgeIconCircle: 'badge-icon-circle-warning',
    },
    {
      label: 'Error',
      badgeStandard: 'badge-standard-error',
      badgeIconStandard: 'badge-icon-standard-error',
      badgeIconCircle: 'badge-icon-circle-error',
    },
    {
      label: 'Info',
      badgeStandard: 'badge-standard-info',
      badgeIconStandard: 'badge-icon-standard-info',
      badgeIconCircle: 'badge-icon-circle-info',
    },
    {
      label: 'On Success',
      badgeStandard: 'badge-standard-on-success',
      badgeIconStandard: 'badge-icon-standard-on-success',
      badgeIconCircle: 'badge-icon-circle-on-success',
    },
    {
      label: 'On Warning',
      badgeStandard: 'badge-standard-on-warning',
      badgeIconStandard: 'badge-icon-standard-on-warning',
      badgeIconCircle: 'badge-icon-circle-on-warning',
    },
    {
      label: 'On Error',
      badgeStandard: 'badge-standard-on-error',
      badgeIconStandard: 'badge-icon-standard-on-error',
      badgeIconCircle: 'badge-icon-circle-on-error',
    },
    {
      label: 'On Info',
      badgeStandard: 'badge-standard-on-info',
      badgeIconStandard: 'badge-icon-standard-on-info',
      badgeIconCircle: 'badge-icon-circle-on-info',
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
        <span class="badge {color.badgeStandard}">
          Standard {color.label}
        </span>
      {/each}
      {#each colors as color}
        <div class="badge {color.badgeStandard}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Standard {color.label}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-4">
      {#each alertColors as alertColor}
        <span class="badge {alertColor.badgeStandard}">
          Standard {alertColor.label}
        </span>
      {/each}
      {#each alertColors as alertColor}
        <div class="badge {alertColor.badgeStandard}">
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
          <span class="badge-icon {color.badgeIconStandard}">
            <i class="fa-solid fa-robot" />
          </span>
          <span>{color.label}</span>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <span class="badge-icon {alertColor.badgeIconStandard}">
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
          <span class="badge-icon {color.badgeIconCircle}">
            <i class="fa-solid fa-robot" />
          </span>
          <span>{color.label}</span>
        </div>
      {/each}
      {#each alertColors as alertColor}
        <div class="flex items-center gap-4">
          <span class="badge-icon {alertColor.badgeIconCircle}">
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
        <span class="badge badge-standard-primary {size.badgeSize}">
          {size.label}
        </span>
        <div class="badge badge-standard-primary {size.badgeSize}">
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
            <span class="badge-icon badge-icon-standard-primary {size.badgeIconSize}">
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
            <span class="badge-icon badge-icon-circle-primary {size.badgeIconSize}">
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
          class="badge badge-standard-primary badge-xs absolute -right-5 -top-2 z-10 !bg-primary-50-950-token !text-primary-950-50-token"
        >
          Badge
        </span>
        <div class="badge badge-standard-primary badge-xl">Content</div>
      </div>
      <div class="relative inline-block">
        <div
          class="badge badge-standard-primary badge-xs absolute -right-7 -top-2 z-10 !bg-primary-50-950-token !text-primary-950-50-token"
        >
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>Badge</span>
        </div>
        <div class="badge badge-standard-primary badge-xl">Content</div>
      </div>
      <div class="relative inline-block">
        <span
          class="badge-icon badge-icon-standard-primary badge-icon-xs absolute -right-2.5 -top-2 z-10 !bg-primary-50-950-token !text-primary-950-50-token"
        >
          <i class="fa-solid fa-robot" />
        </span>
        <div class="badge badge-standard-primary badge-xl">Content</div>
      </div>
      <div class="relative inline-block">
        <span
          class="badge-icon badge-icon-circle-primary badge-icon-xs absolute -right-2.5 -top-2 z-10 !bg-primary-50-950-token !text-primary-950-50-token"
        >
          <i class="fa-solid fa-robot" />
        </span>
        <div class="badge badge-standard-primary badge-xl">Content</div>
      </div>
    </div>
  </section>
</div>
