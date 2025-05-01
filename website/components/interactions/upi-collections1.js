import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/interactions/upi-collections-interactions.module.scss";
import Image from "next/image";

const UpiCollectionsInteractions = (props) => {
  const [buttonWidth, setButtonWidth] = useState("");
  const [formSuccessState, setFormSuccessState] = useState(false);

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
    setButtonWidth("");
    setTimeout(handleNonSuccessState, 200);
  };

  const [payerUPI, setPayerUPI] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [payerUPIError, setPayerUPIError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [purposeError, setPurposeError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (payerUPI.length > 0 && amount.length > 0 && purpose.length > 0) {
      if (
        payerUPIError.length > 0 ||
        amountError.length > 0 ||
        purposeError.length > 0
      )
        setSubmitButtonDisabled(true);
      else setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [payerUPI, amount, purpose]);

  const handlePayerUPIChange = (event) => {
    const value = event.target.value;
    setPayerUPI(value);
    validatePayerUPI(value);
  };

  const validatePayerUPI = (value) => {
    const regex = /^[a-zA-Z0-9-]+@[a-zA-Z0-9]+[a-zA-Z]+$/;

    if (!regex.test(value)) {
      setPayerUPIError("Invalid UPI format.");
    } else {
      setPayerUPIError("");
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    validateAmount(value);
  };

  const validateAmount = (value) => {
    const regex = /^[0-9]+(\.[0-9]+)?$/;

    if (!regex.test(value) || parseFloat(value) <= 0) {
      setAmountError("Amount should be higher than Re. 1");
    } else {
      setAmountError("");
    }
  };

  const handlePurposeChange = (event) => {
    const value = event.target.value;
    setPurpose(value);
    validatePurpose(value);
  };

  const validatePurpose = (value) => {
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(value)) {
      setPurposeError("Purpose can only contain alphanumeric characters.");
    } else {
      setPurposeError("");
    }
  };

  const resetFields = () => {
    setPayerUPI("");
    setPayerUPIError("");
    setAmount("");
    setAmountError("");
    setPurpose("");
    setPurposeError("");
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
                  <h2>{props?.header}</h2>
                  <p>Enter details to proceed</p>
                </div>
                <div className={styles["form-section"]}>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Payer’s UPI</p>
                    <div className={styles["input"]}>
                      <input
                        type="text"
                        placeholder="Enter payer’s UPI address"
                        value={payerUPI}
                        name="payer_upi"
                        onChange={handlePayerUPIChange}
                        className={payerUPIError ? "input-error" : ""}
                      />
                      <p className="error-message">{payerUPIError}</p>
                    </div>
                  </div>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Amount</p>
                    <div className={styles["input"]}>
                      <input
                        type="text"
                        placeholder="Enter amount to collect"
                        name="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        className={amountError ? "input-error" : ""}
                      />
                      <p className="error-message">{amountError}</p>
                    </div>
                  </div>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Purpose</p>
                    <div className={styles["input"]}>
                      <input
                        type="text"
                        placeholder="Enter purpose of collection"
                        name="purpose"
                        value={purpose}
                        onChange={handlePurposeChange}
                        className={purposeError ? "input-error" : ""}
                      />
                      <p className="error-message">{purposeError}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
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
                    handleInteraction(event);
                  }}
                  {...(submitButtonDisabled ? { disabled: true } : {})}
                >
                  {!formSuccessState ? <span>Confirm & Collect</span> : null}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles["form-success"]}>
                <div className={styles["success-image"]}>
                  <img src="/images/interaction-success.svg" alt="success" />
                </div>
                <h2 className={styles["success-message"]}>
                  Collection Request Sent!
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
                  <span>Let’s Try Another Collection</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpiCollectionsInteractions;
