import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import urls from "../../urls";

import ProductBanner from "../../components/product-banner/product-banner";
import requests from "../../requests";

const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const InlineImages = dynamic(() =>
  import("../../components/inline-images/inline-images")
);
const HeaderImageTitles = dynamic(() =>
  import("../../components/header-image-titles/header-image-titles")
);
const InlineCustomDataImage = dynamic(() =>
  import("../../components/inline-custom-data-image/inline-custom-data-image")
);
const ResourcesMethodology = dynamic(() =>
  import("../../components/resources-methodology/resources-methodology")
);
const FaqAccordion = dynamic(() =>
  import("../../components/faq-accordion/faq-accordion")
);

const InfoBoxContainer = dynamic(() =>
  import("../../components/info-box-container/info-box-container")
);
const ClientLogoCarousel = dynamic(() =>
  import("../../components/client-logo-carousel/client-logo-carousel")
);

import styles from "../../styles/page-styles/partners.module.scss";

function Partners() {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<span class='highlighted-heading'>Unlock New Possibilities</span><br/>Grow with our <span class='highlighted-heading'>Partner Program</span>",
    tagline:
      "Provide your customers with the best payments & banking services via Decentro’s Partner Program and earn every time they transact",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: urls.PARTNER_SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/partner-program.mp4",
    video: true,
  };

  const inlineImagesData = {
    heading: "Our Banking <span>Partners</span>",
    tagline: "",
    imageList: [
      {
        imageSrc: "/images/banks/axis.svg",
        altText: "axis",
        imageLink: "",
      },
      {
        imageSrc: "/images/banks/yesbank.svg",
        altText: "yesbank",
        imageLink: "",
      },
      {
        imageSrc: "/images/banks/dbs.svg",
        altText: "dbs",
        imageLink: "",
      },
      {
        imageSrc: "/images/banks/idfc.svg",
        altText: "idfc",
        imageLink: "",
      },
    ],
  };

  const inlineIncubatorsImagesData = {
    heading: "Incubator <span>Partners</span>",
    tagline: "",
    imageList: [
      {
        imageSrc: "/images/partners/IITD.svg",
        altText: "IITD",
        imageLink: "",
      },
      {
        imageSrc: "/images/partners/Pilani.svg",
        altText: "Pilani",
        imageLink: "",
      },
      {
        imageSrc: "/images/partners/100x.svg",
        altText: "100x",
        imageLink: "",
      },
      {
        imageSrc: "/images/partners/afthonia.svg",
        altText: "Afthonia",
        imageLink: "",
      },
      {
        imageSrc: "/images/partners/xlri.svg",
        altText: "Xlri",
        imageLink: "",
      },
    ],
  };

  const textAndButtonBannerData = {
    ctaTitle:
      "Can’t find a relevant <span className='header-section-highlighted'>partner type?</span>",
    ctaDescription: "",
    ctaButtonText: "Let’s Connect",
    ctaButtonLink: urls.PARTNER_SIGNUP,
  };

  const textAndButtonBannerData1 = {
    ctaTitle:
      "Join the Decentro <span className='header-section-highlighted'>Partner Program</span>",
    ctaDescription:
      "Extend premium payment and banking services, generating new revenue for your business.",
    ctaButtonText: "Become a Decentro Partner",
    ctaButtonLink: urls.PARTNER_SIGNUP,
  };

  const infoBoxesData = [
    {
      id: "reseller",
      imageSrc: "/images/partners/reseller.svg",
      title: "Reseller",
      highlightedTitle: "Partner",
      middleInfo:
        "Trusted by Consultants, Web Developers, Freelancers, E-Commerce Platforms, Incubators, and Co-Working Spaces",
      CTAHref: "www.google.com",
      CTAText: "Know More",
    },
    {
      id: "technology",
      imageSrc: "/images/partners/tech.svg",
      title: "Technology",
      highlightedTitle: "Partner",
      middleInfo:
        "Ready to use Payments & Banking solutions built for SaaS Platforms, Web Development, and Software Agencies.",
      CTAHref: "www.google.com",
      CTAText: "Know More",
    },
  ];

  const growWithDecentroData = [
    {
      imageSrc: "/images/partners/collection.svg",
      title: "Top Tier Commissions and Rewards",
    },
    {
      imageSrc: "/images/partners/onboard.svg",
      title: "Quick and Seamless Onboarding",
    },
    {
      imageSrc: "/images/partners/managers.svg",
      title: "Dedicated Account Managers",
    },
    {
      imageSrc: "/images/partners/support.svg",
      title: "Priority Support and Personalized Assistance",
    },
  ];

  const comprehensivePartnerTypeData = [
    {
      id: "reseller",
      imageSrc: "/images/partners/reseller-partner.svg",
      title: "Reseller <span>Partner</span>",
      description:
        "Reseller partners can promote Decentro’s offerings to their connections and earn rewards.",
      bulletPoints: [
        "<span>No cap</span>&nbsp;on rewards",
        "<span>Commission</span>&nbsp;on every transaction made",
      ],
      imageList: [
        {
          imageSrc: "/images/partners/consultants.svg",
          imageTitle: "Consultants",
        },
        {
          imageSrc: "/images/partners/development.svg",
          imageTitle: "Web Developers",
        },
        {
          imageSrc: "/images/partners/influencer.svg",
          imageTitle: "Social Media Influencer",
        },
        {
          imageSrc: "/images/partners/freelancer.svg",
          imageTitle: "Freelancer",
        },
        {
          imageSrc: "/images/partners/ecom.svg",
          imageTitle: "Ecommerce Platforms",
        },
        {
          imageSrc: "/images/partners/customer-journey.svg",
          imageTitle: "Incubators & Co-Working Spaces",
        },
      ],
      cta: true,
      CTAText: "Partner With Us",
      ctaButtonLink: urls.PARTNER_SIGNUP,
    },
    {
      id: "technology",
      imageSrc: "/images/partners/platform-partner.svg",
      title: "Technology <span>Partner</span>",
      description:
        "Enable customers with the best-in-class payments and banking solutions embedded in your platform.",
      bulletPoints: [
        "<span>Customised</span>&nbsp;incentive plan",
        "<span>Priority</span>&nbsp;support",
      ],
      imageList: [
        {
          imageSrc: "/images/partners/saas.svg",
          imageTitle: "SaaS Platforms",
        },
        {
          imageSrc: "/images/partners/development.svg",
          imageTitle: "Web Development & Software Agencies",
        },
      ],
      CTAText: "Partner With Us",
      ctaButtonLink: urls.PARTNER_SIGNUP,
    },
  ];

  const howToPartnerData = [
    {
      imageSrc: "/images/icons/signup.svg",
      header: "Sign Up",
      description: "",
    },
    {
      imageSrc: "/images/partners/refer.svg",
      header: "Refer",
      description: "",
    },
    {
      imageSrc: "/images/partners/kyc.svg",
      header: "KYC & Onboarding",
      description: "",
    },
    {
      imageSrc: "/images/partners/earn.svg",
      header: "Earn",
      description: "",
    },
  ];

  const accordionData = [
    {
      query: "Who can become a Decentro partner?",
      solution:
        "Any individual, proprietary firm, partnership firm (including LLP), or a private limited company can become a Decentro partner",
    },
    {
      query:
        "Why should you choose to be part of the Decentro Partner Program?",
      solution:
        "The Decentro Partner Program is one of India's most rewarding B2B affiliate programs. As a Decentro partner, you not only get to earn unbeatable commissions but also extend the smoothest and most convenient payments and banking experience to your customers.",
    },
    {
      query:
        "How much time does partner onboarding take for the Decentro Partner Program?",
      solution:
        "As soon as you submit the partner referral, you will get a call from us to finalise the KYC details and partnership type.",
    },
    {
      query: "How much can I earn with the Decentro Partner Program?",
      solution:
        "With the Decentro Partner Program, you get paid on a recurring basis for every transaction your affiliate completes with Decentro.  There is no cap on how much you can earn and get rewarded.",
    },
  ];

  const clientLogoData = {
    header: "Incubator <span>Partners</span>",
    clientLogos: [
      {
        imageSrc: "/images/partners/santosh-startup-forum.png",
        altText: "Santosh Startup",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/iitd-incubation-center.png",
        altText: "IIITD Incubation Center",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/startup-reseau.png",
        altText: "Startup Reseau",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/IITD.svg",
        altText: "IITD",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/Pilani.svg",
        altText: "Pilani",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/we-work.svg",
        altText: "WeWork",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/100x.svg",
        altText: "100x",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/fms.svg",
        altText: "FMS",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/afthonia.svg",
        altText: "Afthonia",
        maxWidth: "",
      },
      {
        imageSrc: "/images/partners/xlri.svg",
        altText: "XLRI",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/sanchi.svg",
        altText: "Sanchi",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/the-circle.svg",
        altText: "Circle",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/wadhwani-logo.svg",
        altText: "Wadhwani",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/first-cheque.svg",
        altText: "First Cheque",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/india-quotient.svg",
        altText: "India Quotient",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/hsr-founders-club.svg",
        altText: "HSR Founders Club",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/brinc.svg",
        altText: "Brinc",
        maxWidth: "",
      },
      {
        imageSrc: "/images/clients/wfc.svg",
        altText: "WeFounderCircle",
        maxWidth: "",
      },
    ],
  };

  return (
    <React.Fragment>
      <Head>
        <title>Decentro Partner Program | Enable Your Customers and Earn</title>
        <link rel="canonical" href="https://decentro.tech/partner-program" />
        <link
          rel="alternate"
          href="https://decentro.tech/partner-program"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Earn with Decentro's Partner Program. Offer premium payments & banking services to your customers while unlocking new revenue for your business."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Decentro Partner Program | Enable Your Customers and Earn"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["partners"]}>
        <ProductBanner data={bannerData} />
        <InlineImages data={inlineImagesData} />
        <div className={styles["sectors-section"]} id="sectorsSection">
          <h2>
            Who is the Decentro <span>Partner Program for?</span>
          </h2>
          {/* BOX */}
          <InfoBoxContainer id="info-box" data={infoBoxesData} />

          {/* <HeaderImageTitles data={sectorData} /> */}
        </div>
        <TextAndButtonBanner data={textAndButtonBannerData} />
        <div className={styles["sectors-section"]} id="growWithDecentro">
          <h2>
            Grow Faster with <span>Decentro Partner Program</span>
          </h2>
          {/* <p>You and your customers get</p> */}
          <HeaderImageTitles data={growWithDecentroData} />
        </div>
        <div className={styles["partners-type-section"]}>
          <h2>
            Choose your <span>Partnership Type</span>
          </h2>
          <InlineCustomDataImage
            data={comprehensivePartnerTypeData[0]}
            reverse={true}
          />

          <InlineCustomDataImage data={comprehensivePartnerTypeData[1]} />
          {/* <InlineCustomDataImage data={comprehensivePartnerTypeData[2]} />; */}
        </div>
        <TextAndButtonBanner data={textAndButtonBannerData} />
        <ClientLogoCarousel data={clientLogoData} partnersPage={true} />
        {/* <InlineImages data={inlineIncubatorsImagesData} /> */}
        <div className={styles["partners-type-section"]}>
          <h2>
            How to <span>Partner with Us?</span>
          </h2>
          <ResourcesMethodology
            data={howToPartnerData}
            maxWidth
            noDesc
            // partnerSignup
            itemCount={4}
          />
        </div>
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
        <TextAndButtonBanner data={textAndButtonBannerData1} />
      </div>
    </React.Fragment>
  );
}

export default Partners;
