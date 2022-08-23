import React, { useEffect, useState } from "react";
import { useDispatch } from "../../services/hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useLocation, Route, Switch, useHistory } from "react-router-dom";
import { Location } from "history";

import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { getIngredients } from "../../services/actions/Ingredients";
import { OrderInfo } from "../OrderInfo/OrderInfo";

import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ForgotPasswordPage } from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import { ResetPasswordPage } from "../../pages/ResetPasswordPage/ResetPasswordPage";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { FeedPage } from "../../pages/FeedPage/FeedPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { AppDispatch } from '../../utils/types'


interface ILocation {
  from: Location 
  background?:Location;
  pathName: string;
}


function App() {
  const dispatch = useDispatch();
  const location = useLocation<ILocation>();
  const history = useHistory();


  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  const background = location.state?.background;

  //Клик по кнопке "Оформить заказ"
  const buttonHandler = () => {
    setIsOrderDetailsOpened(true);
  };

  const closeOrderModal = () => {
    setIsOrderDetailsOpened(false);
  };

  const closeIngredientModal = () => {
    history.goBack();
  };

  return (
    <div className={styles.App}>
      <AppHeader />

      <main className={styles.main}>
        <Switch location={background || location}>
          <Route path="/" exact={true}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor buttonHandler={buttonHandler} />
            </DndProvider>
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </Route>

          <ProtectedRoute path="/profile/orders/:id" exact={true}>
            <OrderInfo />
          </ProtectedRoute>

          <ProtectedRoute path={"/profile"} exact={false}>
            <ProfilePage />
          </ProtectedRoute>

          <Route path="/ingredients/:id">
            <IngredientDetails />
          </Route>

          <Route path={"/feed"} exact={true}>
            <FeedPage />
          </Route>
          <Route path="/feed/:id" exact={true}>
            <OrderInfo />
          </Route>
        </Switch>

        {background && (
          <Route path="/ingredients/:id">
            <Modal title="Детали ингредиента" onClose={closeIngredientModal}>
              <IngredientDetails />
            </Modal>
          </Route>
        )}

        {background && (
          <Route path={"/feed/:id"}>
            <Modal onClose={closeIngredientModal}>
              <OrderInfo />
            </Modal>
          </Route>
        )}

        {background && (
          <Route path={"/profile/orders/:id"}>
            <Modal onClose={closeIngredientModal}>
              <OrderInfo />
            </Modal>
          </Route>
        )}
      </main>
      {isOrderDetailsOpened && (
        <Modal title=" " onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
