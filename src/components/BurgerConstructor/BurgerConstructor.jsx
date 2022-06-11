import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BurgerConstructor.module.css";
import { order } from "../../services/actions/order";
import { useDrop, useDrag } from "react-dnd";
import { CONSTRUCTOR_DELETE, CONSTRUCTOR_RESET } from "../../services/types";
import { addIngredient } from "../../services/actions/constructor";
import { ConstructorItem } from "./ConstructorItem/ConstructorItem";
import { updateConstructor } from "../../services/actions/constructor";


export const BurgerConstructor = (props) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((store) => store.constructors.ingredients);
  const bun = useSelector((store) => store.constructors.bun);

  const handleDropIngredient = (ingredientData) => {
    dispatch(
      addIngredient({
        ...ingredientData,
        uid: Math.random().toString(36).slice(2),
      })
    );
  };

  const handleDeleteItem = (id) => {
    dispatch({ type: CONSTRUCTOR_DELETE, payload: id });
  };

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      handleDropIngredient(item);
    },
  });

  // Создаем объект с массивом из id иннгредиентов
  let idArray;
  const getIngredientsToCheckout = () => {
    if (ingredients) {
      idArray = ingredients.map((item) => {
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
    ingredients.forEach((element) => {
      totalPrice += element.price;
    });
    if (bun) totalPrice += bun.price * 2;
    return totalPrice;
  };

  // Отправляем на свервер массив с ингредиентами и записывеам ответ в контекст
  const checkOut = () => {
    dispatch(order(getIngredientsToCheckout()));
    dispatch({ type: CONSTRUCTOR_RESET });
  };

  //Функционал перетаскивания ингредиентов внутри конструктора

  const moveCard = (dragIndex, hoverIndex) => {
    dispatch(updateConstructor(dragIndex, hoverIndex));
  };

  return ( 
    <section ref={dropTarget} className={`${styles.constructor} mt-15 ml-10`}>

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
     <ul className={`${styles.itemsWrapper} pl-2 pr-2`}>
      {ingredients.length || bun? null : <span className="text_type_main-large mt-20">Перетащите ингредиенты сюда</span>}
        {ingredients.map((item, index) => {
          return (
            <ConstructorItem
              item={item}
              handleDelete={handleDeleteItem}
              index={index}
              key={item.uid}
              id={item.uid}
              moveCard={moveCard}
            />
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
      { ingredients.length || bun ? <div className={`${styles.totalAndButton} mt-10`}>
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
      </div> : null}
    </section>
     
  );
};

BurgerConstructor.propTypes = {
  buttonHandler: PropTypes.func,
  setOrderDetails: PropTypes.func,
};
