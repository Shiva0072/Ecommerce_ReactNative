import actiontypes from '../../actions/actionTypes';

const initialState = {
  categories: null,
  loading: true,
  error: null,
};

export default categories = (state = initialState, {type, payload}) => {
  switch (type) {
    case actiontypes.CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        categories: payload.data,
        error: null,
        loading: false,
      };
    case actiontypes.CATEGORY_FETCH_FAILURE:
      return {
        ...state,
        categories: null,
        error: payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
