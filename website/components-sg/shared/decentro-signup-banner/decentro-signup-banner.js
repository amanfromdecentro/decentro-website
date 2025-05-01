import React from "react";
import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";

const DecentroBanner = (props) => {
  const previousPage = (event) => {
    window.history.back();
  };

  return (
    <div className="decentro-banner">
      <FaArrowLeft className="cancel-banner" onClick={previousPage} />
      <img
        className="banner-img"
        src="/images/signup/signup-bg.svg"
        alt="banner"
      />
      <div className="decentro-metrics">
        <div className="metric-item">
          <img src="/images/signup/partner.svg" alt="partners" />
          <p className="metric-title">
            <span>800+</span>
            <br />
            Customers
          </p>
        </div>
        <div className="metric-item">
          <img src="/images/signup/api.svg" alt="apis" />
          <p className="metric-title">
            <span>200M+</span>
            <br />
            API Transactions
          </p>
        </div>
        <div className="metric-item">
          <img src="/images/signup/growth.svg" alt="gtv" />
          <p className="metric-title">
            <span>$3B+</span>
            <br />
            Annual GTV
          </p>
        </div>
      </div>
    </div>
  );
};

DecentroBanner.propTypes = {
  label: PropTypes.any,
};

DecentroBanner.defaultProps = {
  label: { light: "Welcome", bold: "Back!" },
};

export default DecentroBanner;
