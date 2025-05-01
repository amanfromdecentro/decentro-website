import { React, useContext } from "react";
import HelpSectionContext from "../../contexts/HelpSectionContext";

const TicketSupport = () => {
  const { entityName } =
    useContext(HelpSectionContext);

  const supportEmail = entityName === "decfin" ? "pgsupport@decentro.tech" : "support@decentro.tech";
  const supportZohoLink = entityName === "decfin" ? "https://decfintechprivatelimited.zohodesk.in/portal/en/signin" : "https://decentrodecfin.zohodesk.in/portal/en/signin";
  const supportNumber = entityName === "decfin" ? 9108480886 : 9513030099
  return (
    <div className="ticket-support-container">
      <div className="ticket-support-links">
        <div className="item-link">
          <a
            href={supportZohoLink}
            target="_blank"
          >
            Raise a support ticket
          </a>
          <img src="/images/expand.svg" />
        </div>
        <div className="item-link">
          <a
            href={supportZohoLink}
            target="_blank"
          >
            Track your request
          </a>
          <img src="/images/expand.svg" />
        </div>
      </div>
      <div className="connect-with-decentro">
        <p>Or connect with us at:</p>
        <p className="email">
          <a href={`mailto:${supportEmail}`} className="blue-bold">
            {supportEmail}
          </a>
        </p>
        <p className="mobile-number">
          <a href={`tel:+91${supportNumber}`} className="blue-bold">+91-{supportNumber}</a>
        </p>
        {/* <p className="blue-bold number">+91 999 999 9999</p> */}
      </div>
    </div >
  );
};

export default TicketSupport;
