import {ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import styles from './BurgerConstructor.module.css'



export const BurgerConstructor = (props) => {
  return (
  <section className={`${styles.constructor} mt-25 ml-10`}>
    <ul className={`${styles.itemsWrapper} pl-2 pr-2`} >
         {props.data.map(item => {
           return ( <li className={styles.item}>
             <div className="mr-1">
               <DragIcon type='pimary'/>
             </div>
             <ConstructorElement
               type="null"
               isLocked={true}
               text={item.name}
               price={item.price}
               thumbnail={item.image}
           /></li>)
         })}
    </ul>
    <div className={`${styles.totalAndButton} mt-10`}>
      <div className={`${styles.total} mr-10`}>
        <span className={`${styles.total}text text_type_digits-medium mr-2`}>
          2000
        </span>
        <CurrencyIcon type ="primary"/>
      </div>
      <Button type="primary" size="large">Оформить заказ</Button>
    </div>
  </section>

      )
    }
  


