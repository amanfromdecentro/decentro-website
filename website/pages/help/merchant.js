import React, { useState, useEffect, useContext } from "react";
import HelpSectionContext from "../../contexts/HelpSectionContext";
import { useRouter } from "next/router";
import HelpMainSection from "../../components/help-main-section/help-main-section";
import Head from "next/head";

const MerchantHelp = (props) => {
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
      id: 2,
      displayName: "Merchant",
    });
    setCurrentFAQs([
      {
        query: "What capabilities does Decentro offer?",
        solution:
          "Decentro helps its clients power the below capabilities through APIs or dashboard.",
        bulletPoints: [
          {
            text: "Onboarding of individuals & businesses through our KYC & Onboarding module",
          },
          { text: "Collections through UPI from our UPI collections module" },
          {
            text: "Settlements to merchants for collections through our Settlements module",
          },
          {
            text: "Payouts to individuals & businesses through our Payouts module",
          },
          {
            text: "Recurring collections using UPI through the UPI autopay module",
          },
          {
            text: "Recurring collections using NACH through the ENACH module",
          },
        ],
      },
      {
        query:
          "What are the Security Certification and VAPT Reports available with Decentro?",
        solution:
          "We are ISO 27001 compliant and have VAPT Reports for application and network as well as a source code review report.",
      },
      {
        query:
          "What is the UAT environment? And how is it different from production",
        solution:
          "The UAT environment is like a test environment that allows you to explore our APIs and try them out using the staging credentials. This one doesn’t involve real money transfers for safety purposes but essentially gives you all the responses exactly like the way they would come in production.",
      },
      {
        query:
          "What are the different products under the KYC & Onboarding module of Decentro?",
        solution:
          "Decentro’s capabilities under the KYC & Onboarding module include.",
        bulletPoints: [
          { text: "CKYC search & download" },
          { text: "Aadhaar XML (offline XML)" },
          { text: "Digilocker" },
          { text: "Validate IDs" },
          { text: "OCR (Scan & Extract)" },
          { text: "Image recognition capabilities" },
          { text: "Document classification capabilities" },
        ],
      },
      {
        query: "What are the UPI collection products of Decentro?",
        solution:
          "Decentro powers the below capabilities under its UPI collections stack.",
        bulletPoints: [
          { text: "Intent flow" },
          { text: "Collection request" },
          { text: "Static QR" },
          { text: "Dynamic QR" },
        ],
      },
      {
        query: "What are the payout modes powered by Decentro?",
        solution:
          "Decentro powers the below modes of transfer under its payouts stack.",
        bulletPoints: [
          { text: "IMPS" },
          { text: "UPI" },
          { text: "NEFT" },
          { text: "RTGS" },
        ],
      },
    ]);
    dropdownList.push(
      {
        id: 1,
        displayName: "Consumer",
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
      text: "Merchant",
      link: "/help/merchant",
    },
  ];

  return (
    <>
      <Head>
        <title>Raise Merchant Support Tickets - Decentro Help & Support</title>
        <link rel="canonical" href="https://decentro.tech/help/" />
        <meta
          name="description"
          content="Reach out to Decentro Merchant Support and get your Payments & Banking issues resolved. We typically get back to all queries within 24 hours. Raise a ticket here."
        />
        <meta name="keywords" content="CKYC" />
        <meta
          property="og:title"
          content="Raise Merchant Support Tickets - Decentro Help & Support"
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
                          if (item.id === 1) {
                            router.asPath = router.asPath + "/consumer";
                          } else if (item.id === 2) {
                            router.asPath = router.asPath + "/merchant";
                          }
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

export default MerchantHelp;
