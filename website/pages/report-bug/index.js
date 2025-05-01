import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";
import requests from "../../requests";
import TextAndButtonBannerTransparent from "../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import axios from "axios";

const ReportBug = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const textAndButtonBannerData = {
    text: "",
    ctaDescription: "",
    ctaButtonText: "Report a Bug",
    ctaButtonLink: requests.BUG_REPORT_FORM,
  };

  // Hall of Fame Data fetch Strapi
  const [hallOfFameData, setHallofFameData] = useState([]);
  useEffect(() => {
    axios
      .get(
        requests.STRAPI_STAGING_API_IP_BASE_URL +
        requests.STRAPI_DECENTRO_HALL_OF_FAME +
        requests.STRAPI_POPULATE_ALL_QUERY
      )
      .then((response) => {
        setHallofFameData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Report a Bug | Decentro Bug Bounty Program</title>
        <link rel="canonical" href="https://decentro.tech/report-bug" />
        <link
          rel="alternate"
          href="https://decentro.tech/report-bug"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Secure your financial data with Decentro. Report bugs responsibly, contribute to our security, and be acknowledged in our 'Hall of Fame.' Be a part of our Bug Bounty Program today."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Report a Bug | Decentro Bug Bounty Program"
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
          <Link href="/privacy/" activeclassname="active">
            Privacy Policy
          </Link>
          <Link href="/agreement/" activeclassname="active">
            Master Services Agreement (PA)
          </Link>
          <Link
            href="/report-bug"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Report A Bug
          </Link>
        </div>
        <div className="document-content">
          <div className="terms-and-conditions">
            <h2>Report a Bug</h2>
            <p>Updated on Nov 24, 2023</p>
            <div className="content">
              <h3>
                <strong>Your Security is Our Priority</strong>
              </h3>
              <p>
                At Decentro, we take the security of your financial data and
                personal information seriously. We employ robust security
                measures to protect your assets and ensure a safe and secure
                environment for all your financial transactions.
              </p>
              <p>
                We work diligently to stay ahead of emerging threats and
                vulnerabilities. However, we also recognize the importance of a
                collective community effort to maintain the highest level of
                security. In case any security researcher or a member of the
                general public identifies any vulnerability in our systems, and
                responsibly shares the details of it with us, we appreciate
                their contribution, work closely with them to address such
                vulnerabilities with urgency, and if they want, publicly
                acknowledge their contribution. Decentro reserves all the rights
                to validate whether the reports are valid or not on the basis of
                the impact of the vulnerability.
              </p>
              <p>
                Your contribution to our security is valued and plays a vital
                role in the continuous improvement of our services. Thank you
                for helping us maintain a safe and secure financial ecosystem.
              </p>
              <br />
              <h3>
                <strong>To be eligible for recognition, you must</strong>
              </h3>
              <ol>
                <li>Be the first person to disclose the bug responsibly.</li>
                <li>
                  Report a bug that could compromise our users’ private data,
                  circumvent the system’s protections, or enable access to a
                  system within our infrastructure.
                </li>
              </ol>
              <br />
              <h3>
                <strong>Scope</strong>
              </h3>
              <p>
                Decentro -{" "}
                <a
                  href="https://decentro.tech"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Website Link
                </a>
              </p>
              <br />
              <h3>
                <strong>Out of Scope</strong>
              </h3>
              <ol
                style={{
                  listStyleType: "decimal",
                }}
              >
                <li>authmanager.decentro.tech</li>
                <li>base.decentro.tech</li>
                <li>dashboard.decentro.tech</li>
                <li>docs.decentro.tech</li>
                <li>in.decentro.tech</li>
                <li>monitoring.decentro.tech</li>
                <li>partner.decentro.tech</li>
                <li>ping.decentro.tech</li>
                <li>postman.decentro.tech</li>
                <li>rule.decentro.tech</li>
                <li>rule-engine.decentro.tech</li>
                <li>sea.decentro.tech</li>
                <li>sentry.decentro.tech</li>
                <li>strapi.decentro.tech</li>
                <li>utils.decentro.tech</li>
              </ol>
              <br />
              <h3>
                <strong>Reporting Exclusions</strong>
              </h3>
              <ol
                style={{
                  listStyleType: "decimal",
                }}
              >
                <li>Vulnerabilities found through automated testing</li>
                <li>“Scanner output” or scanner-generated reports</li>
                <li>
                  Publicly released CVE’s or 0-days in internet software within
                  90 days of their disclosure
                </li>
                <li>
                  “Advisory” or “Informational” reports that do not include any
                  Decentro testing or context
                </li>
                <li>
                  Vulnerabilities requiring MITM or physical access to the
                  victim’s unlocked device.
                </li>
                <li>
                  Denial of Service attacks
                  <ol
                    style={{
                      listStyleType: "decimal",
                    }}
                  >
                    <li>SPF and DKIM issues</li>
                    <li>Content injection</li>
                    <li>Hyperlink injection in emails</li>
                    <li>IDN homograph attacks</li>
                    <li>RTL Ambiguity</li>
                  </ol>
                </li>
                <li>Content Spoofing</li>
                <li>Vulnerabilities relating to Password Policy</li>
                <li>Full-Path Disclosure on any property</li>
                <li>Version number information disclosure</li>
                <li>
                  Third-party applications on the Decentro Application directory
                  (identified by the existence of a “Report this app” link on
                  the app’s page). Please report vulnerabilities with these
                  services to the creator of that specific application.
                </li>
                <li>
                  Clickjacking on pre-authenticated pages, or the non-existence
                  of X-Frame-Options, or other non-exploitable clickjacking
                  vulnerabilities
                </li>
                <li>
                  CSRF-able actions that do not require authentication (or a
                  session) to exploit
                </li>
                <li>
                  Reports related to the following security-related headers
                </li>
                <li>Strict Transport Security (HSTS)</li>
                <li>
                  XSS mitigation headers (X-Content-Type and X-XSS-Protection)
                </li>
                <li>X-Content-Type-Options</li>
                <li>
                  Content Security Policy (CSP) settings (excluding nosniff in
                  an exploitable scenario)
                </li>
                <li>Bugs that do not represent any security risk</li>
                <li>
                  Security bugs in third-party applications or services built on
                  the Decentro API – please report them to the third party that
                  built the application or service
                </li>
                <li>
                  Security bugs in software related to an acquisition for a
                  period of 90 days following any public announcement
                </li>
                <li>HTTP TRACE or OPTIONS methods enabled</li>
                <li>
                  Non-sensitive (i.e., non-session) cookies missing the Secure
                  or HttpOnly flags
                </li>
                <li>Tap jacking</li>
                <li>
                  Mobile client issues require a rooted device and/or outdated
                  OS version or SSL pinning issues.
                </li>
                <li>Subdomain takeovers without supporting evidence</li>
                <li>Missing best practices in SSL/TLS configuration.</li>
                <li>
                  The Vulnerabilities that cannot be used to exploit other users
                  or Decentro — e.g., self-XSS or having a user paste JavaScript
                  into the browser console.
                </li>
                <li>
                  Open ports without an accompanying proof-of-concept
                  demonstrating vulnerability
                </li>
              </ol>
              <br />
              <h3>
                <strong>Rules of Engagement</strong>
              </h3>

              <p>
                At Decentro, we value your assistance and dedicating time in
                maintaining the security and functionality of our platform. If
                you&apos;ve discovered a bug or vulnerability, we appreciate
                your responsible disclosure and adherence to these rules of
                engagement:
              </p>

              <ol
                style={{
                  listStyleType: "decimal",
                }}
              >
                <li>
                  <strong>Verify the Issue:</strong> Before reporting a bug,
                  please ensure that local configurations, browser settings, or
                  user errors do not cause the issue. Verify that it is a
                  genuine platform bug.
                </li>
                <li>
                  <strong>Confidentiality:</strong> If you discover a security
                  vulnerability, ensure it remains confidential. Do not disclose
                  it publicly or to other individuals.
                </li>
                <li>
                  <strong>Report Promptly:</strong> Please report the bug or
                  vulnerability to us as soon as possible after discovery. This
                  allows us to address it quickly.
                </li>
                <li>
                  <strong>Responsible Disclosure:</strong> Follow responsible
                  disclosure practices. Allow us a reasonable amount of time to
                  fix the issue before disclosing it to others.
                </li>
                <li>
                  <strong>Provide Details:</strong> When reporting a bug, be
                  thorough in your description. Include details such as the
                  steps to reproduce the issue, the environment (e.g., browser
                  and device), and any relevant screenshots or error messages.
                </li>
                <li>
                  <strong>Report to the Right Channel:</strong> Use the
                  designated bug reporting channels provided by Decentro for
                  reporting issues. Do not contact individual employees directly
                  for security-related matters.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Your bug reporting should
                  be in compliance with all applicable laws and regulations.
                </li>
              </ol>
              <br />
              <h3>
                <strong>Types of Recognition</strong>
              </h3>
              <p>
                We do not have a bounty/cash reward program for such
                disclosures, but we express our gratitude for your contribution
                in different ways. For genuine ethical disclosures,
              </p>
              <ol
                style={{
                  listStyleType: "decimal",
                }}
              >
                <li>
                  We provide exclusive Decentro goodies as a token of
                  appreciation.
                </li>
                <li>
                  We would also be glad to publicly acknowledge your
                  contribution in the “Hall of Fame” section on our website. Of
                  course, this will be done if you want a public
                  acknowledgement.
                </li>
              </ol>
              <br />
              <h3>
                <strong>Reporting a Security Vulnerability</strong>
              </h3>
              <p>
                If you have discovered a security vulnerability or a bug within
                our platform, we encourage you to report it immediately. Your
                responsible disclosure of security issues helps us to address
                and rectify them promptly.
              </p>
              <br />
              <h3>
                <strong>Reporting Process:</strong>
              </h3>
              <p>
                If you happen to have identified a vulnerability on any of our
                web or mobile app properties, we request you to follow the steps
                outlined below:
              </p>
              <ol
                style={{
                  listStyleType: "decimal",
                }}
              >
                <li>
                  Please submit the vulnerability report form with the necessary
                  details to recreate the vulnerability scenario. This may
                  include screenshots, videos or simple text instructions.
                </li>
                <li>
                  If possible, share with us your contact details (phone
                  number), so that our security team can reach out to you if
                  further inputs are needed to identify or close the problem.
                </li>
                <li>
                  If the identified vulnerability can be used to potentially
                  extract information of our customers or systems, or impair our
                  system’s ability to function normally, then please refrain
                  from actually exploiting such a vulnerability. This is
                  absolutely necessary for us to consider your disclosure a
                  responsible one.
                </li>
                <li>
                  While we appreciate the inputs of White-Hat hackers, we may
                  take legal recourse if the identified vulnerabilities are
                  exploited for unlawful gains or getting access to restricted
                  customer or system information or impairing our systems.
                </li>
                <li>
                  Bug Bounty Program: <ul>OpenBugBounty</ul>
                </li>
              </ol>
              <h3>
                <strong>Responsible Disclosure Guidelines</strong>
              </h3>
              <p>
                We expect you to adhere to the following guidelines when
                reporting a security vulnerability:
              </p>
              <ol
                style={{
                  listStyleType: "decimal",
                }}
              >
                <li>
                  Act Ethically: Do not exploit the vulnerability for personal
                  gain, and do not disclose the issue publicly until it has been
                  resolved.
                </li>
                <li>
                  Provide Sufficient Information: Include enough details in your
                  report to help our security team understand and reproduce the
                  issue.
                </li>
                <li>
                  Respect User Privacy: Do not access, modify, or delete user
                  data. Only interact with your own accounts for testing.
                </li>
                <li>
                  No Malicious Actions: Do not perform any actions that may
                  disrupt the availability or integrity of our services.
                </li>
                <li>
                  Legal Compliance: Ensure your actions comply with all
                  applicable laws and regulations.
                </li>
              </ol>
              <br />
              <h3>
                <strong>Hall of Fame</strong>
              </h3>
              <p>
                Decentro thanks & congratulates the following people for finding
                & responsibly disclosing security vulnerabilities in our
                environment. We are grateful for their contribution & efforts
                towards the security of Decentro
              </p>
              <ol>
                {hallOfFameData.map((item, index) => {
                  return (
                    <li className="hall-of-fame" key={index}>
                      <a href={item.attributes.referenceLink} target="_blank">
                        {item.attributes.fullName}
                      </a>
                    </li>
                  );
                })}
              </ol>
              <br />
              <p>
                Join our Bug Bounty program and become a part of our security
                journey.
              </p>
            </div>
            <div className="form-button">
              <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
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

export default ReportBug;
