var iconv = require('iconv-lite')

// 1 -  Получаем массив данных с csv файла
async function readCsvFromFile(myFile) {
  const dataArBuf = await myFile.arrayBuffer();
  let data = iconv.decode(Buffer.from(dataArBuf), 'win1251');//win1251 utf-8
  if (!validCodeCsv(data)) {
    data = iconv.decode(Buffer.from(dataArBuf), 'utf-8')
    if (!validCodeCsv(data)) return new Error('Ошибка при чтении файла csv');
  }
  const array = data.split('\r\n');
  const readyArray = await makeDetailArray(array)
  return readyArray;
}

// 2 - Удаляем лишние ковычки
async function deleteBrackets(csv) {
  // Удалили ковычки добавили разделитель ;;; и вернули массив
  const newArray = await csv.map((el) => {
    let res = el.replaceAll(/;/gm, ' ');
    res = res.replaceAll(/(\d)(,)/gm, '$1' + '",');
    res = res.replaceAll(/(№)(,)/gm, '$1' + '",');
    res = res.replaceAll(/","/gm, ';;;');
    res = res.replaceAll(/"/gm, '');
    return res;
  });
  return newArray;
}

// 3 - Создаем массив с массивами из входящего массива из deleteBrackets(), и разделяем его на два
async function separationArray(data) {
  const arrAll = data.map((el) => el.split(';;;'));
  const newArrayIndex = arrAll.findIndex((el, ind) => ind > 2 && !(/\d/gm.test(el)));
  const arrayDetails = arrAll.slice(0, newArrayIndex);
  const arrayAnother = arrAll.slice(newArrayIndex); // Массив с остаточными данными
  return arrayDetails;
}

// 4 - Создаем готовый массив деталей
async function makeDetailArray(csv) {
  const arrDelBrackets = await deleteBrackets(csv);
  const arrayDetail = await separationArray(arrDelBrackets);
  return arrayDetail;
}

function validCodeCsv(data) {
  return data.includes('Наименование') || data.includes('Листовые детали');
}


module.exports = readCsvFromFile;