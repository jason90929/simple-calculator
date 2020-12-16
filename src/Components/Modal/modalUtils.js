const modalUtils = {
  onModalOpen() {
    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style['padding-right'] = '0.9375rem';
    } else {
      document.body.style.removeProperty('padding-right');
    }
    document.body.classList.add('modal-open');
  },

  onModalClose() {
    document.body.style.removeProperty('padding-right');
    document.body.classList.remove('modal-open');
  },
};

export default modalUtils;
