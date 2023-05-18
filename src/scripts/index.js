const fileValidate = require('./servises/validate.js')
const { displayTable, addName } = require('./displayTable.js')

const convertFile = require('./csvMake/index.js')
const createInfoBlock = require('./createInfoBlock.js')
const { clean } = require('./servises/cleanElements.js')
const addMaterialBlock = require('./servises/createMaterialBlock.js')
const sortByMaterials = require('./servises/sortMaterials.js')
const modal = require('./servises/modal.js')
const uploadButton = document.getElementById('uploadButton')// Загрузить файл
const uploadInput = document.getElementById('fileInput') // поле инпут
// const infoContainer = document.querySelector('.info-container') // блок с инфо
// const containerHead = document.querySelector('.container-head') // контейнер шапки(инфо и кнопки)


// ! Слушатели

// info
document.querySelector('.info').addEventListener('click', (e) => {
  e.preventDefault()
  modal.show()
})

document.querySelector('.bmodal').addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.className === 'bmodal-over' || e.target.className === 'bmodal-close') modal.close()
})
// Загрузить файл
uploadButton.addEventListener('click', (event) => {
  event.preventDefault()
  clean('all')
  uploadInput.click()
})

// слушатель инпута файла

uploadInput.addEventListener('change', async (event) => {
  event.preventDefault()

  const myFile = event.target.files[0]

  if (!fileValidate(myFile)) {
    alert("Ошибка загрузки файла, или файл больше 10mb")
    return
  }

  // файл есть и можно что то делать
  const jsonDetail = await convertFile(myFile);
  const clearButton = createInfoBlock()

  // Кнопка очистить все
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    clean('all')
  })

  const checkboxAll = addMaterialBlock(jsonDetail)

  // checkbox All
  checkboxAll.addEventListener('change', (ev) => {
    console.log(ev.target.checked);
    const checkboxes = document.querySelectorAll('.mat-choose');
    if (ev.target.checked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true
      });
    }
    if (!ev.target.checked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false
      });
    }
  })

  document.querySelector('.block-material').addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target.className === 'mat-choose' && checkboxAll.checked === true) {
      console.log("IN IF");
      checkboxAll.checked = false
    }
  })

  // Кнопка преобразовать файл
  const buttonConvertFile = document.getElementById('buttonConvertFile')
  buttonConvertFile.addEventListener('click', async function () {
    clean('table')
    const arrChoose = getCheckedMaterials()
    const jsonFromSort = sortByMaterials(jsonDetail, arrChoose)
    const buttonPrint = displayTable(jsonFromSort) // Вернет кнопку печать
    // console.log("▶ ⇛ buttonPrint:", buttonPrint);
    if (buttonPrint) buttonPrint.addEventListener('click', (e) => {
      addName()
      window.print()
    })

  })
})

// Получаем массив значений выбранных checkbox
function getCheckedMaterials() {
  const checkboxes = document.querySelectorAll('.mat-choose');
  const checkedMaterials = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedMaterials.push(checkbox.getAttribute('data-name'));
    }
  });
  if (checkboxes.length === checkedMaterials.length) return ['all']
  return checkedMaterials;
}
