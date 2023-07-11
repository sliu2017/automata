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
</script>

<h1 class="h1">Alerts</h1>
<h2 class="h2 heading-banner border-primary-950-50-token">Alert</h2>
<div class="card m-4">
  <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4 p-4">
    {#each colors as color}
      <aside class="alert alert-standard {color.standard}">
        Standard {color.label}
      </aside>
      <aside class="alert alert-standard {color.standard}">
        <span><i class="fa-solid fa-robot" /></span>
        <span>Standard {color.label}</span>
      </aside>
    {/each}
    {#each alertColors as alertColor}
      <aside class="alert alert-standard {alertColor.standard}">
        Standard {alertColor.label}
      </aside>
      <aside class="alert alert-standard {alertColor.standard}">
        <span><i class="fa-solid fa-robot" /></span>
        <span>Standard {alertColor.label}</span>
      </aside>
    {/each}
  </section>
</div>

<h3 class="h3 heading-banner border-primary-950-50-token">Alert Message</h3>
<div class="card m-4">
  <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4 p-4">
    <aside class="alert alert-standard bt-primary-950-50-token">
      <div class="alert-message">
        <h5 class="h5">Alert</h5>
        <p>Alert Message</p>
      </div>
    </aside>
    <aside class="alert alert-standard bt-primary-950-50-token">
      <span><i class="fa-solid fa-robot" /></span>
      <div class="alert-message">
        <h3 class="h3">Alert</h3>
        <p>Alert Message</p>
      </div>
    </aside>
  </section>
</div>

<h3 class="h3 heading-banner border-primary-950-50-token">Alert Actions</h3>
<div class="card m-4">
  <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4 p-4">
    <aside class="alert alert-standard bt-primary-950-50-token">
      <span>Alert</span>
      <div class="alert-actions">
        <button class="btn-icon btn-icon-standard bt-primary-950-50-active-token">
          <i class="fa-solid fa-xmark" />
        </button>
      </div>
    </aside>
    <aside class="alert alert-standard bt-primary-950-50-token">
      <span><i class="fa-solid fa-robot" /></span>
      <span>Alert</span>
      <div class="alert-actions">
        <button class="btn btn-standard bt-primary-950-50-active-token">Action</button>
        <button class="btn-icon btn-icon-standard bt-primary-950-50-active-token">
          <i class="fa-solid fa-xmark" />
        </button>
      </div>
    </aside>
  </section>
</div>
