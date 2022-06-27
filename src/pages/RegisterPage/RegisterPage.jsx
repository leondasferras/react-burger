import React from "react";
import { Form } from "../../components/Form/Form";
import {Input, EmailInput, PasswordInput  } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './RegisterPage.module.css'


export const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <Form title = "Регистрация" buttonTitle = "Зарегистрироваться">
          <Input placeholder="Имя"/>
          <EmailInput className ="mb-50" size="default"  name={'email'}/>
          <PasswordInput className = "pt-30"/>
      </Form>
      <p className="text text_type_main-small text_color_inactive">Уже зарегистрированы? <Link to='/login' className={styles.link}>Войти</Link></p>
    </div>
  )
}