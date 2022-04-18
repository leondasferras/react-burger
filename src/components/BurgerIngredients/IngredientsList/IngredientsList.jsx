import React from 'react'
import {data} from '../../../utils/data.js'
import { Ingredient } from './Ingredient/Ingredient.jsx'


export const IngredientsList = (props) => {

const ingredientsArray = []

data.forEach(item => {
    ingredientsArray.push(<Ingredient data = {item}/>)
})

return (ingredientsArray.filter((item => 
    item.props.data.type === props.type
)))



}
