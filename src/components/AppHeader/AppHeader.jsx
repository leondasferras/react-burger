import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import { NavLink, Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <header className={`${styles.AppHeader} p-4 m-10`}>
      <NavLink
        className="text text_type_main-small text_color_inactive ml-2 pr-5"
        to="/"
        activeClassName={styles.link_active}
        exact={true}
      >
        <section className={`${styles.menuButton} p-5 mr-2`}>
          <BurgerIcon type="primary" />
          Конструктор
        </section>
      </NavLink>

      <NavLink
        to="/orderlist"
        activeClassName={styles.link_active}
        exact={true}
        className="text text_type_main-small text_color_inactive ml-2 pr-5"
      >
        <section className={`${styles.menuButton} p-5`}>
          <ListIcon type="primary" />
          Лента заказов
        </section>
      </NavLink>

      <div className={styles.logoWrapper}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <NavLink
        to="/profile"
        className="text text_type_main-small text_color_inactive ml-2 pr-5"
        activeClassName={styles.link_active}
        exact={true}
      >
        <section className={`${styles.menuButton} p-5`}>
          <ProfileIcon type="primary" />
          Личный кабинет
        </section>
      </NavLink>
    </header>
  );
};
