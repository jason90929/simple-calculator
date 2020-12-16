import observerInterface from '@/resources/interfaces/observerInterface';
import MODAL_CONSTANTS from './modalConstants';
import modalUtils from './modalUtils';

const modalInterface = {
  queue: [],
  init() {
    const { queue } = this;
    observerInterface.subscribe(MODAL_CONSTANTS.ACTION.OPEN, function (ref, onClose) {
      if (queue.length > 0) {
        // 移除前一筆 esc
        document.removeEventListener('keydown', queue?.[queue.length - 1]?.onClose);
      }
      // 新增最新 esc 事件
      document.addEventListener('keydown', onClose);
      queue.push({
        ref,
        onClose,
      });
      modalUtils.onModalOpen();
    });

    observerInterface.subscribe(MODAL_CONSTANTS.ACTION.CLOSE, function (ref, onClose) {
      const foundIndex = Array.prototype.findIndex.call(queue, function (item) {
        return item.ref === ref;
      });
      if (foundIndex > -1) {
        // 關閉時移除現在 esc
        document.removeEventListener('keydown', queue?.[foundIndex]?.onClose);
        queue.splice(foundIndex, 1);
      }
      if (queue.length <= 0) {
        modalUtils.onModalClose();
      } else {
        // 關閉後若仍有 modal 存在，加入現在在畫面上的 esc
        document.addEventListener('keydown', queue?.[queue.length - 1]?.onClose);
      }
    });
  },

  open(ref, onClose) {
    observerInterface.emit(MODAL_CONSTANTS.ACTION.OPEN, ref, onClose);
  },

  close(ref, onClose) {
    observerInterface.emit(MODAL_CONSTANTS.ACTION.CLOSE, ref, onClose);
  },
};

modalInterface.init();

export default modalInterface;
