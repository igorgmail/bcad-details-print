const modal = {
  show() {
    // document.getElementById('bcad-info-modalId').style.display = 'block';
    document.getElementById('bcad-info-modalId').style.visibility = 'visible';
    document.querySelector('.bmodal-wrap').classList.add('modal-active');
    document.querySelector('.bmodal-wrap').classList.remove('modal-hidden');

  },

  close() {
    document.querySelector('.bmodal-wrap').classList.remove('modal-active');
    document.querySelector('.bmodal-wrap').classList.add('modal-hidden');
    document.getElementById('bcad-info-modalId').style.visibility = 'hidden';
    // document.getElementById('bcad-info-modalId').style.visibility = 'none';

  }
}

module.exports = modal;