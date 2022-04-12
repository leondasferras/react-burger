import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import styles from './BurgerIngredients.module.css'
import {data} from '../../utils/data.js'

const TabMenu = 
  () => {
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
      <section className = {styles.ingredients} >
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        <TabMenu/>
        <div clasName='ingredientSection buns'>
          <h3>Булки</h3>
          <ul className='ingredientList'>
            <li className='item'></li>
          </ul>
        </div>
        <div clasName='ingredientSection sauces'>
          <h3>Соусы</h3>
        </div>
        <div clasName='ingredientSection main'>
         <h3>Начинки</h3>
        </div>

      </section>
    )
  }