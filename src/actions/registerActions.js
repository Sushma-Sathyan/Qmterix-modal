// --------------- ACTIONS ------------------------

import api from "../utils/api";
import {FETCH_REGISTER_SUCCESS,FETCH_REGISTER_FAILURE} from "./types"

export default async function getRegister(dispatch,payload) {
    try {
      const response = await api.post('/auth/register',payload);
      dispatch({type:FETCH_REGISTER_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_REGISTER_FAILURE,payload:error.message})
    }
  }
