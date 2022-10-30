import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from "../types";
import { resetPassRequest } from "../api";
import { AppDispatch} from "../../utils/types";

interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export type TResetPassActions = IResetPasswordRequestAction | IResetPasswordSuccessAction |IResetPasswordFailedAction



export const resetPassword = ({ password, token }: {password: string, token: string}) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    resetPassRequest({ password, token })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: RESET_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: RESET_PASSWORD_FAILED,
        });
      });
  };
};
