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
