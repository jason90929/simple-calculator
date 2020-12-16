import React from 'react';
import ModalCalculator from '@/Components/Modal/Instances/ModalCalculator/ModalCalculator';

function ButtonShowModalCalculator() {
  const [isActive, toggleActive] = React.useState(false);

  return (
    <ModalCalculator
      isActive={isActive}
    />
  );
}

export default ButtonShowModalCalculator;
