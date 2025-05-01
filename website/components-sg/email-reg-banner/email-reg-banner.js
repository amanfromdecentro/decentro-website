import React, { useState } from "react";
import styles from "../../styles/components-styles/email-reg-banner/email-reg-banner.module.scss";

const EmailRegBanner = (props) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  function subscribeToNewsletter() {
    let emailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == null || email == undefined || !email.match(emailformat)) {
      setFailed(true);
    } else {
      setFailed(false);
      fetch(
        "https://api.moosend.com/v3/subscribers/4dee5aab-9980-48a6-8d38-5d64da1b1f7e/subscribe.json?apikey=4ea174c1-f494-431f-9128-21c183bc4b88",
        {
          method: "POST",
          body: JSON.stringify({
            Email: email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then((response) => {
        response.json().then((data) => {
          if (data.Error) setFailed(true);
          else setSuccess(true);
        });
      });
    }
  }

  return (
    <div className={styles["subscribe-container"]}>
      <div className={styles["text-content"]}>
        <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
        <p dangerouslySetInnerHTML={{ __html: props.data.tagline }}></p>
      </div>
      {success ? (
        <label className={styles["subscribe-success"]}>
          Great! We have added you to our special list
        </label>
      ) : (
        <div
          className={`${
            failed
              ? styles["subscribe-box"] + " " + styles["error shake"]
              : styles["subscribe-box"]
          }`}
        >
          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            onChange={(event) => {
              event.target.value.length > 0
                ? setBtnActive(true)
                : setBtnActive(false);
              setEmail(event.target.value);
              setFailed(false);
            }}
          />
          <button
            style={{ visibility: btnActive ? "visible" : "hidden" }}
            onClick={() => {
              subscribeToNewsletter();
            }}
          >
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailRegBanner;
