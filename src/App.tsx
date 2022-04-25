import React from 'react';
import {AppHeader} from './components/AppHeader/AppHeader.jsx'
import styles from './App.module.css'
import { BurgerIngredients } from './components/BurgerIngredients/BurgerIngredients.jsx';
import { BurgerConstructor} from './components/BurgerConstructor/BurgerConstructor.jsx'

function App() {
  return (
    <div className="App">
<AppHeader/>
<main className={styles.main}>
  <BurgerIngredients/>
  <BurgerConstructor/>
</main>
    </div>
  );

}

export default App;
