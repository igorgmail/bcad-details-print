const tableHead = document.querySelector('thead')
const tableBody = document.querySelector('tbody')

function displayTable(jsonDetails) {
  const arrData = JSON.parse(jsonDetails)
  addTableHead()
  makeTable(arrData)
  // addName()
  if (tableBody.innerHTML) {
    return addButtonPrint()
  }
}

// Добавляем заголовки в таблицу
function addTableHead() {
  const trHead = document.createElement('tr')
  trHead.innerHTML = `<th>№</th>
  <th>Код</th>
  <th>Название</th>
  <th colspan="2">Габариты</th>
  <th colspan="2">Кромки</th>
  <th>Текстура</th>`
  tableHead.append(trHead)
}


function makeTable(array) {
  // const addName = checkHeight()
  array.map((el) => {
    tableBody.append(addTableRow(el))
  }
  )
}

function addTableRow(obj) {
  const tr = document.createElement('tr')
  tr.innerHTML = `
  <tr>
    <td class="td-centr">${obj["number"]}</td>
    <td class="td-centr">${obj['code']}</td>
    <td class="pl">${obj['title']}</td>

    <td class="td-centr"><p class="td-num">${obj['A']}</p>
      <div class="line-box">
      </div>
    </td>

    <td class="td-centr"><p class="td-num">${obj['B']}</p>
      <div class="line-box">
      </div>
    </td>

    <td class="td-centr"><p class="td-num">${obj['a']}</p>
      <div class="line-box">
      <p class="td-line"><nobr>${obj["A_kromka"][0] || "  "}</nobr></p>
      <p class="td-line"><nobr>${obj["A_kromka"][1] || "  "}</nobr></p>
      </div>
    </td>

<td class="td-centr"><p class="td-num">${obj['b']}</p>
    <div class="line-box">
      <p class="td-line"><nobr>${obj["B_kromka"][0] || "  "}</nobr></p>
      <p class="td-line"><nobr>${obj["B_kromka"][1] || "  "}</nobr></p>
    </div>
</td>

<td class="pl">${obj["core"]}</td>
</tr>
`
  return tr
}

function addButtonPrint() {
  const containerBody = document.querySelector('.container-body')
  const buttonPrint = document.createElement('button')
  buttonPrint.classList.add('button-print', 'button-56')
  buttonPrint.setAttribute('type', 'button')
  buttonPrint.innerText = 'Печать'
  containerBody.after(buttonPrint)
  return buttonPrint
}

function addName() {
  if (document.querySelector('.im')) return
  const avtor = document.createElement('div')
  avtor.classList.add('im')
  avtor.innerText = 'igorfordev@gmail.com'
  document.querySelector('body').prepend(avtor)
  return
}

module.exports = { displayTable, addName };

