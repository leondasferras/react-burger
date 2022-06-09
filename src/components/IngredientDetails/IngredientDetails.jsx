import styles from './IngredientsDetails.module.css'
import { ingredientPropType } from "../../utils/prop-types.js";
import { useSelector } from 'react-redux';


;

const IngredientDetails = (props) => {

  const ingredientData = useSelector(store => store.ingredientInModal.ingredient)

  return (
    <div className={styles.IngredientDetails}>
      <img className='mb-4' src={ingredientData.image_large} alt={ingredientData.name} />
      <span className='text text_type_main-medium mb-8'>{ingredientData.name}</span>
      <div className={styles.nutritionalValueGrid}>
        <div className={styles.gridItem}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredientData.calories}</p>
        </div>
        <div className={styles.gridItem}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredientData.proteins}</p>
        </div>
        <div className={styles.gridItem}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredientData.fat}</p>
        </div>
        <div className={styles.gridItem}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredientData.carbohydrates}</p>
        </div>
        </div>
    </div>
  )
}



export {IngredientDetails}