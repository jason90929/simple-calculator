import React from 'react';
import Modal from '@/Components/Modal/Modal';
import styles from './styles/modal-calculator-mobile.module.scss';

const ModalForMobile = React.forwardRef(function (props, ref) {
  return (
    <Modal
      ref={ref}
      {...props}
      className={styles['modal-transition-overlap']}
      contentClass={styles['modal-popover']}
      bgClass={styles['modal-bg-light']}
      bodyClass="overflow-auto"
    />
  );
});

export default ModalForMobile;
