import React, { useState, useEffect, useContext } from "react";
import HelpSectionContext from "../../contexts/HelpSectionContext";
import InlineComponents from "../inline-components/inline-components";

const HelpMainSection = (props) => {
  const { currentVisitorType, setCurrentVisiotorType } =
    useContext(HelpSectionContext);
  return <InlineComponents data={props} />;
};

export default HelpMainSection;
