const modal = {
  show() {
    document.getElementById('bcad-info-modalId').style.display = 'block'
  },

  close() {
    document.getElementById('bcad-info-modalId').style.display = 'none'
  }
}

module.exports = modal;