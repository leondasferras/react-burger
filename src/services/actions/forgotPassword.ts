import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED } from "../types";
import { forgotPassRequest } from "../api";
import { AppDispatch} from "../../utils/types";


interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export type TForgotPassActions = IForgotPasswordRequestAction | IForgotPasswordSuccessAction | IForgotPasswordFailedAction


export const forgotPassword = (email:{email:string}) => {
  return function (dispatch:AppDispatch) {
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