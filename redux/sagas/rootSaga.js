import {all} from 'redux-saga/effects';

//sagas
import products from './products';
import categories from './categories';

//export the root saga
function* rootSaga() {
  yield all([products(), categories()]);
}

export default rootSaga;
