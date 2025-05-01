import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "../../styles/components-styles/faq-accordion/faq-accordion.module.scss";

function FaqAccordion(props) {
  const content = useRef(null);
  const [active, setActive] = useState(props.accordionExpand ? "active" : "");
  const [height, setHeight] = useState(props.accordionExpand ? "unset" : "0px");
  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  useEffect(() => {
    if (props.accordionExpand) {
      setActive("active");
      setHeight("unset");
    } else {
      setActive("");
      setHeight("0px");
    }
  }, [props.accordionExpand]);

  return (
    <div className={styles["accordion-section"]}>
      <div
        className={styles["accordion"] + " " + `${active}`}
        onClick={() => toggleAccordion()}
      >
        <h2 className={styles["accordion-title"] + " " + styles[`${active}`]}>
          {props.data.query}
        </h2>
        {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div
        ref={content}
        className={styles["accordion-content"]}
        style={{ maxHeight: `${height}` }}
      >
        <p
          className={styles["accordion-text"]}
          dangerouslySetInnerHTML={{ __html: props.data.solution }}
        ></p>
        {props.data.bulletPoints
          ? props.data.bulletPoints.map(function (object, i) {
              return (
                <p
                  className={styles["bullet-point"]}
                  dangerouslySetInnerHTML={{ __html: object.text }}
                  key={i}
                ></p>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default FaqAccordion;
