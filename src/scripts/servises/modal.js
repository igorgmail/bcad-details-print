const modal = {
  show() {
    document.getElementById('bcad-modal').style.display = 'block'
  },

  close() {
    document.getElementById('bcad-modal').style.display = 'none'
  }
}

module.exports = modal;