import styles from "../../styles/components-styles/datapull-apis/datapull-apis.module.scss";

const DataPullAPIs = () => {
  return (
    <>
      <div className={styles["types-container"]}>
        <h2>
          Types of <span>Data Pull APIs</span>
        </h2>
        <p className={styles["tagline"]}></p>
        <div className={styles["types-wrapper"]}>
          <div className={styles["types-item"]}>
            <div className={styles["types-item-left"]}>
              <h2>
                <span>Credit Bureau</span> APIs
              </h2>
              <p>
                A credit bureau is an agency that collects information related
                to the credit ratings of individuals and makes it available to
                financial companies, banks, and other legal authorities.
              </p>
              <div className={styles["type-card"]}>
                <h2>
                  Bureaus provide APIs for 2 types of pulls{" "}
                  <span>Hard & Soft</span>
                </h2>
                <ul>
                  <li>
                    Hard pulls are provided only to regulated entities and
                    impact a customer’s score. Also, hard pulls don’t disclose
                    the name of the lender due to confidentiality reasons.
                  </li>
                  <li>
                    Soft pulls are provided to any entities that have a strong
                    info-sec setup in place. Soft pulls intimate the customer
                    and the bureau shares the credit report with the customer.
                    In addition, the platform can get to know the lender names.
                  </li>
                </ul>
              </div>
              <div
                className={
                  styles["type-card"] + " " + styles["type-card-image"]
                }
              >
                <div className={styles["image-section"]}>
                  <div>
                    <img
                      src="/images/icons/decision.svg"
                      alt="better lending decisions"
                    />
                  </div>
                </div>

                <div className={styles["text-section"]}>
                  <h2>Better Lending Decisions</h2>
                  <p>
                    Credit Reports pulled can be used to verify users’
                    creditworthiness which helps make better-informed decisions
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["types-item-right"]}>
              <div className={styles["image-section"]}>
                <img
                  src="/images/financial-services/maze-arrow.svg"
                  alt="maze-arrow"
                />
              </div>
            </div>
          </div>
          <div className={styles["types-item"]}>
            <div className={styles["types-item-left"]}>
              <h2>
                <span>Customer Data Pull</span> APIs
              </h2>
              <p>
                This API allows a business to extract customer information using
                mobile number and name
              </p>
              <div
                className={
                  styles["type-card"] + " " + styles["type-card-image"]
                }
              >
                <div className={styles["image-section"]}>
                  <div>
                    <img
                      src="/images/icons/seamless-user-exp.svg"
                      alt="seamless user verification"
                    />
                  </div>
                </div>

                <div className={styles["text-section"]}>
                  <h2>Seamless User Verification</h2>
                  <p>
                    Financial service providers can search and download KYC
                    records with ease and access them after authentication
                  </p>
                </div>
              </div>
              <div
                className={
                  styles["type-card"] + " " + styles["type-card-image"]
                }
              >
                <div className={styles["image-section"]}>
                  <div>
                    <img
                      src="/images/icons/seamless-user-exp.svg"
                      alt="reduced verification time"
                    />
                  </div>
                </div>

                <div className={styles["text-section"]}>
                  <h2>Reduced Time for Verification</h2>
                  <p>
                    No need to conduct various KYC checks by centralizing the
                    process and reducing turnaround time on KYC
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["types-item-right"]}>
              <div className={styles["image-section"]}>
                <img
                  src="/images/financial-services/user-data.svg"
                  alt="user-data"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPullAPIs;
