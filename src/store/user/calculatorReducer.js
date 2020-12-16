import calculatorType from './calculatorType';

const initialState = {
  userProfile: {},
  userPermission: {},
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case calculatorType.SET_RESULT:
      if (!_.isEqual(state.userProfile, action.payload)) {
        return objectUtils.updateObject(state, {
          userProfile: action.payload,
        });
      }
      return state;
    case calculatorType.SET_OPERATION:
      if (!_.isEqual(state.userPermission, action.payload)) {
        return objectUtils.updateObject(state, {
          userPermission: action.payload,
        });
      }
      return state;
    default:
      return state;
  }
};

export default calculatorReducer;
