import styles from './OrderList.module.css'
import { Order } from './Order/Order'

export const OrderList = () => {
  

  return (
    <div className={`${styles.orderList} mr-15`}>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
    </div>
  )
}