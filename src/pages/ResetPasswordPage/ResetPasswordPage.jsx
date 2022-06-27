import React from "react";
import { Form } from "../../components/Form/Form";
import {Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './ResetPasswordPage.module.css'

export const ResetPasswordPage = () => {
return (
  <div className={styles.resetPasswordPage}>
    <Form title = "Восстановление пароля" buttonTitle = "Сохранить">
        <Input placeholder ="Введите новый пароль" icon ="ShowIcon"/>
        <Input placeholder="Введите код из письма"/>
    </Form>
    <p className="text text_type_main-small text_color_inactive">Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link></p>
  </div>
)
}