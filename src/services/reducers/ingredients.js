import {GET_INGREDIENTS, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_SUCCESS} from "../types";


const initialState = {
    ingredients: [],
    isLoading: false,
    isError: false,

    }


    export const ingredientsReducer = (state = initialState, action) => {
     switch (action.type) {
         case GET_INGREDIENTS:
             return {...state,
                    isLoading: true,
                    isError: false
                    }
         case GET_INGREDIENTS_SUCCESS:
             return {
                 ...state,
                 ingredients: action.payload.ingredients,
                 qty: action.payload.qtyObject,
                 isLoading: false
             }
         case GET_INGREDIENTS_ERROR:
             return {
                 ...state,
                 isError: true,
                 isLoading: false
             }
        
        
         default :
             return state

     }


    }