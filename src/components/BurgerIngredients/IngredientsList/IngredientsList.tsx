import React from "react";
import { useSelector } from "../../../services/hooks";
import { Ingredient } from "./Ingredient/Ingredient";
import styles from "./IngredientsList.module.css";


type TIngredientListProps = {
  type:string;

}
export const IngredientsList = (props:TIngredientListProps) => {
  const allIngredients = useSelector(
    (store) => store.ingredientsReducer.ingredients
  );

  const ingredientsArray = allIngredients.filter(
    (item) => item.type === props.type
  );

  const ingredientsToRenderArray = ingredientsArray.map((item) => {
    return (
      <Ingredient
        key={item._id}
        data={item}
      />
    );
  });

  return <ul className={styles.ingredientsList}>{ingredientsToRenderArray}</ul>;
};
