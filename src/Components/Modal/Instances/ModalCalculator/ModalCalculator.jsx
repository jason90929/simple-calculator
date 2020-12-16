import React from 'react';
import PropTypes from 'prop-types';
import { UnsavedProvider } from 'react-unsaved';
import Portal from '@/Components/Portal';
import Button from '@/Components/Button/Button';
import ModalCalculatorContent from '@/Components/Modal/Instances/ModalCalculator/ModalCalculatorContent';
import detectItInterface from '@/resources/interfaces/detectItInterface';
import ModalForDesktop from '@/Components/Modal/Instances/ModalCalculator/Templates/ModalForDesktop';
import ModalForMobile from '@/Components/Modal/Instances/ModalCalculator/Templates/ModalForMobile';

function ModalCalculator(props) {
  const modalRef = React.useRef(null);
  React.useEffect(function () {
    if (props.isActive) {
      modalRef.current.show();
    } else {
      modalRef.current.close();
    }
  }, [props.isActive]);

  const { hasMouse } = detectItInterface;
  console.log('has mouse', hasMouse);

  const Modal = hasMouse
    ? ModalForDesktop
    : ModalForMobile;

  return (
    <Portal>
      <Modal
        ref={modalRef}
        canBgClose
        onClose={props.onClose}
      >
        <ModalCalculatorContent />
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
