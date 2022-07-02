import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader.jsx";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients.jsx";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { OrderDetails } from "../OrderDetails/OrderDetails.jsx";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails.jsx";
import { getIngredients } from "../../services/actions/Ingredients";
import {
  INGREDIENT_MODAL_SET,
  INGREDIENT_MODAL_DELETE,
} from "../../services/types";
import {LoginPage} from "../../pages/LoginPage/LoginPage.jsx"
import {RegisterPage} from "../../pages/RegisterPage/RegisterPage"
import {ForgotPasswordPage} from "../../pages/ForgotPasswordPage/ForgotPasswordPage"
import {ResetPasswordPage} from "../../pages/ResetPasswordPage/ResetPasswordPage"
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage"
import {ProtectedRoute} from '../ProtectedRoute/ProtectedRoute'




function App() {
  const dispatch = useDispatch();

  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  //Клик по кнопке "Оформить заказ"
  const buttonHandler = () => {
    setIsOrderDetailsOpened(true);
  };

  //Клик по ингредиенту
  const ingredientClickHandler = (data) => {
    dispatch({ type: INGREDIENT_MODAL_SET, payload: data });
  };

  // Закрытие всех модалок
  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);

    dispatch({ type: INGREDIENT_MODAL_DELETE });
  };

  const ingredientData = useSelector(
    (store) => store.ingredientInModal.ingredient
  );
  return (
    <Router>
    <div className={styles.App}>
      <AppHeader />

      <main className={styles.main}>
        <Switch>
          <Route path ="/" exact ={true}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients ingredientClickHandler={ingredientClickHandler} />
              <BurgerConstructor buttonHandler={buttonHandler} />
            </DndProvider>
          </Route>
          <Route path = "/login" exact ={true}>
              <LoginPage/>
          </Route>
          <Route path = "/register" exact ={true}>
              <RegisterPage/>
          </Route>
          <Route path = "/forgot-password" exact ={true}>
              <ForgotPasswordPage/>
          </Route>
          <Route path = "/reset-password" exact ={true}>
              <ResetPasswordPage/>
          </Route>
          
          <ProtectedRoute path={"/profile"}>
                  <ProfilePage/>
          </ProtectedRoute>

          <Route path ="/ingredients/:id">

          </Route>



        </Switch>
      </main>
      {isOrderDetailsOpened && (
        <Modal
          title=" "
          onClose={closeAllModals}

        >
          <OrderDetails />
        </Modal>
      )}

      {ingredientData && (
        <Modal
          title="Детали ингредиента"
          onClose={closeAllModals}

        >
          <IngredientDetails />
        </Modal>
      )}
    </div>
    </Router>
  );
}

export default App;
