import * as types from './actionTypes';

let initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.HEADER_GET_USERNAME_PENDING: {
      return {
        ...state,
        waitingUserName: true,
      };
    }
    case types.HEADER_GET_USERNAME_SUCCESS: {
      return {
        ...state,
        waitingUserName: false,
        userName: action.userName,
      };
    }
    case types.HEADER_GET_USERNAME_FAILED: {
      return {
        ...state,
        waitingUserName: false,
        message: action.message,
      };
    }

    default: {
      return state;
    }
  }
};