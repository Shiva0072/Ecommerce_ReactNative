import {put, call, takeLatest} from 'redux-saga/effects';

import getProducts from '../../services/productsApi';
import actiontypes from '../actions/actionTypes';
import {
  productFetchSuccess,
  productFetchFailure,
} from '../actions/entities/products';

//workerSaga
function* fetchTheproducts({type, payload}) {
  try {
    const category = payload.category;
    const products = yield call(getProducts, category);
    yield put(productFetchSuccess(category, products));
  } catch (err) {
    const category = payload.category;
    yield put(productFetchFailure(category, err));
  }
}

//watcherSaga
function* watchFetchProducts() {
  yield takeLatest(actiontypes.PRODUCT_FETCH, fetchTheproducts);
}

export default watchFetchProducts;
