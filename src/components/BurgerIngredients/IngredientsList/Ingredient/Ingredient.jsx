import React, { useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";

export const Ingredient = (props) => {
  const [info, setInfo] = useState(props.data);
  return (
    <li onClick ={props.clickHandler}className={styles.ingredientItem}>
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
      <Counter count={1} size="small" />
    </li>
  );
};
