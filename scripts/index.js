const fileValidate = require('./servises/validate.js')
const { displayTable, addName } = require('./servises/displayTable.js')

const convertFile = require('./csvMake/index.js')
const createInfoBlock = require('./servises/createInfoBlock.js')
const { clean } = require('./servises/cleanElements.js')
const addMaterialBlock = require('./servises/createMaterialBlock.js')
const sortByMaterials = require('./servises/sortMaterials.js')
const modal = require('./modal.js')
const demoJson = require('../public/src/mock/demo.json')

const uploadButton = document.getElementById('uploadButton')// Загрузить файл
const uploadInput = document.getElementById('fileInput') // поле инпут

// ! Слушатели
// info
document.querySelector('.info').addEventListener('click', (e) => {
  e.preventDefault()
  modal.show()
})

// Button закрузить demo.csv
document.querySelector('.info-button__mock').addEventListener(('click'), async (e) => {
  e.preventDefault()
  clean('all')
  setTimeout(() => {
    modal.close()
  }, 200)
  fileHandler(null, true)
})

document.querySelector('.bmodal').addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.className === 'bmodal-over' || e.target.className === 'bmodal-close') modal.close()
})
// Инпут Загрузить файл
uploadButton.addEventListener('click', (event) => {
  event.preventDefault()
  clean('all')
  uploadInput.click()
})

// слушатель инпута файла
uploadInput.addEventListener('change', async (event) => {
  event.preventDefault()
  fileHandler(event, null)
})

// функция обработки файла из инпута или переданного как параметр
async function fileHandler(event, fakeFile) {
  let jsonDetail;
  let clearButton;
  // файл есть и можно что то делать
  // два варианта
  // 1 - Загрузка файла клентом через инпут
  // 2 - Загрузка демо данных (в json формате)
  // Вариант 1
  if (event?.target.files[0]) {
    const myFile = event?.target.files[0]
    jsonDetail = await convertFile(myFile);
    clearButton = createInfoBlock(myFile)

    if (!fileValidate(myFile)) {
      alert(`Ошибка загрузки файла, или файл больше 10mb.
    Или попробуйте перезагрузить страницу`)
      return
    }
  }
  // Вариант 2
  if (fakeFile) {
    const demoFile = {
      name: 'demo.csv',
      size: 16550
    };

    jsonDetail = JSON.stringify(demoJson)
    clearButton = createInfoBlock(demoFile)
  }

  // Кнопка очистить Таблицу
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    clean('table')
  })

  const checkboxAll = addMaterialBlock(jsonDetail)

  // checkbox All
  checkboxAll.addEventListener('change', (ev) => {
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
    if (buttonPrint) buttonPrint.addEventListener('click', (e) => {
      addName()
      window.print()
    })

  })
}

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
