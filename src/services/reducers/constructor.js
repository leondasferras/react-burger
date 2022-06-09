import {CONSTRUCTOR_ADD, 
      CONSTRUCTOR_DELETE, 
      CONSTRUCTOR_RESET} from "../types"


const initialState = {
  ingredients: [],
  bun: {}
}


export const constructor = (state=initialState, action) => {

  switch (action.type) {
    case CONSTRUCTOR_ADD:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }

    case CONSTRUCTOR_DELETE:
      return {
        ...state,
        ingredients: state.ingredients.filter( item => item.id !== action.payload)
      }

    case CONSTRUCTOR_RESET: 
      return {
       initialState
      }
      default:
        return state

  }

}