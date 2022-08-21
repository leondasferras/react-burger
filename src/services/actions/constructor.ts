import internal from 'stream'
import {CONSTRUCTOR_ADD, CONSTRUCTOR_UPDATE, CONSTRUCTOR_DELETE, CONSTRUCTOR_RESET} from '../types'
import { AppDispatch, TIngredient} from "../../utils/types";


interface IConstructorAdd {
  readonly type: typeof CONSTRUCTOR_ADD;
  readonly payload: TIngredient
}

interface IConstructorUpdate {
  readonly type: typeof CONSTRUCTOR_UPDATE;
  readonly payload:{
    dragIndex: number;
    hoverIndex: number
  }
}

interface IConstructorDelete {
  readonly type: typeof CONSTRUCTOR_DELETE;
  readonly payload: string;
}

interface IConstructorReset {
  readonly type: typeof CONSTRUCTOR_RESET;

}

export type TConstructorActions = IConstructorAdd | IConstructorUpdate | IConstructorDelete | IConstructorReset




export const addIngredient = (ingredientData:TIngredient) => ({
type: CONSTRUCTOR_ADD,
payload: ingredientData
}
)


export const updateConstructor = (dragIndex:number, hoverIndex:number) => ({
  type:CONSTRUCTOR_UPDATE,
  payload: {
    dragIndex,
    hoverIndex
  }
})
