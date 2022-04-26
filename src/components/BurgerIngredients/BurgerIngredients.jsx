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
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </section>
    )
  }


  export const BurgerIngredients = (props) => {
    return (
      <section className = {`${styles.ingredients} `} >
        <h2 className={`${styles.sectionHeader} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
        <TabMenu/>
        <section className='ingredientSection buns'>
          <h3 className={`${styles.ingredientheader} mb-6 mt-10`}>Булки</h3>
          <ul className='ingredientList pl-4 pr-4'>
            <IngredientsList data={props.data} type="bun"/>
          </ul>
        </section>
        <section className='ingredientSection sauces'>
          <h3 className={`${styles.ingredientheader} mb-6 mt-10`}>Соусы</h3>
          <ul className='ingredientList pl-4 pr-4'>
            <IngredientsList data={props.data} type='sauce'/>
          </ul>
        </section>
        <section className='ingredientSection main'>
         <h3 className={`${styles.ingredientheader} mb-6 mt-10`}>Начинки</h3>
         <ul className='ingredientList pl-4 pr-4'>
            <IngredientsList data={props.data} type='main'/>
          </ul>
        </section>
      </section>
    )


  }
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};