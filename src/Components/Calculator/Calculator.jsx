import React from 'react';
import CalGrid from '@/Components/Calculator/components/CalGrid';
import Screen from '@/Components/Calculator/components/Screen';
import BtnAC from '@/Components/Calculator/components/BtnAC';
import BtnOperation from '@/Components/Calculator/components/BtnOperation';
import BtnCalculate from '@/Components/Calculator/components/BtnCalculate';
import BtnDigit from '@/Components/Calculator/components/BtnDigit';
import BtnLongDigit from '@/Components/Calculator/components/BtnLongDigit';
import OPERATION from '@/resources/constants/OPERATION';
import BtnPositiveNegative from '@/Components/Calculator/components/BtnPositiveNegative';
import BtnPercentage from '@/Components/Calculator/components/BtnPercentage';
import useKeydownBinding from '@/Components/Calculator/useKeydownBinding';
import styles from './components/styles/calculator.module.scss';

function Calculator(props) {
  const {
    acBtnRef,
    divideBtnRef,
    multiplyBtnRef,
    subtractBtnRef,
    addBtnRef,
    enterBtnRef,
    oneBtnRef,
    twoBtnRef,
    threeBtnRef,
    fourBtnRef,
    fiveBtnRef,
    sixBtnRef,
    sevenBtnRef,
    eightBtnRef,
    nineBtnRef,
    zeroBtnRef,
    dotBtnRef,
  } = useKeydownBinding();

  return (
    <>
      <div className={styles['calculator-bg']} />
      <div className={styles['calculator']}>
        <Screen />
        <CalGrid>
          <BtnAC
            ref={acBtnRef}
          />
          <BtnPositiveNegative />

          <BtnPercentage />
          <BtnOperation
            ref={divideBtnRef}
            operation={OPERATION.DIVIDE}
          >
            ÷
          </BtnOperation>
          <BtnDigit
            ref={sevenBtnRef}
            value="7"
          >
            7
          </BtnDigit>
          <BtnDigit
            ref={eightBtnRef}
            value="8"
          >
            8
          </BtnDigit>
          <BtnDigit
            ref={nineBtnRef}
            value="9"
          >
            9
          </BtnDigit>
          <BtnOperation
            ref={multiplyBtnRef}
            operation={OPERATION.MULTIPLY}
          >
            ✕
          </BtnOperation>
          <BtnDigit
            ref={fourBtnRef}
            value="4"
          >
            4
          </BtnDigit>
          <BtnDigit
            ref={fiveBtnRef}
            value="5"
          >
            5
          </BtnDigit>
          <BtnDigit
            ref={sixBtnRef}
            value="6"
          >
            6
          </BtnDigit>
          <BtnOperation
            ref={subtractBtnRef}
            operation={OPERATION.SUBTRACT}
          >
            －
          </BtnOperation>
          <BtnDigit
            ref={oneBtnRef}
            value="1"
          >
            1
          </BtnDigit>
          <BtnDigit
            ref={twoBtnRef}
            value="2"
          >
            2
          </BtnDigit>
          <BtnDigit
            ref={threeBtnRef}
            value="3"
          >
            3
          </BtnDigit>
          <BtnOperation
            ref={addBtnRef}
            operation={OPERATION.ADD}
          >
            ＋
          </BtnOperation>
          <BtnLongDigit
            ref={zeroBtnRef}
            value="0"
          >
            0
          </BtnLongDigit>
          <BtnDigit
            ref={dotBtnRef}
            value="."
          >
            .
          </BtnDigit>
          <BtnCalculate
            ref={enterBtnRef}
          />
        </CalGrid>
      </div>
    </>
  );
}

Calculator.defaultProps = {
};

Calculator.propTypes = {
};

export default Calculator;
