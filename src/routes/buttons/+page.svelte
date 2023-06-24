<script>
  const colors = [
    {
      label: 'Primary',
      btnStandard: 'btn-standard-primary',
      btnYorha: 'btn-yorha-primary',
    },
    {
      label: 'Secondary',
      btnStandard: 'btn-standard-secondary',
      btnYorha: 'btn-yorha-secondary',
    },
    {
      label: 'Tertiary',
      btnStandard: 'btn-standard-tertiary',
      btnYorha: 'btn-yorha-tertiary',
    },
  ]
  const alertColors = [
    {
      label: 'Success',
      btnStandard: 'btn-standard-success',
      btnYorha: 'btn-yorha-success',
    },
    {
      label: 'Warning',
      btnStandard: 'btn-standard-warning',
      btnYorha: 'btn-yorha-warning',
    },
    {
      label: 'Error',
      btnStandard: 'btn-standard-error',
      btnYorha: 'btn-yorha-error',
    },
    {
      label: 'Info',
      btnStandard: 'btn-standard-info',
      btnYorha: 'btn-yorha-info',
    },
    {
      label: 'On Success',
      btnStandard: 'btn-standard-on-success',
      btnYorha: 'btn-yorha-on-success',
    },
    {
      label: 'On Warning',
      btnStandard: 'btn-standard-on-warning',
      btnYorha: 'btn-yorha-on-warning',
    },
    {
      label: 'On Error',
      btnStandard: 'btn-standard-on-error',
      btnYorha: 'btn-yorha-on-error',
    },
    {
      label: 'On Info',
      btnStandard: 'btn-standard-on-info',
      btnYorha: 'btn-yorha-on-info',
    },
  ]
</script>

<h1 class="h1">Buttons</h1>
<hr class="hr" />
<h2 class="h2">Buttons</h2>
<div class="flex flex-col gap-4">
  <div class="grid grid-cols-3 gap-4">
    {#each colors as color}
      <button class="btn {color.btnStandard}">
        Standard {color.label}
      </button>
    {/each}
    {#each colors as color}
      <button class="btn {color.btnStandard}">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Standard {color.label}</span>
      </button>
    {/each}
  </div>
  <div class="grid grid-cols-4 gap-4">
    {#each alertColors as alertColor}
      <button class="btn {alertColor.btnStandard}">
        Standard {alertColor.label}
      </button>
    {/each}
    {#each alertColors as alertColor}
      <button class="btn {alertColor.btnStandard}">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Standard {alertColor.label}</span>
      </button>
    {/each}
  </div>
  <div class="flex flex-col gap-4 p-4 bg-primary-100-900-token">
    <div class="grid grid-cols-3 gap-4">
      {#each colors as color}
        <button class="btn {color.btnYorha}">
          YoRHa {color.label}
        </button>
      {/each}
      {#each colors as color}
        <button class="btn {color.btnYorha}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>YoRHa {color.label}</span>
        </button>
      {/each}
    </div>
    <div class="grid grid-cols-4 gap-4">
      {#each alertColors as alertColor}
        <button class="btn {alertColor.btnYorha}">
          YoRHa {alertColor.label}
        </button>
      {/each}
      {#each alertColors as alertColor}
        <button class="btn {alertColor.btnYorha}">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>YoRHa {alertColor.label}</span>
        </button>
      {/each}
    </div>
  </div>
</div>
<h2 class="h2">Button Links</h2>
<div class="flex flex-col gap-4">
  <div class="grid grid-cols-3 gap-4">
    {#each colors as color}
      <a class="btn {color.btnStandard}" href="https://www.google.com/">
        Standard {color.label}
      </a>
    {/each}
    {#each colors as color}
      <a class="btn {color.btnStandard}" href="https://www.google.com/">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Standard {color.label}</span>
      </a>
    {/each}
  </div>
  <div class="grid grid-cols-4 gap-4">
    {#each alertColors as alertColor}
      <a class="btn {alertColor.btnStandard}" href="https://www.google.com/">
        Standard {alertColor.label}
      </a>
    {/each}
    {#each alertColors as alertColor}
      <a class="btn {alertColor.btnStandard}" href="https://www.google.com/">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>Standard {alertColor.label}</span>
      </a>
    {/each}
  </div>
  <div class="flex flex-col gap-4 p-4 bg-primary-100-900-token">
    <div class="grid grid-cols-3 gap-4">
      {#each colors as color}
        <a class="btn {color.btnYorha}" href="https://www.google.com/">
          YoRHa {color.label}
        </a>
      {/each}
      {#each colors as color}
        <a class="btn {color.btnYorha}" href="https://www.google.com/">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>YoRHa {color.label}</span>
        </a>
      {/each}
    </div>
    <div class="grid grid-cols-4 gap-4">
      {#each alertColors as alertColor}
        <a class="btn {alertColor.btnYorha}" href="https://www.google.com/">
          YoRHa {alertColor.label}
        </a>
      {/each}
      {#each alertColors as alertColor}
        <a class="btn {alertColor.btnYorha}" href="https://www.google.com/">
          <span>
            <i class="fa-solid fa-robot" />
          </span>
          <span>YoRHa {alertColor.label}</span>
        </a>
      {/each}
    </div>
  </div>
</div>
