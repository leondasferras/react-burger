import React, { useState } from 'react'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

export const Ingredient = (props) => {
    const [info, setInfo] = useState(props.data);
    return(
            <li>
            <img src = {info.image}></img>
            <span>{info.price}</span>
            <CurrencyIcon type="primary"/>
            <h4>{info.name}</h4>
            <Counter count={1} size="small"/>
        </li>
    )
}