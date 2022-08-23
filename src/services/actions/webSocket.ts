import { TOrders } from '../../utils/types';

import {WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED, 
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE} from '../types'



  export type TWSActionNames = {
    onStart: typeof WS_CONNECTION_START,
    onClose: typeof WS_CONNECTION_CLOSED,
    onSend: typeof WS_SEND_MESSAGE,
    onOpen: typeof WS_CONNECTION_SUCCESS,
    onError: typeof WS_CONNECTION_ERROR,
    onMessage: typeof WS_GET_MESSAGE
  }


export const wsActions:TWSActionNames = {
  onStart: WS_CONNECTION_START,
  onClose: WS_CONNECTION_CLOSED,
  onSend: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
}

export interface IWSConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
}

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  payload: TOrders
}

export type TWSActionsTypes = IWSConnectionStartAction | IWsConnectionCloseAction | IWsSendMessageAction | IWsConnectionSuccessAction | IWsConnectionErrorAction | IWsConnectionClosedAction | IWsGetMessageAction

export type TWSActions =
| IWSConnectionStartAction
| IWsConnectionCloseAction
| IWsSendMessageAction
| IWsConnectionSuccessAction
| IWsConnectionErrorAction
| IWsConnectionClosedAction
| IWsGetMessageAction;