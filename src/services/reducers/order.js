import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "../types";

const initialState = {
  ingredients: null,
  isLoading: false,
  isError: false,
  orderData: {
    number: 0,
    name: "default",
  },
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        orderData: { ...initialState.orderData },
        isLoading: true,
        isError: false,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderData: {
          number: action.payload.order.number,
          name: action.payload.name,
        },
      };
    case CREATE_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
