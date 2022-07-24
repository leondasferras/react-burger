import { SET_USER_DATA_REQUEST, SET_USER_DATA_SUCCESS, SET_USER_DATA_FAILED  } from "../types";

import {setUserDataRequest} from '../api'

export const setUserData = (data) => {
  return function(dispatch) {
    dispatch({type: SET_USER_DATA_REQUEST}) 
    setUserDataRequest(data)
    .then((res)=> {
      if(res && res.success) {
        dispatch({type:SET_USER_DATA_SUCCESS, payload:res})
      }
      else dispatch({type:SET_USER_DATA_FAILED})
    }) 
    .catch((err)=> {
      console.error(err)
      dispatch({type:SET_USER_DATA_FAILED})
    })

  }
}