import React from 'react';
import styles from './App.module.css'
import {data} from "./utils/data";
import {AppHeader} from './components/AppHeader/AppHeader.jsx'
import { BurgerIngredients } from './components/BurgerIngredients/BurgerIngredients.jsx';
import { BurgerConstructor} from './components/BurgerConstructor/BurgerConstructor.jsx'



function App() {

    let activeIngredientsArray = [];



  return (
    <div className="App">
<AppHeader/>
<main className={styles.main}>
  <BurgerIngredients data={data}/>
  <BurgerConstructor />
</main>
    </div>
  );

}

export default App;
