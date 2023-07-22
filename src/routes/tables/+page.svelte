<h1 class="h1">Tables</h1>
<h2 class="h2 heading-banner border-primary-950-50-token">Table</h2>
<div class="card m-4">
  <section class="card-section-yorha p-4">
    <div class="table-container">
      <table class="table">
        <thead class="table-thead border-primary-800-200-token">
          <tr>
            {#each Array.from(Array(3)) as _, i}
              <th class="table-th">Head {i + 1}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each Array.from(Array(5)) as _, i}
            <tr>
              {#each Array.from(Array(3)) as _, j}
                <td class="table-td">Row {i + 1}, Column {j + 1}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
        <tfoot>
          <tr>
            <th class="table-th" colspan="2">Footer Total</th>
            <td class="table-td">5</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</div>

<h3 class="h3 heading-banner border-primary-950-50-token">Options</h3>
<div class="m-4 flex flex-col gap-4">
  <div class="card">
    <header class="card-header-yorha">Cells Comfortable</header>
    <section class="card-section-yorha p-4">
      <div class="table-container">
        <table class="table">
          <thead class="table-thead border-primary-800-200-token">
            <tr>
              {#each Array.from(Array(3)) as _, i}
                <th class="table-th table-th-comfortable">Head {i + 1}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Array.from(Array(5)) as _, i}
              <tr>
                {#each Array.from(Array(3)) as _, j}
                  <td class="table-td table-td-comfortable">Row {i + 1}, Column {j + 1}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <th class="table-th table-th-comfortable" colspan="2">Footer Total</th>
              <td class="table-td table-td-comfortable">5</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Cells Compact</header>
    <section class="card-section-yorha p-4">
      <div class="table-container">
        <table class="table">
          <thead class="table-thead border-primary-800-200-token">
            <tr>
              {#each Array.from(Array(3)) as _, i}
                <th class="table-th table-th-compact">Head {i + 1}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Array.from(Array(5)) as _, i}
              <tr>
                {#each Array.from(Array(3)) as _, j}
                  <td class="table-td table-td-compact">Row {i + 1}, Column {j + 1}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <th class="table-th table-th-compact" colspan="2">Footer Total</th>
              <td class="table-td table-td-compact">5</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Row Dividers</header>
    <section class="card-section-yorha p-4">
      <div class="table-container">
        <table class="table">
          <thead class="table-thead border-primary-800-200-token">
            <tr>
              {#each Array.from(Array(3)) as _, i}
                <th class="table-th">Head {i + 1}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Array.from(Array(5)) as _, i}
              <tr class="table-row-divider border-primary-500/20">
                {#each Array.from(Array(3)) as _, j}
                  <td class="table-td">Row {i + 1}, Column {j + 1}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <th class="table-th" colspan="2">Footer Total</th>
              <td class="table-td">5</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Fit Width</header>
    <section class="card-section-yorha p-4">
      <div class="table-container">
        <table class="table">
          <thead class="table-thead border-primary-800-200-token">
            <tr>
              {#each Array.from(Array(3)) as _, i}
                <th class="table-th">Head {i + 1}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Array.from(Array(5)) as _, i}
              <tr>
                {#each Array.from(Array(3)) as _, j}
                  <td class="table-td table-cell-fit">Row {i + 1}, Column {j + 1}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <th class="table-th" colspan="2">Footer Total</th>
              <td class="table-td">5</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
  <div class="card">
    <header class="card-header-yorha">Sorting</header>
    <section class="card-section-yorha flex flex-col gap-4 p-4">
      <div class="table-container">
        <table class="table">
          <thead class="table-thead border-primary-800-200-token">
            <tr>
              {#each Array.from(Array(3)) as _, i}
                <th class="table-th table-sort-asc">Head {i + 1}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Array.from(Array(5)) as _, i}
              <tr>
                {#each Array.from(Array(3)) as _, j}
                  <td class="table-td">Row {i + 1}, Column {j + 1}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <th class="table-th" colspan="2">Footer Total</th>
              <td class="table-td">5</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="table-container">
        <table class="table">
          <thead class="table-thead border-primary-800-200-token">
            <tr>
              {#each Array.from(Array(3)) as _, i}
                <th class="table-th table-sort-dsc">Head {i + 1}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Array.from(Array(5)) as _, i}
              <tr>
                {#each Array.from(Array(3)) as _, j}
                  <td class="table-td">Row {i + 1}, Column {j + 1}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <th class="table-th" colspan="2">Footer Total</th>
              <td class="table-td">5</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
</div>
