import { combineReducers as rootReducer } from 'redux';
import calculatorReducer from './user/calculatorReducer';

export default rootReducer({
  calculator: calculatorReducer,
});
