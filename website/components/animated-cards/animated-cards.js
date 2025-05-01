import styles from "../../styles/components-styles/animated-cards/animated-cards.module.scss";

const AnimatedCards = (props) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-image-box"]}>
        <img src={props.data.image} alt="offer banner" />
      </div>
      <img />
      <div className={styles["card-details"]}>
        <div className={styles["card-header-row"]}>
          <h2 className={styles["card-title"]}>{props.data.title}</h2>
          <img
            className={styles["down-arrow"]}
            src="/images/white-down.svg"
            alt="white-down-arrow"
          />
        </div>
        <p className={styles["card-description"]}>{props.data.description}</p>
      </div>
    </div>
  );
};

export default AnimatedCards;
