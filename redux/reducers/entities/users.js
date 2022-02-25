import actiontypes from '../../actions/actionTypes';

const initialState = {
  name: null,
  email: null,
  cart: new Map(),
};

export default users = (state = initialState, {type, payload}) => {
  switch (type) {
    case actiontypes.USER_ADDED:
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        cart: new Map(),
      };
    case actiontypes.PRODUCT_ADDED_CART: {
      const id = payload.data.id ? payload.data.id : payload.data;
      let cart = state.cart;
      if (cart.has(id)) {
        let pdt = cart.get(id);
        pdt[1] += 1;
      } else {
        cart.set(payload.data.id, [payload.data, 1]);
      }
      return {
        ...state,
        cart: cart,
      };
    }

    case actiontypes.PRODUCT_DECREASE_CART: {
      const id = payload.id;
      let cart = state.cart;
      if (cart.has(id)) {
        let pdt = cart.get(id);
        pdt[1] -= 1;
        if (pdt[1] <= 0) {
          cart.delete(id);
        }
      }
      return {
        ...state,
        cart: cart,
      };
    }

    case actiontypes.PRODUCT_REMOVED_CART: {
      const id = payload.id;
      let cart = state.cart;
      if (cart.has(id)) {
        cart.delete(id);
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
