import styles from "./OrderInfo.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formattedDate } from "../../utils/functions";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { getCookie } from "../../utils/cookiesHandlers";
import { useDispatch } from "react-redux";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../services/types";

export const OrderInfo = () => {
  const dispatch = useDispatch();
  const isfeedPage = useRouteMatch("/feed/:id");
  const isProfilePage = useRouteMatch("/profile/orders/:id");

  useEffect(() => {
    if (isfeedPage) {
      dispatch({
        type: WS_CONNECTION_START,
        payload: "wss://norma.nomoreparties.space/orders/all",
      });
    }
    if (isProfilePage) {
      dispatch({
        type: WS_CONNECTION_START,
        payload: `wss://norma.nomoreparties.space/orders?token=${getCookie(
          "authToken"
        )}`,
      });
    }
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, []);

  const ingredients = useSelector(
    (store) => store.ingredientsReducer.ingredients
  );
  const orderId = useParams().id;
  const orderData = useSelector((store) =>
    store.orders.ordersList.find((i) => i._id === orderId)
  );
  const orderStatus = () => {
    if (orderData.status === "done") return "Выполнен";
    if (orderData.status === "created") return "Создан";
    if (orderData.status === "pending") return "Готовится";
  };

  let totalCost = 0;
  let uniqIngreidents = [...new Set(orderData.ingredients)];

  if (!orderData) {
    return null;
  }

  return (
    <div className={`${styles.orderInfo}`}>
      <p
        className={`${styles.orderNumber} text text_type_digits-default mb-10`}
      >
        {"#0" + orderData.number}
      </p>
      <p className="text text_type_main-large mb-3">{orderData.name}</p>
      <p className={`${styles.orderStatus} text text_type_main-default mb-15`}>
        {orderStatus()}
      </p>
      <p
        className={`${styles.orderCompositionHeader} text text_type_main-large mb-6`}
      >
        Состав:
      </p>
      <ul className={`${styles.orderComposition} mb-10`}>
        {uniqIngreidents.map((ingredient, index) => {
          let ingredientQty = orderData.ingredients.filter(
            (ingred) => ingred === ingredient
          ).length;

          const ingredientInfo = ingredients.filter(
            (item) => item._id === ingredient
          )[0];

          if (ingredientInfo.type === "bun") {
            totalCost += ingredientInfo.price * 2;
            ingredientQty *= 2;
          }
          if (ingredientInfo.type !== "bun") totalCost += ingredientInfo.price;

          return (
            <li className={`${styles.listItem}`} key={index}>
              <div className={`${styles.iconAndNameWrapper}`}>
                <div className={`${styles.ingredientImage} mr-4`}>
                  <img
                    className={`${styles.image}`}
                    src={ingredientInfo.image}
                  ></img>
                </div>
                <p
                  className={`${styles.ingredientName}text text_type_main-default`}
                >
                  {ingredientInfo.name}
                </p>
              </div>
              <p className={`${styles.price} text text_type_digits-default`}>
                {`${ingredientQty} x ${ingredientInfo.price}`}
                <CurrencyIcon className="ml-10" type="primary" />
              </p>
            </li>
          );
        })}
      </ul>
      <div className={`${styles.dataAndFinalPrice} `}>
        <p className="text text_type_main-default text_color_inactive">
          {formattedDate(orderData.createdAt)}
        </p>
        <p className={`${styles.finalPrice} text text_type_digits-default`}>
          <span className="mr-2">{totalCost}</span>
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </div>
  );
};
