import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import styles from './BurgerIngredients.module.css'


import {IngredientsList} from './IngredientsList/IngredientsList.jsx'

const TabMenu = 
  (data) => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }


  export const BurgerIngredients = () => {
    return (
      <section className = {`${styles.ingredients} `} >
        <h2 className={`${styles.sectionHeader} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
        <TabMenu/>
        <div className='ingredientSection buns'>
          <h3 className={`${styles.ingredientheader} mb-6 mt-10`}>Булки</h3>
          <ul className='ingredientList pl-4 pr-4'>
            <IngredientsList type="bun"/>
          </ul>
        </div>
        <div className='ingredientSection sauces'>
          <h3 className={`${styles.ingredientheader} mb-6 mt-10`}>Соусы</h3>
          <ul className='ingredientList pl-4 pr-4'>
            <IngredientsList type='sauce'/>
          </ul>
        </div>
        <div className='ingredientSection main'>
         <h3 className={`${styles.ingredientheader} mb-6 mt-10`}>Начинки</h3>
         <ul className='ingredientList pl-4 pr-4'>
            <IngredientsList type='main'/>
          </ul>
        </div>

      </section>
    )
  }