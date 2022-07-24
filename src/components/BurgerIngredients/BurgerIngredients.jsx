import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { IngredientsList } from "./IngredientsList/IngredientsList.jsx";
import { ingredientPropType } from "../../utils/prop-types.js";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";

export const BurgerIngredients = (props) => {
  const isLoading = useSelector((store) => store.ingredientsReducer.isLoading);
  const isError = useSelector((store) => store.ingredientsReducer.isError);
  const [currentTab, setCurrentTab] = React.useState("one");
  const [bunsRef, inViewBuns] = useInView({ threshold: 0.5 });
  const [sausesRef, inViewSauses] = useInView({ threshold: 0.5 });
  const [mainRef, inViewMain] = useInView({ threshold: 0.5 });

  React.useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("buns");
    } else if (inViewSauses) {
      setCurrentTab("sauce");
    } else if (inViewMain) {
      setCurrentTab("main");
    }
  }, [inViewBuns, inViewMain, inViewSauses]);

  const onTabClick = (tab) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`${styles.ingredients} `}>
      <h2 className={`${styles.sectionHeader} text text_type_main-large mb-5`}>
        Соберите бургер
      </h2>

      <section style={{ display: "flex" }}>
        <Tab value="buns" active={currentTab === "buns"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={currentTab === "sauce"} onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={currentTab === "main"} onClick={onTabClick}>
          Начинки
        </Tab>
      </section>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <span className="text text_type_main-medium ">
          Произошла ошибка, обновите страницу.
        </span>
      ) : (
        <div className={styles.ingredientsWrapper}>
          <section className="ingredientSection buns" id="buns" ref={bunsRef}>
            <h3
              className={`${styles.ingredientheader} mb-6 mt-10 text text_type_main-medium`}
            >
              Булки
            </h3>
            <ul className="ingredientList pl-4 pr-4">
              <IngredientsList
                type="bun"
                ingredientClickHandler={props.ingredientClickHandler}
                setIngredientInModal={props.setIngredientInModal}
              />
            </ul>
          </section>
          <section
            className="ingredientSection sauces"
            id="sauce"
            ref={sausesRef}
          >
            <h3
              className={`${styles.ingredientheader} mb-6 mt-10 text text_type_main-medium`}
            >
              Соусы
            </h3>
            <ul className="ingredientList pl-4 pr-4">
              <IngredientsList
                type="sauce"
                ingredientClickHandler={props.ingredientClickHandler}
              />
            </ul>
          </section>
          <section className="ingredientSection main" id="main" ref={mainRef}>
            <h3
              className={`${styles.ingredientheader} mb-6 mt-10 text text_type_main-medium`}
            >
              Начинки
            </h3>
            <ul className="ingredientList pl-4 pr-4">
              <IngredientsList
                type="main"
                ingredientClickHandler={props.ingredientClickHandler}
              />
            </ul>
          </section>
        </div>
      )}
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  ingredientClickHandler: PropTypes.func,
  setIngredientInModal: PropTypes.func,
};
