import React from "react";
import InlineImageAndParagraph from "../inline-image-and-paragraph/inline-image-and-paragraph";

// Styles Imports
import styles from "../../styles/components-styles/challenges-and-future/challenges-and-future.module.scss";
import Link from "next/link";
import { FaArrowLeft, FaExpand } from "react-icons/fa";

const ChallengesAndFuture = () => {
  const sectionData = [
    {
      headingLight: "Partnering with Legacy Institutions",
      headingBold: "",
      text: "Our aspirations come with many complications, including navigating through banks, dealing with legacy infrastructure, and complying with regulations. Some of our customers previously spent 6-12 months building the connections with banks & still faced issues after completing integrations. As a result, they could not do justice to their product. We need to be patient while enabling the wave of change.",
      imageSrc: "/images/careers/partnering-with-legacy-institutions.svg",
    },
    {
      headingLight: "Banking on our Customers",
      headingBold: "",
      text: "Our customers are changing the status quo & redefining the way we do business in financial services. Like us, they’re solving severe problems that the market may not be receptive to yet. We must remain a step ahead and enable our users to power all their crazy ideas and innovations.",
      imageSrc: "/images/careers/banking-on-our-customers.svg",
    },
    {
      headingLight: "Talent & Expertise",
      headingBold: "",
      text: "We may not have the relevant experience and expertise to crack banking & fiscal integrations. We also do not have all the answers from day one but believe curiosity & a first-principles approach can shed light on our roadblocks. People with the right levels of persistence & grit will get things done despite the consequences.",
      imageSrc: "/images/careers/talent-and-expertise.svg",
    },
  ];

  // const challengesData1 = {
  //   headingLight: "Partnering with Legacy Institutions",
  //   headingBold: "",
  //   text: "Our aspirations come with many complications, including navigating through banks, dealing with legacy infrastructure, and complying with regulations. Some of our customers previously spent 6-12 months building the connections with banks & still faced issues after completing integrations. As a result, they could not do justice to their product. We need to be patient while enabling the wave of change.",
  //   imageSrc: "/images/careers/partnering-with-legacy-institutions.svg",
  // };

  // const challengesData2 = {
  //   headingLight: "Banking on our Customers",
  //   headingBold: "",
  //   text: "Our customers are changing the status quo & redefining the way we do business in financial services. Like us, they’re solving severe problems that the market may not be receptive to yet. We must remain a step ahead and enable our users to power all their crazy ideas and innovations.",
  //   imageSrc: "/images/careers/banking-on-our-customers.svg",
  // };

  // const challengesData3 = {
  //   headingLight: "Talent & Expertise",
  //   headingBold: "",
  //   text: "We may not have the relevant experience and expertise to crack banking & fiscal integrations. We also do not have all the answers from day one but believe curiosity & a first-principles approach can shed light on our roadblocks. People with the right levels of persistence & grit will get things done despite the consequences.",
  //   imageSrc: "/images/careers/talent-and-expertise.svg",
  // };

  return (
    <div className={styles["challenges-and-future"]}>
      <h2>
        Challenges &amp; <span>Future</span>
      </h2>
      <p className={styles["tagline"]}>
        We aspire to live in a world where financial information is
        interconnected and flows freely. We’re making some essential components
        of the banking infrastructure accessible to everyone. Remember the
        countless visits to the bank branches? We dream of building blocks that
        simplify banking services.
      </p>
      <div className={styles["challenges"]}>
        {/* <InlineImageAndParagraph data={challengesData1} />
        <InlineImageAndParagraph data={challengesData2} />
        <InlineImageAndParagraph data={challengesData3} /> */}

        {sectionData.map((item, index) => {
          return (
            <div
              className={styles["inline-image-and-paragraph"]}
              // id={item.id ? item.id : ""}
              key={index}
            >
              <div className={styles["image"]}>
                {item.imageLink ? (
                  <Link href={item.imageLink} target="_blank">
                    <img
                      src={item.imageSrc}
                      alt={
                        item.headingLight
                          ? item.headingLight + " " + item.headingBold
                          : "logo"
                      }
                    />
                  </Link>
                ) : (
                  <img
                    src={item.imageSrc}
                    alt={
                      item.altText
                        ? item.altText
                        : item.headingLight
                        ? item.headingLight + " " + item.headingBold
                        : "logo"
                    }
                    title={item.titleText ? item.titleText : ""}
                    onClick={item.zoom ? handlePopUpShow : undefined}
                  />
                )}
              </div>
              {item.zoom === true ? (
                viewType === "mobile" ? (
                  <React.Fragment>
                    <div className={styles["zoom-feature"]}>
                      <div className={styles["click-to-zoom"]}>
                        <FaExpand onClick={handlePopUpShow} />
                        <span>Click on image to zoom</span>
                      </div>
                      {showPopUp ? (
                        <div className={styles["explanatory-image-enlarged"]}>
                          <div
                            className={styles["cancel-popup"]}
                            onClick={handlePopUpClose}
                          >
                            <FaArrowLeft />
                          </div>
                          <img
                            src={item.imageSrc}
                            alt={item.altText ? item.altText : "image"}
                          />
                        </div>
                      ) : null}
                    </div>
                  </React.Fragment>
                ) : null
              ) : null}

              <div className={styles["paragraph"]}>
                <h2>
                  {item.headingLight}{" "}
                  <span
                    dangerouslySetInnerHTML={{ __html: item.headingBold }}
                  ></span>
                </h2>
                {item.extraHeadingText ? (
                  <h2
                    dangerouslySetInnerHTML={{ __html: item.extraHeadingText }}
                  ></h2>
                ) : null}
                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                {item.bulletPointsText ? (
                  <div className={styles["inline-image-text-bullet-points"]}>
                    {item.bulletPointsText.map(function (key, index) {
                      return (
                        <p
                          key={index}
                          className={styles["inline-image-text-bullet"]}
                          dangerouslySetInnerHTML={{
                            __html: item.bulletPointsText[index],
                          }}
                        ></p>
                      );
                    })}
                  </div>
                ) : null}
                {item.navigationLinkText ? (
                  <Link href={item.navigationLink}>
                    <span>{item.navigationLinkText}</span>
                    <img src="/images/misc/right.svg" alt="arrow-right" />
                  </Link>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChallengesAndFuture;
