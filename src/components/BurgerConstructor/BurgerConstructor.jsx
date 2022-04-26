import {ConstructorElement, CurrencyIcon, Button  } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import styles from './BurgerConstructor.module.css'



export const BurgerConstructor = () => {
  return (
  <section className={`${styles.constructor} mt-25 ml-10`}>
    <ul className={styles.itemsWrapper} >
            <li><ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      /></li>
      <li><ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      /></li>
      <li><ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      /></li>
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
  
