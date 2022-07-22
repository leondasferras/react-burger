import styles from './Order.module.css'
import { useSelector } from "react-redux";
import {
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Order = ({orderInfo}) => {
  
  const ingredients = useSelector((store) => store.ingredientsReducer.ingredients)

  const formattedDate = () => {
    const date = new Date()
    const orderDate = new Date(orderInfo.createdAt)
    const hours = orderDate.getHours()
    const minutes = orderDate.getMinutes()
    date.setHours(0,0,0,0)
    orderDate.setHours(0,0,0,0)
    const difference = (date - orderDate) / (24 * 60* 60 * 1000)
    let timePrefix
    if (difference === 0) timePrefix = 'Сегодня'
    else if (difference === 1) timePrefix = 'Вчера'
    else timePrefix = difference + 'дней назад'
    const timeZone = (orderDate.getTimezoneOffset())/60;
    
    return timePrefix + ', ' + hours + ':' +minutes + ' i-GMT' + (timeZone > 0 ? timeZone : '+'  + timeZone * -1);
  }

  return (
   <li className={`${styles.order} mb-4`}>
    <div className={`${styles.numberAndTimeWrapper} mb-6`}>
      <p className='text text_type_digits-default'>{`0${orderInfo.number}`}</p>
      <p className='text text_type_main-default text_color_inactive'>{formattedDate()}</p>
    </div>
    <h2 className="text text_type_main-large mb-6">{orderInfo.name}</h2>
    <div className={`${styles.ingredientsAndPriceWrapper}`}>
      <div className={`${styles.ingredients}`}>
          { orderInfo.ingredients.map((itema) => { 

            return <div  className={`${styles.ingredientImage}`}><img className={`${styles.image}`} src={ingredients.filter(item => item._id === itema)[0].image}></img></div>})
          }
         

      </div>
      <div className={`${styles.price}text text_type_digits-default mr-2`}><span>480</span> <CurrencyIcon type="primary"/> </div>
    </div>
   </li>
  )
}