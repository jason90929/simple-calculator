import React from 'react';
import Modal from '@/Components/Modal/Modal';

const ModalForMobile = React.forwardRef(function (props, ref) {
  return (
    <Modal
      ref={ref}
      {...props}
    />
  );
});

export default ModalForMobile;
