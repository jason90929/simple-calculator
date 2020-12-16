import React from 'react';
import CalGrid from '@/Components/Calculator/components/CalGrid';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import Screen from '@/Components/Calculator/components/Screen';
import BtnAC from '@/Components/Calculator/components/BtnAC';
import BtnOperation from '@/Components/Calculator/components/BtnOperation';
import BtnCalculate from '@/Components/Calculator/components/BtnCalculate';
import BtnDigit from '@/Components/Calculator/components/BtnDigit';
import BtnLongDigit from '@/Components/Calculator/components/BtnLongDigit';
import OPERATION from '@/resources/constants/OPERATION';

function Calculator(props) {
  return (
    <>
      <Screen />
      <CalGrid>
        <BtnAC />
        <CalBtn>
          ±
        </CalBtn>
        <CalBtn>
          ％
        </CalBtn>
        <BtnOperation
          operation={OPERATION.DIVIDE}
        >
          ÷
        </BtnOperation>
        <BtnDigit
          value="7"
        >
          7
        </BtnDigit>
        <BtnDigit
          value="8"
        >
          8
        </BtnDigit>
        <BtnDigit
          value="9"
        >
          9
        </BtnDigit>
        <BtnOperation
          operation={OPERATION.MULTIPLY}
        >
          ✕
        </BtnOperation>
        <BtnDigit
          value="4"
        >
          4
        </BtnDigit>
        <BtnDigit
          value="5"
        >
          5
        </BtnDigit>
        <BtnDigit
          value="6"
        >
          6
        </BtnDigit>
        <BtnOperation
          operation={OPERATION.SUBTRACT}
        >
          －
        </BtnOperation>
        <BtnDigit
          value="1"
        >
          1
        </BtnDigit>
        <BtnDigit
          value="2"
        >
          2
        </BtnDigit>
        <BtnDigit
          value="3"
        >
          3
        </BtnDigit>
        <BtnOperation
          operation={OPERATION.ADD}
        >
          ＋
        </BtnOperation>
        <BtnLongDigit
          value="0"
        >
          0
        </BtnLongDigit>
        <BtnDigit
          value="."
        >
          .
        </BtnDigit>
        <BtnCalculate />
      </CalGrid>
    </>
  );
}

Calculator.defaultProps = {
};

Calculator.propTypes = {
};

export default Calculator;
