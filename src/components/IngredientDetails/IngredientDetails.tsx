
import styles from "./IngredientsDetails.module.css";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

const IngredientDetails = (props) => {


  const id = useParams().id
  const ingredientData = useSelector(
    (store) => store.ingredientsReducer.ingredients.find(i => i._id===id)
  );

  
 
  if(!ingredientData) {
    return null
  }

  return (
    <div className={styles.IngredientDetails}>
      <img
        className="mb-4"
        src={ingredientData.image_large}
        alt={ingredientData.name}
      />
      <span className="text text_type_main-medium mb-8">
        {ingredientData.name}
      </span>
      <div className={styles.nutritionalValueGrid}>
        <div className={styles.gridItem}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredientData.calories}
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredientData.proteins}
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredientData.fat}
          </p>
        </div>
        <div className={styles.gridItem}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredientData.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
};

export { IngredientDetails };
