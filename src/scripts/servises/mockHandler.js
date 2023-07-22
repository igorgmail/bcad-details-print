const path = require('path')
const fs = require('fs')

const mock = {
  async getFilePath() {
    // const dirPath = path.resolve(__dirname, '..', '..', 'mock')
    // const fileName = fs.readdirSync(dirPath, 'utf-8')
    // const filePath = path.resolve(dirPath, fileName[0])
    const response = await fetch('./src/mock/demo.csv')
    const fileBlob = await response.blob()
    console.log("▶ ⇛ fileBlob:", fileBlob);
    return fileBlob

    // return filePath
  },
  readFile(filePath) {
    const fileData = fs.readFileSync(filePath)
    return fileData
  }
}

// mock.getPath()
module.exports = mock;