import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "./components/AppHeader/AppHeader.jsx";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients.jsx";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor.jsx";





function App() {
  const [state, setState] = useState({data:[]});
  useEffect(() => {
    const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
    const getIngredientsData = () => {
      fetch(apiUrl)
      .then((res) => {return res.json();
      } )
      .then ((res) => setState({...state, data: res.data}))
         
    }
    getIngredientsData()
  }, []);

  const ingredients = state.data;
  console.log(ingredients);

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} />
      </main>
    </div>
  );
}

export default App;
