"use-client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import { Oval } from "react-loader-spinner";
import axios from "../../axios";
import requests from "../../requests";
import urls from "../../urls.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import DecentroBanner from "../../components/shared/decentro-signup-banner/decentro-signup-banner";

const PartnerSignupFormik = () => {
  const [success, setSuccess] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");
  const [partnerType, setPartnerType] = useState([
    { id: 1, name: "Reseller" },
    { id: 2, name: "Platform" },
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window) {
        setDeviceType(window.innerWidth <= 850 ? "mobile" : "desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile_number: "",
      company_name: "",
      partner_type: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters allowed"),
      last_name: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters allowed"),
      email: Yup.string().email("Invalid email address").required("Required"),
      mobile_number: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Invalid phone number.")
        .required("Required"),
      company_name: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z0-9\s]+$/, "Only alphanumeric characters allowed"),
      partner_type: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      sendCustomerDetails(values);
    },
  });

  const sendCustomerDetails = async (values) => {
    // ReactDOM.render(
    //   <Oval heigth={20} width={20} color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("loader")
    // );
    const root = ReactDOM.createRoot(document.getElementById("loader"));

    root.render(
      <Oval height={20} width={20} color="#FFFFFF" ariaLabel="loading" />
    );

    try {
      const response = await axios.post(
        "https://workflow.decentro.tech/webhook" +
        requests.PARTNER_SIGNUP_INHOUSE,
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
      // ReactDOM.unmountComponentAtNode(document.getElementById("loader"));
      root.unmount();
    } catch (error) {
      if (error.response) {
        displayErrors(error.response.data.error);
      }
    }
  };

  const displayErrors = (errorData) => {
    if (errorData === "Duplicate Entry") {
      formik.setErrors({ mobile_number: "This phone number is already used" });
      document.getElementsByClassName("phone-input")[0].focus();
      return;
    }

    if (errorData === "Internal Server Error") {
      // handle internal server error
      return;
    }

    formik.setErrors(errorData);
  };

  const redirectDocsPage = (event) => {
    window.location.assign("https://docs.decentro.tech/docs");
  };

  return (
    <React.Fragment>
      <Head>
        <title>
          Decentro Partner Program | Join and Grow as a Decentro Partner
        </title>
        <link rel="canonical" href={urls.PARTNER_SIGNUP} />
        <meta
          name="description"
          content="Sign up to join and earn rewards with the Decentro Partner Program. Become a Decentro Partner today!"
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Decentro Partner Program | Join and Grow as a Decentro Partner"
        />
      </Head>
      <div id="pageLoader"></div>
      <div className="signup">
        <DecentroBanner label={{ light: "Let's get you", bold: "Started!" }} />
        <div className="signup-section">
          {!success ? (
            <div className="form-section">
              <div className="signup-header">
                <img
                  className="decentro-logo"
                  src="/images/home/decentro-logo.svg"
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
                <form onSubmit={formik.handleSubmit}>
                  <div className="inputs">
                    <div className="carousel-item">
                      <div className="name-inputs input-row">
                        <div className="input-block">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="firstName"
                              style={{
                                color:
                                  formik.errors.first_name &&
                                    formik.touched.first_name
                                    ? "#ff0000"
                                    : "black",
                              }}
                            >
                              First Name
                            </label>
                            {/*<span
                              style={{
                                color: "#ff0000",
                                marginLeft: "5px",
                              }}
                            > 
                              *
                            </span>*/}
                          </div>
                          <input
                            type="text"
                            id="firstName"
                            name="first_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.first_name}
                          />
                          {formik.errors.first_name &&
                            formik.touched.first_name && (
                              <div
                                className="error-msg"
                                style={{
                                  color: "#ff0000",
                                  marginTop: "10px",
                                }}
                              >
                                {formik.errors.first_name}
                              </div>
                            )}
                        </div>
                        <div className="input-block">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="lastName"
                              style={{
                                color:
                                  formik.errors.last_name &&
                                    formik.touched.last_name
                                    ? "#ff0000"
                                    : "black",
                              }}
                            >
                              Last Name
                            </label>
                          </div>
                          <input
                            type="text"
                            id="lastName"
                            name="last_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.last_name}
                          />
                          {formik.errors.last_name &&
                            formik.touched.last_name && (
                              <div
                                className="error-msg"
                                style={{
                                  color: "#ff0000",
                                  marginTop: "10px",
                                }}
                              >
                                {formik.errors.last_name}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="contact-inputs input-row">
                        <div className="input-block">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="phoneNumber"
                              style={{
                                color:
                                  formik.errors.mobile_number &&
                                    formik.touched.mobile_number
                                    ? "#ff0000"
                                    : "black",
                              }}
                            >
                              Phone Number
                            </label>
                          </div>
                          <div className="phone-input-wrapper">
                            <input
                              data-field="mobile_number"
                              type="text"
                              id="phoneNumber"
                              name="mobile_number"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.mobile_number}
                            />
                          </div>

                          {formik.errors.mobile_number &&
                            formik.touched.mobile_number && (
                              <div
                                className="error-msg"
                                style={{
                                  color: "#ff0000",
                                  marginTop: "10px",
                                }}
                              >
                                {formik.errors.mobile_number}
                              </div>
                            )}
                        </div>
                        <div className="input-block">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="email"
                              style={{
                                color:
                                  formik.errors.email && formik.touched.email
                                    ? "#ff0000"
                                    : "black",
                              }}
                            >
                              Email ID
                            </label>
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            data-field="email_id"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.errors.email && formik.touched.email && (
                            <div
                              className="error-msg"
                              style={{
                                color: "#ff0000",
                                marginTop: "10px",
                              }}
                            >
                              {formik.errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="company-inputs input-row">
                        <div className="input-block">
                          <div>
                            <label
                              className="input-label"
                              htmlFor="companyName"
                              style={{
                                color:
                                  formik.errors.company_name &&
                                    formik.touched.company_name
                                    ? "#ff0000"
                                    : "black",
                              }}
                            >
                              Company Name
                            </label>
                          </div>
                          <input
                            type="text"
                            id="companyName"
                            name="company_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.company_name}
                          />
                          {formik.errors.company_name &&
                            formik.touched.company_name && (
                              <div
                                className="error-msg"
                                style={{
                                  color: "#ff0000",
                                  marginTop: "10px",
                                }}
                              >
                                {formik.errors.company_name}
                              </div>
                            )}
                        </div>
                        <div className="partner-type-input input-block">
                          <div className="required-field-container">
                            <label
                              className="input-label"
                              htmlFor="partnerType"
                              style={{
                                color:
                                  formik.errors.partner_type &&
                                    formik.touched.partner_type
                                    ? "#ff0000"
                                    : "black",
                              }}
                            >
                              Select Partnership Type
                            </label>
                            <span
                              className="partner-type-required-error required-error"
                              id="partnerTypeRequired"
                            >
                              Required
                            </span>
                          </div>
                          <div
                            className="reference-section-stage"
                            style={{
                              overflow: "hidden",
                            }}
                          >
                            <select
                              className={`partner-type-input ${formik.touched.partner_type &&
                                  formik.errors.partner_type
                                  ? "input-error"
                                  : ""
                                }`}
                              id="partnerType"
                              name="partner_type"
                              {...formik.getFieldProps("partner_type")}
                              style={{
                                border: "none!important",
                                outline: "none",
                              }}
                            >
                              <option
                                value=""
                                label="Select an option"
                                disabled
                              />
                              {partnerType.map((type) => (
                                <option key={type.id} value={type.name}>
                                  {type.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          {formik.touched.partner_type &&
                            formik.errors.partner_type ? (
                            <div
                              className="error-msg"
                              style={{
                                color: "#ff0000",
                                marginTop: "10px",
                              }}
                            >
                              {formik.errors.partner_type}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-container">
                    <button
                      type="submit"
                      className="submit"
                      id="submitButton"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      <span id="loader">Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="form-success-container">
              <div className="success-content">
                <h1>
                  <span>Voila!</span>
                </h1>
                <p>
                  Congratulations, you have been inducted into the Decentro
                  family.
                  <br />
                  <br />
                  You will hear from us very soon.
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartnerSignupFormik;
