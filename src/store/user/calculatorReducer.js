import updateObject from '@/resources/utils/updateObject';
import calculate from '@/resources/utils/calculate';
import calculatorType from './calculatorType';

const initialState = {
  storedResult: '',
  displayedResult: '',
  operation: '',
  keepDisplayedInNextSet: false,
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
        keepDisplayedInNextSet: false,
      });
    case calculatorType.RESET:
      return updateObject(state, {
        storedResult: '',
        displayedResult: '',
        operation: '',
        keepDisplayedInNextSet: false,
      });
    case calculatorType.SET_OPERATION: {
      let result = state.displayedResult;
      if (state.storedResult) {
        result = Number.prototype.toString.call(calculate(
          state.storedResult,
          state.displayedResult,
          state.operation,
        ));
      }
      return updateObject(state, {
        displayedResult: result,
        operation: action.payload,
        keepDisplayedInNextSet: true,
      });
    }
    case calculatorType.ON_CALCULATE: {
      const result = Number.prototype.toString.call(calculate(
        state.storedResult,
        state.displayedResult,
        state.operation,
      ));
      return updateObject(state, {
        displayedResult: result,
        storedResult: '',
        keepDisplayedInNextSet: true,
      });
    }
    default:
      return state;
  }
};

export default calculatorReducer;
