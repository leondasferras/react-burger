import { GET_USER_DATA_REQUEST, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED  } from "../types";



import {getUserDataRequest} from '../api'

export const getUserData = () => {
  return function(dispatch) {
    dispatch({type: GET_USER_DATA_REQUEST}) 
    getUserDataRequest()
    .then((res)=> {
      if(res && res.success) {
        dispatch({type:GET_USER_DATA_SUCCESS, payload:res})
      }
      else dispatch({type:GET_USER_DATA_FAILED})
    }) 
    .catch((err)=> {
      console.error(err)
      dispatch({type:GET_USER_DATA_FAILED})
    })

  }
}