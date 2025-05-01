import React, { useState, useEffect } from "react";
import styles from "../../styles/components-styles/testimonials-carousel/testimonials-carousel.module.scss";
// import ItemsCarousel, { ReactItemsCarousel } from 'react-items-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialsCarousel = () => {
  const [viewType, setViewType] = useState("mobile");
  const [clientData, setClientData] = useState([
    // {
    //   name: "Anirudha Basak",
    //   role: "Senior Product Manager, Dhan",
    //   testimonial:
    //     "Decentro's KYC and Onboarding solutions have simplified our customer onboarding process. Their APIs verify critical information efficiently, minimising user input and reducing friction during KYC. This streamlined approach has improved operational efficiency and the overall user experience, allowing us to create seamless customer journeys.",
    //   stats: {
    //     headline: "35%",
    //     description: "Faster TATs",
    //     link: "https://decentro.tech/products/kyc-onboarding/",
    //   },
    //   learnMore: true,
    //   images: {
    //     client: "/images/clients/anirudha-dhan.jpeg",
    //     logo: "/images/testimonials/dhan.svg",
    //   },
    // },
    {
      name: "Mazin",
      role: "Founder, Investor & Entrepreneur",
      testimonial:
        "Decentro’s ability to deliver highly customizable solutions with exceptional tech performance has been truly remarkable. Their team’s expertise and commitment have exceeded our expectations, and we’re excited to deepen our collaboration and achieve even greater milestones together.",
      stats: {
        headline: "3X Faster",
        description: "Identity Verification using Decentro’s KYC Stack",
        link: "https://www.youtube.com/watch?v=C_SRxsA8Rvg",
      },
      images: {
        client: "/images/clients/mazin.png",
        logo: "/images/testimonials/newtap.svg",
      },
    },
    {
      name: "Anuj Kacker",
      role: "Co-founder",
      testimonial:
        "Partnering with Decentro has streamlined our digital credit and lending workflows. Their scalable APIs enhance the consumer onboarding experience while reducing operational friction. This collaboration allows us to deliver seamless journeys, unlocking growth opportunities in the ecosystem.",
      stats: {
        headline: "20,000+",
        description: "Identities verified daily by MoneyTap",
        link: "https://decentro.tech/blog/streamlining-credit-for-consumers-by-10x-with-moneytap/",
      },
      images: {
        client: "/images/clients/anuj-kacker.png",
        logo: "/images/testimonials/freo.svg",
      },
    },
    {
      name: "Bhavik Davda",
      role: "Vice President",
      testimonial:
        "Decentro’s APIs helped Credit Wise Capital’s Twin2 with KYC and banking prowess. This lets us now get the job done for both ID collection & verification along with Bank Account Validation. The way Twin2 is now able to collect information seamlessly from the user is amazing. Hope to grow a long way with Decentro.",
      stats: {
        headline: "92%",
        description: "Response rate via our CKYC API",
        link: "https://decentro.tech/blog/creditwise-case-study/",
      },
      images: {
        client: "/images/clients/bhavik-davda.webp",
        logo: "/images/testimonials/creditwise-capital.svg",
      },
    },
    {
      name: "Pramod Ghorpade",
      role: "MD, CEO",
      testimonial:
        "Dvara Money empowers underserved communities through secure digital payment solutions. Partnering with Decentro, we simplify UPI integration via Spark Accounts, enabling a seamless shift from cash to digital. This collaboration ensures financial inclusion with convenience, transparency, and accessibility for daily transactions.",
      stats: {
        headline: "80%+",
        description: "Cost reduced by using Decentro's UPI Payments",
        link: "https://decentro.tech/blog/dvara-money-case-study/",
      },
      images: {
        client: "/images/clients/pramod-ghorpade.webp",
        logo: "/images/testimonials/dvara.svg",
      },
    },
    {
      name: "Ankur Gupta",
      role: "Co-Founder & COO",
      testimonial:
        "At Tramo, seamless client experiences are our focus, and Decentro has been pivotal in enabling this. We've leveraged their best solutions from efficient onboarding to managing payouts and reconciliations via virtual accounts. Decentro’s customer-first approach makes us feel like true collaborators in innovation.",
      stats: {
        headline: "54Bn+ INR",
        description: "Processed using Decentro’s Multi-Collect Stack",
        link: "https://decentro.tech/blog/tramo-case-study/",
      },
      images: {
        client: "/images/clients/ankur-gupta.webp",
        logo: "/images/testimonials/tramo.svg",
      },
    },
  ]);
  useEffect(() => {
    // Shuffle the clientData array
    const shuffledClientData = [...clientData];
    for (let i = shuffledClientData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledClientData[i], shuffledClientData[j]] = [
        shuffledClientData[j],
        shuffledClientData[i],
      ];
    }
    setClientData(shuffledClientData);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window) {
        if (window.innerWidth <= 800) {
          setViewType("mobile");
        } else {
          setViewType("desktop");
        }
      }
    };

    // Add a listener for the window resize event
    window.addEventListener("resize", handleResize);

    handleResize();

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  // Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };
  return (
    <div className={styles["clients"]}>
      <h2>
        Real results,
        <span className="header-section-highlighted">&nbsp;real voices</span>
      </h2>
      <p className={styles["tagline"]}>
        Leading companies share their Decentro journey
      </p>
      <div className={styles["carousel-card"]}>
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={viewType === "mobile" ? 1 : 1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          draggable={true}
          pauseOnHover={true}
          pauseOnFocus={true}
          rows={1}
          swipeToSlide={true}
          swipe={true}
          // * Uncomment this if half visibility of next/previous card is needed.
          // centerMode={viewType === "mobile" ? false : true}
          nextArrow={viewType === "mobile" ? null : <NextArrow />}
          prevArrow={viewType === "mobile" ? null : <PrevArrow />}
        >
          {clientData.map((client, index) => (
            <div key={index} className={styles["client-block"]}>
              <div className={styles["client-info"]}>
                <div className={styles["client-image"]}>
                  <Image
                    src={client.images.client}
                    alt={client.name}
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles["client-details"]}>
                  {/* <label className={styles["client-name"]}>{client.name}</label>
                  <label>{client.role}</label> */}
                  <div className={styles["client-logo"]}>
                    <Image
                      src={client.images.logo}
                      alt={client.name}
                      width={140}
                      height={50}
                    />
                  </div>
                </div>
              </div>
              <div className={styles["client-testimonial"]}>
                <p>{client.testimonial}</p>
              </div>
              <div className={styles["client-stats"]}>
                <p className={styles["stats-headline"]}>
                  {client.stats.headline}
                </p>
                <p className={styles["stats-desc"]}>
                  {client.stats.description}
                </p>
                <Link href={client.stats.link} target="_blank">
                  {client?.learnMore ? "Learn More" : "Case Study"}{" "}
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
