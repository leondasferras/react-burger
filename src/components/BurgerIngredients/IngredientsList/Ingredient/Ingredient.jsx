import React, { useState } from "react";
import { useDrag } from "react-dnd";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import { ingredientPropType } from "../../../../utils/prop-types.js";

export const Ingredient = (props) => {
  const [info, setInfo] = useState(props.data);
  
  
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: info
  })
  return (
    <li
      onClick={() => props.clickHandler(info)}
      className={styles.ingredientItem}
      ref ={dragRef}
    >
      <img className="pl-4 pr-4" src={info.image}></img>
      <section className={`${styles.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default mr-2">{info.price}</span>
        <CurrencyIcon type="primary" />
      </section>
      <h4
        className={`${styles.itemName} text text_type_main-default mt-1 mb-6`}
      >
        {info.name}
      </h4>
      <Counter count={0} size="small" />
    </li>
  );
};

Ingredient.propTypes = {
  data: ingredientPropType,
};
