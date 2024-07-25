// reducers.js

import { FETCH_RESET_PASSWORD_REQUEST,FETCH_RESET_PASSWORD_SUCCESS,FETCH_RESET_PASSWORD_FAILURE } from '../actions/types';

const initialState = {
  resetPassword: [],
  loading: false,
  error: null,
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        resetPassword: action.payload,
      };
    case FETCH_RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
