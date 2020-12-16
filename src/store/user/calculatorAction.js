import calculatorType from './calculatorType';

const calculatorAction = {
  setResult: (profile = {}) => ({
    type: calculatorType.SET_RESULT,
    payload: profile,
  }),

  setOperation: (permission = {}) => ({
    type: calculatorType.SET_OPERATION,
    payload: permission,
  }),
};

export default calculatorAction;
