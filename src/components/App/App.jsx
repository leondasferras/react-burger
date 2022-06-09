import React, { useEffect, useState } from "react";
import {createStore, applyMiddleware, compose}  from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import thunk from "redux-thunk";

import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader.jsx";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients.jsx";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { OrderDetails } from "../OrderDetails/OrderDetails.jsx";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails.jsx";
import { IngredientsContext } from '../../services/context.js'
import { orderDetailsContext } from '../../services/context.js'
import {getIngredients} from '../../services/actions/Ingredients'
import {INGREDIENT_MODAL_SET, INGREDIENT_MODAL_DELETE} from '../../services/types'



function App() {

  const dispatch = useDispatch();


  const [state, setState] = useState({ data: [] });
   const [orderDetails, setOrderDetails] = useState()

  useEffect(() => {
    dispatch(getIngredients())
    const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
    const getIngredientsData = () => {
      fetch(apiUrl)
        .then((res) => {
          return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => setState({data: res.data })) 
        .catch(() => console.log("Ошибка при запросе с сервера!"))
    };
    getIngredientsData();
  }, []);


 

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  //Клик по кнопке "Оформить заказ"
  const buttonHandler = () => {
    setIsOrderDetailsOpened(true);}

  //Клик по ингредиенту
  const ingredientClickHandler = (data) => {
    dispatch({type:INGREDIENT_MODAL_SET, payload: data})
  };

  // Закрытие всех модалок
  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
   
    dispatch({type:INGREDIENT_MODAL_DELETE})
  };

  // Обработка нажатия Esc
  const handleEscKeydown = (e) => {
    e.key === "Escape" && closeAllModals();
  };


  const ingredientData = useSelector(store => store.ingredientInModal.ingredient)
  return (

        <div className={styles.App}>
          <AppHeader/>
          <orderDetailsContext.Provider value={orderDetails}>
            <main className={styles.main}>


              <IngredientsContext.Provider value={state.data}>
                <BurgerIngredients

                    ingredientClickHandler={ingredientClickHandler}

                />
                <BurgerConstructor buttonHandler={buttonHandler} setOrderDetails={setOrderDetails}/>
              </IngredientsContext.Provider>


            </main>
            {isOrderDetailsOpened && (
                <Modal
                    title=" "
                    onOverlayClick={closeAllModals}
                    onEscKeydown={handleEscKeydown}
                >
                  <OrderDetails/>
                </Modal>

            )}
          </orderDetailsContext.Provider>
          {ingredientData && (
              <Modal
                  title="Детали ингредиента"
                  onOverlayClick={closeAllModals}
                  onEscKeydown={handleEscKeydown}
              >
                <IngredientDetails/>
              </Modal>
          )}

        </div>

    
  );
}

export default App;
