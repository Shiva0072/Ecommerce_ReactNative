import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import getCategories from '../../services/categoryApi';
import actiontypes from '../actions/actionTypes';
import {
  categoryFetchFailure,
  categoryFetchSuccess,
} from '../actions/entities/category';

// workerSaga
function* fetchTheCategories({type, payload}) {
  try {
    const categories = yield call(getCategories);
    console.log(categories);
    yield put(categoryFetchSuccess(categories));
  } catch (err) {
    yield put(categoryFetchFailure(err));
  }
}

//watcherSaga
function* watchFetchCategories() {
  yield takeEvery(actiontypes.CATEGORY_FETCH, fetchTheCategories);
}

export default watchFetchCategories;
