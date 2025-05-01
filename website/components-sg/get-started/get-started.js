import Link from "next/link";
import styles from "../../styles/components-styles/get-started/get-started.module.scss";
import requests from "../../requests";

const GetStarted = () => {
  return (
    <div className={styles["get-started"]}>
      <h2>
        Accelerate{" "}
        <span className={styles["header-section-highlighted"]}>
          Product Launch
        </span>
      </h2>
      <p className={styles["tagline"]}>
        Launch Financial Products <strong>10X</strong> faster using
        Decentro&apos;s robust APIs and SDKs
      </p>
      <div className={styles["get-started-steps"]}>
        <div className={styles["step-block"]}>
          <div className={styles["image-section"]}>
            <img src="/images/icons/signup.svg" alt="signup icon" />
          </div>
          <div className="step-block-text-content">
            <h4>Sign Up</h4>
            <p>
              Simply create an account using your business email ID with a
              seamless verification process and select your desired financial
              modules
            </p>
          </div>
        </div>
        <div className={styles["step-arrow"]}>
          <img src="/images/icons/right-arrow.svg" alt="arrow-right" />
        </div>
        <div className={styles["step-block"]}>
          <div className={styles["image-section"]}>
            <img src="/images/icons/integrate.svg" alt="integrate icon" />
          </div>
          <div className="step-block-text-content">
            <h4>Integrate In Sandbox</h4>
            <p>
              Explore our detailed documentation as well as integrate with your
              friendly sandbox for all your selected modules, right on day one
            </p>
          </div>
        </div>
        <div className={styles["step-arrow"]}>
          <img src="/images/icons/right-arrow.svg" alt="arrow-right" />
        </div>
        <div className={styles["step-block"]}>
          <div className={styles["image-section"]}>
            <img src="/images/icons/go-live.svg" alt="go-live-icon" />
          </div>
          <div className="step-block-text-content">
            <h4>Go Live!</h4>
            <p>
              Whenever you are ready with the integrations and want to launch in
              production, just give us the green signal from your dashboard
              itself
            </p>
          </div>
        </div>
      </div>
      <div className={styles["get-started-btn"]}>
        {/* <Link href={requests.SIGNUP}>Get Started</Link> */}
      </div>
    </div>
  );
};

export default GetStarted;
