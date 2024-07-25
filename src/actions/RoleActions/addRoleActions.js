// --------------- ACTIONS ------------------------

import api from "../../utils/api";
import {FETCH_ADD_ROLES_SUCCESS,FETCH_ADD_ROLES_FAILURE} from "../types"

export default async function addRole(dispatch,payload) {
    try {
      const response = await api.post('/master/add/roles/detail',payload);
      dispatch({type:FETCH_ADD_ROLES_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_ADD_ROLES_FAILURE,payload:error.message})
    }
  }
