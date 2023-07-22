const formatBites = require('./servises/formatBites')

const infoContainer = document.querySelector('.info-container') // блок с инфо
const uploadInput = document.getElementById('fileInput') // поле инпут

// Создаем блок инфо и возвращаем элемент div
function makeinfoBlock() {
  const infoBlock = document.createElement('div')
  infoBlock.classList.add('block-info')
  infoContainer.prepend(infoBlock)
  return infoBlock
}

// Отображаем инфо о файле и кнопку загрузить на сервер 
function showInfoFile(infoBlock, file) {
  // const { name, size } = uploadInput.files[0]
  const { name, size } = file
  infoBlock.innerHTML = `
  <p>${name}</p>
  <p>${formatBites(size)}</p>
  `
}

// Создаем кнопку преобразовать файл
function makeAndShowButtonToServer(infoBlock) {
  const buttonConvertFile = document.createElement('button')
  buttonConvertFile.setAttribute('type', 'button');
  buttonConvertFile.classList.add('button-30')
  buttonConvertFile.setAttribute('id', 'buttonConvertFile');
  buttonConvertFile.innerHTML = `В таблицу`
  infoBlock.append(buttonConvertFile)
  return buttonConvertFile
}

// создаем кнопку очистить
function makeAndShowButtonClear(infoBlock) {
  const clearButton = document.createElement('button')
  clearButton.setAttribute('type', 'button');
  clearButton.setAttribute('id', 'buttonClear');
  clearButton.classList.add('button-30')
  clearButton.innerHTML = `Очистить Таблицу`
  infoBlock.append(clearButton)
  return clearButton
}

function createInfoBlock(file) {
  const infoBlock = makeinfoBlock()
  showInfoFile(infoBlock, file)
  makeAndShowButtonToServer(infoBlock)
  const clearButton = makeAndShowButtonClear(infoBlock)
  return clearButton
}

module.exports = createInfoBlock;