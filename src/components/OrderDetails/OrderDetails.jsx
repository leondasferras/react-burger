import styles from './OrderDetails.module.css'
import icon from '../../images/stroke-icon.svg'

const OrderDetails = () => {

  return (
    <div className={`${styles.orderDetails} pb-15`}>
      <span className={`${styles.orderNumber} text text_type_digits-large mb-8`}> 345232</span>
      <span className ={'text text_type_main-medium mb-15'}>идентификатор заказа</span>
      <img className='mb-15' src={icon} alt='Заказ подтвержден'></img>
      <p className="text text_type_main-default  mt-4 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export {OrderDetails}