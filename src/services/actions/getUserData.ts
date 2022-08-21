import { GET_USER_DATA_REQUEST, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED  } from "../types";

import { TUserData, AppDispatch} from "../../utils/types";

import {getUserDataRequest} from '../api'


interface IGetUserRequestAction {
  readonly type: typeof GET_USER_DATA_REQUEST;
}

interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_DATA_SUCCESS;
  readonly payload : {user:TUserData};
}

interface IGetUserFailedAction {
  readonly type: typeof GET_USER_DATA_FAILED;
}

export type TGetUserdataActions = IGetUserRequestAction | IGetUserSuccessAction | IGetUserFailedAction

export const getUserData = () => {
  return function(dispatch:AppDispatch) {
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