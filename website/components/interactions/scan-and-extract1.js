import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/interactions/scan-and-extract-interactions.module.scss";
import Image from "next/image";

const ScanAndExtractInteractions = () => {
  const [buttonWidth, setButtonWidth] = useState("");
  const [formSuccessState, setFormSuccessState] = useState(false);
  const [selected, setSelected] = useState("Select your document type");
  const [isActive, setIsActive] = useState(false);
  const [documentList, setDocumentList] = useState([
    { id: 1, name: "PAN Card" },
    { id: 2, name: "Aadhaar" },
    { id: 3, name: "Voter ID" },
    { id: 4, name: "Driving License" },
  ]);
  const [documentType, setDocumentType] = useState("");
  const [fileUploadStatus, setFileUploadStatus] = useState(false);

  const handleFileUploadState = () => {
    setFileUploadStatus(true);
  };

  const handleSuccessState = () => {
    setFormSuccessState(true);
    resetFields();
  };

  const handleNonSuccessState = () => {
    setFormSuccessState(false);
  };

  const handleInteraction = (event) => {
    setButtonWidth("full-width");
    setTimeout(handleSuccessState, 200);
  };

  const resetInteraction = (event) => {
    handleNonSuccessState();
    // setTimeout(handleNonSuccessState, 200);
    setButtonWidth("");
  };

  const resetFileUpload = (event) => {
    setFileUploadStatus(false);
  };

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [kycToggleChecked, setKycToggleChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleConsentChange = () => {
    setConsentChecked(!consentChecked);
  };

  useEffect(() => {
    if (
      documentType != "" &&
      fileUploadStatus &&
      kycToggleChecked &&
      consentChecked
    ) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [documentType, fileUploadStatus, consentChecked, kycToggleChecked]);

  const resetFields = () => {
    setSelected("Select your document type");
    setIsActive(false);
    setDocumentType("");
    setFileUploadStatus(false);
    setConsentChecked(false);
    setKycToggleChecked(false);
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
            <>
              <div className={styles["transition-section"]}>
                <div className={styles["header-section"]}>
                  <h2>OCR</h2>
                  <p>Enter details to proceed</p>
                </div>
                <div className={styles["form-section"]}>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Document</p>
                    <div className={styles["input"]}>
                      <div
                        className={styles["dropdown-btn"]}
                        //    + " " + {isActive ? styles["border-radius__invert"] : null}
                        onClick={(e) => setIsActive(!isActive)}
                      >
                        {selected}
                        {selected.length !== 1 && (
                          <span>
                            <DownArrow isActive={isActive} />
                          </span>
                        )}
                      </div>
                      {isActive && (
                        <div className={styles["document-type-content"]}>
                          {documentList.map((option) => (
                            <div key={option.id}>
                              {option.name !== selected && (
                                <div
                                  key={option.id}
                                  onClick={(e) => {
                                    setSelected(option.name);
                                    setIsActive(false);
                                    setDocumentType(option.id);
                                  }}
                                  className={styles["dropdown-item"]}
                                >
                                  {option.name}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Attachment</p>
                    <div
                      className={
                        styles["input"] + " " + styles["attachment-input"]
                      }
                    >
                      {!fileUploadStatus ? (
                        <input
                          type="text"
                          placeholder="Upload File"
                          onClick={handleFileUploadState}
                        />
                      ) : (
                        <div className={styles["attachment-details-section"]}>
                          <div className={styles["attachment-image"]}></div>
                          <div className={styles["attachment-details-handle"]}>
                            <div className={styles["attachment-details"]}>
                              <p className={styles["attachment-name"]}>
                                {"file.jpg"}
                              </p>
                              <p className={styles["attachment-size"]}>500KB</p>
                            </div>
                            <div
                              className={styles["remove-attachment"]}
                              onClick={resetFileUpload}
                            >
                              <img
                                src="/images/icons/cancel.svg"
                                alt="cancel"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Validate KYC</p>
                    <div className={styles["input"]}>
                      <div className={styles["toggle-switch-container"]}>
                        <div className={styles["toggle-switch"]}>
                          <input
                            type="checkbox"
                            className={styles["checkbox"]}
                            name={"Validate KYC"}
                            id={"Validate KYC"}
                            checked={kycToggleChecked}
                            onChange={() =>
                              setKycToggleChecked(!kycToggleChecked)
                            }
                          />
                          <label
                            className={styles["label"]}
                            htmlFor={"Validate KYC"}
                          >
                            <span className={styles["inner"]} />
                            <span className={styles["switch"]} />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  styles["submit-section"] + " " + styles[`${buttonWidth}`]
                }
              >
                {!formSuccessState && (
                  <div className={styles["consent-section"]}>
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={handleConsentChange}
                    />
                    <p className={styles["consent-message"]}>
                      I consent to document validation
                    </p>
                  </div>
                )}
                <button
                  className={
                    styles[`${buttonWidth}`] +
                    " " +
                    (submitButtonDisabled ? "button-disabled" : "")
                  }
                  onClick={(event) => {
                    handleInteraction(event);
                  }}
                  {...(submitButtonDisabled ? { disabled: true } : {})}
                >
                  {!formSuccessState ? <span>Submit & Validate</span> : null}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles["form-success"]}>
                <div className={styles["success-image"]}>
                  <img
                    src="/images/bg-banners/try-yourself.svg"
                    alt="success"
                  />
                </div>
                <h2 className={styles["success-message"]}>
                  Document Validated Successfully
                </h2>
              </div>
              <div
                className={
                  styles["submit-section"] + " " + styles[`${buttonWidth}`]
                }
              >
                <button
                  className={styles[`${buttonWidth}`]}
                  onClick={(event) => {
                    resetInteraction(event);
                  }}
                >
                  <span>Let’s Try Another Document</span>
                </button>
              </div>
            </>
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

export default ScanAndExtractInteractions;
