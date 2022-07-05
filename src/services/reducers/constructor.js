import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_RESET,
  CONSTRUCTOR_UPDATE,
} from "../types";

const initialState = {
  ingredients: [],
  bun: null,
};

export const constructors = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_ADD:
      if (action.payload.type !== "bun") {
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
      } else if (state.bun && state.bun._id === action.payload._id) {
        return { ...state };
      } else {
        return { ...state, bun: action.payload };
      }

    case CONSTRUCTOR_DELETE:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.uid !== action.payload
        ),
      };

    case CONSTRUCTOR_UPDATE:
      const newArr = state.ingredients.slice(0);
      const dragItem = newArr[action.payload.dragIndex];
      newArr[action.payload.dragIndex] = newArr[action.payload.hoverIndex];
      newArr[action.payload.hoverIndex] = dragItem;
      return { ...state, ingredients: newArr };

    case CONSTRUCTOR_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
