// Создать обьект с заголовкамми где ключ название, значение индекс

function getHeadersAndDetailsArray(arrayDetailsAll) {
  const headerIndex = arrayDetailsAll.findIndex((el) => el.join('').includes('Наименование'));
  const stringHeaders = arrayDetailsAll[headerIndex];
  const arrOnlyDetails = arrayDetailsAll.slice(headerIndex + 1);
  if (headerIndex < 0) throw new Error('Ошибка при получении заголовков массива arrayDetails');

  return [stringHeaders, arrOnlyDetails]; // массив с заголовками
}

function renameField(arr) {
  const newHeaders = arr.map((el) => {
    switch (el) {
      case '№':
        return 'number';
      case 'Наименование':
        return 'title';
      case 'Код':
        return 'code';
      case 'A мм.':
        return 'A';
      case 'B мм.':
        return 'B';
      case 'a мм.':
        return 'a';
      case 'b мм.':
        return 'b';
      case 'Толщина мм.':
        return 'thick';
      case 'Площадь кв.м.':
        return 'square';
      case 'Кромки':
        return 'edges';
      case 'Сердцевина':
        return 'core';
      case 'Лицевая сторона':
        return 'front';
      case 'Тыльная сторона':
        return 'back';
      case 'Текстура':
        return 'texture';
      case 'Кол.':
        return 'Amount';
      default:
        return el;
    }
  });
  return newHeaders;
}
function makeHeadersObject(array) {
  return new Map(array.map((el, ind) => [ind, el]));
}

function makeDataDetails(map, array) {
  const arayMap = [];
  array.map((e) => {
    const obj = {};
    e.map((el, ind) => {
      obj[map.get(ind)] = el;
    });
    arayMap.push(obj);
  });
  return arayMap;
}

// Делит обьект на два обьекта по материалу и толщине
function divideObjectDetails(ArrayObjectDeatails) {
  return [materials];
}

function makeArrayObjects(arrayDetails) {
  const [headers, arrayOnlyDetails] = getHeadersAndDetailsArray(arrayDetails);
  const newHeadersArray = renameField(headers);
  const mapHeaders = makeHeadersObject(newHeadersArray);
  const arrayWithObjects = makeDataDetails(mapHeaders, arrayOnlyDetails);

  return arrayWithObjects;
}

module.exports = makeArrayObjects;
