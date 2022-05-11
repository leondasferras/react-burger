import styles from './ModalOverlay.module.css'


const ModalOverlay = ({ onClick }) => {
  // пропс onClick - это колбэк для клика по подложке, который закрывает модальное окно

  return (
    <div className={styles.overlay} onClick={onClick} />
  );
};


export {ModalOverlay}