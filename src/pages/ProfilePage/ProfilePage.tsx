import React, { useState, useEffect, ChangeEvent } from "react";
import { NavLink, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { logout } from "../../services/actions/logout";
import { useDispatch, useSelector } from "../../services/hooks";

import styles from "./ProfilePage.module.css";

import { getUserData } from "../../services/actions/getUserData";
import { setUserData } from "../../services/actions/setUserdata";
import { getCookie } from "../../utils/cookiesHandlers";

import { wsActions } from "../../services/actions/webSocket";

import { OrderList } from "../../components/OrderList/OrderList";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const isHistoryPage = useRouteMatch("/profile/orders");
  const { name, email } = useSelector((store) => ({
    name: store.auth?.name,
    email: store.auth?.email,
  }));


  const [currentFormData, setFormData] = useState<{name:string |undefined, email:string, password:string}>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputData = (e:ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    setFormData({
      ...currentFormData,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(getUserData());
    setFormData({
      name: name,
      email: email,
      password: "",
    });
  }, [name, email]);

  useEffect(() => {
    dispatch({
      type: wsActions.onStart,
      payload: `wss://norma.nomoreparties.space/orders?token=${getCookie(
        "authToken"
      )}`,
    });
    return () => {
      dispatch({ type: wsActions.onClose });
    };
  }, []);

  const handleFormSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setUserData(currentFormData));
  };

  return (
    <div className={styles.profilePage}>
      <nav className={`${styles.navigation} mr-15`}>
        <NavLink
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          to="/profile"
          activeClassName={styles.link_active}
          exact={true}
        >
          Профиль
        </NavLink>
        <NavLink
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          to="/profile/orders"
          activeClassName={styles.link_active}
          exact={true}
        >
          История заказов
        </NavLink>
        <Link
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          onClick={() => dispatch(logout())}
          to="/login"
        >
          Выход
        </Link>
        <p
          className={`${styles.sectionDescription} text text_type_main-default text_color_inactive mt-20`}
        >
          {isHistoryPage
            ? "В этом разделе вы можете просмотреть свою историю заказов"
            : "В этом разделе вы можете изменить свои персональные данные"}
        </p>
      </nav>

      <Switch>
        <Route path="/profile" exact={true}>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <Input
              size={"default"}
              placeholder="Имя"
              icon="EditIcon"
              value={currentFormData.name?currentFormData.name:"value" }
              onChange={handleInputData}
              name="name"
            />
            <Input
              placeholder="Логин"
              icon="EditIcon"
              value={currentFormData.email}
              onChange={handleInputData}
              name="email"
            />
            <Input
              placeholder="Пароль"
              icon="EditIcon"
              value={currentFormData.password}
              onChange={handleInputData}
              name="password"
            />

            {currentFormData.name !== name ||
            currentFormData.email !== email ||
            currentFormData.password.length > 0 ? (
              <div className={`${styles.buttons} mt-4 `}>
                <Button type="secondary" size="small">
                  Отменить{" "}
                </Button>
                <Button type="primary" size="small">
                  Сохранить
                </Button>
              </div>
            ) : null}
          </form>
        </Route>
        <Route path="/profile/orders" exact={true}>
          <OrderList isStatusShown={true} />
        </Route>
      </Switch>
    </div>
  );
};
