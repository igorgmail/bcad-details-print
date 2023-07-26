// Очищаем Таблицу
const cleanTable = () => {
  const tableHead = document.querySelector('thead')
  const tableBody = document.querySelector('tbody')
  document.body.style.paddingRight = `36px`;
  document.querySelector('.info').style.right = `36px`;
  tableHead.innerHTML = ``
  tableBody.innerHTML = ``
  if (document.querySelector('.button-print')) document.querySelector('.button-print').remove()
}

function clean(param) {
  if (param === 'table') {
    cleanTable()
  }
  if (param === 'all') {
    const uploadInput = document.getElementById('fileInput') // поле инпут
    const infoContainer = document.querySelector('.info-container') // блок с инфо
    infoContainer.innerHTML = ''
    uploadInput.value = ''
    cleanTable()
    if (document.querySelector('.im')) document.querySelector('.im').remove()
  }
}
module.exports = { clean }