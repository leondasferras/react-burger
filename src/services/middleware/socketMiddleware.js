

export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
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
          dispatch({ type: wsActions.onclose, payload: event });
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
