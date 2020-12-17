import updateObject from '@/resources/utils/updateObject';
import calculate from '@/resources/utils/calculate';
import filterZeroAndDot from '@/resources/utils/filterZeroAndDot';
import filterDigits from '@/resources/utils/filterDigits';
import calculatorType from './calculatorType';

const initialState = {
  storedResult: '',
  accumulatedResult: '',
  screenResult: '0',
  operation: '',
  keepDisplayedInNextSet: false,
};

const calculatorReducer = function (state = initialState, action) {
  switch (action.type) {
    case calculatorType.KEEP_RESULT:
      return updateObject(state, {
        storedResult: state.screenResult,
      });
    case calculatorType.SET_RESULT: {
      return updateObject(state, {
        screenResult: action.payload,
        accumulatedResult: '',
        keepDisplayedInNextSet: false,
      });
    }
    case calculatorType.RESET: {
      if (state.storedResult) {
        return updateObject(state, {
          storedResult: '',
          screenResult: '0',
        });
      }
      return updateObject(state, {
        storedResult: '',
        accumulatedResult: '',
        screenResult: '0',
        operation: '',
        keepDisplayedInNextSet: false,
      });
    }
    case calculatorType.SET_OPERATION: {
      return updateObject(state, {
        operation: action.payload,
        keepDisplayedInNextSet: true,
      });
    }
    case calculatorType.ON_CALCULATE: {
      const result = filterDigits(Number.prototype.toString.call(
        calculate(
          state.storedResult,
          state.screenResult,
          state.operation,
        ),
      ));
      return updateObject(state, {
        screenResult: result,
        storedResult: '',
        accumulatedResult: state.keepDisplayedInNextSet
          ? state.accumulatedResult
          : state.screenResult,
        keepDisplayedInNextSet: true,
      });
    }
    default:
      return state;
  }
};

export default calculatorReducer;
