import React, {ChangeEvent, FormEventHandler, SyntheticEvent, useState} from "react";
import { Form } from "../../components/Form/Form";
import { EmailInput, PasswordInput  } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import styles from './LoginPage.module.css'
import { useDispatch, useSelector } from "../../services/hooks";
import { login } from "../../services/actions/login";
import {AppDispatch} from '../../utils/types'

interface LocationState {
  from: {
    pathname: string;
  };
}


export const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation<LocationState>();
  const [formData, setFormData] = useState( {
    email:'',
    password: ''
  })
  const isAuthorized = useSelector(store => store.auth.isAutorized)


  
  
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
    dispatch(login(formData))
  }

  if (isAuthorized) {
    return (
      <Redirect
        to={location.state?.from || '/'}
      />
    );
  }
  
  return (
    <div className={styles.loginPage}>
    <Form title = "Вход" buttonTitle = "Войти" onSubmit={handleFormSubmit}>
      <EmailInput size="default"  name="email" onChange={handleInputData} value={formData.email}/>
      <PasswordInput  onChange={handleInputData} name ="password" value={formData.password}/>
    </Form>
    <p className="text text_type_main-small text_color_inactive">Вы — новый пользователь? <Link to='/register' className={styles.link}>Зарегистрироваться</Link></p>
    <p className="text text_type_main-small text_color_inactive">Забыли пароль?<Link to ='/forgot-password' className ={styles.link}> Восстановить пароль</Link></p>
    </div>
  )
}