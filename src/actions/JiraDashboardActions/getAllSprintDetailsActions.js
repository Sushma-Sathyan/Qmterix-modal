// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_GET_SPRINT_DETAILS_SUCCESS,FETCH_GET_SPRINT_DETAILS_FAILURE} from "../types"

export default async function allSprintDetails(dispatch,payload) {
    try {
      // const response = await api.post('/master/fetch/alljirasprints/issues/inmetrics',payload);
      const response = await api.post('/master/fetch/jirasprint/issuebyid/inmetrics',payload);
      dispatch({type:FETCH_GET_SPRINT_DETAILS_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_GET_SPRINT_DETAILS_FAILURE,payload:error.message})
    }
  }
