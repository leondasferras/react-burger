import React from 'react'
import {data} from '../../../utils/data.js'
import { Ingredient } from './Ingredient/Ingredient.jsx'


export const IngredientsList = (props) => {

const bunsArray = data.filter(item => item.type === 'bun')
const mainArray = data.filter(item => item.type === 'main')
const sauseArray = data.filter(item => item.type ==='sauce' )

const renderIngredients = (array) => {
  
    array.forEach(item => {
        return (
            <Ingredient data = {{
                "_id":"60666c42cc7b410027a1a9b1",
                "name":"Краторная булка N-200i",
                "type":"bun",
                "proteins":80,
                "fat":24,
                "carbohydrates":53,
                "calories":420,
                "price":1255,
                "image":"https://code.s3.yandex.net/react/code/bun-02.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
                "__v":0
               }}/>
            
        )
    })
} 

return (renderIngredients(bunsArray))




}

