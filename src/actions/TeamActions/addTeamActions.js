// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_ADD_TEAMS_SUCCESS,FETCH_ADD_TEAMS_FAILURE} from "../types"

export default async function addTeam(dispatch,payload) {
    try {
      const response = await api.post('/master/add/teams/detail',payload);
      dispatch({type:FETCH_ADD_TEAMS_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_ADD_TEAMS_FAILURE,payload:error.message})
    }
  }
