import React from 'react';
import ModalCalculator from '@/Components/Modal/Instances/ModalCalculator/ModalCalculator';
import Button from '@/Components/Button/Button';

function ButtonShowModalCalculator() {
  const [isActive, toggleActive] = React.useState(false);

  const showModal = function () {
    toggleActive(true);
  };

  const closeModal = function () {
    toggleActive(false);
  };

  return (
    <>
      <div>
        <Button
          onClick={showModal}
        >
          計算機modal
        </Button>
      </div>

      <ModalCalculator
        isActive={isActive}
        onClose={closeModal}
      />
    </>
  );
}

export default ButtonShowModalCalculator;
