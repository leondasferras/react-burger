import styles from './ModalOverlay.module.css'
import PropTypes from 'prop-types';


const ModalOverlay = ({ onClick }) => {
  // пропс onClick - это колбэк для клика по подложке, который закрывает модальное окно

  return (
    <div className={styles.overlay} onClick={onClick} />
  );
};

ModalOverlay.propTypes = {
 onClick: PropTypes.func
}

export {ModalOverlay}