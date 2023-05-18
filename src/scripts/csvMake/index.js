const readCsvFromFile = require('./readCsvFromFile')
const changeEdges = require('./changeEdges.js')
const makeArrayObjects = require('./makeArrayObjects.js')

async function convertFile(file) {
  const resultReadCsv = await readCsvFromFile(file)
  const detailObjects = makeArrayObjects(resultReadCsv)
  const changeKromka = changeEdges(detailObjects)
  return JSON.stringify(changeKromka)
}

module.exports = convertFile;