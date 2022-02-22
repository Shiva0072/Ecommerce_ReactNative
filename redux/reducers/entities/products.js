import actiontypes from '../../actions/actionTypes';

let initialState = {
  category: null,
  products: null,
  loading: true,
  error: null,
};

// component_interaction_by_user=>actionTypes=>MW [redux-saga]=>reducers=>store is updated=>component rerenders

export default products = (state = initialState, {type, payload}) => {
  switch (type) {
    case actiontypes.PRODUCT_FETCHED_SUCCESS:
      return {
        ...state,
        category: payload.category,
        products: payload.products,
        loading: false,
        error: null,
      };

    case actiontypes.PRODUCT_FETCHED_FAILURE:
      return {
        ...state,
        category: payload.category,
        products: null,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};
