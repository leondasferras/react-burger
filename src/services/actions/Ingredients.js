import {GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR} from "../types";


export function getIngredients () {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS
        })

        fetch("https://norma.nomoreparties.space/api/ingredients")
            .then((res) => {
               if (res && res.ok) {
                   dispatch({
                       type: GET_INGREDIENTS_SUCCESS,
                       payload: res.data
                   })
               }
               else {
                   dispatch({
                       type: GET_INGREDIENTS_ERROR
                   })
               }
            }).catch( err => {
                dispatch({
                    type: GET_INGREDIENTS_ERROR
                })
        })

    }
}