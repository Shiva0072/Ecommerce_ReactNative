import actiontypes from '../actionTypes';

export const UserAdded = data => {
  return {
    type: actiontypes.FETCH_USER,
    payload: {
      data,
    },
  };
};
export const fetchUserSucess = data => {
  //data=>users
  return {
    type: actiontypes.FETCH_USER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchUserFailure = data => {
  //data=>error
  return {
    type: actiontypes.FETCH_USER_FAILURE,
    payload: {
      error: data,
    },
  };
};
