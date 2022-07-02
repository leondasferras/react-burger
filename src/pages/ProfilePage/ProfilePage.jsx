import { NavLink, Link } from "react-router-dom";
import { Input  } from "@ya.praktikum/react-developer-burger-ui-components";
import { logout } from "../../services/actions/logout";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProfilePage.module.css";


export const ProfilePage = () => {
const dispatch = useDispatch();
const {name, email} = useSelector((store) => ({
  name: store.auth.name,
  email: store.auth.email
}))


  return (
    <div className={styles.profilePage}>
      <nav className={`${styles.navigation} mr-15`}>
        <NavLink
          className={`${styles.link} text text_type_main-medium`}
          to="/profile"
          activeClassName=""
        >
          Профиль
        </NavLink>
        <NavLink
          className={`${styles.link} text text_type_main-medium`}
          to="/profile/orders"
        >
          История заказов
        </NavLink>
        <Link className={`${styles.link} text text_type_main-medium`} onClick = {() => dispatch(logout())} to="/">
          Выход
        </Link>
        <p
          className={`${styles.sectionDescription} text text_type_main-default text_color_inactive mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styles.form} >
          <Input size = {"default"} placeholder="Имя" icon="EditIcon" value={name}/>
          <Input placeholder="Логин" icon="EditIcon" value={email}/>
          <Input placeholder="Пароль" icon="EditIcon"/>
      </form>


    </div>
  );
};
