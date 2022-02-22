import actiontypes from '../actionTypes';

export const categoryFetch = () => ({
  type: actiontypes.CATEGORY_FETCH,
  payload: {},
});

export const categoryFetchSuccess = data => ({
  type: actiontypes.CATEGORY_FETCH_SUCCESS,
  payload: {
    data,
  },
});

export const categoryFetchFailure = err => ({
  action: actiontypes.CATEGORY_FETCH_FAILURE,
  payload: {
    error: err,
  },
});
