// Styles Imports
import styles from "../../styles/components-styles/awards-recognition/awards-recognition.module.scss";

const AwardsRecognition = () => {
  return (
    <div className={styles["awards-recognition"]}>
      <h2>
        Awards & <span className="header-section-highlighted">Recognition</span>
      </h2>
      <p className={styles["tagline"]}>The Hall of Fame</p>
      <div className={styles["awards-recognition-steps"]}>
        <div className={styles["item"]}>
          <img src="/images/home/assocham.svg" alt="assocham" />
        </div>
        <div className={styles["item"]}>
          <img src="/images/home/kcci.svg" alt="kcci" />
        </div>
        <div className={styles["item"]}>
          <img src="/images/home/ifta.svg" alt="ifta" />
        </div>
        <div className={styles["item"]}>
          <img src="/images/home/visa.svg" alt="visa" />
        </div>
        <div className={styles["item"]}>
          <img src="/images/home/ifta-2023.svg" alt="ifta" />
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
