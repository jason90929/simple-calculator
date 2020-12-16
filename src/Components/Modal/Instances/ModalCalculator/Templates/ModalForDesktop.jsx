import React from 'react';
import Modal from '@/Components/Modal/Modal';
import styles from './styles/modal-calculator-desktop.module.scss';

const ModalForDesktop = React.forwardRef(function (props, ref) {
  return (
    <Modal
      ref={ref}
      {...props}
      contentClass={styles['modal-fixed-size']}
    />
  );
});

export default ModalForDesktop;
