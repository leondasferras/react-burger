import React from 'react'
import { Ingredient } from './Ingredient/Ingredient.jsx'
import styles from './IngredientsList.module.css'


export const IngredientsList = (props) => {

const ingredientsArray = props.data.filter(item =>
    item.type === props.type
    )

const ingredientsToRenderArray =  ingredientsArray.map((item => {
     return  <Ingredient key = {item._id} data = {item} clickHandler = {props.ingredientClickHandler}/>
    }))

return ( <ul className={styles.ingredientsList}>
        {ingredientsToRenderArray}
    </ul>
)



}
