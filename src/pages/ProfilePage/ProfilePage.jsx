import { useState, useEffect } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import { Input, button, Button  } from "@ya.praktikum/react-developer-burger-ui-components";
import { logout } from "../../services/actions/logout";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProfilePage.module.css";

import { getUserData } from "../../services/actions/getUserData";
import { setUserData } from "../../services/actions/setUserdata";


export const ProfilePage = () => {
const dispatch = useDispatch();
const {name, email} = useSelector((store) => ({
  name: store.auth.name,
  email: store.auth.email
}))

const [currentFormData, setFormData] = useState({
  name:"",
  email:"",
  password:""
})

const handleInputData = (e) => {
  const input = e.target;
  const value = input.value;
  const name = input.name;
  setFormData({
    ...currentFormData,
    [name]:value
  })
}

useEffect(()=> {
  dispatch(getUserData())
  setFormData({
    name: name,
    email: email,
    password:""
  })
},[name,email])

const handleFormSubmit = (e) => {
  e.preventDefault();
  dispatch(setUserData(currentFormData))
}




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
        <Link className={`${styles.link} text text_type_main-medium text_color_inactive`} onClick = {() => dispatch(logout())} to="/login">
          Выход
        </Link>
        <p
          className={`${styles.sectionDescription} text text_type_main-default text_color_inactive mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>

      <Route path='/profile' exact={true}>
        <form className={styles.form} onSubmit= {handleFormSubmit} >
            <Input size = {"default"} placeholder="Имя" icon="EditIcon" value={currentFormData.name} onChange={handleInputData} name="name"/>
            <Input placeholder="Логин" icon="EditIcon" value={currentFormData.email} onChange={handleInputData} name="email"/>
            <Input placeholder="Пароль" icon="EditIcon" value={currentFormData.password} onChange={handleInputData} name="password"/>

           
{ currentFormData.name !== name || currentFormData.email !== email || currentFormData.password.length>0 ?  (  <div className={`${styles.buttons} mt-4 `}>
              <Button type="secondary" size="small" >Отменить </Button>
              <Button type="primary" size="small">Сохранить</Button>
            </div>) : null}
        </form>
      </Route>


    </div>
  );
};
