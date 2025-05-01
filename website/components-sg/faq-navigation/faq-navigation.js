import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const FaqNavigation = (props) => {
  const [currentSectionRef, setCurrentSectionRef] = useState(null);
  const scrollToSection = (event, sectionRef) => {
    var elToScroll = document.getElementById("#" + sectionRef);
    window.location.hash = sectionRef;
    elToScroll.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  };

  const removeAllActiveItems = () => {
    const navElements = document.getElementsByClassName("inner-link");
    for (let i = 0; i < navElements.length; i++) {
      if (navElements[i].classList.contains("active-menu")) {
        navElements[i].classList.remove("active-menu");
      }
    }
  };

  return (
    <nav>
      <div className="list-item-wrapper">
        {props.navigation.map((section, index) => {
          return (
            <div
              key={index}
              className="inner-link"
              data-id={section.queryLinkIdentifier}
              onClick={(event) => {
                scrollToSection(event, section.queryLinkIdentifier);
              }}
              href="javascript:void;"
            >
              <div className="dot"></div>
              <div className="display-name">{section.displayName}</div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default FaqNavigation;
