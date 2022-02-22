import actiontypes from '../../actions/actionTypes';

const initialState = {
  name: null,
  email: null,
  cart: null,
};

export default users = (state = initialState, {type, payload}) => {
  switch (type) {
    case actiontypes.USER_ADDED:
      return {
        ...state,
        name: payload.name,
        email: payload.email,
      };
    default:
      return state;
  }
};
