import {useState} from "react";
import { Form } from "../../components/Form/Form";
import {Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import styles from './ResetPasswordPage.module.css'
import {resetPassword} from '../../services/actions/reset-password'
import { useDispatch, useSelector } from "react-redux";

export const ResetPasswordPage = () => {

  const [formData, setFormData] = useState( {
    password: '',
    token: ''
  })

  const dispatch = useDispatch();
  const isAutorized = useSelector(state => state.auth.isAutorized)
  const isForgotPassSuccess = useSelector(state => state.auth.isForgotPassSuccess)

  const handleInputData = (e) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(formData))
  }

if (isAutorized) {
  return (
    <Redirect to ="/"/>
  )
}

if (!isForgotPassSuccess) {
  return (
    <Redirect to="/forgot-password"/>
  )
}



return (
  <div className={styles.resetPasswordPage}>
    <Form title = "Восстановление пароля" buttonTitle = "Сохранить"  onSubmit={handleFormSubmit}>
        <Input onChange={handleInputData} placeholder ="Введите новый пароль" icon ="ShowIcon" name="password" value ={formData.password}/>
        <Input onChange={handleInputData} placeholder="Введите код из письма" name="token" value ={formData.token}/>
    </Form>
    <p className="text text_type_main-small text_color_inactive">Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link></p>
  </div>
)
}