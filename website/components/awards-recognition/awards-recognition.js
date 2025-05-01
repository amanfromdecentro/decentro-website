import styles from "../../styles/components-styles/awards-recognition/awards-recognition.module.scss";
import Image from "next/image";

const AwardsRecognition = () => {
  return (
    <div className={styles["awards-recognition"]}>
      <h2>
        Awards & <span className="header-section-highlighted">Recognition</span>
      </h2>
      <p className={styles["tagline"]}>The Hall of Fame</p>
      <div className={styles["awards-recognition-steps"]}>
        <div className={styles["item"]}>
          <Image
            src="/images/home/assocham.svg"
            alt="assocham"
            layout="responsive"
            width={310}
            height={260}
          />
        </div>
        <div className={styles["item"]}>
          <Image
            src="/images/home/kcci.svg"
            alt="kcci"
            layout="responsive"
            width={310}
            height={260}
          />
        </div>

        <div className={styles["item"]}>
          <Image
            src="/images/home/ifta.svg"
            alt="ifta"
            layout="responsive"
            width={310}
            height={260}
          />
        </div>
        <div className={styles["item"]}>
          <Image
            src="/images/home/visa.svg"
            alt="visa"
            layout="responsive"
            width={310}
            height={260}
          />
        </div>

        <div className={styles["item"]}>
          <Image
            src="/images/home/ifta-2023.svg"
            alt="ifta"
            layout="responsive"
            width={310}
            height={260}
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
