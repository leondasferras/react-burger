import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED} from '../types'
import { orderApi } from '../api';
import { AppDispatch, TIngredient, TOrder} from "../../utils/types";


export interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  readonly payload: {success:boolean, name:string, order:TOrder };
}

export interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED;
}

export type ICreateOrderActions = ICreateOrderRequestAction | ICreateOrderSuccessAction | ICreateOrderFailedAction


export const order = (orderData:Array<string>) => (dispatch:AppDispatch) => {
  
  dispatch({
    type: CREATE_ORDER_REQUEST,
  });

  return orderApi(orderData)
    .then ((res) => {
    if (res.success) 
        dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: res
      })
    
      else { dispatch({
        type:CREATE_ORDER_FAILED,

      })}
    
  })
    .catch((err) => {
      dispatch({
        type: CREATE_ORDER_FAILED,

      });
    });
};


