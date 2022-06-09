import {INGREDIENT_MODAL_SET, INGREDIENT_MODAL_DELETE} from '../types'

const initialState = {
  ingredient:null
}

export const ingredientInModal = (state = initialState, action) => {

    switch (action.type) {
      case INGREDIENT_MODAL_SET:
        return {
          ...state,
          ingredient: action.payload
        }
        case INGREDIENT_MODAL_DELETE:
          return {
            initialState
          }
        default: return state
    }



}