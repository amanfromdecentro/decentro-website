import { React } from "react";

const TicketSupport = () => {
  const supportNumber = 9513030099
  return (
    <div className="ticket-support-container">
      <div className="ticket-support-links">
        <div className="item-link">
          <a
            href="https://decentrodecfin.zohodesk.in/portal/en/signin"
            target="_blank"
          >
            Raise a support ticket
          </a>
          <img src="/images/expand.svg" />
        </div>
        <div className="item-link">
          <a
            href="https://decentrodecfin.zohodesk.in/portal/en/signin"
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
          <a href="mailto:support@decentro.tech" className="blue-bold">
            support@decentro.tech
          </a>
        </p>
        <p className="mobile-number">
          <a href={`tel:+91${supportNumber}`} className="blue-bold">+91-{supportNumber}</a>
        </p>
        {/* <p className="blue-bold number">+91 999 999 9999</p> */}
      </div>
    </div>
  );
};

export default TicketSupport;
