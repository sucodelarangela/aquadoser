import {chooseBrand, calculate} from './functions.js'

const brandSelect = document.querySelector('[data-products]')
brandSelect.addEventListener('change', chooseBrand)

const calcButton = document.querySelector('[data-calc]')
calcButton.addEventListener('click', calculate)
