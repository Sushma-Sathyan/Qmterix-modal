// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_ROLES_SUCCESS,FETCH_ROLES_FAILURE} from "../types"

export default async function getRole(dispatch,payload) {
    try {
      const response = await api.get('/master/get/roles/detail',payload);
      dispatch({type:FETCH_ROLES_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_ROLES_FAILURE,payload:error.message})
    }
  }
