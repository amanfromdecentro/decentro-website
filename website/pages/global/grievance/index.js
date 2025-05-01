import React from "react";
import styles from "../../../styles/page-styles-sg/grievance-style/grievance-style.module.scss";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const GrievancePolicy = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <React.Fragment>
      <Head>
        <title>Grievance | API Banking Platform | Decentro</title>
        <link rel="canonical" href="https://decentro.tech/global/grievance" />
        <link
          rel="alternate"
          href="https://decentro.tech/global/grievance"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Terms & Conditions | API Banking Platform | Decentro"
        />
        <meta name="keywords" content="terms, conditions, decentro" />
        <meta
          property="og:title"
          content="Terms & Conditions | API Banking Platform | Decentro"
        />
        <meta property="og:image" content="./images/banner.svg" />
      </Head>
      <div className={styles["documents-container"]}>
        <div className={styles["document-type-list"]}>
          <Link href="/global/terms/">Terms & Conditions</Link>
          <Link href="/global/privacy/" activeclassname="active">
            Privacy Policy
          </Link>
          <Link
            href="/global/grievance/"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Grievances
          </Link>
          <Link href="/global/agreement/" activeclassname="active">
            Master Services Agreement
          </Link>
        </div>
        <div className={styles["document-content"]}>
          <div className={styles["grievance-policy"]}>
            <h2>CUSTOMER COMPLAINTS, GRIEVANCES AND RESOLUTIONS</h2>
            <p style={{ width: "100%" }}>Updated on July 21, 2023</p>
            <div className={styles["content"]}>
              <p>
                At Decentro, we are committed to ensuring that your experience
                with our website and Services meets your expectations. To this
                end, we have built robust mechanisms for grievance redressal.
                This Policy contains details on -
              </p>
              <ol className={styles["lower-alpha"]}>
                <li>Registering a complaint</li>
                <li>Ownership & Escalation Matrix</li>
              </ol>
              <br />

              <ol>
                <li>
                  <strong>Reporting a complaint</strong>
                  <p>
                    You can contact us by visiting the Support page of the our
                    website through the following modes -
                  </p>
                </li>
                <ol>
                  <li>
                    <strong>Email: </strong> You can send an email to
                    <strong>grievances@decentro.tech</strong> Our operations
                    team will pick up these queries and resolve them.
                  </li>
                  <li>
                    <strong>Form/Portal: </strong> You can fill a short form
                    detailing their issue & someone from our operations team
                    will get in touch with you.
                  </li>
                  <li>
                    <strong>Self-serve: </strong> You can check our FAQ document
                    to find answers to frequently asked questions.
                  </li>
                  <li>
                    <strong>Call (Only for merchants): </strong> In case the
                    query can be better answered via a phone call, you can call
                    your designated account manager for a faster resolution
                  </li>
                  <li>
                    <strong>Call (For consumers): </strong> We have a dedicated
                    phone number where you can call for your grievances as per
                    the timings below.
                  </li>
                </ol>
                <br />
                <p>
                  <strong>Timings:</strong>
                </p>
                <ul className={styles["bullet-stack-dotted"]}>
                  <li>
                    Our operations team is available from 9am to 9pm during
                    working weekdays.
                  </li>
                  <li>
                    For weekends & holidays, the team is available from 11am to
                    5pm
                  </li>
                  <li>Our support team will be available round the clock.</li>
                </ul>
                <br />
                <p>
                  <strong>Turn-around time:</strong>
                </p>
                <ul className={styles["bullet-stack-dotted"]}>
                  <li>
                    We aim to respond to each query within 48 business hours.
                  </li>
                  <li>
                    The resolution time can vary depending on the issue but is
                    usually between 1-28 business days depending on the
                    complexity of the issue.
                  </li>
                </ul>
                <br />
                <p>
                  <strong>Escalation matrix:</strong>
                </p>{" "}
                <p>
                  In case you are not happy with the resolution, you may
                  escalate the issue by reaching out to the grievance officer.
                  The grievance officer’s contact details can be found on our
                  website as public information.
                </p>
              </ol>
            </div>
          </div>
          <div className={styles["scroll-to-top-btn"]}>
            <button
              onClick={() => {
                scrollToTop();
              }}
            >
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GrievancePolicy;
