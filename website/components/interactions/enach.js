import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/interactions/enach-interactions.module.scss";
import Image from "next/image";

const EnachInteractions = (props) => {
  const [buttonWidth, setButtonWidth] = useState("");
  const [formSuccessState, setFormSuccessState] = useState(false);
  const [alignRightState, setAlignRightState] = useState("");
  const [alignRightMarginControlledState, setAlignRightMarginControlledState] =
    useState("");
  const [fullWidthState, setFullWidthState] = useState("");
  const [authorisationMethod, setAuthorisationMethod] = useState("");
  const [interactionStage, setInteractionStage] = useState({
    stage1: "active",
    stage2: "",
    stage3: "",
    stage4: "",
    stage5: "",
  });

  const setStage1 = (event) => {
    setInteractionStage({
      stage1: "active",
      stage2: "",
      stage3: "",
      stage4: "",
      stage5: "",
    });
    setFormSuccessState(false);
    setAlignRightState("");
    setAlignRightMarginControlledState("");
    setSpaceBetweenControlledState("");
  };

  const setStage2 = (event) => {
    setInteractionStage({
      stage1: "",
      stage2: "active",
      stage3: "",
      stage4: "",
      stage5: "",
    });
    setAlignRightState("alignRight");
  };
  const setStage3 = (event) => {
    setInteractionStage({
      stage1: "",
      stage2: "",
      stage3: "active",
      stage4: "",
      stage5: "",
    });
    setAlignRightState("alignRight");
  };

  const setStage4 = (event) => {
    setInteractionStage({
      stage1: "",
      stage2: "",
      stage3: "",
      stage4: "active",
      stage5: "",
    });
    setAlignRightState("");
    setSpaceBetweenControlledState("");
  };

  const [spaceBetweenControlledState, setSpaceBetweenControlledState] =
    useState("");

  const handleSuccessState = () => {
    setFullWidthState("full-width");
    setFormSuccessState(true);
  };

  const handleNonSuccessState = () => {
    setFormSuccessState(false);
  };

  const handleInteraction = (event) => {
    setButtonWidth("full-width");
    setTimeout(handleSuccessState, 200);
  };

  const resetInteraction = (event) => {
    setButtonWidth("");
    setTimeout(handleNonSuccessState, 200);
  };

  const handleAuthorisationMethod = (event) => {
    setAuthorisationMethod(event.target.value);
  };

  return (
    <div className={styles["interactions-container"]}>
      <div className={styles["left-container"]}>
        <h2>
          <span className={styles["header-section-highlighted"]}>
            Try Out&nbsp;
          </span>
          Yourself
        </h2>
        <p className={styles["tagline"]}>
          As simple as a gentle tap, our APIs effortlessly facilitate seamless
          flow with just a touch
        </p>
        <div className={styles["interactions-image"]}>
          <Image
            src="/images/bg-banners/try-yourself.svg"
            alt="try yourself banner"
            width={1920}
            height={1080}
            layout="responsive"
          />
          {/* <img
            src="/images/bg-banners/try-yourself.svg"
            alt="try yourself banner"
          /> */}
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["interactions-form"]}>
          {!formSuccessState ? (
            interactionStage.stage1 ? (
              <>
                <div className={styles["transition-section"]}>
                  <div className={styles["header-section"]}>
                    <h2>{props?.header}</h2>
                    <p>Enter details to proceed</p>
                  </div>
                  <div className={styles["form-section"]}>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Account</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter payer’s UPI address"
                        />
                      </div>
                    </div>
                    <div
                      className={
                        styles["submit-section"] +
                        " " +
                        styles[`${buttonWidth}`] +
                        " " +
                        styles[`${spaceBetweenControlledState}`] +
                        " " +
                        styles[`aadhaar-screen-submit-container`]
                      }
                    >
                      <button
                        className={
                          styles[`${buttonWidth}`] +
                          " " +
                          styles[`${alignRightState}`]
                        }
                        onClick={setStage2}
                      >
                        {!formSuccessState ? (
                          <span>Confirm & Proceed</span>
                        ) : (
                          <span>Let’s Try Another Mandate</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : interactionStage.stage2 ? (
              <>
                <div className={styles["transition-section"]}>
                  <div className={styles["header-section"]}>
                    <h2>{props?.header}</h2>
                    <p>
                      EMIs will be automatically debited from your account for
                      the period of your loan
                    </p>
                  </div>
                  <div className={styles["form-section"]}>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Account</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter payer’s UPI address"
                        />
                      </div>
                    </div>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>IFSC</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter payer’s UPI address"
                        />
                      </div>
                    </div>
                    <p className={styles["help-text"]}>
                      Please make sure this account has access to net banking
                      and debit card
                    </p>
                    <div
                      className={
                        styles["submit-section"] +
                        " " +
                        styles[`${buttonWidth}`] +
                        " " +
                        styles[`${spaceBetweenControlledState}`] +
                        " " +
                        styles[`aadhaar-screen-submit-container`]
                      }
                    >
                      <button
                        className={
                          styles[`${buttonWidth}`] +
                          " " +
                          styles[`${alignRightState}`]
                        }
                        onClick={setStage3}
                      >
                        {!formSuccessState ? (
                          <span>Confirm & Proceed</span>
                        ) : (
                          <span>Let’s Try Another Mandate</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : interactionStage.stage3 ? (
              <>
                <div className={styles["transition-section"]}>
                  <div className={styles["header-section"]}>
                    <h2>Authorise</h2>
                    <p>Select authorisation method</p>
                  </div>
                  <div className={styles["form-section"]}>
                    <div className={styles["radio-buttons-container"]}>
                      <div
                        className={styles["radio-item"]}
                        onChange={handleAuthorisationMethod}
                      >
                        <input
                          type="radio"
                          id="netBanking"
                          name="authorisationMethod"
                          value="Net Banking"
                        />
                        <label for="netBanking">Net Banking</label>
                        <br></br>
                      </div>
                      <div
                        className={styles["radio-item"]}
                        onChange={handleAuthorisationMethod}
                      >
                        <input
                          type="radio"
                          id="debitCard"
                          name="authorisationMethod"
                          value="Debit Card"
                        />
                        <label for="netBanking">Debit Card</label>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      styles["submit-section"] + " " + styles[`${buttonWidth}`]
                    }
                  >
                    <div className={styles["consent-section"]}>
                      <input type="checkbox" />

                      <p className={styles["consent-message"]}>
                        I accept the{" "}
                        <span className={styles["underlined-text"]}>
                          terms & conditions
                        </span>
                        .
                      </p>
                    </div>
                    <button
                      className={
                        styles[`${buttonWidth}`] +
                        " " +
                        styles[`${alignRightState}`]
                      }
                      onClick={setStage4}
                    >
                      <span>Confirm & Proceed</span>
                    </button>
                  </div>
                </div>
              </>
            ) : interactionStage.stage4 ? (
              <>
                <>
                  <div className={styles["transition-section"]}>
                    <div className={styles["header-section"]}>
                      <h2>Authorise via. {authorisationMethod}</h2>
                      <p>Enter details to proceed</p>
                    </div>
                    <div className={styles["form-section"]}>
                      <div className={styles["input-section"]}>
                        <p className={styles["label"]}>OTP</p>
                        <div className={styles["input"]}>
                          <input type="text" placeholder="Enter 6 digit OTP" />
                        </div>
                      </div>
                      <div
                        className={
                          styles["submit-section"] +
                          " " +
                          styles[`${buttonWidth}`] +
                          " " +
                          styles[`${spaceBetweenControlledState}`] +
                          " " +
                          styles[`aadhaar-screen-submit-container`]
                        }
                      >
                        <button
                          className={
                            styles[`${buttonWidth}`] +
                            " " +
                            styles[`${alignRightState}`]
                          }
                          onClick={handleSuccessState}
                        >
                          {!formSuccessState ? (
                            <span>Confirm & Proceed</span>
                          ) : (
                            <span>Let’s Try Another Mandate</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              </>
            ) : null
          ) : (
            <div className={styles["form-success"]}>
              <div className={styles["success-image"]}>
                <img src="/images/interaction-success.svg" alt="success" />
              </div>
              <h2 className={styles["success-message"]}>
                eMandate Successful!
              </h2>
              <div
                className={
                  styles["submit-section"] +
                  " " +
                  styles[`${buttonWidth}`] +
                  " " +
                  styles[`${spaceBetweenControlledState}`]
                }
              >
                <button
                  className={
                    styles[`${buttonWidth}`] + " " + styles[`${fullWidthState}`]
                  }
                  onClick={setStage1}
                >
                  <span>Let’s Try Another Mandate</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnachInteractions;
