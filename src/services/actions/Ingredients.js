import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../types";

import { getIngredientsApi } from "../api";

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS,
    });
    getIngredientsApi()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: {
              ingredients: res.data,
              qtyObject: res.data.map((ingredient) => ({
                id: ingredient._id,
                qty: 0,
              })),
            },
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_ERROR,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_ERROR,
        });
      });
  };
}
