import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useLocation, Route, Switch, useHistory} from 'react-router-dom';

import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader.jsx";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients.jsx";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { OrderDetails } from "../OrderDetails/OrderDetails.jsx";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails.jsx";
import { getIngredients } from "../../services/actions/Ingredients";

import {LoginPage} from "../../pages/LoginPage/LoginPage.jsx"
import {RegisterPage} from "../../pages/RegisterPage/RegisterPage"
import {ForgotPasswordPage} from "../../pages/ForgotPasswordPage/ForgotPasswordPage"
import {ResetPasswordPage} from "../../pages/ResetPasswordPage/ResetPasswordPage"
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage"
import {ProtectedRoute} from '../ProtectedRoute/ProtectedRoute'




function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);


  const background = location.state?.background

  //Клик по кнопке "Оформить заказ"
  const buttonHandler = () => {
    setIsOrderDetailsOpened(true);
  };



  // Закрытие всех модалок
  const closeOrderModal = () => {
    setIsOrderDetailsOpened(false);
  };

  const ingredientData = useSelector(
    (store) => store.ingredientInModal.ingredient
  );
  return (

    <div className={styles.App}>
      <AppHeader />

      <main className={styles.main}>
        <Switch location={background || location} >
          <Route path ="/" exact ={true}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
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
          <IngredientDetails />
          </Route>

        </Switch>

        { background && <Route path ="/ingredients/:id">
          <Modal
          title="Детали ингредиента"
          onClose={closeOrderModal}
      >
        <IngredientDetails />
      </Modal>
        </Route>}

      </main>
      {isOrderDetailsOpened && (
        <Modal
          title=" "
          onClose={closeOrderModal}

        >
          <OrderDetails />
        </Modal>
      )}


    </div>

  );
}

export default App;
