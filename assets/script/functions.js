const selectedBrand = document.querySelector('[data-products]')
const option = document.querySelector('[data-list]')
const volume = document.querySelector('[data-volume]')
const resultDiv = document.querySelector('[data-result]')

function openCalc() {
  const watermark = document.querySelector('[data-watermark]')
  const main = document.querySelector('[data-main]')
  const about = document.querySelector('[data-about]')
  const calculator = document.querySelector('[data-form]')
  calculator.classList.add('open')
  about.classList.add('close')
  watermark.style.display = 'none'
  main.style.marginBottom = '5rem'
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

  if (selectedBrand.value === 'Marca') {
    document.querySelector('[data-manufacturer]').classList.add('show')
    document.querySelector('[data-products]').focus()
    document
      .querySelector('[data-manufacturer]')
      .addEventListener('change', () => {
        document.querySelector('[data-manufacturer]').classList.remove('show')
      })
  } else if (aquariumVolume == '') {
    document.querySelector('[data-vol]').classList.add('show')
    document.querySelector('[data-volume]').focus()
    document.querySelector('[data-volume]').addEventListener('input', () => {
      document.querySelector('[data-vol]').classList.remove('show')
    })
  } else {
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
            resultDiv.innerHTML = `<p>A dose recomendada é de ${dosage} ${unit}. </p>
            <p>${notes}</p>`
          }
        }
      })
    resultDiv.classList.add('show')
    resultDiv.scrollIntoView({behavior: 'smooth'})
  }
}

export {chooseBrand, calculate, openCalc}
