import modalUtils from '../modalUtils';

describe('modalUtils', function () {
  describe('onModalOpen', function () {
    window.innerHeight = 1024;
    test('當內容高度多於視窗高度時，右側向內縮，好讓 scrollbar 隱藏時不會有畫面重繪；body 會加 .modal-open', function () {
      jest.spyOn(document.body, 'scrollHeight', 'get').mockImplementationOnce(function () {
        return 3000;
      });
      modalUtils.onModalOpen();

      expect(document.body.style['padding-right']).toBe('0.9375rem');
      expect(document.body.classList).toContain('modal-open');
    });

    test('當內容高度少於視窗高度時，右側不需向內縮；body 會加 .modal-open', function () {
      jest.spyOn(document.body, 'scrollHeight', 'get').mockImplementationOnce(function () {
        return 768;
      });
      modalUtils.onModalOpen();

      expect(document.body.style['padding-right']).not.toBe('0.9375rem');
      expect(document.body.classList).toContain('modal-open');
    });
  });

  describe('onModalClose', function () {
    test('當內容高度少於視窗高度時，右側不需向內縮；body 會加 .modal-open', function () {
      modalUtils.onModalClose();

      expect(document.body.style['padding-right']).not.toBe('0.9375rem');
      expect(document.body.classList).not.toContain('modal-open');
    });
  });
});
