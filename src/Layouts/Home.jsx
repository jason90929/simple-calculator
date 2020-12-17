import React from 'react';
import ButtonShowModalCalculator from '@/Components/Button/Instances/ButtonShowModalCalculator';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles['home']}>
      <ButtonShowModalCalculator />
    </div>
  );
}

export default Home;
