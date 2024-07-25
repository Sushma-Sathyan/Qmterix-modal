// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_GET_SPRINT_SUCCESS,FETCH_GET_SPRINT_FAILURE} from "../types"

export default async function getAllSprint(dispatch,payload) {
    try {
      const response = await api.post('/master/get/alljirasprintsfromtenant',payload);
      dispatch({type:FETCH_GET_SPRINT_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_GET_SPRINT_FAILURE,payload:error.message})
    }
  }
