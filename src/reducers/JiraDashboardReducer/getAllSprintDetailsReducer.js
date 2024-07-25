// reducers.js

import { FETCH_GET_SPRINT_DETAILS_REQUEST,FETCH_GET_SPRINT_DETAILS_SUCCESS,FETCH_GET_SPRINT_DETAILS_FAILURE } from '../../actions/types';

const initialState = {
  loading: false,
  error: null,
};

const getAllSprintListDetailesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_SPRINT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GET_SPRINT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        getAllSprintDetails: action.payload,
      };
    case FETCH_GET_SPRINT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllSprintListDetailesReducer;
