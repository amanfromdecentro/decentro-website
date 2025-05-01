import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/interactions/va-collections-interactions.module.scss";
import Image from "next/image";

const VACollectionsInteractions = () => {
  const [buttonWidth, setButtonWidth] = useState("");
  const [formSuccessState, setFormSuccessState] = useState(false);
  const [formStages, setFormStages] = useState({
    stage1: true,
    stage2: false,
  });

  const handleSuccessState = () => {
    setFormStages({
      stage1: true,
      stage2: false,
    });
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
    setButtonWidth("");
    handleNonSuccessState();
    // setTimeout(handleNonSuccessState, 200);
  };

  const updateFormState = (stage) => {
    setFormStages({
      [stage]: true,
    });
  };

  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");

  const [gstin, setGstin] = useState("");
  const [gstinError, setGstinError] = useState("");

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [upiId, setUpiId] = useState("");
  const [upiIdError, setUpiIdError] = useState("");

  const [minBalance, setMinBalance] = useState("");
  const [minBalanceError, setMinBalanceError] = useState("");

  const [txnLimit, setTxnLimit] = useState("");
  const [txnLimitError, setTxnLimitError] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [finalSubmitButtonDisabled, setFinalSubmitButtonDisabled] =
    useState(true);

  useEffect(() => {
    if (
      company.length > 0 &&
      gstin.length > 0 &&
      mobile.length > 0 &&
      email.length
    ) {
      if (
        companyError.length > 0 ||
        gstinError.length > 0 ||
        mobileError.length > 0 ||
        emailError.length > 0
      )
        setSubmitButtonDisabled(true);
      else setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [company, gstin, mobile, email]);

  useEffect(() => {
    if (upiId.length > 0 && (minBalance != "") & (txnLimit != "")) {
      if (
        upiIdError.length > 0 ||
        minBalanceError.length > 0 ||
        txnLimitError.length > 0
      )
        setFinalSubmitButtonDisabled(true);
      else setFinalSubmitButtonDisabled(false);
    } else {
      setFinalSubmitButtonDisabled(true);
    }
  }, [upiId, minBalance, txnLimit]);

  const handleUpiIdChange = (event) => {
    const value = event.target.value;
    setUpiId(value);
    validateUpiId(value);
  };

  const validateUpiId = (value) => {
    const regex = /^[a-zA-Z0-9-]+@[a-zA-Z0-9]+[a-zA-Z]+$/;

    if (!regex.test(value)) {
      setUpiIdError("Invalid UPI format.");
    } else {
      setUpiIdError("");
    }
  };

  const handleCompanyChange = (event) => {
    const value = event.target.value;
    setCompany(value);
    validateCompany(value);
  };

  const validateCompany = (value) => {
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(value)) {
      setCompanyError("Company name can only contain alphanumeric characters.");
    } else {
      setCompanyError("");
    }
  };

  const handleGSTINChange = (event) => {
    const value = event.target.value;
    setGstin(value);
    validateGSTIN(value);
  };

  const validateGSTIN = (value) => {
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(value)) {
      setGstinError("GSTIN can only contain alphanumeric characters.");
    } else {
      setGstinError("");
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

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }
  };

  const handleMinBalanceChange = (event) => {
    const value = event.target.value;
    setMinBalance(value);
    validateMinBalance(value);
  };

  const validateMinBalance = (value) => {
    if (isNaN(value) || parseFloat(value) <= 0) {
      setMinBalanceError("Minimum balance must be a positive number.");
    } else {
      setMinBalanceError("");
    }
  };

  const handleTxnLimitChange = (event) => {
    const value = event.target.value;
    setTxnLimit(value);
    validateTxnLimit(value);
  };

  const validateTxnLimit = (value) => {
    if (isNaN(value) || parseFloat(value) <= 0) {
      setTxnLimitError("Transaction limit must be a positive number.");
    } else {
      setTxnLimitError("");
    }
  };

  const resetFields = () => {
    setCompany("");
    setCompanyError("");
    setGstin("");
    setGstinError("");
    setMobile("");
    setMobileError("");
    setEmail("");
    setEmailError("");
    setUpiId("");
    setUpiIdError("");
    setMinBalance("");
    setMinBalanceError("");
    setTxnLimit("");
    setTxnLimitError("");
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
      <div
        className={styles["right-container"]}
        style={{
          height: formStages.stage1 ? "680px" : "580px",
        }}
      >
        <div className={styles["interactions-form"]}>
          {!formSuccessState ? (
            <>
              <div className={styles["transition-section"]}>
                <div className={styles["header-section"]}>
                  <h2>Create Virtual Account</h2>
                  <p>Enter details to proceed</p>
                </div>
                {formStages.stage1 ? (
                  <div className={styles["form-section"]}>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Company</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter company name"
                          value={company}
                          name="company"
                          onChange={handleCompanyChange}
                          className={companyError ? "input-error" : ""}
                        />
                        <p className="error-message">{companyError}</p>
                      </div>
                    </div>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>GSTIN</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter company’s GSTIN"
                          value={gstin}
                          name="gstin"
                          onChange={handleGSTINChange}
                          className={gstinError ? "input-error" : ""}
                        />
                        <p className="error-message">{gstinError}</p>
                      </div>
                    </div>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Mobile</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter registered mobile number"
                          value={mobile}
                          name="mobile"
                          onChange={handleMobileChange}
                          className={mobileError ? "input-error" : ""}
                        />
                        <p className="error-message">{mobileError}</p>
                      </div>
                    </div>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Email</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter registered email"
                          value={email}
                          name="email"
                          onChange={handleEmailChange}
                          className={emailError ? "input-error" : ""}
                        />
                        <p className="error-message">{emailError}</p>
                      </div>
                    </div>
                  </div>
                ) : formStages.stage2 ? (
                  <div className={styles["form-section"]}>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>UPI ID</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Pick your UPI ID"
                          value={upiId}
                          name="upiId"
                          onChange={handleUpiIdChange}
                          className={upiIdError ? "input-error" : ""}
                        />
                        <p className="error-message">{upiIdError}</p>
                      </div>
                    </div>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Min. Balance</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Set minimum balance"
                          value={minBalance}
                          name="minBalance"
                          onChange={handleMinBalanceChange}
                          className={minBalanceError ? "input-error" : ""}
                        />
                        <p className="error-message">{minBalanceError}</p>
                      </div>
                    </div>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Txn. Limit</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Set transaction limit"
                          value={txnLimit}
                          name="txnLimit"
                          onChange={handleTxnLimitChange}
                          className={txnLimitError ? "input-error" : ""}
                        />
                        <p className="error-message">{txnLimitError}</p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div
                className={
                  styles["submit-section"] + " " + styles[`${buttonWidth}`]
                }
              >
                {!formSuccessState ? (
                  formStages.stage1 ? (
                    <button
                      className={
                        styles[`${buttonWidth}`] +
                        " " +
                        (submitButtonDisabled ? "button-disabled" : "")
                      }
                      onClick={(event) => {
                        updateFormState("stage2");
                      }}
                      {...(submitButtonDisabled ? { disabled: true } : {})}
                    >
                      {!formSuccessState ? (
                        <span>Next</span>
                      ) : (
                        <span>Let’s Try Another Account</span>
                      )}
                    </button>
                  ) : formStages.stage2 ? (
                    <button
                      className={
                        styles[`${buttonWidth}`] +
                        " " +
                        (finalSubmitButtonDisabled ? "button-disabled" : "")
                      }
                      onClick={(event) => {
                        handleInteraction(event);
                      }}
                      {...(finalSubmitButtonDisabled ? { disabled: true } : {})}
                    >
                      {!formSuccessState ? (
                        <span>Confirm & Submit</span>
                      ) : (
                        <span>Let’s Try Another Account</span>
                      )}
                    </button>
                  ) : null
                ) : (
                  <button
                    className={styles[`${buttonWidth}`]}
                    onClick={(event) => {
                      resetInteraction(event);
                    }}
                  >
                    <span>Let’s Try Another Account</span>
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className={styles["form-success"]}>
                <div className={styles["success-image"]}>
                  <img src="/images/interaction-success.svg" alt="success" />
                </div>
                <h2 className={styles["success-message"]}>
                  Virtual Account Created!
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
                  <span>Let’s Try Another Account</span>
                </button>
              </div>
            </>
          )}
          {/* <div
            className={
              styles["submit-section"] + " " + styles[`${buttonWidth}`]
            }
          >
            <button
              className={
                styles[`${buttonWidth}`] +
                " " +
                (submitButtonDisabled ? "button-disabled" : "")
              }
              onClick={(event) => {
                !formSuccessState
                  ? formStages.stage1
                    ? updateFormState("stage2")
                    : formStages.stage2
                    ? handleInteraction(event)
                    : resetInteraction(event)
                  : resetInteraction(event);
              }}
            >
              {!formSuccessState ? (
                <span>Confirm & Collect</span>
              ) : (
                <span>Let’s Try Another Account</span>
              )}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VACollectionsInteractions;
