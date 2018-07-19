import * as types from './actionTypes';

import data from '../../../../../mockapi/mock.json';

export function getUserName() {
  return (dispatch) => {
    dispatch({
      type: types.HEADER_GET_USERNAME_PENDING,
    });
    dispatch({
      type: types.HEADER_GET_USERNAME_SUCCESS,
      userName: 'Denis Nelubin',
    });
    //let data = JSON.parse('../../../../../mockapi/mock');
    /*
    if (data) {
      dispatch({
        type: types.HEADER_GET_USERNAME_SUCCESS,
        userName: data.owner.name,
      });
    } else {
      dispatch({
        type: types.HEADER_GET_USERNAME_FAILED,
        userName: '',
      });
    }*/
  }
}