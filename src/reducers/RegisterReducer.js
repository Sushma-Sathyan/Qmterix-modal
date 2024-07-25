// reducers.js

import { FETCH_REGISTER_REQUEST,FETCH_REGISTER_SUCCESS,FETCH_REGISTER_FAILURE } from '../actions/types';

const initialState = {
  name: "",
  email:"",
  password:"",
  companyname:"",
  loading: false,
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        register: action.payload,
      };
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
