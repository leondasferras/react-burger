import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "./components/AppHeader/AppHeader.jsx";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients.jsx";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor.jsx";
import { Modal } from './components/Modal/Modal.jsx';
import { OrderDetails } from './components/OrderDetails/OrderDetails.jsx'


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

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(true);
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false); 

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
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} />
      </main>
      {isOrderDetailsOpened &&
     <Modal
       title=" "
       onOverlayClick={closeAllModals}
       onEscKeydown={handleEscKeydown}
     >
       <OrderDetails/> 
     </Modal>}
    </div>
  );
}

export default App;
