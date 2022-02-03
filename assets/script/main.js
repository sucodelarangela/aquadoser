// example of how to get json info

fetch('assets/database/seachem.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let productName = data[i].name
      let productDosage = data[i].dosage.dose
      console.log(productDosage)
    }
  })
