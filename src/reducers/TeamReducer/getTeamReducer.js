// reducers.js

import { FETCH_TEAMS_REQUEST,FETCH_TEAMS_SUCCESS,FETCH_TEAMS_FAILURE } from '../../actions/types';

const initialState = {
  loading: false,
  error: null,
};

const getTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        getTeam: action.payload,
      };
    case FETCH_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getTeamReducer;
