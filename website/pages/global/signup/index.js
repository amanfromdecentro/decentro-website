import React, { useState, useEffect } from "react";
import Head from "next/head";
import ReactDOM from "react-dom";

// Imported to track custom successfull signup events only
import ReactGA from "react-ga";

import { Oval } from "react-loader-spinner";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowLeft, FaBullseye } from "react-icons/fa";
import DecentroBanner from "../../../components/shared/decentro-signup-banner/decentro-signup-banner";
import requests from "../../../sgRequests";
import axios from "axios";
import {
  emailInputValidation,
  phoneNumberValidation,
} from "../../../inputValidators";
import sortById from "../../../utilities/sortResponses";
import SnackbarMessage from "../../../components/SnackbarMessage/SnackbarMessage";

function SignupSG() {
  const [deviceType, setDeviceType] = useState("desktop");
  const [onboardButtonDisabled, setOnboardButtonDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const [otherCityVisible, setOtherCityVisible] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [modes, setModes] = useState([]);
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);
  const [stages, setStages] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValues, setInputValues] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email_id: "",
    company: "",
    business_use_case: "",
    mode: "",
    stage: "",
    products: "",
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

  const [pageError, setPageError] = useState(false);

  const [inputError, setInputError] = useState({
    first_name: false,
    last_name: false,
    phone_number: false,
    mode: false,
    email_id: false,
  });

  // Mode list api
  useEffect(() => {
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );
    pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    const request = axios
      .get(requests.DECENTRO_WORKFLOW_BASE_URL_PROD + requests.SG_MODE_LIST)
      .then((response) => {
        sortById(response.data.modes);
        // let temp = response.data.modes[6];
        // response.data.modes[6] =
        //   response.data.modes[response.data.modes.length - 1];
        // response.data.modes[response.data.modes.length - 1] = temp;
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

  // Stage list api
  useEffect(() => {
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );
    pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    const request = axios
      .get(requests.DECENTRO_WORKFLOW_BASE_URL_PROD + requests.SG_STAGE_LIST)
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
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        setOpen(true);
      });
  }, []);

  // Products list api
  useEffect(() => {
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );
    pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    const request = axios
      .get(requests.DECENTRO_WORKFLOW_BASE_URL_PROD + requests.SG_PRODUCT_LIST)
      .then((response) => {
        sortById(response.data.products);
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        setProducts(response.data.products);
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
      .getElementsByClassName("reference-section-stage")[0]
      .classList.remove("active");
    document.getElementsByClassName("reference-options-wrapper-stage")[0];
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
      .getElementsByClassName("reference-section")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("reference-options-wrapper")[0]
      .classList.remove("active");
  };

  const setSelectedReference = (event) => {
    let dataValue = event.target.dataset.value;
    let dataId = event.target.dataset.id;

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
        inputValues.phone_number != "" &&
        inputValues.email_id != ""
      ) {
        let allInputElements = document.getElementsByTagName("input");

        for (let i = 0; i < allInputElements.length; i++) {
          if (allInputElements[i].classList.contains("input-error")) {
            setOnboardButtonDisabled(true);
            return;
          }
        }
        setOnboardButtonDisabled(false);
      } else {
        setOnboardButtonDisabled(true);
      }
    }
    if (currentStep === 2) {
      if (
        inputValues.company != "" &&
        inputValues.business_use_case != "" &&
        inputValues.mode != "" &&
        inputValues.stage != ""
      ) {
        let allInputElements = document.getElementsByTagName("input");
        for (let i = 0; i < allInputElements.length; i++) {
          if (allInputElements[i].classList.contains("input-error")) {
            setOnboardButtonDisabled(true);
            return;
          }
        }
        setOnboardButtonDisabled(false);
      } else {
        setOnboardButtonDisabled(true);
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
      if (pageLoaderRoot) {
        // Render the Oval component using the root
        pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
      }
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
          requests.DECENTRO_WORKFLOW_BASE_URL_PROD + requests.SG_SIGNUP,
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
      setPageError(true);
      // scrollToError();
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

  const redirectProductsPage = (event) => {
    window.location.assign("/products/kyc-onboarding/");
  };

  const redirectDocsPage = (event) => {
    window.location.assign("https://global.docs.decentro.tech/");
  };

  const phoneValidation = (event) => {
    if (!phoneNumberValidation(event.target.value)) {
      setPageError(true);
      event.target.classList.add("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.add("invalid-error-active");
    } else {
      setPageError(false);
    }
  };

  const emailValidation = (event) => {
    if (!emailInputValidation(event.target.value)) {
      setPageError(true);
      event.target.classList.add("input-error");
      document
        .getElementsByClassName(event.target.classList[0] + "-error")[0]
        .classList.add("invalid-error-active");
    } else {
      setPageError(false);
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
        setPageError(true);
      } else {
        setPageError(false);
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

  const scrollToError = () => {
    const yOffset = -100;
    let firstErrorElement = document.getElementsByClassName("input-error")[0];
    const y =
      firstErrorElement.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const previousPage = (event) => {
    window.history.back();
  };

  const setValue = (event) => {
    const productName = event.target.value;

    setInputValues((prevInputValues) => {
      const productsArray = prevInputValues.products
        .split(",")
        .map((product) => product.trim());

      if (event.target.checked) {
        if (!productsArray.includes(productName)) {
          productsArray.push(productName);
        }
      } else {
        const index = productsArray.indexOf(productName);
        if (index !== -1) {
          productsArray.splice(index, 1);
        }
      }

      // Join the product names with commas and update the state
      const updatedProducts = productsArray.filter(Boolean).join(","); // Filter out empty strings and join with commas
      return { ...prevInputValues, products: updatedProducts };
    });
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
            </div>
            <div className="contact-inputs input-row full-width-row">
              <div className="business-usecase-input input-block">
                <div className="required-field-container">
                  <p
                    // className="input-label business-usecase-label optional-label"
                    className="input-label business-usecase-label"
                    id="businessUsecaseLabel"
                  >
                    Can you please describe your business use case?
                  </p>{" "}
                  <span
                    className="company-name-required-error required-error"
                    id="companyNameRequired"
                  >
                    Required
                  </span>
                  {/* <span
                    className="business-usecase-optional-indicator required-error-active optional-indicator"
                    id="businessUsecaseoptional"
                  >
                    (Optional)
                  </span> */}
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
            </div>
            <div className="contact-inputs input-row full-width-row">
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
                      src="/images/sg/signup/down-arrow.svg"
                    />
                  </div>
                  <div className="reference-options-wrapper">
                    <ul className="reference-options">
                      {modes.map((item, index) => {
                        return (
                          <li
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
                      src="/images/sg/signup/down-arrow.svg"
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
            </div>
            <div className="products-inputs input-row">
              <div className="input-block">
                <p className="input-label">
                  Which are the products you’d like to explore?
                </p>
              </div>
            </div>
            <div className="products-selection-container input-column">
              <div className="input-block">
                <div className="product-column">
                  {products.map((item, index) => {
                    return item.name.includes("&") ? (
                      <label className="container" key={index}>
                        {item.name.split("&")[0]}&nbsp;&
                        <br />
                        {item.name.split("&")[1]}
                        <input
                          type="checkbox"
                          value={item.name}
                          onChange={setValue}
                          data-reference="product-radio"
                        />
                        <span className="checkmark"></span>
                      </label>
                    ) : (
                      <label className="container" key={index}>
                        {item.name}
                        <input
                          type="checkbox"
                          value={item.name}
                          onChange={setValue}
                          data-reference="product-radio"
                        />
                        <span className="checkmark"></span>
                      </label>
                    );
                  })}
                </div>
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

  const registerSignupData = (step) => {
    const filteredData = Object.fromEntries(
      Object.entries(inputValues).filter(
        ([_, value]) => value !== "" && value !== null
      )
    );

    const request = axios
      .post(
        requests.DECENTRO_WORKFLOW_BASE_URL_PROD + requests.SG_SIGNUP,
        filteredData
      )
      .then((response) => {
        if (response.data.message == "Your request is under process") {
          setCurrentStep(step);
        } else {
          // ReactDOM.render(
          //   <SnackbarMessage
          //     msgtype="Error"
          //     msg={response?.data?.message || "Something went wrong !"}
          //   />,
          //   document.getElementById("snackbar")
          // );
          if (snackbarRoot) {
            // Render the SnackbarMessage component using the root
            snackbarRoot.render(
              <SnackbarMessage
                msgtype="Error"
                msg={
                  error?.response?.data?.error[0] || "Something went wrong !"
                }
              />
            );
          }
        }
      })
      .catch((error) => {
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        // ReactDOM.render(
        //   <SnackbarMessage
        //     msgtype="Error"
        //     msg={error?.message || "Something went wrong !"}
        //   />,
        //   document.getElementById("snackbar")
        // );
        if (snackbarRoot) {
          // Render the SnackbarMessage component using the root
          snackbarRoot.render(
            <SnackbarMessage
              msgtype="Error"
              msg={error?.response?.data?.error[0] || "Something went wrong !"}
            />
          );
        }
        setOpen(true);
      });
  };

  const nextStep = (step) => {
    registerSignupData(step);
  };

  return (
    <React.Fragment>
      <Head>
        <title>
          Sign Up for Decentro | Cross Border Payments and Reconciliation
        </title>
        <link rel="canonical" href="https://decentro.tech/global/signup" />
        <link
          rel="alternate"
          href="https://decentro.tech/global/signup"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Sign up for Decentro and get started within minutes. Enable your business with our plug and play APIs & SDKs, and launch 10x faster."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Sign Up for Decentro | Cross Border Payments and Reconciliation"
        />
      </Head>
      <div id="pageLoader"></div>
      <div className="signup">
        <DecentroBanner label={label} />
        <div className="signup-section">
          {!success ? (
            <div className="form-section">
              {/* <FaArrowLeft className="go-back-arrow" onClick={previousPage} /> */}
              <div className="signup-header">
                <img
                  className="decentro-logo"
                  src="/images/sg/signup/decentro-logo.svg"
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
                          ? // ? "100px"
                          "2px"
                          : // : "165px"
                          "2px"
                        : currentStep === 2
                          ? "200px"
                          : // : "300px",
                          "200px",
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
                  // className={`submit`}
                  className={`submit ${onboardButtonDisabled && "disabled-button"
                    }`}
                  disabled={onboardButtonDisabled}
                  onClick={() => {
                    currentStep === 1 ? nextStep(2) : sendData();
                  }}
                >
                  {currentStep === 1 ? "Next" : "Signup"}
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
                <img src="/images/sg/internal-error.svg" />
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

export default SignupSG;
