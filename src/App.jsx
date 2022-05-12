import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "./components/AppHeader/AppHeader.jsx";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients.jsx";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { OrderDetails } from "./components/OrderDetails/OrderDetails.jsx";
import {IngredientDetails} from "./components/IngredientDetails/IngredientDetails.jsx"

function App() {
  const [state, setState] = useState({ data: [] });
  useEffect(() => {
    const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
    const getIngredientsData = () => {
      fetch(apiUrl)
        .then((res) => {
          return res.json();
        })
        .then((res) => setState({ ...state, data: res.data }));
    };
    getIngredientsData();
  }, []);

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] =
    React.useState(false);
   
  //Клик по кнопке "Оформить заказ"
  const buttonHandler = () => setIsOrderDetailsOpened(true)

  //Клик по ингредиенту
  const ingredientClickHandler = () => setIsIngredientDetailsOpened(true);

  // Закрытие всех модалок
  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
    setIsIngredientDetailsOpened(false);
  };

  // Обработка нажатия Esc
  const handleEscKeydown = (e) => {
    e.key === "Escape" && closeAllModals();
  };

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={state.data} ingredientClickHandler ={ingredientClickHandler} />
        <BurgerConstructor data={state.data} buttonHandler={buttonHandler} />
      </main>
      {isOrderDetailsOpened && (
        <Modal
          title=" "
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <OrderDetails />
        </Modal>
      )}
            {isIngredientDetailsOpened && (
        <Modal
          title="Детали ингредиента"
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
