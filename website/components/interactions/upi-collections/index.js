import Image from "next/image";
import styles from "../../../styles/components-styles/interactions/upi-collections-interactions.module.scss";
import styles1 from "../../../styles/components-styles/text-field/text-field.module.scss";
import styles2 from "../../../styles/components-styles/text-field-select/text-field-select.module.scss";

import Link from "next/link";
import requests from "../../../requests";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../../utilities/validators/regex";
import TextFieldInput from "../../../utilities/UI/TextField/TextFieldInput";
import TextFieldSelect from "../../../utilities/UI/TextField/TextFieldSelect";



const UpiCollectionsInteractions = (props) => {
    const [selectedApp, setSelectedApp] = useState("")
    const [screenNumber, setScreenNumber] = useState(1)

    const initialValues = {
        company: "",
        amount: "",
        brand_color: ""
    };
    const [formValues, setFormValues] = useState({ ...initialValues })

    const { companyName, gstin, mobile, amount } = REGEXP;

    const validationSchema = Yup.object({
        company: Yup.string().required().matches(companyName),
        amount: Yup.string().required().matches(amount),
        brand_color: Yup.mixed().required(),
    });


    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,

        // This function will run when user will submit the form after it is validated.
        onSubmit: (values, action) => {
            nextScreen()
        },
    });

    const nextScreen = () => {
        setScreenNumber(prev => prev + 1)
    }

    const ChangeHandler = (e) => {
        formik.handleChange(e);
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    }

    const options = [{
        value: "#096ef2",
        label: "Blue",
    }]

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
                    {screenNumber === 1 ?
                        <>
                            <Image
                                src="/images/bg-banners/pay-via-upi.svg"
                                alt="try yourself banner"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            />
                            <div className={styles["overlay-text-container-1"]}>
                                <h2 className={styles["overlay-text-heading"] + (formValues.company.trim().length > 0 ? ' ' + styles['pr-color'] : "")}>
                                    {formValues.company.trim().length > 0 ? formValues.company : "Your Company"}
                                </h2>
                            </div>
                            <div className={styles["overlay-text-amount"] + (formValues.amount.trim().length > 0 ? ' ' + styles['pr-color'] : "")} style={{ fontWeight: 500 }}>
                                {formValues.amount.trim().length > 0 ? formValues.amount : "Amount"}
                            </div>
                            <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: formik?.values?.brand_color ? formik?.values?.brand_color?.value : "" }}>

                            </div></>

                        :
                        screenNumber === 2 ?
                            <>
                                <Image
                                    src="/images/bg-banners/payment-link.svg"
                                    alt="try yourself banner"
                                    width={1920}
                                    height={1080}
                                    layout="responsive"
                                />
                                <div className={styles["overlay-text-container-1"]}>
                                    <h2 className={styles["overlay-text-heading"] + (formValues.company.trim().length > 0 ? ' ' + styles['pr-color'] : "")}>
                                        {formValues.company.trim().length > 0 ? formValues.company : "Your Company"}
                                    </h2>
                                    <div className={styles["overlay-text-amount-1"] + (formValues.amount.trim().length > 0 ? ' ' + styles['pr-color'] : "")} style={{ fontWeight: 500 }}>
                                        {formValues.amount.trim().length > 0 ? `₹ ${formValues.amount}` : "Amount"}
                                    </div>
                                </div>
                            </>
                            :
                            screenNumber === 3 ?
                                <>
                                    <Image
                                        src="/images/bg-banners/payment-options.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                    />
                                    <div className={styles["overlay-amount-container-1"]}>
                                        {formValues.amount.trim().length > 0 ? `₹ ${formValues.amount}` : "Amount"}
                                    </div>
                                </>

                                :
                                <Image
                                    src="/images/bg-banners/rocket-success.svg"
                                    alt="try yourself banner"
                                    width={1920}
                                    height={1080}
                                    layout="responsive"
                                />
                    }
                    {/* <Image
                        src="/images/bg-banners/pay-via-upi.svg"
                        alt="try yourself banner"
                        width={1920}
                        height={1080}
                        layout="responsive"
                    /> */}
                    {/* <Image
                        src="/images/bg-banners/upi-collection-interaction.svg"
                        alt="try yourself banner"
                        width={1920}
                        height={1080}
                        layout="responsive"
                    /> */}


                </div>
            </div>


            <div className={styles["right-container"]}>

                {
                    screenNumber === 1 ?
                        <>
                            <div className={styles["upper-container"]} >
                                <h2>Create Payment Link</h2>
                                <p>Enter details to proceed</p>
                            </div>

                            <form onSubmit={formik.handleSubmit}>
                                <div className={styles1['ui-form-details']}>
                                    <div className={styles1['ui-form-content']}>
                                        <div className={styles1['ui-form-inputs-section']}>
                                            <TextFieldInput
                                                id="company"
                                                name="company"
                                                onChange={ChangeHandler}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.company}
                                                touched={formik.touched.company}
                                                error={formik.errors.company}
                                                placeholder="Enter company name"
                                                label="Company"
                                                required={true}
                                                disabled={false}
                                                maxLength={15}
                                            />
                                        </div>
                                        <div className={styles1['ui-form-inputs-section']}>
                                            <TextFieldSelect
                                                id="brand_color"
                                                name="brand_color"
                                                onChange={(selectedOption) => {
                                                    formik.setFieldValue("brand_color", selectedOption)
                                                    setFormValues({ ...formValues, brand_color: selectedOption });
                                                }}
                                                onBlur={() =>
                                                    formik.setFieldTouched("brand_color", true)
                                                }
                                                value={formik.values.brand_color}
                                                options={options}
                                                noOptionsMessage={() => "No Brand Color Exists"}
                                                label="Brand Color"
                                                required={true}
                                                // isLoading={isLoading}
                                                placeholder="Select brand color"
                                                isformatOptionLabel={true}
                                            />
                                        </div>
                                        <div className={styles1['ui-form-inputs-section']}>
                                            <TextFieldInput
                                                id="amount"
                                                name="amount"
                                                onChange={ChangeHandler}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.amount}
                                                touched={formik.touched.amount}
                                                error={formik.errors.amount}
                                                placeholder="Enter amount"
                                                label="Amount"
                                                required={true}
                                                disabled={false}
                                                maxLength={4}
                                            />
                                        </div>
                                        <div className={styles1['ui-button-container']}>
                                            <button
                                                type="submit"
                                                className={styles1['submit-btn'] + ' ' + (formik.isValid && formik.dirty && !formik.isSubmitting ? styles1['active'] : "")}
                                                disabled={!formik.isValid || formik.isSubmitting}
                                            >
                                                {formik.isSubmitting ? "Loading..." : "Create Payment Link"}
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
                        :
                        screenNumber === 2 ?
                            <div className={styles['scan-to-pay-container']}>
                                <div>
                                    <Image
                                        src="/images/bg-banners/approval.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                        className={styles['approval']}
                                    />
                                    <h2>Payment Link Created</h2>
                                </div>
                                <div className={styles['qr-info']}>
                                    <Image
                                        src="/images/bg-banners/qr.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                        className={styles['scan-qr']}
                                    />
                                    <p>
                                        <strong>
                                            SCAN
                                        </strong>
                                        &nbsp;To
                                        <strong>
                                            &nbsp;Pay
                                        </strong>
                                        &nbsp;or
                                        <strong>
                                            &nbsp;Tap
                                        </strong>
                                        &nbsp;on link below</p>
                                </div>
                                <div className={styles['scan-to-pay-cta']}>
                                    <Image
                                        src="/images/bg-banners/link-right.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                        className={styles['payment-link-img']}
                                    />
                                    <button className={styles['tap-to-pay-btn']} onClick={nextScreen}>TAP to PAY</button>
                                </div>

                            </div>
                            :
                            screenNumber === 3 ?
                                <>
                                    {/* <div>

                                    </div> */}
                                    <div className={styles["mid-container"]}>
                                        <h2>Pay using any app</h2>
                                        <div className={styles["logos-container"]}>
                                            <Image
                                                src="/images/bg-banners/phone-pe.svg"
                                                alt="try yourself banner"
                                                width={1920}
                                                height={1080}
                                                layout="responsive"
                                                onClick={nextScreen}
                                            />
                                            <Image
                                                src="/images/bg-banners/google-pay.svg"
                                                alt="try yourself banner"
                                                width={1920}
                                                height={1080}
                                                layout="responsive"
                                                onClick={nextScreen}
                                            />
                                            <Image
                                                src="/images/bg-banners/paytm.svg"
                                                alt="try yourself banner"
                                                width={1920}
                                                height={1080}
                                                layout="responsive"
                                                onClick={nextScreen}
                                            />
                                            <Image
                                                src="/images/bg-banners/cred.svg"
                                                alt="try yourself banner"
                                                width={1920}
                                                height={1080}
                                                layout="responsive"
                                                onClick={nextScreen}
                                            />
                                        </div>
                                    </div>

                                    {/* <div className={styles["confirm-btn"]} style={{ alignSelf: 'flex-end' }}>
                                        <button className={selectedApp === "" ? styles["disabled"] : ""}
                                            onClick={(e) => {
                                                if (selectedApp === "") {
                                                    e.preventDefault();
                                                } else {
                                                    setScreenNumber(2);
                                                }
                                            }}>
                                            Confirm & Pay
                                        </button>

                                    </div> */}
                                </> :
                                <div className={styles['payment-successful-container']}>
                                    <div style={{ position: 'relative', width: '50%', height: '60%' }}>
                                        <Image
                                            src="/images/bg-banners/success-illustration.svg"
                                            alt="try yourself banner"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h2>Payment Successful</h2>
                                    <div className={styles["get-started-btn"]}>
                                        <Link href={requests.SIGNUP} target="_blank"
                                            rel="noopener noreferrer">
                                            Start Collecting Payments
                                        </Link>
                                    </div>

                                </div>
                }

            </div>
        </div>
    )
}

export default UpiCollectionsInteractions