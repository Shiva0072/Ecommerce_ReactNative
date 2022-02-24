import actiontypes from '../actionTypes';

export const UserAdded = data => {
  return {
    type: actiontypes.FETCH_USER,
    payload: {
      data,
    },
  };
};

export const productAddedToCart = data => ({
  type: actiontypes.PRODUCT_ADDED_CART,
  payload: {
    data: data,
  },
});

export const removeFromCart = id => ({
  type: actiontypes.PRODUCT_DECREASE_CART,
  payload: {
    id: id,
  },
});

export const deleteFromCart = id => ({
  type: actiontypes.PRODUCT_REMOVED_CART,
  payload: {
    id: id,
  },
});
