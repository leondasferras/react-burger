import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IngredientsContext, orderDetailsContext } from "../../services/context";
import { order } from '../../services/actions/order';
import { useDrop } from "react-dnd";

import { addIngredient } from "../../services/actions/constructor";

export const BurgerConstructor = (props) => {

  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.constructors.ingredients);

  const handleDropIngredient = (ingredientData) => {
    dispatch(addIngredient(ingredientData))
  }


  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      handleDropIngredient(item)
      console.log(item)
    }
  })

 
  const ingredientsToRender = ingredients.filter((item) => item.type !== "bun"); // Фильтруем массив от булок
  const bun = ingredients.find((item) => item.type == "bun"); // Получаем одну булку


  // Создаем объект с массивом из id иннгредиентов
  let idArray;
  const getIngredientsToCheckout = () => {
    if (ingredientsToRender) {
      idArray = ingredientsToRender.map((item) => {
        return item._id;
      });
    }

    if (bun) {
      idArray.push(bun._id);
    }

    return {
      ingredients: idArray,
    };
  };


  //Считаем конечную стоимость
  const getTotalPrice = () => {
    let totalPrice = 0;
    ingredientsToRender.forEach((element) => {
      totalPrice += element.price;
    });
    if (bun) totalPrice += bun.price * 2;
    return totalPrice;
  };


  // Отправляем на свервер массив с ингредиентами и записывеам ответ в контекст
  const checkOut = (ingredients) => {
    dispatch(order(getIngredientsToCheckout()))
  };

  return (
    <section ref = {dropTarget} className={`${styles.constructor} mt-15 ml-10`}>
      {bun && (
        <div className={`${styles.item} ml-8`}>
          <ConstructorElement
            type="top"
            isLocked="true"
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
      <ul 
      
      className={`${styles.itemsWrapper} pl-2 pr-2`}>
        {ingredientsToRender.map((item) => {
          return (
            <li className={styles.item} key={item._id}>
              <div className="mr-1">
                <DragIcon type="pimary" />
              </div>
              <ConstructorElement
                type="null"
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          );
        })}
      </ul>
      {bun && (
        <div className={`${styles.item} ml-8`}>
          <ConstructorElement
            type="bottom"
            isLocked="true"
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
      <div className={`${styles.totalAndButton} mt-10`}>
        <div className={`${styles.total} mr-10`}>
          <span className={`${styles.total}text text_type_digits-medium mr-2`}>
            {getTotalPrice()}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={() => {
            props.buttonHandler();
            checkOut(getIngredientsToCheckout());
          }}
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  buttonHandler: PropTypes.func,
  setOrderDetails: PropTypes.func
};
