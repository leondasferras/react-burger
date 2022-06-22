import React from "react";
import { Form } from "../components/Form/Form";
import { EmailInput, PasswordInput  } from "@ya.praktikum/react-developer-burger-ui-components";

export const LoginPage = () => {


  return (
    <div>
    <Form title = "Вход" buttonTitle = "Войти">
      <EmailInput className ="mb-50" size="default"  name={'email'}/>
      <PasswordInput className = "pt-30"/>
    </Form>
    <p>Вы — новый пользователь? Зарегистрироваться</p>
    <p>Забыли пароль? Восстановить пароль</p>
    </div>
  )
}