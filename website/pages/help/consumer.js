import React, { useState, useEffect, useContext } from "react";
import HelpSectionContext from "../../contexts/HelpSectionContext";
import { useRouter } from "next/router";
import HelpMainSection from "../../components/help-main-section/help-main-section";
import Head from "next/head";

const ConsumerHelp = (props) => {
  const router = useRouter();
  // Here
  const bannerData = {
    heading: "Hello!",
    tagline: "Are you…",
    buttonText: "Explore Now",
    newTab: false,
    imageSrc: "/images/help/banner.svg",
    titleText: "Help",
    altText: "Help",
  };
  const {
    currentVisitorType,
    setCurrentVisiotorType,
    visitorIdentified,
    setVisitorIdentified,
    setCurrentFAQs,
    currentFAQs,
  } = useContext(HelpSectionContext);

  const [boxShadowActive, setBoxShadowActive] = useState("");

  const redirectToZohoHelpdesk = (event) => {
    window.open("https://decentrodecfin.zohodesk.in/portal/en/signin");
  };

  const redirectToFAQs = (event) => {
    window.open("/help/faqs");
  };

  const [selectedElement, setSelectedElement] = useState([]);
  const [dropdownElements, setDropdownElements] = useState([]);
  const [selectedBackupItem, setSelectedBackupItem] = useState(selectedElement);
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    setVisitorIdentified(true);
    let dropdownList = [];
    setSelectedElement({
      id: 1,
      displayName: "Consumer",
    });
    setCurrentFAQs([
      {
        query: "How to check the status of the payment?",
        solution:
          "Decentro sends the status of the transaction to the merchant directly. To incur about the same, request you to contact the merchant.",
      },
      {
        query: "How to report a suspicious transaction?",
        solution:
          "To report a suspicious transaction, request you to raise the same to your merchant with the transaction details like Bank Reference Number, date and time. Decentro works closely with its Merchant to investigate such activities and take proper actions for the same.",
      },
      {
        query: "How do I raise a refund?",
        solution:
          "To raise a refund, request you to connect with your Merchant. Decentro works closely with its Merchants to refund all such cases in a coordinated manner.",
      },
      {
        query: "What is CKYC?",
        solution:
          "Central KYC Registry is a centralised repository of KYC records. Once the KYC documents are submitted by an individual, they are registered in the repository with a unique CKYC number. The CKYC number can be quoted instead of submitting physical KYC documents for any financial transaction. ",
      },
      {
        query: "How to check my CKYC record?",
        solution:
          "You can check your CKYC number through various financial services company by the below steps:",
        bulletPoints: [
          {
            text: "Log on to the respective financial services company website offering CKYC check.",
            text: "Enter your PAN Number",
            text: "Enter the security code displayed on the screen",
            text: "Your CKYC record will be shown post that",
          },
        ],
      },
      {
        query: "What if my Aadhar details are not updated?",
        solution:
          "You can easily update your Aadhar details from any online/offline Aadhar centres present across the country.",
      },
      {
        query: "What if my ENACH Registration gets failed?",
        solution:
          "In case of an ENACH registration getting failed, request your merchant to re-initiate the registration process after successful remedial of the error.",
      },
    ]);
    dropdownList.push(
      {
        id: 2,
        displayName: "Merchant",
      },
      // {
      //   id: 3,
      //   displayName: "Explorer",
      // }
    );
    setDropdownElements(dropdownList);
  }, []);

  useEffect(() => {
    setCurrentVisiotorType(selectedElement);
  }, [selectedElement]);

  var backupElement = {};

  const setAsSelectedElement = (item) => {
    if (item.id !== 3) {
      setSelectedBackupItem(selectedElement);
      backupElement = selectedElement;
      setSelectedElement(item);
      reOrderDropdown(item, dropdownElements);
      if (item.id === 1) {
        router.push("/help/consumer");
      } else if (item.id === 2) {
        router.push("/help/merchant");
      }
    } else {
      redirectToFAQs();
    }
  };

  const reOrderDropdown = (item, dropdownElements) => {
    let tempList = dropdownElements;
    for (let i = 0; i < tempList.length; i++) {
      if (tempList[i].id == item.id) {
        tempList[i] = backupElement;
      }
    }
    setDropdownElements(tempList);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  useEffect(() => {
    if (dropdownActive) {
      setBoxShadowActive("dropdown-active");
    } else {
      setBoxShadowActive("");
    }
  }, [dropdownActive]);

  const breadCrumbData = [
    {
      text: "Support Home",
      link: "/help",
    },
    {
      text: "Consumer",
      link: "/help/consumer",
    },
  ];
  return (
    <>
      <Head>
        <title>Raise Consumer Support Tickets - Decentro Help & Support</title>
        <link rel="canonical" href="https://decentro.tech/help/" />
        <meta
          name="description"
          content="Reach out to Decentro Consumer Support and get your payment issues resolved. We typically get back to all queries within 24 hours. Raise a ticket here."
        />
        <meta name="keywords" content="CKYC" />
        <meta
          property="og:title"
          content="Raise Consumer Support Tickets - Decentro Help & Support"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      {/* <HelpBreadCrumbs data={breadCrumbData} /> */}
      <div className="banner">
        <div className="left-container">
          {bannerData.inlineHeading ? (
            <h1
              dangerouslySetInnerHTML={{ __html: bannerData.inlineHeading }}
            ></h1>
          ) : (
            ""
          )}
          {bannerData.heading ? (
            <h1>
              <span>{bannerData.heading}</span>
            </h1>
          ) : bannerData.headingLight && bannerData.headingBold ? (
            <h1>
              <span className="header-light">{bannerData.headingLight}</span>
              <br />
              <span className="header-bold">{bannerData.headingBold}</span>
            </h1>
          ) : (
            ""
          )}
          {bannerData.subHeading ? (
            <h3
              dangerouslySetInnerHTML={{ __html: bannerData.subHeading }}
            ></h3>
          ) : (
            ""
          )}
          {!visitorIdentified ? (
            <h2 dangerouslySetInnerHTML={{ __html: bannerData.tagline }}></h2>
          ) : <h2>You&apos;re here as a...</h2>}
          {/* <h2 dangerouslySetInnerHTML={{ __html: props.data.tagline }}></h2> */}
          {!visitorIdentified ? (
            <div className="visitor-type-route-container">
              <div
                className="visitor-type-btn"
                onClick={(event) => {
                  setVisitorIdentified(true);
                  setSelectedElement({
                    id: 1,
                    displayName: "Consumer",
                  });
                  router.asPath = router.asPath + "/consumer";
                }}
              >
                <span>A Consumer</span>
                <img src="./images/expand.svg" />
              </div>
              <div
                className="visitor-type-btn"
                onClick={(event) => {
                  setVisitorIdentified(true);
                  setSelectedElement({
                    id: 2,
                    displayName: "Merchant",
                  });
                }}
              >
                <span>A Merchant</span>
                <img src="./images/expand.svg" />
              </div>
              <div
                className="visitor-type-btn"
                onClick={(event) => {
                  redirectToFAQs();
                }}
              >
                <span>Just Exploring</span>
                <img src="./images/expand.svg" />
              </div>
            </div>
          ) : (
            <div className="visitor-type">
              <div
                className={`selected-element item ${boxShadowActive}`}
                onClick={toggleDropdown}
              >
                <span>{selectedElement.displayName}</span>
                <img
                  src="/images/expand.svg"
                  className={dropdownActive ? "dropdown-active" : ""}
                />
              </div>
              {dropdownActive && (
                <div className="dropdown-options">
                  {dropdownElements.map((item, index) => {
                    return (
                      <div
                        className="option item"
                        key={item.id}
                        onClick={() => {
                          toggleDropdown();
                          setAsSelectedElement(item);
                        }}
                      >
                        {item.displayName}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="right-container">
          {bannerData.video ? (
            <video
              autoplay="autoplay"
              loop
              muted
              playsInline
              class="video-background "
            >
              <source src={bannerData.imageSrc} type="video/mp4"></source>
            </video>
          ) : (
            <img
              src={bannerData.imageSrc}
              alt={bannerData.altText ? bannerData.altText : "Decentro"}
              title={bannerData.titleText ? bannerData.titleText : ""}
            />
          )}
          {/* <img src={props.data.imageSrc} alt={props.data.altText? props.data.altText : "Decentro"} title={props.data.titleText ? props.data.titleText : ""} /> */}
        </div>
      </div>
      {visitorIdentified ? <HelpMainSection currentFAQs={currentFAQs} /> : null}
    </>
  );
};

export default ConsumerHelp;
