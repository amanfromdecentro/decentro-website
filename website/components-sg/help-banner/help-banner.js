import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import HelpSectionContext from "../../contexts/HelpSectionContext";

const HelpBanner = (props) => {
  const router = useRouter();
  const {
    currentVisitorType,
    setCurrentVisiotorType,
    visitorIdentified,
    setVisitorIdentified,
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
    let dropdownList = [];
    for (let i = 0; i < props.visitorData.length; i++) {
      if (props.visitorData[i].displayName === "Consumer") {
        setSelectedElement(props.visitorData[i]);
      } else {
        dropdownList.push(props.visitorData[i]);
      }
    }
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

  return (
    <div className="banner">
      <div className="left-container">
        {props.data.inlineHeading ? (
          <h1
            dangerouslySetInnerHTML={{ __html: props.data.inlineHeading }}
          ></h1>
        ) : (
          ""
        )}
        {props.data.heading ? (
          <h1>
            <span>{props.data.heading}</span>
          </h1>
        ) : props.data.headingLight && props.data.headingBold ? (
          <h1>
            <span className="header-light">{props.data.headingLight}</span>
            <br />
            <span className="header-bold">{props.data.headingBold}</span>
          </h1>
        ) : (
          ""
        )}
        {props.data.subHeading ? (
          <h3 dangerouslySetInnerHTML={{ __html: props.data.subHeading }}></h3>
        ) : (
          ""
        )}
        {/* {!visitorIdentified ? (
          <h2 dangerouslySetInnerHTML={{ __html: props.data.tagline }}></h2>
        ) : null} */}
        <h2 dangerouslySetInnerHTML={{ __html: props.data.tagline }}></h2>
        {/* {!visitorIdentified ? ( */}
        <div className="visitor-type-route-container">
          <div
            className="visitor-type-btn"
            onClick={(event) => {
              setVisitorIdentified(true);
              setSelectedElement({
                id: 1,
                displayName: "Consumer",
              });
              router.push("/help/consumer");
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
              router.push("/help/merchant");
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
      </div>
      <div className="right-container">
        {props.data.video ? (
          <video
            autoplay="autoplay"
            loop
            muted
            playsInline
            class="video-background "
          >
            <source src={props.data.imageSrc} type="video/mp4"></source>
          </video>
        ) : (
          <img
            src={props.data.imageSrc}
            alt={props.data.altText ? props.data.altText : "Decentro"}
            title={props.data.titleText ? props.data.titleText : ""}
          />
        )}
      </div>
    </div>
  );
};

export default HelpBanner;
