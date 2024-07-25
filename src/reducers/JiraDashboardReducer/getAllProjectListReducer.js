// reducers.js

import { FETCH_GET_PROJECTS_REQUEST,FETCH_GET_PROJECTS_SUCCESS,FETCH_GET_PROJECTS_FAILURE } from '../../actions/types';

const initialState = {
  loading: false,
  error: null,
};

const getAllProjectListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        getAllProjectList: action.payload,
      };
    case FETCH_GET_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllProjectListReducer;
