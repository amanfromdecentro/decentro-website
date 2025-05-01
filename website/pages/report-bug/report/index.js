"use-client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import dynamic from "next/dynamic";
import md5 from "md5";
import { Oval } from "react-loader-spinner";
import axios from "../../../axios.js";
import requests from "../../../requests.js";
import {
  phoneNumberValidation,
  emailInputValidation,
} from "../../../inputValidators.js";

const SnackbarMessage = dynamic(() =>
  import("../../../components/SnackbarMessage/SnackbarMessage.js")
);

function PartnerSignup() {
  const [success, setSuccess] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");
  const [vulnerabilityType, setVulnerabilityType] = useState([
    {
      id: 1,
      name: "Injections",
    },
    {
      id: 2,
      name: "CSRF",
    },
    {
      id: 3,
      name: "SSRF",
    },
    {
      id: 4,
      name: "XSS",
    },
    {
      id: 5,
      name: "RCE",
    },
    {
      id: 6,
      name: "Authentication/Authorization",
    },
    {
      id: 7,
      name: "Domain Take-Over",
    },
    {
      id: 8,
      name: "Business Logic Flaws",
    },
    {
      id: 9,
      name: "LFI",
    },
    {
      id: 10,
      name: "RFI",
    },
    {
      id: 11,
      name: "Sensitive Data Leakage",
    },
    {
      id: 12,
      name: "Directory Traversal",
    },
    {
      id: 13,
      name: "Others",
    },
  ]);

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile_number: "",
    vulnerability_title: "",
    vulnerability_type: "",
    asset: "https://decentro.tech",
    description: "",
    decoded_value: "",
  });

  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    mobile_number: false,
    vulnerability_title: false,
    vulnerability_type: false,
    asset: false,
    description: false,
    decoded_value: false,
  });

  const [
    companyNameSpecialCharactersError,
    setCompanyNameSpecialCharactersError,
  ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window) {
        if (window.innerWidth <= 850) {
          setDeviceType("mobile");
        } else {
          setDeviceType("desktop");
        }
      }
    };

    // Add a listener for the window resize event
    window.addEventListener("resize", handleResize);

    handleResize();

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Label for decentro baner
  let label = { light: "Let's get you", bold: "Started!" };

  const showStageOptions = (event) => {
    document
      .getElementsByClassName("dropdown-indicator-stage")[0]
      .classList.toggle("select-active");
    document
      .getElementsByClassName("reference-section-stage")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("reference-options-wrapper-stage")[0]
      .classList.toggle("active");
  };

  const setSelectedStage = (event) => {
    localStorage.setItem("setSelectedStage", event.target.dataset.name);
    let dataValue = event.target.dataset.value;
    let dataId = event.target.dataset.id;
    let field = event.target.dataset.field;
    let stageElements = document.querySelectorAll(
      "[data-field='vulnerability_type']"
    );
    for (let i = 0; i < stageElements.length; i++) {
      if (stageElements[i].classList.contains("selectedStage")) {
        stageElements[i].classList.remove("selectedStage");
      }
    }
    event.target.classList.add("selectedStage");
    document.getElementsByClassName("reference-name-stage")[0].value =
      dataValue;
    document
      .getElementById("stageLabel")
      .classList.remove("label-error-active");
    document
      .getElementsByClassName("stage-required-error")[0]
      .classList.remove("required-error-active");
    document
      .getElementsByClassName("reference-section-stage")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("dropdown-indicator-stage")[0]
      .classList.toggle("select-active");
    document
      .getElementsByClassName("reference-options-wrapper-stage")[0]
      .classList.toggle("active");
    setInputValues({
      ...inputValues,
      [field]: event.target.dataset.name,
    });
  };

  const sanitizeCompany = (event) => {
    if (event.target.value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      if (event.target.dataset.field == "company")
        setCompanyNameSpecialCharactersError(true);
      else setCompanyRegisteredNameSpecialCharactersError(true);
      document
        .getElementsByClassName(event.target.classList[0])[0]
        .classList.add("input-error");
    } else {
      if (event.target.dataset.field == "company")
        setCompanyNameSpecialCharactersError(false);
      else setCompanyRegisteredNameSpecialCharactersError(false);
      document
        .getElementsByClassName(event.target.classList[0])[0]
        .classList.remove("input-error");
      event.target.classList.remove("input-error");
    }
  };

  const handleInput = (event) => {
    let field = event.target.dataset.field;
    setInputValues({
      ...inputValues,
      [field]: event.target.value,
    });
    document
      .getElementsByClassName(event.target.className)[0]
      .classList.remove("input-error");
    if (!(event.target.classList[0] == "business-usecase")) {
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.remove("invalid-error-active");
      if (
        event.target.classList[0] == "phone-input" ||
        event.target.classList[0] == "email-input" ||
        event.target.classList[0] == "vulnerability-title" ||
        event.target.classList[0] == "registered-name"
      )
        document
          .getElementsByClassName(event.target.dataset.unique)[0]
          .classList.remove("unique-error-active");
      document
        .getElementsByClassName(
          event.target.classList[0] + "-required-error"
        )[0]
        .classList.remove("required-error-active");
      document
        .getElementsByClassName(event.target.classList[0] + "-label")[0]
        .classList.remove("label-error-active");
    }
    if (field === "company" || field === "registered") {
      sanitizeCompany(event);
      setInputValues({
        ...inputValues,
        [field]: event.target.value,
      });
    }
  };

  const checkRequired = (event) => {
    if (event.target.value.length <= 0) {
      if (!(event.target.classList[0] == "business-usecase")) {
        document
          .getElementsByClassName(event.target.classList[0] + "-error")[0]
          .classList.remove("invalid-error-active");
        document
          .querySelector("#" + event.target.dataset.label)
          .classList.add("label-error-active");
        document
          .querySelector("#" + event.target.dataset.required)
          .classList.add("required-error-active");
        event.target.classList.add("input-error");

        setInputError({
          ...inputError,
          [event.target.dataset.field]: true,
        });
      } else {
        setInputError({
          ...inputError,
          [event.target.dataset.field]: false,
        });
      }
    } else {
      setInputError({
        ...inputError,
        [event.target.dataset.field]: false,
      });
      if (event.target.dataset.label == "emailLabel") {
        emailValidation(event);
      }
      if (event.target.dataset.label == "phoneLabel") {
        phoneValidation(event);
      }
    }
  };

  const phoneValidation = (event) => {
    if (!phoneNumberValidation(event.target.value)) {
      setInputError({
        ...inputError,
        mobile_number: true,
      });

      event.target.classList.add("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.add("invalid-error-active");
    } else {
      setInputError({
        ...inputError,
        mobile_number: false,
      });
      event.target.classList.remove("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.remove("invalid-error-active");
    }
  };

  const emailValidation = (event) => {
    if (!emailInputValidation(event.target.value)) {
      setInputError({
        ...inputError,
        email: true,
      });
      event.target.classList.add("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.add("invalid-error-active");
    } else {
      setInputError({
        ...inputError,
        email: false,
      });
      event.target.classList.remove("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.remove("invalid-error-active");
    }
  };

  const [
    companyRegisteredNameSpecialCharactersError,
    setCompanyRegisteredNameSpecialCharactersError,
  ] = useState(false);

  const checkAllRequired = () => {
    let count = 0;
    let allRequiredInputs = document.querySelectorAll("[data-required]");
    for (let i = 0; i < allRequiredInputs.length; i++) {
      if (allRequiredInputs[i].value.length <= 0) {
        count++;
        document
          .querySelector("#" + allRequiredInputs[i].dataset.label)
          .classList.add("label-error-active");
        document
          .querySelector("#" + allRequiredInputs[i].dataset.required)
          .classList.add("required-error-active");
        allRequiredInputs[i].classList.add("input-error");
      }
    }
    if (count == 0) return true;
    return false;
  };

  // First step forward button handler - Next
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [onboardBtnDisabled, setOnboardBtnDisabled] = useState(true);

  // Next Button should only be enabled when all fields in first step are filled and there are no invalid-input or validation errors

  useEffect(() => {
    if (
      inputValues.name != "" &&
      inputValues.mobile_number != "" &&
      inputValues.email != "" &&
      inputValues.vulnerability_title != "" &&
      inputValues.vulnerability_type != "" &&
      inputValues.asset != "" &&
      inputValues.description != "" &&
      inputValues.decoded_value != "" &&
      inputError.name == false &&
      inputError.email == false &&
      inputError.mobile_number == false &&
      inputError.vulnerability_title == false &&
      inputError.vulnerability_type == false &&
      inputError.asset == false &&
      inputError.description == false &&
      inputError.decoded_value == false
    ) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }
  }, [inputValues, inputError]);

  const redirectDocsPage = (event) => {
    window.location.assign("https://docs.decentro.tech/docs");
  };

  const fetchValueFromTypeObject = () => {
    let stageValue = inputValues.vulnerability_type;
    return stageValue ? stageValue : null;
  };

  const fetchValueFromAssetObject = () => {
    let stageValue = inputValues.asset;
    return stageValue ? stageValue : null;
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="carousel-item">
            <div className="name-inputs  input-row">
              <div className="input-block">
                <div className="required-field-container">
                  <p className="input-label name-input-label" id="nameLabel">
                    Name
                  </p>{" "}
                  <span
                    className="name-input-required-error required-error"
                    id="nameRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  autoFocus
                  className="name-input"
                  type="text"
                  name="name"
                  data-field="name"
                  placeholder=""
                  onChange={handleInput}
                  onBlur={checkRequired}
                  data-label="nameLabel"
                  data-required="nameRequired"
                  value={inputValues.name}
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`name-input-error invalid-error ${inputError.name ? "invalid-error-active" : ""
                    }`}
                  alt="invalid icon"
                />
              </div>
              <div className="contact-email-input input-block">
                <div className="required-field-container">
                  <p className="input-label email-input-label" id="emailLabel">
                    Email ID
                  </p>{" "}
                  <span
                    className="email-input-required-error required-error"
                    id="emailRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  className="email-input"
                  type="email"
                  name="email-input"
                  data-field="email"
                  placeholder=""
                  onBlur={(event) => {
                    checkRequired(event);
                  }}
                  data-label="emailLabel"
                  data-required="emailRequired"
                  data-unique="email-unique-error"
                  onChange={handleInput}
                  value={inputValues.email}
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`email-input-error invalid-error ${inputError.email ? "invalid-error-active" : ""
                    }`}
                  alt="invalid icon"
                />
                <img
                  src="/images/signup/already-used.svg"
                  className={`email-unique-error invalid-error`}
                  alt="invalid icon"
                />
              </div>
            </div>
            <div className="contact-inputs input-row">
              <div className="contact-phone-input input-block">
                <div className="required-field-container">
                  <p className="input-label phone-input-label" id="phoneLabel">
                    Mobile Number
                  </p>{" "}
                  <span
                    className="phone-input-required-error required-error"
                    id="phoneRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  className="phone-input"
                  type="tel"
                  name="phone-input"
                  data-field="mobile_number"
                  placeholder=""
                  maxLength={10}
                  onChange={handleInput}
                  onBlur={(event) => {
                    checkRequired(event);
                  }}
                  data-label="phoneLabel"
                  data-required="phoneRequired"
                  data-unique="phone-unique-error"
                  maxlength={10}
                  value={inputValues.mobile_number}
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`phone-input-error invalid-error ${inputError.mobile_number ? "invalid-error-active" : ""
                    }`}
                  alt="invalid icon"
                />
                <img
                  src="/images/signup/already-used.svg"
                  className={`phone-unique-error invalid-error`}
                  alt="invalid icon"
                />
              </div>
            </div>
            <div className="company-inputs input-row">
              <div className="vulnerability-title-input input-block">
                <div className="required-field-container">
                  <p
                    className="input-label vulnerability-title-label"
                    id="vulnerabilityLabel"
                  >
                    Vulnerability Title
                  </p>{" "}
                  <span
                    className="vulnerability-title-required-error required-error"
                    id="vulnerabilityTitleRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  className="vulnerability-title"
                  type="text"
                  name="vulnerability-title"
                  data-field="vulnerability_title"
                  placeholder=""
                  onChange={handleInput}
                  value={inputValues.vulnerability_title}
                  onBlur={(event) => {
                    checkRequired(event);
                  }}
                  data-label="vulnerabilityLabel"
                  data-required="vulnerabilityTitleRequired"
                  data-unique="company-unique-error"
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`vulnerability-title-error invalid-error ${inputError.vulnerability_title ? "invalid-error-active" : ""
                    }`}
                  alt="invalid icon"
                />
                <img
                  src="/images/signup/already-used.svg"
                  className={`company-unique-error invalid-error`}
                  alt="invalid icon"
                />
              </div>
            </div>
            <div className="company-inputs input-row full-width-row">
              <div className="stage-name-input input-block">
                <div className="required-field-container">
                  <p className="input-label" id="stageLabel">
                    Vulnerability Type
                  </p>{" "}
                  <span
                    className="stage-required-error required-error"
                    id="stageRequired"
                  >
                    Required
                  </span>
                </div>
                <div className="reference-section-stage">
                  <div
                    className="reference-input-wrapper"
                    onClick={showStageOptions}
                  >
                    <input
                      className="reference-name-stage stage-input"
                      type="text"
                      name="stage-name"
                      placeholder="Select an option"
                      disabled
                      data-label="stageLabel"
                      data-required="stageRequired"
                      value={
                        inputValues.vulnerability_type
                          ? fetchValueFromTypeObject()
                          : ""
                      }
                      required
                    />
                    <img
                      className="dropdown-indicator-stage"
                      src="/images/signup/down-arrow.svg"
                      alt="down arrow icon"
                    />
                  </div>
                  <div className="reference-options-wrapper-stage">
                    <ul className="reference-options-stage">
                      {vulnerabilityType.map((item, index) => {
                        return (
                          <li
                            data-name={item.name}
                            data-value={item.name}
                            data-id={item.id}
                            data-field="vulnerability_type"
                            onClick={setSelectedStage}
                            key={index}
                          >
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-inputs input-row full-width-row">
              <div className="asset-name-input input-block">
                <div className="required-field-container">
                  <p className="input-label" id="assetLabel">
                    Asset / Scope
                  </p>{" "}
                  <span
                    className="asset-required-error required-error"
                    id="assetRequired"
                  >
                    Required
                  </span>
                </div>
                <div className="reference-section-asset">
                  <div className="reference-input-wrapper">
                    <input
                      className="reference-name-asset asset-input"
                      type="text"
                      name="asset-name"
                      placeholder="Select an option"
                      disabled
                      data-label="assetLabel"
                      data-required="assetRequired"
                      value={
                        inputValues.asset ? fetchValueFromAssetObject() : ""
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="company-inputs input-row">
              <div className="description-input input-block">
                <div className="required-field-container">
                  <p
                    className="input-label description-label"
                    id="descriptionLabel"
                  >
                    Description
                  </p>{" "}
                  <span
                    className="description-required-error required-error"
                    id="descriptionRequired"
                  >
                    Required
                  </span>
                </div>
                <textarea
                  className="description"
                  type="text"
                  name="description"
                  data-field="description"
                  placeholder={`Description
## Summary:
[add summary of the vulnerability]

## Steps To Reproduce:
[add details for how we can reproduce the issue]

1. [add step]
2. [add step]
3. [add step]

## Supporting Material/References:
[list any additional material (e.g. screenshots, logs, etc.)]
* [attachment / reference]

## To include files as  google drive links`}
                  onChange={handleInput}
                  value={inputValues.description}
                  onBlur={(event) => {
                    checkRequired(event);
                  }}
                  data-label="descriptionLabel"
                  data-required="descriptionRequired"
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`description-error invalid-error ${inputError.description ? "invalid-error-active" : ""
                    }`}
                  alt="invalid icon"
                />
              </div>
            </div>
            <div className="company-inputs input-row">
              <div className="hash-input input-block">
                <div className="required-field-container">
                  <p className="input-label hash-label" id="hashLabel">
                    MD5 hash value of your Email ID
                  </p>{" "}
                  <span
                    className="hash-required-error required-error"
                    id="hashRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  className="hash"
                  type="text"
                  name="hash"
                  data-field="decoded_value"
                  placeholder="Enter the MD5 hash value of your Email ID"
                  onChange={handleInput}
                  value={inputValues.decoded_value}
                  onBlur={(event) => {
                    checkRequired(event);
                  }}
                  data-label="hashLabel"
                  data-required="hashRequired"
                  data-unique="company-unique-error"
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`hash-error invalid-error ${inputError.decoded_value ? "invalid-error-active" : ""
                    }`}
                  alt="invalid icon"
                />
              </div>
            </div>
          </div>
        );
    }
  };

  const sendData = async (event) => {
    // if (checkAllRequired()) {
    //   ReactDOM.render(
    //     <Oval heigth={20} width={20} color="#FFFFFF" ariaLabel="loading" />,
    //     document.getElementById("loader")
    //   );
    //   sendCustomerDetails();
    // } else {
    //   setOnboardBtnDisabled(false);
    // }
    if (checkAllRequired()) {
      const root = ReactDOM.createRoot(document.getElementById("loader"));
      root.render(
        <Oval height={20} width={20} color="#FFFFFF" ariaLabel="loading" />
      );

      try {
        await sendCustomerDetails();
        root.unmount();
      } catch (error) {
        console.error("error from report-bug", error);
      }
    } else {
      setOnboardBtnDisabled(false);
    }
  };

  const displayErrors = (errorData) => {
    if (errorData == "Duplicate Entry") {
      document
        .getElementsByClassName("duplicate-input-error")[0]
        .classList.add("invalid-error-active");
      document
        .getElementsByClassName("phone-input")[0]
        .classList.add("input-error");
      document.getElementsByClassName("phone-input")[0].focus();
      const yOffset = -100;
      let firstErrorElement = document.getElementsByClassName(
        "duplicate-input-error"
      )[0];
      const y =
        firstErrorElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      return;
    }
    if (errorData == "Internal Server Error") {
      setOpen(true);
      return;
    } else {
      if ("name" in errorData) {
        document
          .getElementsByClassName("name-input")[0]
          .classList.add("input-error");
        document
          .getElementsByClassName("name-input-error")[0]
          .classList.add("invalid-error-active");
      }
      if ("last_name" in errorData) {
        document
          .getElementsByClassName("last-name-input")[0]
          .classList.add("input-error");
        document
          .getElementsByClassName("last-name-input-error")[0]
          .classList.add("invalid-error-active");
      }
      if ("mobile_number" in errorData) {
        document
          .getElementsByClassName("phone-input")[0]
          .classList.add("input-error");
        document
          .getElementsByClassName("phone-input-error")[0]
          .classList.add("invalid-error-active");
      }
      if ("email" in errorData) {
        document
          .getElementsByClassName("email-input")[0]
          .classList.add("input-error");
        document
          .getElementsByClassName("email-input-error")[0]
          .classList.add("invalid-error-active");
      }
      if ("company" in errorData) {
        document
          .getElementsByClassName("vulnerability-title")[0]
          .classList.add("input-error");
        document
          .getElementsByClassName("vulnerability-title-error")[0]
          .classList.add("invalid-error-active");
      }
    }
  };

  const sendCustomerDetails = () => {
    const emailHash = md5(inputValues.email);
    if (emailHash !== inputValues.decoded_value) {
      // ReactDOM.unmountComponentAtNode(document.getElementById("loader"));
      // Use root.unmount() instead of unmountComponentAtNode
      const loaderRoot = ReactDOM.createRoot(document.getElementById("loader"));
      loaderRoot.unmount();
      setInputError((prevInputError) => ({
        ...prevInputError,
        decoded_value: true,
      }));
      // ReactDOM.render(
      //   <SnackbarMessage msgtype="Error" msg={"MD5 Hash Value is invalid"} />,
      //   document.getElementById("snackbar")
      // );

      // Create root for snackbar
      const snackbarRoot = ReactDOM.createRoot(
        document.getElementById("snackbar")
      );
      snackbarRoot.render(
        <SnackbarMessage msgtype="Error" msg={"MD5 Hash Value is invalid"} />
      );
      return;
    }
    const request = axios
      .post(
        "https://workflow.decentro.tech/webhook" + requests.BUG_REPORT,
        inputValues,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (
          response.status == 200 &&
          response.data.message == "Your request is under process"
        ) {
          setSuccess(true);
          // ReactDOM.unmountComponentAtNode(document.getElementById("loader"));
          if (loaderRoot) loaderRoot.unmount();
        } else {
          // ReactDOM.render(
          //   <SnackbarMessage
          //     msgtype="Error"
          //     msg={response?.data?.message || "Something went wrong !"}
          //   />,
          //   document.getElementById("snackbar")
          // );
          const snackbarRoot = ReactDOM.createRoot(
            document.getElementById("snackbar")
          );
          snackbarRoot.render(
            <SnackbarMessage
              msgtype="Error"
              msg={response?.data?.message || "Something went wrong !"}
            />
          );
        }
      })
      .catch((error) => {
        if (error.response) {
          displayErrors(error.response.data.error);
        }
      });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Report Vulnerabilities & Bugs - Decentro</title>
        <link rel="canonical" href="https://decentro.tech/report-bug/report" />
        <link
          rel="alternate"
          href="https://decentro.tech/report-bug/report"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content=" Report security vulnerabilities on Decentro's website and be a part of our bug bounty program. Fill the form and submit within minutes."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Report Vulnerabilities & Bugs - Decentro"
        />
      </Head>
      <div id="pageLoader"></div>
      <div className="signup">
        <div className="signup-section bugs-report">
          {!success ? (
            <div className="form-section">
              <div className="signup-header">
                <img
                  className="decentro-logo"
                  src="/images/home/decentro-logo.svg"
                  alt="logo"
                />
                <h1>Report a Bug</h1>
                <p className="help-text-light">
                  <span>*</span>&nbsp;All fields are mandatory
                </p>
              </div>
              <div className="input-section">
                <form autoComplete="off">
                  <div className="inputs">{showStep(1)}</div>
                </form>
              </div>
              <div className="submit-container">
                <button
                  className={`submit ${nextButtonDisabled ? "disabled-button" : ""
                    }`}
                  onClick={() => {
                    sendData();
                  }}
                  disabled={nextButtonDisabled}
                >
                  Submit
                  <span id="loader"></span>
                </button>
              </div>

              {/* To display recaptcha  */}
              <div id="recaptcha-container-wrapper">
                <div id="recaptcha-container"></div>
              </div>

              <div id="snackbar"></div>
            </div>
          ) : (
            <div className="form-success-container">
              <div className="success-content">
                <h1>
                  <span>Voila!</span>
                </h1>
                <p>
                  Congratulations, you have successfully submitted your
                  vulnerability report to Decentro Security Team.
                  <br />
                  <br />
                  Our team will reach out to you soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div id="snackbar"></div>
    </React.Fragment>
  );
}

export default PartnerSignup;
