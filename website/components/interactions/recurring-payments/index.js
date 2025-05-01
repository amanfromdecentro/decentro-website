import { useEffect, useState } from "react";
import styles from "../../../styles/components-styles/interactions/recurring-payments-interactions.module.scss";
import styles1 from "../../../styles/components-styles/text-field/text-field.module.scss";

import Image from "next/image";
import Link from "next/link";
import requests from "../../../requests";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEXP } from "../../../utilities/validators/regex";
import TextFieldInput from "../../../utilities/UI/TextField/TextFieldInput";
import TextFieldSelect from "../../../utilities/UI/TextField/TextFieldSelect";


const RecurringPaymentsInteractions = () => {
    const [screenNumber, setScreenNumber] = useState(1)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const initialValues = {
        name: "",
        account_number: "",
        amount: "",
        frequency: "",
        authentication: "",
        mobile: "",
        email: "",
        start_date: "",
        end_date: ""
    };

    const { name, accountNumberRegex, mobile, amount, email } = REGEXP;

    const validationSchema = Yup.object({
        name: Yup.string().required().matches(name),
        account_number: Yup.string().required().matches(accountNumberRegex),
        amount: Yup.string().required().matches(amount),
        frequency: Yup.mixed().required(),
        authentication: Yup.mixed().required(),
        mobile: Yup.string().required().matches(mobile),
        email: Yup.string().required().matches(email),
        start_date: Yup.mixed().required(),
        end_date: Yup.mixed().required()
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
    }

    const frequencyTypes = ['Adhoc', 'Weekly', 'Monthly', 'Yearly'];
    const authenticationTypes = ['Debit Card', 'Netbanking'];

    const frequencyOptions = frequencyTypes.map(type => ({ value: type, label: type }));

    const authenticationOptions = authenticationTypes.map(type => ({ value: type, label: type }));

    return (
        <div className={styles["interactions-container"]} style={{ alignItems: `${screenNumber !== 1 ? "flex-end" : "center"}` }}>
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
                                src="/images/bg-banners/e-nach-mandate.svg"
                                alt="try yourself banner"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            />
                            <div className={styles["overlay-text-container-1"]}>
                                <div className={styles["overlay-text-items"]}>
                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Name
                                        </div>
                                        <div
                                            className={
                                                styles["overlay-text-name-content"] +
                                                (formik?.values?.name?.trim().length > 0 ? ' ' + styles['bold-color'] : "")
                                            }
                                            style={{ width: '100px' }}
                                        >
                                            {formik?.values?.name ? formik?.values?.name : "Name"}
                                        </div>
                                    </div>

                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Account No.
                                        </div>
                                        <div className={styles["overlay-text-name-content"] + (formik?.values?.account_number?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                            {formik?.values?.account_number ? formik?.values?.account_number : "Account No."}
                                        </div>
                                    </div>
                                </div>


                                <div className={styles["overlay-text-items"]}>
                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Start Date
                                        </div>
                                        <div className={styles["overlay-text-name-content"] + (formik?.values?.start_date?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                            {formik?.values?.start_date ? formik?.values?.start_date : "Start Date"}
                                        </div>
                                    </div>

                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            End Date
                                        </div>
                                        <div className={styles["overlay-text-name-content"] + (formik?.values?.end_date?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                            {formik?.values?.end_date ? formik?.values?.end_date : "End Date"}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles["overlay-text-items"]}>
                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Amount
                                        </div>
                                        <div className={styles["overlay-text-name-content"] + (formik?.values?.amount?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                            {formik?.values?.amount ? formik?.values?.amount : "Amount"}
                                        </div>
                                    </div>

                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Frequency
                                        </div>
                                        <div
                                            className={
                                                styles["overlay-text-name-content"] +
                                                (formik?.values?.frequency?.value?.trim().length > 0 ? ' ' + styles['bold-color'] : "")
                                            }
                                            style={{ textAlign: 'start' }}
                                        >
                                            {formik?.values?.frequency?.value ? formik?.values?.frequency?.value : "Frequency"}
                                        </div>
                                    </div>
                                </div>


                                <div className={styles["overlay-text-items"]}>
                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Authentication
                                        </div>
                                        <div className={styles["overlay-text-name-content"] + (formik?.values?.authentication?.value?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                            {formik?.values?.authentication?.value ? formik?.values?.authentication?.value : "Authentication"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["overlay-text-container-2"]}
                            >
                                <div className={styles["overlay-text-items"]}>
                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Email
                                        </div>
                                        <div className={styles["overlay-text-name-content"] + (formik?.values?.email?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                            {formik?.values?.email ? formik?.values?.email : "Email"}
                                        </div>
                                    </div>

                                    <div className={styles["overlay-text-name"]}>
                                        <div className={styles["overlay-text-name-label"]}>
                                            Mobile
                                        </div>
                                        <div className={styles["overlay-text-name-content"] + (formik?.values?.mobile?.trim().length > 0 ? ' ' + styles['bold-color'] : "")}>
                                            {formik?.values?.mobile ? formik?.values?.mobile : "Mobile"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        screenNumber === 2 ?
                            <Image
                                src="/images/bg-banners/e-mandate-created.svg"
                                alt="try yourself banner"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            />
                            :
                            <Image
                                src="/images/bg-banners/e-mandate-successfully.svg"
                                alt="try yourself banner"
                                width={1920}
                                height={1080}
                                layout="responsive"
                            />
                    }
                </div>
            </div>


            <div className={`${styles["right-container"]} ${screenNumber !== 1 ? styles["screen-2"] : ""}`}>
                {
                    screenNumber === 1 ?
                        <>
                            <div className={styles["upper-container"]} >
                                <h2>Set up eNACH Mandate</h2>
                                <p>Enter details to proceed</p>
                            </div>

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
                                                id="account_number"
                                                name="account_number"
                                                onChange={ChangeHandler}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.account_number}
                                                touched={formik.touched.account_number}
                                                error={formik.errors.account_number}
                                                placeholder="Enter Account Number"
                                                label="Account No."
                                                required={true}
                                                disabled={false}
                                                maxLength={12}
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
                                        <div className={styles1['ui-form-inputs-section']}>
                                            <TextFieldInput
                                                id="start_date"
                                                name="start_date"
                                                onChange={ChangeHandler}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.start_date}
                                                touched={formik.touched.start_date}
                                                error={formik.errors.start_date}
                                                placeholder="Start date"
                                                label="Start Date"
                                                required={true}
                                                disabled={false}
                                                maxLength={4}
                                                type="Date"
                                            />
                                        </div>
                                        <div className={styles1['ui-form-inputs-section']}>
                                            <TextFieldInput
                                                id="end_date"
                                                name="end_date"
                                                onChange={ChangeHandler}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.end_date}
                                                touched={formik.touched.end_date}
                                                error={formik.errors.end_date}
                                                placeholder="End date"
                                                label="End Date"
                                                required={true}
                                                disabled={false}
                                                maxLength={4}
                                                type="Date"
                                            />
                                        </div>
                                        <div className={styles1['ui-form-inputs-section']}>
                                            <TextFieldSelect
                                                id="frequency"
                                                name="frequency"
                                                onChange={(selectedOption) => {
                                                    formik.setFieldValue("frequency", selectedOption)
                                                    // setFormValues({ ...formValues, brand_color: selectedOption });
                                                }}
                                                onBlur={() =>
                                                    formik.setFieldTouched("frequency", true)
                                                }
                                                value={formik.values.frequency}
                                                options={frequencyOptions}
                                                noOptionsMessage={() => "No Frequency Exists"}
                                                label="Frequency"
                                                required={true}
                                                // isLoading={isLoading}
                                                placeholder="Frequency"
                                                isformatOptionLabel={true}
                                            />
                                        </div>

                                        <div className={styles1['ui-form-inputs-section']}>
                                            <TextFieldSelect
                                                id="authentication"
                                                name="authentication"
                                                onChange={(selectedOption) => {
                                                    formik.setFieldValue("authentication", selectedOption)
                                                    // setFormValues({ ...formValues, brand_color: selectedOption });
                                                }}
                                                onBlur={() =>
                                                    formik.setFieldTouched("authentication", true)
                                                }
                                                value={formik.values.authentication}
                                                options={authenticationOptions}
                                                noOptionsMessage={() => "No Authentication Exists"}
                                                label={isSmallScreen ? "Auth." : "Authentication"}
                                                required={true}
                                                // isLoading={isLoading}
                                                placeholder="Authentication"
                                                isformatOptionLabel={true}
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


                                        <div className={styles1['ui-button-container']}>
                                            <button
                                                type="submit"
                                                className={styles1['submit-btn'] + ' ' + (formik.isValid && formik.dirty && !formik.isSubmitting ? styles1['active'] : "")}
                                                disabled={!formik.isValid || formik.isSubmitting}
                                            >
                                                {formik.isSubmitting ? "Loading..." : "Submit"}
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
                                </div>
                                <div className={styles['approval-container']}>
                                    <Image
                                        src="/images/bg-banners/approval.svg"
                                        alt="try yourself banner"
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                        className={styles['approval']}
                                    />
                                    <h2>Mandate Registration Link Created Successfully</h2>
                                </div>
                                {/* <div className={styles['qr-info']}>
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
                                </div> */}
                                <div className={styles['scan-to-pay-cta']}>
                                    <Image
                                        src="/images/bg-banners/mandate-link.svg"
                                        alt="try yourself banner"
                                        width={12}
                                        height={1080}
                                        // layout="responsive"
                                        className={styles['payment-link-img']}
                                    />
                                    <button className={styles['tap-to-pay-btn']} onClick={nextScreen}>Proceed</button>
                                </div>

                            </div>
                            :
                            <div className={styles['payment-successful-container']}>
                                <div style={{ position: 'relative', width: '50%', height: '60%' }}>
                                    <Image
                                        src="/images/bg-banners/success-illustration.svg"
                                        alt="try yourself banner"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <h2>E-Mandate Created Successfully</h2>
                                <div className={styles["get-started-btn"]}>
                                    <Link href={requests.SIGNUP} target="_blank"
                                        rel="noopener noreferrer">
                                        Start Collecting Recurring Payments
                                    </Link>
                                </div>

                            </div>
                }
            </div>
        </div>
    )
}

export default RecurringPaymentsInteractions