import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";
import styles from "../../../styles/page-styles-sg/agreement-style/agreement-style.module.scss";

const PartyDetailsTable = () => {
  const partyDetailsHtml = `
    <table>
      <tr>
        <th>Party</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Service Provider</td>
        <td>
          <p>
            Address: DECFIN PTE LTD. 105 CECIL STREET, #07-02,
            THE OCTAGON, SINGAPORE (069534)
          </p>
          <p>Attention: Rohit Taneja, CEO</p>
          <p>Email: admin@decentro.tech</p>
        </td>
      </tr>
      <tr>
        <td>Customer</td>
        <td>
          <p>
            Address: <strong>[__]</strong>
          </p>
          <p>
            Attention: <strong>[__]</strong>
          </p>
          <p>
            Email: <strong>[__]</strong>
          </p>
        </td>
      </tr>
    </table>
  `;

  return <div dangerouslySetInnerHTML={{ __html: partyDetailsHtml }} />;
};

const ServiceDetailsTable = () => {
  const serviceDetailsHtml = `
    <table>
      <tr>
        <td>Description of the Services</td>
        <td>
          <p>
            The Service Provider will facilitate the process of
            creation and management of Virtual Accounts in real
            time by providing access to the Virtual Account APIs
            via the Customer Account created on the Platform.
          </p>
          <p>
            The Service provider will facilitate the
            disbursement and or recollection of payments to
            and/from the End-Customers by providing access to
            the Payout and Reconciliation APIs via the Customer
            Account created on the Platform.
          </p>
        </td>
      </tr>
      <tr>
        <td>Term and Termination</td>
        <td>
          <p>
            The SOW shall be effective for an initial period of
            1 (one) year (“<strong>Initial Term</strong>”). In
            the event either Party has not delivered a notice of
            termination in writing to the other Party at least
            30 (thirty) days before the expiry of the Initial
            Term, this SOW shall be automatically extended for a
            subsequent period of one year.
          </p>
          <p>
            The Service Provider shall have the right to
            terminate this SOW by providing a prior written
            notice of 10 (Ten) days, wherever feasible, to the
            Customer.
          </p>
        </td>
      </tr>
      <!-- Add other rows here -->
    </table>
  `;

  return <div dangerouslySetInnerHTML={{ __html: serviceDetailsHtml }} />;
};

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
        <title>
          MASTER SERVICES AGREEMENT | API Banking Platform | Decentro
        </title>
        <link rel="canonical" href="https://decentro.tech/global/agreement/" />
        <link
          rel="alternate"
          href="https://decentro.tech/global/agreement"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="MASTER SERVICES AGREEMENT | API Banking Platform | Decentro"
        />
        <meta
          name="keywords"
          content="agreement, master services agreement, decentro"
        />
        <meta
          property="og:title"
          content="MASTER SERVICES AGREEMENT | API Banking Platform | Decentro"
        />
        <meta property="og:image" content="./images/banner.svg" />
      </Head>
      <div className={styles["documents-container"]}>
        <div className={styles["document-type-list"]}>
          <Link href="/global/terms/" activeclassname="active">
            Terms & Conditions
          </Link>
          <Link href="/global/privacy/" activeclassname="active">
            Privacy Policy
          </Link>
          <Link href="/global/grievance/" activeclassname="active">
            Grievances
          </Link>
          <Link
            href="/global/agreement/"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Master Services Agreement
          </Link>
        </div>
        <div className={styles["document-content"]}>
          <div className={styles["master-services-agreement"]}>
            <h2>Master Services Agreement</h2>
            <p>Updated on Dec 29, 2022</p>
            <div className={styles["content"]}>
              <p>
                This Master Services Agreement (<strong>“Agreement”</strong>) is
                entered into at [__] on the [__] day of [Month], [Year] (
                <strong>“Effective Date”</strong>) between:
              </p>
              <p>
                <strong>Between</strong>
              </p>
              <p>
                <strong>DECFIN PTE LTD</strong>, a company incorporated under
                the laws of Singapore, having its registered office at{" "}
                <strong>
                  105 CECIL STREET, #07-02, THE OCTAGON, SINGAPORE (069534)
                </strong>{" "}
                (hereinafter referred to as the{" "}
                <strong>“Service Provider”</strong> which expression shall
                unless repugnant to the context or meaning thereof mean and
                include their respective heirs, executors, administrators,
                Affiliates and assigns);
              </p>
              <p>
                <strong>And</strong>
              </p>
              <p>
                <strong>[__]</strong>, a company incorporated under the
                Companies Act, [1967] and having its registered office at{" "}
                <strong>[__]</strong> (“<strong>Customer</strong>”), which
                expression shall, unless it be repugnant to the subject or
                context thereof, include its successors, Affiliates and
                assigns), of the other part.
              </p>
              <p>
                The Service Provider and the Customer are individually referred
                to as a <strong>“Party”</strong> and collectively as{" "}
                <strong>“Parties”</strong>.
              </p>
              <p>
                <strong>WHEREAS:</strong>
              </p>
              <ol type="A" className={styles["order-level-1"]}>
                <li>
                  The Service provider is a financial services technology
                  company that owns and operates a technology platform known as
                  ‘Decentro’ (“<strong>Platform</strong>”) and has developed web
                  applications and application program interfaces for
                  facilitating financial services.
                </li>
                <li>
                  The Customer is in the business of [Business Description] (“
                  <strong>Business Operations</strong>”).
                </li>
                <li>
                  The Customer is desirous of appointing the Service Provider
                  for the purpose of availing the Services (defined below) (“
                  <strong>Purpose</strong>”).
                </li>
                <li>
                  In furtherance of the Purpose, the Service Provider has agreed
                  to enter into this Agreement with the Customer on such terms
                  and conditions, as detailed out herein. It is hereby agreed to
                  by and between the Parties as follows:
                </li>
              </ol>
              <ol className={styles["order-level-11"]}>
                <li>
                  <strong>DEFINITIONS AND INTERPRETATION</strong>
                  <ol className={styles["order-level-2"]}>
                    <li>
                      In this Agreement, the following words have the meanings
                      set opposite them unless the context indicates otherwise –
                    </li>
                    <ol className={styles["order-level-3"]}>
                      <li>
                        <strong>“Access Keys”</strong> shall mean any
                        confidential or secret keys, including developer ID,
                        certificate ID, application ID, username and/or password
                        that shall be required by the Customer to access the
                        Services in a staging or production environment.
                      </li>
                      <li>
                        <strong>“Affiliate”</strong> means, in respect of any
                        company, any company or Person who (a) directly or
                        indirectly Controls, is Controlled by or is under the
                        Control of, the first-mentioned company or (b) is deemed
                        under Applicable Law to be a related corporation of the
                        first-mentioned company.
                      </li>
                      <li>
                        <strong>“API”</strong> or{" "}
                        <strong>“Application Program Interface”</strong> shall
                        mean (i) those application program interfaces that are
                        made available by the Service Provider to the Customer,
                        under the terms of this Agreement and are more
                        specifically detailed in the SOW.
                      </li>
                      <li>
                        <strong>“Applicable Laws”</strong> shall mean any
                        statute, law, regulation, ordinance, rule, judgment,
                        order, protocols, notification, circular, decree,
                        bye-law, approval, government resolution, order,
                        directive, guideline, policy, requirement, or other
                        governmental restriction or any similar form of decision
                        of, or determination by, or any interpretation or
                        adjudication having the force of law of any of the
                        foregoing, by any government authority having
                        jurisdiction over the matter in question. For clarity,
                        any reference to Applicable Law shall include laws as
                        may from time to time be enacted, amended, supplemented,
                        or re-enacted.
                      </li>
                      <li>
                        <strong>“Authorised Users”</strong> shall mean those
                        employees, agents and independent contractors of the
                        Customer who are authorised by the Customer to use the
                        Services and the Documentation.
                      </li>
                      <li>
                        <strong>“Services”</strong> refers to (i) access to the
                        APIs and the Platform that enables the Customer to
                        access specific internet-accessible services identified
                        in each SOW and (ii) any other related service availed
                        under or pursuant to this Agreement.
                      </li>
                      <li>
                        <strong>“Customer Account”</strong> shall mean the
                        account created with the Service Provider in order to
                        enable the Customer to access the Services.
                      </li>
                      <li>
                        <strong>“Confidential Information”</strong> means any
                        and all proprietary or confidential data or information
                        relating to the Disclosing Party, disclosed (directly or
                        indirectly) to the Recipient, including but not limited
                        to, the terms and conditions of this Agreement and/or
                        any and all financial, technical, non-technical
                        information, data, business operations, future products,
                        on-going research, or business, sales, subscribers,
                        suppliers, clients, employees, ideas and creative works
                        belonging to the Disclosing Party (regardless of whether
                        such information is protectable under copyright, patent
                        or trademark and/or trade secret doctrine) including but
                        not limited to copyright, trade secret and proprietary
                        information, data, techniques, business forecasts,
                        program formats, projects, sales and marketing plans,
                        future development, personnel information, whether in
                        oral, written, graphic or electronic form, and whether
                        designated as confidential or not. For the sake of
                        clarity, Confidential Information shall include Access
                        Keys and Documentation. However, Confidential
                        Information shall not include the following:
                        <ol className={styles["order-level-4"]}>
                          <li>
                            Confidential Information which is now in or
                            hereafter comes into the public domain otherwise
                            than as a result of a breach of the confidentiality
                            obligations in this Agreement;
                          </li>
                          <li>
                            Confidential Information which, before any
                            negotiations or discussions leading to this
                            Agreement, were already known by the Recipient and
                            was obtained or acquired in circumstances under
                            which the Recipient was not bound by any form of
                            confidentiality obligation;
                          </li>
                          <li>
                            Confidential Information which is required by law or
                            regulation to be disclosed to any person who is
                            authorised by law or regulation to receive the same
                            (after consultation, if practicable, with the
                            Disclosing Party to limit disclosure to such
                            authorised person to the extent necessary).
                          </li>
                        </ol>
                      </li>
                      <li>
                        <strong>“Control”</strong> shall have the meaning
                        assigned to it in the Companies Act, of Singapore.
                      </li>
                      <li>
                        <strong>“Documentation”</strong> refers to the
                        operating, user or technical manuals and all other
                        related materials provided by the Service Provider to
                        the Customer at no additional cost (whether in printed
                        or electronic form) to enable personnel of the Customer
                        to use, understand the operations of the Services
                        including technical documentation, if any.
                      </li>
                      <li>
                        <strong>“Downtime”</strong> shall mean the time period
                        when the Services are unavailable.
                      </li>
                      <li>
                        <strong>“End-Customer”</strong> sshall mean the
                        consumers of the Customer’s products or services.
                      </li>
                      <li>
                        <strong>“Governmental Authority”</strong> shall mean any
                        national governmental authority, statutory authority,
                        regulatory authority, government department, agency,
                        commission, board, rule or regulation making entity or
                        authority having or purporting to have jurisdiction over
                        any Party, or other subdivision thereof to the extent
                        that the rules, regulations, standards, requirements,
                        procedures, or orders of such authority, body, or
                        organisation have the force of any Applicable Law or any
                        court or tribunal having jurisdiction, including but not
                        limited to the Monetary Authority of Singapore.
                      </li>
                      <li>
                        <strong>“Intellectual Property”</strong> includes all
                        forms of intellectual property rights subsisting under
                        any law or equity and all analogous rights subsisting
                        under the laws of all jurisdictions and shall include
                        any product or process of the human intellect whether
                        registerable or non-registerable, including inter alia,
                        patents, trademarks, copyrights, discoveries,
                        inventions, permits or derivative works of the same
                        expression or literary creation, unique name, trade
                        secret (including ideas, concepts, research and
                        development, compositions, designs, drawings),
                        presentation, instruction manuals, records, memoranda,
                        database rights (including rights of extraction) and all
                        applications, all service marks, logos and trade names,
                        together with all translations, adaptations,
                        derivations, and combinations thereof, and all
                        applications, registrations, and renewals in connection
                        therewith, etc.
                      </li>
                      <li>
                        <strong>“Intellectual Property Rights”</strong> means
                        all rights, benefits, title or interest in or to any
                        Intellectual Property, anywhere in the world (whether
                        registered or not and including all applications for the
                        same).
                      </li>
                      <li>
                        <strong>“Personal Information”</strong> shall mean all,
                        personal data or information (including any sensitive
                        personal data or information) as defined under the
                        Personal Data Protection Act, 2012 and its subsequent
                        amendments and any other applicable data protection
                        legislation as amended from time to time.
                      </li>
                      <li>
                        <strong>“Scheduled Downtime”</strong> shall mean a
                        planned Downtime whereby the Customer has been informed
                        of the Downtime by the Service Provider to the extent
                        practically reasonable, prior to its occurrence.
                      </li>
                      <li>
                        <strong>“Service Level”</strong> shall mean quantitative
                        levels of performance of the Services as set forth in
                        the relevant SOW.
                      </li>
                      <li>
                        <strong>“Software”</strong> means the object code
                        version of any software to which the Customer is
                        provided access as part of the Services, including any
                        Updates.
                      </li>
                      <li>
                        <strong>“Statement of Work”</strong> or{" "}
                        <strong>“SOW”</strong> means the written statement of
                        work signed by both the Parties from time to time,
                        incorporating details of the Services to be rendered by
                        the Service Provider and the scope thereof, the service
                        levels in respect of the Services to be adhered to the
                        Fees and payment terms and any other additional terms
                        the format of which is set out in Schedule A herein.
                      </li>
                      <li>
                        <strong>“Third-Party Software”</strong> shall mean
                        certain software or components thereof, not developed by
                        the Service Provider, which may consist of open-source
                        software or third-party proprietary software, that is
                        owned by or licensed from a third party and incorporated
                        into the Software.
                      </li>
                      <li>
                        <strong>“Update”</strong> shall mean any bug or error
                        fixes, corrections, patches, updates to the Services or
                        any component thereof and shall exclude Upgrades.
                      </li>
                      <li>
                        <strong>“Upgrade”</strong> shall mean a new version of
                        the existing Software that offers a significant change
                        or improvement over the current version.
                      </li>
                      <li>
                        <strong>“Unscheduled Downtime”</strong> shall mean an
                        unplanned Downtime due to reasons beyond the Service
                        Provider’s control whereby the Service provider is
                        unable to inform the Customer of the same.
                      </li>
                      <li>
                        <strong>“Virus”</strong> shall mean anything or device
                        (including any software, code, file or programme) which
                        may: prevent, impair or otherwise adversely affect the
                        operation of any computer software, hardware or network,
                        any telecommunications service, equipment or network or
                        any other service or device; prevent, impair or
                        otherwise adversely affect access to or the operation of
                        any programme or data, including the reliability of any
                        programme or data (whether by re-arranging, altering or
                        erasing the programme or data in whole or part or
                        otherwise); or adversely affect the user experience,
                        including worms, trojan horses, viruses and other
                        similar things or devices.
                      </li>
                    </ol>
                    <li>
                      <strong>INTERPRETATION</strong>
                    </li>
                    <ol className={styles["order-level-3"]}>
                      <li>
                        Words importing persons or parties shall include firms
                        and corporations and any organisations having legal
                        capacity and words importing the singular include the
                        plural and vice versa.
                      </li>
                      <li>
                        Reference to the words “include” or “including” shall be
                        construed without limitation.
                      </li>
                      <li>
                        Any reference to “writing” shall include printing,
                        typing, facsimile, lithography, transmissions by
                        facsimile or in electronic form (including email) and
                        other means of reproducing words in visible form but
                        shall exclude text messages via mobile phones.
                      </li>
                      <li>
                        References to this Agreement include any Recitals and
                        Annexures to it and references to Clauses, Annexure are
                        to the clauses of, and annexures to, this Agreement.
                        References to paragraphs are to paragraphs of the
                        Annexures.
                      </li>
                      <li>
                        Reference to this Agreement or any other agreement,
                        instrument, or document shall be construed as a
                        reference to this Agreement or such other agreement,
                        instrument, or document as the same may from time to
                        time be amended, varied, supplemented or novated in
                        accordance with the terms of such document.
                      </li>
                      <li>
                        Any reference to books, records or other information
                        means books, records or other information in any form
                        including, without limitation, paper, electronically
                        stored data, magnetic media, film and microfilm.
                      </li>
                      <li>
                        Reference to any statute or statutory provision shall
                        include: (i) any previous legislation or statute
                        relating to that statute or statutory provision to the
                        extent applicable under the relevant Clause or Annexure;
                        (ii) any subordinate legislation, rules and regulations
                        under the specific statute or statutory provision framed
                        from time to time; and (iii) such statute or provision
                        as may be amended, modified, repealed, re-enacted or
                        consolidated.
                      </li>
                      <li>
                        In the event of any inconsistency or conflict between
                        the terms of the Agreement and any SOW, the terms of the
                        Agreement shall take precedence over the relevant SOW,
                        unless expressly stated otherwise in the relevant SOW.
                      </li>
                    </ol>
                  </ol>
                </li>

                <li>
                  <strong>SCOPE OF SERVICES</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    Licenced Use: Subject to the Customer availing the Services,
                    the restrictions set out hereunder and the other terms and
                    conditions of this Agreement, the Service Provider hereby
                    grants to the Customer a non-exclusive, non-transferable,
                    non-sublicensable and revocable licence to use the APIs in
                    respect of the Services availed under the relevant SOW in
                    accordance with the terms of this Agreement (
                    <strong>“Licence”</strong>).
                  </li>
                  <li>
                    The Service Provider shall provide the Services as
                    identified in the relevant SOW to the Customer.
                  </li>
                  <li>
                    Statements of Work:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        The Services to be provided by the Service Provider
                        under this Agreement shall be expressly set forth in the
                        relevant SOW.
                      </li>
                      <li>
                        Each SOW shall specifically identify Services availed by
                        the Customer.
                      </li>
                      <li>Each SOW shall be deemed separate and severable.</li>
                      <li>
                        Each SOW shall be annexed to this Agreement as an
                        Annexure and shall form an integral part of this
                        Agreement.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Documentation and Training: The Service Provider shall
                    provide the Customer with Documentation and training for
                    each Service, as more particularly detailed in the relevant
                    SOW.
                  </li>
                  <li>
                    Support Services: The Service provider shall provide support
                    to the Customer (<strong>“Support Services”</strong>) in
                    accordance with the support levels and procedures set forth
                    in the relevant SOW.
                  </li>
                </ol>
                <li>
                  <strong>PAYMENT</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    The fees for the Services availed (<strong>“Fee”</strong>)
                    shall be payable to the Service Provider in accordance with
                    and as more specifically defined in the relevant of this
                    Agreement.
                  </li>
                </ol>
                <li>
                  <strong>
                    REPRESENTATIONS AND WARRANTIES BY THE SERVICE PROVIDER
                  </strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    For the Term, each Party represents, warrants and covenants
                    that:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        it has the full right and authority and all necessary
                        licenses, permits and consents to enter into, execute,
                        and perform its obligations under this Agreement;
                      </li>
                      <li>
                        it will comply with all Applicable Laws and regulations
                        in providing and using the Services and shall inform the
                        other Party as soon as it becomes aware of any changes
                        in Applicable Law that may affect the performance of its
                        obligations under this Agreement;
                      </li>
                      <li>
                        it has not entered into any other commitments or
                        agreements which may be in breach of the terms of this
                        Agreement or its obligations hereunder;
                      </li>
                      <li>
                        that there are no legal, quasi-legal, administrative,
                        arbitration, mediation, conciliation or other
                        proceedings, claims, actions, governmental
                        investigations, orders, judgments, or decrees of any
                        nature made, existing, or pending or, to the best
                        knowledge of each Party, threatened or anticipated
                        against it which may prejudicially affect the Party’s
                        due performance of or the enforceability of this
                        Agreement; and
                      </li>
                      <li>
                        It will collect and use the Personal Information in
                        accordance with the Applicable Laws.
                      </li>
                      <li>
                        This Agreement is being entered into on
                        principal-to-principal basis and either party is not and
                        shall not be treated or deemed either as an agent or an
                        employee of the company. The Parties shall not use any
                        deceptive or false or misleading representation while
                        providing any services under this agreement.
                      </li>
                      <li>
                        Each Party understands and agrees that it shall be
                        responsible for its own compliance with Applicable Laws
                        (including such laws and regulations brought to one
                        Party&apos;s attention by the other)6. The Parties agree
                        that they shall provide information and assistance to
                        each other upon reasonable request to enable the other
                        Party to comply with such laws and regulations.
                      </li>
                      <li>
                        Each Party agrees that it will perform its duties under
                        this Agreement in accordance with any Applicable Laws in
                        connection with this Agreement.
                      </li>
                    </ol>
                  </li>
                </ol>
                <li>
                  <strong>DISCLAIMERS</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    The Customer acknowledges that the Services provided by the
                    Service Provider are provided on an “as is” basis and
                    expressly subject to the other provisions of this Clause 5.
                  </li>
                  <li>
                    To the fullest extent permissible under Applicable Law,
                    unless otherwise agreed under this Agreement, the Service
                    Provider expressly disclaims all other warranties of any
                    kind, express or implied, with respect to the Services,
                    including warranties of merchantability, compatibility,
                    applicability, usability and appropriateness, fitness for a
                    particular purpose, satisfactory quality, accuracy, and any
                    warranties that may arise out of the course of performance
                    or course of dealing.
                  </li>
                  <li>
                    Notwithstanding any provision to the contrary, to the
                    fullest extent permissible by Applicable Law, the Service
                    Provider, its Affiliates, and its related parties each
                    disclaim all liability towards the Customer for any loss or
                    damage arising out of or due to the Customer’s use of,
                    inability to use, or availability or unavailability of the
                    Services, including any Third Party Software;
                  </li>
                  <li>
                    The Parties agree and acknowledge that the Service
                    Provider’s ability to provide the Services is dependent on
                    third parties, and the Service Provider shall not be liable
                    for any delays, errors, interruptions, inaccuracies,
                    communication failures, or defects with respect to the
                    Services or any consequent loss, or damage that is
                    attributable to such third parties. The Service Provider
                    makes no representations and excludes all warranties and
                    liabilities arising out of or pertaining to such third-party
                    services.
                  </li>
                  <li>
                    The Customer understands that the Service Provider may have
                    Scheduled Downtime for maintenance of the Services. The
                    Customer will be informed to the extent practicable in
                    respect of any Scheduled Downtime, via e-mail. The Service
                    Provider shall not be held liable to the Customer in any
                    manner for such Scheduled or Unscheduled Downtime.
                  </li>
                  <li>
                    Notwithstanding anything to the contrary contained in this
                    Agreement, the Service Provider shall have no liability for
                    a claim of infringement arising out of, or in connection
                    with:
                    <ol className={styles["order-level-3"]}>
                      <li>any Third-Party Software;</li>
                      <li>
                        any portions of the Services that rest on open source
                        software;
                      </li>
                      <li>
                        any modification of the Services by anyone other than
                        the Service Provider
                      </li>
                      <li>
                        the combination of the Services with products or
                        services not provided by the Service Provider, which
                        claim would have been avoided but for such combination;
                      </li>
                      <li>
                        the use of the Services, the APIs or Documentation in a
                        manner not permitted or contemplated hereunder or
                        approved by the Service Provider.
                      </li>
                      <li>
                        the Customer&apos;s use of the Services or Documentation
                        after notice of the alleged or actual infringement from
                        the Service Provider or any appropriate authority.
                      </li>
                    </ol>
                  </li>
                </ol>
                <li>
                  <strong>CUSTOMER OBLIGATIONS</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    The Customer shall at all times comply with all Applicable
                    Laws including but not limited to the laws related to data
                    protection, privacy and transaction and financial data
                    including but not limited to the Personal Data Protection
                    Act, 2012 and its subsequent amendments, and any other
                    Applicable Laws.
                  </li>
                  <li>
                    The Customer shall ensure that the Authorised Users use the
                    Services in accordance with the terms and conditions of this
                    Agreement and shall be responsible for any Authorised
                    User&apos;s breach of this Agreement.
                  </li>
                  <li>
                    The Customer shall not:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        except as may be allowed by any Applicable Law which is
                        incapable of exclusion by agreement between the Parties
                        and except to the extent expressly permitted under this
                        Agreement:
                        <ol className={styles["order-level-4"]}>
                          <li>
                            attempt to copy, modify, duplicate, create
                            derivative works from, frame, mirror, republish,
                            download, display, transmit, or distribute all or
                            any portion of the Software and/or the APIs and/or
                            the Documentation (as applicable) in any form or
                            media or by any means; or
                          </li>
                          <li>
                            attempt to decompile, disassemble, reverse engineer
                            or otherwise reduce to human-perceivable form all or
                            any part of the Software; or
                          </li>
                        </ol>
                      </li>

                      <li>
                        use the API to replicate or attempt to replace the user
                        experience of the Software; or
                      </li>
                      <li>
                        license, sell, rent, lease, transfer, assign,
                        distribute, display, disclose, or otherwise commercially
                        exploit, or otherwise make the Services
                        available/accessible to any third party except the
                        Authorised Users,{" "}
                      </li>
                      <li>
                        attempt to obtain, or assist third parties in obtaining,
                        access to the Services and/or Documentation, other than
                        as provided under this Agreement;
                      </li>
                      <li>
                        share the Access Keys with any third-parties other than
                        the Authorised Users;
                      </li>
                      <li>
                        reproduce any portion of the Services except as
                        expressly permitted herein;
                      </li>
                      <li>
                        use the Services in any unlawful manner or for any
                        fraudulent or malicious activities;
                      </li>
                      <li>
                        breach or otherwise circumvent any security or
                        authentication methods on the Platform;
                      </li>
                      <li>remove any proprietary notices from the Platform;</li>
                      <li>
                        directly or indirectly use the Services to transmit any
                        data or send or upload any material that contains
                        Viruses, Vulnerabilities, trojan horses, worms,
                        time-bombs, keystroke loggers, spyware, adware, or any
                        other harmful programmes or similar computer code
                        designed to adversely affect the operation of any
                        computer software or hardware;
                      </li>
                      <li>
                        use any robot, crawler, other automated device, or
                        manual process on the Platform to monitor or copy any
                        part or the whole of the Services;
                      </li>
                      <li>
                        undertake activities that are in violation of the
                        Applicable Law; or
                      </li>
                      <li>
                        permit or authorize any third party to do any of the
                        foregoing.
                      </li>
                    </ol>
                  </li>
                  <li>
                    The Customer expressly agrees that the Customer shall be
                    solely responsible for maintaining confidentiality of the
                    login credentials for the Customer Account and consents to
                    be liable and accountable for all activities that take place
                    through the Customer Account.
                  </li>
                  <li>
                    The Customer hereby acknowledges and agrees that the APIs,
                    related Documentation and the Services shall be availed by
                    the Customer solely for use within the territorial limits of
                    Singapore and any data procured by the Customer under this
                    Agreement shall be stored only on the servers located in
                    Singapore.
                  </li>
                  <li>
                    The Customer shall notify the Service Provider as soon as it
                    becomes aware of any unauthorised use of the Services by any
                    Person and shall use all endeavours to prevent any
                    unauthorised access to, or use of, the Services and/or the
                    Documentation.
                  </li>
                  <li>
                    The Customer shall solely be responsible and liable:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        for obtaining all requisite approvals and ensure
                        compliance with the Applicable Law. To further clarify,
                        the Customer shall ensure that it obtains consent from
                        each End Customer for any authentications (to be carried
                        by the Company in the due course of providing the
                        Services) to fetch data from the original data base
                        (which may be owned or maintained by third parties). The
                        Service Provider assumes that the Customer has collected
                        valid authorizations or release forms prior to availing
                        the Services. In case the Customer does not furnish the
                        authorizations to the Service Provider at the time of
                        starting the verification, it shall be deemed that the
                        Customer has taken valid authorizations from the End
                        Customers and the Service Provider shall not be liable
                        for the same.
                      </li>
                      <li>
                        for maintaining the Ancillary Software which shall be
                        required to connect to, access or otherwise use the
                        Services, including without limitation, ensuring the
                        integration of the APIs with its systems.
                      </li>
                    </ol>
                  </li>
                  <li>
                    The Customer shall provide the Service Provider a copy of
                    the consent or any other proof evidencing the End Customer’s
                    grant of consent to the extent required under Applicable Law
                    or as and when required by any authority.
                  </li>
                  <li>
                    In the event, if certain data as required by Service
                    Provider, for the purpose of providing the Services, as
                    mentioned under this Agreement, are delayed or provided
                    inaccurately by the Customer, Service Provider will not be
                    responsible for the delay / inability of successfully
                    performing the Services.
                  </li>
                  <li>
                    The Company will be responsible for implementing its
                    responsibilities as per the operations processes as
                    mentioned by the Service Provider.
                  </li>
                  <li>
                    The Customer shall keep and maintain all Personal
                    Information in relation to the End Customer in strict
                    confidence, using such degree of care to ensure that there
                    is no unauthorized access, use or disclosure, without
                    express written consent from the End Customer, unless and to
                    the extent required by Government Authorities or as
                    otherwise, to the extent expressly required, by Applicable
                    Law. Notwithstanding the above, the Customer shall obtain
                    the consent of the End Customer for transfer of Personal
                    Information to the Service Provider.
                  </li>
                  <li>
                    The Customer reserves its right to monitor, assess or
                    suggest or implement or take necessary corrective measures
                    and both Parties shall maintain adequate systems and
                    procedures in place to ensure protection of data/application
                    outsourced.
                  </li>
                  <li>
                    The Customer shall be responsible for redressing the
                    complaints from the End Customer and shall contact the
                    Service Provider if required.
                  </li>
                </ol>
                <li>
                  <strong>INTELLECTUAL PROPERTY AND PROPRIETARY RIGHTS</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    Unless otherwise agreed upon between the Parties in writing,
                    each Party reserves and retains all right, title, and
                    interest to its own Intellectual Property. The Parties shall
                    take all steps required to maintain the validity and
                    enforceability of its rights to its respective Intellectual
                    Property.
                  </li>
                  <li>
                    The Customer shall not violate any proprietary and
                    Intellectual Property Rights of the Service Provider or any
                    third party or the Applicable Laws, including without
                    limitation, confidential relationships, patent, trade
                    secrets, copyright and any other proprietary rights.
                  </li>
                  <li>
                    <strong>Trademarks:</strong> The Customer agrees that* it
                    shall use the Service Provider’s trademarks, marks, and
                    trade names (“<strong>Marks</strong>”), only after obtaining
                    the prior consent of the Service Provider. However, nothing
                    contained herein shall prohibit the Service Provider from
                    using the Marks of the Customer for marketing purposes.
                  </li>
                  <li>
                    Services rendered by the Service Provider is the
                    Intellectual Property of Service Provider and nothing
                    contained in this Agreement shall give any kind of
                    entitlement to the Customer over the usage of such
                    Intellectual Property of Service Provider.
                  </li>
                  <li>
                    Each Party shall own its respective Intellectual Property
                    (“Pre-Existing IP”). Nothing contained under this Agreement
                    shall be construed as a grant of any right, title or
                    interest over the Pre-Existing IP of the Parties to the
                    other Party.
                  </li>
                  <li>
                    Neither Party shall use the patents, copyrights, trademarks,
                    proprietary and/or licensed software, and trade secrets of
                    the other Party in any manner whatsoever without the prior
                    written consent of the other Party.
                  </li>
                  <li>
                    Nothing herein shall constitute an agreement to transfer or
                    license or to grant any copyrights, trademark rights and/or
                    any other Intellectual Property Rights of either Party to
                    the other Party.
                  </li>
                </ol>
                <li>
                  <strong>CONFIDENTIALITY</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    Each Party (“<strong>Recipient</strong>”) undertakes not to
                    use the other Party’s (“
                    <strong>Disclosing Party</strong>”) Confidential Information
                    otherwise than in the exercise and performance of its rights
                    and obligations under this Agreement (“
                    <strong>Permitted Purposes</strong>”).
                  </li>
                  <li>
                    In relation to the Disclosing Party’s Confidential
                    Information, the Recipient shall treat as confidential all
                    Confidential Information of the Disclosing Party supplied
                    under this Agreement. The Recipient shall not divulge any
                    such Confidential Information to any person except to its
                    own employees, sub-contractors, agents, and consultants who
                    need to know it for the Permitted Purposes. The Recipient
                    shall ensure that its employees, sub-contractors, agents,
                    and consultants are aware of, and comply with, this Clause
                    8, and execute appropriate agreements with each such
                    employee, sub-contractor, agent, and consultant that contain
                    obligations detailed in this Clause 8.
                  </li>
                  <li>
                    All Confidential Information (including copies thereof)
                    shall remain the property of the Disclosing Party and shall
                    be returned to the Disclosing Party (or, at the Disclosing
                    Party’s option, certified as destroyed) upon written request
                    of the Disclosing Party and, in any event, upon expiration
                    or termination of this Agreement). Each Party agrees that it
                    shall within 10 (ten) days of written notification return or
                    destroy all documents and tangible items in its possession,
                    which contain any Confidential Information and, if
                    requested, provide a certificate of return or destruction of
                    such Confidential Information.
                  </li>
                  <li>
                    Each Party also agrees to maintain adequate administrative,
                    technical, and physical safeguards to protect the
                    confidentiality of protected information of the Customers.
                    Any breach of security or unlawful disclosure of information
                    of a Customer shall be reported to the Discloser within 3
                    (three) days of the Recipient learning of such breach or
                    disclosure and may be a ground for termination of this
                    Agreement.
                  </li>
                  <li>
                    The Recipient further agrees that it shall not use the
                    Confidential Information to build a competitive product or
                    render competitive services.
                  </li>
                  <li>
                    This Clause 8 shall remain in full force and effect in the
                    event of any termination of this Agreement.
                  </li>
                  <li>
                    Each Party hereby specifically agrees to indemnify and keep
                    the other Party indemnified at all times against all or any
                    consequences arising out of any breach of this undertaking
                    by the other Party and / or its employees and shall
                    immediately reimburse and pay to the other party on demand
                    all damages, loss, costs, expenses or any charges that the
                    Party may suffer, incur or pay in connection therewith.
                  </li>
                  <li>
                    The Parties agree to:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        Take all necessary action to protect the Confidential
                        Information against misuse, loss, destruction, deletion
                        and/or alteration.
                      </li>
                      <li>
                        Not to misuse or permit misuse directly or indirectly,
                        commercially exploit the Confidential Information for
                        economic or other benefit.
                      </li>
                      <li>
                        Not to make or retain any copies or record of any
                        Confidential Information submitted by the Customer other
                        than as may be required for the performance of the
                        Service Provider’s obligation under this Agreement.
                      </li>
                      <li>
                        Notify the Customer promptly of any unauthorized or
                        improper use or disclosure of the Confidential
                        Information.
                      </li>
                    </ol>
                  </li>
                  <li>
                    In the event either Party is directed by a court order or
                    any other regulatory and/or administrative authority to
                    disclose any Confidential Information, such Party shall to
                    the extent commercially reasonable, intimate the other Party
                    within 2 (two) working days from the date of receipt of such
                    direction. Such intimation shall be accompanied by copy of
                    the court order or any direction from the regulatory and/or
                    administrative authority.
                  </li>
                  <li>
                    Upon termination of this Agreement, the Parties shall
                    forthwith return all Confidential Information, records,
                    documents, visiting cards, End Customer information, sales
                    promotion / marketing material, data, information,
                    valuables, software, hardware, marks, any stationary
                    embossed with the marks (Intellectual Property of either
                    Party) etc., including all copies thereof to the requested
                    Party without retaining any such item on the plea of lien,
                    set off or any other reason whatsoever.
                  </li>
                  <li>
                    Return of Confidential Information: All Confidential
                    Information proprietary to a disclosing party shall, where
                    practically possible, be returned to the disclosing party,
                    upon the disclosing party&apos;s request or upon the
                    cancellation, expiration or termination of this Agreement,
                    or shall be properly deleted or disposed off upon notice by
                    the disclosing party. For any Confidential Information which
                    is required to be stored pursuant to any law or regulation,
                    the Parties shall protect such Confidential Information for
                    the time duration so required under the same restrictions
                    imposed as if this Agreement were still in force and effect.
                  </li>
                  <li>
                    Actions in the Event of Unauthorised Access:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        Without prejudice to any other rights that each Party
                        may have, each Party will take appropriate action to
                        address and remedy incidents of unauthorized access to
                        the other Party&apos;s Confidential Information in its
                        possession, including notification to the other Party
                        immediately of any such incident. Such notification
                        shall specify the corrective action taken.
                      </li>
                      <li>
                        Without prejudice to any other rights that each Party
                        may have, in the event of any unauthorised access to
                        Confidential Information, each Party shall take all
                        necessary measures to amend or modify its internal
                        policies or computer systems in order to prevent similar
                        incidents of unauthorised access. The Party shall notify
                        the other Party of such causes and measures after they
                        have been identified or implemented, respectively.
                      </li>
                    </ol>
                  </li>
                </ol>
                <li>
                  <strong>LIMITATION OF LIABILITY</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    In no event shall either Party be liable to the other Party
                    or any third party for any special, indirect, incidental,
                    punitive, exemplary or consequential damages of any kind
                    (including but not limited to loss of business, data,
                    profits, or use or for the cost of procuring substitute
                    products, services or other goods), arising out of or
                    relating to this Agreement, regardless of the fact whether
                    such Party was advised of the possibility of such damage or
                    loss.
                  </li>
                  <li>
                    The Customer will be unlimitedly liable to all the
                    damages/losses including attorney fees and third party
                    claims incurred by the Service Provider for non-compliance
                    of the Applicable Laws including any non-compliance of laws
                    governing the Customer.
                  </li>
                  <li>
                    Notwithstanding anything else provided herein, the Service
                    Provider’s maximum aggregate liability to the Customer or
                    any third party under or arising out of this Agreement will
                    be limited to the aggregate amounts paid by the Customer to
                    the Service Provider in the preceding 3 (three) months or
                    due and owing by the Customer to the Service Provider
                    hereunder.
                  </li>
                </ol>

                <li>
                  <strong>INDEMNITY</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    Each Party hereby indemnifies the other Party/(ies) from and
                    against actual and direct damages, costs and expenses
                    (including legal costs) arising out of the breach of any
                    representations, warranties and or covenants made by it in
                    this Agreement, breach of the Agreement generally or for
                    non-fulfillment of its obligations under this Agreement.
                  </li>
                  <li>
                    Each Party agrees to be solely liable for and will indemnify
                    defend and hold harmless the other party(ies) its officers,
                    directors, employees from and against actual direct costs
                    and expenses arising from out of or in connection with:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        The negligence and / or willful misconduct by it and/or
                        its officers, directors or employees;
                      </li>
                      <li>
                        The infringement or violation of any third party&apos;s
                        copyright patent, trade secret, trademark, intellectual
                        property, intellectual property right in relation to the
                        services.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Each Party agrees to indemnify and hold harmless the other
                    Party against any claims, damages, costs and expenses, on
                    actual basis, arising out of, or in connection with any
                    errors, omissions or any wilful negligence in performing its
                    roles and responsibilities as mentioned in the Agreement.
                  </li>
                </ol>

                <li>
                  <strong>TERM AND TERMINATION</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    <strong>Term:</strong> The term of this Agreement will
                    commence on the Effective Date and continue for so long as a
                    Statement of Work remains in effect (“Term”), unless earlier
                    terminated in accordance with Clause 11.2 herein.
                  </li>
                  <li>
                    <strong>Termination for Breach or Insolvency:</strong> Each
                    Party may terminate this Agreement upon written notice if
                    (a) the other Party ceases to do business in the ordinary
                    course or is insolvent (i.e., unable to pay its debts in the
                    ordinary course as they come due), or is the subject of any
                    liquidation or insolvency proceeding which is not dismissed
                    within ninety (90) days, or makes any assignment for the
                    benefit of creditors, or (b) the other Party breaches any
                    material term of this Agreement and fails to cure such
                    breach within thirty (30) days after written notice thereof.
                  </li>
                  <li>
                    Either Party shall have the right to terminate this
                    Agreement in whole or in part by providing a prior written
                    notice of at least 30 (Thirty) days to the other Party
                    without assigning any reason for the same. However, the
                    above-mentioned termination will not lead to any instance of
                    refund of any Service amount or fees by the Service Provider
                    to the Customer.
                  </li>
                  <li>
                    Either Party may terminate this Agreement if any of the
                    following defaults (if curable) remain uncured after 30
                    (thirty) days of notice thereof by the other Party:
                    <ol className={styles["order-level-3"]}>
                      <li>
                        breach of any terms of this Agreement by the other Party
                        (&quot;Defaulting Party&quot;), including non-payment of
                        charges and advance; or
                      </li>
                      <li>
                        Defaulting Party&apos;s failure to maintain adequate
                        records of its activities as is required under the
                        Agreement or refusal access to such records; or
                      </li>
                      <li>
                        Defaulting Party&apos;s failure to observe agreed
                        service standards or failure to provide services in
                        conformity with the provisions of this Agreement or
                        procedures; or
                      </li>
                      <li>
                        The representations and declarations made by the
                        Defaulting Party before entering into this Agreement and
                        with regard to its performance of services, functions
                        etc. are found to be false and misleading; or
                      </li>
                      <li>
                        Defaulting Party&apos;s charter to do business is
                        suspended in accordance with Applicable Law; or
                      </li>
                      <li>
                        Defaulting party files with aggrieved Party materially
                        false or incorrect reports and on failure to remedy the
                        breach within the period of 30 (thirty) days from the
                        date of receipt of notice notifying the Defaulting Party
                        of such default.
                      </li>
                      <li>
                        In addition to any other rights under this Agreement,
                        the Service Provider will have the right in its sole
                        discretion to suspend the Services upon written notice,
                        wherever feasible, if: the Service Provider, determines
                        or suspects that (a) the Customer’s access to the APIs
                        poses a risk of security breach to the Service Provider,
                        (b) if there is any unauthorised access to the Platform
                        or the APIs, (c) if the Customer is in breach of any
                        Applicable Laws, or (d) if the Customer fails to pay any
                        undisputed fees within thirty (30) days of the
                        applicable due date.
                      </li>
                      <li>
                        <strong>Effect of Termination:</strong> Upon the
                        expiration or termination of this Agreement:
                        <ol className={styles["order-level-3"]}>
                          <li>
                            Each Party will immediately pay to the other all
                            amounts due hereunder;
                          </li>
                          <li>
                            Upon request, each Party will return to the other
                            Party all Confidential Information received from
                            such other Party; and
                          </li>
                          <li>
                            All licenses granted under this Agreement will cease
                            unless expressly stated otherwise;
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
                <li>
                  <strong>GOVERNING LAW AND DISPUTE RESOLUTION</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    The provisions of this Agreement shall be governed by and
                    construed in accordance with Singapore laws.
                  </li>
                  <li>
                    Any dispute arising out of or in connection with the
                    Agreement or other Transaction Document, including any
                    questions regarding its existence, validity or termination,
                    shall be referred to and finally resolved by arbitration in
                    Singapore in accordance with the Rules of the Singapore
                    International Arbitration Centre (SIAC) for the time being
                    in force, which rules are deemed to be incorporated by
                    reference in this Clause 12.2.
                  </li>
                  <li>
                    If any controversies, conflicts, disputes and/or differences
                    (“<strong>Dispute</strong>”) arises between the disputing
                    Parties hereto during the subsistence of this Agreement or
                    thereafter, the disputing Parties shall endeavour to settle
                    such dispute amicably and attempt to resolve the matter.
                  </li>
                  <li>
                    If amicable settlement is not arrived at as above, within 30
                    (thirty) days of the date of Dispute, the Dispute shall be
                    exclusively and finally resolved and settled by arbitration
                    in accordance with Clause 12.2 and either disputing Party
                    may issue a notice of Dispute (“
                    <strong>Notice of Dispute</strong>”) to the other disputing
                    Parties.
                  </li>
                  <li>
                    Within 30 (thirty) days of the issue of a Notice of Dispute,
                    the disputing Parties shall mutually agree on the
                    appointment of a sole arbitrator. If such mutual agreement
                    is not arrived at within the aforesaid 30 (thirty) days’
                    period, the Parties shall appoint such sole arbitrator in
                    accordance with the Rules of the Singapore International
                    Arbitration Centre (SIAC)
                  </li>
                  <li>
                    Such arbitration shall be governed in accordance with Clause
                    12.2. The seat of arbitration shall be SIngapore and the
                    arbitration proceedings shall be conducted in the English
                    language.
                  </li>
                  <li>
                    The award rendered by the arbitrator shall be final and
                    binding on all Parties hereto.
                  </li>
                  <li>
                    Parties hereto agree that their consent for resolution of
                    Disputes through arbitration shall not preclude or restrain
                    either of them from seeking suitable injunctive relief in
                    appropriate circumstances from courts in Singapore.
                  </li>
                  <li>
                    The cost of arbitration shall be borne in the manner and by
                    a Party as determined by the arbitrators. In the meantime,
                    each Party shall bear its own cost for the arbitration which
                    shall be reimbursed as per the directions in the arbitral
                    award.
                  </li>
                </ol>
                <li>
                  <strong>MISCELLANEOUS</strong>
                </li>
                <ol className={styles["order-level-2"]}>
                  <li>
                    <strong>No Partnership:</strong> Nothing in this Agreement
                    is intended to, or shall be deemed to, establish any
                    partnership or joint venture between any of the Parties,
                    constitute any Party the agent of another Party, nor
                    authorise any Party to make or enter into any commitments
                    for or on behalf of any other Party.
                  </li>
                  <li>
                    <strong>Amendment:</strong> Any provision of the Agreement
                    may be amended or waived if, and only if such amendment or
                    waiver is in writing and executed mutually by both Parties.
                  </li>
                  <li>
                    <strong>Waiver:</strong> No failure or delay by any Party in
                    exercising any right, power or privilege under the Agreement
                    may be interpreted as a waiver thereof. The rights and
                    remedies herein provided shall be cumulative and not
                    exclusive of any rights or remedies provided by Applicable
                    Laws.
                  </li>
                  <li>
                    <strong>Notice:</strong> All notices, requests, demands,
                    claims, and other communications (“Notice”) hereunder shall
                    be in writing. Any Notice shall be deemed duly given if
                    emailed or sent by speed post to the addresses below (or at
                    such other address if notified by a Party through a Notice
                    sent to the other Party in this manner). Without prejudice
                    to the foregoing, all Notices shall conclusively be deemed
                    to have been received upon receiving successful transmission
                    report, if sent by post or international overnight courier,
                    7 (Seven) business days from the time of posting, or at the
                    time of delivery, if delivered by hand, or 1 (One) business
                    day from the date of email, if sent by email.
                    {/* <table>
                      <tr>
                        <th>Party</th>
                        <th>Details</th>
                      </tr>
                      <tr>
                        <td>Service Provider</td>
                        <td>
                          <p>
                            Address: DECFIN PTE LTD. 105 CECIL STREET, #07-02,
                            THE OCTAGON, SINGAPORE (069534)
                          </p>
                          <p>Attention: Rohit Taneja, CEO</p>
                          <p>Email: admin@decentro.tech</p>
                        </td>
                      </tr>
                      <tr>
                        <td>Customer</td>
                        <td>
                          <p>
                            Address: <strong>[__]</strong>
                          </p>
                          <p>
                            Attention: <strong>[__]</strong>
                          </p>
                          <p>
                            Email: <strong>[__]</strong>
                          </p>
                        </td>
                      </tr>
                    </table> */}
                    <PartyDetailsTable />
                  </li>
                  <li>
                    <strong>Counterpart:</strong> If the Agreement is signed in
                    counterparts, each counterpart shall be deemed to be an
                    original.
                  </li>
                  <li>
                    <strong>Assignment:</strong> The Customer shall not assign
                    this Agreement without the prior written consent of the
                    Service Provider, which consent may not be unreasonably
                    withheld. Any attempted assignment in violation of this
                    section will be void.
                  </li>
                  <li>
                    <strong>No Third-Party Beneficiaries:</strong> The Parties’
                    statements of fact in this agreement are for their sole
                    benefit and not intended to confer any rights on third
                    parties.
                  </li>
                  <li>
                    <strong>No Unauthorized Representations:</strong> The
                    Customer shall not make any representations or statements of
                    any kind concerning the Services without the Service
                    Provider’s prior written authorization.
                  </li>
                  <li>
                    <strong>Severability:</strong> If a provision of this
                    agreement is held unenforceable by a court of competent
                    jurisdiction, that provision is to be construed either by
                    modifying it to the minimum extent necessary to make it
                    enforceable (if permitted by law) or disregarding it (if
                    not).
                  </li>
                  <li>
                    <strong>Force Majeure:</strong> Neither Party will be deemed
                    in default, nor will it hold the other Party responsible
                    for, any cessation, interruption or delay in performance
                    (except the Customer’s payment obligations) due to causes
                    beyond its reasonable control including, but not limited to:
                    earthquake, flood, fire, storm or other natural disaster,
                    act of God, labour controversy, civil disturbance,
                    disruption of the public markets, war or armed conflict, or
                    the inability to obtain sufficient material, supplies,
                    labour, transportation, power or other essential commodity
                    or service required in the conduct of its business,
                    including internet access, or any change in or the adoption
                    of any law, ordinance, rule, regulation, order, judgment or
                    decree.
                  </li>
                  <li>
                    <strong>Survival:</strong> The following clauses shall
                    survive the termination or expiry of this Agreement: clause
                    3 (Payments), clause 4 (Representations and Warranties),
                    clause 5 (Disclaimers), clause 6 (Customer Obligations),
                    clause 7 (Intellectual Property and Proprietary Rights),
                    clause 8 (Confidentiality), clause 9 (Limitation of
                    liability) and clause 11 (Term and Termination).
                  </li>
                  <li>
                    <strong>Entire Agreement:</strong> This agreement, the SOWs
                    and the Annexures herein constitute the entire understanding
                    between the Parties regarding the subject of this agreement
                    and supersedes all prior agreements, whether written or
                    oral, between the Parties.
                  </li>
                </ol>
                <br />
                <br />
              </ol>
              <h3>SCHEDULE A</h3>
              <p>
                <strong>Statement of Work</strong>
              </p>
              <br />
              <p>
                This Statement of Work (“<strong>SOW</strong>”) dated [__] is
                made pursuant to and is governed by the Master Services
                Agreement dated [insert: Execution Date] (“
                <strong>Agreement</strong>”) entered into between{" "}
                <strong>Decfin Pte Ltd (“Service Provider”)</strong>, a company
                incorporated under the Companies Act, 1947 and having its
                registered office at{" "}
                <strong>
                  105 CECIL STREET, #07-02, THE OCTAGON, SINGAPORE (069534)
                </strong>{" "}
                and [insert: name of the Customer], [insert: description of the
                Customer]. This SOW forms an integral part of the Agreement and
                shall be construed in accordance with the terms of the
                Agreement.
              </p>
              <ol className={styles["order-level-11"]}>
                <li>Definitions</li>
                <ol className={styles["order-level-11"]}>
                  <li>
                    <strong>“Payout and Reconciliation APIs”</strong> means the
                    APIs provided to the Customer in order for the Customer to
                    disburse and/or reconcile payments (as applicable) to and/or
                    from the End-Customers.
                  </li>
                  <li>
                    <strong>“Virtual Account”</strong> means a unique
                    identification number created in relation to an underlying
                    business account for the purposes of collection,
                    reconciliation and payment of funds.
                  </li>
                  <li>
                    <strong>“Virtual Account APIs”</strong> means the APIs
                    provided to the Customer on the Platform in order for the
                    Customer to facilitate the creation and management of
                    Virtual Accounts.
                  </li>
                  <p>
                    The terms not defined herein shall have the meaning
                    specified in the Agreement.
                  </p>
                  {/* <table>
                      <tr>
                        <td>Description of the Services</td>
                        <td>
                          <p>
                            he Service Provider will facilitate the process of
                            creation and management of Virtual Accounts in real
                            time by providing access to the Virtual Account APIs
                            via the Customer Account created on the Platform.
                          </p>
                          <p>
                            The Service provider will facilitate the
                            disbursement and or recollection of payments to
                            and/from the End-Customers by providing access to
                            the Payout and Reconciliation APIs via the Customer
                            Account created on the Platform.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Term and Termination</td>
                        <td>
                          <p>
                            The SOW shall be effective for an initial period of
                            1 (one) year (“<strong>Initial Term</strong>”). In
                            the event either Party has not delivered a notice of
                            termination in writing to the other Party at least
                            30 (thirty) days before the expiry of the Initial
                            Term, this SOW shall be automatically extended for a
                            subsequent period of one year.
                          </p>
                          <p>
                            The Service Provider shall have the right to
                            terminate this SOW by providing a prior written
                            notice of 10 (Ten) days, wherever feasible, to the
                            Customer.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>A list of relevant documents</td>
                        <td>
                          <p>
                            The Customer shall provide the Service Provider with
                            the following documents for onboarding -{" "}
                          </p>
                          <p>
                            <ol className={styles["order-level-11"]}>
                              <li>Domain Name & Website</li>
                              <li>
                                Bank Account Details with Canceled Cheque (for
                                any settlements)
                              </li>
                              <li>Incorporation certificate of the company</li>
                            </ol>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Terms of payment of Fees</td>
                        <td>
                          <p>
                            The Customer agrees to pay the Fee within 10 (Ten)
                            days of the receipt of the invoice. If any Fee
                            remains unpaid by the Customer for a period of 10
                            (Ten) days from the date of receipt of the invoice,
                            the Service Provider reserves the right to stop
                            providing Services to the Customer, until the
                            Customer completes the payment and provides proof to
                            the Service Provider. Interest shall accrue on
                            delayed invoice amounts at a rate equal to 2% (Two
                            Percent) per month, commencing on the date after the
                            completion of the 10 (Ten) days from the issuance of
                            the concerned invoice, and continuing until such
                            amounts have been fully paid by the Customer to the
                            Service Provider.
                          </p>
                          <br />
                          <p>
                            The Fees shall be exclusive of all applicable taxes,
                            levies, imports, and duties. All such taxes, levies,
                            imports, and duties that pertain to the Services
                            shall be shown separately in the invoices. All and
                            any other taxes, cess, levies, and duties leviable
                            on the Services shall be the Customer’s sole
                            responsibility and liability. The Customer will
                            deduct applicable statutory deductions, such as tax
                            deductible at source as per the provisions of the
                            Income Tax Act, 1947, from the Fee payable to
                            Service Provider.
                          </p>
                          <br />
                          <p>
                            The Customer shall be responsible for payment of
                            stamp duty in respect of this Agreement.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Refund</td>
                        <td>
                          <p>
                            There shall be no refund of the Fee in the event the
                            Customer terminates the Agreement for convenience or
                            discontinues the use of the Services during the
                            Term.
                          </p>
                          <br />
                          <p>
                            Notwithstanding the foregoing, in the event the
                            Company terminates this Agreement for convenience in
                            accordance with the{" "}
                            <strong>‘Term and Termination’</strong> terms of the{" "}
                            <strong>‘Statement of work’</strong>, the Company
                            shall refund a pro-rata portion of any pre-paid Fee
                            paid by the Customer under this Agreement for the
                            then current period, upon which all of the
                            Customer’s rights and licenses under this Agreement
                            shall automatically terminate.
                          </p>
                          <br />
                          <p>
                            In no event will termination relieve the Customer of
                            its obligation to pay any Fee payable to the Company
                            for the period prior to the effective date of
                            termination.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Customer Responsibilities</td>
                        <td>
                          The Customer understands that it shall, at all times,
                          comply with such other terms and conditions as
                          communicated by the Service Provider to the Customer
                          from time to time.
                        </td>
                      </tr>
                    </table> */}
                  <ServiceDetailsTable />
                </ol>
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

export default TermsAndConditions;
