// ? addMaterialBlock получает json с деталями и 
// Создаем блок выбор материала
function createBlockChooseMaterials() {
  const infoContainer = document.querySelector('.info-container') // блок с инфо
  const materialBlock = document.createElement('div')
  materialBlock.classList.add('block-material')
  infoContainer.append(materialBlock)
  return materialBlock
}

// Фильтруем , извлекаем разные материалы И возвращаем массив обьектов материал и толщина
function extractMaterials(jsonDetails) {
  const arrObjects = JSON.parse(jsonDetails)
  const mateialsObj = []
  arrObjects.map((el) => {
    const find = mateialsObj.find((mel) => {
      if (el.core === mel.core) return true
    })
    if (!find) mateialsObj.push({ core: el.core, thick: el.thick })
  })
  return mateialsObj;
}

// Наполняем блок материалов создаем block-material-header
function materialAdd(arrayMaterials) {
  const blockMaterial = document.querySelector('.block-material')
  const blMaterialHeader = document.createElement('div')
  blMaterialHeader.classList.add('block-material-header', 'checkbox-wrapper-13')
  blMaterialHeader.innerHTML = `<label for="checkbox-all" class="ln">Выберите материал</label>`
  blockMaterial.prepend(blMaterialHeader)

  // Добавляем checbox choose All
  const checkAll = document.createElement('input')
  checkAll.classList.add('mat-choose-all')
  checkAll.setAttribute('type', 'checkbox');
  checkAll.setAttribute('id', `checkbox-all`);
  blMaterialHeader.append(checkAll)
  // наполняем блок
  arrayMaterials.map((el, ind) => {
    blockMaterial.append(createElMaterialsBlock(el, ind))
  })
  return checkAll
}


// Создаем элемент блока материалов Принимает оьект и возвращает дом элемент
function createElMaterialsBlock(obj, ind) {
  const materialElementWrap = document.createElement('div')
  materialElementWrap.classList.add('mat-element-wrap', 'checkbox-wrapper-13')

  const matElement = document.createElement('label')
  matElement.classList.add('mat-element', 'ln')
  matElement.setAttribute('for', `checkbox-${ind}`);
  matElement.innerText = obj.core
  materialElementWrap.append(matElement)

  const matElement2 = document.createElement('div')
  matElement2.classList.add('mat-element')
  matElement2.innerText = `${obj.thick} мм`
  materialElementWrap.append(matElement2)

  const matElementChoose = document.createElement('input')
  matElementChoose.classList.add('mat-choose')
  matElementChoose.setAttribute('type', 'checkbox');
  matElementChoose.setAttribute('id', `checkbox-${ind}`);
  matElementChoose.setAttribute('data-name', obj.core);
  materialElementWrap.append(matElementChoose)
  return materialElementWrap
}

const addMaterialBlock = (jsonDetail) => {
  createBlockChooseMaterials() // return checkbox
  const arrayMaterials = extractMaterials(jsonDetail)
  const chooseMaterialsBlock = materialAdd(arrayMaterials)// return checkbox
  return chooseMaterialsBlock
}

module.exports = addMaterialBlock;