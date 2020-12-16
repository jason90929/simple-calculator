import calculatorType from './calculatorType';

const calculatorAction = {
  setResult: (result = {}) => ({
    type: calculatorType.SET_RESULT,
    payload: result,
  }),

  setOperation: (operation = {}) => ({
    type: calculatorType.SET_OPERATION,
    payload: operation,
  }),
};

export default calculatorAction;
