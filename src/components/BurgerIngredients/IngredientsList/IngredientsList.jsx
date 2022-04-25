import React from 'react'
import {data} from '../../../utils/data.js'
import { Ingredient } from './Ingredient/Ingredient.jsx'
import styles from './IngredientsList.module.css'


export const IngredientsList = (props) => {

const ingredientsArray = []

data.forEach(item => {
    ingredientsArray.push(<Ingredient data = {item}/>)
})

return ( <ul className={styles.ingredientsList}>
    {ingredientsArray.filter((item =>
        item.props.data.type === props.type
    ))}
</ul>)



}
