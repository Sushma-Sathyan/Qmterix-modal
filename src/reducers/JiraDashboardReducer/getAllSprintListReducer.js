// reducers.js

import { FETCH_GET_SPRINT_REQUEST,FETCH_GET_SPRINT_SUCCESS,FETCH_GET_SPRINT_FAILURE } from '../../actions/types';

const initialState = {
  loading: false,
  error: null,
};

const getAllSprintListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_SPRINT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GET_SPRINT_SUCCESS:
      return {
        ...state,
        loading: false,
        getAllSprint: action.payload,
      };
    case FETCH_GET_SPRINT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllSprintListReducer;
