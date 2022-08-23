import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../types";

import {TOrder} from '../../utils/types'
import {TWSActionsTypes} from '../actions/webSocket'

type TOrdersState = {
  wsConnected: boolean;
  wsError: string | undefined | Event;
  ordersList: Array<TOrder>;
  total: number;
  today:number;
}

const initialState:TOrdersState = {
  wsConnected: false,
  wsError: undefined,
  ordersList: [],
  total: 0,
  today: 0,
};

export const orders = (state = initialState, action:TWSActionsTypes): TOrdersState=> {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsError: action.payload,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        ordersList: action.payload.orders,
        total: action.payload.total,
        today: action.payload.totalToday,
      };

    default:
      return state;
  }
};
