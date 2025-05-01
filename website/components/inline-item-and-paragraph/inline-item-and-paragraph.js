import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/inline-item-and-paragraph/inline-item-and-paragraph.module.scss";
import Accordion from "../accordion/accordion";

const InlineItemAndParagrah = (props) => {
  const content = useRef(null);
  const [accordionExpand, setAccordionExpand] = useState(false);

  // testing if open faqs accordions rank well on google so if page attr is present in props then active
  const [active, setActive] = useState(props.page ? "active" : "");
  const [height, setHeight] = useState("0px");
  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  useEffect(() => {
    if (props.page) setHeight(`${content.current.scrollHeight}px`);
  }, []);

  const toggleExpand = () => {
    setAccordionExpand(!accordionExpand);
  };

  return (
    <div className={styles["inline-image-and-item-container"]}>
      <div className={styles["inline-image-and-paragraph"]}>
        <div className={styles["item"]}>
          <div className={styles["collapse-all-btn"]} onClick={toggleExpand}>
            {!accordionExpand ? "Expand All" : "Collapse All"}
          </div>
          {props.data.itemSection === "accordion"
            ? props.data.accordionSectionItems.map((item, index) => {
                return (
                  <Accordion
                    data={item}
                    key={index}
                    accordionExpand={accordionExpand}
                  />
                );
              })
            : null}
        </div>

        <div className={styles["paragraph"]}>
          <h2
            dangerouslySetInnerHTML={{ __html: props.data.contentSectionTitle }}
          ></h2>
          <p
            dangerouslySetInnerHTML={{
              __html: props.data.contentSectionDescription,
            }}
          ></p>
          {props.data.contentImage && (
            <div className={styles["features-image"]}>
              <img src={props.data.contentImageSrc} alt="banner image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InlineItemAndParagrah;
