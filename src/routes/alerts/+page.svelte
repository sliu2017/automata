<script>
  const colors = [
    {
      label: 'Primary',
      alertStandard: 'alert-standard-primary',
    },
    {
      label: 'Secondary',
      alertStandard: 'alert-standard-secondary',
    },
    {
      label: 'Tertiary',
      alertStandard: 'alert-standard-tertiary',
    },
  ]
  const alertColors = [
    {
      label: 'Success',
      alertStandard: 'alert-standard-success',
    },
    {
      label: 'Warning',
      alertStandard: 'alert-standard-warning',
    },
    {
      label: 'Error',
      alertStandard: 'alert-standard-error',
    },
    {
      label: 'Info',
      alertStandard: 'alert-standard-info',
    },
    {
      label: 'On Success',
      alertStandard: 'alert-standard-on-success',
    },
    {
      label: 'On Warning',
      alertStandard: 'alert-standard-on-warning',
    },
    {
      label: 'On Error',
      alertStandard: 'alert-standard-on-error',
    },
    {
      label: 'On Info',
      alertStandard: 'alert-standard-on-info',
    },
  ]
</script>

<h1 class="h1">Alerts</h1>
<h2 class="h2 heading-banner border-primary-950-50-token">Alert</h2>
<div class="card m-4">
  <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4 p-4">
    {#each colors as color}
      <aside class="alert {color.alertStandard}">
        Standard {color.label}
      </aside>
      <aside class="alert {color.alertStandard}">
        <span><i class="fa-solid fa-robot" /></span>
        <span>Standard {color.label}</span>
      </aside>
    {/each}
    {#each alertColors as alertColor}
      <aside class="alert {alertColor.alertStandard}">
        Standard {alertColor.label}
      </aside>
      <aside class="alert {alertColor.alertStandard}">
        <span><i class="fa-solid fa-robot" /></span>
        <span>Standard {alertColor.label}</span>
      </aside>
    {/each}
  </section>
</div>

<h3 class="h3 heading-banner border-primary-950-50-token">Alert Message</h3>
<div class="card m-4">
  <section class="card-section-yorha grid grid-cols-2 justify-items-center gap-4 p-4">
    <aside class="alert alert-standard-primary">
      <div class="alert-message">
        <h5 class="h5">Alert</h5>
        <p>Alert Message</p>
      </div>
    </aside>
    <aside class="alert alert-standard-primary">
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
    <aside class="alert alert-standard-primary">
      <span>Alert</span>
      <div class="alert-actions">
        <button class="btn-icon btn-icon-standard-secondary">
          <i class="fa-solid fa-xmark" />
        </button>
      </div>
    </aside>
    <aside class="alert alert-standard-primary">
      <span><i class="fa-solid fa-robot" /></span>
      <span>Alert</span>
      <div class="alert-actions">
        <button class="btn btn-standard-secondary">Action</button>
        <button class="btn-icon btn-icon-standard-secondary">
          <i class="fa-solid fa-xmark" />
        </button>
      </div>
    </aside>
  </section>
</div>
