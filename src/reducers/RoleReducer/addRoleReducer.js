// reducers.js

import { FETCH_ADD_ROLES_REQUEST,FETCH_ADD_ROLES_SUCCESS,FETCH_ADD_ROLES_FAILURE } from '../../actions/types';

const initialState = {
  role_name:"",
  role_description:"",
  loading: false,
  error: null,
};

const addRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_ROLES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ADD_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        addRole: action.payload,
      };
    case FETCH_ADD_ROLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addRoleReducer;
