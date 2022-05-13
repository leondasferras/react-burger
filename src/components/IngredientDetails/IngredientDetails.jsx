import styles from './IngredientsDetails.module.css'
import icon from '../../images/stroke-icon.svg'

const IngredientDetails = (props) => {

  return (
    <div className={styles.IngredientDetails}>
      <img className='mb-4' src={props.ingredientData.image_large} alt={props.ingredientData.name} />
      <span className='text text_type_main-medium mb-8'>{props.ingredientData.name}</span>
      <div className={styles.nutritionalValueGrid}>
        <div className={styles.gridItem}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>{props.ingredientData.calories}</p>
        </div>
        <div className={styles.gridItem}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{props.ingredientData.proteins}</p>
        </div>
        <div className={styles.gridItem}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{props.ingredientData.fat}</p>
        </div>
        <div className={styles.gridItem}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{props.ingredientData.carbohydrates}</p>
        </div>
        </div>
    </div>
  )
}

export {IngredientDetails}