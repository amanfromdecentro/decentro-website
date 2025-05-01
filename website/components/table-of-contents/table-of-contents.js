import React from "react";
import styles from "../../styles/components-styles/table-of-contents/table-of-contents.module.scss";

function TableOfContents(props) {
  const scrollToSection = (sectionRef) => {
    var elToScroll = document.querySelector("#" + sectionRef);
    elToScroll.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  };

  return (
    <div className={styles["table-of-contents"]}>
      <div className={styles["table-contents-wrapper"]}>
        <h1 className={styles["table-header"]}>
          Table of <span>Contents</span>
        </h1>
        <div className={styles["table-contents"]}>
          <ul>
            {props.data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={styles["table-content-level-1"]}
                  onClick={() => {
                    scrollToSection(item.id);
                  }}
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TableOfContents;
