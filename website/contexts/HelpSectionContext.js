import React, { useEffect, createContext, useContext, useState } from "react";

const HelpSectionContext = createContext();

export const HelpSectionProvider = ({ children }) => {
  const [currentVisitorType, setCurrentVisiotorType] = useState(null);
  const [visitorIdentified, setVisitorIdentified] = useState(false);
  const [entityName, setEntityName] = useState("")
  const consumerFAQs = [
    {
      query: "How to check the status of the transaction?",
      solution:
        "Decentro sends the status of the transaction to the merchant directly. To incur about the same, request you to contact the merchant.<br/><br/>Alternatively, you can reach out to Decentro Support and we can help in connecting you with the merchant.",
    },
    {
      query: "How to report a suspicious transaction?",
      solution:
        "To report a suspicious transaction, request you to raise the same to your merchant with the transaction details like Bank Reference Number, date and time. Decentro works closely with its Merchant to investigate such activities and take proper actions for the same.",
    },
    {
      query: "How do I raise a Chargeback?",
      solution:
        "A consumer can directly raise a chargeback from the merchant’s application or website. Once raised, appropriate actions will be taken to resolve the same.",
    },
    {
      query: "How do I raise a refund?",
      solution:
        "To raise a refund, request you to connect with your Merchant. Decentro works closely with its Merchants to refund all such cases in a coordinated manner.",
    },
    {
      query: "How do I cancel my order after making a payment?",
      solution:
        "A consumer can cancel the order according to the terms and conditions of the merchant. Please reach out to your merchant for its cancellation policy.",
    },
    {
      query: "How do I check the status of my refund?",
      solution:
        "Decentro sends the status of the refund to the merchant directly. To incur about the same, request you to contact the merchant.<br/><br/>Alternatively, you  can reach out to Decentro Support and we can help in connecting you with the merchant.",
    },
    {
      query: "What if my Aadhar details are not updated?",
      solution:
        "You can easily update your Aadhar details from any online/offline Aadhar centres present across the country.<br/><br/>Visit the link here for more details - <a href='https://uidai.gov.in/en/my-aadhaar/update-aadhaar.html' target='_blank'>https://uidai.gov.in/en/my-aadhaar/update-aadhaar.html</a>",
    },
    {
      query: "What if my ENACH Registration gets failed?",
      solution:
        "In case of an ENACH registration getting failed, request your merchant to re-initiate the registration process after successful remedial of the error.",
    },
  ];

  const MerchantFAQs = [
    {
      query: "What is the process for onboarding onto Decentro?",
      solution:
        "A Merchant can easily fill up the signup form, present on Decentro’s website itself, to register themselves for the Decentro’s APIs. Once filled, the merchant will receive Staging Credentials on its Email ID, to test out various APIs of Decentro.<br/><br/>Alternatively, you can reach out to our Sales Team to better understand the APIs and Pricing structure.",
    },
    {
      query: "What are the Integration Environments provided by Decentro?",
      solution:
        "Decentro provides two Integration Environments which help the Merchant to integrate and validate various test scenarios:",
      bulletPoints: [
        {
          text: "Staging",
        },
        {
          text: "Prod",
        },
      ],
    },
    {
      query: "What needs to be provided as part of IP Whitelisting?",
      solution:
        "Merchants need to provide “Indian Server Static IP Address” to whitelist their IP and run Decentro APIs on their end, especially on tools like Postman.",
    },
    {
      query:
        "What are the Security Certification and VAPT Reports available with Decentro?",
      solution:
        "We are ISO 27001 compliant and have VAPT Reports for application and network as well as a source code review report.",
    },
    {
      query: "How many Virtual Accounts can be created in a day?",
      solution:
        "There is no limit on creating Virtual Accounts on Decentro. Merchants can create as per their use case and usage.",
    },
    {
      query:
        "How will I get to know the Status of a particular Collection or Payout Transaction?",
      solution:
        "Merchants can configure their Endpoints on Decentro to receive Callbacks for the status of the transaction (Transaction Callback and Account Balance Callback). The same can be shared to support@decentro.tech, along with valid headers, to get the Endpoints configured.<br/><br/>Alternatively, Merchants can make use of “Check Payment Status” and “Get Transaction Status” APIs for Collection and Payouts respectively, in case the Callbacks are missed.",
    },
    {
      query: "Who can use UPI collection products of Decentro?",
      solution:
        "Any registered Indian business can use UPI collection capabilities of Decentro to collect funds from individuals or businesses.",
    },
    {
      query: "Does Decentro provide an SDK for UPI collections?",
      solution:
        "Yes. Decentro does have an SDK which powers collections like payment link (intent flow) and collection request (under development).",
    },
    {
      query: "What is the daily/monthly UPI Collection Limit?",
      solution:
        "There is no Collection Limit as such on a daily or monthly basis from Decentro’s side. Individual banks have overall UPI collections/day which can vary from 1L - 2L.",
    },
    {
      query:
        "Can the UPI collections stack be set up on a platform's business account/s?",
      solution:
        "Yes. Decentro can power UPI collections on a current or a similar business account where Decentro already has integrations in place.",
    },
    {
      query:
        "Does Decentro require a platform to use a virtual account for UPI collections as well?",
      solution:
        "Yes. Decentro uses the virtual account stack as a ledger account to maintain collections across different modes and transaction types at a single place. The platform can choose to create one or more virtual accounts and map the payment link to be generated against it.<br/><br/>That said, Decentro is making changes to its stack to decouple UPI stack and the virtual accounts stack so that platforms can choose to use them together or independently.",
    },
    {
      query:
        "Can the platform create the payer handle as per their naming convention?",
      solution:
        "Decentro follows a standard naming convention to be compliant with statutory guidelines set by NPCI (which regulates UPI) and its partner bank. Typically, the trade name or the legal name of the platform/merchant can be present in the handle.",
    },
    {
      query: "Who has Decentro partnered with to power UPI collections?",
      solution:
        "Decentro has partnered with NPSTX (Timepay) and Phonepe to power UPI based collections. In addition, Decentro powers UPI collections on a platform’s own account with Yes Bank and ICICI Bank.",
    },
    {
      query: "Do we have any customization available, in links or QR code?",
      solution:
        "Decentro provides customization in QR code where the company can put its own logo and customise it according to its theme.",
    },
    {
      query:
        "How will a platform know if a transaction has happened against a QR code?",
      solution:
        "Decentro triggers an account balance callback for each transaction against a static/dynamic QR code and transaction status callback for a dynamic QR code.",
    },
    {
      query: "How are the funds settled to the beneficiary?",
      solution:
        "Decentro settles the funds to the registered beneficiary's bank account as per standard settlement cycles as agreed upon at the time of onboarding.",
    },
    {
      query:
        "Is a unique Mobile Number and Customer ID required for each account creation?",
      solution:
        "Yes. A unique combination of Mobile Number and Customer ID is required to generate a Virtual Account.",
    },
    {
      query: "Which Provider Secret to be used in Account Creation?",
      solution:
        "No Provider Secret is needed while creating a virtual account.In the request body itself, one can specify the Bank on which they wish you create virtual account of",
    },
  ];

  const [currentFAQs, setCurrentFAQs] = useState(consumerFAQs);

  useEffect(() => {
    if (currentVisitorType) {
      if (currentVisitorType.id === 1) {
        setCurrentFAQs(consumerFAQs);
      } else if (currentVisitorType.id == 2) {
        setCurrentFAQs(MerchantFAQs);
      }
    }
  }, [currentVisitorType]);
  return (
    <HelpSectionContext.Provider
      value={{
        currentVisitorType,
        setCurrentVisiotorType,
        currentFAQs,
        visitorIdentified,
        setVisitorIdentified,
        setCurrentFAQs,
        entityName,
        setEntityName
      }}
    >
      {children}
    </HelpSectionContext.Provider>
  );
};

export default HelpSectionContext;
