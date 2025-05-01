import styles from "../../styles/components-styles/datapull-apis/datapull-apis.module.scss";

const ComplianceContent = () => {
  return (
    <>
      <div className={styles["types-container"]}>
        <h2>
          Your Relationship With <span>Decentro Is Fully Compliant</span>
        </h2>
        <p className={styles["tagline"]}></p>
        <div className={styles["types-wrapper"]}>
          <div className={styles["types-item"]}>
            <div className={styles["types-item-left"]}>
              <div className={styles["type-card"]}>
                <h2>Compliance Focused</h2>
                <ul>
                  <li>
                    Decentro is fully compliant with ISO 27001 guidelines across
                    all the products.
                  </li>
                  <li>
                    Decentro undergoes stringent 3rd party vulnerability
                    assessments from CERT-IN empaneled auditors periodically.
                  </li>
                  <li>
                    Decentro stores and processes all data strictly in India as
                    per regulatory requirements.
                  </li>
                  <li>
                    Decentro undertakes frequent internal vulnerability
                    assessments to ensure every feature has security built into
                    it.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["types-item-right"]}>
              <div className={styles["image-section"]}>
                <img
                  src="/images/compliance/compliance-focused.svg"
                  alt="compliance-focused"
                />
              </div>
            </div>
          </div>
          <div className={styles["types-item"]}>
            <div className={styles["types-item-left"]}>
              <div className={styles["type-card"]}>
                <h2>Security Focused</h2>
                <ul>
                  <li>
                    Decentro’s systems can be accessed only through valid
                    whitelisted Indian IP addresses.
                  </li>
                  <li>
                    Decentro’s systems have multiple layers of security
                    incorporated across its APIs and SDKs.
                  </li>
                  <li>
                    Decentro’s dashboard has MFA-based accesses to avoid
                    unauthorized access.
                  </li>
                  <li>
                    Decentro follows industry-best encryption standards like
                    AES256 and RSA4096 for the utmost security.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["types-item-right"]}>
              <div className={styles["image-section"]}>
                <img
                  src="/images/compliance/security-focused.svg"
                  alt="security-focused"
                />
              </div>
            </div>
          </div>
          <div className={styles["types-item"]}>
            <div className={styles["types-item-left"]}>
              <div className={styles["type-card"]}>
                <h2>Process Focused</h2>
                <ul>
                  <li>
                    Decentro has strict access management protocols to protect
                    your data from unauthorized access.
                  </li>
                  <li>
                    Decentro has internal encryption and hashing to ensure
                    confidential details are not visible to all its employees.
                  </li>
                  <li>
                    Decentro has clear security criteria across its development
                    and testing process to ensure the utmost security.
                  </li>
                  <li>
                    Decentro has periodic internal audits of processes to ensure
                    adherence to industry best practices.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["types-item-right"]}>
              <div className={styles["image-section"]}>
                <img
                  src="/images/compliance/process-focused.svg"
                  alt="process-focused"
                />
              </div>
            </div>
          </div>
          <div className={styles["types-item"]}>
            <div className={styles["types-item-left"]}>
              <div className={styles["type-card"]}>
                <h2>API Status Page</h2>
                <ul>
                  <li>
                    It comes with a clean User Experience that helps clients
                    monitor our APIs’ working in terms of Capability,
                    Accessibility, and more.
                  </li>
                  <li>
                    Customers can use multiple communication channels to receive
                    alerts/notifications from Decentro for
                    incidents/performance/maintenance/downtime - Email, Slack,
                    Webhook, Google Chat, and others.
                  </li>
                  <li>
                    Unlimited Subscribers for alerts/notifications with Multiple
                    stages of incidents/performance to send alerts to the
                    customers along with Scheduling of maintenance from the
                    InStatus Dashboard.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["types-item-right"]}>
              <div className={styles["image-section"]}>
                <img src="/images/compliance/api-status.svg" alt="api-status" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplianceContent;
