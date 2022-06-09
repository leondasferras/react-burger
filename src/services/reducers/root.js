import React from "react";
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients'
import { constructor } from "./constructor";
import { ingredientInModal } from "./ingredientInModal";
import { order } from "./order";


export const rootReducer = combineReducers({
    ingredientsReducer,
    constructor,
    ingredientInModal,
    order
})

