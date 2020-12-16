import calculatorType from './calculatorType';

const calculatorAction = {
  keepResult() {
    return {
      type: calculatorType.KEEP_RESULT,
    };
  },

  setResult(result = {}) {
    return {
      type: calculatorType.SET_RESULT,
      payload: result,
    };
  },

  reset() {
    return {
      type: calculatorType.RESET,
    };
  },

  setOperation(operation = {}) {
    return {
      type: calculatorType.SET_OPERATION,
      payload: operation,
    };
  },

  onCalculate() {
    return {
      type: calculatorType.ON_CALCULATE,
    };
  },
};

export default calculatorAction;
