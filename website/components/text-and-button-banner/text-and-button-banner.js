import Link from "next/link";
import CountdownTimer from "../countdown-timer/countdown-timer";

const TextAndButtonBanner = (props) => {
  const targetDate = new Date("2024-04-14T18:30:00").getTime(); // April 14, 2024, 6:30 PM UTC
  //   We set the date to April 14, 2024, 6:30 PM UTC, which corresponds to April 15, 2024, 12:00 AM IST.
  // This adjustment accounts for the 5 hours and 30 minutes offset between UTC and IST.
  const initialTimeLeft = {
    days: Math.floor((targetDate - new Date()) / (1000 * 60 * 60 * 24)),
    hours: 0,
    minutes: 0,
    seconds: 0,
    targetDate: targetDate,
  };

  const { data } = props;
  const onlyText = data.onlyText ?? false;

  return (
    <div className="text-and-button-banner">
      <div
        className={`text-and-button-banner-main ${onlyText && `text-center`}`}
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
              marginTop: props.data.ctaTitle ? "20px" : "0",
            }}
          ></p>
          {props.data.countdownTimer ? (
            <CountdownTimer initialTimeLeft={initialTimeLeft} />
          ) : null}
        </div>
        {props.data.imagePresent ? (
          <div className="extra-image">
            <img src={props.data.imageLink} alt="image" />
          </div>
        ) : null}
        {onlyText === false && <div className="signup-button">
          <Link
            href={props.data.ctaButtonLink}
            style={{
              background: props.data.ctaBgColor,
              color: props.data.ctaTextColor,
            }}
            target={"_blank"}
          >
            {props.data.ctaButtonText}
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default TextAndButtonBanner;
