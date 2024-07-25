// --------------- ACTIONS ------------------------

import api from "../utils/api";
import {FETCH_RESET_PASSWORD_SUCCESS,FETCH_RESET_PASSWORD_FAILURE} from "./types"

export default async function resetPassword(dispatch,payload) {
    try {
      const response = await api.post('/auth/resetpassword',payload);
      dispatch({type:FETCH_RESET_PASSWORD_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_RESET_PASSWORD_FAILURE,payload:error.message})
    }
  }
