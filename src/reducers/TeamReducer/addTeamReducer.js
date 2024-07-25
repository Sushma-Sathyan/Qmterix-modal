// reducers.js

import { FETCH_ADD_TEAMS_REQUEST,FETCH_ADD_TEAMS_SUCCESS,FETCH_ADD_TEAMS_FAILURE } from '../../actions/types';

const initialState = {
  team_name:"",
  team_description:"",
  loading: false,
  error: null,
};

const addTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ADD_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        addRole: action.payload,
      };
    case FETCH_ADD_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addTeamReducer;
