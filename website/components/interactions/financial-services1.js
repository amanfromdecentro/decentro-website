import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/interactions/financial-services-interactions.module.scss";
import Image from "next/image";

const FinancialServicesInteractions = (props) => {
  const [buttonWidth, setButtonWidth] = useState("");
  const [formSuccessState, setFormSuccessState] = useState(false);
  const [selected, setSelected] = useState("Select your document type");
  const [isActive, setIsActive] = useState(false);
  const [purposeList, setPurposeList] = useState([
    { id: 1, name: "PAN" },
    { id: 2, name: "Passport" },
    { id: 3, name: "Driving License" },
  ]);
  const [purposeMessage, setPurposeMessage] = useState("");
  const [fileUploadStatus, setFileUploadStatus] = useState(false);

  const handleFileUploadState = () => {
    setFileUploadStatus(true);
  };

  const handleSuccessState = () => {
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
    // setTimeout(handleNonSuccessState, 200);
    handleNonSuccessState();
    resetFields();
  };

  const resetFileUpload = (event) => {
    setFileUploadStatus(false);
  };

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentTypeError, setDocumentTypeError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    validateName(value);
  };

  const validateName = (value) => {
    const regex = /^[a-zA-Z\s]+$/;

    if (!regex.test(value)) {
      setNameError("Name must contain only alphabets");
    } else {
      setNameError("");
    }
  };

  const handleMobileChange = (event) => {
    const value = event.target.value;
    setMobile(value);
    validateMobile(value);
  };

  const validateMobile = (value) => {
    const regex = /^[0-9]+$/;

    if (!regex.test(value) || value.length !== 10) {
      setMobileError("Mobile number must be a 10-digit number.");
    } else {
      setMobileError("");
    }
  };

  const handleDocumentTypeChange = (event) => {
    const value = "Selected";
    setDocumentType(value);
    validateDocumentType(value);
  };

  const validateDocumentType = (value) => {
    // Add your validation logic for the document type selection here.
    // For example, you can check if it's a valid option from your purposeList.
    if (value === "Select your document type") {
      setDocumentTypeError("Please select a valid document type.");
    } else {
      setDocumentTypeError("");
    }
  };

  useEffect(() => {
    if (
      name.length > 0 &&
      mobile.length > 0 &&
      documentType.length > 0 &&
      consentChecked
    ) {
      if (
        nameError.length > 0 ||
        mobileError.length > 0 ||
        documentTypeError.length > 0
      )
        setSubmitButtonDisabled(true);
      else setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [name, documentType, mobile, consentChecked]);

  const handleConsentChange = () => {
    setConsentChecked(!consentChecked);
  };

  const resetFields = () => {
    setName("");
    setNameError("");
    setMobile("");
    setMobileError("");
    setDocumentType("");
    setDocumentTypeError("");
    setSubmitButtonDisabled(true);
    setConsentChecked(false);
    setSelected("Select your document type");
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
            <div className={styles["transition-section"]}>
              <div className={styles["header-section"]}>
                <h2>{props?.header}</h2>
                <p>Enter details to proceed</p>
              </div>
              <div className={styles["form-section"]}>
                <div className={styles["input-section"]}>
                  <p className={styles["label"]}>Name</p>
                  <div className={styles["input"]}>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      className={nameError ? "input-error" : ""}
                    />
                    <p className="error-message">{nameError}</p>
                  </div>
                </div>
                <div className={styles["input-section"]}>
                  <p className={styles["label"]}>Mobile</p>
                  <div className={styles["input"]}>
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                      name="mobile"
                      value={mobile}
                      onChange={handleMobileChange}
                      className={mobileError ? "input-error" : ""}
                    />
                    <p className="error-message">{mobileError}</p>
                  </div>
                </div>
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
                        {purposeList.map((option) => (
                          <div key={option.id}>
                            {option.name !== selected && (
                              <div
                                key={option.id}
                                onClick={(e) => {
                                  setSelected(option.name);
                                  setIsActive(false);
                                  setDocumentTypeError("");
                                  handleDocumentTypeChange(e);
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
              </div>
            </div>
          ) : (
            <div className={styles["form-success"]}>
              <div className={styles["success-image"]}>
                <img
                  src="/images/bg-banners/try-yourself.svg"
                  alt="try yourself banner"
                />
              </div>
              <h2 className={styles["success-message"]}>
                Credit Report Fetched Successfully
              </h2>
            </div>
          )}
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
                !formSuccessState
                  ? handleInteraction(event)
                  : resetInteraction(event);
              }}
              {...(submitButtonDisabled ? { disabled: true } : {})}
            >
              {!formSuccessState ? (
                <span>Fetch Report</span>
              ) : (
                <span>Let’s Try Another Report</span>
              )}
            </button>
          </div>
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

export default FinancialServicesInteractions;
