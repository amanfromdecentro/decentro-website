import React, { useState, useRef, useEffect } from "react";

function HelpAccordion(props) {
  const content = useRef(null);

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

  return (
    <div className="accordion-section">
      <div className={`accordion ${active}`} onClick={() => toggleAccordion()}>
        <h2 className="accordion-title">{props.data.query}</h2>
        <img className={`expand-btn ${active}`} src="/images/expand.svg" />
      </div>
      <div
        ref={content}
        className="accordion-content"
        style={{ maxHeight: `${height}` }}
      >
        <p
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.data.solution }}
        ></p>
        {props.data.bulletPoints
          ? props.data.bulletPoints.map(function (object, i) {
              return (
                <p
                  className="bullet-point"
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

export default HelpAccordion;
