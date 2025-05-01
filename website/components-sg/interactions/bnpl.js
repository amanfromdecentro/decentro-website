import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/components-styles/interactions/bnpl-interactions.module.scss";
import Image from "next/image";

const BNPLInteractions = (props) => {
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
    resetFields();
  };

  const setStage2 = (event) => {
    setInteractionStage({
      stage1: "",
      stage2: "active",
      stage3: "",
      stage4: "",
      stage5: "",
    });
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
  const setStage5 = (event) => {
    setInteractionStage({
      stage1: "",
      stage2: "",
      stage3: "",
      stage4: "",
      stage5: "active",
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

  // Below code is to handle all the validations

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [pan, setPan] = useState("");
  const [panError, setPanError] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarError, setAadhaarError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [offer, setOffer] = useState("");
  const [stage1SubmitDisabled, setStage1SubmitDisabled] = useState(true);
  const [stage2SubmitDisabled, setStage2SubmitDisabled] = useState(true);
  const [stage3SubmitDisabled, setStage3SubmitDisabled] = useState(true);
  const [stage4SubmitDisabled, setStage4SubmitDisabled] = useState(true);
  const [stage5SubmitDisabled, setStage5SubmitDisabled] = useState(true);

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

  useEffect(() => {
    if (name.length > 0 && mobile.length > 0 && email.length) {
      if (
        nameError.length > 0 ||
        mobileError.length > 0 ||
        emailError.length > 0
      )
        setStage1SubmitDisabled(true);
      else setStage1SubmitDisabled(false);
    } else {
      setStage1SubmitDisabled(true);
    }
  }, [name, mobile, email]);

  useEffect(() => {
    if (dob.length > 0 && pan.length) {
      if (dobError.length > 0 || panError.length > 0)
        setStage2SubmitDisabled(true);
      else setStage2SubmitDisabled(false);
    } else {
      setStage2SubmitDisabled(true);
    }
  }, [pan, dob]);

  useEffect(() => {
    if (offer.length > 0) {
      setStage3SubmitDisabled(false);
    } else {
      setStage3SubmitDisabled(true);
    }
  }, [offer]);

  useEffect(() => {
    if (aadhaar.length > 0) {
      if (aadhaarError.length > 0) {
        setStage4SubmitDisabled(true);
      } else {
        setStage4SubmitDisabled(false);
      }
    } else {
      setStage4SubmitDisabled(true);
    }
  }, [aadhaar]);

  useEffect(() => {
    if (otp.length == 6) {
      if (otpError.length > 0) {
        setStage5SubmitDisabled(true);
      } else {
        setStage5SubmitDisabled(false);
      }
    } else {
      setStage5SubmitDisabled(true);
    }
  }, [otp]);

  const resetFields = () => {
    setName("");
    setMobile("");
    setEmail("");
    setDob("");
    setPan("");
    setOffer("");
    setAadhaar("");
    setOtp("");
    setNameError("");
    setMobileError("");
    setEmailError("");
    setDobError("");
    setPanError("");
    setAadhaarError("");
    setOtpError("");
  };

  const handlePanChange = (event) => {
    const value = event.target.value;
    setPan(value);
    validatePan(value);
  };

  const validatePan = (value) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!panRegex.test(value)) {
      setPanError("Invalid PAN format. It should be in the format ABCDE1234F");
    } else {
      setPanError("");
    }
  };

  const handleDobChange = (event) => {
    const value = event.target.value;
    setDob(value);
    validateDob(value);
  };

  const validateDob = (value) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dateRegex.test(value)) {
      setDobError("Invalid date format. Please use dd/mm/yyyy");
    } else {
      setDobError("");
    }
  };

  const handleAadhaarChange = (event) => {
    const value = event.target.value;
    setAadhaar(value);
    validateAadhaar(value);
  };

  const validateAadhaar = (value) => {
    const aadhaarRegex = /^\d{12}$/;

    if (!aadhaarRegex.test(value)) {
      setAadhaarError("Invalid Aadhaar format. It should be a 12-digit number");
    } else {
      setAadhaarError("");
    }
  };

  const handleOtpChange = (event) => {
    const value = event.target.value;
    setOtp(value);
    validateOtp(value);
  };

  const validateOtp = (value) => {
    const otpRegex = /^\d{6}$/;

    if (!otpRegex.test(value)) {
      setOtpError("OTP must be a 6-digit number.");
    } else {
      setOtpError("");
    }
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
                          placeholder="Enter registered mobile number"
                          name="mobile"
                          value={mobile}
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
                          styles[`${buttonWidth}`] +
                          " " +
                          (stage1SubmitDisabled ? "button-disabled" : "")
                        }
                        id="stage1ConfirmButton"
                        onClick={setStage2}
                        {...(stage1SubmitDisabled ? { disabled: true } : {})}
                      >
                        {!formSuccessState ? (
                          <span>Confirm & Submit</span>
                        ) : (
                          <span>Let’s Try Again</span>
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
                    <p>Enter details to proceed</p>
                  </div>
                  <div className={styles["form-section"]}>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>Date Of Birth</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="DD / MM / YYYY"
                          value={dob}
                          name="dob"
                          onChange={handleDobChange}
                          className={dobError ? "input-error" : ""}
                        />
                        <p className="error-message">{dobError}</p>
                      </div>
                    </div>
                    <div className={styles["input-section"]}>
                      <p className={styles["label"]}>PAN</p>
                      <div className={styles["input"]}>
                        <input
                          type="text"
                          placeholder="Enter your PAN"
                          value={pan}
                          name="pan"
                          onChange={handlePanChange}
                          className={panError ? "input-error" : ""}
                        />
                        <p className="error-message">{panError}</p>
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
                          styles[`${alignRightState}`] +
                          " " +
                          (stage2SubmitDisabled ? "button-disabled" : "")
                        }
                        id="stage2ConfirmButton"
                        onClick={setStage3}
                        {...(stage2SubmitDisabled ? { disabled: true } : {})}
                      >
                        {!formSuccessState ? (
                          <span>Confirm & Proceed</span>
                        ) : (
                          <span>Let’s Try Again</span>
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
                    <h2>Buy Now Pay Later</h2>
                    <p>Select Offer</p>
                  </div>
                  <div className={styles["form-section"]}>
                    <div className={styles["radio-buttons-container"]}>
                      <div
                        className={styles["radio-item"]}
                        onChange={handleAuthorisationMethod}
                      >
                        <input
                          type="radio"
                          id="offer"
                          name="offer"
                          value="ABC Finance Ltd."
                          onClick={(event) => {
                            setOffer(event.target.value);
                          }}
                        />
                        <div className={styles["label-container"]}>
                          <div className={styles["bnpl-details-container"]}>
                            <label for="netBanking">ABC Finance Ltd.</label>
                            <div className={styles["bnpl-details"]}>
                              <p
                                className={
                                  styles["interest-amount"] +
                                  " " +
                                  styles["small-label"]
                                }
                              >
                                Interest: 2% per month
                              </p>
                              <p
                                className={
                                  styles["interest-amount"] +
                                  " " +
                                  styles["small-label"]
                                }
                              >
                                Tenure: 12 months
                              </p>
                            </div>
                          </div>
                          <div className={styles["bnpl-amount"]}>
                            <p
                              className={
                                styles["interest-amount"] +
                                " " +
                                styles["small-label"]
                              }
                            >
                              Approved Amount
                            </p>
                            <p
                              className={
                                styles["amount"] +
                                " " +
                                styles["support-text-large"]
                              }
                            >
                              ₹12,000
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles["radio-item"]}
                        onChange={handleAuthorisationMethod}
                      >
                        <input
                          type="radio"
                          id="offer"
                          name="offer"
                          value="XYZ Finance Ltd."
                          onClick={(event) => {
                            setOffer(event.target.value);
                          }}
                        />
                        <div className={styles["label-container"]}>
                          <div className={styles["bnpl-details-container"]}>
                            <label for="netBanking">XYZ Finance Ltd.</label>
                            <div className={styles["bnpl-details"]}>
                              <p
                                className={
                                  styles["interest-amount"] +
                                  " " +
                                  styles["small-label"]
                                }
                              >
                                Interest: 3% per month
                              </p>
                              <p
                                className={
                                  styles["interest-amount"] +
                                  " " +
                                  styles["small-label"]
                                }
                              >
                                Tenure: 18 months
                              </p>
                            </div>
                          </div>
                          <div className={styles["bnpl-amount"]}>
                            <p
                              className={
                                styles["interest-amount"] +
                                " " +
                                styles["small-label"]
                              }
                            >
                              Approved Amount
                            </p>
                            <p
                              className={
                                styles["amount"] +
                                " " +
                                styles["support-text-large"]
                              }
                            >
                              ₹15,000
                            </p>
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
                    <button
                      className={
                        styles[`${buttonWidth}`] +
                        " " +
                        styles[`${alignRightState}`] +
                        " " +
                        (stage3SubmitDisabled ? "button-disabled" : "")
                      }
                      onClick={setStage4}
                      {...(stage3SubmitDisabled ? { disabled: true } : {})}
                    >
                      <span>Confirm & Submit</span>
                    </button>
                  </div>
                </div>
              </>
            ) : interactionStage.stage4 ? (
              <>
                <>
                  <div className={styles["transition-section"]}>
                    <div className={styles["header-section"]}>
                      <h2>Buy Now Pay Later</h2>
                      <p>Verify details</p>
                    </div>
                    <div className={styles["form-section"]}>
                      <div className={styles["input-section"]}>
                        <p className={styles["label"]}>Aadhaar</p>
                        <div className={styles["input"]}>
                          <input
                            type="text"
                            placeholder="Enter Aadhaar number"
                            value={aadhaar}
                            name="aadhaar"
                            onChange={handleAadhaarChange}
                            className={aadhaarError ? "input-error" : ""}
                          />
                          <p className="error-message">{aadhaarError}</p>
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
                            styles[`${alignRightState}`] +
                            " " +
                            (stage4SubmitDisabled ? "button-disabled" : "")
                          }
                          onClick={setStage5}
                          {...(stage4SubmitDisabled ? { disabled: true } : {})}
                        >
                          {!formSuccessState ? (
                            <span>Confirm & Submit</span>
                          ) : (
                            <span>Let’s Try Again</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              </>
            ) : interactionStage.stage5 ? (
              <>
                <>
                  <div className={styles["transition-section"]}>
                    <div className={styles["header-section"]}>
                      <h2>Buy Now Pay Later</h2>
                      <p>Verify details</p>
                    </div>
                    <div className={styles["form-section"]}>
                      <div className={styles["input-section"]}>
                        <p className={styles["label"]}>OTP</p>
                        <div className={styles["input"]}>
                          <input
                            type="text"
                            placeholder="Enter OTP shared on your number"
                            value={otp}
                            name="otp"
                            onChange={handleOtpChange}
                            className={otpError ? "input-error" : ""}
                          />
                          <p className="error-message">{otpError}</p>
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
                            styles[`${alignRightState}`] +
                            " " +
                            (stage5SubmitDisabled ? "button-disabled" : "")
                          }
                          onClick={handleSuccessState}
                          {...(stage5SubmitDisabled ? { disabled: true } : {})}
                        >
                          {!formSuccessState ? (
                            <span>Confirm & Submit</span>
                          ) : (
                            <span>Let’s Try Again</span>
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
              <h2 className={styles["success-message"]}>Payment Successful!</h2>
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
                  <span>Let’s Try Again</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BNPLInteractions;
