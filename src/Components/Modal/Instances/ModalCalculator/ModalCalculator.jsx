import React from 'react';
import PropTypes from 'prop-types';
import { UnsavedProvider } from 'react-unsaved';
import Portal from '@/Components/Portal';
import Button from '@/Components/Button/Button';
import Modal from '@/Components/Modal/Modal';

function ModalCalculator(props) {
  const modalRef = React.useRef(null);
  React.useEffect(function () {
    if (props.isActive) {
      modalRef.current.show();
    } else {
      modalRef.current.close();
    }
  }, [props.isActive]);

  return (
    <Portal>
      <Modal
        ref={modalRef}
        header="計算機"
        footer={(
          <UnsavedProvider>
            <Button
              className="btn-light"
              onClick={props.onClose}
            >
              關閉
            </Button>
          </UnsavedProvider>
        )}
        bindUnsaved
        onClose={props.onClose}
      >
        <fieldset>
          1234567890 +-*/
        </fieldset>
      </Modal>
    </Portal>
  );
}

ModalCalculator.defaultProps = {
  isActive: false,
  onClose() {},
};

ModalCalculator.propTypes = {
  isActive: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalCalculator;
