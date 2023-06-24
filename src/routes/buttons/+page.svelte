<script>
  const colors = [
    {
      label: 'Primary',
      btnStandard: 'btn-standard-primary',
      btnYorha: 'btn-yorha-primary',
      btnIconStandard: 'btn-icon-standard-primary',
      btnIconCircle: 'btn-icon-circle-primary',
    },
    {
      label: 'Secondary',
      btnStandard: 'btn-standard-secondary',
      btnYorha: 'btn-yorha-secondary',
      btnIconStandard: 'btn-icon-standard-secondary',
      btnIconCircle: 'btn-icon-circle-secondary',
    },
    {
      label: 'Tertiary',
      btnStandard: 'btn-standard-tertiary',
      btnYorha: 'btn-yorha-tertiary',
      btnIconStandard: 'btn-icon-standard-tertiary',
      btnIconCircle: 'btn-icon-circle-tertiary',
    },
  ]
  const alertColors = [
    {
      label: 'Success',
      btnStandard: 'btn-standard-success',
      btnYorha: 'btn-yorha-success',
      btnIconStandard: 'btn-icon-standard-success',
      btnIconCircle: 'btn-icon-circle-success',
    },
    {
      label: 'Warning',
      btnStandard: 'btn-standard-warning',
      btnYorha: 'btn-yorha-warning',
      btnIconStandard: 'btn-icon-standard-warning',
      btnIconCircle: 'btn-icon-circle-warning',
    },
    {
      label: 'Error',
      btnStandard: 'btn-standard-error',
      btnYorha: 'btn-yorha-error',
      btnIconStandard: 'btn-icon-standard-error',
      btnIconCircle: 'btn-icon-circle-error',
    },
    {
      label: 'Info',
      btnStandard: 'btn-standard-info',
      btnYorha: 'btn-yorha-info',
      btnIconStandard: 'btn-icon-standard-info',
      btnIconCircle: 'btn-icon-circle-info',
    },
    {
      label: 'On Success',
      btnStandard: 'btn-standard-on-success',
      btnYorha: 'btn-yorha-on-success',
      btnIconStandard: 'btn-icon-standard-on-success',
      btnIconCircle: 'btn-icon-circle-on-success',
    },
    {
      label: 'On Warning',
      btnStandard: 'btn-standard-on-warning',
      btnYorha: 'btn-yorha-on-warning',
      btnIconStandard: 'btn-icon-standard-on-warning',
      btnIconCircle: 'btn-icon-circle-on-warning',
    },
    {
      label: 'On Error',
      btnStandard: 'btn-standard-on-error',
      btnYorha: 'btn-yorha-on-error',
      btnIconStandard: 'btn-icon-standard-on-error',
      btnIconCircle: 'btn-icon-circle-on-error',
    },
    {
      label: 'On Info',
      btnStandard: 'btn-standard-on-info',
      btnYorha: 'btn-yorha-on-info',
      btnIconStandard: 'btn-icon-standard-on-info',
      btnIconCircle: 'btn-icon-circle-on-info',
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
<h2 class="h2">Icon Buttons</h2>
<div class="grid grid-cols-4 justify-items-center gap-4">
  <h6 class="h6 text-center">Standard Button</h6>
  <h6 class="h6 text-center">Circle Button</h6>
  <h6 class="h6 text-center">Standard Button Link</h6>
  <h6 class="h6 text-center">Circle Button Link</h6>
  {#each colors as color}
    <button class="btn-icon {color.btnIconStandard}">
      <i class="fa-solid fa-robot" />
    </button>
    <button class="btn-icon {color.btnIconCircle}">
      <i class="fa-solid fa-robot" />
    </button>
    <a class="btn-icon {color.btnIconStandard}" href="https://www.google.com/">
      <i class="fa-solid fa-robot" />
    </a>
    <a class="btn-icon {color.btnIconCircle}" href="https://www.google.com/">
      <i class="fa-solid fa-robot" />
    </a>
  {/each}
  {#each alertColors as alertColor}
    <button class="btn-icon {alertColor.btnIconStandard}">
      <i class="fa-solid fa-robot" />
    </button>
    <button class="btn-icon {alertColor.btnIconCircle}">
      <i class="fa-solid fa-robot" />
    </button>
    <a class="btn-icon {alertColor.btnIconStandard}" href="https://www.google.com/">
      <i class="fa-solid fa-robot" />
    </a>
    <a class="btn-icon {alertColor.btnIconCircle}" href="https://www.google.com/">
      <i class="fa-solid fa-robot" />
    </a>
  {/each}
</div>
<h2 class="h2">Button Sizes</h2>
<div class="flex flex-col gap-4">
  <div class="grid grid-cols-4 items-center justify-items-center gap-4">
    {#each sizes as size}
      <button class="btn btn-standard-primary {size.btnSize}">
        {size.label}
      </button>
      <button class="btn btn-standard-primary {size.btnSize}">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>
          {size.label}
        </span>
      </button>
      <button class="btn btn-yorha-primary {size.btnSize}">
        {size.label}
      </button>
      <button class="btn btn-yorha-primary {size.btnSize}">
        <span>
          <i class="fa-solid fa-robot" />
        </span>
        <span>
          {size.label}
        </span>
      </button>
    {/each}
  </div>
  <div class="grid grid-cols-2 items-center justify-items-center gap-4">
    {#each sizes as size}
      <button class="btn-icon btn-icon-standard-primary {size.btnIconSize}">
        <i class="fa-solid fa-robot" />
      </button>
      <button class="btn-icon btn-icon-circle-primary {size.btnIconSize}">
        <i class="fa-solid fa-robot" />
      </button>
    {/each}
  </div>
</div>
