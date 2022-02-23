import actiontypes from '../../actions/actionTypes';

const initialState = {
  name: null,
  email: null,
  cart: [],
};

export default users = (state = initialState, {type, payload}) => {
  switch (type) {
    case actiontypes.USER_ADDED:
      return {
        ...state,
        name: payload.name,
        email: payload.email,
      };

    case actiontypes.PRODUCT_ADDED_CART: {
      // console.log('state from user reducer : ', state);
      let cart;
      if (state.cart == null) {
        cart = [payload.data];
      } else {
        cart = [...state.cart, payload.data];
      }
      return {
        ...state,
        cart: cart,
      };
    }
    default:
      return state;
  }
};
