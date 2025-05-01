import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/interactions/upi-collections-interactions.module.scss";
import Image from "next/image";

const PayoutsInteractions = (props) => {
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
    handleNonSuccessState();
    // setTimeout(handleNonSuccessState, 200);
  };

  const [payeeUPI, setPayeeUPI] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [payeeUPIError, setPayeeUPIError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [nameError, setNameError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (payeeUPI.length > 0 && amount.length > 0 && name.length > 0) {
      if (
        payeeUPIError.length > 0 ||
        amountError.length > 0 ||
        nameError.length > 0
      )
        setSubmitButtonDisabled(true);
      else setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [payeeUPI, amount, name]);

  const handlePayerUPIChange = (event) => {
    const value = event.target.value;
    setPayeeUPI(value);
    validatePayeeUPI(value);
  };

  const validatePayeeUPI = (value) => {
    const regex = /^[a-zA-Z0-9-]+@[a-zA-Z0-9]+[a-zA-Z]+$/;

    if (!regex.test(value)) {
      setPayeeUPIError("Invalid UPI format.");
    } else {
      setPayeeUPIError("");
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

  const resetFields = () => {
    setPayeeUPI("");
    setPayeeUPIError("");
    setAmount("");
    setAmountError("");
    setName("");
    setNameError("");
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
                    <p className={styles["label"]}>Payee’s Name</p>
                    <div className={styles["input"]}>
                      <input
                        type="text"
                        placeholder="Enter name of the payee"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        className={nameError ? "input-error" : ""}
                      />
                      <p className="error-message">{nameError}</p>
                    </div>
                  </div>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Payee’s UPI</p>
                    <div className={styles["input"]}>
                      <input
                        type="text"
                        placeholder="Enter payee’s UPI address"
                        value={payeeUPI}
                        name="payer_upi"
                        onChange={handlePayerUPIChange}
                        className={payeeUPIError ? "input-error" : ""}
                      />
                      <p className="error-message">{payeeUPIError}</p>
                    </div>
                  </div>
                  <div className={styles["input-section"]}>
                    <p className={styles["label"]}>Amount</p>
                    <div className={styles["input"]}>
                      <input
                        type="text"
                        placeholder="Enter amount to pay"
                        value={amount}
                        onChange={handleAmountChange}
                        className={amountError ? "input-error" : ""}
                      />
                      <p className="error-message">{amountError}</p>
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
                  {!formSuccessState ? <span>Confirm & Pay</span> : null}
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
                  Payment Successful!
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
                  <span>Let’s Try Another Payout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayoutsInteractions;
