import {useState} from "react";
import { Form } from "../../components/Form/Form";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './ForgotPasswordPage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/forgotPassword";


export const ForgotPasswordPage = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState( {
    email:'',
  })

    
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
    dispatch(forgotPassword(formData))
  }

  return (
    <div className={styles.forgotPasswordPage}> 
      <Form title = "Восстановление пароля" buttonTitle = "Восстановить" onSubmit={handleFormSubmit}> 
          <Input placeholder="Укажите e-mail"
          />
      </Form>
      <p className="text text_type_main-small text_color_inactive">Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link></p>
    </div>
  )
}