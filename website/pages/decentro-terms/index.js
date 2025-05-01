import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";

const DecentroTermsAndConditions = () => {
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
        <link rel="canonical" href="https://decentro.tech/terms/" />
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
      <div className="documents-container">
        <div className="document-type-list">
          <Link href="/decfin-terms/" activeclassname="active">
            Decentro (PA) T&Cs
          </Link>
          <Link
            href="/decentro-terms/"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Decentro (TSP) T&Cs
          </Link>
          <Link href="/privacy/" activeclassname="active">
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
          <div className="terms-and-conditions">
            <h2>Decentro (TSP) T&Cs</h2>
            <p>Updated on May 22, 2024</p>
            {/* TODO: LINK to be changed here for Decentro */}
            <div className="terms-content">
              <iframe src="https://docs.google.com/document/d/e/2PACX-1vSdZRTak5kOCCm8G_e048qKAbZLpbNWbZlM1SSZdboz-sU3Q1kYvd3mfo9w9pEDGhQq8S3l37m4yKzC/pub?embedded=true"></iframe>
              {/* <iframe src="https://decentro-icons.s3.ap-south-1.amazonaws.com/website-documents/Decentro+T%26C.pdf#view=FITW"
                title="PDF Viewer"
                style={{ width: '100%', height: '100%', border: 'none' }}
              // frameBorder="0"
              // scrolling="auto"
              >
                Your browser does not support iframes. <a href="https://decentro-icons.s3.ap-south-1.amazonaws.com/website-documents/Decentro+T%26C.pdf">Download the PDF</a>
              </iframe> */}


              {/* <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vSv_aEFnyP4qF-O_pfQdX2JcJ8dQaigYQgTyfgLgxiMdVeyDpYix1MkrTRtUqZEY1_zH60bJb03sxPN/pub?embedded=true"></iframe> */}
              {/* <Nodal TSP={true} PA={true} /> */}
            </div>
            {/* <div className="content">
              <p>
                <strong>Access Keys:</strong> shall mean any confidential/secret
                keys, including developer ID, certificate ID, application ID,
                user name and/or password that shall be required by the Customer
                to access the Services in a staging or production environment;
              </p>
              <p>
                <strong>API or Application Program Interface:</strong> shall
                mean (a) those of the Application Program Interface that are
                made available by Service Provider to the Customer, under the
                terms of the Agreement, and (b) API Documentation, which
                includes the documentation, data and any other supporting
                material provided by the Service Provider to the Customer,
                through Decentro or otherwise, for the use of the API;
              </p>
              <p>
                <strong>Applicable Laws:</strong> shall mean all the laws
                applicable to the Parties to the Agreement in force at the time
                of execution and during the term of the Agreement;
              </p>
              <p>
                <strong>API Success:</strong> shall mean a ‘success’ status code
                in the response fields for any of the API calls during the
                course of Service;
              </p>
              <p>
                <strong>Person:</strong> shall mean any natural person, limited
                or unlimited liability company, corporation, partnership
                (whether limited or unlimited), proprietorship, Hindu undivided
                family, trust, union, association, Government or any agency or
                political subdivision thereof or any other entity that may be
                treated as a person under Law;
              </p>
              <p>
                <strong>Regulatory Authority:</strong> It is the relevant
                government agency that serves as the regulating authority for
                respective Documents or authentication process involved in the
                respective Services, including UIDAI, RBI, SEBI, IRDA, etc.;
              </p>
              <p>
                <strong>Response Data:</strong> with reference to the
                transaction undertaken by the Service Provider shall mean the
                ‘success’ or similar status code in case of a successful API
                response along with &quotResponse Fields (if requested)&quot.
                While in the case of failures, response data will contain the
                error details;
              </p>
              <p>
                <strong>Services:</strong> shall refer to access to the APIs and
                Decentro and such other services provided by the Service
                Provider to the Customer as specifically mentioned in Annexure A
                of the Agreement;
              </p>
              <p>
                <strong>Request Fields:</strong> shall mean the available
                parameters in the API request which are to be used by the
                Service Provider while processing the next steps as per a usual
                flow;
              </p>
              <p>
                <strong>Subscription Plan:</strong> The prices, features, and
                options of the Decentro Services depend on the Subscription Plan
                selected by Customer (including any usage or overage fees).
                Decentro does not guarantee that your particular Subscription
                Plan will be offered indefinitely. We reserve the right to
                change the prices, features, or options included in a particular
                Subscription Plan without notice, provided that such changes
                shall not take effect until your next applicable subscription
                term.
              </p>
              <p>
                <strong>Recurring Charges and Upgrades:</strong> By signing up
                for a Subscription Plan, Customer authorizes Decentro to charge
                Customer’s payment method on a recurring basis (e.g. monthly,
                quarterly, or yearly depending on Customer’s Subscription Plan)
                without an invoice. Customer expressly authorizes Decentro to
                charge its payment method (such as a credit card) for the
                applicable subscription charges, any usage or overage charges,
                and any and all applicable taxes and fees. Such authorization is
                effective until the end of the Subscription Term and any
                applicable Renewal Term, or until Customer cancels all of its
                subscriptions.
              </p>
              <p>
                <strong>Upgrades:</strong> ‍If Customer exceeds their
                subscription plan’s usage limits, Customer will be automatically
                upgraded into the next highest Subscription Plan and Customer
                expressly acknowledges and agrees that it will pay for the
                upgraded Subscription Plan. All upgrade fees and charges are
                non-refundable, even if Customer did not use the full usage
                allotment of the applicable Subscription Plan.
              </p>
              <p>
                <strong>Taxes:</strong> Decentro’s fees are exclusive of all
                taxes, and Customer must pay any applicable GST, sales, use,
                VAT, excise, withholding, or similar taxes or levies, whether
                domestic or foreign, other than taxes based on the income of
                Decentro. Customer will not deduct any applicable taxes from the
                payments to Decentro, except as required by law. If such
                deduction is required by law, Customer will increase the amount
                payable as necessary so that after making all required
                deductions and withholdings, Decentro receives and retains (free
                from any such liabilities) an amount equal to the amount it
                would have received had no such deductions or withholdings been
                made.
              </p>
              <p>
                <strong>Auto-renewals and Trials:</strong> If your account is
                set to auto-renewal or is in a trial period and you have
                provided a method of payment to decentro for the services,
                decentro may charge you automatically at the end of the trial or
                for the renewal, unless you notify decentro that you want to
                cancel your subscription.
              </p>
              <p>
                <strong>Purchase Orders:</strong> Customer agrees that it will
                pay all amounts owed, including recurring charges, without
                requiring any purchase orders or reference(s) to purchase order
                numbers. If a purchase order is required, then Customer will
                promptly notify Decentro at least thirty (30) days prior to such
                requirement and the parties will cooperate in good faith in
                implementing a billing process that includes references such
                purchase order numbers. Customer agrees that any purchase orders
                are for administrative purposes only and that any
                non-administrative terms (including, but not limited to legal,
                security, privacy, or finance terms) contained in its purchase
                order(s) do not apply to its purchase or use of Decentro
                services.
              </p>
              <p>
                <strong>No Refunds:</strong> Subscription and usage or overage
                fees (and any other fees associated with the services, including
                higher subscription fees for upgrades) are non-refundable and
                non-creditable, except where required by law. Decentro
                subscriptions may be cancelled, and such cancellations take
                effect at the end of your then-current subscription term (for
                example, if you are on a paid monthly subscription the
                cancellation will take effect the following month, but if you
                are on a paid yearly subscription the cancellation will take
                effect the following year). Once your cancellation is effective,
                you will be downgraded to a free plan and will lose subscription
                features and functionality. If you don’t pay for your
                subscription(s) on time, we reserve the right to suspend you or
                remove subscription features.
              </p>
              <p>
                <strong>Beta Releases and Free Access Subscriptions:</strong>{" "}
                Decentro may provide Customer with a Decentro Service for free
                or on a trial basis (a “Free Access Subscriptions”) or with
                “alpha”, “beta”, or other early-stage Decentro Services,
                integrations, or features (“Beta Releases”), which are optional
                for Customer to use. This Section will apply to any Free Access
                Subscriptions or Beta Releases (even if Beta Releases are
                provided for a fee or counts towards Customer’s Subscription
                Plan) and supersedes any contrary provision in these Terms.
                Decentro may use good faith efforts in its discretion to assist
                Customer with Free Access Subscriptions or Beta Releases.
                Nevertheless, and without limiting the other disclaimers and
                limitations in these Terms, customer agrees that any free access
                subscription or beta releases are provided on an “as is” and “as
                available” basis without any warranty, support, maintenance,
                storage, sla, or indemnity obligations of any kind. With respect
                to beta releases, customer further acknowledges and agrees that
                beta releases may not be complete or fully functional and may
                contain bugs, errors, omissions, and other problems for which
                Decentro will not be responsible. Accordingly, any use of beta
                releases are at customer’s sole risk. Decentro makes no promises
                that future versions of Beta Releases will be released or will
                be available under the same commercial or other terms. Decentro
                may terminate Customer’s right to use any Free Access
                Subscriptions or Beta Releases at any time for any reason or no
                reason in Decentro’s sole discretion, without liability.
              </p>
              <h4>Basic Service Terms</h4>
              <p>
                <strong>Intellectual Property:</strong> the Agreement provides
                the Customer a limited right to access and use the information
                through API/s and/or Decentro, during the Term of the Agreement.
                the Agreement does not convey any additional rights in the API
                and/or Decentro and/or the Service, or in any intellectual
                property rights associated therewith. The Parties hereby agree
                that all rights, title and interest in and to the API and/or
                Decentro, including but not limited to all hardware, software
                and other components required for such purpose, and all related
                rights, remain with and belong exclusively to Decentro at all
                times.
              </p>
              <p>
                <strong>Service Charges:</strong> The Service Provider shall
                provide Services to Customer at prices mentioned in the
                agreement. The Customer will be obliged to pay the Service
                Subscription Charges along with all applicable taxes as
                mentioned.
              </p>
              <p>
                <strong>Subscriptions:</strong> Every Subscription Amount paid
                by the Customer for availing the Services shall be valid for a
                certain period of time as mentioned in the Annexure B. In case
                the Customer has exhausted the validity of the Subscription
                amount, the Customer shall have to recharge the account within
                the “Grace Period”, being a period of 15 days after the expiry
                of the validity period to allow the Customer to recharge the
                account. In case, the Customer fails to recharge the account
                after the end of the Grace Period, the existing balance in the
                Customer’s account shall be exhausted. Service Provider expects
                Customer to pre-empt demand and switch to a higher subscription
                plan in-order to avoid this scenario. Service provider will
                notify the Customer if they’re close to exhausting their API
                limits.
              </p>
              <p>
                <strong>Taxes:</strong> All amounts set out in the Agreement are
                subject to Goods and Services Tax (GST) or other local
                applicable taxes, which shall be paid by Customer at the rate
                and the manner prescribed by law from time to time. Service
                Provider shall invoice Customer for all appropriate taxes and
                expenses for which the Service Provider is obliged to collect.
                In no event will the Customer be liable for the payment of any
                penalties or interest due on such taxes which has already been
                paid by the Customer on time. The Service Provider shall if and
                when required by Customer assist and cooperate with Customer in
                challenging the validity of a tax provided that Customer shall
                bear “Service Provider’s reasonable costs and expenses” in
                connection with any such challenge.
              </p>
              <p>
                <strong>Compliance</strong> The Customer shall, at all times,
                comply with the provisions contained in the Information
                Technology Act, 2000 and the statutory rules framed there under,
                from time to time, in so far as the same has application to its
                operations in accordance with the Agreement, including
                collection of information from end consumer, and also with all
                other Laws, rules and regulations, whether already in force or
                which may be enacted from time to time, pertaining to data
                security and management, data storage, data processing, data
                sharing, data protection, and various rules, regulation and
                provisions as may be applicable, as and when the same is enacted
                into a law and comes into force in the performance of its
                obligations and the exercise of its rights under the Agreement
                and shall ensure the same level of compliance by its employees
                or contractors;
              </p>
              <p>
                If you have signed an agreement with our Indian entity and are
                using our APIs from the same entity, then all the data will only
                flow through our Indian data centers as per compliance
              </p>
              <p>
                <strong>Usecase Categories:</strong> The Customer shall, at all
                times, only serve the usecases that it explicitly mentioned at
                the time of signing up and will not switch or add a new usecase
                without prior approval from Decentro. For confirmation, the
                customer has agreed that it will not serve the following
                usecases at any point of time (Blacklisted Categories) -
              </p>
              <ol>
                <li>Speculative Gaming,</li>
                <li>Gambling,</li>
                <li>Chit funds,</li>
                <li>Casino,</li>
                <li>Multilevel Marketing,</li>
                <li>Ponzi schemes,</li>
                <li>Spa,</li>
                <li>Escort Services,</li>
                <li>Friendship Clubs,</li>
                <li>Network Marketing,</li>
                <li>Lottery,</li>
                <li>Equity crowd funding,</li>
                <li>and any other speculative activities</li>
              </ol>
              <p>
                <strong>Confidentiality:</strong> The Customer acknowledges and
                agrees that the Access Key/s and login credentials are meant to
                be confidential and that the misuse of the Access Key/s and
                login credentials by the Customer or a third party could cause
                substantial loss and damage to Decentro and its ecosystem.
                Accordingly, the Customer will implement appropriate measures to
                protect the security of the Access Key/s and not provide the
                Access Key/s to any third party, without prior written consent
                of Decentro.
              </p>
              <p>
                <strong>Reverse Engineering:</strong> The Customer shall not
                reverse engineer or use other techniques to access internal data
                structures, decompile, disassemble or copy any source code or
                underlying ideasor algorithms of the API and Decentro; or shall
                not grant any rights in the API to or for the benefit of any
                third party (except of authorized users), remove/alter/obscure
                any trademark/intellectual property/marks on or in the API or
                Decentro.
              </p>
              <p>
                <strong>Cooperation:</strong> In case of any investigations
                around fraud(s) or dispute (s), the Customer agrees that it
                shall extend full cooperation to the Service Provider, and/or
                any agency appointed/authorized by it and/or any other
                authorized investigation agency appointed by the Government of
                India, including, but not limited to, providing access to their
                premises, records, personnel and any other relevant resource /
                information, etc.
              </p>
              <p>
                <strong>Unauthorized Access:</strong> The Service Provider shall
                indemnify the Customer against any claims, damage, loss or
                expense arising from or in connection with any act by a
                contractor, sub-contractor, or an employee of the Service
                Provider which results in, or is intended by such contractor,
                sub-contractor or employee to result in malicious access into
                any of Customer’s systems, data or Confidential Information. The
                events to which this indemnity applies is in no way intended to
                limit “Service Provider’s” obligation to take all action
                necessary to protect against the unauthorized use, by its
                contractors, sub-contractors or employees, of Customer’s
                proprietary information and accordingly limit access to
                Customer’s systems, data and confidential information.
                Notwithstanding anything contained in the Agreement, it is
                agreed that the quantum of such indemnity under any
                circumstances shall not exceed the total invoiced value of the
                Service Provider for that specific calendar month.
              </p>
              <p>
                <strong>Indemnity:</strong> The Customer agrees not to hold the
                Service Provider, its affiliates, its licensors, or any of such
                parties, agents, employees, officers, directors, corporate
                partners, or participants liable for any damage, suits, claims,
                and/or controversies (collectively, “liabilities”) that have
                arisen or may arise, whether known or unknown, relating to the
                Customer’s acts, including without limitation any liabilities
                arising in connection with the conduct, act or omission of any
                end-user, any dispute with any end-user, any instruction,
                advice, act, or service provided by the Customer or its
                affiliates or licensors and any destruction of the Customer’s
                information.
              </p>
              <p>
                <strong>Liability:</strong> Under no circumstances will the
                Service Provider, its affiliates, its licensors, or any of such
                parties&apos agents, employees, officers, directors, corporate
                partners, or participants be liable for any direct, indirect,
                incidental, consequential, special or exemplary damages suffered
                by the Customer and/or its end-users, due to performance of any
                services by the Customer with its end-users, even if advised of
                the possibility of the same
              </p>
              <p>
                <strong>Force Majeure:</strong> Neither Party shall be liable to
                the other for any delay or non-performance of its obligations
                under the Agreement arising from any cause beyond its reasonable
                control including, without limitation, any of the following: act
                of God, governmental act, war, fire, flood, explosion or civil
                commotion. Subject to the affected Party promptly notifying, the
                other Party in writing of the cause and the likely duration of
                the cause, the performance of the affected Party’s obligations,
                to the extent affected by the cause, shall be suspended during
                the period that the cause persists provided that if performance
                is not resumed within 90 (ninety) days after that notice the
                other Party may by notice in writing terminate the Agreement.
              </p>
              <p>
                <strong>Grievance:</strong> Any violation of the terms by
                customers, partners, providers or any concerns/disputes may be
                reported to the Decentro Grievance Officer at
                grievances@decentro.tech. Decentro shall address the complaints
                within a stipulated time based on the nature of the query but in
                no case more than 20 days from the date of complaint.
              </p>
              <p>
                <strong>Payment APIs:</strong> Decentro will not be responsible
                for any disputes between the parties involved in the
                transaction. For e.g., prices, quality, quantity, delivery,
                non-delivery, or delay in delivery of the products.{" "}
              </p>
              <p>
                Decentro also abstains from any liability that arises from delay
                in delivery of payment as the payment is dependent on parties
                such as acquiring financial institutions, Issuing & Acquiring
                Bank processors, and other third parties.
              </p>
              <p>
                Subject to “Refunds / Chargebacks”, Decentro agrees to settle
                the Transaction Amount (net of Permissible Deductions) into the
                Customer’s settlement account within two (2) Nodal Bank Working
                Days following the date of the Transaction completion (T) as per
                the definition followed by the customer
              </p>
              <p>
                <strong>Refunds / chargebacks:</strong> A chargeback shall mean
                a transaction that is uncollectible and returned to the service
                provider/ Decentro for a refund to the concerned payer due to
                any of the following reasons:
              </p>
              <ol>
                <li>
                  Any payment which the merchant/payer refuses to honor or
                  demands a refund of because the products purchased or the
                  delivery thereof, was not as promised or was defective,
                  deficient, incomplete, and /or unsatisfactory for any reason
                  whatsoever, or that payment for the same has already been made
                </li>
                <li>Any payment that was returned by the acquiring bank</li>
                <li>Any transaction that is unsuccessful</li>
                <li>
                  Any debit arising out of any alleged hacking breach of
                  security or encryption that may be utilized by the service
                  provider/ decentro/ payee from time to time
                </li>
              </ol>
              <p>
                Decentro, once it receives a chargeback request from its banking
                partner blocks the concerned amount in the merchant’s master
                virtual account. Decentro informs the merchant to either approve
                or reject the chargeback with valid proof of delivery of
                service. Decentro either accepts the counter or rejects and asks
                the merchant to initiate a refund to the consumer. Decentro,
                post this, informs the banking partner of the same. Decentro
                doesn’t cater to the refund scenarios as the same is handled by
                its merchants.
              </p>
              <p>
                Merchants and consumers can write a mail to Decentro at
                support@decentro.tech for any support
              </p>
              <p>
                Decentro shall not be responsible to make payments in respect of
                any chargeback unless it has received the requisite amounts from
                the concerned acquiring bank/ service provider/ payee/
                merchant/marketplace. Decentro shall not be responsible for any
                claims, disputes, or penalties arising in connection with such
                chargeback, Decentro shall be indemnified against the same. In
                the event of the receipt by decentro of an amount of a
                chargeback from the acquiring bank/service provider, decentro
                shall pass on to merchant/marketplace/ payer such amount
                received by them within 7 days
              </p>
              <p>
                In the event that the parties have agreed that
                merchant/marketplace/ payer is entitled to chargeback any
                transaction, decentro may at its discretion, give effect to such
                chargeback entitlement in any one or more of the following
                methods:
              </p>
              <ol>
                <li>
                  Deduction of the relevant amount or any part thereof from any
                  amounts to the payee
                </li>
                <li>
                  Billing the concerned party for the relevant amount or any
                  part thereof&quot;
                </li>
              </ol>
              <p>
                <strong>Customer Grievance Redressal & Contact</strong>
              </p>
              <p>
                You may contact us with any inquiry, complaints, or concerns
                with regards to policy, terms, and content of this website or by
                communicating in writing to the Grievance cum Nodal Officer at
                the details mentioned below:
              </p>
              <p>Varsha Deiveegan</p>
              <br />
              <p>Decentro Tech Private Limited</p>
              <br />
              <p>
                ADDRESS: 461/J, Shri Krishna Temple Rd, Indira Nagar 1st Stage,
                Stage 1, Indiranagar,{" "}
              </p>
              <p>Bengaluru, Karnataka 560038</p>
              <p>Phone No: 9513030099</p>
              <p>E-mail: grievances@decentro.tech</p>
            </div> */}
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

export default DecentroTermsAndConditions;
