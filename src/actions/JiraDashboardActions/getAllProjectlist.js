// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_GET_PROJECTS_SUCCESS,FETCH_GET_PROJECTS_FAILURE} from "../types"

export default async function getAllProjects(dispatch,payload) {
    try {
      const response = await api.post('/master/fetch/add/allprojectdetials/totenant',payload);
      dispatch({type:FETCH_GET_PROJECTS_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_GET_PROJECTS_FAILURE,payload:error.message})
    }
  }
