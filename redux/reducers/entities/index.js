import {combineReducers} from 'redux';

import users from './users';
import products from './products';
import categories from './categories';

export default entityReducer = combineReducers({
  users,
  products,
  categories,
});
