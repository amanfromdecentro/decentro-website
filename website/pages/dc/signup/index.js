import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// Imported to track custom successfull signup events only
import ReactGA from "react-ga";
import Head from "next/head";
import { Oval } from "react-loader-spinner";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaArrowLeft } from "react-icons/fa";
import requests from "../../../requests";
import axios from "axios";
import {
  emailInputValidation,
  phoneNumberValidation,
} from "../../../inputValidators";
import sortById from "../../../utilities/sortResponses";

import DecentroBanner from "../../../components/shared/decentro-signup-banner/decentro-signup-banner";

function NeowiseSignup() {
  const [deviceType, setDeviceType] = useState("desktop");
  const [onboardButtonDisabled, setOnboardButtonDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const [otherCityVisible, setOtherCityVisible] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [modes, setModes] = useState([]);
  const [cities, setCities] = useState([]);
  const [stages, setStages] = useState([]);

  const handleClose = () => setOpen(false);
  const [inputValues, setInputValues] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email_id: "",
    company: "",
    business_use_case: "",
    mode: "",
    other_mode_details: "",
    city: "",
    other_city_details: "",
    stage: "",
    products: "lending",
  });

  // Create roots for your components
  let pageLoaderRoot, snackbarRoot;

  useEffect(() => {
    const pageLoaderElement = document.getElementById("pageLoader");
    const snackbarElement = document.getElementById("snackbar");

    if (pageLoaderElement) {
      pageLoaderRoot = ReactDOM.createRoot(pageLoaderElement);
    }

    if (snackbarElement) {
      snackbarRoot = ReactDOM.createRoot(snackbarElement);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window) {
        if (window.innerWidth <= 710) {
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

  useEffect(() => {
    if (!visible) {
      setInputValues({
        ...inputValues,
        other_mode_details: "",
      });
    }
  }, [visible]);

  useEffect(() => {
    if (!otherCityVisible) {
      setInputValues({
        ...inputValues,
        other_city_details: "",
      });
    }
  }, [otherCityVisible]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [inputError, setInputError] = useState({
    first_name: false,
    last_name: false,
    phone_number: false,
    mode: false,
    city: false,
    email_id: false,
  });

  useEffect(() => {
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );
    pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    const request = axios
      .get(
        requests.DECENTRO_WORKFLOW_BASE_URL_PROD +
        requests.DECENTRO_DC_MODE_LIST
      )
      .then((response) => {
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        setModes(response.data.modes);
      })
      .catch((error) => {
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        setOpen(true);
      });
  }, []);

  useEffect(() => {
    pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );
    const request = axios
      .get(
        requests.DECENTRO_WORKFLOW_BASE_URL_PROD +
        requests.DECENTRO_DC_STAGE_LIST
      )
      .then((response) => {
        sortById(response.data.stages);
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        setStages(response.data.stages);
      })
      .catch((error) => {
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        setOpen(true);
      });
  }, []);

  useEffect(() => {
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );
    pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    const request = axios
      .get(
        requests.DECENTRO_WORKFLOW_BASE_URL_PROD +
        requests.DECENTRO_DC_CITY_LIST
      )
      .then((response) => {
        sortById(response.data.cities);
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        setCities(response.data.cities);
      })
      .catch((error) => {
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        setOpen(true);
      });
  }, []);

  let label = { light: "Let's get you", bold: "Started!" };

  const showDropdownOptions = (event) => {
    document
      .getElementsByClassName("dropdown-indicator")[0]
      .classList.toggle("select-active");
    document
      .getElementsByClassName("reference-section")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("reference-options-wrapper")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("dropdown-indicator-stage")[0]
      .classList.remove("select-active");
    document
      .getElementsByClassName("dropdown-indicator-city")[0]
      .classList.remove("select-active");
    document
      .getElementsByClassName("reference-section-stage")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-section-city")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-options-wrapper-stage")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-options-wrapper-city")[0]
      .classList.remove("active");
  };

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
    document
      .getElementsByClassName("dropdown-indicator")[0]
      .classList.remove("select-active");
    document
      .getElementsByClassName("dropdown-indicator-city")[0]
      .classList.remove("select-active");
    document
      .getElementsByClassName("reference-section")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-section-city")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-options-wrapper")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-options-wrapper-city")[0]
      .classList.remove("active");
  };

  const showCityOptions = (event) => {
    document
      .getElementsByClassName("dropdown-indicator-city")[0]
      .classList.toggle("select-active");
    document
      .getElementsByClassName("reference-section-city")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("reference-options-wrapper-city")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("dropdown-indicator")[0]
      .classList.remove("select-active");
    document
      .getElementsByClassName("dropdown-indicator-stage")[0]
      .classList.remove("select-active");
    document
      .getElementsByClassName("reference-section")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-section-stage")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-options-wrapper")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-options-wrapper-stage")[0]
      .classList.remove("active");
  };

  const setSelectedReference = (event) => {
    let dataValue = event.target.dataset.value;
    let dataId = event.target.dataset.id;

    if (dataValue == "Other") {
      setVisible(true);
    } else {
      setVisible(false);
    }
    let field = event.target.dataset.field;
    let modeElements = document.querySelectorAll("[data-field='mode']");
    for (let i = 0; i < modeElements.length; i++) {
      if (modeElements[i].classList.contains("selectedMode")) {
        modeElements[i].classList.remove("selectedMode");
      }
    }
    event.target.classList.add("selectedMode");
    document.getElementsByClassName("reference-name")[0].value = dataValue;
    document.getElementById("modeLabel").classList.remove("label-error-active");
    document
      .getElementsByClassName("mode-required-error")[0]
      .classList.remove("required-error-active");
    document
      .getElementsByClassName("reference-section")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("dropdown-indicator")[0]
      .classList.toggle("select-active");
    document
      .getElementsByClassName("reference-options-wrapper")[0]
      .classList.toggle("active");

    setInputValues({
      ...inputValues,
      [field]: dataValue,
    });
  };

  const setSelectedStage = (event) => {
    let dataValue = event.target.dataset.value;
    let dataId = event.target.dataset.id;
    let field = event.target.dataset.field;
    let stageElements = document.querySelectorAll("[data-field='stage']");
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
      [field]: dataValue,
    });
  };

  const setSelectedCity = (event) => {
    let dataId = event.target.dataset.id;
    let dataValue = event.target.dataset.value;
    if (dataValue == "Other") {
      setOtherCityVisible(true);
    } else {
      setOtherCityVisible(false);
    }
    let field = event.target.dataset.field;
    let cityElements = document.querySelectorAll("[data-field='city']");
    for (let i = 0; i < cityElements.length; i++) {
      if (cityElements[i].classList.contains("selectedCity")) {
        cityElements[i].classList.remove("selectedCity");
      }
    }
    event.target.classList.add("selectedCity");
    document.getElementsByClassName("reference-name-city")[0].value = dataValue;
    document.getElementById("cityLabel").classList.remove("label-error-active");
    document
      .getElementsByClassName("city-required-error")[0]
      .classList.remove("required-error-active");
    document
      .getElementsByClassName("reference-section-city")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("dropdown-indicator-city")[0]
      .classList.toggle("select-active");
    document
      .getElementsByClassName("reference-options-wrapper-city")[0]
      .classList.toggle("active");

    setInputValues({
      ...inputValues,
      [field]: dataValue,
    });
  };

  const handleInput = (event) => {
    let field = event.target.dataset.field;
    setInputValues({
      ...inputValues,
      [field]: event.target.value.trim(),
    });
    document
      .getElementsByClassName(event.target.className)[0]
      .classList.remove("input-error");
    if (!(event.target.classList[0] == "business-usecase")) {
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.remove("invalid-error-active");
      if (event.target.classList[0] == "phone-input")
        document
          .getElementsByClassName("duplicate-input-error")[0]
          .classList.remove("invalid-error-active");
      document
        .getElementsByClassName(
          event.target.classList[0] + "-required-error"
        )[0]
        .classList.remove("required-error-active");
      document
        .getElementsByClassName(event.target.classList[0] + "-label")[0]
        .classList.remove("label-error-active");
    }
  };

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

  useEffect(() => {
    if (currentStep === 1) {
      if (
        inputValues.first_name != "" &&
        inputValues.last_name != "" &&
        inputValues.phone_number.length == 10 &&
        inputValues.email_id != ""
      ) {
        let allInputElements = document.getElementsByTagName("input");

        for (let i = 0; i < allInputElements.length; i++) {
          if (allInputElements[i].classList.contains("input-error")) {
            setOnboardButtonDisabled(true);
            return;
          }
        }
      }
    }
  }, [inputValues]);

  const sendData = (event) => {
    setOnboardButtonDisabled(true);
    if (checkAllRequired()) {
      // ReactDOM.render(
      //   <Oval heigth={20} width={20} color="#FFFFFF" ariaLabel="loading" />,
      //   document.getElementById("loader")
      // );
      if (pageLoaderRoot)
        pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
      let subEmailInput = {
        Email: inputValues.email_id,
      };
      if (document.getElementById("newsletterInput").checked) {
        const subscriptionRequest = axios
          .post(requests.NEWSLETTER_SUBSCRIBE, subEmailInput)
          .then((res) => {
            console.log(res);
          });
      }
      const request = axios
        .post(
          requests.DECENTRO_WORKFLOW_BASE_URL_PROD +
          requests.DECENTRO_DC_SIGNUP,
          inputValues,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          setSuccess(true);

          // Custom Google Analytics Event tracker, tracking the signup button click only when the signup is successful
          // Tracking based on Goal Settings in the Google Analytics Dashboard - with all the configurations set same as below
          // Testing to be done with Alternate entries of Successful & Failed signup\ and see if the proper events are being captured by GA Dashboard
          ReactGA.event({
            category: "Signup Success",
            action: "SuccessfulSignupClick",
            label: "Signup",
          });
          // ReactDOM.unmountComponentAtNode(document.getElementById("loader"));
          if (pageLoaderRoot) {
            // Unmount the Oval component using the root
            pageLoaderRoot.unmount();
          }
          setOnboardButtonDisabled(false);
        })
        .catch((error) => {
          if (error.response) {
            displayErrors(error.response.data.error);
            // ReactDOM.unmountComponentAtNode(document.getElementById("loader"));
            if (pageLoaderRoot) {
              // Unmount the Oval component using the root
              pageLoaderRoot.unmount();
            }
          }
        });
    } else {
      setOnboardButtonDisabled(false);
    }
  };

  const displayErrors = (errorData) => {
    if (errorData) {
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
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
      if (errorData == "Internal Server Error") {
        setOpen(true);
        return;
      } else {
        if ("first_name" in errorData) {
          document
            .getElementsByClassName("first-name-input")[0]
            .classList.add("input-error");
          document
            .getElementsByClassName("first-name-input-error")[0]
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
        if ("phone_number" in errorData) {
          document
            .getElementsByClassName("phone-input")[0]
            .classList.add("input-error");
          document
            .getElementsByClassName("phone-input-error")[0]
            .classList.add("invalid-error-active");
        }
        if ("email_id" in errorData) {
          document
            .getElementsByClassName("email-input")[0]
            .classList.add("input-error");
          document
            .getElementsByClassName("email-input-error")[0]
            .classList.add("invalid-error-active");
        }
        if ("company" in errorData) {
          document
            .getElementsByClassName("company-name")[0]
            .classList.add("input-error");
          document
            .getElementsByClassName("company-name-error")[0]
            .classList.add("invalid-error-active");
        }
      }
    }
  };

  const redirectDocsPage = (event) => {
    window.location.assign("https://docs.decentro.tech/docs");
  };

  const phoneValidation = (event) => {
    if (!phoneNumberValidation(event.target.value)) {
      event.target.classList.add("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.add("invalid-error-active");
    }
  };

  const emailValidation = (event) => {
    if (!emailInputValidation(event.target.value)) {
      event.target.classList.add("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.add("invalid-error-active");
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
      }
    } else {
      if (event.target.dataset.label == "emailLabel") {
        emailValidation(event);
      }
      if (event.target.dataset.label == "phoneLabel") {
        phoneValidation(event);
      }
    }
  };

  const previousPage = (event) => {
    window.history.back();
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="carousel-item">
            <div className="name-inputs input-row">
              <div className="input-block">
                <div className="required-field-container">
                  <p
                    className="input-label first-name-input-label"
                    id="firstNameLabel"
                  >
                    First Name
                  </p>{" "}
                  <span
                    className="first-name-input-required-error required-error"
                    id="firstNameRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  className="first-name-input"
                  type="text"
                  name="first-name"
                  data-field="first_name"
                  placeholder=""
                  onChange={handleInput}
                  onBlur={checkRequired}
                  data-label="firstNameLabel"
                  data-required="firstNameRequired"
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`first-name-input-error invalid-error ${inputError.first_name ? "invalid-error-active" : ""
                    }`}
                />
              </div>
              <div className="input-block">
                <div className="required-field-container">
                  <p
                    className="input-label last-name-input-label"
                    id="lastNameLabel"
                  >
                    Last Name
                  </p>{" "}
                  <span
                    className="last-name-input-required-error required-error"
                    id="lastNameRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  className="last-name-input"
                  type="text"
                  name="last-name"
                  data-field="last_name"
                  placeholder=""
                  onChange={handleInput}
                  onBlur={checkRequired}
                  data-label="lastNameLabel"
                  data-required="lastNameRequired"
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`last-name-input-error invalid-error ${inputError.last_name ? "invalid-error-active" : ""
                    }`}
                />
              </div>
            </div>
            <div className="contact-inputs input-row">
              <div className="contact-phone-input input-block">
                <div className="required-field-container">
                  <p className="input-label phone-input-label" id="phoneLabel">
                    Phone Number
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
                  data-field="phone_number"
                  placeholder=""
                  maxlength="14"
                  onChange={handleInput}
                  onBlur={checkRequired}
                  data-label="phoneLabel"
                  data-required="phoneRequired"
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`phone-input-error invalid-error ${inputError.phone_number ? "invalid-error-active" : ""
                    }`}
                />
                <img
                  src="/images/already-used.svg"
                  className={`duplicate-input-error invalid-error ${inputError.phone_number ? "invalid-error-active" : ""
                    }`}
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
                  data-field="email_id"
                  placeholder=""
                  onBlur={checkRequired}
                  data-label="emailLabel"
                  data-required="emailRequired"
                  onChange={handleInput}
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`email-input-error invalid-error ${inputError.email_id ? "invalid-error-active" : ""
                    }`}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="carousel-item">
            <div className="company-inputs input-row">
              <div className="company-name-input input-block">
                <div className="required-field-container">
                  <p
                    className="input-label company-name-label"
                    id="companyNameLabel"
                  >
                    Company
                  </p>{" "}
                  <span
                    className="company-name-required-error required-error"
                    id="companyNameRequired"
                  >
                    Required
                  </span>
                </div>
                <input
                  className="company-name"
                  type="text"
                  name="company-name"
                  data-field="company"
                  placeholder=""
                  onChange={handleInput}
                  value={inputValues.company}
                  onBlur={checkRequired}
                  data-label="companyNameLabel"
                  data-required="companyNameRequired"
                  required
                />
                <img
                  src="/images/invalid-input.svg"
                  className={`company-name-error invalid-error ${inputError.company ? "invalid-error-active" : ""
                    }`}
                />
              </div>
              <div className="business-usecase-input input-block">
                <div className="required-field-container">
                  <p
                    className="input-label business-usecase-label optional-label"
                    id="businessUsecaseLabel"
                  >
                    Can you please describe your business use case?
                  </p>{" "}
                  <span
                    className="business-usecase-optional-indicator required-error-active optional-indicator"
                    id="businessUsecaseoptional"
                  >
                    (Optional)
                  </span>
                </div>

                <p className="business-additional-desc additional-desc">
                  Any information will help us with prep when we meet
                </p>
                <textarea
                  className="business-usecase"
                  type="text"
                  name="business-usecase"
                  data-field="business_use_case"
                  placeholder=""
                  onChange={handleInput}
                  value={inputValues.business_use_case}
                  onBlur={checkRequired}
                  data-label="businessUsecaseLabel"
                ></textarea>
              </div>
              {/* Removed for now will enable with the new n8n api change */}
              <div className="reference-name-input input-block">
                <div className="required-field-container">
                  <p className="input-label" id="modeLabel">
                    Where did you hear about us?
                  </p>{" "}
                  <span
                    className="mode-required-error required-error"
                    id="modeRequired"
                  >
                    Required
                  </span>
                </div>
                <div className="reference-section">
                  <div
                    className="reference-input-wrapper"
                    onClick={showDropdownOptions}
                  >
                    <input
                      className="reference-name mode-input"
                      type="text"
                      name="reference-name"
                      placeholder="Select an option"
                      disabled
                      required
                      data-required="modeRequired"
                      data-label="modeLabel"
                    />
                    <img
                      className="dropdown-indicator"
                      src="/images/signup/down-arrow.svg"
                    />
                  </div>
                  <div className="reference-options-wrapper">
                    <ul className="reference-options">
                      {modes.map((item, index) => {
                        return (
                          <li
                            data-name={item.name}
                            data-value={item.name}
                            data-id={item.id}
                            data-field="mode"
                            onClick={setSelectedReference}
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
              <div
                className="other-mode-inputs input-block"
                style={{ display: visible ? "flex" : "none" }}
              >
                <div className="required-field-container">
                  <p
                    className="input-label other-mode-label"
                    id="otherModeLabel"
                  >
                    Please specify
                  </p>{" "}
                  <span
                    className="other-mode-required-error required-error"
                    id="otherModeRequired"
                  >
                    Required
                  </span>
                </div>
                {visible ? (
                  <input
                    className="other-mode"
                    type="text"
                    name="other-mode"
                    data-field="other_mode_details"
                    placeholder=""
                    onChange={handleInput}
                    onBlur={checkRequired}
                    data-label="otherModeLabel"
                    data-required="otherModeRequired"
                    required
                  />
                ) : (
                  <input
                    className="other-mode"
                    type="text"
                    name="other-mode"
                    data-field="other_mode_details"
                    placeholder=""
                    onChange={handleInput}
                    onBlur={checkRequired}
                    data-label="otherModeLabel"
                  />
                )}
                <img
                  src="/images/invalid-input.svg"
                  className={`other-mode-error invalid-error ${inputError.company ? "invalid-error-active" : ""
                    }`}
                />
              </div>
              <div className="stage-name-input input-block">
                <div className="required-field-container">
                  <p className="input-label" id="stageLabel">
                    Company Stage
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
                      required
                    />
                    <img
                      className="dropdown-indicator-stage"
                      src="/images/signup/down-arrow.svg"
                    />
                  </div>
                  <div className="reference-options-wrapper-stage">
                    <ul className="reference-options-stage">
                      {stages.map((item, index) => {
                        return (
                          <li
                            data-value={item.name}
                            data-id={item.id}
                            data-field="stage"
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
              <div className="city-name-input input-block">
                <div className="required-field-container">
                  <p className="input-label" id="cityLabel">
                    Which city is your company based out of?
                  </p>{" "}
                  <span
                    className="city-required-error required-error"
                    id="cityRequired"
                  >
                    Required
                  </span>
                </div>
                <div className="reference-section-city">
                  <div
                    className="reference-input-wrapper"
                    onClick={showCityOptions}
                  >
                    <input
                      className="reference-name-city city-input"
                      type="text"
                      name="city-name"
                      placeholder="Select an option"
                      disabled
                      required
                      data-required="cityRequired"
                      data-label="cityLabel"
                    />
                    <img
                      className="dropdown-indicator-city"
                      src="/images/signup/down-arrow.svg"
                    />
                  </div>
                  <div className="reference-options-wrapper-city">
                    <ul className="reference-options-city">
                      {cities.map((item, index) => {
                        return (
                          <li
                            data-value={item.name}
                            data-id={item.id}
                            data-field="city"
                            onClick={setSelectedCity}
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
              <div
                className="other-city-inputs input-block"
                style={{ display: otherCityVisible ? "flex" : "none" }}
              >
                <div className="required-field-container">
                  <p
                    className="input-label other-city-label"
                    id="otherCityLabel"
                  >
                    Please specify
                  </p>{" "}
                  <span
                    className="other-city-required-error required-error"
                    id="otherCityRequired"
                  >
                    Required
                  </span>
                </div>
                {otherCityVisible ? (
                  <input
                    className="other-city"
                    type="text"
                    name="other-city"
                    data-field="other_city_details"
                    placeholder=""
                    onChange={handleInput}
                    onBlur={checkRequired}
                    data-label="otherCityLabel"
                    data-required="otherCityRequired"
                    required
                  />
                ) : (
                  <input
                    className="other-city"
                    type="text"
                    name="other-city"
                    data-field="other_city_details"
                    placeholder=""
                    onChange={handleInput}
                    onBlur={checkRequired}
                    data-label="otherCityLabel"
                  />
                )}
                <img
                  src="/images/invalid-input.svg"
                  className={`other-city-error invalid-error ${inputError.city ? "invalid-error-active" : ""
                    }`}
                />
              </div>
            </div>
            <div className="newsletter-subscription-container">
              <label className="subscription-container">
                Get all the latest news from Fintech World in your Inbox
                <input
                  type="checkbox"
                  id="newsletterInput"
                  name="newsletter-input"
                  value="false"
                  defaultChecked="true"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        );
    }
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  return (
    <React.Fragment>
      <Head>
        <title>Sign Up - Decentro&apos;s Debt Collection Software</title>
        <link rel="canonical" href="https://decentro.tech/dc/signup/" />
        <meta
          name="description"
          content="Sign Up for Decentro's Debt Collection Software & Managed Services. Get started with effective debt collection for your business within minutes."
        />
        <meta name="keywords" content="decentro" />
        <meta
          property="og:title"
          content="Sign Up - Decentro's Debt Collection Software"
        />
      </Head>
      <div id="pageLoader"></div>
      <div className="signup">
        <DecentroBanner label={label} />
        <div className="signup-section">
          {!success ? (
            <div className="form-section">
              <FaArrowLeft className="go-back-arrow" onClick={previousPage} />
              <div className="signup-header">
                <img
                  className="decentro-logo"
                  src="/images/signup/decentro-logo.svg"
                  alt="logo"
                />
                <h1>
                  Help us out with some details, and we’ll reach out to you!
                </h1>
                <p className="help-text-light">
                  <span>*</span>&nbsp;All fields are mandatory
                </p>
              </div>
              <div className="input-section">
                <form autocomplete="off">
                  <div className="inputs">{showStep(currentStep)}</div>
                </form>
              </div>
              <div
                className="submit-container"
                style={{
                  bottom: currentStep === 2 ? "30px" : "70px",
                }}
              >
                {/* Step Counter  */}

                <div
                  className="step-counter-container"
                  style={{
                    bottom:
                      deviceType == "desktop"
                        ? currentStep === 2
                          ? "2px"
                          : "2px"
                        : currentStep === 2
                          ? "200px"
                          : "200px",
                  }}
                >
                  <div className="step-counter-text">
                    <p>Step {currentStep}/2</p>
                    <div className="step-progress-container">
                      <div className="progress-ext">
                        <div
                          className="progress-in"
                          style={{
                            width:
                              currentStep === 1 || currentStep === 2
                                ? "100%"
                                : "0",
                          }}
                        ></div>
                      </div>
                      <div className="progress-ext">
                        <div
                          className="progress-in"
                          style={{
                            width: currentStep === 2 ? "100%" : "0",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Counter Ends  */}
                <button
                  className={`submit secondary-prev-btn`}
                  onClick={() => {
                    currentStep === 2
                      ? setCurrentStep(1)
                      : window.history.back();
                  }}
                >
                  {currentStep === 1 ? "Back" : "Previous"}
                </button>
                <button
                  className={`submit`}
                  onClick={() => {
                    currentStep === 1 ? setCurrentStep(2) : sendData();
                  }}
                >
                  {currentStep === 1 ? "Next" : "Onboard Me"}
                  <span id="loader"></span>
                </button>
              </div>
            </div>
          ) : (
            <div className="form-success-container">
              <div className="success-content">
                <h1>
                  Great! <span>Many thanks!</span>
                </h1>
                <p>
                  We’ll reach out to you on the mentioned email with the
                  platform access.
                </p>
                <div className="submit-container">
                  <button
                    className="doc-btn after-onboard-button"
                    onClick={redirectDocsPage}
                  >
                    Explore Documentation
                  </button>
                  <a
                    className="submit secondary-btn after-onboard-button"
                    href="mailto:onboard@decentro.tech"
                  >
                    Need Some Help?
                  </a>
                </div>
              </div>
            </div>
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            id="internalErrorModal"
          >
            <Box sx={style} className="internal-error-box">
              <div className="server-error-message">
                <img src="/images/internal-error.svg" />
                <p>Something went wrong, please try again later</p>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div id="snackbar"></div>
    </React.Fragment>
  );
}

export default NeowiseSignup;
