import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import { Form } from "../../components/Form/Form";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import styles from './ForgotPasswordPage.module.css'
import { useDispatch, useSelector } from "../../services/hooks";
import { forgotPassword } from "../../services/actions/forgotPassword";


export const ForgotPasswordPage = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState( {
    email:'',
  })

  const isAutorized = useSelector(state => state.auth.isAutorized)
  const isForgotPassSuccess = useSelector(state => state.auth.isForgotPassSuccess)
    
  const handleInputData = (e:ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleFormSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(forgotPassword(formData))
  }

  
if (isAutorized) {
  return (
    <Redirect to ="/"/>
  )
}

if (isForgotPassSuccess) {
  return (
    <Redirect to ="/reset-password"/>
  )
}



  return (
    <div className={styles.forgotPasswordPage}> 
      <Form title = "Восстановление пароля" buttonTitle = "Восстановить" onSubmit={handleFormSubmit}> 
          <Input placeholder="Укажите e-mail" value={formData.email} onChange={handleInputData} name={'email'}
          />
      </Form>
      <p className="text text_type_main-small text_color_inactive">Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link></p>
    </div>
  )
}