import { OrderList } from "../../components/OrderList/OrderList";
import styles from "./FeedPage.module.css";

export const FeedPage = () => {
  return (
    <section className={`${styles.feedPage}`}>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      <div className={`${styles.sectionWrapper}`}>
        <OrderList />
        <div className={`${styles.ordersNumbers}`}>

          <div className={`${styles.completedOrders}`}>
            <p className="text text_type_main-default mb-6">Готовы:</p>
            <ul className={`${styles.list} ${styles.completedList}`}>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>

            </ul>
          </div>

          <div className={`${styles.inProgressOrders}`}>
          <p className="text text_type_main-default mb-6">В работе:</p>
            <ul className={`${styles.list} ${styles.inProgressList}`}>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>
              <li className="text text_type_digits-default">034533</li>

            </ul>
          </div>
            <div className={`${styles.allTimeOrdersCounter}`}>
              <p className="text text_type_main-default">Выполнено за все время:</p>
              <p className="text text_type_digits-large">28 752</p>
            </div>
            <div className={`${styles.todayOrdersCounter}`}>
              <p className="text text_type_main-default">Выполнено за сегодня:</p>
              <p className="text text_type_digits-large">138</p>
            </div>
        </div>
      </div>
    </section>
  );
};
