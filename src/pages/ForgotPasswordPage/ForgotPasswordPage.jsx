import React from "react";
import { Form } from "../../components/Form/Form";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './ForgotPasswordPage.module.css'


export const ForgotPasswordPage = () => {
  return (
    <div className={styles.forgotPasswordPage}> 
      <Form title = "Восстановление пароля" buttonTitle = "Восстановить">
          <Input placeholder="Укажите e-mail"
          />
      </Form>
      <p className="text text_type_main-small text_color_inactive">Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link></p>
    </div>
  )
}