// Получает json с деталями и параметры выбранных checkbox
// И возвращает json отсортированных деталей с учетом выбранного материала

function sortByMaterials(json, arrChoose) {
  if (arrChoose[0] === 'all') return json
  const arrAllDetails = JSON.parse(json)
  const sortArrayDetails = arrAllDetails.filter((el) => {
    const findMaterial = arrChoose.find((elM) => elM === el.core)
    if (findMaterial) return true
  })
  return JSON.stringify(sortArrayDetails)
}

module.exports = sortByMaterials;