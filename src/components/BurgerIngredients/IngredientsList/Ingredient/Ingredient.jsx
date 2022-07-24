import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import { ingredientPropType } from "../../../../utils/prop-types.js";

export const Ingredient = (props) => {
  const [info, setInfo] = useState(props.data);
  const location = useLocation();
  const bun = useSelector((store) => store.constructors?.bun?._id);

  const qty = useSelector(
    (store) =>
      store.constructors.ingredients.filter((item) => item._id === info._id)
        .length
  );

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: info,
  });
  return (
    <Link
      to={{
        pathname: `/ingredients/${info._id}`,
        state: { background: location },
      }}
    >
      <li className={styles.ingredientItem} ref={dragRef}>
        <img className="pl-4 pr-4" src={info.image}></img>
        <section className={`${styles.price} mt-1 mb-1`}>
          <span className="text text_type_digits-default mr-2 text_color_inactive">
            {info.price}
          </span>
          <CurrencyIcon type="primary" />
        </section>
        <h4
          className={`${styles.itemName} text text_type_main-default mt-1 mb-6 text_color_inactive`}
        >
          {info.name}
        </h4>
        {info.type !== "bun" && qty ? (
          <Counter count={qty} size="small" />
        ) : null}
        {info._id === bun ? <Counter count={1} size="small" /> : null}
      </li>
    </Link>
  );
};

Ingredient.propTypes = {
  data: ingredientPropType,
};
