import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader.jsx";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients.jsx";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { OrderDetails } from "../OrderDetails/OrderDetails.jsx";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails.jsx";


function App() {
  const [state, setState] = useState({ data: [] });
  useEffect(() => {
    const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
    const getIngredientsData = () => {
      fetch(apiUrl)
        .then((res) => {
          return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => setState({ ...state, data: res.data }))
        .catch(() => console.log("Ошибка при запросе с сервера!"))
    };
    getIngredientsData();
  }, []);

  const [ingredientInModal, setIngredientInModal] = React.useState(null);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  //Клик по кнопке "Оформить заказ"
  const buttonHandler = () => setIsOrderDetailsOpened(true);

  //Клик по ингредиенту
  const ingredientClickHandler = (data) => {
    setIngredientInModal(data);
  };

  // Закрытие всех модалок
  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
    setIngredientInModal(null);
  };

  // Обработка нажатия Esc
  const handleEscKeydown = (e) => {
    e.key === "Escape" && closeAllModals();
  };

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients
          data={state.data}
          ingredientClickHandler={ingredientClickHandler}
          setIngredientInModal={setIngredientInModal}
        />
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
      {ingredientInModal && (
        <Modal
          title="Детали ингредиента"
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <IngredientDetails ingredientData={ingredientInModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
