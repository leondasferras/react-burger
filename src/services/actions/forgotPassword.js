import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED } from "../types";


import { forgotPassRequest } from "../api";

export const forgotPassword = (email) => {
  return function (dispatch) {
    dispatch({type:FORGOT_PASSWORD_REQUEST})
    forgotPassRequest(email)
    .then ((res) => {
      if (res && res.success) {
        dispatch({type:FORGOT_PASSWORD_SUCCESS})
      }
      else {dispatch({type:FORGOT_PASSWORD_FAILED})}
    })
    .catch ((err) => {
      console.error(err)
      dispatch({type:FORGOT_PASSWORD_FAILED})
    })
  }

}