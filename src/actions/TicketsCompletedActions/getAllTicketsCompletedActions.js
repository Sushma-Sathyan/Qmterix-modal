// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_GET_TICKETS_SUCCESS,FETCH_GET_TICKETS_FAILURE} from "../types"

export default async function getAllTicketsCompleted(dispatch,payload) {
    try {
      const response = await api.post('/master/fetch/tickets/graphdata',payload);
      dispatch({type:FETCH_GET_TICKETS_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_GET_TICKETS_FAILURE,payload:error.message})
    }
  }
