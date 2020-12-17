import updateObject from '@/resources/utils/updateObject';
import calculate from '@/resources/utils/calculate';
import filterDigits from '@/resources/utils/filterDigits';
import displayInfinity from '@/resources/utils/displayInfinity';
import calculatorType from './calculatorType';

const initialState = {
  storedResult: '',
  accumulatedResult: '',
  screenResult: '0',
  operation: '',
  keepDisplayedInNextSet: false,
  isCalculateFinished: false,
};

const calculatorReducer = function (state = initialState, action) {
  switch (action.type) {
    case calculatorType.KEEP_RESULT:
      return updateObject(state, {
        storedResult: state.screenResult,
      });
    case calculatorType.SET_RESULT: {
      const newObject = {
        screenResult: action.payload,
        accumulatedResult: '',
        keepDisplayedInNextSet: false,
      };
      if (state.isCalculateFinished) {
        newObject.operation = '';
      }
      return updateObject(state, newObject);
    }
    case calculatorType.RESET: {
      if (Number(state.screenResult)) {
        return updateObject(state, {
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
        isCalculateFinished: false,
      });
    }
    case calculatorType.ON_CALCULATE: {
      if (!state.operation) {
        return state;
      }
      let a = state.storedResult;
      let b = state.screenResult;
      if (state.accumulatedResult) {
        a = state.screenResult;
        b = state.accumulatedResult;
      }
      const result = filterDigits(displayInfinity(Number.prototype.toString.call(
        calculate(
          a,
          b,
          state.operation,
        ),
      )));
      return updateObject(state, {
        screenResult: result,
        storedResult: '',
        accumulatedResult: state.keepDisplayedInNextSet
          ? state.accumulatedResult
          : state.screenResult,
        keepDisplayedInNextSet: true,
        isCalculateFinished: true,
      });
    }
    default:
      return state;
  }
};

export default calculatorReducer;
