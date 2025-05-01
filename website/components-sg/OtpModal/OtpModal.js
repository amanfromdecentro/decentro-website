import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
// component styles
import CloseIcon from "@material-ui/icons/Close";
// styles imports
import styles from "../../styles/components-styles/otp-modal/otp-modal.module.scss";
import SelfOnboardingContext from "../../contexts/SelfOnboardingContext";
import { sixDigitOtpValidation } from "../../inputValidators";

// Below is not a comment, it is required to cancel the login process - since grecaptcha is used in below function but never defined
// Figured out that firebase auto imports it but it needs to be declared in below format at top so that our document(code) knows about it
// Refer: https://stackoverflow.com/questions/46695390/firebase-docs-reference-grecaptcha-but-never-import-or-define-it

/* global grecaptcha */

export const OtpModal = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [enteredMobileNumber, setEnteredMobileNumber] = useState(
    props.data.mobileNumber
  );
  const [cancelClicked, setCancelClicked] = useState(false);
  const { showModal, setShowModal, isOtpVerificationSuccess } = useContext(
    SelfOnboardingContext
  );

  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // input Fields
  const [otpField, setOtpField] = useState("");
  const [otpInputError, setOtpInputError] = useState(false);

  useEffect(() => {
    if (otpField.length >= 6) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [otpField]);

  // submit handler
  const verifyOtp = (event) => {
    let otp = otpField;
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        setShowModal(false);
        setOtpInputError(false);
        isOtpVerificationSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        // Clear out the input field and let the modal be there
        setShowModal(true);
        setOtpInputError(true);
        isOtpVerificationSuccess(false);
      });
  };

  const otpHandler = (event) => {
    setOtpField(event.target.value);
    setOtpInputError(false);
  };

  const otpValidation = (event) => {
    if (!sixDigitOtpValidation(event.target.value)) {
      event.target.value = event.target.value.substring(
        0,
        event.target.value.length
      );
    }
  };

  const displayCancelWarning = (event) => {
    setCancelClicked(true);
  };

  // render the modal JSX in the portal div (index.html).
  return ReactDom.createPortal(
    <div className={styles["container"]} onClick={closeModal}>
      <div className={styles["modal"]}>
        {!cancelClicked ? (
          <>
            <div className={styles["edit-callback-heading"]}>
              <p>Enter OTP</p>
            </div>

            {/* modal fields */}
            <div className={styles["enter-otp-field"]}>
              <div className={styles["text-input-wrapper"]}>
                <div className={styles["add-otp-input"]}>
                  <input
                    type="text"
                    value={otpField}
                    placeholder="Enter OTP"
                    className={styles["otp-field-input"]}
                    onChange={otpHandler}
                    maxLength={6}
                  />
                </div>
                {enteredMobileNumber && (
                  <p className={styles["otp-sent-subtext"]}>
                    Enter OTP sent to {enteredMobileNumber}
                  </p>
                )}
                {!!otpInputError && (
                  <p
                    className={
                      styles["invalid-otp-error"] + " " + styles["input-error"]
                    }
                  >
                    OTP is invalid. Please enter a valid OTP.
                  </p>
                )}
              </div>
            </div>

            {/* update callback btn */}
            <div className={styles["edit-button-wrapper"]}>
              <button
                onClick={(event) => displayCancelWarning(event)}
                className={
                  styles["cancel-otp-button"] + " " + styles["button-decentro"]
                }
                type="button"
              >
                Cancel
                <span id="loader"></span>
              </button>
              <button
                className={`${styles["submit-otp-button"]} ${
                  styles["button-decentro"]
                }  ${
                  !isDisabled
                    ? styles["active-update-btn"]
                    : styles["disabled-button"]
                }`}
                onClick={(event) => {
                  verifyOtp(event);
                }}
                type="button"
                disabled={isDisabled}
              >
                Submit
                <span id="loader"></span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles["cancel-warning-container"]}>
              <p>If you cancel, All progress will be lost</p>
              <div className={styles["post-cancel-click-decision"]}>
                <div
                  className={
                    styles["cancel-confirm"] +
                    " " +
                    styles["post-cancel-click-btn"]
                  }
                  onClick={(event) => {
                    setShowModal(false);
                    window.recaptchaVerifier.render().then(function (widgetId) {
                      grecaptcha.reset(widgetId);
                    });
                    // Clear input fields of all signup
                    // Cancel the recaptcha and generate again (basically cancel or auto abort the otp process)
                  }}
                >
                  Yes, I want to cancel
                </div>
                <div
                  className={
                    styles["cancel-reject"] +
                    " " +
                    styles["post-cancel-click-btn"]
                  }
                  onClick={(event) => {
                    setCancelClicked(false);
                  }}
                >
                  No, Continue
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.getElementById("portal")
  );
};
