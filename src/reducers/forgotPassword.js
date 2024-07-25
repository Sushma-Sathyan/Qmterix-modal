// reducers.js
import { FETCH_FORGOT_PASSWORD_REQUEST,FETCH_FORGOT_PASSWORD_SUCCESS,FETCH_FORGOT_PASSWORD_FAILURE } from '../actions/types';

const initialState = {
  email:"",
  loading: false,
  error: null,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotPassword: action.payload,
      };
    case FETCH_FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
