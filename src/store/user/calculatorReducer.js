import updateObject from '@/resources/utils/updateObject';
import calculate from '@/resources/utils/calculate';
import filterZeroAndDot from '@/resources/utils/filterZeroAndDot';
import filterDigits from '@/resources/utils/filterDigits';
import calculatorType from './calculatorType';

const initialState = {
  storedResult: '',
  displayedResult: '0',
  operation: '',
  keepDisplayedInNextSet: false,
};

const calculatorReducer = function (state = initialState, action) {
  switch (action.type) {
    case calculatorType.KEEP_RESULT:
      return updateObject(state, {
        storedResult: state.displayedResult,
      });
    case calculatorType.SET_RESULT: {
      let value;
      if (state.keepDisplayedInNextSet) {
        value = action.payload;
      } else {
        value = filterZeroAndDot(
          filterDigits(
            state.displayedResult + action.payload,
            8,
          ),
        );
      }
      return updateObject(state, {
        displayedResult: action.payload,
        keepDisplayedInNextSet: false,
      });
    }
    case calculatorType.RESET:
      return updateObject(state, {
        storedResult: '',
        displayedResult: '0',
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
      const result = filterDigits(Number.prototype.toString.call(
        calculate(
          state.storedResult,
          state.displayedResult,
          state.operation,
        ),
      ));
      return updateObject(state, {
        displayedResult: result,
        keepDisplayedInNextSet: true,
      });
    }
    default:
      return state;
  }
};

export default calculatorReducer;
