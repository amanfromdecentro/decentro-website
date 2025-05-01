import React, { useState, useRef, useEffect } from "react";
import OtpInput from "react-otp-input";
import styles from "../../styles/components-styles/interactions/digilocker-interactions.module.scss";
import Image from "next/image";

const DigilockerInteractions = () => {
  const [buttonWidth, setButtonWidth] = useState("");
  const [formSuccessState, setFormSuccessState] = useState(false);
  const [selected, setSelected] = useState("Select your document type");
  const [isActive, setIsActive] = useState(false);
  const [aadhaarFirstFourDigits, setAadhaarFirstFourDigits] = useState("");
  const [aadhaarMiddleFourDigits, setAadhaarMiddleFourDigits] = useState("");
  const [aadhaarLastFourDigits, setAadhaarLastFourDigits] = useState("");
  const [alignRightState, setAlignRightState] = useState("");
  const [alignRightMarginControlledState, setAlignRightMarginControlledState] =
    useState("");
  const [spaceBetweenControlledState, setSpaceBetweenControlledState] =
    useState("");
  const [documentList, setDocumentList] = useState([
    { id: 1, name: "PAN Card" },
    { id: 2, name: "Aadhaar" },
    { id: 3, name: "Voter ID" },
    { id: 4, name: "Driving License" },
  ]);

  const [fullWidthState, setFullWidthState] = useState("");

  const [interactionStage, setInteractionStage] = useState({
    stage1: "active",
    stage2: "",
    stage3: "",
    stage4: "",
    stage5: "",
  });

  const [documentType, setDocumentType] = useState("");
  const [fileUploadStatus, setFileUploadStatus] = useState(false);

  const handleFileUploadState = () => {
    setFileUploadStatus(true);
  };

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
    setAlignRightState("alignRightMarginControlled");
    setSpaceBetweenControlledState("spaceBetweenControlled");
  };

  const resetAllStages = (event) => {
    setInteractionStage({
      stage1: "",
      stage2: "",
      stage3: "",
      stage4: "",
      stage5: "",
    });
    handleSuccessState();
  };

  const resetInteraction = (event) => {
    setButtonWidth("");
    setTimeout(handleNonSuccessState, 200);
  };

  const resetFileUpload = (event) => {
    setFileUploadStatus(false);
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
                <div className={styles["digilocker-banner-image"]}>
                  <img
                    src="/images/digilocker/digilocker-interaction-banner.svg"
                    alt="digilocker interactions banner"
                  />
                </div>
                <div
                  className={
                    styles["submit-section"] + " " + styles[`${buttonWidth}`]
                  }
                >
                  <div className={styles["consent-section"]}>
                    <input type="checkbox" />

                    <p className={styles["consent-message"]}>
                      I give consent to access DigiLocker
                    </p>
                  </div>
                  <button
                    className={
                      styles[`${buttonWidth}`] +
                      " " +
                      styles[`${alignRightState}`]
                    }
                    onClick={setStage2}
                  >
                    <span>Submit & Validate</span>
                  </button>
                </div>
              </>
            ) : interactionStage.stage2 ? (
              <>
                <div className={styles["interaction-header-stage-2"]}>
                  <img
                    src="/images/digilocker/digilocker-interaction-banner.svg"
                    alt="digilocker interactions banner"
                  />
                </div>
                <div className={styles["transition-section"]}>
                  <div className={styles["header-section"]}>
                    <h2>Verify Aadhaar</h2>
                    <p>Enter details to proceed</p>
                  </div>
                  <div className={styles["input-section-aadhaar"]}>
                    <div
                      className={
                        styles["aadhaar-input-4-digits"] +
                        " " +
                        styles["second-four-digits-aadhaar"]
                      }
                    >
                      <OtpInput
                        value={aadhaarFirstFourDigits}
                        // &#9679; represents password dot html code but more bigger and bulkier dot
                        placeholder="&#9679;&#9679;&#9679;&#9679;"
                        onChange={setAadhaarFirstFourDigits}
                        numInputs={4}
                        renderSeparator={<span> </span>}
                        renderInput={(props) => <input {...props} />}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                    <div
                      className={
                        styles["aadhaar-input-4-digits"] +
                        " " +
                        styles["second-four-digits-aadhaar"]
                      }
                    >
                      <OtpInput
                        value={aadhaarMiddleFourDigits}
                        placeholder="&#9679;&#9679;&#9679;&#9679;"
                        onChange={setAadhaarMiddleFourDigits}
                        numInputs={4}
                        renderSeparator={<span> </span>}
                        renderInput={(props) => <input {...props} />}
                      />
                    </div>
                    <div
                      className={
                        styles["aadhaar-input-4-digits"] +
                        " " +
                        styles["second-four-digits-aadhaar"]
                      }
                    >
                      <OtpInput
                        value={aadhaarLastFourDigits}
                        placeholder="&#9679;&#9679;&#9679;&#9679;"
                        onChange={setAadhaarLastFourDigits}
                        numInputs={4}
                        renderSeparator={<span> </span>}
                        renderInput={(props) => <input {...props} />}
                      />
                    </div>
                  </div>
                  <p className={styles["help-text"]}>
                    DigiLocker uses Aadhaar to enable authentic document access
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
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </>
            ) : interactionStage.stage3 ? (
              <>
                <div className={styles["interaction-header-stage-2"]}>
                  <img
                    src="/images/digilocker/digilocker-interaction-banner.svg"
                    alt="digilocker interactions banner"
                  />
                </div>
                <div className={styles["transition-section"]}>
                  <div className={styles["header-section"]}>
                    <h2>Verify Aadhaar OTP</h2>
                    <p className={styles["green-text"]}>
                      UIDAI has sent a temporary OTP to your mobile ending in
                      ****3736
                      <br />
                      (Valid for 10mins)
                    </p>
                  </div>
                  <div className={styles["input-section-otp"]}>
                    <div className={styles["otp-input-6-digits"]}>
                      <OtpInput
                        value={aadhaarFirstFourDigits}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        onChange={setAadhaarFirstFourDigits}
                        numInputs={6}
                        renderSeparator={<span> </span>}
                        renderInput={(props) => <input {...props} />}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                  </div>
                  <p className={styles["help-text"]}>Do not refresh or close</p>
                </div>
                <div
                  className={
                    styles["submit-section"] +
                    " " +
                    styles[`${buttonWidth}`] +
                    " " +
                    styles[`${spaceBetweenControlledState}`] +
                    " " +
                    styles[`otp-screen-submit-container`]
                  }
                >
                  <div className={styles["consent-section"]}>
                    <p className={styles["consent-message"]}>
                      Didn’t receive OTP? <span>Resend</span>
                    </p>
                  </div>
                  <button
                    className={
                      styles[`${buttonWidth}`] +
                      " " +
                      styles[`${alignRightState}`] +
                      " " +
                      styles[`otp-screen-submit-button`]
                    }
                    onClick={setStage4}
                  >
                    <span>Next</span>
                  </button>
                </div>
              </>
            ) : interactionStage.stage4 ? (
              <>
                <div className={styles["interaction-header-stage-2"]}>
                  <img
                    src="/images/digilocker/digilocker-interaction-banner.svg"
                    alt="digilocker interactions banner"
                  />
                </div>
                <div className={styles["transition-section"]}>
                  <div className={styles["header-section"]}>
                    <h2>DECENTRO</h2>
                    <p className={styles["dark-text"]}>
                      You’re providing your consent to share your DigiLocker
                      documents with Decentro.
                    </p>
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
                    styles[`submit-section-stage-4`]
                  }
                >
                  <button
                    className={
                      styles[`${buttonWidth}`] +
                      " " +
                      styles[`${alignRightState}`] +
                      " " +
                      styles[`${alignRightMarginControlledState}`] +
                      " " +
                      styles["denyButton"]
                    }
                  >
                    <span>Deny</span>
                  </button>
                  <button
                    className={
                      styles[`${buttonWidth}`] +
                      " " +
                      styles[`${alignRightState}`] +
                      " " +
                      styles[`${alignRightMarginControlledState}`]
                    }
                    onClick={handleSuccessState}
                  >
                    <span>Allow</span>
                  </button>
                </div>
              </>
            ) : null
          ) : (
            <div className={styles["form-success"]}>
              <div className={styles["success-image"]}>
                <img
                  src="/images/bg-banners/try-yourself.svg"
                  alt="try yourself banner"
                />
              </div>
              <h2 className={styles["success-message"]}>
                Documents Validated Successfully
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
                  <span>Done</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function DownArrow({ isActive }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 dropdown-arrow ${
        isActive && "dropdown-arrow__rotate"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default DigilockerInteractions;
