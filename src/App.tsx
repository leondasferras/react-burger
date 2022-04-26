import React from 'react';
import styles from './App.module.css'
import {data} from "./utils/data.js";
import {AppHeader} from './components/AppHeader/AppHeader.jsx'
import { BurgerIngredients } from './components/BurgerIngredients/BurgerIngredients.jsx';
import { BurgerConstructor} from './components/BurgerConstructor/BurgerConstructor.jsx'



function App() {

  return (
    <div className={styles.App}>
<AppHeader/>
<main className={styles.main}>
  <BurgerIngredients data={data}/>
  <BurgerConstructor data={data}/>
</main>
    </div>
  );

}

export default App;
