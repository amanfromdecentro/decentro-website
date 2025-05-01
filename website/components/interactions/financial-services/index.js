import { useEffect, useState } from "react";
import styles from "../../../styles/components-styles/interactions/financial-services-interactions.module.scss";
import styles1 from "../../../styles/components-styles/text-field/text-field.module.scss";

import Image from "next/image";

import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../../utilities/validators/regex";
import TextFieldInput from "../../../utilities/UI/TextField/TextFieldInput";
import TextFieldSelect from "../../../utilities/UI/TextField/TextFieldSelect";
import Link from "next/link";
import requests from "../../../requests";


const FinancialServicesInteractions = (props) => {
    const [screenNumber, setScreenNumber] = useState(1)
    const [consentChecked, setConsentChecked] = useState(false);


    const initialValues = {
        name: "",
        mobile: "",
        amount: "",
        document: "",
        consentChecked: false
    };

    const { name, amount, mobile } = REGEXP;

    const validationSchema = Yup.object({
        name: Yup.string().required().matches(name),
        mobile: Yup.string().required().matches(mobile),
        document: Yup.mixed().required(),
        idNumber: Yup.string().required(),
        consentChecked: Yup.boolean()
            .oneOf([true], 'You must provide consent to proceed')
            .required('Consent is required')
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

    const documentTypes = ['PAN', 'PASSPORT', 'DL'];

    const options = documentTypes.map(type => ({ value: type, label: type }));

    const handleConsentChange = () => {
        setConsentChecked(!consentChecked);
    };

    useEffect(() => {
        if (screenNumber === 2) {
            const timer = setTimeout(() => {
                setScreenNumber(3);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [screenNumber]);

    const createEmail = (str) => str.toLowerCase().substring(0, 4) + '@gmail.com';

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
                                        Credit Report
                                    </h2>
                                </div>

                                <div className={styles["overlay-text-container-2"]}>
                                    <div className={styles["overlay-mid-info-container"]}>
                                        <div className={styles["overlay-name"]}>
                                            <p style={{ width: '70px' }}>Name:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.name.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                                {formik?.values?.name?.length > 0 ? formik?.values?.name : "Name"}
                                            </p>
                                        </div>
                                        <div className={styles["overlay-mobile"]}>
                                            <p style={{ width: '70px' }}>Mobile:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.mobile.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                                {formik?.values?.mobile?.length > 0 ? formik?.values?.mobile : "Mobile"}
                                            </p>
                                        </div>
                                        <div className={styles["overlay-document"]}>
                                            <p style={{ width: '70px' }}>Document:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.document?.value?.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                                {formik?.values?.document?.value?.length > 0 ? formik?.values?.document?.value : "Select Document"}
                                            </p>
                                        </div>
                                        <div className={styles["overlay-id-number"]}>
                                            <p style={{ width: '70px' }}>ID Number:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.idNumber?.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                                {formik?.values?.idNumber?.length > 0 ? formik?.values?.idNumber : "Enter ID Number"}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: formik.isValid && formik.dirty ? "#096ef2" : "" }}>

                                </div>
                                {/* <div className={styles["overlay-text-container-2"]}>
                                    <div className={styles["overlay-name-container"]}>
                                        <div>
                                            <p className={styles["label"]}>Name: </p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.payee_name?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                                {formik?.values?.payee_name?.trim().length > 0 ? formik?.values?.payee_name : "Name"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className={styles["label"]}>UPI ID: </p>
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
                                </div> */}
                                {/* <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: formik.isValid && formik.dirty ? "#096ef2" : "" }}>
                                </div> */}

                            </>
                            :
                            screenNumber === 2 ?
                                <>
                                    <Image
                                        src="/images/bg-banners/proccessing.png"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                    />
                                    <div className={styles["overlay-text-container-1"]}>
                                        <h2 className={styles["overlay-text-heading"]}>
                                            Credit Report
                                        </h2>
                                    </div>
                                    <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: "#FFB100" }}>

                                    </div>
                                </>
                                :
                                <>
                                    <Image
                                        src="/images/bg-banners/credit-report.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                    />
                                    <p className={styles["overlay-success-name"]}>
                                        {formik?.values?.name}
                                    </p>
                                    {/* <div className={styles["overlay-success-mid"]}> */}
                                    <p className={styles["overlay-success-email"]}>
                                        {formik?.values?.name ? createEmail(formik?.values?.name) : "-"}
                                    </p>
                                    <p className={styles["overlay-success-mobile"]}>
                                        {formik.values.mobile}
                                    </p>
                                    <p className={styles["overlay-success-document"]}>
                                        {formik?.values?.document?.value}
                                    </p>
                                    <p className={styles["overlay-success-document-number"]}>
                                        {formik?.values?.idNumber}
                                    </p>
                                    {/* </div> */}
                                </>
                        }
                    </div>
                </div>

                <div className={styles["right-container"]}>
                    {screenNumber !== 3 && <div className={styles["upper-container"]} >
                        <h2>Credit Report</h2>
                        <p>Enter details to proceed</p>
                    </div>}
                    {
                        screenNumber === 1 ?
                            <>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className={styles1['ui-form-details']}>
                                        <div className={styles1['ui-form-content']}>
                                            <div className={styles1['ui-form-inputs-section']}>
                                                <TextFieldInput
                                                    id="name"
                                                    name="name"
                                                    onChange={ChangeHandler}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                    touched={formik.touched.name}
                                                    error={formik.errors.name}
                                                    placeholder="Enter your name"
                                                    label="Name"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={15}
                                                />
                                            </div>
                                            <div className={styles1['ui-form-inputs-section']}>
                                                <TextFieldInput
                                                    id="mobile"
                                                    name="mobile"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.mobile}
                                                    touched={formik.touched.mobile}
                                                    error={formik.errors.mobile}
                                                    placeholder="Enter mobile number"
                                                    label="Mobile"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={10}
                                                />
                                            </div>
                                            <div className={styles1['ui-form-inputs-section']}>
                                                <TextFieldSelect
                                                    id="document"
                                                    name="document"
                                                    onChange={(selectedOption) => {
                                                        formik.setFieldValue("document", selectedOption)
                                                        // setFormValues({ ...formValues, brand_color: selectedOption });
                                                    }}
                                                    onBlur={() =>
                                                        formik.setFieldTouched("document", true)
                                                    }
                                                    value={formik.values.document}
                                                    options={options}
                                                    noOptionsMessage={() => "No Brand Color Exists"}
                                                    label="Document"
                                                    required={true}
                                                    // isLoading={isLoading}
                                                    placeholder="Select document type"
                                                    isformatOptionLabel={true}
                                                />
                                            </div>
                                            <div className={styles1['ui-form-inputs-section']}>
                                                <TextFieldInput
                                                    id="idNumber"
                                                    name="idNumber"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.idNumber}
                                                    touched={formik.touched.idNumber}
                                                    error={formik.errors.idNumber}
                                                    placeholder="Enter ID number of document"
                                                    label="ID Number"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={10}
                                                />
                                            </div>
                                            <div className={styles1['ui-button-container']}>
                                                <div className={styles1["consent-section"]}>
                                                    <input
                                                        type="checkbox"
                                                        checked={formik.values.consentChecked}
                                                        onChange={() => formik.setFieldValue("consentChecked", !formik.values.consentChecked)}
                                                    />
                                                    <p className={styles1["consent-message"]}>
                                                        I consent to document validation
                                                    </p>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className={styles1['submit-btn'] + ' ' + (formik.isValid && formik.dirty && !formik.isSubmitting ? styles1['active'] : "")}
                                                    disabled={!formik.isValid || formik.isSubmitting}
                                                >
                                                    {formik.isSubmitting ? "Loading..." : "Fetch Report"}
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
                                <>
                                    <div className={styles['loading-container']} >
                                        <div className={styles['upper-loading-container']}>
                                            <div className={styles['loading-image-container']}>
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
                                            <span onClick={() => setScreenNumber(3)}>
                                                CLICK HERE
                                            </span>
                                            &nbsp;if you&apos;re not automatically redirected</p>
                                    </div>
                                    <div>
                                    </div>
                                </>
                                :
                                <div className={styles['success-screen']}>
                                    <div style={{ position: 'relative', width: '50%', height: '60%' }}>
                                        <Image
                                            src="/images/bg-banners/success-illustration.svg"
                                            alt="try yourself banner"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h2>Credit Report Fetched Successfully</h2>
                                    <div className={styles["get-started-btn"]}>
                                        <Link href={requests.SIGNUP} target="_blank"
                                            rel="noopener noreferrer">
                                            Fetch Reports Instantly
                                        </Link>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </>
    )
}

export default FinancialServicesInteractions