// Styles Imports
import Image from "next/image";
import styles from "../../styles/components-styles/why-decentro/why-decentro.module.scss";

const WhyDecentro = () => {
  return (
    <div className={styles["why-decentro"]}>
      {/* <img
        className={`${styles["banner-bg"]}`}
        src="/images/bg-banners/blue-bg-why-decentro.svg"
        alt="bg banner"
      /> */}
      <img
        className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
        src="/images/bg-banners/lines-bg-why-decentro.svg"
        alt="bg banner curves"
      />
      <h2>
        Why <span className="header-section-highlighted">Decentro?</span>
      </h2>
      <p className={styles["tagline"]}>
        We are a full-stack Banking-as-a-Service platform where you can select your desired modules, test them in our sandbox and launch your product with our APIs & SDKs in a matter of days.
      </p>
      <p className={styles["tagline-highlighted"]}>It’s that easy, as it should be. Welcome to the future.</p>
      <div className={styles["why-decentro-steps"]}>
        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <Image
              src="/images/icons/reduced-capex.svg"
              alt="reduced capex"
              width={70}
              height={70}
            />
            {/* <img src="/images/icons/reduced-capex.svg" alt="reduced capex" /> */}
          </div>
          <p className={styles["item-title"]}>
            90% Reduced Capex & Opex
          </p>
        </div>
        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <Image
              src="/images/icons/multi-channel-support.svg"
              alt="reduced capex"
              width={70}
              height={70}
            />
            {/* <img src="/images/icons/reduced-capex.svg" alt="reduced capex" /> */}
          </div>
          <p className={styles["item-title"]}>
            Multi-Channel Customer Support
          </p>
        </div>

        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <Image
              src="/images/icons/compliant.svg"
              alt="compliant"
              width={70}
              height={70}
            />
            {/* <img src="/images/icons/compliant.svg" alt="compliant" /> */}
          </div>
          <p className={styles["item-title"]}>
            100% Compliant Workflows
          </p>
        </div>
        <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <Image
              src="/images/icons/faster-timelines.svg"
              alt="faster timelines"
              width={70}
              height={70}
            />
            {/* <img
              src="/images/icons/faster-timelines.svg"
              alt="faster timelines"
            /> */}
          </div>
          <p className={styles["item-title"]}>
            {/* <strong> */}
            10X Faster Timelines
            {/* </strong> */}
          </p>
        </div>
        {/* <div className={styles["item"]}>
          <div className={styles["item-image"]}>
            <Image
              src="/images/icons/multibank.svg"
              alt="multibank"
              width={70}
              height={70}
            />
          </div>
          <p className={styles["item-title"]}>
            <strong>Multi-Bank</strong>
            <br />
            Infrastructure
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default WhyDecentro;
