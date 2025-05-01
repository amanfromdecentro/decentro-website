import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import ProductBanner from "../../../components/product-banner/product-banner";
import dynamic from "next/dynamic";

const UseCases = dynamic(
    () => import("../../../components/use-cases/use-cases"),
    {
        loading: () => <p>Loading...</p>,
    }
);

const BulletPointsAndTextBlock = dynamic(
    () =>
        import(
            "../../../components/bullet-points-text-block/bullet-points-text-block"
        ),
    {
        loading: () => <p>Loading...</p>,
    }
);

const RecommendedPages = dynamic(
    () => import("../../../components/recommended-pages/recommended-pages"),
    {
        loading: () => <p>Loading...</p>,
    }
);

const TextAndButtonBannerTransparent = dynamic(
    () =>
        import(
            "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent"
        ),
    {
        loading: () => <p>Loading...</p>,
    }
);

const InlineImageTextMap = dynamic(
    () =>
        import("../../../components/inline-image-text-map/inline-image-text-map"),
    {
        loading: () => <p>Loading...</p>,
    }
);

const ResourcesMethodology = dynamic(
    () =>
        import("../../../components/resources-methodology/resources-methodology"),
    {
        loading: () => <p>Loading...</p>,
    }
);

const TableOfContents = dynamic(
    () => import("../../../components/table-of-contents/table-of-contents"),
    {
        loading: () => <p>Loading...</p>,
    }
);

const InlineImageAndParagraph = dynamic(
    () =>
        import(
            "../../../components/inline-image-and-paragraph/inline-image-and-paragraph"
        ),
    {
        loading: () => <p>Loading...</p>,
    }
);

import requests from "../../../requests";
import styles from "../../../styles/page-styles/vendor-onboarding.module.scss";

import { useRouter } from "next/router";
import Head from "next/head";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import DescriptiveItemList from "../../../components/descriptive-item-list/descriptive-item-list";
import urls from "../../../urls";
import ItemList from "../../../components/item-list/item-list";
import CutoutItems from "../../../components/cutout-items/cutout-items";
import MultiColumnBlock from "../../../components/multi-column-block/multi-column-block";
import CommonTable from "../../../components/table/table";
import Image from "next/image";

const VendorOnboarding = () => {

    const metaData = {
        metaTitle: "Vendor Onboarding APIs | Verify Udyam, PAN, GSTIN, and More",
        canonical: urls.RESOURCES_VENDOR_ONBOARDING,
        metaDescription:
            "Streamline vendor onboarding with Decentro's robust APIs. Ensure compliance, prevent fraud, and onboard vendors faster with secure document verification for PAN, GSTIN, Udyam, and more.",
        metaKeywords: "",
        ogTitle: "Vendor Onboarding APIs | Fast, efficient, and secure verification and onboarding flow for your vendors",
        ogImage: "",
    }

    const bannerData = {
        heading: "<span class='highlighted-heading'>Vendor Onboarding APIs</span>",
        tagline: "Fast, efficient, and secure verification and onboarding flow for your vendors",
        buttonText: "Explore Now",
        newTab: false,
        buttonLink: requests.SIGNUP,
        imageSrc: "/images/resources/vendor-onboarding/vendor-onboarding-hero-banner.svg",
        altText: "Prefill APIs",
        DBackground: true,
    }

    const tableOfContentsData = [
        { text: "What is Vendor Onboarding?", id: "introduction" },
        {
            text: "Why is Vendor Onboarding Important?",
            id: "whyVendorOnboardingisImportant",
        },
        {
            text: "Core Features",
            id: "coreFeatures",
        },
        {
            text: "Decentro’s Advanced Vendor Onboarding Offerings",
            id: "advancedOnboardingOfferings",
        },
        {
            text: "How Can Vendor Onboarding APIs Help Your Business?",
            id: "helpYourBusiness",
        },
        {
            text: "Where You Can Use It",
            id: "whereToUse",
        },
        {
            text: "How Can Decentro Help?",
            id: "howCanDecentroHelp",
        },
        {
            text: "Frequently Asked Questions",
            id: "commonlyAskedQuestions",
        },
    ]

    const inlineImageAndParagraphData = {
        headingLight: "What is ",
        headingBold: "Vendor Onboarding?",
        text: "Vendor onboarding is integrating new vendors or service providers into a company’s ecosystem. An efficient and secure vendor onboarding flow can help propel businesses ahead by optimising the vendor due diligence and maximising the value they derive from these partnerships. As business ecosystems grow and evolve, attracting the right vendors becomes critical for success.",
        imageSrc: "/images/resources/vendor-onboarding/what-is-vendor-onboarding.svg",
    };

    const whyVendorOnboarding = {
        heading:
            "Why is  <span class='highlighted-subsection-header'>Vendor Onboarding</span> Important?",
        tagline: "A streamlined and secure vendor onboarding flow is a strategic investment that optimises the vendor due diligence and maximises the value of partnerships. Vendor onboarding ensures they meet the organisation’s needs while positioning them to excel in their roles.",
        items: [
            {
                imageSrc: "/images/resources/vendor-onboarding/strong-relationship.svg",
                title: "Builds Strong Supplier Relationships",
                description:
                    "Verify the credentials of CAs for loan processing and auditing purposes.",
            },
            {
                imageSrc: "/images/resources/vendor-onboarding/ensure-compliance.svg",

                title: "Ensures Compliance, Reducing Risks",
                description:
                    "Ensure the legitimacy of CA qualifications during the hiring process.",
            },
            {
                imageSrc: "/images/resources/vendor-onboarding/efficiency-collaboration.svg",

                title: "Boosts Efficiency & Collaboration",
                description:
                    "To validate customer information and manage policyholders’ records.",
            },
            {
                imageSrc: "/images/resources/vendor-onboarding/quality-performace.svg",

                title: "Drives Quality & Performance",
                description:
                    "Prevent fraudulent activities by confirming the authenticity of CA credentials.",
            },
            {
                imageSrc: "/images/resources/vendor-onboarding/attract-vendors.svg",

                title: "Attracts Top Vendors",
                description:
                    "Prevent fraudulent activities by confirming the authenticity of CA credentials.",
            },
        ],
    };

    const cutoutItemsData = {
        rowsList: [
            {
                title:
                    "Core <strong>Features</strong>",
                list: [
                    {
                        imageSrc: "/images/resources/vendor-onboarding/validate-bussiness.svg",
                        title: "Validate Business IDs",
                        description: "Validate Business Documents",
                    },
                    {
                        imageSrc: "/images/resources/vendor-onboarding/udyam-suite.svg",
                        title: "Udyam Suite",
                        description: "Search, Register and Validate Udyam",
                    },
                    {
                        imageSrc: "/images/resources/vendor-onboarding/verify-shop.svg",
                        title: "Verify Shop Establishment",
                        description: "Validate Shop Establishment details.",
                    },
                ],
            },
        ]
    }

    const learnMoreData = {
        text: "",
        ctaButtonText: "View Product Guide",
        newTab: true,
        ctaButtonLink:
            "https://docs.decentro.tech/docs/kyc-and-onboarding-identities#-id-converters",
    };

    const tableData = [
        { cell1: 'PAN', cell2: 'A 10-character alphanumeric PAN number' },
        { cell1: 'GSTIN', cell2: 'A 10-character alphanumeric PAN number' },
        { cell1: 'CIN', cell2: 'Corporate Identification Number provided by MCA' },
        { cell1: 'DIN', cell2: 'Director Identification Number (DIN)' },
        { cell1: 'Udyam', cell2: 'Another unique registration number for Micro, Small, and Medium Enterprises (MSMEs) is provided by the Indian Ministry of MSMEs' },
        { cell1: 'Udyog Aadhaar', cell2: '12-digit unique identification number provided by the Indian Ministry of MSMEs' },
        { cell1: 'FLLPIN', cell2: 'Foreign Limited Liability Partnership Identification Number issued to any foreign organisation incorporated as an LLP in India' },
        { cell1: 'LLPIN', cell2: 'Limited Liability Partnership Identification number issued to any organisation incorporated as an LLP in India' },
        { cell1: 'FCRN', cell2: '6-character Foreign Company Registration Number' },
        { cell1: 'FSSAI', cell2: 'The registration number provided by the Food Safety and Standards Authority of India' },
    ];

    const MultiColumnBlockData = {
        title: "Decentro’s Advanced <strong>Vendor Onboarding</strong> Offerings",
        suiteList: [
            {
                title:
                    "Validate APIs",
                tagline:
                    "Integrate with Decentro to verify IDs or extract KYC data seamlessly—no document uploads, just frictionless onboarding.",
                midComponent: <CommonTable data={tableData} />
            },
            {
                title:
                    "Udyam Suite",
                tagline:
                    "Integrate with Decentro to validate Udyam registrations effortlessly—no paperwork, just seamless MSME onboarding.",
                midComponent: <Image
                    src="/images/resources/vendor-onboarding/vendor-onboarding-suite.svg"
                    alt="vendor-onboarding-suite"
                    layout="responsive"
                    width={250}
                    height={250}
                />
            },
            {
                title:
                    "Shop Establishment API",
                tagline:
                    "Verify shop establishment details effortlessly with Decentro’s API—input state code, ID, and category for instant validation.",
            },
        ],
    };

    const helpBusiness = {
        heading:
            "How Can <span class='highlighted-subsection-header'>Vendor Onboarding APIs </span> Help Your Business?",
        tagline: "",
        items: [
            {
                imageSrc: "/images/icons/secure.svg",
                title: "Regulatory<br/>Compliance",
                description:
                    "Ensure all your vendors comply with the industry and government-mandated regulatory requirements.",
            },
            {
                imageSrc: "/images/icons/faster-onboarding.svg",
                title: "Faster<br/>Onboarding",
                description:
                    "Do faster digital verification of vendor identity documents for a seamless experience with no manual efforts involved.",
            },
            {
                imageSrc: "/images/icons/improved-vendor-relationships.svg",
                title: "Improved Vendor<br/>Relationships",
                description:
                    "Drive stronger collaboration, improving and growing the overall supply chain performance.",
            },
            {
                imageSrc:
                    "/images/resources/prefill-apis/prefill-reduced-cost-icon.svg",
                title: "Reduced Costs &<br/>Increased Efficiency",
                description:
                    "Streamline processes, cut down costs and reduce the time spent on onboarding and managing vendors.",
            },
            {
                imageSrc: "/images/icons/reduced-fraud-risk.svg",
                title: "Reduced<br/>Fraud Risk",
                description:
                    "Avoid fraudulent entities by ensuring they work with credible and verified partners, reducing potential financial and reputational risks.",
            },
            {
                imageSrc: "/images/icons/elevate.svg",
                title: "Improved<br/>Performance",
                description:
                    "Enable high-quality performance from your partners by ensuring vendors matching quality requirements.",
            },
        ],
    };

    const textAndButtonBannerData = {
        text: "",
        ctaButtonText: "Get Started Today",
        newTab: false,
        ctaButtonLink: requests.SIGNUP,
    };

    const employeeOnboarding = {
        headingLight: "E-commerce Platforms",
        headingBold: "",
        text: "Streamline vendor verification to onboard sellers quickly and ensure compliance with marketplace policies.",
        imageSrc: "/images/resources/vendor-onboarding/e-commerce.svg",
        altText: "E-commerce Platforms",
    };

    const employeeOnboarding2 = {
        headingLight: "Logistics & Supply Chain",
        headingBold: "",
        text: "Validate supplier credentials and establish trust for seamless operations across the supply chain.",
        imageSrc: "/images/resources/vendor-onboarding/logistics-supply-chain.svg",
        altText: "Logistics & Supply Chain",
    };

    const employeeOnboarding3 = {
        headingLight: "Banking & Financial Services",
        headingBold: "",
        text: "Accelerate KYC and KYB processes for vendors, ensuring regulatory compliance and secure partnerships.",
        imageSrc: "/images/resources/vendor-onboarding/banking-financial-services.svg",
        altText: "Banking & Financial Services",
    };

    const employeeOnboarding4 = {
        headingLight: "Retail & FMCG",
        headingBold: "",
        text: "Onboard distributors and suppliers efficiently, minimising delays and ensuring document accuracy.",
        imageSrc: "/images/resources/vendor-onboarding/retail-fmcg.svg",
        altText: "Retail & FMCG",
    };

    const employeeOnboarding5 = {
        headingLight: "Government & Public Sector",
        headingBold: "",
        text: "Authenticate MSMEs and contractors for procurement processes, ensuring transparency and trust.",
        imageSrc: "/images/resources/vendor-onboarding/government.svg",
        altText: "Government & Public Sector",
    };

    const textAndButtonBannerData1 = {
        text: "<br/><span>Got Questions?</span>",
        ctaButtonText: "Talk to Our Experts Now!",
        ctaButtonLink: requests.SIGNUP,
    };

    const howCanDecentroHelpData = {
        firstHeadingBold: "Vendor Onboarding APIs ",
        headingLight: "For Your Business",
        // headingBold: "- How Can Decentro Help",
        tagline: "",
        bulletPointsHeader: "How can Decentro help?",
        bulletPoints: [
            {
                text: "Streamlines the verification process for Udyam, GST, and other essential documents.",
            },
            {
                text: "Easy API integration with your existing systems to ensure a smooth onboarding flow.",
            },
            {
                text: "Set specific verification parameters based on your business needs.",
            },
            {
                text: "Enables verification across vast industries with tested results.",
            },
            {
                text: "Verify on the fly while maintaining the accuracy and speed of onboarding.",
            },
            {
                text: "Leverage multi-bank architecture in the backend so that unexpected downtimes, black swan events, or volume spikes will not impact your business.",
            },
        ],
        textInBoxList: [
            {
                textInBox: "For Developers",
                linkText: "API Documentation",
                link: "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-employment-verification",
            },
        ],
    };

    const extraCTA = {
        text: "<span>Robust and efficient APIs</span> to prevent fraud before it strikes.",
        ctaButtonText: "Sign Up!",
        newTab: true,
        ctaButtonLink: "/signup",
    }

    const accordionData = [
        {
            query: "What are Vendor Onboarding APIs?",
            solution: "Vendor Onboarding APIs are tools that help businesses validate and verify vendor credentials such as business IDs, Udyam registrations, and shop establishment details to ensure a secure and efficient onboarding process.",
            bulletPoints: [],
        },
        {
            query: "Why should my business use Vendor Onboarding APIs?",
            solution: "These APIs streamline the onboarding process, ensuring faster verification, reducing manual effort, enhancing compliance, and minimising fraud risks, all while improving vendor relationships and operational efficiency.",
            bulletPoints: [],
        },
        {
            query: "What documents can be verified using Vendor Onboarding APIs?",
            solution: "Vendor Onboarding APIs support document verification for PAN, GSTIN, CIN, DIN, Udyam, Udyog Aadhaar, LLPIN, FLLPIN, FCRN, and FSSAI, among others.",
            bulletPoints: [],
        },
        {
            query: "Can the APIs be integrated with my existing systems?",
            solution: "Yes, Decentro's APIs are designed for easy integration with your existing systems, enabling seamless vendor onboarding without disrupting your workflows.",
            bulletPoints: [],
        },
        {
            query: "What industries can benefit from Vendor Onboarding APIs?",
            solution: "Industries such as e-commerce, logistics, banking, retail, and the public sector can use these APIs to onboard vendors efficiently and ensure compliance.",
            bulletPoints: [],
        },
        {
            query: "How does the Udyam Suite help my business?",
            solution: "The Udyam Suite allows businesses to search, register, and validate Udyam details for MSMEs, ensuring compliance and unlocking access to government benefits and schemes for their vendors.",
            bulletPoints: [],
        },
        {
            query: "How do these APIs help in fraud prevention?",
            solution: "Vendor Onboarding APIs validate key vendor credentials, ensuring they are legitimate and meet regulatory requirements. Thus, they reduce the risk of onboarding fraudulent entities.",
            bulletPoints: [],
        },
        {
            query: "What is the Shop Establishment API, and how does it work?",
            solution: "The Shop Establishment API verifies shop establishment details using IDs and other parameters like state code and category, ensuring the authenticity of vendors.",
            bulletPoints: [],
        },
        {
            query: "How does the system handle downtime or high traffic volumes?",
            solution: "Decentro's APIs leverage a multi-bank architecture, ensuring continuous operations even during downtimes, unexpected events, or traffic spikes.",
            bulletPoints: [],
        },
        {
            query: "How can I get started with Vendor Onboarding APIs?",
            solution: "Simply sign up on our platform, integrate the APIs into your system, and begin verifying and onboarding vendors efficiently. Contact our experts for a demo or assistance.",
            bulletPoints: [],
        }
    ];

    const recommendedPagesData = [
        {
            title: "PAN Verification",
            description:
                "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time. ",
            pageLink: "/resources/pan-verification-api",
            imageSrc: "/images/resources/pan-verification/banner.svg",
        },
        {
            title: "Digilocker",
            description:
                "Remove the dependency on physical documents and power the sharing of verified electronic documents helping in seamless customer onboarding.",
            pageLink: "/resources/goods-and-services-tax-gst-api/",
            imageSrc: "/images/resources/gst.svg",
        },
    ];


    const router = useRouter();
    const canonicalUrl = `https://decentro.tech${router.asPath}`;



    return (
        <React.Fragment>
            <Head>
                <title>{metaData.metaTitle}</title>
                <link rel="canonical" href={metaData.canonical} />
                <meta name="description" content={metaData.metaDescription} />
                <meta name="keywords" content={metaData.metaKeywords} />
                <meta property="og:title" content={metaData.ogTitle} />
                <meta property="og:image" content={metaData.ogImage} />
            </Head>
            {/* {bannerData && ( */}
            <div className={styles["phone-number-intelligence"]}>
                <ProductBanner data={bannerData} />
                <TableOfContents data={tableOfContentsData} />

                <InlineImageAndParagraph
                    data={inlineImageAndParagraphData}
                    reverse={false}
                    id={"introduction"}
                />
                <ItemList data={whyVendorOnboarding} id={"whyVendorOnboardingisImportant"} />

                <CutoutItems data={cutoutItemsData} id={"coreFeatures"} />
                <TextAndButtonBannerTransparent data={learnMoreData} />

                <MultiColumnBlock id="advancedOnboardingOfferings" data={MultiColumnBlockData} />

                <div>
                    <div id="helpYourBusiness">
                        <DescriptiveItemList data={helpBusiness} />
                    </div>

                    <TextAndButtonBannerTransparent data={textAndButtonBannerData} />

                    <div
                        className={styles["employee-verification-methods"]}
                        id="whereToUse"
                    >
                        <h2>
                            Where You Can <span>Use It</span>
                        </h2>
                        <div className={styles["employee-verification-methods-content"]}>
                            <InlineImageAndParagraph
                                zoom={true}
                                data={employeeOnboarding}
                                reverse={false}
                                boldBlack
                            />
                            <InlineImageAndParagraph
                                zoom={true}
                                data={employeeOnboarding2}
                                reverse={true}
                                boldBlack
                            />
                            <InlineImageAndParagraph
                                zoom={true}
                                data={employeeOnboarding3}
                                reverse={false}
                                boldBlack
                            />
                            <InlineImageAndParagraph
                                zoom={true}
                                data={employeeOnboarding4}
                                reverse={true}
                                boldBlack
                            />
                            <InlineImageAndParagraph
                                zoom={true}
                                data={employeeOnboarding5}
                                reverse={false}
                                boldBlack
                            />
                        </div>
                    </div>

                    <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />

                    <BulletPointsAndTextBlock
                        id="howCanDecentroHelp"
                        data={howCanDecentroHelpData}
                    />

                    <TextAndButtonBannerTransparent data={extraCTA} />

                    <div
                        className={styles["commonly-asked-questions"]}
                        id="commonlyAskedQuestions"
                    >
                        <h2>
                            Frequently Asked&nbsp;<span>Questions</span>
                        </h2>
                        <div className={styles["accordion-list"]}>
                            {accordionData.map(function (object, i) {
                                return <FaqAccordion key={i} data={object} />;
                            })}
                        </div>
                    </div>

                    <RecommendedPages data={recommendedPagesData} />
                </div>
            </div>
            {/* )} */}
        </React.Fragment>
    );
};

export default VendorOnboarding;
