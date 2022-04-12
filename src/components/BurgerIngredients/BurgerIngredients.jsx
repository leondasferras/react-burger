import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import styles from './BurgerIngredients.module.css'

const TabMenu = 
  () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          One
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Two
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Three
        </Tab>
      </div>
    )
  }

  export const BurgerIngredients = () => {
    return (
      <section className = {styles.ingredients} >
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <TabMenu/>
      </section>
    )
  }