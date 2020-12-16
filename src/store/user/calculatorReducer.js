import updateObject from '@/resources/utils/updateObject';
import calculatorType from './calculatorType';

const initialState = {
  result: {},
  operation: '',
};

const calculatorReducer = function (state = initialState, action) {
  switch (action.type) {
    case calculatorType.SET_RESULT:
      if (state.result !== action.payload) {
        return updateObject(state, {
          result: action.payload,
        });
      }
      return state;
    case calculatorType.SET_OPERATION:
      if (state.operation !== action.payload) {
        return updateObject(state, {
          operation: action.payload,
        });
      }
      return state;
    default:
      return state;
  }
};

export default calculatorReducer;
