import React from 'react';
import {AppHeader} from './components/AppHeader/AppHeader.jsx'
import './App.css';
import { BurgerIngredients } from './components/BurgerIngredients/BurgerIngredients.jsx';

const  App = () => {
  return (
    <div className="App">
<AppHeader/>
<BurgerIngredients/>

    </div>
  );

}
export default App;
