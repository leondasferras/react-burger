import styles from './OrderList.module.css'
import { Order } from './Order/Order'
import { useSelector } from "react-redux";

export const OrderList = () => {
  
  const ordersList = useSelector((store) => store.orders.ordersList);
  
  return (
    <div className={`${styles.orderList} mr-15`}>

      {ordersList.map((item) => {
        return <Order orderInfo = {item}/>
      })}
    </div>
  )
}