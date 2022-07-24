import React from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';

const modalsContainer = document.querySelector("#modals");

const Modal = ({ title, onClose, children }) => {

const history = useHistory()


  React.useEffect(() => {
    const handleEscKeydown = (e) => {
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
            <CloseIcon />
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
