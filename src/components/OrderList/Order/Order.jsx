import styles from './Order.module.css'
import {
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Order = () => {
  
  
  return (
   <li className={`${styles.order} mb-4`}>
    <div className={`${styles.numberAndTimeWrapper} mb-6`}>
      <p className='text text_type_digits-default'>#034535</p>
      <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
    </div>
    <h2 className="text text_type_main-large mb-6">Death Star Starship Main бургер</h2>
    <div className={`${styles.ingredientsAndPriceWrapper}`}>
      <div className={`${styles.ingredients}`}>
          <div  className={`${styles.ingredientImage}`}><img className={`${styles.image}`} src='https://code.s3.yandex.net/react/code/sauce-02.png'></img></div>
          <div  className={`${styles.ingredientImage}`}><img className={`${styles.image}`} src='https://code.s3.yandex.net/react/code/sauce-02.png'></img></div>
          <div  className={`${styles.ingredientImage}`}><img className={`${styles.image}`} src='https://code.s3.yandex.net/react/code/sauce-02.png'></img></div>
          <div  className={`${styles.ingredientImage}`}><img className={`${styles.image}`} src='https://code.s3.yandex.net/react/code/sauce-02.png'></img></div>

      </div>
      <div className={`${styles.price}text text_type_digits-default mr-2`}><span>480</span> <CurrencyIcon type="primary"/> </div>
    </div>
   </li>
  )
}