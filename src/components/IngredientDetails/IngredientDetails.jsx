import styles from './IngredientsDetails.module.css'
import icon from '../../images/stroke-icon.svg'

const IngredientDetails = () => {

  return (
    <div className={styles.IngredientDetails}>
      <img src="" alt="" />
      <span></span>
      <div className='nutritionalValueGrid'></div>
        <div className="gridItem cals">
          <span className='name'>Калории,ккал</span>
          <span className='value'></span>
        </div>
        <div className="gridItem proteins">
          <span className='name'>Белки, г</span>
          <span className='value'></span>
        </div>
        <div className="gridItem fats">
          <span className='name'>Жиры, г</span>
          <span className='value'></span>
        </div>
        <div className="gridItem carbs">
          <span className='name'>Углеводы, г</span>
          <span className='value'></span>
        </div>
    </div>
  )
}

export {IngredientDetails}