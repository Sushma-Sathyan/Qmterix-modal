// reducers.js

import { FETCH_GET_TICKETS_REQUEST,FETCH_GET_TICKETS_SUCCESS,FETCH_GET_TICKETS_FAILURE } from '../../actions/types';

const initialState = {
  loading: false,
  error: null,
};

const getAllTicketListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GET_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        getAllTicketList: action.payload,
      };
    case FETCH_GET_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllTicketListReducer;
