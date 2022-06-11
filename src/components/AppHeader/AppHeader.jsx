import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
  return (
    <header className={`${styles.AppHeader} p-4 m-10`}>
      <section className={`${styles.menuButton} p-5 mr-2`}>
        <BurgerIcon type="primary" />
        <span className="text text_type_main-small ml-2 pr-5">Конструктор</span>
      </section>

      <section className={`${styles.menuButton} p-5`}>
        <ListIcon type="primary" />
        <span className="text text_type_main-small ml-2 pr-5">
          Лента заказов
        </span>
      </section>

      <div className={styles.logoWrapper}>
        {" "}
        <Logo />{" "}
      </div>

      <section className={`${styles.menuButton} p-5`}>
        <ProfileIcon type="primary" />
        <span className="text text_type_main-small ml-2 pr-5">
          Личный кабинет
        </span>
      </section>
    </header>
  );
};
