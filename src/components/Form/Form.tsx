import React from "react";
import styles from "./Form.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { type } from "os";


type TFormProps = {
  children: React.ReactNode;
  title: string | null;
  buttonTitle:string;
  onSubmit: () => void
}

export const Form = ({ children, title, buttonTitle, onSubmit }:TFormProps) => {
  return (

    <form onSubmit={onSubmit} className={`${styles.Form} mb-20`}>
      <h2 className= "text text_type_main-medium">{title}</h2>
      {children}
      <Button type="primary" size="medium">
        {buttonTitle}
      </Button>
    </form>

  );
};
