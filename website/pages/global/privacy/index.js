import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";
import styles from "../../../styles/page-styles-sg/privacy-style/privacy-style.module.scss";

const TermsAndConditions = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <React.Fragment>
      <Head>
        <title>Privacy Policy | API Banking Platform | Decentro Global</title>
        <link rel="canonical" href="https://decentro.tech/global/privacy" />
        <link
          rel="alternate"
          href="https://decentro.tech/global/privacy"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Decentro values your privacy. Learn how we collect, use, and protect your data under Singapore’s PDPA. Review our policy and manage your consent today."
        />
        <meta name="keywords" content="privacy, policy, decentro" />
        <meta
          property="og:title"
          content="Privacy Policy | API Banking Platform | Decentro Global"
        />
        <meta property="og:image" content="./images/banner.svg" />
      </Head>
      <div className={styles["documents-container"]}>
        <div className={styles["document-type-list"]}>
          <Link href="/global/terms/" activeclassname="active">
            Terms & Conditions
          </Link>
          <Link
            href="/global/privacy/"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Privacy Policy
          </Link>
          <Link href="/global/grievance/" activeclassname="active">
            Grievances
          </Link>
          <Link href="/global/agreement/" activeclassname="active">
            Master Services Agreement
          </Link>
        </div>
        <div className={styles["document-content"]}>
          <div className={styles["privacy-policy"]}>
            <h2>PRIVACY AND PERSONAL DATA PROTECTION</h2>
            <p>Updated on July 21, 2023</p>
            <div className={styles["content"]}>
              <p>
                At Decentro, we are committed to protecting and maintaining your
                privacy. This Privacy Policy and Personal Data Protection policy
                outline the data we collect from you, its purpose, and how we
                use and share it, in accordance with the Personal Data
                Protection Act.
              </p>
              <br />
              <p>
                We urge you to read this Policy carefully. If you do not agree
                with what is stated in this Policy, please stop using our
                products and services immediately.
              </p>
              <br />
              <h4>Applicability</h4>
              <p>
                This policy applies to you whenever you use our products and
                services including when you access this website. By using our
                products or services and accessing this website, you agree to be
                bound by the terms and conditions of this Policy and also give
                us your consent to utilise, store, disclose and transfer your
                information in accordance with it.
              </p>
              <p>
                This Policy is not applicable to third-party websites, products
                or services regardless of whether they are linked to or offered
                in association with our services. Please read the terms and
                conditions and privacy terms of such third-parties to understand
                how they process your information.
              </p>
              <br />
              <h4>Types of data we collect from you</h4>
              <p>
                We deem any information as personal data (“Personal Data”) if it
                is associated with your identity. Personal Data could thus
                include name, address, telephone number, email address, date of
                birth, payment card information, bank account information, etc.
                The following paragraphs describe what Personal Data we collect
                from you and the purpose thereof. By using our services, you
                consent to the collection and usage of all data mentioned here.
              </p>
              <ol type="a" className={styles["lower-alpha"]}>
                <li>
                  <p>
                    Account Information - This includes details such as your
                    name, residential address, email address, date of birth,
                    social security number, driver’s license number, passport
                    number, tax identification number, demographic data that you
                    provide to us at the time of onboarding and updated as and
                    when there are changes to it. We require this information -
                  </p>
                </li>
                <ol className={styles["lower-roman"]}>
                  <li>
                    <p>to be able to offer our Services;</p>
                  </li>
                  <li>
                    <p>to verify and authenticate your identity;</p>
                  </li>
                  <li>
                    <p>to provide assistance and support;</p>
                  </li>
                  <li>
                    <p>to perform due diligence on you;</p>
                  </li>
                  <li>
                    <p>to prevent risk and fraud;</p>
                  </li>
                  <li>
                    <p>
                      to undertake anti-money laundering and countering the
                      finance of terrorism measures;
                    </p>
                  </li>
                  <li>
                    <p>
                      to communicate with you and provide you with updates and
                      alerts, information regarding your transactions, share
                      marketing campaigns, etc.
                    </p>
                  </li>
                  <li>
                    <p>to report suspicious activity;</p>
                  </li>
                </ol>
                <li>
                  Identity Verification Documents - These include copies of your
                  government-issued identification including passport, driver’s
                  license or national ID card or other authentication
                  information. This information is required by us to fulfil our
                  obligations under applicable law in respect of identity
                  verification and prevention of fraud and risk. Accordingly, we
                  use this information to-
                </li>
                <ol className={styles["lower-roman"]}>
                  <li>
                    <p>verify and authenticate your identity;</p>
                  </li>
                  <li>
                    <p>create your account;</p>
                  </li>
                  <li>
                    <p>to assess your eligibility to use our Services;</p>
                  </li>
                  <li>
                    <p>
                      to undertake anti-money laundering and countering the
                      finance of terrorism measures;
                    </p>
                  </li>
                  <li>
                    <p>to perform due diligence on you;</p>
                  </li>
                  <li>
                    <p>to report suspicious activity;</p>
                  </li>
                  <li>
                    <p>to facilitate and provide our Services</p>
                  </li>
                </ol>
                <li>
                  <p>
                    Payment Information - This includes financial information
                    such as bank account details (account number, routing
                    number), credit or debit card numbers, credit reports or tax
                    information, such as withholding allowances and filing
                    status. This information is required to process payments on
                    your behalf.
                  </p>
                </li>
                <li>
                  <p>
                    Beneficiary Information - information about the parties to
                    the transaction, the designated recipient (including the
                    recipient’s bank account information), the source of the
                    funds, the reason for the transaction, the devices and
                    payment methods used to complete transactions. In addition
                    to requiring this information for the processing payments on
                    your behalf, this information helps us identify and prevent
                    risks and fraud and fulfil our obligations under applicable
                    law, particularly under anti-money laundering and countering
                    the financing of terrorism laws.
                  </p>
                </li>
                <li>
                  <p>
                    Business Entity Information and Documents - This may include
                    information about the business you represent including: the
                    organizational structure of the company, the product and
                    service offerings, website domain name used by the business,
                    and information about the beneficial owners of the business.
                    We use this information for the purposes mentioned in (a)
                    and (b) in respect of your business.
                  </p>
                </li>
                <li>
                  <p>
                    Device Information and Log Data - This includes (i)
                    information about server logs which may include information
                    such as access times and dates, pages viewed and other
                    system activity, including the third-party site you were
                    using before accessing our Services and (ii) information
                    about the devices you use to access our Services including:
                    the device type, operating systems and versions, the device
                    manufacturer and model, preferred languages, and plugins. In
                    addition to using this information for providing our
                    Services and identifying and preventing fraud, this
                    information helps us check for compatibility and improve
                    efficiency.
                  </p>
                </li>
                <li>
                  <p>
                    Usage Data - This includes information about pages visited,
                    time spent, etc. We use this information in order to gain
                    insights into your usage of our website and services,
                    enhance them, analyze data and transactions for the purpose
                    of improving our services, and carry out necessary
                    corrective and diagnostic actions.
                  </p>
                </li>
                <li>
                  <p>
                    Cookies - Our website and online services may use cookies to
                    understand how you interact with the website/online
                    services, enable network traffic and to provide specific
                    features.
                  </p>
                </li>
                <li>
                  <p>
                    Information we collect through surveys, feedback, and
                    promotions - You may provide this information voluntarily to
                    us. We use this information to assess our Services and carry
                    out necessary corrective and diagnostic actions.
                  </p>
                </li>
                <li>
                  <p>
                    Information we collect from third parties - We may collect
                    information about you from third parties including from our
                    service providers and credit bureaus. We may use this
                    information for a variety of purposes as mentioned in the
                    paragraphs above.
                  </p>
                </li>
              </ol>
              <br />
              <h4>Data Retention and Storage</h4>
              <p>
                Your Personal Data will be processed, maintained and stored in
                Singapore in accordance with applicable law. We will retain your
                Personal Data
              </p>
              <ol className={styles["lower-alpha"]}>
                <li>
                  <p>
                    until the time we deem it necessary to provide Services
                    including ancillary and support services;
                  </p>
                </li>
                <li>
                  <p>as required by law;</p>
                </li>
                <li>
                  <p>to comply with contractual and legal obligations;</p>
                </li>
                <li>
                  <p>
                    to protect ourselves from any threatened or actual dispute.{" "}
                  </p>
                </li>
              </ol>
              <p>
                While we may hence retain your information even after your stop
                receiving our Services, we will store and process them in
                accordance with law.
              </p>
              <br />
              <h4>Data Sharing</h4>
              <p>
                We will share your information on a strict need to know basis as
                and when required with third parties. Such instances may include
                -
              </p>
              <ol className={styles["lower-alpha"]}>
                <li>
                  <p>
                    Compliance and other legal obligations - We may be legally
                    required to provide information about you to the government,
                    law enforcement authorities, regulatory authorities and
                    judicial authorities when we’re ordered to do so, when any
                    details required by such authorities entails the disclosure
                    of your information, to comply with law, enforce our terms,
                    identify and prevent risks and fraud and to protect our
                    interests.
                  </p>
                </li>
                <li>
                  <p>
                    Third Party Service Providers/partners - We work with a host
                    of service providers to provide our Services to you, during
                    the course of which, we may share your information to such
                    service providers. While we will ensure that our agreements
                    with them requires them to handle you information in
                    accordance with this Policy, we urge you to read their terms
                    and conditions including their privacy policy since this
                    Policy is not applicable to third-party websites, products
                    or Services regardless of whether they are linked to or
                    offered in association with our service.
                  </p>
                </li>
                <li>
                  <p>
                    Our subsidiary and affiliate companies - we may share your
                    information with our subsidiary and affiliate companies for
                    the purposes described in this Policy in accordance with
                    law.
                  </p>
                </li>
              </ol>
              <p>
                We may share your information with other third parties with your
                consent should such a requirement arise.
              </p>
              <br />
              <h4>Analytics and Tracking</h4>
              <p>
                We/our partners/third party service providers may use analytics
                and tracking technologies. These technologies help us collect
                various data including details such as your usage of our
                Services and behaviours thereof. This helps us understand how
                you use our Services and hence, equips us to monitor our
                Services and improve it.
              </p>
              <br />
              <h4>Data Security</h4>
              <p>
                While transmission of information on the web is never foolproof,
                we have and will take all necessary steps and actions to protect
                your information against any loss or misuse. Additionally, we
                follow industry standards safeguards in storing your information
                and preventing any unauthorised access, theft, misuse, loss or
                modification through tools such as encryption, firewalls and
                access controls.
              </p>
              <p>
                We urge you to secure your account and use passwords that are
                strong. You may report any suspicious activity at{" "}
                <strong>support@decentro.tech</strong>
              </p>
              <br />
              <h4>Transfer of personal data outside Singapore</h4>
              <p>
                We do not transfer your personal data to countries outside of
                Singapore. However, if we do so, we will obtain your consent for
                the transfer to be made and we will take steps to ensure that
                your personal data continues to receive a standard of protection
                that is at least comparable to that provided under the PDPA.
              </p>
              <h4>Notification of Breach</h4>
              <p>
                We will notify you when we become aware of a breach of any of
                our obligations according to PDPA.
              </p>
              <br />
              <h4>Your Rights</h4>
              <ol className={styles["lower-alpha"]}>
                <li>
                  Right to review - If the information you have provided is
                  inaccurate, deficient or changed, you have the right to review
                  and revise it us subject to such revision being true, accurate
                  and complete.
                </li>
                <li>
                  Right to revoke consent - You have the right to revoke consent
                  to processing of your information at any time by writing to us
                  at support@decentro.tech. Please note however that we may be
                  precluded from providing our Services when you do so.
                </li>
              </ol>
              <br />
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

export default TermsAndConditions;
