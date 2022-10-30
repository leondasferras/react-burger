import { SET_USER_DATA_REQUEST, SET_USER_DATA_SUCCESS, SET_USER_DATA_FAILED  } from "../types";

import {setUserDataRequest} from '../api'
import { TUserData, AppDispatch} from "../../utils/types";

interface ISetUserdataRequestAction {
  readonly type: typeof SET_USER_DATA_REQUEST;
}

interface ISetUserdataSuccessAction {
  readonly type: typeof SET_USER_DATA_SUCCESS;
  readonly payload: {user:TUserData};
}

interface ISetUserdataFailedAction {
  readonly type: typeof SET_USER_DATA_FAILED;
}


export type TSetUserdataActions = ISetUserdataRequestAction | ISetUserdataSuccessAction | ISetUserdataFailedAction

export const setUserData = (data:TUserData) => {
  return function(dispatch:AppDispatch) {
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