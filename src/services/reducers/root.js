import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructors } from "./constructor";
import { order } from "./order";
import { auth } from "./auth";
import { orders } from "./orders";

export const rootReducer = combineReducers({
  ingredientsReducer,
  constructors,
  order,
  auth,
  orders
});
