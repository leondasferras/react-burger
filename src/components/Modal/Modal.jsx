import React from 'react' 
import { createPortal } from 'react-dom'; 
import { ModalOverlay } from '../ModalOverlay/ModalOverlay.jsx'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Modal.module.css'



const modalsContainer = document.querySelector('#modals');

const Modal = ({ title, onOverlayClick, onEscKeydown, children }) => {
  // При монтировании компонента (открытии модалки) навешиваем на document обработчик Esc
  // При демонтаже компонента (закрытии модалки) удаляем обработчик
  React.useEffect(() => {
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  // Рендерим модалку в соответствующий DOM-элемент
  return createPortal(
    <>
      <div className={`${styles.modal} pt-15 pr-10`}>
        <div className={styles.titleAndCloseButton}>
          <h3>{title}</h3>
          <CloseIcon/>
        </div>
        {children} {/* Вложенное в компонент содержимое */}
      </div>
      <ModalOverlay onClick={onOverlayClick} /> {/* Подложка */}
    </>,
    modalsContainer 
  );
};

export {Modal}