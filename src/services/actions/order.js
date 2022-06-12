import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED} from '../types'
import { orderApi } from '../api';



export const order = (orderData) => (dispatch) => {
  
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