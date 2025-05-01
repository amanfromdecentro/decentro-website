// Styles Imports
import styles from "../../styles/components-styles/why-decentro/why-decentro.module.scss";

const WhyDecentro = () => {
  return (
    <div className={styles["why-decentro"]}>
      <img
        className={`${styles["banner-bg"]}`}
        src="/images/bg-banners/blue-bg-why-decentro.svg"
        alt="bg banner"
      />
      <img
        className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
        src="/images/bg-banners/lines-bg-why-decentro.svg"
        alt="bg banner curves"
      />
      <h2>
        Why <span className="header-section-highlighted">Decentro?</span>
      </h2>
      <p className={styles["tagline"]}>
        Our full-stack Banking-as-a-Service platform helps you choose the right
        modules for your business, test them in our sandbox, and launch your
        product with our APIs & SDKs. All in a matter of days
      </p>
      {/* <p className={styles["tagline-highlighted"]}>Welcome to the future.</p> */}
      <div className={styles["why-decentro-steps"]}>
        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <img src="/images/icons/global.svg" alt="global" />
          </div>
          <p className={styles["item-title"]}>
            Support Payouts in
            <br />
            <strong>190+ Countries</strong>
          </p>
        </div>
        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <img src="/images/icons/multibank.svg" alt="multibank" />
          </div>
          <p className={styles["item-title"]}>
            Payments Across <br />
            <strong>12+ Currencies</strong>
          </p>
        </div>
        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <img src="/images/icons/reduced-capex.svg" alt="reduced capex" />
          </div>
          <p className={styles["item-title"]}>
            <strong>90% Reduced</strong> <br />
            Capex & Opex
            <br />
          </p>
        </div>
        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <img
              src="/images/icons/faster-timelines.svg"
              alt="faster timelines"
            />{" "}
          </div>
          <p className={styles["item-title"]}>
            Drive <strong>10X Faster</strong> <br /> Timelines
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyDecentro;
