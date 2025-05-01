import { useEffect, useState } from "react";
import styles from "../../../styles/components-styles/interactions/scan-and-extract-interactions.module.scss";
import styles1 from "../../../styles/components-styles/text-field/text-field.module.scss";

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../../utilities/validators/regex";
import TextFieldInput from "../../../utilities/UI/TextField/TextFieldInput";
import TextFieldSelect from "../../../utilities/UI/TextField/TextFieldSelect";
import Link from "next/link";
import requests from "../../../requests";


const ScanAndExtractInteractions = () => {
    const [screenNumber, setScreenNumber] = useState(1)
    const [kycToggleChecked, setKycToggleChecked] = useState(false);



    const initialValues = {
        document: "",
        idNumber: "",
        amount: "",
        kycToggleChecked: false,
        consentChecked: false
    };

    const { name, amount, UPIIDRegex } = REGEXP;

    const validationSchema = Yup.object({
        document: Yup.mixed().required(),
        idNumber: Yup.string().required(),
        kycToggleChecked: Yup.boolean()
            .oneOf([true], 'You must provide consent to proceed')
            .required('Consent is required'),
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

    const documentTypes = ['PAN', 'AADHAR', 'VOTER ID', 'DRIVING LICENSE'];

    const options = documentTypes.map(type => ({ value: type, label: type }));

    useEffect(() => {
        if (screenNumber === 2) {
            const timer = setTimeout(() => {
                setScreenNumber(3);
            }, 200000);

            return () => clearTimeout(timer);
        }
    }, [screenNumber]);
    console.log("formik?.values?.kycToggleChecked", formik?.values?.kycToggleChecked)
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
                                    src="/images/bg-banners/scan-extract.png"
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
                                    <div className={styles["overlay-mid-info-container"]}>
                                        <div className={styles["overlay-document"]}>
                                            <p>Document:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.document?.value?.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                                {formik?.values?.document?.value?.length > 0 ? formik?.values?.document?.value : "Document"}
                                            </p>
                                        </div>
                                        <div className={styles["overlay-id-number"]}>
                                            <p>ID Number:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.idNumber?.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                                {formik?.values?.idNumber?.length > 0 ? formik?.values?.idNumber : "ID Number"}
                                            </p>
                                        </div>
                                        <div className={styles["overlay-validation"]}>
                                            <p>Validation:</p>
                                            <p className={styles["overlay-placeholder"] + (formik?.values?.kycToggleChecked === true ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                                {formik?.values?.kycToggleChecked ? "True" : "Validation"}
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
                                        src="/images/bg-banners/scan-extract-processing.png"
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
                                    <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: formik.isValid && formik.dirty ? "#FFB100" : "" }}>
                                    </div>

                                </>

                                :
                                <>
                                    <Image
                                        src="/images/bg-banners/extracted-data.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                    />
                                    <p className={styles["overlay-success-document"]}>
                                        {formik?.values?.document?.value}
                                    </p>
                                    <p className={styles["overlay-success-document-number"]}>
                                        {formik?.values?.idNumber}
                                    </p>
                                </>


                        }
                    </div>
                </div>

                <div className={styles["right-container"]}>
                    {screenNumber !== 3 && <div className={styles["upper-container"]} >
                        <h2>Scan & Extract</h2>
                        <p>Enter details to proceed</p>
                    </div>}
                    {
                        screenNumber === 1 ?
                            <>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className={styles1['ui-form-details']}>
                                        <div className={styles1['ui-form-content']}>
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
                                            <div className={styles1['ui-form-inputs-section']}>
                                                <div className={styles1['ui-form-input-section'] + ' ' + styles1['ui-form-content-input']}>
                                                    <div className={styles1["input"]}>
                                                        <div className={styles1["toggle-switch-container"]}>
                                                            <div className={styles1["toggle-switch"]}>
                                                                <input
                                                                    type="checkbox"
                                                                    className={styles1["checkbox"]}
                                                                    name={"Validate KYC"}
                                                                    id={"Validate KYC"}
                                                                    checked={formik.values.kycToggleChecked}
                                                                    onChange={() => formik.setFieldValue("kycToggleChecked", !formik.values.kycToggleChecked)}
                                                                />

                                                                <label
                                                                    className={styles1["label"]}
                                                                    htmlFor={"Validate KYC"}
                                                                >
                                                                    <span className={styles1["inner"]} />
                                                                    <span className={styles1["switch"]} />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles1['ui-label']}>Validate KYC</div>
                                                </div>

                                                {/* <TextFieldInput
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
                                                /> */}
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
                                                    {formik.isSubmitting ? "Loading..." : "Extract Details"}
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
                                            &nbsp;if you&apos;re not automatically redirected
                                        </p>
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
                                    <h2>Document Scan and Validation Successful</h2>
                                    <div className={styles["get-started-btn"]}>
                                        <Link href={requests.SIGNUP} target="_blank"
                                            rel="noopener noreferrer">
                                            Scan Documents Instantly
                                        </Link>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ScanAndExtractInteractions;