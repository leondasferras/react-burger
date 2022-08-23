import { TWSActionNames} from '../actions/webSocket'
import { AnyAction, Middleware, MiddlewareAPI } from 'redux';
import { AppDispatch, RootState } from '../../utils/types';

export const socketMiddleware = (wsActions:TWSActionNames):Middleware => {
  return (store:MiddlewareAPI<AppDispatch, RootState>) => {
    let socket:WebSocket | null = null;

    return (next: (i:AnyAction) => void) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;

      if (type === wsActions.onStart) {
        socket = new WebSocket(action.payload);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: wsActions.onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: wsActions.onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: wsActions.onMessage, payload: parsedData });
        };
        socket.onclose = (event) => {
          dispatch({ type: wsActions.onClose, payload: event });
        };

        if (type === wsActions.onSend) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
