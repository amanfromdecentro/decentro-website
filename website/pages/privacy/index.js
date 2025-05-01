import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";
import Nodal from "../../components/nodal";

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
        <title>Privacy Policy | API Banking Platform | Decentro</title>
        <link rel="canonical" href="https://decentro.tech/privacy" />
        <link
          rel="alternate"
          href="https://decentro.tech/privacy"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Decentro values your privacy. We protect your data with industry-standard security and never share it without consent. Read our policy to learn more."
        />
        <meta name="keywords" content="privacy, policy, decentro" />
        <meta
          property="og:title"
          content="Privacy Policy | API Banking Platform | Decentro"
        />
        <meta property="og:image" content="./images/banner.svg" />
      </Head>
      <div className="documents-container">
        <div className="document-type-list">
          <Link href="/decfin-terms/" activeclassname="active">
            Decentro (PA) T&Cs
          </Link>
          <Link href="/decentro-terms/" activeclassname="active">
            Decentro (TSP) T&Cs
          </Link>
          <Link
            href="/privacy/"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Privacy Policy
          </Link>
          <Link href="/agreement/" activeclassname="active">
            Master Services Agreement (PA)
          </Link>
          <Link href="/report-bug" activeclassname="active">
            Report A Bug
          </Link>
        </div>
        <div className="document-content">
          <div className="privacy-policy">
            <h2>Privacy Policy</h2>
            <p>Updated on May 22, 2024</p>
            <div className="content">
              <h4>OUR BASE POLICY:</h4>
              <ol>
                <li>
                  User data must be handled with extreme care. We do not share
                  or allow for accidental disclosure of user data.
                </li>
                <li>
                  We adhere to best in class industry standard data protection
                  practices and shall have our systems audited by trusted
                  third-parties periodically.
                </li>
                <li>
                  This Privacy Policy outlines our practice in relation to the
                  storage, use, processing, and disclosure of personal data that
                  you have chosen to share with us when you access our website
                  “https://decentro.tech” (“Website”), or personal data that we
                  may have access to in relation to your use of the Website’s
                  offerings and features (“Services”).
                </li>
                <li>
                  At Decentro, we are committed to protecting your personal data
                  and respecting your privacy. Please read the following terms
                  of the Policy carefully to understand our practices regarding
                  your personal data and how we will treat it. This policy sets
                  out the basis on which any personal data we collect from you
                  or about you, or that you provide to us, will be processed by
                  us.
                </li>
                <li>
                  Capitalised words in the Policy shall have the same meaning
                  ascribed to them in the Terms and Conditions (“Terms”),
                  available at [https://decentro.tech/terms]. Please read this
                  Policy in consonance with the Terms.
                </li>
                <li>
                  By using the Website, you consent to the collection, storage,
                  use, and disclosure of your personal data, in accordance with,
                  and are agreeing to be bound by this Policy. We will not
                  collect any information from you, except where it is knowingly
                  and explicitly provided by you.
                </li>
                <li>
                  This Policy together with any terms of the arrangement we have
                  with you applies to your use of:
                  <br />- the Website, once you have downloaded the same onto
                  your mobile phone or handheld device; and
                  <br />- any of the Services that are available on the Website.
                </li>
                <li>
                  This policy is provided in a layered format, so you can
                  explore the specific areas set out below.
                  <br />- Personal data we collect about you
                  <br />- How your personal data is collected
                  <br />- Authenticity of personal data and information
                  <br />- How we use your personal data and for what purposes
                  <br />- Transfer of personal data
                  <br />- Cookies
                  <br />- Data security
                  <br />- Data retention
                  <br />- Business transitions
                  <br />- Change in privacy policy
                  <br />- Grievance Officer
                </li>
              </ol>
              <h4>THE DATA WE COLLECT ABOUT YOU</h4>
              <ol>
                <li>
                  Personal data, or personal information, means any information
                  about an individual from which that person can be identified.
                  It does not include data where the identity has been removed –
                  for example, anonymous data.
                </li>
                <li>
                  We collect, use, and store data about you to provide you with
                  or in connection with the Services, that you may choose to
                  provide to us. Such personal data includes:
                  <br />
                  Identity data - data pertaining to your identity and related
                  data, such as your first and last name, username or similar
                  identifiers, gender, title, passwords, feedback, survey
                  responses, etc.;
                  <br />
                  Contact data - including email addresses, phone numbers,
                  social media information, etc.;
                  <br />
                  KYC data – including documents issued by the government such
                  as Aadhaar, PAN Card, Voter ID, Ration Card, etc;
                  <br />
                  Financial data – transaction data including details of
                  Services you have availed and details of payments you have
                  made through the Website;
                  <br />
                  Device data – including IP addresses, browser types and
                  versions, time zone settings and locations, operating systems,
                  device information, Wi-Fi and mobile networks and other
                  technology on the devices you use to access the platform;
                  <br />
                  Usage data - including information about how you use our
                  Services;
                </li>
                <li>
                  {" "}
                  We also collect, use, and share aggregated data such as
                  statistical or analytical data for any purpose. Aggregated
                  data could be derived from your personal data but is not
                  considered personal data under applicable laws. For example,
                  we may aggregate your usage data to calculate the percentage
                  of users accessing a specific feature of the Services.
                </li>
                <li>
                  We do not collect, use, store or transfer any personal data
                  which form the contents of the documents accessed by the
                  Website to provide you with or in connection with the
                  Services.
                </li>
                <li>
                  We do not collect any special categories of personal data
                  about you (this includes details about your race or ethnicity,
                  religious or philosophical beliefs, sex life, sexual
                  orientation, political opinions, trade union membership,
                  information about your health, and genetic and biometric
                  data). Nor do we collect any information about criminal
                  convictions and offences.
                </li>
                <li>
                  Where we need to collect personal data by law, or under the
                  terms of the arrangement we have with you, and if you fail to
                  provide that data as and when requested by us, we may not be
                  able to perform our obligations under the arrangement we have
                  with you or are trying to enter into with you (for example, to
                  provide you with features of the Services). In this case, we
                  may have to cancel or limit your access to the Services, but
                  we will notify you if this is the case at the time.
                </li>
              </ol>
              <h4>HOW YOUR PERSONAL DATA IS COLLECTED</h4>
              <ol>
                <li>
                  We have taken all reasonable steps to ensure that the
                  information on the Website is authentic.
                </li>
                <li>
                  You agree that the information and personal data you provide
                  us with are true, correct, and accurate. We shall not be
                  liable for any incorrect or false information or personal data
                  that you might provide
                </li>
                <li>
                  You may review the information and personal data that you have
                  provided during your use of the Website and choose to correct
                  or modify the same. You may do so by writing to us or our
                  Grievance Officer at the address provided in Section 9 of this
                  Policy.
                </li>
              </ol>
              <h4>HOW WE USE YOUR PERSONAL DATA AND FOR WHAT PURPOSES</h4>
              <ol>
                <li>
                  We will only use your personal data as the law allows us to.
                  Most commonly, we will use your personal data to provide you
                  with the Services, or where we need to comply with a legal
                  obligation.
                </li>
                <li>
                  You are aware that by using our Services on the Website, you
                  authorise us, our associate partners, and affiliates to
                  contact you via email, phone, or otherwise. This is to ensure
                  that you are aware of all the features of the Services
                </li>
                <li>
                  You are aware that any and all information pertaining to you,
                  whether or not you directly provide it to us (via the Services
                  or otherwise), including but not limited to personal
                  correspondence such as emails, instructions from you, etc.,
                  may be collected, compiled and shared by us in order to render
                  Services to you and you expressly authorise us to do so. This
                  may include but not be limited to storage providers, data
                  analytics providers, consultants, lawyers, and auditors. We
                  may also share this information with our subsidiaries,
                  affiliates or any of their holding companies.
                </li>
                <li>
                  In general, we will not disclose personal data except in
                  accordance with the following purposes/activities, undertaken
                  without direct human supervision or control:
                  <br />
                  To register you as a user;
                  <br />
                  To deliver Services;
                  <br />
                  To manage our relationship with you including notifying you of
                  changes to any Services;
                  <br />
                  To deliver content to you;
                  <br />
                  To monitor trends so we can improve the Services;
                  <br />
                  To perform our obligations that arise out of the arrangement
                  we are about to enter or have entered with you;
                  <br />
                  To enforce the terms of the arrangement we have with you;
                  <br />
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests; and
                </li>
                <li>
                  {" "}
                  We will process personal data under direct human supervision
                  or control only if:
                  <br />
                  Specific affirmative consent has been obtained to access
                  certain messages;
                  <br />
                  It is necessary to administer and protect our business and the
                  Services including troubleshooting, data analysis and system
                  testing;
                  <br />
                  It is necessary to comply with a legal or regulatory
                  obligation; or
                  <br />
                  Such use or processing otherwise is limited to internal
                  operations.
                </li>
                <li>
                  {" "}
                  You authorise us to send you electronic alerts and messages
                  for details pertaining to registration on the Website as a
                  user and requirements arising out of the provision of
                  Services.
                </li>
              </ol>
              <h4>DATA SECURITY</h4>
              <ol>
                <li>
                  {" "}
                  We implement certain security measures including encryption
                  and firewalls to protect your personal information from
                  unauthorised access and such security measures are in
                  compliance with the security practices and procedures as
                  prescribed under the Information Technology Act, 2000 and the
                  applicable rules (Reasonable Security Practices and Procedures
                  and Sensitive Personal Data or Information Rules, 2011).
                  However, you agree and acknowledge that the above-mentioned
                  measures do not guarantee absolute protection to the personal
                  information and by accessing the Services, you agree to assume
                  all risks associated with disclosure of personal information
                  arising due to breach of firewalls and secure server software.
                </li>
                <li>
                  {" "}
                  Where we have given you (or where you have chosen) a password
                  that enables you to access certain parts of the Services, you
                  are responsible for keeping this password confidential. We ask
                  you not to share the password with anyone.
                </li>
                <li>
                  {" "}
                  We will comply with the requirements under the Information
                  Technology Act, 2000 and the rules made thereunder in the
                  event of a data or security risk.
                </li>
              </ol>
              <h4>DATA RETENTION</h4>
              <p>
                You are aware that your personal data will continue to be stored
                and retained by us for a reasonable period after termination of
                your use of our Services on the Website.
              </p>
              <h4>BUSINESS TRANSITIONS</h4>
              <p>
                You are aware that in the event we go through a business
                transition, such as a merger, acquisition by another
                organisation, or sale of all or a portion of our assets, your
                personal data might be among the assets transferred.
              </p>
              <h4>CHANGE IN PRIVACY POLICY</h4>
              <p>
                We keep our Policy under regular review and may amend this
                Policy from time to time, at our sole discretion.
              </p>
              <p>
                The terms of this Policy may change and if it does, these
                changes will be posted on this page and, where appropriate,
                notified to you by email. The new Policy may be displayed
                on-screen and you may be required to read and accept the changes
                to continue your use of the Services.
              </p>
              <h4>GRIEVANCE OFFICER</h4>
              <p>
                You may contact us at grievances@decentro.tech with any enquiry
                relating to this Policy or an enquiry relating to your personal
                information (including reviewing or updating). You can also do
                so by writing to our Grievance Officer, established in
                accordance with the Information Technology Act, 2000 and rules
                made thereunder, at the address provided below:
                <br />
                <br />
                <Nodal TSP={true} PA={true} />
              </p>
            </div>
          </div>
          <div className="scroll-to-top-btn">
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
