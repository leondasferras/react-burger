import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../types";

import { getIngredientsApi } from "../api";
import { AppDispatch, TIngredient} from "../../utils/types";



interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS;
}

interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: {ingredients:Array<TIngredient>, qtyObject:{}};
}

interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TGetIngredientsActions  = IGetIngredientsRequestAction | IGetIngredientsSuccessAction | IGetIngredientsFailedAction


export function getIngredients() {
  return function (dispatch:AppDispatch) {
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
              qtyObject: res.data.map((ingredient: TIngredient) => ({
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
