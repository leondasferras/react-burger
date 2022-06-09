import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED} from '../types'

export const order = (orderData) => (dispatch) => {
  
  dispatch({
    type: CREATE_ORDER_REQUEST,
  });

  return fetch("https://norma.nomoreparties.space/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
  .then((res) => {
    
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  })
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