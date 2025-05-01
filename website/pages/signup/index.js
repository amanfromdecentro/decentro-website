import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import Head from "next/head";
import axios from "../../axios";
import requests from "../../requests";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Oval } from "react-loader-spinner";
import DecentroBanner from "../../components/shared/decentro-signup-banner/decentro-signup-banner";
import modulesAndDefaultProvidersFlow from "../../utilities/modulesAndProvidersMappingFlow.json";
import modulesAndDefaultProvidersFabric from "../../utilities/modulesAndProvidersMappingFabric.json";
import ReactFlagsSelect from "react-flags-select";
import sortById from "../../utilities/sortResponses";
import SnackbarMessage from "../../components/SnackbarMessage/SnackbarMessage";
import Link from "next/link";
import { useUserJourney } from "../_app";

const Signup = () => {
  // To track user journey for conversions
  const { userJourney } = useUserJourney();
  const [isLoading, setIsLoading] = useState(false);
  // Label for Decentro banner
  let label = { light: "Let's get you", bold: "Started!" };
  // State to manage visibility of second form
  const [showSecondForm, setShowSecondForm] = useState(false);
  // State to store values of the first form
  const [firstFormValues, setFirstFormValues] = useState(null);
  const [secondFormValues, setSecondFormValues] = useState(null);

  // States to handle payloads sent to functions
  const [inputValues, setInputValues] = useState({
    country_code: "+91",
    first_name: "",
    last_name: "",
    email_id: "",
    phone_number: "",
    company: "",
    registered: "",
    city: "",
    stage: "",
    products: [],
  });

  const [normalISDInputValues, setNormalISDInputValues] = useState({
    country_code: "+91",
    first_name: "",
    last_name: "",
    email_id: "",
    phone_number: "",
    company: "",
    registered: "",
    stage: "",
    products: [],
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

  // Call country codes api on load and set the country code state and dropdown accordingly
  useEffect(() => {
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );

    pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    axios
      .get(
        requests.DECENTRO_WORKFLOW_BASE_URL_PROD +
          requests.ISD_COUNTRY_CODE_LIST
      )
      .then((response) => {
        const labels = response.data.isd_countries.reduce((acc, country) => {
          acc[country.country_code] = {
            primary: country.isd_code,
            secondary: country.country_name,
          };
          return acc;
        }, {});
        setCountryLabels(labels);
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
      })
      .catch((error) => {
        console.log(error);
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        // Unmount the Oval component using the root
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
      });
  }, []);

  // Country code with phone number handler
  const [select, setSelect] = useState("IN");
  const [countryLabels, setCountryLabels] = useState({});
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // Function to check uniqueness using API
  const checkUniqueApi = (inputElementField, inputValue) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          requests.DECENTRO_IN_STAGING_BASE_URL + requests.UNIQUENESS_CHECK,
          {
            [inputElementField]: inputValue,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          if (res.data.validation === "FAILURE") {
            resolve(false);
          } else if (res.data.validation === "SUCCESS") {
            resolve(true);
          } else {
            resolve(true);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  const [isStateUpdated, setIsStateUpdated] = useState(false);
  useEffect(() => {
    if (isStateUpdated) {
      normalISDSignup();
      setIsStateUpdated(false); // Reset the flag
    }
  }, [isStateUpdated]);

  const step1Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters allowed"),
      lastName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters allowed"),

      phoneNumber: Yup.string()
        .required("Required")
        .test("isIndianPhoneNumber", "Invalid phone number", function (value) {
          if (countryLabels[select].primary === "+91") {
            // Indian phone number validation
            return (
              /^[6-9]\d{9}$/.test(value) &&
              !/^0/.test(value) &&
              /^\d+$/.test(value)
            );
          } else {
            // International phone number validation
            // return !/^0/.test(value) && /^\d+$/.test(value);
            return /^\d+$/.test(value);
          }
        }),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values, { setFieldError }) => {
      if (countryLabels[select].primary === "+91") {
        // Call API to check uniqueness of phone number and email
        const phoneNumberUnique = await checkUniqueApi(
          "phone_number",
          values.phoneNumber
        );
        const emailUnique = await checkUniqueApi("email_id", values.email);

        // If phone number or email is not unique, set error messages
        if (!phoneNumberUnique) {
          setFieldError("phoneNumber", "Phone number is already used");
        }
        if (!emailUnique) {
          setFieldError("email", "Email is already used");
        }

        // Proceed with form submission if all fields are valid
        if (phoneNumberUnique && emailUnique) {
          // Submit form or proceed to next step
          setShowSecondForm(true);
          setFirstFormValues(values);

          await setInputValues({
            ...inputValues,
            first_name: values.firstName,
            last_name: values.lastName,
            email_id: values.email,
            phone_number: values.phoneNumber,
          });

          await setNormalISDInputValues({
            ...normalISDInputValues,
            first_name: values.firstName,
            last_name: values.lastName,
            email_id: values.email,
            phone_number: countryLabels[select].primary + values.phoneNumber,
          });

          setIsStateUpdated(true); // Set the flag to true to trigger the effect
        }
      } else {
        // Directly set the state and proceed if country code is not +91
        setShowSecondForm(true);
        setFirstFormValues(values);

        await setInputValues({
          ...inputValues,
          first_name: values.firstName,
          last_name: values.lastName,
          email_id: values.email,
          phone_number: values.phoneNumber,
        });

        await setNormalISDInputValues({
          ...normalISDInputValues,
          first_name: values.firstName,
          last_name: values.lastName,
          email_id: values.email,
          phone_number: countryLabels[select].primary + values.phoneNumber,
        });

        setIsStateUpdated(true); // Set the flag to true to trigger the effect
        setCurrentStep(2); // Move to step 2
      }
    },
  });

  const atLeastOneProductSelected = (values) => {
    if (values.products.length === 0 && values.productsFabric.length === 0) {
      return false;
    }
    return true;
  };
  const step2Formik = useFormik({
    initialValues: {
      companyName: "",
      registeredName: "",
      companyStage: "",
      companyLocation: "",
      products: [],
      productsFabric: [],
    },
    validationSchema: Yup.object({
      companyName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z0-9\s]+$/, "Only alphanumeric characters allowed"),
      registeredName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters")
        .matches(/^[a-zA-Z0-9\s]+$/, "Only alphanumeric characters allowed"),
      companyStage: Yup.string().required("Required"),
      companyLocation: Yup.string().required("Required"),
      products: Yup.array(),
      productsFabric: Yup.array(),
    }).test(
      "atLeastOneProductSelected",
      "Please select at least one product.",
      atLeastOneProductSelected
    ),
    onSubmit: async (values, { setFieldError }) => {
      if (countryLabels[select].primary === "+91") {
        // Call API to check uniqueness of company name and registered name

        const companyNameUnique = await checkUniqueApi(
          "company",
          values.companyName
        );
        const registeredNameUnique = await checkUniqueApi(
          "registered",
          values.registeredName
        );

        // If company name or registered name is not unique, set error messages
        if (!companyNameUnique) {
          setFieldError("companyName", "Company name is already used");
        }
        if (!registeredNameUnique) {
          setFieldError("registeredName", "Registered Name is already used");
        }

        // Proceed with form submission if all fields are valid
        if (companyNameUnique && registeredNameUnique) {
          // Submit form or proceed to next step
          setSecondFormValues(values);

          await setInputValues({
            ...inputValues,
            company: values.companyName,
            registered: values.registeredName,
            city: values.companyLocation,
            stage: parseInt(values.companyStage),
            products: [...values.products, ...values.productsFabric],
          });

          await setNormalISDInputValues({
            ...normalISDInputValues,
            company: values.companyName,
            registered: values.registeredName,
            stage:
              stages.find((stage) => stage.id === parseInt(values.companyStage))
                ?.name || "",
            products: [...values.products, ...values.productsFabric],
          });

          setIsStateUpdated(true); // Set the flag to true to trigger the effect
          setCurrentStep(3); // Move to step 2
        }
      } else {
        // Directly set the state and proceed if country code is not +91
        setSecondFormValues(values);

        await setInputValues({
          ...inputValues,
          company: values.companyName,
          registered: values.registeredName,
          city: values.companyLocation,
          stage: parseInt(values.companyStage),
          products: [...values.products, ...values.productsFabric],
        });

        await setNormalISDInputValues({
          ...normalISDInputValues,
          company: values.companyName,
          registered: values.registeredName,
          stage:
            stages.find((stage) => stage.id === parseInt(values.companyStage))
              ?.name || "",
          products: [...values.products, ...values.productsFabric],
        });

        setIsStateUpdated(true); // Set the flag to true to trigger the effect
        setCurrentStep(3);
      }
    },
  });

  useEffect(() => {
    // Check if inputValues have been updated with the new products
    if (inputValues.products.length > 0) {
      // Call sendData() and onboardUser() once inputValues are updated
      sendData();
    }
  }, [inputValues.products]);

  const normalISDSignup = () => {
    const checkedProducts = normalISDInputValues.products.map((productId) =>
      getProductById(productId)
    );

    const productCodes = checkedProducts.flatMap((product) =>
      product.modules.map((module) => module.moduleCode)
    );

    // Remove duplicates
    const uniqueProductCodes = [...new Set(productCodes)];

    const updatedPayload = {
      ...normalISDInputValues,
      products: uniqueProductCodes.join(","),
    };

    const payloadWithoutCountryCode = Object.fromEntries(
      Object.entries(updatedPayload).filter(
        ([key, value]) =>
          key !== "country_code" && value !== "" && value.length != 0
      )
    );

    // Make the API call with the payload
    axios
      .post(
        requests.DECENTRO_WORKFLOW_BASE_URL_PROD + requests.ISD_SIGNUP,
        // payloadWithoutCountryCode,
        {
          ...payloadWithoutCountryCode, // Existing payload

          // Add the first object from userJourney (if exists)
          ...(userJourney?.[0]?.url && { ref_url: userJourney[0].url }),

          // UTM Parameters (if they exist)
          ...(userJourney?.[0]?.utmParams?.utm_source && {
            utm_source: userJourney[0].utmParams.utm_source,
          }),
          ...(userJourney?.[0]?.utmParams?.utm_medium && {
            utm_medium: userJourney[0].utmParams.utm_medium,
          }),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        // Custom Google Analytics Event tracker, tracking the signup button click only when the signup is successful
        ReactGA.event({
          category: "Signup Success",
          action: "SuccessfulSignupClick",
          label: "Signup",
        });
        if (countryLabels[select].primary !== "+91" && currentStep == 3) {
          setShowSuccessMessage(true);
        }
      })
      .catch((error) => {
        console.error("Error during signup: ", error);
      });
  };

  const preparePhoneNumber = () => {
    return countryLabels[select].primary + step1Formik.values.phoneNumber;
  };

  const sendData = async (event) => {
    // normalISDSignup();
    setIsStateUpdated(true); // Set the flag to true to trigger the effect
    if (countryLabels[select].primary == "+91") {
      onboardUser();
    }
    if (pageLoaderRoot) {
      // Render the Oval component using the root
      pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    }
  };

  const getProductById = (productId) => {
    // Check if the product is in the flow products
    const flowProduct = modulesAndDefaultProvidersFlow.data.find(
      (product) => product.id === productId
    );
    if (flowProduct) return flowProduct;

    // Check if the product is in the fabric products
    const fabricProduct = modulesAndDefaultProvidersFabric.data.find(
      (product) => product.id === productId
    );
    if (fabricProduct) return fabricProduct;

    // Return null if the product is not found
    return null;
  };
  const onboardUser = () => {
    gtag_report_conversion("http://decentro.tech/signup");

    // Fetch the checked products
    const checkedProducts = inputValues.products.map((productId) =>
      getProductById(productId)
    );

    // // Check if both Instant Payouts and Payment Collections are selected
    // const instantPayoutsSelected = checkedProducts.some(
    //   (product) => product.displayName === "Instant Payouts"
    // );
    // const paymentCollectionsSelected = checkedProducts.some(
    //   (product) => product.displayName === "Payment Collections"
    // );
    // const escrowAccountsSelected = checkedProducts.some(
    //   (product) => product.displayName === "Escrow Accounts"
    // );

    // // If both Instant Payouts and Payment Collections are selected, remove Payment Collections
    // let filteredProducts = checkedProducts;
    // // if (instantPayoutsSelected && paymentCollectionsSelected) {
    // //   filteredProducts = checkedProducts.filter(
    // //     (product) => product.displayName !== "Payment Collections"
    // //   );
    // // }
    // if (
    //   (instantPayoutsSelected && paymentCollectionsSelected) ||
    //   (instantPayoutsSelected && escrowAccountsSelected && paymentCollectionsSelected)
    // ) {
    //   filteredProducts = checkedProducts.filter(
    //     (product) => product.displayName !== "Payment Collections" && product.displayName !== "Instant Payouts"
    //   );
    // }

    // Check if Instant Payouts, Payment Collections, and Escrow Accounts are selected
    const instantPayoutsSelected = checkedProducts.some(
      (product) => product.displayName === "Instant Payouts"
    );
    const paymentCollectionsSelected = checkedProducts.some(
      (product) => product.displayName === "Payment Collections"
    );
    const escrowAccountsSelected = checkedProducts.some(
      (product) => product.displayName === "Escrow Accounts"
    );

    // Create an array of selected products
    const selectedProducts = [];
    if (instantPayoutsSelected) selectedProducts.push("Instant Payouts");
    if (paymentCollectionsSelected)
      selectedProducts.push("Payment Collections");
    if (escrowAccountsSelected) selectedProducts.push("Escrow Accounts");

    // If 2 or more products are selected, randomly keep only one
    let filteredProducts = checkedProducts;

    if (selectedProducts.length >= 2) {
      // Randomly choose one product to keep
      const randomProductToKeep =
        selectedProducts[Math.floor(Math.random() * selectedProducts.length)];

      // Filter the products to keep only the randomly selected one
      filteredProducts = checkedProducts.filter(
        (product) => product.displayName === randomProductToKeep
      );
    }

    // Create a Set to store unique provider names
    const uniqueProviders = new Set();

    // Create the module_details array
    const moduleDetails = filteredProducts.flatMap((product) =>
      product.modules.map((module) => {
        // Add the provider names to the Set
        module.moduleProviderDetails.forEach((provider) => {
          if (provider.providerName) {
            uniqueProviders.add(provider.providerName.toLowerCase());
          }
        });

        return {
          code: module.moduleCode,
          credits: parseInt(module.credits),
        };
      })
    );

    // Convert the Set to an array
    const providerDetails = Array.from(uniqueProviders);

    // Update the products in inputValues with the checkedProducts
    const updatedInputValues = {
      ...inputValues,
      // products: checkedProducts,
      products: filteredProducts,
    };
    const payloadWithoutCountryCode = Object.fromEntries(
      Object.entries(updatedInputValues).filter(
        ([key]) => key !== "country_code"
      )
    );

    let subEmailInput = {
      Email: inputValues.email_id,
    };
    // if (document.getElementById("newsletterInput").checked) {
    //   const subscriptionRequest = axios
    //     .post(requests.NEWSLETTER_SUBSCRIBE, subEmailInput)
    //     .then((res) => {
    //       console.log(res);
    //     });
    // }
    setIsLoading(true); // Start loading
    // ReactDOM.render(
    //   <Oval color="#FFFFFF" ariaLabel="loading" />,
    //   document.getElementById("pageLoader")
    // );
    if (pageLoaderRoot) {
      // Render the Oval component using the root
      pageLoaderRoot.render(<Oval color="#FFFFFF" ariaLabel="loading" />);
    }
    const convertedPayload = {
      first_name: payloadWithoutCountryCode.first_name,
      last_name: payloadWithoutCountryCode.last_name,
      phone_number: payloadWithoutCountryCode.phone_number,
      company: payloadWithoutCountryCode.company,
      email_id: payloadWithoutCountryCode.email_id,
      registered: payloadWithoutCountryCode.registered,
      city: payloadWithoutCountryCode.city,
      stage: payloadWithoutCountryCode.stage,
      module_details: moduleDetails,
      provider_details: providerDetails,
    };

    // Check if provider_details is empty and remove it if so
    if (convertedPayload.provider_details.length === 0) {
      delete convertedPayload.provider_details;
    }

    const request = axios
      .post(
        requests.DECENTRO_WORKFLOW_BASE_URL_STAGING +
          requests.WORKFLOW_SIGNUP_ONBOARDING,

        convertedPayload,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        // Custom Google Analytics Event tracker, tracking the signup button click only when the signup is successful
        // Tracking based on Goal Settings in the Google Analytics Dashboard - with all the configurations set same as below
        // Testing to be done with Alternate entries of Successful & Failed signup\ and see if the proper events are being captured by GA Dashboard
        ReactGA.event({
          category: "Signup Success",
          action: "SuccessfulSignupClick",
          label: "Signup",
        });
        setShowSuccessMessage(true);

        console.log("Complete User Journey:", userJourney);
        setIsLoading(false); // Stop loading
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        console.log(pageLoaderRoot);
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
      })
      .catch((error) => {
        setIsLoading(false); // Stop loading
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        console.log(error);
        // ReactDOM.render(
        //   <SnackbarMessage
        //     msgtype="Error"
        //     msg={error?.response?.data?.error[0] || "Something went wrong !"}
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
      });
  };

  // Function to handle going back to the first form
  const handleBackToFirstForm = () => {
    setShowSecondForm(false);
    setCurrentStep(1); // Move to step 2
  };

  const [products, setProducts] = useState([]);
  const [productsFabric, setProductsFabric] = useState([]);

  useEffect(() => {
    const productsFlow = modulesAndDefaultProvidersFlow.data.map((item) => ({
      id: item.id,
      name: item.displayName,
      description: item.description,
      extraText: item?.extraText,
    }));
    setProducts(productsFlow);

    const productsFabricFlow = modulesAndDefaultProvidersFabric.data.map(
      (item) => ({
        id: item.id,
        name: item.displayName,
        description: item.description,
      })
    );
    setProductsFabric(productsFabricFlow);
  }, []);

  const handleProductChange = (event, productGroup) => {
    const { value, checked } = event.target;

    // Fetch the current products from formik values
    const currentProducts = step2Formik.values[productGroup];

    // Check if the product is checked or unchecked
    if (checked) {
      // If checked, add the product ID to the current products array
      const newProducts = [...currentProducts, parseInt(value)];
      step2Formik.setFieldValue(productGroup, newProducts);
    } else {
      // If unchecked, remove the product ID from the current products array
      const newProducts = currentProducts.filter(
        (productId) => productId !== parseInt(value)
      );
      step2Formik.setFieldValue(productGroup, newProducts);
    }
  };
  const [stages, setStages] = useState([]);
  const [selectedStage, setSelectedStage] = useState("");
  // STAGE List
  useEffect(() => {
    const request = axios
      .get(requests.DECENTRO_WORKFLOW_BASE_URL_PROD + requests.ISD_STAGE_LIST)
      .then((response) => {
        sortById(response.data.stages);

        setStages(response.data.stages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [cities, setCities] = useState([]);
  // Pre decided City List api call
  useEffect(() => {
    const request = axios
      .get(requests.DECENTRO_IN_STAGING_BASE_URL + requests.SELF_CITY_LIST)
      .then((response) => {
        sortById(response.data.cities);
        if (pageLoaderRoot) {
          // Unmount the Oval component using the root
          pageLoaderRoot.unmount();
        }
        // ReactDOM.unmountComponentAtNode(document.getElementById("pageLoader"));
        setCities(response.data.cities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const redirectDocsPage = (event) => {
    window.location.assign("https://docs.decentro.tech/docs");
  };

  return (
    <React.Fragment>
      <Head>
        {/* Google Analytics (gtag.js) */}
        <script
          defer
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6NBW6WWGPQ"
        />
        {/* Google Tag Manager  */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-58TJJ42');`,
          }}
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
             function gtag_report_conversion(url) {
                var callback = function () {
                if (typeof(url) != 'undefined') {
                  // window.location = url;
                  return;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '11419699036/UG50CKHy_M0ZENyOq8Uq',
                  'value': 1.0,
                  'currency': 'USD',
                'event_callback': callback
              });
            return false;
            }
            `,
          }}
        />
        {/* End Google Tag Manager  */}
        <title>
          Sign Up for Decentro - Payments, KYC & Lending Infrastructure
        </title>
        <link rel="canonical" href="https://decentro.tech/signup" />
        <meta
          name="description"
          content="Sign up for Decentro and get started within minutes. Enable your business with our plug and play APIs & SDKs, and launch 10x faster."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Sign Up for Decentro - Payments, KYC & Lending Infrastructure"
        />
      </Head>
      <div id="pageLoader"></div>
      <div className="signup">
        <DecentroBanner label={label} />
        <div className="signup-section">
          <div className="form-section">
            <div className="signup-header" style={{ alignItems: "center" }}>
              <Link href="/" id="decentroIndiaContext">
                <img
                  className="decentro-logo"
                  src="/images/home/decentro-logo.svg"
                  alt="logo"
                />
              </Link>

              {!showSuccessMessage && (
                <h1>
                  Help us out with some details, and we’ll reach out to you!
                </h1>
              )}
            </div>
            <div className="input-section">
              <div
                style={{
                  width: "100%",
                }}
              >
                {showSuccessMessage && currentStep == 3 ? (
                  <div className="form-success-container">
                    <div className="success-content">
                      <h1>
                        <span>Check your inbox!</span>
                      </h1>
                      {inputValues.country_code == "+91" ? (
                        <p>
                          Congratulations, you have been inducted into the
                          Decentro family.
                          <br />
                          <br />
                          Head to your email inbox to access your testing /
                          sandbox credentials and start integrating our APIs &
                          SDKs right away. The API & SDK documentation is linked
                          below.
                          <br />
                          <br />
                          Test it away!
                          <br />
                          <br />
                          <strong>PS:</strong> Don’t forget to skim through the
                          spam folder for our emails :)
                        </p>
                      ) : (
                        <p>
                          Thanks for reaching out to Decentro.
                          <br />
                          <br />
                          We would like to understand more about your
                          requirements and your product.
                          <br />
                          Someone from our team would contact you soon.
                          <br />
                          <br />
                          Thank you.
                        </p>
                      )}

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
                ) : (
                  <>
                    {!showSecondForm && (
                      <form onSubmit={step1Formik.handleSubmit}>
                        <div className="inputs">
                          <div className="input-row">
                            <div className="input-block">
                              <div>
                                <label
                                  className="input-label"
                                  htmlFor="firstName"
                                  style={{
                                    color:
                                      step1Formik.errors.firstName &&
                                      step1Formik.touched.firstName
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
                                name="firstName"
                                onChange={step1Formik.handleChange}
                                onBlur={step1Formik.handleBlur}
                                value={step1Formik.values.firstName}
                              />
                              {step1Formik.errors.firstName &&
                                step1Formik.touched.firstName && (
                                  <div
                                    className="error-msg"
                                    style={{
                                      color: "#ff0000",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {step1Formik.errors.firstName}
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
                                      step1Formik.errors.lastName &&
                                      step1Formik.touched.lastName
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
                                name="lastName"
                                onChange={step1Formik.handleChange}
                                onBlur={step1Formik.handleBlur}
                                value={step1Formik.values.lastName}
                              />
                              {step1Formik.errors.lastName &&
                                step1Formik.touched.lastName && (
                                  <div
                                    className="error-msg"
                                    style={{
                                      color: "#ff0000",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {step1Formik.errors.lastName}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="input-row">
                            <div className="input-block">
                              <div>
                                <label
                                  className="input-label"
                                  htmlFor="phoneNumber"
                                  style={{
                                    color:
                                      step1Formik.errors.phoneNumber &&
                                      step1Formik.touched.phoneNumber
                                        ? "#ff0000"
                                        : "black",
                                  }}
                                >
                                  Phone Number
                                </label>
                              </div>
                              <div className="phone-input-wrapper">
                                <ReactFlagsSelect
                                  className="react-flag-dropdown"
                                  selected={select}
                                  onSelect={(code) => {
                                    setSelect(code);
                                  }}
                                  showSelectedLabel={true}
                                  showSecondarySelectedLabel={false}
                                  customLabels={countryLabels}
                                  countries={Object.keys(countryLabels)}
                                  searchPlaceholder="Search"
                                  searchable={true}
                                />
                                <input
                                  data-field="phone_number"
                                  type="text"
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  onChange={step1Formik.handleChange}
                                  onBlur={step1Formik.handleBlur}
                                  value={step1Formik.values.phoneNumber}
                                />
                              </div>

                              {step1Formik.errors.phoneNumber &&
                                step1Formik.touched.phoneNumber && (
                                  <div
                                    className="error-msg"
                                    style={{
                                      color: "#ff0000",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {step1Formik.errors.phoneNumber}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="input-row">
                            <div className="input-block">
                              <div>
                                <label
                                  className="input-label"
                                  htmlFor="email"
                                  style={{
                                    color:
                                      step1Formik.errors.email &&
                                      step1Formik.touched.email
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
                                onChange={step1Formik.handleChange}
                                onBlur={step1Formik.handleBlur}
                                value={step1Formik.values.email}
                              />
                              {step1Formik.errors.email &&
                                step1Formik.touched.email && (
                                  <div
                                    className="error-msg"
                                    style={{
                                      color: "#ff0000",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {step1Formik.errors.email}
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                        <div className="support-email-banner">
                          <p>
                            Prefer email? Reach us at{" "}
                            <a
                              href="mailto:hello@decentro.tech"
                              target="_blank"
                              rel="noreferrer"
                            >
                              hello@decentro.tech
                            </a>
                          </p>
                        </div>
                        <div className="submit-container">
                          <button
                            id="signupStep1"
                            className={`submit ${
                              !step1Formik.dirty || !step1Formik.isValid
                                ? "disabled"
                                : ""
                            }`}
                            type="submit"
                            disabled={
                              !step1Formik.dirty || !step1Formik.isValid
                            }
                          >
                            Next
                          </button>
                        </div>
                      </form>
                    )}
                    {showSecondForm && (
                      <form onSubmit={step2Formik.handleSubmit}>
                        <div className="inputs">
                          <div className="input-row">
                            <div className="input-block">
                              <div>
                                <label
                                  className="input-label"
                                  htmlFor="companyName"
                                  style={{
                                    color:
                                      step2Formik.errors.companyName &&
                                      step2Formik.touched.companyName
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
                                name="companyName"
                                onChange={step2Formik.handleChange}
                                onBlur={step2Formik.handleBlur}
                                value={step2Formik.values.companyName}
                              />
                              {step2Formik.errors.companyName &&
                                step2Formik.touched.companyName && (
                                  <div
                                    className="error-msg"
                                    style={{
                                      color: "#ff0000",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {step2Formik.errors.companyName}
                                  </div>
                                )}
                            </div>
                            <div className="input-block">
                              <div>
                                <label
                                  className="input-label"
                                  htmlFor="registeredName"
                                  style={{
                                    color:
                                      step2Formik.errors.registeredName &&
                                      step2Formik.touched.registeredName
                                        ? "#ff0000"
                                        : "black",
                                  }}
                                >
                                  Registered Company Name
                                </label>
                              </div>
                              <input
                                type="text"
                                id="registeredName"
                                name="registeredName"
                                onChange={step2Formik.handleChange}
                                onBlur={step2Formik.handleBlur}
                                value={step2Formik.values.registeredName}
                              />
                              {step2Formik.errors.registeredName &&
                                step2Formik.touched.registeredName && (
                                  <div
                                    className="error-msg"
                                    style={{
                                      color: "#ff0000",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {step2Formik.errors.registeredName}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="input-row">
                            <div className="input-block">
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "16px",
                                }}
                              >
                                <label
                                  className="input-label"
                                  htmlFor="companyStage"
                                  style={{
                                    color:
                                      step2Formik.errors.companyStage &&
                                      step2Formik.touched.companyStage
                                        ? "#ff0000"
                                        : "black",
                                  }}
                                >
                                  Company Stage
                                </label>
                                <div
                                  className="reference-section-stage"
                                  style={{
                                    overflow: "hidden",
                                  }}
                                >
                                  <select
                                    id="companyStage"
                                    name="companyStage"
                                    onChange={step2Formik.handleChange}
                                    onBlur={step2Formik.handleBlur}
                                    value={step2Formik.values.companyStage}
                                    className="reference-input-wrapper"
                                    style={{
                                      border: "none",
                                      outline: "none",
                                    }}
                                  >
                                    <option value="" disabled>
                                      Select an option
                                    </option>
                                    {stages.map((stage) => {
                                      return (
                                        <option key={stage.id} value={stage.id}>
                                          {stage.name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                                {step2Formik.errors.companyStage &&
                                  step2Formik.touched.companyStage && (
                                    <div
                                      className="error-msg"
                                      style={{
                                        color: "#ff0000",
                                        marginTop: "10px",
                                      }}
                                    >
                                      {step2Formik.errors.companyStage}
                                    </div>
                                  )}
                              </div>
                            </div>

                            <div className="input-block">
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "16px",
                                }}
                              >
                                <label
                                  className="input-label"
                                  htmlFor="companyLocation"
                                  style={{
                                    color:
                                      step2Formik.errors.companyLocation &&
                                      step2Formik.touched.companyLocation
                                        ? "#ff0000"
                                        : "black",
                                  }}
                                >
                                  Company based out of
                                </label>
                                <div
                                  className="reference-section-stage"
                                  style={{
                                    overflow: "hidden",
                                  }}
                                >
                                  <select
                                    id="companyLocation"
                                    name="companyLocation"
                                    onChange={step2Formik.handleChange}
                                    onBlur={step2Formik.handleBlur}
                                    value={step2Formik.values.companyLocation}
                                    className="reference-input-wrapper"
                                    style={{
                                      border: "none",
                                      outline: "none",
                                    }}
                                  >
                                    <option value="" disabled>
                                      Select an option
                                    </option>
                                    {cities.map((city) => {
                                      return (
                                        <option key={city.id} value={city.id}>
                                          {city.name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                                {step2Formik.errors.companyLocation &&
                                  step2Formik.touched.companyLocation && (
                                    <div
                                      className="error-msg"
                                      style={{
                                        color: "#ff0000",
                                        marginTop: "10px",
                                      }}
                                    >
                                      {step2Formik.errors.companyLocation}
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>

                          <div className="input-column">
                            <label
                              className="input-label"
                              style={{
                                color:
                                  step2Formik.errors.products &&
                                  step2Formik.touched.products
                                    ? "#ff0000"
                                    : "black",
                                fontWeight: "500",
                                fontSize: "18px",
                                lineHeight: "24px",
                              }}
                            >
                              Which are the products you’d like to explore?
                              <span
                                style={{
                                  color: "#ff0000",
                                  marginLeft: "5px",
                                }}
                              >
                                *
                              </span>
                            </label>

                            <div
                              className="product-list"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "30px",
                                marginTop: "20px",
                              }}
                            >
                              <div
                                className="flow-products prod-col product-column"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  flex: "1",
                                  gap: "20px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <div
                                  className="product-image"
                                  style={{
                                    maxWidth: "100px",
                                    margin: "10px 10px",
                                  }}
                                >
                                  <img
                                    src="/images/icons/flow-active-rebrand.svg"
                                    style={{
                                      height: "40px",
                                    }}
                                  />
                                </div>
                                {products.map((product) => (
                                  <div key={product.id}>
                                    <label
                                      className="input-label"
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: "10px",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        name="products"
                                        value={product.id}
                                        onChange={(e) =>
                                          handleProductChange(e, "products")
                                        }
                                        checked={step2Formik.values.products.includes(
                                          product.id
                                        )}
                                        className="custom-checkbox"
                                      />
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "flex-start",
                                          gap: "10px",
                                        }}
                                      >
                                        <div className="prod-title">
                                          {product.name}
                                        </div>
                                        {product?.extraText && (
                                          <p
                                            className="product-extra-text"
                                            style={{
                                              fontSize: "12px",
                                              fontWeight: "500",
                                            }}
                                          >
                                            {product.extraText}
                                          </p>
                                        )}
                                        <p className="product-desc">
                                          {product.description}
                                        </p>
                                      </div>
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div
                                className="flow-products prod-col product-column"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  flex: "1",
                                  gap: "20px",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <div
                                  className="product-image"
                                  style={{
                                    maxWidth: "100px",
                                    margin: "10px 10px",
                                  }}
                                >
                                  <img
                                    src="/images/icons/fabric-active-rebrand.svg"
                                    style={{
                                      height: "40px",
                                    }}
                                  />
                                </div>
                                {productsFabric.map((product) => (
                                  <div key={product.id}>
                                    <label
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: "10px",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        name="productsFabric"
                                        value={product.id}
                                        onChange={(e) =>
                                          handleProductChange(
                                            e,
                                            "productsFabric"
                                          )
                                        }
                                        checked={step2Formik.values.productsFabric.includes(
                                          product.id
                                        )}
                                        className="custom-checkbox"
                                      />
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "flex-start",
                                          gap: "10px",
                                        }}
                                      >
                                        <div className="prod-title">
                                          {product.name}
                                        </div>
                                        <p className="product-desc">
                                          {product.description}
                                        </p>
                                      </div>
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* <div className="newsletter-subscription-container">
                            <label className="subscription-container">
                              Get all the latest news from Fintech World in your
                              Inbox
                              <input
                                type="checkbox"
                                id="newsletterInput"
                                name="newsletter-input"
                                value="false"
                                defaultChecked="true"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div> */}
                        </div>
                        <div className="support-email-banner">
                          <p>
                            Prefer email? Reach us at{" "}
                            <a
                              href="mailto:hello@decentro.tech"
                              target="_blank"
                              rel="noreferrer"
                            >
                              hello@decentro.tech
                            </a>
                          </p>
                        </div>
                        <div className="submit-container">
                          <button
                            className="submit secondary-prev-btn"
                            type="button"
                            onClick={handleBackToFirstForm}
                          >
                            Back
                          </button>
                          <button
                            id="onboardMe"
                            className={`submit ${
                              !step2Formik.dirty || !step2Formik.isValid
                                ? "disabled"
                                : ""
                            }`}
                            type="submit"
                            // disabled={
                            //   !step2Formik.dirty || !step2Formik.isValid
                            // }
                            disabled={
                              !step2Formik.dirty ||
                              !step2Formik.isValid ||
                              isLoading
                            }
                          >
                            {isLoading ? "Loading..." : "Onboard Me"}
                          </button>
                        </div>
                        <div className="back-button"></div>
                      </form>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="snackbar"></div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-58TJJ42"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </React.Fragment>
  );
};

export default Signup;
