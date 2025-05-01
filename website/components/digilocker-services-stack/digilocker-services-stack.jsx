import React from "react";
import styles from "../../styles/page-styles/digilocker-services-stack.module.scss";

const DigilockerServicesStack = (props) => {
  return (
    <div className={styles.container} id={props.id ? props.id : ""}>
      <h2 className={styles.title}>
        Decentro&apos;s <span>Digilocker</span>&nbsp;Services Stack
      </h2>

      <div className={styles.content}>
        <div className={styles.ssoSection}>
          <div className={styles.ssoInfo}>
            <h3>Single Sign On (SSO) -</h3>
            <h4>DigiLocker Simplified</h4>
            <p>
              The new and improved SSO DigiLocker Suite of APIs enables you to
              easily create a dynamic DigiLocker session. With SSO DigiLocker,
              you get the option to simplify signing up for your users with
              pinless sign-in, pinless sign-up and usernameless sign-up.
            </p>
          </div>
          <div className={styles.ssoFunctionalities}>
            <h3>SSO functionalities:</h3>
            <ul>
              <li>
                <input type="checkbox" checked readOnly />
                <span>Verify Phone Number</span>
              </li>
              <li>
                <input type="checkbox" checked readOnly />
                <span>Get List of Issuers</span>
              </li>
              <li>
                <input type="checkbox" checked readOnly />
                <span>Get List of Document Types</span>
              </li>
              <li>
                <input type="checkbox" checked readOnly />
                <span>
                  Get List of Parameters (If you do not have the organisation
                  ID, Document Type, etc.)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.flowChartImage}>
          <img
            src="/images/resources/digilocker/sso.svg"
            alt="SSO DigiLocker Flow Chart"
            className={styles.flowChartImg}
          />
        </div>

        <div className={styles.separator}></div>

        <div className={styles.enhancedFlows}>
          <h3>Enhanced DigiLocker Flows</h3>
          <p>
            Enhanced DigiLocker Flows, powered by Decentro’s UIStreams, let
            businesses integrate custom UI workflows into DigiLocker via API.
            This adaptive interface using a software development kit (SDK)
            guides users through complex workflows, retrieves documents, and
            dynamically presents relevant fields, streamlining the process and
            reducing user effort.
          </p>
        </div>

        <div className={styles.flowChartImage}>
          <img
            src="/images/resources/digilocker/enhanced-flow.svg"
            alt="Enhanced DigiLocker Flow Chart"
            className={styles.flowChartImg}
          />
        </div>
      </div>
    </div>
  );
};

export default DigilockerServicesStack;
