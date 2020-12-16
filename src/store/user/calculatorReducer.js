import updateObject from '@/resources/utils/updateObject';
import calculate from '@/resources/utils/calculate';
import calculatorType from './calculatorType';

const initialState = {
  storedResult: '',
  displayedResult: '',
  operation: '',
};

const calculatorReducer = function (state = initialState, action) {
  switch (action.type) {
    case calculatorType.KEEP_RESULT:
      return updateObject(state, {
        storedResult: state.displayedResult,
      });
    case calculatorType.SET_RESULT:
      return updateObject(state, {
        displayedResult: action.payload,
      });
    case calculatorType.RESET:
      return updateObject(state, {
        storedResult: '',
        displayedResult: '',
        operation: '',
      });
    case calculatorType.SET_OPERATION:
      return updateObject(state, {
        operation: action.payload,
      });
    case calculatorType.ON_CALCULATE:
      return updateObject(state, {
        displayedResult: calculate(
          state.storedResult,
          state.displayedResult,
          state.operation,
        ),
        storedResult: '',
        operation: '',
      });
    default:
      return state;
  }
};

export default calculatorReducer;
