import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TicketSupport from "../ticket-support/ticket-support";
import HelpAccordion from "../help-accordion/help-accordion";

const InlineComponents = (props) => {
  const router = useRouter();
  useEffect(() => {
    document
      .querySelector("#faqSection")
      .scrollIntoView({ alignToTop: true, behavior: "smooth" });
  }, []);
  return (
    <div className="inline-image-and-paragraph" id="faqSection">
      <div className="left-container">
        <div className="commonly-asked-questions" id="commonlyAskedQuestions">
          <h2>
            Popular <span>Questions</span>
          </h2>
          <div className="accordion-list">
            {props.data.currentFAQs.map(function (object, i) {
              return <HelpAccordion data={object} key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="right-container">
        <TicketSupport />
        {router.asPath === "/help/merchant" ||
        router.asPath === "/help/merchant/" ? (
          <div className="redirect-documentation">
            <a href="https://docs.decentro.tech/">
              View Documentation
              <img src="/images/expand.svg" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InlineComponents;
