const selectedBrand = document.querySelector('[data-products]')

function chooseBrand() {
  const option = document.querySelector('[data-list]')
  option.innerHTML = ''

  const database = `assets/database/${selectedBrand.value}.json`

  fetch(database)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        option.innerHTML += `<option class="list" value="${data[i].value}">${data[i].name}</option>`
      }
    })
}
