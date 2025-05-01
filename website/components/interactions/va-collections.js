import Image from "next/image";
import styles from "../../styles/components-styles/interactions/va-collections-interactions.module.scss";
import styles1 from "../../styles/components-styles/text-field/text-field.module.scss";


import TextFieldInput from "../../utilities/UI/TextField/TextFieldInput"

import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../utilities/validators/regex";
import { useState } from "react";
import requests from "../../requests";
import Link from "next/link";

function formatCompanyName(input) {
    return input.replace(/\s/g, '').toLowerCase() + "@icici";
}

const VACollectionsInteractions = () => {
    const [screenNumber, setScreenNumber] = useState(1)

    const initialValues = {
        company: "",
        gstin: "",
        mobile: "",
        email: ""
    };
    const [formValues, setFormValues] = useState({ ...initialValues })

    const { companyName, gstin, mobile, email } = REGEXP;

    const validationSchema = Yup.object({
        company: Yup.string().required().matches(companyName),
        gstin: Yup.string().required().matches(gstin),
        mobile: Yup.string().required().matches(mobile),
        email: Yup.string().required().matches(email)

    });

    const formik = useFormik({
        initialValues: formValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,

        // This function will run when user will submit the form after it is validated.
        onSubmit: (values, action) => {
            console.log("values", values)
            setScreenNumber(2)
        },
    });

    const ChangeHandler = (e) => {
        formik.handleChange(e);
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    }

    console.log("formik", formik)
    return (
        <div className={styles["interactions-container"]}>
            <div className={styles["left-container"]}>
                <h2>
                    <span className={styles["header-section-highlighted"]}>
                        Try Out&nbsp;
                    </span>
                    Yourself
                </h2>
                <p className={styles["tagline"]} style={{ marginBottom: screenNumber !== 1 ? '138px' : '0' }}>
                    As simple as a gentle tap, our APIs effortlessly facilitate seamless
                    flow with just a touch
                </p>
                <div className={styles["interactions-image"]}>
                    {screenNumber === 1 ?
                        <>
                            <Image
                                src="/images/bg-banners/try-out-yourself.svg"
                                alt="try yourself banner"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            />
                            <div className={styles["overlay-text-container-1"]}>
                                <h2 className={styles["overlay-text-heading"] + (formValues.company.trim().length > 0 ? ' ' + styles['pr-color'] : "")}>
                                    {formValues.company.trim().length > 0 ? formValues.company : "Your Company"}
                                </h2>
                                <div className={styles["overlay-text-sub-heading"] + (formValues.gstin.trim().length > 0 ? ' ' + styles['pr-color'] : "")} style={{ fontWeight: 500 }}>
                                    {formValues.gstin.trim().length > 0 ? formValues.gstin : "GSTIN"}
                                </div>
                            </div>
                            <div className={styles["overlay-text-container-2"]}>
                                <p
                                    className={formValues.mobile.trim().length > 0 ? ' ' + styles['pr-color'] : ""}
                                    style={{ fontWeight: 500 }}
                                >
                                    {formValues.mobile.trim().length > 0 ? formValues.mobile : "Mobile"}
                                </p>
                                <p
                                    className={formValues.email.trim().length > 0 ? ' ' + styles['pr-color'] : ""}
                                    style={{ fontWeight: 500 }}
                                >
                                    {formValues.email.trim().length > 0 ? formValues.email : "Email"}
                                </p>
                            </div>
                        </>
                        :
                        <>
                            <Image
                                src="/images/bg-banners/sucess-layer.svg"
                                alt="try yourself banner"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            // style={{ marginTop: '60px' }}
                            />
                            <div className={styles["success-overlay-text-container-1"]}>
                                <h2 className={styles["success-overlay-text-heading"]}>
                                    {formValues.company.trim().length > 0 ? formValues.company : "Your Company"}
                                </h2>
                                <div className={styles["success-overlay-text-sub-heading"]} style={{ fontWeight: 500 }}>
                                    {formValues.gstin.trim().length > 0 ? formValues.gstin : "GSTIN"}
                                </div>
                            </div>
                            <div className={styles["success-overlay-text-container-2"]}>
                                <p style={{ fontWeight: 500 }}>{formValues.mobile.trim().length > 0 ? formValues.mobile : "Mobile"}</p>
                                <p style={{ fontWeight: 500 }}>{formValues.email.trim().length > 0 ? formValues.email : "Email"}</p>
                            </div>

                            <div className={styles["success-overlay-text-container-3"]}>
                                <div className={styles["success-overlay-text-container-3-subheading"]}>
                                    Virtual Account Details
                                </div>
                                <div className={styles["success-overlay-text-container-3-items"]}>
                                    <p><strong>VA No.  &nbsp; &nbsp;</strong><span className={styles['pr-color']} style={{ fontWeight: 500 }}>876543567897654</span></p>
                                    <p><strong>IFSC  &nbsp; &nbsp; &nbsp; &nbsp;</strong><span className={styles['pr-color']} style={{ fontWeight: 500 }} >ICICI00089086</span></p>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>

            <div
                className={styles["right-container"]}
                style={{
                    height: "520px",
                }}
            >
                {screenNumber === 1 ?
                    <div className={styles["interactions-form"]}>
                        <div className={styles["transition-section"]}>
                            <div className={styles["header-section"]}>
                                <h2>Create Virtual Account</h2>
                                <p>Enter details to proceed</p>
                            </div>
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
                                            maxLength={23}
                                        />
                                    </div>
                                    <div className={styles1['ui-form-inputs-section']}>
                                        <TextFieldInput
                                            id="gstin"
                                            name="gstin"
                                            onChange={ChangeHandler}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.gstin}
                                            touched={formik.touched.gstin}
                                            error={formik.errors.gstin}
                                            placeholder="Enter company's GSTIN"
                                            label="GSTIN"
                                            required={true}
                                            disabled={false}
                                            maxLength={15}
                                        />
                                    </div>
                                    <div className={styles1['ui-form-inputs-section']}>
                                        <TextFieldInput
                                            id="mobile"
                                            name="mobile"
                                            onChange={ChangeHandler}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mobile}
                                            touched={formik.touched.mobile}
                                            error={formik.errors.mobile}
                                            placeholder="Enter registered mobile number"
                                            label="Mobile"
                                            required={true}
                                            disabled={false}
                                            maxLength={10}
                                        />
                                    </div>
                                    <div className={styles1['ui-form-inputs-section']}>
                                        <TextFieldInput
                                            id="email"
                                            name="email"
                                            onChange={ChangeHandler}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            touched={formik.touched.email}
                                            error={formik.errors.email}
                                            placeholder="Enter registered email"
                                            label="Email"
                                            required={true}
                                            disabled={false}
                                            maxLength={26}
                                        />
                                    </div>
                                    <div className={styles1['ui-button-container']}>
                                        <button
                                            type="submit"
                                            className={styles1['submit-btn'] + ' ' + (formik.isValid && formik.dirty && !formik.isSubmitting ? styles1['active'] : "")}
                                            disabled={!formik.isValid || formik.isSubmitting}
                                        >
                                            {formik.isSubmitting ? "Loading..." : "Confirm & Submit"}
                                            <span
                                                id="user-config-loader"
                                                style={{ display: "flex" }}
                                            ></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    :
                    <div className={styles["screen-2-interactions-form"]}>
                        <div className={styles["transition-section"]}>
                            <div className={styles["screen-2-header-section"]}>
                                <h2>Create Virtual Account</h2>
                                <p>Mapped to: <span>{formatCompanyName(formValues.company.trim())}</span></p>
                            </div>
                        </div>

                        <div className={styles["center-img-container"]}>
                            <img src="/images/rocket-demo.svg" />
                            {/* <Image
                                src="/images/rocket-demo.svg"
                                alt="try yourself banner"
                                width={350}
                                height={300}
                            // layout="responsive"
                            /> */}
                        </div>
                        {/* <div className={styles["mk"]}>dnfjfn</div> */}

                        <div className={styles["lower-container"]}>
                            <p className={styles["lower-text"]}>Complete your application to start collecting funds</p>
                            <div className={styles["get-started-btn"]}>
                                <Link href={requests.SIGNUP} target="_blank"
                                    rel="noopener noreferrer">Sign Up Now</Link>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default VACollectionsInteractions