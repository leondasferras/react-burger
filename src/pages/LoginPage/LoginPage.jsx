import React from "react";
import { Form } from "../../components/Form/Form";
import { EmailInput, PasswordInput  } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './LoginPage.module.css'

export const LoginPage = () => {


  return (
    <div className={styles.loginPage}>
    <Form title = "Вход" buttonTitle = "Войти">
      <EmailInput className ="mb-50" size="default"  name={'email'}/>
      <PasswordInput className = "pt-30"/>
    </Form>
    <p className="text text_type_main-small text_color_inactive">Вы — новый пользователь? <Link to='/register' className={styles.link}>Зарегистрироваться</Link></p>
    <p className="text text_type_main-small text_color_inactive">Забыли пароль?<Link to ='/forgot-password' className ={styles.link}> Восстановить пароль</Link></p>
    </div>
  )
}