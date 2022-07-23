
import styles from './OrderList.module.css'
import { Order } from './Order/Order'
import { useSelector } from "react-redux";

export const OrderList = ({isStatusShown}) => {


    const ordersList = useSelector((store) => store.orders.ordersList);
  
  return (
    <div className={`${styles.orderList} mr-15`}>

      {ordersList.map((item) => {
        return <Order isStatusShown={isStatusShown} orderInfo = {item} key={Math.random().toString(36).slice(2)}/>
      })}
    </div>
  )
}