import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

type TModalOverlay = {
  onClick: () => void
}

const ModalOverlay = ({ onClick }:TModalOverlay) => {


  return <div className={styles.overlay} onClick={()=>onClick()} />;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};

export { ModalOverlay };
