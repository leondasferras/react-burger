import React from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const modalsContainer = document.querySelector("#modals") as Element;

type TModalProps = {
  title?:string;
  onClose: () => void;
  children: React.ReactNode;

}

const Modal = ({ title, onClose, children }:TModalProps) => {



  React.useEffect(() => {
    const handleEscKeydown = (e:KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };
    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, []);

  // Рендерим модалку в соответствующий DOM-элемент
  return createPortal(
    <>
      <div className={`${styles.modal} pt-15 pr-10 pb-15 pl-10`}>
        <div className={styles.titleAndCloseButton}>
          <h3 className="text text_type_main-large">{title}</h3>
          <div className={styles.closeButton} onClick={() => onClose()}>
            <CloseIcon type="primary"/>
          </div>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={()=> onClose()} />
    </>,
    modalsContainer
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onOverlayClick: PropTypes.func,
  onEscKeydown: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export { Modal };
