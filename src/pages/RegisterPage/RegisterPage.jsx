import {useState} from "react";
import { Form } from "../../components/Form/Form";
import {Input, EmailInput, PasswordInput  } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './RegisterPage.module.css'
import { registration } from "../../services/actions/registration";


export const RegisterPage = () => {

  const [formData, setFormData] = useState( {
    name: '',
    email:'',
    password: ''
  })

  const dispatch = useDispatch();

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
    dispatch(registration(formData))
  }

    
  return (
    <div className={styles.registerPage}>
      <Form title = "Регистрация" buttonTitle = "Зарегистрироваться" onSubmit={handleFormSubmit}>
          <Input onChange={handleInputData} placeholder="Имя" name ="name" value ={formData.name}/>
          <EmailInput onChange={handleInputData} className ="mb-50" size="default"  name='email' value={formData.email}/>
          <PasswordInput onChange={handleInputData} className = "pt-30" name='password' value={formData.password}/>
      </Form>
      <p className="text text_type_main-small text_color_inactive">Уже зарегистрированы? <Link to='/login' className={styles.link}>Войти</Link></p>
    </div>
  )
}