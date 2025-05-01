import { useEffect, useState } from "react";
import styles from "../../../styles/components-styles/interactions/settlr-split-payment-gateway.module.scss";
import styles1 from "../../../styles/components-styles/text-field/text-field.module.scss";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../../utilities/validators/regex";
import TextFieldInput from "../../../utilities/UI/TextField/TextFieldInput";
import TextFieldSelect from "../../../utilities/UI/TextField/TextFieldSelect";
import Link from "next/link";
import requests from "../../../requests";

const SplitSetttlementsInteractions = (props) => {
  const [screenNumber, setScreenNumber] = useState(1);

  const initialValues = {
    amount: "",
    splitRule: "",
  };
  const initialValues1 = {
    vendor1: "",
    split1: "",
    vendor2: "",
    split2: "",
  };

  const { amount } = REGEXP;

  const validationSchema = Yup.object({
    amount: Yup.string().required().matches(amount),
    splitRule: Yup.mixed().required(),
  });

  const validationSchema1 = Yup.object({
    vendor1: Yup.mixed().required(),
    split1: Yup.number().required(),
    vendor2: Yup.mixed().required(),
    split2: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    // This function will run when user will submit the form after it is validated.
    onSubmit: (values, action) => {
      setScreenNumber(2);
    },
  });

  const formik1 = useFormik({
    initialValues: initialValues1,
    validationSchema: validationSchema1,
    validateOnChange: true,
    validateOnBlur: true,

    // This function will run when user will submit the form after it is validated.
    onSubmit: (values, action) => {
      setScreenNumber(3);
    },
  });

  const ChangeHandler = (e) => {
    formik.handleChange(e);
  };

  const ChangeHandler2 = (e) => {
    formik1.handleChange(e);
  };

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (formik1.values.split1 && formik1.values.split2) {
      if (+formik1.values.split1 + +formik1.values.split2 !== 100) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  }, [formik1.values.split1, formik1.values.split2]);

  const splitRuleOptions = ["%"];
  const vendorTypes = ["Vendor 1 Pvt Ltd"];
  const vendorTypes1 = ["Vendor 2 Pvt Ltd"];

  const options = splitRuleOptions.map((type) => ({
    value: type,
    label: type,
  }));
  const vendorOptions = vendorTypes.map((type) => ({
    value: type,
    label: type,
  }));
  const vendorOptions1 = vendorTypes1.map((type) => ({
    value: type,
    label: type,
  }));

  useEffect(() => {
    if (screenNumber === 3) {
      const timer = setTimeout(() => {
        setScreenNumber(4);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [screenNumber]);

  return (
    <>
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
            {screenNumber === 1 ? (
              <>
                <Image
                  src="/images/split-settlements/toy-1.svg"
                  alt="try yourself banner"
                  width={1920}
                  height={1080}
                  layout="responsive"
                />
                <div className={styles["overlay-text-container-1"]}></div>

                <div className={styles["overlay-text-container-2"]}>
                  <div className={styles["overlay-mid-info-container"]}>
                    <div className={styles["overlay-name"]}>
                      <p
                        className={
                          styles["overlay-placeholder"] +
                          (formik?.values?.amount.trim().length > 0
                            ? " " + styles["bold-color"]
                            : "")
                        }
                        style={{ fontWeight: 500 }}
                      >
                        {formik?.values?.amount?.length > 0
                          ? formik?.values?.amount
                          : "Amount"}
                      </p>
                    </div>
                    <div className={styles["overlay-document"]}>
                      <p
                        className={
                          styles["overlay-placeholder"] +
                          (formik?.values?.splitRule?.value?.trim().length > 0
                            ? " " + styles["bold-color"]
                            : "")
                        }
                        style={{ fontWeight: 500 }}
                      >
                        {formik?.values?.splitRule?.value?.length > 0
                          ? formik?.values?.splitRule?.value
                          : "Select Split Rule"}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={styles["overlay-solid-strip"]}
                  style={{
                    backgroundColor:
                      formik.isValid && formik.dirty ? "#096ef2" : "",
                  }}
                ></div>
              </>
            ) : screenNumber === 2 ? (
              <>
                <Image
                  src="/images/split-settlements/toy-2.svg"
                  alt="try yourself banner"
                  width={1920}
                  height={1080}
                  layout="responsive"
                />
                <div className={styles["overlay-text-container-2"]}>
                  <div className={styles["overlay-mid-info-container"]}>
                    <div className={styles["overlay-name"]}>
                      <p
                        className={
                          styles["overlay-placeholder"] +
                          (formik1?.values?.vendor1?.value?.trim().length > 0
                            ? " " + styles["bold-color"]
                            : "")
                        }
                        style={{ fontWeight: 500 }}
                      >
                        {formik1?.values?.vendor1?.value?.length > 0
                          ? formik1?.values?.vendor1?.value
                          : "Vendor 1"}
                      </p>
                    </div>
                    <div className={styles["overlay-name"]}>
                      <p
                        className={
                          styles["overlay-placeholder"] +
                          (formik1?.values?.split1?.trim().length > 0
                            ? " " + styles["bold-color"]
                            : "")
                        }
                        style={{ fontWeight: 500 }}
                      >
                        {formik1?.values?.split1?.length > 0
                          ? formik1?.values?.split1 + "%"
                          : "Split 1"}
                      </p>
                    </div>

                    <div className={styles["overlay-name"]}>
                      <p
                        className={
                          styles["overlay-placeholder"] +
                          (formik1?.values?.vendor2?.value?.trim().length > 0
                            ? " " + styles["bold-color"]
                            : "")
                        }
                        style={{ fontWeight: 500 }}
                      >
                        {formik1?.values?.vendor2?.value?.length > 0
                          ? formik1?.values?.vendor2?.value
                          : "Vendor 2"}
                      </p>
                    </div>
                    <div className={styles["overlay-name"]}>
                      <p
                        className={
                          styles["overlay-placeholder"] +
                          (formik1?.values?.split2?.trim().length > 0
                            ? " " + styles["bold-color"]
                            : "")
                        }
                        style={{ fontWeight: 500 }}
                      >
                        {formik1?.values?.split2?.length > 0
                          ? formik1?.values?.split2 + "%"
                          : "Split 2"}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={styles["overlay-solid-strip"]}
                  style={{
                    backgroundColor:
                      formik1.isValid && formik1.dirty ? "#096ef2" : "",
                  }}
                ></div>
              </>
            ) : screenNumber === 3 ? (
              <Image
                src="/images/split-settlements/toy-3.svg"
                alt="try yourself banner"
                width={1920}
                height={1080}
                layout="responsive"
              />
            ) : (
              <>
                <Image
                  src="/images/split-settlements/toy-4.svg"
                  alt="try yourself banner"
                  width={1920}
                  height={1080}
                  layout="responsive"
                />
                <p className={styles["overlay-success-final-amount"]}>
                  $ {formik?.values?.amount}
                </p>
                <p className={styles["overlay-success-final-split"]}>
                  {formik?.values?.splitRule?.value} Split
                </p>
                <p className={styles["overlay-success-final-vendor1"]}>
                  {formik1?.values?.vendor1?.value}
                </p>
                <p className={styles["overlay-success-final-split1"]}>
                  {formik1?.values?.split1} %
                </p>
                <p className={styles["overlay-success-final-vendor2"]}>
                  {formik1?.values?.vendor2?.value}
                </p>
                <p className={styles["overlay-success-final-split2"]}>
                  {formik1?.values?.split2} %
                </p>
                <p className={styles["overlay-success-ref-id"]}>5445612D980</p>
              </>
            )}
          </div>
        </div>

        <div
          className={styles["right-container"]}
          style={{
            height:
              screenNumber === 1
                ? "330px"
                : screenNumber === 2
                ? "480px"
                : screenNumber === 3
                ? "270px"
                : "400px",
          }}
        >
          {screenNumber !== 4 && (
            <div className={styles["upper-container"]}>
              <img src="/images/split-settlements/settlr.svg" />
              {screenNumber !== 3 && <p>Enter details to proceed</p>}
            </div>
          )}
          {screenNumber === 1 ? (
            <>
              <form onSubmit={formik.handleSubmit}>
                <div className={styles1["ui-form-details"]}>
                  <div className={styles1["ui-form-content"]}>
                    <div className={styles1["ui-form-inputs-section"]}>
                      <TextFieldInput
                        id="amount"
                        name="amount"
                        onChange={ChangeHandler}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                        touched={formik.touched.amount}
                        error={formik.errors.amount}
                        placeholder="Enter your amount"
                        label="Amount"
                        required={true}
                        disabled={false}
                        maxLength={3}
                      />
                    </div>
                    <div className={styles1["ui-form-inputs-section"]}>
                      <TextFieldSelect
                        id="splitRule"
                        name="splitRule"
                        onChange={(selectedOption) => {
                          formik.setFieldValue("splitRule", selectedOption);
                        }}
                        onBlur={() => formik.setFieldTouched("splitRule", true)}
                        value={formik.values.splitRule}
                        options={options}
                        noOptionsMessage={() => "No Split Rule Exists"}
                        label="Split Rule"
                        required={true}
                        placeholder="Select split rule"
                        isformatOptionLabel={true}
                      />
                    </div>
                    <div className={styles1["ui-button-container"]}>
                      <button
                        type="submit"
                        className={
                          styles1["submit-btn"] +
                          " " +
                          (formik.isValid &&
                          formik.dirty &&
                          !formik.isSubmitting
                            ? styles1["active"]
                            : "")
                        }
                        disabled={!formik.isValid || formik.isSubmitting}
                      >
                        {formik.isSubmitting
                          ? "Loading..."
                          : "Confirm & Proceed"}
                        <span
                          id="user-config-loader"
                          style={{ display: "flex" }}
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : screenNumber === 2 ? (
            <>
              <form onSubmit={formik1.handleSubmit}>
                <div className={styles1["ui-form-details"]}>
                  <div className={styles1["ui-form-content"]}>
                    <div className={styles1["ui-form-inputs-section"]}>
                      <TextFieldSelect
                        id="vendor1"
                        name="vendor1"
                        onChange={(selectedOption) => {
                          formik1.setFieldValue("vendor1", selectedOption);
                        }}
                        onBlur={() => formik1.setFieldTouched("vendor1", true)}
                        value={formik1.values.vendor1}
                        options={vendorOptions}
                        noOptionsMessage={() => "No Vendor Exists"}
                        label="Vendor 1"
                        required={true}
                        placeholder="Select Vendor 1"
                        isformatOptionLabel={true}
                      />
                    </div>

                    <div className={styles1["ui-form-inputs-section"]}>
                      <TextFieldInput
                        id="split1"
                        name="split1"
                        onChange={ChangeHandler2}
                        onBlur={formik1.handleBlur}
                        value={formik1.values.split1}
                        touched={formik1.touched.split1}
                        error={formik1.errors.split1}
                        placeholder="Enter split % for vendor 1"
                        label="Split 1"
                        required={true}
                        disabled={false}
                        maxLength={2}
                      />
                    </div>
                    <div className={styles1["ui-form-inputs-section"]}>
                      <TextFieldSelect
                        id="vendor2"
                        name="vendor2"
                        onChange={(selectedOption) => {
                          formik1.setFieldValue("vendor2", selectedOption);
                        }}
                        onBlur={() => formik1.setFieldTouched("vendor2", true)}
                        value={formik1.values.vendor2}
                        options={vendorOptions1}
                        noOptionsMessage={() => "No Vendor Exists"}
                        label="Vendor 2"
                        required={true}
                        placeholder="Select Vendor 2"
                        isformatOptionLabel={true}
                      />
                    </div>
                    <div className={styles1["ui-form-inputs-section"]}>
                      <TextFieldInput
                        id="split2"
                        name="split2"
                        onChange={ChangeHandler2}
                        onBlur={formik1.handleBlur}
                        value={formik1.values.split2}
                        touched={formik1.touched.split2}
                        error={formik1.errors.split2}
                        placeholder="Enter split % for vendor 2"
                        label="Split 2"
                        required={true}
                        disabled={false}
                        maxLength={2}
                      />
                    </div>
                    <div
                      className={styles1["ui-button-container"]}
                      style={{
                        justifyContent: isError ? "space-between" : "flex-end",
                      }}
                    >
                      {isError && (
                        <div className={styles1["error-container"]}>
                          Splits should add upto 100%
                        </div>
                      )}
                      <button
                        type="submit"
                        className={
                          styles1["submit-btn"] +
                          " " +
                          (formik1.isValid &&
                          formik1.dirty &&
                          !formik1.isSubmitting
                            ? styles1["active"]
                            : "")
                        }
                        disabled={
                          isError || !formik1.isValid || formik1.isSubmitting
                        }
                      >
                        {formik1.isSubmitting ? "Loading..." : "Pay & Settle"}
                        <span
                          id="user-config-loader"
                          style={{ display: "flex" }}
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : screenNumber === 3 ? (
            <div className={styles["loading-container"]}>
              <div className={styles["upper-container"]}></div>
              <div className={styles["upper-loading-container"]}>
                <div className={styles["loading-image-container"]}>
                  <Image
                    src="/images/loading.svg"
                    alt="try yourself banner"
                    width={1920}
                    height={1080}
                    layout="responsive"
                  />
                </div>
                <h2>Processing details...</h2>
              </div>
              <p>
                <span>CLICK HERE</span>
                &nbsp;if you&apos;re not automatically redirected
              </p>
            </div>
          ) : (
            <div className={styles["success-screen"]}>
              <div className={styles["upper-container"]}>
                <img src="/images/split-settlements/settlr.svg" />
              </div>
              <div
                style={{ position: "relative", width: "50%", height: "60%" }}
              >
                <Image
                  src="/images/bg-banners/success-illustration.svg"
                  alt="try yourself banner"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h2>
                Split-Settlement <br />
                Successfully Completed
              </h2>
              <div className={styles["get-started-btn"]}>
                <Link
                  href={requests.SIGNUP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay & Settle Seamlessly
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SplitSetttlementsInteractions;
