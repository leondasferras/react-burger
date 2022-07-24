import styles from "./Order.module.css";
import { useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { order } from "../../../services/reducers/order";
import { formattedDate } from "../../../utils/functions";

export const Order = ({ orderInfo, isStatusShown }) => {
  const location = useLocation();

  const ingredients = useSelector(
    (store) => store.ingredientsReducer.ingredients
  );

  const orderStatus = () => {
    if (orderInfo.status === "done") return "Выполнен";
    if (orderInfo.status === "created") return "Создан";
    if (orderInfo.status === "pending") return "Готовится";
  };

  const statusColor = orderStatus() === "Выполнен" ? "#00CCCC" : "inherit";
  let z = 10;
  const ingreientsToShow = orderInfo.ingredients.slice(0);
  const totalPrice = () => {
    let totPrice = 0;
    orderInfo.ingredients.forEach((orderIngredient) => {
      ingredients.forEach((ingredient) => {
        if (orderIngredient === ingredient._id && ingredient.type === "bun")
          totPrice += ingredient.price * 2;
        if (orderIngredient === ingredient._id && ingredient.type !== "bun")
          totPrice += ingredient.price;
      });
    });
    return totPrice;
  };

  if (!orderInfo || !ingredients) return null

  return (
    <Link
      style={{ color: "white", textDecoration: 'none'}}
      to={{
        pathname: `${location.pathname}/${orderInfo._id}`,
        state: { background: location },
      }}
    >
      <li className={`${styles.order} mb-4`}>
        <div className={`${styles.numberAndTimeWrapper} mb-6`}>
          <p className="text text_type_digits-default">{`0${orderInfo.number}`}</p>
          <p className="text text_type_main-default text_color_inactive">
            {formattedDate(orderInfo.createdAt)}
          </p>
        </div>
        <h2 className="text text_type_main-large mb-6">{orderInfo.name}</h2>
        {isStatusShown && (
          <p
            style={{ color: statusColor }}
            className="text text_type_main-default mb-6"
          >
            {orderStatus()}
          </p>
        )}
        <div className={`${styles.ingredientsAndPriceWrapper}`}>
          <div className={`${styles.ingredients}`}>
            {ingreientsToShow.slice(0, 5).map((itema) => {
              z--;
              return (
                <div
                  style={{ zIndex: z }}
                  className={`${styles.ingredientImage}`}
                  key={Math.random().toString(36).slice(2)}
                >
                  <img
                    className={`${styles.image}`}
                    src={
                      ingredients.filter((item) => item._id === itema)[0].image
                    }
                  ></img>
                </div>
              );
            })}
            {orderInfo.ingredients.length > 5 ? (
              <div
                style={{ zIndex: 0 }}
                className={`${styles.ingredientImage} `}
              >
                <span
                  className={`${styles.hiddenIngredientsCounter} text text_type_main-default`}
                >
                  {`+${orderInfo.ingredients.length - 5} `}
                </span>
                <img
                  className={`${styles.image} ${styles.hiddenIngredientsImage}`}
                  src={
                    ingredients.filter(
                      (item) => item._id === orderInfo.ingredients[5]
                    )[0].image
                  }
                ></img>
              </div>
            ) : null}
          </div>
          <div className={`${styles.price}text text_type_digits-default mr-2`}>
            <span>{totalPrice()}</span> <CurrencyIcon type="primary" />{" "}
          </div>
        </div>
      </li>
    </Link>
  );
};
