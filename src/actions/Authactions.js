// --------------- ACTIONS ------------------------

import api from "../utils/api";
import {FETCH_LOGIN_SUCCESS,FETCH_LOGIN_FAILURE} from "./types"

export default async function getLogin(dispatch,payload) {
    try {
      const response = await api.post('/auth/login',payload);
      dispatch({type:FETCH_LOGIN_SUCCESS,payload:response.data})
      return response.data
    } catch (error) {
      dispatch({type:FETCH_LOGIN_FAILURE,payload:error.message})
    }
  }
