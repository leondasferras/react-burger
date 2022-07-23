import {CONSTRUCTOR_ADD, CONSTRUCTOR_UPDATE} from '../types'


export const addIngredient = (ingredientData) => ({
type: CONSTRUCTOR_ADD,
payload: ingredientData
}
)


export const updateConstructor = (dragIndex, hoverIndex) => ({
  type:CONSTRUCTOR_UPDATE,
  payload: {
    dragIndex,
    hoverIndex
  }
})
