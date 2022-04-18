import React from 'react'
import {data} from '../../../utils/data.js'
import { Ingredient } from './Ingredient/Ingredient.jsx'


export const IngredientsList = (props) => {

const bunsArray = data.filter(item => item.type === 'bun')
const mainArray = data.filter(item => item.type === 'main')
const sauseArray = data.filter(item => item.type ==='sauce' )

const ingredientsArray = []

data.forEach(item => {
    ingredientsArray.push(<Ingredient data = {item}/>)
})

console.log(ingredientsArray)


return (ingredientsArray.filter((item => 
    item.props.data.type === props.type
)))



}
