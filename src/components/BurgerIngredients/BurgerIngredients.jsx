import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css';
import {IngredientsList} from './IngredientsList/IngredientsList.jsx'



const TabMenu = 
  () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <section style={{ display: 'flex' }}>
        <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauses" active={current === 'sauses'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </section>
    )
  }


  export const BurgerIngredients = (props) => {
    return (
      <section className = {`${styles.ingredients} `} >
        <h2 className={`${styles.sectionHeader} text text_type_main-large mb-5`}>Соберите бургер</h2>
        <TabMenu/>
        <div className={styles.ingredientsWrapper}>
          <section className='ingredientSection buns'>
            <h3 className={`${styles.ingredientheader} mb-6 mt-10 text text_type_main-medium`}>Булки</h3>
            <ul className='ingredientList pl-4 pr-4'>
              <IngredientsList data={props.data} type="bun" ingredientClickHandler = {props.ingredientClickHandler} setIngredientInModal={props.setIngredientInModal}/>
            </ul>
          </section>
          <section className='ingredientSection sauces'>
            <h3 className={`${styles.ingredientheader} mb-6 mt-10 text text_type_main-medium`}>Соусы</h3>
            <ul className='ingredientList pl-4 pr-4'>
              <IngredientsList data={props.data} type='sauce' ingredientClickHandler = {props.ingredientClickHandler}/>
            </ul>
          </section>
          <section className='ingredientSection main'>
           <h3 className={`${styles.ingredientheader} mb-6 mt-10 text text_type_main-medium`}>Начинки</h3>
           <ul className='ingredientList pl-4 pr-4'>
              <IngredientsList data={props.data} type='main' ingredientClickHandler = {props.ingredientClickHandler}/>
            </ul>
          </section>
        </div>
      </section>
    )


  }
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};