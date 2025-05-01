import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import requests from "../../requests";

import ProductBanner from "../../components/product-banner/product-banner";

const InlineImageAndParagraph = dynamic(() =>
  import(
    "../../components/inline-image-and-paragraph/inline-image-and-paragraph"
  )
);
const MemberBox = dynamic(() =>
  import("../../components/member-box/member-box")
);
const MentorBox = dynamic(() =>
  import("../../components/mentor-box/mentor-box")
);
const TestimonialsCarousel = dynamic(() =>
  import("../../components/testimonials-carousel/testimonials-carousel")
);
const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import styles from "../../styles/page-styles/aboutus.module.scss";

const AboutUs = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Build the <br/><span class='highlighted-heading'>Future of Fintech</span>",
    tagline:
      "Helping Brands Launch their Fintech 10X Faster with Open Banking APIs and SDKs",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/about-us.mp4",
    video: true,
  };
  const inlineImageAndParagraphData = {
    headingLight: "Our",
    headingBold: "Vision",
    text: `Imagine the possibilities in business if we remove >90% of the friction in the flow of money and financial data.<br/><br/>Decentro is our common brand name that we use to serve our customers as a group, where you can integrate with desired banking APIs or SDKs and then go live within a few days—no need to run around for 5+ months to integrate with multiple banking partners for launching your products. We also have an internal entity under Decentro group, as a <a class='inner-text-link' href='https://decentro.tech/payment-aggregator' target='_blank'>RBI-authorised online payment aggregator</strong></a> that helps with payment collections & settlements.<br/><br/>We are doing the initial hard work of all those legacy integrations to customise and make the desired modules available in the simplest way with the highest degree of automation.`,
    imageSrc: "/images/about-us/our-vision.svg",
  };
  const inlineTextAndButtonData = {
    text: "We are a group of people who can help you reach the next level of financial innovation. Join us!",
    buttonText: "Check Openings",
    newTab: true,
    buttonLink: "https://angel.co/decentro/jobs",
  };

  const memberData = [
    {
      firstName: "Rohit",
      lastName: "Taneja",
      designation: "Co-Founder & CEO",
      description:
        "Fintech entrepreneur with experience across payments, banking & security. Graduated from IIT Delhi. Worked at Sony Japan. Founded Mypoolin and sold it to Wibmo and then PayU.",
      imageSrc: "/images/about-us/Rohit.png",
      altText: "rohit-taneja",
      linkedInLink: "https://www.linkedin.com/in/rohit-taneja-69b30b13/",
    },
    {
      firstName: "Pratik",
      lastName: "Daudkhane",
      designation: "Co-Founder",
      description:
        "Ex-Venture Capitalist from Guild Capital with 6+ years of experience in data analytics, finance and investment banking. Earlier Analyst at Tresvista, Hannam & Partners.",
      imageSrc: "/images/about-us/Pratik.png",
      altText: "pratik-daudkhane",
      linkedInLink: "https://www.linkedin.com/in/pratikdaudkhane",
    },
    {
      firstName: "Shobhit",
      lastName: "Verma",
      designation: "CTO",
      description:
        "A solution generator who loves engineering. He has 9 years of experience in his trade and in his personal life loves to cook and play badminton. In his past, he was a core team member in Mypoolin (sold to Wibmo and then PayU).",
      imageSrc: "/images/about-us/Shobhit.png",
      altText: "shobhit-verma",
      linkedInLink: "https://www.linkedin.com/in/shobhit-verma-29781a4a/",
    },
    {
      firstName: "Raunak",
      lastName: "Dembla",
      designation: "Business Director and Evangelist",
      description:
        "Sales and operations professional with 5+ years of experience in the internet and commerce domain. Handled the international sales and expansion for Perpule POS across the merchants in APAC",
      imageSrc: "/images/about-us/Raunak.png",
      altText: "raunak-dembla",
      linkedInLink: "https://www.linkedin.com/in/raunak-dembla-993ba92b/",
    },
    {
      firstName: "Vaibhav",
      lastName: "Jain",
      designation: "SVP - Business & Growth",
      description:
        "Vaibhav has 14+ years of experience across Consulting, Fintech & SaaS industries in Enterprise/B2B sales, business development & strategy roles.",
      imageSrc: "/images/about-us/vaibhav.webp",
      altText: "Vaibhav Jain",
      linkedInLink: "https://www.linkedin.com/in/vaibhav-jain-59765515/",
    },
    {
      firstName: "Sachin",
      lastName: "Sharma",
      designation: "VP - Design",
      description:
        "Design thinker with experience in UI/UX, brand strategy, marketing & product design. Worked for MediaAgility, Warner Bros and was a part of the core team of Mypoolin (sold to Wibmo and then PayU)",
      imageSrc: "/images/about-us/Sachin.png",
      altText: "sachin-sharma",
      linkedInLink: "https://www.linkedin.com/in/iamsachinsharma/",
    },
    {
      firstName: "Saksham",
      lastName: "Shubham",
      designation: "Head of Business - APAC",
      description:
        "Business enthusiast and ex-cofounder who has scaled 3 different startups with a total experience of 8+ years. Previously worked at Grab as Regional Head in Singapore, overlooking entire SEA market.",
      imageSrc: "/images/about-us/Saksham.png",
      altText: "saksham-shumbham",
      linkedInLink: "https://www.linkedin.com/in/sakshamshubham/",
    },
    {
      firstName: "Varsha",
      lastName: "Deiveegan",
      designation: "General Counsel and Compliance Head",
      description:
        "Seasoned lawyer with 7+ years of experience across law firms, litigation and in-house roles. Previously, set up and led the legal function at Meesho.",
      imageSrc: "/images/about-us/varsha.webp",
      altText: "Varsha Deiveegan",
      linkedInLink: "https://www.linkedin.com/in/varsha-deiveegan/",
    },
    {
      firstName: "Maulik",
      lastName: "Shah",
      designation: "Director - Strategy & Finance",
      description:
        "Maulik leads the strategy & finance function at Decentro. He is a ICAI certified Chartered Accountant and has worked with Deloitte in the past.",
      imageSrc: "/images/about-us/maulik.png",
      altText: "Maulik Shah",
      linkedInLink: "https://www.linkedin.com/in/maulik08/",
    },
    {
      firstName: "Seep",
      lastName: "Miglani",
      designation: "Head-HR & EA",
      description:
        "Dynamic HR and executive assistant with over 6 years of experience in administrating talent acquisition, orientation & on-boarding, training & development, and more.",
      imageSrc: "/images/about-us/Seep.png",
      altText: "seep-miglani",
      linkedInLink: "https://www.linkedin.com/in/seepmiglani/",
    },
    {
      firstName: "Mrudav",
      lastName: "Shukla",
      designation: "Engineering Manager",
      description:
        "Full stack developer with strong fundamentals of coding frameworks and logic. Capgemini star performer with their BFSI customers. IBM & Oracle certified developer.",
      imageSrc: "/images/about-us/Mrudav.png",
      altText: "mrudav-shukla",
      linkedInLink: "https://www.linkedin.com/in/mrudavshukla/",
    },
    {
      firstName: "Anish",
      lastName: "Pisharody",
      designation: "Director - Operations",
      description:
        "Anish is a results-oriented leader with 14+ years’ experience in driving large scale business operations. He champions clear goals, ensuring team alignment and organisational success.",
      imageSrc: "/images/about-us/anish.png",
      altText: "Anish-Pisharody",
      linkedInLink: "https://www.linkedin.com/in/anish-pisharody-6a69abb8",
    },
  ];

  const mentorsAdvisorsData = [
    {
      firstName: "Gaurav",
      lastName: "Sharma",
      designation: "Founder, Atlantis Tech",
      description:
        "Internet Entrepreneur with operating experience in startups, fintechs, and global banks across 4 countries",
      imageSrc: "/images/about-us/Gaurav.jpeg",
      altText: "gaurav-sharma",
      // linkedInLink: "https://www.linkedin.com/in/gauravsharma1978/",
    },
    {
      firstName: "Ravi",
      lastName: "Kaushik",
      designation:
        "Executive Director - Head of Asia Investments, Flourish Ventures",
      description:
        "Ravi is the Head of Asia Investments at Flourish Ventures and leads their investments and portfolio in India and Emerging Asia.",
      imageSrc: "/images/about-us/Ravi.jpeg",
      altText: "ravi-kaushik",
      linkedInLink: "https://www.linkedin.com/in/kaushikravi/",
    },
    {
      firstName: "Siddharth",
      lastName: "Dhamija",
      designation: "Payments & Banking",
      description:
        "22+ years of experience with global leaders in Payments, Ecommerce, Telecom, financial services and more.",
      imageSrc: "/images/about-us/Siddharth.jpeg",
      altText: "siddharth-dhamija",
      linkedInLink: "https://www.linkedin.com/in/siddharthdhamija/",
    },
  ];

  const imageListData = {
    inlineHeading: "<span>Media</span>",
    imagesList1: [
      {
        src: "./images/media-images/moneycontrol-logo.svg",
        alt: "MoneyControl",
        name: "MoneyControl",
        imageLink:
          "https://www.moneycontrol.com/news/technology/zoho-juspay-decentro-get-rbis-nod-to-operate-as-online-payment-aggregators-12212341.html/amp",
      },
      {
        src: "./images/media-images/economicsTime.svg",
        alt: "Economic Times",
        name: "Economic Times",
        imageLink:
          "https://m.economictimes.com/tech/startups/juspay-zoho-and-decentro-join-the-rbis-list-of-payment-aggregators/amp_articleshow/107478332.cms",
      },
      {
        src: "./images/media-images/timesofIndia.svg",
        alt: "Times of India",
        name: "Times of India",
        imageLink:
          "https://timesofindia.indiatimes.com/business/india-business/fintech-infrastructure-company-decentro-acquires-neowise/amp_articleshow/101853296.cms",
      },
      {
        src: "./images/media-images/cxotoday.svg",
        alt: "CXOToday",
        name: "CXOToday",
        imageLink:
          "https://cxotoday.com/press-release/decentro-simplifies-recurring-payments-with-enach-and-upi-autopay-strengthening-indias-subscription-economy-ropes-in-yes-bank-as-its-first-partner-bank/",
      },
      {
        src: "./images/media-images/businessStandard.svg",
        alt: "Business Standard",
        name: "Business Standard",
        imageLink:
          "https://www.business-standard.com/amp/finance/news/with-pa-approval-fintech-firm-decentro-launches-new-payment-stack-124052301300_1.html",
      },
      {
        src: "./images/media-images/etBFSI.svg",
        alt: "ET BFSI",
        name: "ET BFSI",
        imageLink:
          "https://bfsi.economictimes.indiatimes.com/amp/news/fintech/decentro-launches-rbi-compliant-flow-2-0-payment-stack/110325592",
      },
    ],
    imagesList2: [
      {
        src: "./images/media-images/theWeek.svg",
        alt: "The Week",
        name: "The Week",
        imageLink:
          "https://www.theweek.in/wire-updates/business/2024/08/08/dcm62-decentro.amp.html",
      },
      {
        src: "./images/media-images/aniNews.svg",
        alt: "ANI News",
        name: "ANI News",
        imageLink:
          "https://www.aninews.in/news/business/decentro-deepens-global-saas-offering-with-ledgers-for-automated-reconciliation20240808171101/",
      },
      {
        src: "./images/media-images/financialExpress.svg",
        alt: "Financial Express",
        name: "Financial Express",
        imageLink:
          "https://www.financialexpress.com/business/banking-finance-decoding-kycs-tryst-with-regulatory-destiny-3420595/lite/",
      },
      {
        src: "./images/media-images/inc42.svg",
        alt: "Inc42",
        name: "Inc42",
        imageLink:
          "https://inc42.com/buzz/ycombinator-backed-decentro-unveils-modules-to-streamline-recurring-payments/",
      },
      {
        src: "./images/media-images/elets.svg",
        alt: "Elets",
        name: "Elets",
        imageLink:
          "https://bfsi.eletsonline.com/decentro-unveils-indias-first-self-hosted-ckyc-solution-to-align-with-cersais-new-compliance-mandate/",
      },
      {
        src: "./images/media-images/ibsIntelligence.svg",
        alt: "IBS Intelligence",
        name: "IBS Intelligence",
        imageLink:
          "https://ibsintelligence.com/ibsi-news/decentro-launches-2-innovative-modes-for-bank-account-verification/",
      },
    ],
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const openLocation = (strLocation) => {
    window.open("https://www.google.com/maps/place/" + strLocation, "_blank");
  };

  return (
    <div className={styles["about-us"]}>
      <Head>
        <title>About Us | API Banking Platform | Decentro</title>
        <link rel="canonical" href="https://decentro.tech/about" />
        <link
          rel="alternate"
          href="https://decentro.tech/about"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Have questions? Get in touch with us. Here's a little more on Decentro!"
        />
        <meta
          name="keywords"
          content="decentro, about, queries, contact us, questions"
        />
        <meta
          property="og:title"
          content="About Us | API Banking Platform | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <ProductBanner data={bannerData} />
      <InlineImageAndParagraph
        data={inlineImageAndParagraphData}
        reverse={false}
      />
      <div className={styles["meet-our-team"]}>
        <h2>
          Our <span>Leadership</span>
        </h2>
        <p>
          Meet the dynamic and focused founding members driving the future of
          banking and payments.
        </p>
        <div className={styles["team-members"]}>
          <div className={styles["members-row"]}>
            <MemberBox data={memberData} />
          </div>
        </div>
      </div>
      {/* Our Investors Start */}
      <div className={styles["our-investors"]}>
        <h2>
          Our <span>Investors</span>
        </h2>
        <p>Backed by the best in class</p>
        <div className={styles["investors-images"]}>
          <div className={styles["image"]}>
            <img src="./images/about-us/ycombinator.png" alt="y-combinator" />
          </div>
          <div className={styles["image"]}>
            <img
              src="./images/about-us/plug-and-play.png"
              alt="plug-and-play"
            />
          </div>
          <div className={styles["image"]}>
            <img src="./images/about-us/upsparks.png" alt="upsparks" />
          </div>
          <div className={styles["image"]}>
            <img src="./images/about-us/fundersclub.png" alt="funders club" />
          </div>
        </div>
        <div className={styles["investors-images"]}>
          <div className={styles["image"]}>
            <img
              src="./images/about-us/rapyd.png"
              alt="rapyd"
              className="rapyd"
            />
          </div>
          <div className={styles["image"]}>
            <img
              src="./images/about-us/uncorrelated.png"
              alt="uncorrelated"
              className="uncorrelated"
            />
          </div>
          <div className={styles["image"]}>
            <img
              src="./images/about-us/leonisvc.png"
              alt="leonis vc"
              className="leonisvc"
            />
          </div>
          <div className={styles["image"]}>
            <img
              src="./images/about-us/somacapital.png"
              alt="soma capital"
              className="somacapital"
            />
          </div>
        </div>
      </div>
      {/* Our Investors End */}
      {/* Mentor Start  */}
      <div className={styles["mentors-and-advisors"]}>
        <h2>
          Mentors &amp; <span>Advisors</span>
        </h2>
        <p>
          Fintech and banking experts who are at the helm of their respective
          domains
        </p>
        <div className={styles["team-members"]}>
          <div className={styles["members-row"]}>
            <MentorBox data={mentorsAdvisorsData} />
          </div>
        </div>
      </div>
      {/* Mentor End  */}
      {/* Client Image List Start */}
      <div className={`${styles["images-list"]} ${styles["clients"]}`}>
        <h2
          dangerouslySetInnerHTML={{ __html: imageListData.inlineHeading }}
        ></h2>
        <div className={`${styles["content-list"]} ${styles["row1"]}`}>
          {imageListData.imagesList1.map(function (object, i) {
            return (
              <div className={styles["image-content"]} key={i}>
                {object.imageLink ? (
                  <Link href={object.imageLink} target="_blank">
                    <img
                      src={object.src}
                      alt={object.alt ? object.alt : "image"}
                      className={styles[object.name]}
                    />
                  </Link>
                ) : (
                  <img
                    src={object.src}
                    alt={object.alt ? object.alt : "image"}
                    className={styles[object.name]}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className={`${styles["content-list"]} ${styles["row2"]}`}>
          {imageListData.imagesList2.map(function (object, i) {
            return (
              <div className={styles["image-content"]} key={i}>
                {object.imageLink ? (
                  <Link href={object.imageLink} target="_blank">
                    <img
                      src={object.src}
                      alt={object.alt ? object.alt : "image"}
                      className={styles[object.name]}
                    />
                  </Link>
                ) : (
                  <img
                    src={object.src}
                    alt={object.alt ? object.alt : "image"}
                    className={styles[object.name]}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Client Image List End */}

      {/* Work Starts */}
      <div className={styles["where-we-work"]}>
        <h2>
          Where we <span>Work</span> From
        </h2>
        <img
          id="locationMap"
          src="./images/about-us/asiamap.svg"
          alt="office-locations-map"
        />

        <div className={styles["location-container"]}>
          <div
            className={`${styles["location-box"]} ${styles["location-india"]}`}
            onClick={() => {
              openLocation(
                "461J,+Shri+Krishna+Temple+Rd,+Indira+Nagar+1st+Stage,+Stage+1,+Indiranagar,+Bengaluru,+Karnataka+560038"
              );
            }}
          >
            <div className={styles["location-identifier"]}>
              <div className={styles["location-flag"]}>
                <img
                  className={styles["location-flag-img"]}
                  src="./images/about-us/location-pin.svg"
                  alt="indian flag"
                />
              </div>
              <div className={styles["location-name"]}>Bangalore</div>
            </div>
            <div className={styles["address"]}>
              <p>
                461/J, Shri Krishna Temple Rd, Indira Nagar 1st Stage, Stage 1,
                Indiranagar, Bengaluru, Karnataka 560038
              </p>
            </div>
          </div>
          <div
            className={`${styles["location-box"]} ${styles["location-sg"]}`}
            onClick={() => {
              openLocation(
                "https://www.google.com/maps/place/WeWork/@28.5056257,77.0861649,17z/data=!3m1!4b1!4m6!3m5!1s0x390d199e15c24a77:0xea26e07a91d25663!8m2!3d28.505621!4d77.0887398!16s%2Fg%2F11h_71_vwh?entry=ttu"
              );
            }}
          >
            <div className={styles["location-identifier"]}>
              <div className={styles["location-flag"]}>
                <img
                  className={styles["location-flag-img"]}
                  src="./images/about-us/location-pin.svg"
                  alt="indian flag"
                />
              </div>
              <div className={styles["location-name"]}>Delhi-NCR</div>
            </div>
            <div className={styles["address"]}>
              <p>
                WeWork Vi-John Tower, Udyog Vihar, 393, Phase 3, Udyog Vihar,
                Gurugram, HR 122016
              </p>
            </div>
          </div>
          <div
            className={`${styles["location-box"]} ${styles["location-sg"]}`}
            onClick={() => {
              openLocation(
                "https://www.google.com/maps/place/Star+Coworking+-+Coworking+space+in+Andheri+East/@19.1202116,72.867658,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9d1783c8a27:0x70cb56874b600f2e!8m2!3d19.1202065!4d72.8702329!16s%2Fg%2F11p5nvy45h?entry=ttu"
              );
            }}
          >
            <div className={styles["location-identifier"]}>
              <div className={styles["location-flag"]}>
                <img
                  className={styles["location-flag-img"]}
                  src="./images/about-us/location-pin.svg"
                  alt="indian flag"
                />
              </div>
              <div className={styles["location-name"]}>Mumbai</div>
            </div>
            <div className={styles["address"]}>
              <p>
                Star Co-working, HMG House, MIDC Central Rd, near Hotel
                Goldfinch, Andheri East, Mumbai, Maharashtra 400093.
              </p>
            </div>
          </div>
          <div
            className={`${styles["location-box"]} ${styles["location-sg"]}`}
            onClick={() => {
              openLocation(
                "80RR+Fintech+Hub+SG/@1.2800321,103.8493652,3778m/data=!3m1!1e3!4m6!3m5!1s0x31da190df35aaaab:0x20b167b0e060b749!8m2!3d1.2800321!4d103.8493652!16s%2Fg%2F11f5hlfm7m?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
              );
            }}
          >
            <div className={styles["location-identifier"]}>
              <div className={styles["location-flag"]}>
                <img
                  className={styles["location-flag-img"]}
                  src="./images/about-us/location-pin.svg"
                  alt="singapore flag"
                />
              </div>
              <div className={styles["location-name"]}>Singapore</div>
            </div>
            <div className={styles["address"]}>
              <p>
                80RR Fintech Hub SG, 80 Robinson Rd, #08-01, Singapore 068898
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Work Ends */}
      <TestimonialsCarousel />
      <TextAndButtonBanner data={textAndButtonBannerData} />
    </div>
  );
};
export default AboutUs;
