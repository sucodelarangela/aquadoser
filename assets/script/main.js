import {chooseBrand, calculate, openCalc} from './functions.js'

const startButton = document.querySelector('[data-start]')
startButton.addEventListener('click', event => {
  event.preventDefault()
  openCalc()
})

const brandSelect = document.querySelector('[data-products]')
brandSelect.addEventListener('change', chooseBrand)

const calcButton = document.querySelector('[data-calc]')
calcButton.addEventListener('click', event => {
  event.preventDefault()
  calculate()
})
