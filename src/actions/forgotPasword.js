// --------------- ACTIONS ------------------------

import api from "../utils/api";
import {FETCH_FORGOT_PASSWORD_SUCCESS,FETCH_FORGOT_PASSWORD_FAILURE} from "./types"

export default async function forgotPassword(dispatch,payload) {
    try {
      const response = await api.post('/auth/forgotpassword',payload);
      dispatch({type:FETCH_FORGOT_PASSWORD_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_FORGOT_PASSWORD_FAILURE,payload:error.message})
    }
  }
