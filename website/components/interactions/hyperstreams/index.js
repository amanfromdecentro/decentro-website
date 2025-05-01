import Image from "next/image";
import styles from "../../../styles/components-styles/interactions/hyperstreams-interactions.module.scss";
import styles1 from "../../../styles/components-styles/text-field/text-field.module.scss";

import Link from "next/link";
import requests from "../../../requests";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../../utilities/validators/regex";
import TextFieldInput from "../../../utilities/UI/TextField/TextFieldInput";


const HyperstreamsInteractions = (props) => {
    const [selectedApp, setSelectedApp] = useState("")
    const [screenNumber, setScreenNumber] = useState(1)


    const initialValues = {
        name: "",
        mobile: "",
    };
    const [formValues, setFormValues] = useState({ ...initialValues })



    const { name, gstin, mobile, email } = REGEXP;

    const validationSchema = Yup.object({
        name: Yup.string().required().matches(name),
        mobile: Yup.string().required().matches(mobile),

    });

    const formik = useFormik({
        initialValues: formValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,

        // This function will run when user will submit the form after it is validated.
        onSubmit: (values, action) => {
            setScreenNumber(2)
        },
    });

    useEffect(() => {
        if (screenNumber === 2) {
            const timer = setTimeout(() => {
                setScreenNumber(3);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [screenNumber]);

    const createEmail = (str) => str.toLowerCase().replace(/\s+/g, '') + '@gmail.com';

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
                                src="/images/bg-banners/hyperstreams-left-new.svg"
                                alt="try yourself banner"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            />
                            <div className={styles["overlay-text-container-1"]}>
                                <h2 className={styles["overlay-text-heading"]}>
                                    Hyperstreams
                                </h2>
                                {/* <div className={styles["overlay-text-sub-heading"] + (formValues.gstin.trim().length > 0 ? ' ' + styles['pr-color'] : "")} style={{ fontWeight: 500 }}>
                                    {formValues.gstin.trim().length > 0 ? formValues.gstin : "GSTIN"}
                                </div> */}
                            </div>

                            <div className={styles["overlay-text-container-2"]}>
                                <div className={styles["overlay-mid-info-container"]}>
                                    <div className={styles["overlay-name"]}>
                                        <p style={{ width: '52px' }}>Name:</p>
                                        <p className={styles["overlay-placeholder"] + (formik?.values?.name.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                            {formik?.values?.name?.length > 0 ? formik?.values?.name : "Name"}
                                        </p>
                                    </div>
                                    <div className={styles["overlay-mobile"]}>
                                        <p style={{ width: '52px' }}>Mobile:</p>
                                        <p className={styles["overlay-placeholder"] + (formik?.values?.mobile.trim().length > 0 ? ' ' + styles['bold-color'] : "")} style={{ fontWeight: 500 }}>
                                            {formik?.values?.mobile?.length > 0 ? formik?.values?.mobile : "Mobile"}
                                        </p>
                                    </div>

                                </div>
                                {/* <div className={styles["overlay-text-sub-heading"] + (formValues.gstin.trim().length > 0 ? ' ' + styles['pr-color'] : "")} style={{ fontWeight: 500 }}>
                                    {formValues.gstin.trim().length > 0 ? formValues.gstin : "GSTIN"}
                                </div> */}
                            </div>
                            <div className={styles["overlay-solid-strip"]} style={{ backgroundColor: formik.isValid && formik.dirty ? "#096ef2" : "" }}>

                            </div>
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
                                        Hyperstreams
                                    </h2>
                                </div>
                            </>
                            :
                            <>
                                <Image
                                    src="/images/bg-banners/hyperstreams-data.svg"
                                    alt="try yourself banner"
                                    width={1920}
                                    height={1080}
                                    layout="responsive"
                                />
                                <p className={styles["name-success-screen"]}>{formik?.values?.name}</p>
                                <p className={styles["email-success-screen"]}>{formik?.values?.name ? createEmail(formik?.values?.name) : "-"}</p>
                                <p className={styles["number-success-screen"]}>{formik?.values?.mobile}</p>
                            </>

                    }

                </div>
            </div>


            <div className={styles["right-container"]}>
                {screenNumber !== 3 && <div className={styles["upper-container"]} >
                    <h2>Hyperstreams</h2>
                    <p>Enter details to proceed</p>
                </div>
                }
                {
                    screenNumber === 1 ?
                        <form onSubmit={formik.handleSubmit}>
                            <div className={styles1['ui-form-details']}>
                                <div className={styles1['ui-form-content']}>
                                    <div className={styles1['ui-form-inputs-section']}>
                                        <TextFieldInput
                                            id="name"
                                            name="name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                            touched={formik.touched.name}
                                            error={formik.errors.name}
                                            placeholder="Enter name"
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
                                    <div className={styles1['ui-button-container']}>
                                        <button
                                            type="submit"
                                            className={styles1['submit-btn'] + " " + (formik.isValid && formik.dirty && !formik.isSubmitting ? styles1['active'] : "")}
                                            disabled={!formik.isValid || formik.isSubmitting}
                                        >
                                            {formik.isSubmitting ? "Loading..." : "Verify Details"}
                                            <span
                                                id="user-config-loader"
                                                style={{ display: "flex" }}
                                            ></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        :
                        screenNumber === 2 ?
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
                                    <span>
                                        CLICK HERE
                                    </span>
                                    &nbsp;if you&apos;re not automatically redirected</p>
                            </div>
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
                                <h2>Successfully Completed HyperStreams</h2>
                                <div className={styles["get-started-btn"]}>
                                    <Link href={requests.SIGNUP} target="_blank"
                                        rel="noopener noreferrer">
                                        Fetch CKYC Data Instantly
                                    </Link>
                                </div>

                            </div>
                }


            </div>
        </div >
    )
}

export default HyperstreamsInteractions