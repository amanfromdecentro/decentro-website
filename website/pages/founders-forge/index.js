import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import ProductBanner from "../../components/product-banner/product-banner";
import requests from "../../requests";
import urls from "../../urls";

const TextAndButtonBannerGray = dynamic(
  () =>
    import(
      "../../components/text-and-button-banner-gray/text-and-button-banner-gray"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);
const AnimatedCards = dynamic(() =>
  import("../../components/animated-cards/animated-cards")
);
const PersonCard = dynamic(() =>
  import("../../components/person-card/person-card")
);
const InlineImageAndParagraph = dynamic(() =>
  import(
    "../../components/inline-image-and-paragraph/inline-image-and-paragraph"
  )
);
const FaqAccordion = dynamic(() =>
  import("../../components/faq-accordion/faq-accordion")
);
import styles from "../../styles/page-styles/founders-forge.module.scss";

const FoundersForge = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Step into the limelight with <span class='highlighted-heading'>Founders' Forge</span>",
    tagline: "Get mentored by founders and forge your way into Y Combinator",
    buttonText: "Apply for YC24",
    newTab: false,
    buttonLink: requests.YC_APPLICATION_LINK,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/founders-forge.mp4",
    video: true,
    newTab: true,
  };

  const offersData = [
    {
      image: "/images/founders-forge/yc-bootcamp-offer.png",
      title: "YC Bootcamp",
      description:
        "Get expert guidance on refining your business concept, crafting a persuasive application, and understanding the  Y Combinator ethos.",
    },
    {
      image: "/images/founders-forge/application-review-offer.png",
      title: "Application Review",
      description:
        "Receive custom feedback on your application from  Y Combinator alums.",
    },
  ];

  const textAndButtonBannerData = {
    ctaTitle:
      'From Concept to <span className="header-section-highlighted">Unicorn</span>',
    ctaDescription: "Your Y-Combinator Journey Starts Here!",
    ctaButtonText: "Apply for YC24",
    ctaButtonLink: requests.YC_APPLICATION_LINK,
    countdownTimer: false, // If u make this true a countdown timer will be rendered in the component
    targetDate: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000), // Adding 1 day to the current date
    imagePresent: true,
    imageLink: "/images/rocket.svg",
  };

  const mentorDataList = [
    {
      id: 1,
      image: "/images/founders-forge/Rohit.png",
      name: "Rohit Taneja",
      position: "Founder & CEO, Decentro",
      // description:
      //   "Fintech entrepreneur with experience across payments, banking & security. Graduated from IIT Delhi. Worked at Sony Japan. Founded Mypoolin and sold it to Wibmo and then PayU.",
      linkedinLink:
        "https://www.linkedin.com/in/rohit-taneja-69b30b13/?originalSubdomain=in",
    },
    {
      id: 2,
      image: "/images/founders-forge/Pratik.png",
      name: "Pratik Daudkhane",
      position: "Co-Founder, Decentro",
      // description:
      //   "Ex-Venture Capitalist from Guild Capital with 6+ years of experience in data analytics, finance and investment banking. Earlier Analyst at Tresvista, Hannam & Partners.",
      linkedinLink: "https://www.linkedin.com/in/pratikdaudkhane/",
    },
    {
      id: 3,
      image: "/images/founders-forge/Anand-Krishna.png",
      name: "Anand Krishna",
      position: "CEO and Founder, Inkle",
      // description: "US Tax for Startups",
      linkedinLink: "https://www.linkedin.com/in/anand-krishna-9b61a4/",
    },
  ];

  const aceApplication = {
    headingLight: "Ace Your",
    headingBold: "YC Application",
    text: " Ready to make your YC dream a reality? Sign up now to unlock exclusive mentorship, insider tips, and tailored strategies for your YC success.",
    imageSrc: "/images/founders-forge/ace.svg",
    altText: "Ace Your YC Application",
    maxWidth: "800px",
    imageAlignEnd: true,
    textWidth: "60%",
    imageWidth: "38%",
    navigationLinkText: "Start your YC journey today",
    navigationLink: requests.YC_APPLICATION_LINK,
    ycExtraSubheading: "Expert Mentorship Awaits",
  };

  const accordionData = [
    {
      query:
        "What are the eligibility requirements to apply for  Y Combinator?",
      solution:
        "Y Combinator welcomes applications from both unfunded and funded early-stage startups globally, focusing on innovation that can have the capacity to scale.",
    },
    {
      query: "When can I apply for the upcoming  Y Combinator 2024 batch?",
      solution:
        "Y Combinator is currently open for startup applications for its Summer 2024 funding cycle, scheduled for July to September 2024. The final date for submitting applications on time is April 22.",
    },
    {
      query: "Where do I apply for the  Y Combinator 2024 summer batch?",
      solution:
        "You can apply for the upcoming YC summer batch till Apr 22. You can start your application <a target='_blank' href='https://apply.ycombinator.com/session/new?continue=https%3A%2F%2Fapply.ycombinator.com%2F'>here</a>. The application will ask for information about your startup, your team, and your progress.",
    },
    {
      query: "Does YC accept solo founders?",
      solution:
        "YC regularly accepts solo founders, though they recommend having a co-founder since solo ventures can be challenging.",
    },
    {
      query: "Can I apply to YC if I miss the ‘24 summer batch deadline?",
      solution:
        "Yes, you can still apply for the YC Winter ‘25 batch. You can add your email to this <a target='_blank' href='https://www.ycombinator.com/apply/reminder'>page</a> and get an email notification one month before the Winter 2025 deadline. ",
    },
  ];

  return (
    <div className={styles["founders-forge"]}>
      <Head>
        <title>
          Founders&apos; Forge: Y Combinator Mentorship Program | Decentro
        </title>
        <link rel="canonical" href={urls.FOUNDERS_FORGE} />
        <link rel="alternate" href={urls.FOUNDERS_FORGE} hreflang="en-IN" />
        <meta
          name="description"
          content="Join Founders' Forge, a premier  Y Combinator mentorship program by Decentro. Designed for ambitious startups, our program offers unparalleled guidance, resources, and networking opportunities to turn visionary ideas into successful ventures. Apply now to accelerate your entrepreneurial journey."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content=" Founders' Forge:  Y Combinator Mentorship Program | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <ProductBanner data={bannerData} />
      <div className={styles["offers"]}>
        <h2>
          Everything <span>You’ll Receive</span>
        </h2>
        <div className={styles["offers-cards"]}>
          {offersData.map((item, index) => {
            return <AnimatedCards key={index} data={offersData[index]} />;
          })}
        </div>
      </div>

      <div className={styles["exclusive-mentors-grid"]}>
        <h2>
          Meet <span>Our Mentors</span>
        </h2>
        <p>
          Ace your application with invaluable insights from Y Combinator Alums
        </p>
        <div className={styles["exclusive-mentors-grid-content"]}>
          {mentorDataList.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
      <div className={styles["apply-section"]}>
        <InlineImageAndParagraph
          data={aceApplication}
          reverse={true}
          boldBlack
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
      <TextAndButtonBannerGray data={textAndButtonBannerData} />
    </div>
  );
};
export default FoundersForge;
