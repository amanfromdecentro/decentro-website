import React, { useState, useRef, useEffect } from "react";
import styles from "../../../styles/components-styles/interactions/upi-collections-interactions.module.scss";
import styles1 from "../../../styles/components-styles/text-field/text-field.module.scss";

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../../utilities/validators/regex";
import TextFieldInput from "../../../utilities/UI/TextField/TextFieldInput";
import TextFieldSelect from "../../../utilities/UI/TextField/TextFieldSelect";
import Link from "next/link";
import requests from "../../../requests";

const PayoutsInteractions = () => {
    const [screenNumber, setScreenNumber] = useState(1)

    const initialValues = {
        payee_name: "",
        payee_upi: "",
        amount: ""
    };

    const { name, amount, UPIIDRegex } = REGEXP;

    const validationSchema = Yup.object({
        payee_name: Yup.string().required().matches(name),
        payee_upi: Yup.string().required().matches(UPIIDRegex),
        amount: Yup.string().required().matches(amount),
    });


    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,

        // This function will run when user will submit the form after it is validated.
        onSubmit: (values, action) => {
            setScreenNumber(2)
        },
    });

    const ChangeHandler = (e) => {
        formik.handleChange(e);
    }
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
                                    <h2 className={styles["overlay-text-heading"]}>
                                        Visuals Global
                                    </h2>
                                </div>
                                <div className={styles["overlay-text-container-2"]}>
                                    <div className={styles["overlay-name-container"]}>
                                        <div>
                                            <p className={styles["label"]}>Name: </p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.payee_name?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                                {formik?.values?.payee_name?.trim().length > 0 ? formik?.values?.payee_name : "Name"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className={styles["label"]}>UPI ID:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.payee_upi?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                                {formik?.values?.payee_upi?.trim().length > 0 ? formik?.values?.payee_upi : "UPI ID"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className={styles["label"]}>Amount: </p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.amount?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                                {formik?.values?.amount?.trim().length > 0 ? formik?.values?.amount : "Amount"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: formik.isValid && formik.dirty ? "#096ef2" : "" }}>
                                </div>
                            </>

                            :
                            screenNumber === 2 ?
                                <>
                                    <Image
                                        src="/images/bg-banners/successfully-verified.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                    />
                                    <div className={styles["overlay-text-container-1"]} style={{ top: "20%" }}>
                                        <h2 className={styles["overlay-text-heading"]}>
                                            Visuals Global
                                        </h2>
                                    </div>
                                    <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: formik.isValid && formik.dirty ? "#99CC4C" : "" }}>
                                    </div>
                                </>

                                :

                                <Image
                                    src="/images/bg-banners/payment-successful.svg"
                                    alt="try yourself banner"
                                    width={1920}
                                    height={1080}
                                    layout="responsive"
                                />
                        }
                    </div>
                </div>

                <div className={styles["right-container"]}>
                    {
                        screenNumber === 1 ?
                            <>
                                <div className={styles["upper-container"]} >
                                    <h2>Instant Payout</h2>
                                    <p>Enter details to proceed</p>
                                </div>

                                <form onSubmit={formik.handleSubmit}>
                                    <div className={styles1['ui-form-details']}>
                                        <div className={styles1['ui-form-content']}>
                                            <div className={styles1['ui-form-inputs-section']}>
                                                <TextFieldInput
                                                    id="payee_name"
                                                    name="payee_name"
                                                    onChange={ChangeHandler}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.payee_name}
                                                    touched={formik.touched.payee_name}
                                                    error={formik.errors.payee_name}
                                                    placeholder="Enter name of the payee"
                                                    label="Payee's name"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={15}
                                                />
                                            </div>
                                            <div className={styles1['ui-form-inputs-section']}>
                                                <TextFieldInput
                                                    id="payee_upi"
                                                    name="payee_upi"
                                                    onChange={ChangeHandler}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.payee_upi}
                                                    touched={formik.touched.payee_upi}
                                                    error={formik.errors.payee_upi}
                                                    placeholder="Enter payee's UPI address"
                                                    label="Payee's UPI"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={15}
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
                                                    {formik.isSubmitting ? "Loading..." : "Verify UPI Details"}
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
                                <div className={styles['upi-verified-container']}>
                                    <div>
                                        <Image
                                            src="/images/bg-banners/approval.svg"
                                            alt="try yourself banner"
                                            width={1920}
                                            height={1080}
                                            layout="responsive"
                                            className={styles['approval']}
                                        />
                                        <h2>UPI ID successfully verified</h2>
                                    </div>
                                    <button className={styles['complete-payment-cta']} onClick={() => setScreenNumber(3)}>
                                        Complete Payment
                                    </button>
                                </div>
                                :
                                screenNumber === 3 ?
                                    <div className={styles['success-screen']}>
                                        <div style={{ position: 'relative', width: '50%', height: '60%' }}>
                                            <Image
                                                src="/images/bg-banners/success-illustration.svg"
                                                alt="try yourself banner"
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        <h2>Payment Successful!</h2>
                                        <div className={styles["get-started-btn"]}>
                                            <Link href={requests.SIGNUP} target="_blank"
                                                rel="noopener noreferrer">
                                                Start Payouts Today
                                            </Link>
                                        </div>

                                    </div>
                                    :
                                    <>

                                    </>
                    }
                </div>
            </div >
        </>
    );
};

export default PayoutsInteractions;
