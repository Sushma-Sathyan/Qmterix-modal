// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_TEAMS_SUCCESS,FETCH_TEAMS_FAILURE} from "../types"

export default async function getTeam(dispatch,payload) {
    try {
      const response = await api.get('/master/get/teams/detail',payload);
      dispatch({type:FETCH_TEAMS_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_TEAMS_FAILURE,payload:error.message})
    }
  }
