import React from 'react';
import Modal from '@/Components/Modal/Modal';
import styles from './styles/modal-calculator-desktop.module.scss';

const ModalForDesktop = React.forwardRef(function (props, ref) {
  const draggableCondition = function (event) {
    return String.prototype.toLowerCase.call(event?.target?.tagName || '')
      !== 'button';
  };

  return (
    <Modal
      ref={ref}
      {...props}
      draggable={draggableCondition}
      contentClass={styles['modal-fixed-size']}
    />
  );
});

export default ModalForDesktop;
