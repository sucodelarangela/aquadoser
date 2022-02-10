const selectedBrand = document.querySelector('[data-products]')
const option = document.querySelector('[data-list]')
const volume = document.querySelector('[data-volume]')
const resultDiv = document.querySelector('[data-result]')

function openCalc() {
  const about = document.querySelector('[data-about]')
  const calculator = document.querySelector('[data-form]')
  calculator.classList.add('open')
  about.classList.add('close')
}

function chooseBrand() {
  option.innerHTML = ''
  resultDiv.innerHTML = ''

  const database = `assets/database/${selectedBrand.value}.json`

  fetch(database)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        option.innerHTML += `<option class="list" value="${data[i].value}">${data[i].name}</option>`
      }
    })
}

function calculate() {
  const selectedProduct = option.value
  const aquariumVolume = volume.value
  // console.log(aquariumVolume)
  const database = `assets/database/${selectedBrand.value}.json`

  fetch(database)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value === selectedProduct) {
          const dose = data[i].dosage.dose
          const dosageVolume = data[i].dosage.tankVolume
          const unit = data[i].dosage.doseUnit
          const notes = data[i].notes
          const dosage = ((dose * aquariumVolume) / dosageVolume).toFixed(2)
          resultDiv.innerHTML = `<p>A dose recomendada é de ${dosage} ${unit}.</p>
          <p>${notes}</p>`
        }
      }
    })
}

export {chooseBrand, calculate, openCalc}
