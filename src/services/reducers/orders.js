import {  WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE } from "../types"

const initialState = {
  wsConnected: false,
  wsError: undefined,
  ordersList: [],
  total: 0,
  today: 0
}

export const orders = (state = initialState, action) => {

  switch (action.type) {

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      } 

    case WS_CONNECTION_ERROR: 
       return {
      ...state,
      error: action.payload,
      wsConnected: false
    }

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false
      }

    case WS_GET_MESSAGE:
      return {
        ...state,
        ordersList: action.payload.orders,
        total: action.payload.total,
        today: action.payload.totalToday
      }

    default:
      return state
    }
    

}
