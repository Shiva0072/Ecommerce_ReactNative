import actiontypes from '../actionTypes';

export const productFetch = category => ({
  type: actiontypes.PRODUCT_FETCH,
  payload: {
    category: category,
  },
});

export const productFetchSuccess = (category, data) => ({
  type: actiontypes.PRODUCT_FETCHED_SUCCESS,
  payload: {
    category: category,
    products: data,
    error: null,
  },
});

export const productFetchFailure = (category, err) => ({
  action: actiontypes.PRODUCT_FETCHED_FAILURE,
  payload: {
    category: category,
    products: null,
    error: err,
  },
});
