import {useState} from "react";
import { Form } from "../../components/Form/Form";
import { EmailInput, PasswordInput  } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './LoginPage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/login";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState( {
    email:'',
    password: ''
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
    dispatch(login(formData))
  }

  return (
    <div className={styles.loginPage}>
    <Form title = "Вход" buttonTitle = "Войти" onSubmit={handleFormSubmit}>
      <EmailInput className ="mb-50" size="default"  name="email" onChange={handleInputData} value={formData.email}/>
      <PasswordInput className = "pt-30" onChange={handleInputData} name ="password" value={formData.password}/>
    </Form>
    <p className="text text_type_main-small text_color_inactive">Вы — новый пользователь? <Link to='/register' className={styles.link}>Зарегистрироваться</Link></p>
    <p className="text text_type_main-small text_color_inactive">Забыли пароль?<Link to ='/forgot-password' className ={styles.link}> Восстановить пароль</Link></p>
    </div>
  )
}