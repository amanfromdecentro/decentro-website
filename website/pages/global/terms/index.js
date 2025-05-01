import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa"; // Styles Imports
import styles from "../../../styles/page-styles-sg/terms-style/terms-style.module.scss";

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
        <title>Terms & Conditions | API Banking Platform | Decentro</title>
        <link rel="canonical" href="https://decentro.tech/global/terms" />
        <link
          rel="alternate"
          href="https://decentro.tech/global/terms"
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
          <Link
            href="/global/terms/"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Terms & Conditions
          </Link>
          <Link href="/global/privacy/" activeclassname="active">
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
          <div className={styles["terms-and-conditions"]}>
            <h2>Terms & Conditions</h2>
            <p>Updated on July 21, 2023</p>
            <div className={styles["content"]}>
              <p>Thank you for entrusting Decentro with your needs!</p>
              <br />
              <p>
                Please read these terms and conditions and policies carefully.
                By indicating your acceptance of these Terms electronically
                and/or using our services and products in any way, you
                acknowledge and agree to be bound by them.
              </p>
              <br />
              <h4>Updates to this Policy</h4>
              <p>
                We may change or modify this Policy at our sole discretion. Such
                modifications will come into effect promptly upon being posted
                on the website. We encourage you to periodically review these
                Terms to better acquaint yourself with the revisions we make.
                Your continued use of our services indicates your acceptance of
                these changes. If you disagree with any changes, you are
                requested to stop using the Services immediately.
              </p>
              <br />
              <h4>Contact</h4>
              <p>
                If you have any questions about this Policy, please contact our
                designated privacy officer at{" "}
                <strong>support@decentro.tech</strong>
              </p>
              <br />
              <h3>TERMS AND CONDITIONS</h3>
              <p>
                These Terms constitute a binding and enforceable agreement
                between you (“you”, “your” or “Customer”) registered with us to
                receive our services (‘Services’) and us, Decfin Pte. Ltd.
                (‘Decfin’, ‘us’, ‘our’ or ‘we’). These terms, along with the
                Privacy Policy, and any other specific agreements or documents
                executed in respect of the Services provided by us
                (collectively, the “Terms”) will govern your access to and use
                of all our Services.
              </p>
              <br />
              <p>
                Additionally, we work with our Partners to provide some of these
                Services and by using them, you also agree to be bound and
                governed by our Partners’ terms and conditions, which are
                incorporated by reference in these Terms and will form part of
                them.
              </p>
              <br />
              <p>
                If you do not agree with the Terms or any changes thereof, you
                should immediately stop using the Services. We will construe
                your continued use of the Services as your acceptance of the
                Terms and the changes thereof.
              </p>
              <br />
              <h4>Scope and Extent of the Terms</h4>
              <ol>
                <li>
                  <p>
                    The Terms outline the terms and conditions you have to abide
                    by in order to use the Services. In the event of any
                    conflict between these terms, the Privacy Policy and such
                    other documents, the decision on what will prevail will be
                    solely ours. Such a decision shall be final and binding on
                    you.
                  </p>
                </li>
                <li>
                  <p>
                    It is your responsibility to read and acquaint yourself with
                    the Terms and our Partners’ terms that apply to your use of
                    the Services. The act of using the Services signifies your
                    acceptance of the Terms. If you are accepting the Terms on
                    behalf of an entity, unless notified to us, we will assume
                    that you have requisite authority to do so and accordingly,
                    the entity you represent will be bound by the Terms.
                  </p>
                </li>

                <li>
                  <p>
                    We reserve the right to modify, pause, decline or terminate
                    any part of the Services without notice and assume no
                    liability for doing so.
                  </p>
                </li>
                <li>
                  <p>
                    We may change or modify these Terms at our sole discretion.
                    Such modifications will come into effect promptly upon being
                    posted on the website. While we will deploy our best efforts
                    to communicate such modifications to your registered email
                    ID, we encourage you to periodically review these Terms to
                    better acquaint yourself with the revisions we make.
                  </p>
                </li>
              </ol>
              <h4>Definitions</h4>
              <p>In these Terms, </p>
              <ol type="a" className={styles["lower-alpha"]}>
                <li>
                  <p>
                    <strong>“Applicable Law”</strong> means any and all laws
                    ordinances, constitutions, regulations, statutes, treaties,
                    rules, codes, licenses, certificates, franchises, permits,
                    principles of common law, requirements and Orders adopted,
                    enacted, implemented, promulgated, issued, entered or deemed
                    applicable by or under the authority of any Governmental
                    Body having jurisdiction over the Services.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>“Force Majeure Event”</strong> means an event that
                    (a) is not reasonably anticipated as of the date hereof, (b)
                    is not within our reasonable control of the Party affected
                    by the event, (c) is not the result of such Party&apos;s
                    negligence or failure to act, and (d) could not be overcome
                    by the affected Party&apos;s use of due diligence in the
                    circumstances. Force Majeure includes, but is not restricted
                    to, events of the following types (but only to the extent
                    that such an event, in consideration of the circumstances,
                    satisfies the tests set forth in the preceding sentence):
                    acts of God; civil disturbance; sabotage; strikes;
                    lock-outs; work stoppages; action or restraint by court
                    order or public or government authority;
                  </p>
                </li>
                <li>
                  <p>
                    <strong>“Intellectual Property”</strong> means all patents,
                    trademarks, permits, service marks, brands, trade names,
                    trade secrets, proprietary information and knowledge,
                    technology, computer programs, databases, copyrights,
                    licenses, franchises, formulae, designs and other
                    Confidential Information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Partner Services</strong> means the
                    services/products owned and provided to you by our
                    Partner(s). Partner Services may form part of the Services
                    or may be made available to you separately.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Restricted Business</strong> means any activity that
                    is illegal and unlawful and also includes any activity that
                    we may notify as being restricted.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Transaction</strong> refers to an action involving
                    the placement, transfer, or retrieval of funds, whether
                    executed by you or a different party.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Wallet</strong> refers to a payment account or
                    virtual account generated and provided to you as part of the
                    Services as per the Terms or any other agreement you may
                    sign with us.
                  </p>
                </li>
              </ol>

              <h4>
                Services We Offer
                <ol>
                  <li>Our Services include –</li>
                  <ol type="a" className={styles["lower-alpha"]}>
                    <li>
                      <p>Account Issuance Service</p>
                    </li>
                    <li>
                      <p>Merchant acquisition Service</p>
                    </li>
                    <li>
                      <p>Domestic Money Transfer Service and</p>
                    </li>
                    <li>
                      <p>Cross Border Money Transfer Service</p>
                    </li>
                  </ol>
                  <li>
                    When you register with us,
                    <ol type="a" className={styles["lower-alpha"]}>
                      <li>
                        <p>
                          you register solely for the Services that are
                          described in the agreement or statement of work
                          specific to the jurisdiction in which you operate. Any
                          modification or addition to the Services you
                          originally sign up for shall be in writing and will in
                          most cases, attract additional charges.
                        </p>
                      </li>
                      <li>
                        <p>
                          you authorise us and our Partners to carry out
                          requisite actions on your behalf. These include
                          holding, receiving, transferring and settling funds on
                          your behalf through Transactions. Additionally, you
                          also grant us a license to use your information in
                          respect of the Services.
                        </p>
                      </li>
                      <li>
                        <p>
                          you understand that we merely facilitate Transactions
                          and assume no liability in respect of them. We do not
                          verify their authenticity and assume that you have
                          authorised them unless you provide us with sufficient
                          notice that a Transaction is invalid, incorrect or
                          suspect.
                        </p>
                      </li>
                      <li>
                        <p>
                          you agree that we do not provide any advice, nor do we
                          act as your agent in any manner. We merely provide
                          Services on an as is and as available basis.
                        </p>
                      </li>
                      <li>
                        <p>
                          you will receive a limited license that is not
                          exclusive or transferrable to use the Services solely
                          for the purposes that are authorised by us. This does
                          not however in any manner transfer any title or
                          ownership over the Services from us to you.
                        </p>
                      </li>
                      <li>
                        <p>
                          you agree that we do not take any responsibility or
                          liability for the Services provided or facilitated by
                          our Partners. You agree to become aware of the terms
                          under which the Services are offered by our Partners
                          and undertake to receive them based on your assessment
                          of the terms and at your own risk.
                        </p>
                      </li>
                      <li>
                        <p>
                          you understand that all the Services provided by our
                          Partners will be facilitated by us and you may not
                          independently enter into any understanding or
                          agreement with our Partners in respect of the Services
                          contemplated herein or already forming part of any
                          agreement with us.
                        </p>
                      </li>
                      <li>
                        <p>
                          you agree to use the Services only for lawful purposes
                          and you agree not to authorise any Transactions that
                          relate to any Restricted Businesses/Goods.
                        </p>
                      </li>
                      <li>
                        <p>
                          you agree to pay requisite fee/service charges that
                          are mutually agreed between us as consideration for
                          the Services.
                        </p>
                      </li>
                      <li>
                        <p>
                          You understand and authorise us to deduct amounts
                          payable to us including Fees and taxes from funds held
                          by us on your behalf. Such authorisation shall survive
                          the termination of any agreement with us and remain in
                          effect until all the sums owed tp us are paid in full
                          by you.
                        </p>
                      </li>
                      <li>
                        <p>
                          you understand that we may impose additional
                          obligations on you from time to time but will notify
                          you in advance of the same.
                        </p>
                      </li>
                      <li>
                        <p>
                          you will ensure that all the hardware and software you
                          use is compatible with the Services.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    You further agree that our provision of Services and your
                    use thereof is subject to –
                  </li>
                  <ol type="a" className={styles["lower-alpha"]}>
                    <li>
                      <p>
                        adequate verification of the information and
                        documentation you provide from time to time;
                      </p>
                    </li>
                    <li>
                      <p>
                        completion of background checks/due-diligence on you to
                        our satisfaction;
                      </p>
                    </li>
                    <li>
                      <p>
                        our assessment of your creditworthiness, if required,
                        from time to time.
                      </p>
                    </li>
                  </ol>

                  <li>
                    We reserve the right to modify, pause, decline or terminate
                    any part of the Services for any reason that warrants such
                    action. We will provide you with notice where ever feasible,
                    but you agree that we may do so without notice and assume no
                    liability in such an action and event.
                  </li>
                </ol>
              </h4>

              <h4>On-boarding</h4>
              <ol>
                <li>
                  You may be required to register with us before availing our
                  Services. During this process, you will be requested to
                  provide information and requisite documents including details
                  of the entity you represent, authorisation letters, bank
                  details, etc., to enable us to (a) perform necessary checks to
                  ensure you comply with our onboarding criteria; (b) verify
                  your credentials by performing due-diligence in certain cases.
                  We will provide the Services only when we are satisfied that
                  the information and documentation provided by you are true,
                  accurate and meet our requirements. Should these
                  checks/verification fail, we reserve the right to decline the
                  Services to you.
                </li>
                <li>
                  You agree to notify us of any changes to the information or
                  documentation provided to us promptly upon becoming aware of
                  such changes and in any event, no later than 24 hours of
                  becoming aware of such changes. Any delay or failure to do so
                  may result in disruption or termination of the Services. If
                  these changes are significant and do not meet our customer
                  criteria , we reserve the right to terminate the Services
                </li>
                <li>
                  You may also be required to provide us with additional
                  information or documentation during the time you receive the
                  Services, including those required by our Partners within 48
                  hours of such request.
                </li>
                <li>You consent to –</li>
                <ol type="a" className={styles["lower-alpha"]}>
                  <li>
                    <p>
                      providing us with information that could include personal
                      data;
                    </p>
                  </li>
                  <li>
                    <p>
                      us obtaining credit information report wherever necessary;
                    </p>
                  </li>
                  <li>
                    <p>us conducting background checks on you, if required.</p>
                  </li>
                  <li>
                    <p>
                      us providing your information or documents to third
                      parties, if required.
                    </p>
                  </li>
                  <li>
                    <p>
                      us modifying your activity, the Transactions and any other
                      details associated with the Services we provide to you.
                    </p>
                  </li>
                </ol>
              </ol>

              <h4>Fees</h4>
              <ol>
                <li>
                  <p>
                    Your access to and use of the Services is subject to you
                    paying us the fees (“Fees”) as applicable. These Fees may be
                    in the nature of (a) subscription fees; (b) recurring fees;
                    (c) additional fees payable in certain cases. You will be
                    notified of the Fees applicable to the Services availed by
                    you at the time of onboarding and also inform you of the
                    manner in which the Fees are payable to us.
                  </p>
                </li>
                <li>
                  <p>
                    You agree to assume full responsibility for the taxes
                    payable in respect of the Services and the Transactions. You
                    understand that this includes assessing the taxes payable,
                    deducting them, collecting them and remitting them to
                    relevant authorities.
                  </p>
                </li>
              </ol>

              <h4>Account Activity</h4>
              <ol>
                <li>
                  <p>
                    You may appoint an authorised user (“Authorised User”) to
                    login to your Account and take actions on your behalf. You
                    will promptly provide us with details of the Authorised User
                    so appointed. You will ensure that the Authorised User is
                    fully aware of the Terms and will comply with them. You will
                    be responsible and liable for any and all actions taken by
                    the Authorised User. References to you in these terms will
                    include the Authorised User.
                  </p>
                </li>
                <li>
                  <p>
                    You agree to regularly login to your account to keep
                    yourself updated of (a) any obligations that may arise
                    further to what is detailed in the Terms; (b) any notices
                    we/our Partner may have sent to you in respect of the
                    Services/Transactions; (c) any changes to the Terms.
                  </p>
                </li>
                <li>
                  <p>
                    You agree to take all necessary steps to (a) keep your
                    account credentials safe; (b) adapt reasonable security
                    standards and at the very least, those required by law to
                    safely access and use the Services; (c) ensure that your
                    usage of the Services doesn’t threaten its integrity; (d)
                    inform us of any purported or actual threat to the Services
                    including those in the form of security or data breach; (e)
                    notify us of any unauthorised access.
                  </p>
                </li>
                <li>
                  <p>
                    If you have not used our Services for more than six months,
                    we reserve the right to deem your account as inactive and
                    accordingly suspend or terminate the Services. This does not
                    however absolve you of any payment obligations or other
                    terms that survive the termination of our agreement with
                    you.
                  </p>
                </li>
                <li>
                  <p>
                    In the event you also have funds that are dormant in your
                    account, to the extent permitted by law, we reserve the
                    right to abandon them after attempting to contact you about
                    them on your registered address thrice.
                  </p>
                </li>
              </ol>

              <h4>Your Representations and Warranties</h4>
              <ol>
                <li>
                  You represent and warrant to us that –
                  <ol type="a" className={styles["lower-roman"]}>
                    <li>
                      you have full capacity, authority and all necessary
                      licences, permits and consents to enter into and to
                      exercise the rights under the Terms, perform the
                      obligations under the Terms and have the authority and
                      eligibility to access and use the Services.
                    </li>
                    <li>
                      the Transactions undertaken using the Services are
                      legitimate and do not pertain to any Restricted
                      Business/Goods.
                    </li>
                    <li>
                      you will comply with and continue to be compliant with all
                      laws, ordinances, constitutions, regulations, statutes,
                      treaties, rules, codes, licences, certificates and orders
                      applicable to your use of the Services.
                    </li>
                    <li>
                      your use and access of the Services and your agreement
                      with us does not conflict with any other existing
                      obligations.
                    </li>
                    <li>
                      the information and documentation you provide to us will
                      be true, complete and accurate in all respects and at all
                      times. You will promptly notify us of any changes to the
                      information/documentation already provided to us promptly
                      upon becoming aware of these changes and in any event, no
                      later than 24 hours from becoming aware of such changes.
                    </li>
                    <li>
                      you will not use the Services for any illegal or
                      fraudulent purposes.
                    </li>
                    <li>
                      you have adequate resources to ensure that your use of the
                      Services does not compromise or threaten the integrity of
                      the Services in any manner.
                    </li>
                    <li>
                      you will not disrupt or cause any interruption or damage
                      to the Services.
                    </li>
                    <li>
                      you will not hold us liable for any delay, loss, costs,
                      damages, claims, or actions that you may suffer in respect
                      of any downtime, delay or failure of Services that arise
                      due to reasons outside of our control.
                    </li>
                  </ol>
                </li>
              </ol>

              <h4>Your Obligations</h4>
              <ol>
                <li>
                  <p>
                    You agree to use the Services only in accordance with law
                    and all Transactions authorised or carried out by you using
                    the Services comply with law, do not pertain to Restricted
                    Business/Goods, are not illegal or fraudulent.
                  </p>
                </li>
                <li>
                  <p>
                    You will provide necessary information and documentation as
                    and when requested by us, no later than 48 hours from such
                    request.
                  </p>
                </li>
                <li>
                  <p>
                    You authorise us to carry out all necessary actions in
                    respect of a Transaction including holding, receiving,
                    transferring and settling funds on your behalf.
                  </p>
                </li>
                <li>
                  <p>
                    You will not attempt to create any services that mimic the
                    Services or are similar to the Services using the Services
                    directly or indirectly.
                  </p>
                </li>
                <li>
                  <p>
                    You will not reverse engineer, compile, modify, translate or
                    disassemble any software belonging to us directly or
                    indirectly.
                  </p>
                </li>
                <li>
                  <p>
                    You will cooperate with any inquiries we may undertake for
                    verifying the use and access of the Services including any
                    threatened or actual breach of the Terms.
                  </p>
                </li>
                <li>
                  <p>
                    You are responsible for all Transactions carried out through
                    our Services by you or your customers and will be liable for
                    all actions arising therefrom.
                  </p>
                </li>
              </ol>

              <h4>Security and Privacy</h4>
              <p>
                All the data and information you provide to us or authorise us
                to collect will be governed under our Privacy Policy.
              </p>
              <br />
              <h4>Indemnity</h4>
              <p>
                You agree to defend, indemnify and hold us, our Partners and
                relevant third party service providers against and in respect of
                any and all losses arising out of (a) breach of the Terms; (b)
                breach of applicable laws; (c) your negligence or wilful
                misconduct in the performance of your obligations under the
                Terms; and (d) any inquiries, investigation or actions by
                relevant authorities.
              </p>
              <br />

              <h4>Disclaimers</h4>
              <p>
                WE PROVIDE ANY AND ALL SERVICES ON AN “AS-IS” BASIS AND MAKES NO
                REPRESENTATIONS OR WARRANTIES AS TO THE SERVICES PROVIDED. WE
                DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING ALL IMPLIED
                WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
                PURPOSE, IN CONNECTION WITH THE TERMS.
              </p>
              <br />

              <h4>Restricted Businesses/Goods</h4>
              <p>You are prohibited from using our Services -</p>
              <ol type="a" className={styles["lower-alpha"]}>
                <li>
                  <p>
                    in any manner that breaches applicable laws or causes us to
                    breach applicable laws;
                  </p>
                </li>
                <li>
                  <p>
                    for unlawful or fraudulent purposes or in an unlawful or
                    fraudulent manner;
                  </p>
                </li>
                <li>
                  <p>
                    in a manner that can potentially cause harm or abuse or
                    incite violence;
                  </p>
                </li>
                <li>
                  <p>
                    to hold yourself out in any manner including making any
                    unauthorised advertising or promotions.
                  </p>
                </li>
                <li>
                  <p>
                    in a manner that would threaten the integrity of our
                    Services including introducing viruses, spyware.
                  </p>
                </li>
              </ol>

              <br />

              <p>
                You cannot use our Services to perform any of the following
                activities that involve -{" "}
              </p>
              <ol type="a" className={styles["lower-alpha"]}>
                <li>
                  <p>cryptocurrencies or virtual currencies;</p>
                </li>
                <li>
                  <p>financial services, including (and not limited to):-</p>
                </li>
                <ol className={styles["lower-roman"]}>
                  <li>
                    <p>
                      Acceptance of deposits and other repayable funds from the
                      public, including crowdfunding;
                    </p>
                  </li>
                  <li>
                    <p>Lending;</p>
                  </li>
                  <li>
                    <p>Buy now pay later services;</p>
                  </li>
                  <li>
                    <p>Financial leasing;</p>
                  </li>
                  <li>
                    <p>Money or value transfer services;</p>
                  </li>
                  <li>
                    <p>Money and currency changing;</p>
                  </li>
                  <li>
                    <p>
                      Issuing and managing means of payment (e.g. credit and
                      debit cards, cheques, traveller&apos;s cheques, money
                      orders and bankers&apos; drafts, electronic money);
                    </p>
                  </li>
                  <li>
                    <p>Financial guarantees and commitments;</p>
                  </li>
                  <li>
                    <p>
                      Carry out a business that provides trading services in:
                    </p>
                  </li>
                  <li>
                    <p>
                      money market instruments (cheques, bills, certificates of
                      deposit, derivatives etc.);
                    </p>
                  </li>
                  <li>
                    <p>foreign exchange;</p>
                  </li>
                  <li>
                    <p>exchange, interest rate and index instruments;</p>
                  </li>
                  <li>
                    <p>transferable securities;</p>
                  </li>
                  <li>
                    <p>commodity futures trading.</p>
                  </li>
                </ol>
                <li>
                  <p>
                    Participation in securities issuance and the provision of
                    financial services related to such issues;
                  </p>
                </li>
                <li>
                  <p>Individual and/or collective portfolio management;</p>
                </li>
                <li>
                  <p>
                    Safekeeping and administration of cash or liquid securities
                    on behalf of other persons;
                  </p>
                </li>
                <li>
                  <p>
                    Otherwise investing, administering or managing funds or
                    money on behalf of any other persons;
                  </p>
                </li>
                <li>
                  <p>
                    Underwriting and placement of life insurance and other
                    investment related insurance.
                  </p>
                </li>
                <li>
                  <p>Matchmaking or dating services;</p>
                </li>
                <li>
                  <p>Interactive video platforms and chatting services;</p>
                </li>
                <li>
                  <p>Marketplaces;</p>
                </li>
                <li>
                  <p>Facilitation, sale or distribution of chemicals;</p>
                </li>
                <li>
                  <p>Pharmaceuticals;</p>
                </li>
                <li>
                  <p>Oil and gas companies, as well as related activities;</p>
                </li>
                <li>
                  <p>Bidding fee auctions;</p>
                </li>
                <li>
                  <p>Political organizations;</p>
                </li>
                <li>
                  <p>Religious organizations;</p>
                </li>
                <li>
                  <p>Surveillance equipment, for example, spy cameras;</p>
                </li>
                <li>
                  <p>Alcohol, tobacco and e-cigarette products;</p>
                </li>

                <li>
                  <p>Marijuana, CBD Oil, and drug-related paraphernalia;</p>
                </li>
                <li>
                  <p>
                    Import or export of specified ‘dual use goods’ listed on the
                    defence and strategic goods list;
                  </p>
                </li>
                <li>
                  <p>
                    Regulated medical devices and services, including fetal
                    gender diagnosis;
                  </p>
                </li>
                <li>
                  <p>Travel-Related Arrangement Services; or</p>
                </li>
                <p>
                  other high risk activities in accordance with our internal
                  policies, our banking partners’ policies or the policies of
                  participants in our payment network.
                </p>
              </ol>
              <p>Our Services will not be provided to -</p>
              <ol type="a" className={styles["lower-alpha"]}>
                <li>
                  <p>
                    adult entertainment and related services, including
                    pornography, escort services, prostitution services and/or
                    any form of advertising of or for sexual services;
                  </p>
                </li>
                <li>
                  <p>
                    gambling services where it is illegal or offering gambling
                    services without the required permits or licenses;
                  </p>
                </li>
                <li>
                  <p>
                    counterfeit or unauthorised goods, or products or services;
                    such as goods or services which infringe upon intellectual
                    property or proprietary rights of third parties;
                  </p>
                </li>
                <li>
                  <p>arms and weapons manufacturing, sales and supplies;</p>
                </li>
                <li>
                  <p>
                    the offering of regulated financial services (directly or
                    indirectly) without a valid license and/or registration;
                  </p>
                </li>
                <li>
                  <p>
                    the sale and/or distribution of any product or service
                    without the requisite permit or licence in their place of
                    operation (governmental or otherwise);
                  </p>
                </li>

                <li>
                  <p>
                    the sale and/or distribution of any products or services
                    which promote or encourage discrimination, including
                    discrimination on the basis of race, gender, religion,
                    nationality, disability, sexual orientation or age;
                  </p>
                </li>
                <li>
                  <p>
                    Ponzi/ Pyramid Scheme/ Multi Level Marketing/ Telemarketing;
                  </p>
                </li>
                <li>
                  <p>
                    the trade of restricted and/or endangered animal species and
                    products derived from them;
                  </p>
                </li>
                <li>
                  <p>
                    the sale, distribution and/or trade of archaeological and
                    cultural relics, such as the unlicensed export and trade of
                    Iraqi Cultural Property;
                  </p>
                </li>
                <li>
                  <p>
                    any transactions made for no genuine commercial purpose,
                    such as the pooling of funds between multiple parties or the
                    cashing out of credit or stored value cards; or
                  </p>
                </li>
                <li>
                  <p>
                    any other businesses or transactions outside of our risk
                    appetite based on our internal policies, our banking
                    partners’ policies or the policies of participants in our
                    payment network.
                  </p>
                </li>
              </ol>

              <h4>Confidentiality</h4>
              <p>
                You understand and acknowledge that any oral or written
                information exchanged between us in connection with the Services
                is confidential in nature. You and us/our Partners and third
                party service providers shall maintain confidentiality of all
                such confidential information, and without obtaining the written
                shall not disclose any relevant confidential information to any
                third parties, except for the information that: (a) is or will
                be in the public domain (other than through the receiving
                Party’s unauthorized disclosure); (b) is under the obligation to
                be disclosed pursuant to the applicable laws or regulations,
                rules of any stock exchange, or orders of the court or other
                government authorities; or (c) is required to be disclosed by
                any Party to its shareholders, investors, legal counsels or
                financial advisors regarding the transaction contemplated
                hereunder, provided that such shareholders, investors, legal
                counsels or financial advisors shall be bound by the
                confidentiality obligations similar to those set forth in this
                Section.
              </p>
              <br />
              <p>
                Confidentiality obligations shall survive the termination of
                this Agreement.
              </p>

              <h4>Intellectual Property</h4>
              <p>
                We, along with our licensors as the case may be, own all the
                Intellectual Property in relation to the Services we provide.
                These also include any and all content and material we provide
                as part of the Services. You will receive a limited license that
                is (a) not exclusive (b) is revocable and (c) is not
                transferrable to use the Services solely for the purposes that
                are authorised by us as per the Terms. You will not reverse
                engineer, compile, modify, translate or disassemble any software
                belonging to us directly or indirectly.
              </p>

              <h4>Term and Termination</h4>
              <ol>
                <li>
                  <p>
                    These Terms shall govern your access to and use of the
                    Services from the date of your registration until terminated
                    by you or us in accordance with the terms contained herein.
                  </p>
                </li>
                <li>
                  <p>
                    We/you may terminate the Services by giving a prior notice
                    of at least 30 days. We reserve the right to terminate the
                    Services in our sole discretion immediately upon – (a) your
                    breach of the Terms; (b) any illegal use of the Services;
                    (c) use of the Services for uses pertaining to Restricted
                    Businesses/Goods; (d) substantial change in the information
                    or documentation you provide to us; (e) any change to your
                    credit worthiness; (f) us having any reason to believe your
                    access to and use of Services will cause any harm or
                    threaten the integrity of the Services; (g) any unauthorised
                    access to your account; (h) you are subject to any voluntary
                    or involuntary proceeding in bankruptcy, liquidation,
                    dissolution, receivership or similar action for the benefit
                    of creditors.
                  </p>
                </li>
                <li>
                  <p>
                    Termination does not absolve you of payment and
                    confidentiality obligations. Upon termination you agree to –
                  </p>
                </li>
                <ol type="a" className={styles["lower-alpha"]}>
                  <li>
                    <p>
                      pay all the Fees due until the date of such termination;
                    </p>
                  </li>
                  <li>
                    <p>
                      execute all the Transactions and not authorise, initiate
                      or undertake any new Transactions;
                    </p>
                  </li>
                  <li>
                    <p>stop using the Services.</p>
                  </li>
                </ol>
              </ol>

              <h4>Limitation of Liability</h4>
              <ol>
                <li>
                  <p>
                    You acknowledge and agree that to the extent permitted by
                    applicable law, we/our Partners/third party service
                    providers shall not be liable under the Terms for lost
                    revenues, loss of goodwill, service interruption, computer
                    damage or system failure or the cost of substitute services,
                    or indirect, special, incidental, consequential, exemplary,
                    or punitive damages, losses or expenses resulting from your
                    access to and use of the Services.
                  </p>
                </li>
                <li>
                  <p>
                    Notwithstanding anything contained in the Terms or any
                    applicable law, our/our Partners’/our third party service
                    providers’ aggregate liability under the Terms shall not
                    exceed the Fees paid/payable by you in the preceding three
                    months from the date on which such liability arises.
                  </p>
                </li>
              </ol>

              <h4>Force Majeure</h4>
              <p>
                Notwithstanding anything contained in the Terms, you, us, our
                Partners or third party service providers shall not be liable
                for any failure to perform an obligation under the Terms if
                performance is prevented or delayed by a Force Majeure event.
              </p>
              <br />
              <h4>Governing law</h4>
              <p>
                The Terms and your use of the Service shall be governed and
                construed in accordance with the laws of Singapore and subject
                to Arbitration clause below, the Parties irrevocably submit to
                the exclusive jurisdiction of the courts in Singapore.
              </p>
              <br />
              <h4>Arbitration</h4>
              <p>
                Any dispute arising out of or in connection with this contract,
                including any question regarding its existence, validity or
                termination, shall be referred to and finally resolved by
                arbitration administered by the Singapore International
                Arbitration Centre (“SIAC”) in accordance with the Arbitration
                Rules of the Singapore International Arbitration Centre (“SIAC
                Rules”) for the time being in force, which rules are deemed to
                be incorporated by reference in this clause.
              </p>
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
