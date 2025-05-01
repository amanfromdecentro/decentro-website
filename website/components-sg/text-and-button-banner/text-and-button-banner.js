import Link from "next/link";

const TextAndButtonBanner = (props) => {
  return (
    <div className="text-and-button-banner">
      <div
        className="text-and-button-banner-main"
        style={{
          background: props.data.ctaSectionBgColor,
        }}
      >
        <div className="text-content">
          <h2
            className="text-content-title"
            dangerouslySetInnerHTML={{ __html: props.data.ctaTitle }}
            style={{
              color: props.data.contentTextColor,
            }}
          ></h2>
          <p
            className="cta-description"
            dangerouslySetInnerHTML={{ __html: props.data.ctaDescription }}
            style={{
              color: props.data.contentTextColor,
            }}
          ></p>
        </div>
        <div className="signup-button">
          <Link
            href={props.data.ctaButtonLink}
            style={{
              background: props.data.ctaBgColor,
              color: props.data.ctaTextColor,
            }}
            target={props.data.newTab ? "_blank" : ""}
          >
            {props.data.ctaButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextAndButtonBanner;
