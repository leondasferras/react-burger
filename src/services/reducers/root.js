import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructors } from "./constructor";
import { order } from "./order";
import { auth } from "./auth"

export const rootReducer = combineReducers({
  ingredientsReducer,
  constructors,
  order,
  auth
});
