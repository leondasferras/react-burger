import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderList } from "../../components/OrderList/OrderList";
import styles from "./FeedPage.module.css";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../services/types";

export const FeedPage = () => {
  const dispatch = useDispatch();
  const today = useSelector((store) => store.orders.today);
  const total = useSelector((store) => store.orders.total);
  const orders = useSelector((store) => store.orders.ordersList);

  const doneOrders = orders.map((order) => {
    return order.status === "done" ? order.number : null;
  });
  const inWorkorders = orders.map((order) => {
    return order.status === "created" ? order.number : null;
  });

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: "wss://norma.nomoreparties.space/orders/all",
    });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, []);

  return (
    <section className={`${styles.feedPage}`}>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      <div className={`${styles.sectionWrapper}`}>
        <OrderList />
        <div className={`${styles.ordersNumbers}`}>
          <div className={`${styles.completedOrders}`}>
            <p className="text text_type_main-default mb-6">Готовы:</p>
            <ul className={`${styles.list} ${styles.completedList}`}>
              {doneOrders.slice(0, 20).map((num) => {
                return (
                  <li
                    className="text text_type_digits-default"
                    key={Math.random().toString(36).slice(2)}
                  >
                    {num}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={`${styles.inProgressOrders}`}>
            <p className="text text_type_main-default mb-6">В работе:</p>
            <ul className={`${styles.list} ${styles.inProgressList}`}>
              {inWorkorders.slice(0, 20).map((num) => {
                return (
                  <li
                    className="text text_type_digits-default"
                    key={Math.random().toString(36).slice(2)}
                  >
                    {num}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`${styles.allTimeOrdersCounter}`}>
            <p className="text text_type_main-default">
              Выполнено за все время:
            </p>
            <p className="text text_type_digits-large">{total}</p>
          </div>
          <div className={`${styles.todayOrdersCounter}`}>
            <p className="text text_type_main-default">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large">{today}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
