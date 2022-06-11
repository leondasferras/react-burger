import React from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const modalsContainer = document.querySelector("#modals");

const Modal = ({ title, onOverlayClick, onEscKeydown, children }) => {
  // При монтировании компонента (открытии модалки) навешиваем на document обработчик Esc
  // При демонтаже компонента (закрытии модалки) удаляем обработчик
  React.useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);

    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  }, []);

  // Рендерим модалку в соответствующий DOM-элемент
  return createPortal(
    <>
      <div className={`${styles.modal} pt-15 pr-10 pb-15 pl-10`}>
        <div className={styles.titleAndCloseButton}>
          <h3 className="text text_type_main-large">{title}</h3>
          <div className={styles.closeButton} onClick={() => onOverlayClick()}>
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onOverlayClick} />
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
