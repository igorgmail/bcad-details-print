const fs = require('fs')

const mock = {
  async getFilePath() {
    const response = await fetch('./src/mock/demo.csv')
    const fileBlob = await response.blob()
    return fileBlob
  },
  readFile(filePath) {
    const fileData = fs.readFileSync(filePath)
    return fileData
  }
}

module.exports = mock;