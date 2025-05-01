import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import requests from "../../requests";
import ItemsCarousel from "react-items-carousel";

import ProductBanner from "../../components/product-banner/product-banner";

const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);

function CaseStudies() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleLoadButtonDisable = () => {
    setDisable(true);
    document.getElementsByClassName("load-more")[0].style.display = "none";
  };

  const handleContentShowHide = (contentToShow) => {
    contentToShow.classList.remove("later");
    contentToShow.classList.add("initial");
  };
  const showContents = (event) => {
    var contentToShowList = document.getElementsByClassName("later");
    var contentToShow = contentToShowList[0];
    document
      .getElementsByClassName("load-more")[0]
      .getElementsByTagName("img")[0].style.display = "inline";
    if (contentToShowList.length > 1) {
      handleContentShowHide(contentToShow);
      document
        .getElementsByClassName("load-more")[0]
        .getElementsByTagName("img")[0].style.display = "none";
    } else if (contentToShowList.length == 1) {
      handleContentShowHide(contentToShow);
      handleLoadButtonDisable();
      document
        .getElementsByClassName("load-more")[0]
        .getElementsByTagName("img")[0].style.display = "none";
    }
  };

  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<span class='header-light'>Fancy Testimonials</span> <br/><span class='highlighted-heading'>Real Stories</span>",
    tagline:
      "Thousands of businesses struggle to streamline their financial workflows and simplify banking operations. Here are some of them that have overcome this financial friction 10X faster.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/customer-stories.mp4",
    altText: "Real Stories",
    titleText: "Real Stories",
    video: true,
  };
  const textAndButtonBannerData = {
    ctaTitle:
      "<span>Ready To Save Time, Resources, & Launch 10X Faster?</span><br/>Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Join the revolution",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };
  return (
    <React.Fragment>
      <Head>
        <title>
          Customer Success Stories | Banking APIs Case Study | Decentro
        </title>
        <link rel="canonical" href="https://decentro.tech/customer-stories" />
        <link
          rel="alternate"
          href="https://decentro.tech/customer-stories"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Case studies on how Decentro’s plug-n-play Banking APIs empower businesses from different verticals to optimize their financial workflows & achieve positive ROI!"
        />
        <meta
          name="keywords"
          content="Compliance, fintech, infrastructure, APIs, banking, platform, APAC, Asia, open banking, neo-bank, AWS, SDKs, account aggregator, account information, financial services, KYC and AML"
        />
        <meta
          property="og:title"
          content="Customer Success Stories | Banking APIs Case Study | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className="case-studies">
        <ProductBanner data={bannerData} />
        <div className="inefficiency-loop">
          <h2>
            Are you Caught in This <span>Inefficiency Loop?</span>
          </h2>
          <div className="inefficiency-contents">
            <div className="inefficiency-row-top">
              <div className="inefficiency-step">
                <div className="item">
                  <img
                    src="./images/customer-stories/connect.svg"
                    alt="connect"
                  />
                  <p>Your business requires a financial integration</p>
                </div>
              </div>
              <div className="step-arrow">
                <img
                  src="./images/customer-stories/step-arrow-right.svg"
                  alt="arrow right"
                />
              </div>
              <div className="inefficiency-step">
                <div className="item">
                  <img
                    src="./images/customer-stories/transparency.svg"
                    alt="transparency"
                  />
                  <p>
                    Legacy providers offer half-baked, error-filled
                    documentation
                  </p>
                </div>
              </div>
              <div className="step-arrow">
                <img
                  src="./images/customer-stories/step-arrow-right.svg"
                  alt="arrow right"
                />
              </div>
              <div className="inefficiency-step">
                <div className="item">
                  <img
                    src="./images/customer-stories/engineering.svg"
                    alt="engineering"
                  />
                  <p>
                    Integration cycles will take you months with cross-team
                    approvals
                  </p>
                </div>
              </div>
            </div>
            <div className="step-arrow-row">
              <div className="item">
                <img
                  src="./images/customer-stories/step-arrow-right.svg"
                  alt="arrow right"
                />
              </div>
            </div>
            <div className="inefficiency-row-bottom">
              <div className="inefficiency-step">
                <div className="item">
                  <img
                    src="./images/customer-stories/problem.svg"
                    alt="problem"
                  />
                  <p>
                    Once LIVE, headache to ensure compliance, iterate, & fix
                    errors continues
                  </p>
                </div>
              </div>
              <div className="step-arrow reverse">
                <img
                  src="./images/customer-stories/step-arrow-right.svg"
                  alt="arrow right"
                />
              </div>
              <div className="inefficiency-step">
                <div className="item">
                  <img
                    src="./images/customer-stories/thumbs-down.svg"
                    alt="solutions"
                  />
                  <p>You either drop midway or settle for mediocre solutions</p>
                </div>
              </div>
              <div className="step-arrow reverse">
                <img
                  src="./images/customer-stories/step-arrow-right.svg"
                  alt="arrow right"
                />
              </div>
              <div className="inefficiency-step">
                <div className="item">
                  <img src="./images/customer-stories/bill.svg" alt="bill" />
                  <p>Capital expenditure adds up burdening your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skip-loop">
          <h2>
            You <span>CAN</span> Skip The Loop. <span>Like Them.</span>
          </h2>
          <p>
            Read stories of business owners who have been empowered to optimize
            their financial operations, reduce overheads, and focus on more
            demanding pursuits.
          </p>
          <div className="skip-loop-contents">
            <div className="visible-content initial">
              <div className="skip-loop-row">
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/onmeta-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/onmeta.jpg"
                        alt="OnMeta"
                      />
                      <p>
                        How Decentro Drove a 15% Boost in Success Rates for
                        OnMeta
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/craze-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/craze.jpg"
                        alt="credit fair"
                      />
                      <p>
                        How Decentro Enabled Craze to Enhance Payroll Efficiency
                        and Onboarding
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/shareplay-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/shareplay.jpg"
                        alt="credit fair"
                      />
                      <p>
                        How Decentro Helped Shareplay Simplify Sports Facility
                        Bookings
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/pickrr-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/pickrr.jpg"
                        alt="credit fair"
                      />
                      <p>
                        How Decentro Enabled Pickrr’s One-Click Checkout
                        Solution
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/creditfair-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/credit-fair.png"
                        alt="credit fair"
                      />
                      <p>
                        How Decentro is Enabling Credit Fair’s Vision of Fair
                        Finance for Everyone
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/salaryse-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/salary-se.png"
                        alt="customer-stories"
                      />
                      <p>
                        How Decentro Is Helping SalarySe Empower 100M+ Salaried
                        Individuals
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/omnicard-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/omnicard-case-study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Decentro Is Helping Omnicard Re-invent Spend
                        Management
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/ignosis-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/ignosis-case-study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Decentro Helped Ignosis Onboard BFSIs 10X Faster
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/tramo-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/tramo-case-study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Decentro and Tramo are Redefining Financial
                        Accessibility Across India
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/baya-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/baya-case-study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Decentro is Enabling Baya Redefine B2B Receivables
                        Processes
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/vedfin-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/vedfin-case-study.png"
                        alt="article image"
                      />
                      <p>
                        How Decentro is Enabling Vedfin’s Flexi Debt Program For
                        Budding Brands
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/galgal-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/galgal-case-study.png"
                        alt="article image"
                      />
                      <p>
                        How Decentro enabled Galgal’s vision of re-imagining
                        personal finances for Young India
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/alt-drx-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/alt-drx-case-study.png"
                        alt="article image"
                      />
                      <p>
                        How Decentro is Helping ALT DRX Democratize Real Estate
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/dvara-money-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/dvara-case-study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Decentro helped Dvara Money to Enable Financial
                        Wellness
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/creditwise-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/Credit-Wise-Case-Study-2.jpg"
                        alt="article image"
                      />
                      <p>
                        How CreditWise Capital leveraged Decentro to launch a
                        chat-based banking product
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/https-decentro-tech-blog-leadoff-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/Leadoff-Case-Study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Leadoff Leveraged Decentro To Enable Customers To
                        Invest In India’s Private Companies
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/gyandhan-case-study/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/GyanDhan-Case-Study-1.jpg"
                        alt="article image"
                      />
                      <p>
                        How Decentro helped GyanDhan to Simplify Education Loan
                        Financing
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/volopay-case-study-expense-management/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/volopay-case-study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Volopay partnered with Decentro to facilitate
                        expense management
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/how-workflexi-fast-tracked-gig-economy-payment-settlements/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/fast-tracking-gig-economy-payments-for-workflexi-decentro.jpg"
                        alt="article image"
                      />
                      <p>
                        How Workflexi Fast-tracked Gig Economy Payments &
                        Settlements
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="visible-content later">
              <div className="skip-loop-row">
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/how-busybox-partnered-with-decentro-to-launch-white-label-prepaid-cards/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/busybox-case-study.jpg"
                        alt="article image"
                      />
                      <p>
                        How Busybox Partnered with Decentro to Launch
                        White-label Prepaid Cards
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/how-decentro-and-splitkaro-came-together-to-simplify-bill-splitting-for-friends-and-colleagues/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/Splitkaro-Case-Study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How Decentro and Splitkaro came together to simplify
                        bill splitting for friends and colleagues
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/streamlining-credit-for-consumers-by-10x-with-moneytap/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/streamlining-credit-for-consumers-by-10x-with-moneytap.jpeg"
                        alt="article image"
                      />
                      <p>
                        Streamlining Credit For Consumers By 10x With Moneytap
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/bimaplan-averting-insurance-frauds-streamlining-claims/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/Bimaplan-Case-Study.jpg"
                        alt="article image"
                      />
                      <p>
                        Averting Insurance Frauds & Streamlining Claims With
                        Bimaplan
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/strengthening-kyc-process-fampay/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/FamPay-Case-Study.png"
                        alt="article image"
                      />
                      <p>How FamPay Strengthened their KYC Process</p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/reinventing-supply-chain-finance-with-blacksoil-saraloan/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/saraloan-case-study.jpg"
                        alt="article image"
                      />
                      <p>
                        Reinventing Supply Chain Finance With BlackSoil &
                        Saraloan
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/how-kuwy-optimized-instant-automative-loans/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/optimizing-instant-automotive-loans-for-kuwy.jpeg"
                        alt="article image"
                      />
                      <p>
                        How KUWY Optimized Instant Automotive Loans with
                        Decentro
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/launching-free-trial-virtual-cards-with-zero-balance/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/zerobalance-case-study.jpeg"
                        alt="article image"
                      />
                      <p>
                        How ZeroBalance Instantly Generates Free-trial Virtual
                        Cards Without Breaking A Sweat
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/simplifying-collections-payouts-zoozle/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/Zoozle-Case-Study.jpg"
                        alt="article image"
                      />
                      <p>How Zoozle Simplified Collections & Payouts</p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/how-ocareneo-transforms-healthtech-with-simplified-payouts-reconciliations/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/how-ocareneo-decentro-simplifies-healthtech-sector.jpg"
                        alt="article image"
                      />
                      <p>
                        OcareNeo – Simplifying Banking for the Healthcare Sector
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/how-1bridge-streamlined-collections-reconciliation/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/how-1bridge-streamlined-collections-reconciliation-decentro.jpeg"
                        alt="article image"
                      />
                      <p>
                        How 1Bridge Streamlined Collections & Reconciliation
                        With Decentro
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="skip-loop-step">
                  <Link
                    className="blog-link"
                    href="https://decentro.tech/blog/enabling-instant-account-validation-for-gromo/"
                    target="_blank"
                  >
                    <div className="item">
                      <img
                        src="./images/customer-stories/Gromo-Case-Study.jpg"
                        alt="article image"
                      />
                      <p>How Gromo Enabled Instant Bank Account Verification</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            class="load-more"
            disabled={disable}
            onClick={(event) => {
              showContents();
            }}
          >
            <img src="./images/customer-stories/load-loading.gif" />
            <span>Load More</span>
          </button>
        </div>

        <div className="case-study-statistics">
          <h2>
            Let’s Uncomplicate <span>Banking and Financial</span> Integrations
          </h2>
          <p>
            Simple plug-n-play banking APIs and SDKs to run your complex
            business workflows.
          </p>
          <div className="case-study-statistics-section">
            <div className="case-study-statistics-row">
              <div className="case-study-statistics-card">
                <div className="item">
                  <h1>10x</h1>
                  <p>
                    Launch products 10X faster and eliminate long-drawn
                    integration cycles.
                  </p>
                </div>
              </div>
              <div className="case-study-statistics-card">
                <div className="item">
                  <h1>80%</h1>
                  <p>
                    Cut down all unnecessary expenses. Save overheads by 80%.
                    Unlock new revenue opportunities.
                  </p>
                </div>
              </div>
              <div className="case-study-statistics-card">
                <div className="item">
                  <h1>5x</h1>
                  <p>
                    Reduce payment collection expenses by 5x. And, via the
                    channels where your customers are.
                  </p>
                </div>
              </div>
              <div className="case-study-statistics-card">
                <div className="item">
                  <h1>95%</h1>
                  <p>
                    Speed up customer onboarding time by 95% & automate it. Run
                    comprehensive KYC & KYB checks in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-tales">
          <h2>
            Some Handpicked <span>Customer Tales</span>
          </h2>
          <p>
            Over a cup of virtual coffee, our beloved customers take a minute
            out to tell the world their tale- the struggle and the light at the
            end of the tunnel.
          </p>
          <div className="carousel-card">
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={1}
              gutter={20}
              leftChevron={
                <img
                  class="carousel-navigator"
                  src="/images/arrow-left.svg"
                  alt="Arrow Left"
                />
              }
              rightChevron={
                <img
                  class="carousel-navigator"
                  src="/images/arrow-right.svg"
                  alt="Arrow Right"
                />
              }
              outsideChevron
              chevronWidth={40}
              infiniteLoop={true}
              disableSwipe={false}
            >
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/C_SRxsA8Rvg?si=TcYlc3LXHw-qJHyT"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=C_SRxsA8Rvg"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/7v5oLBJz-ec?si=S64bo0-4hvKQXLWr"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=7v5oLBJz-ec"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="1068"
                    height="597"
                    src="https://www.youtube.com/embed/jVgNK1z7PGM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://youtu.be/jVgNK1z7PGM"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="1068"
                    height="597"
                    src="https://www.youtube.com/embed/8JOi_LYW468"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://youtu.be/8JOi_LYW468"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/t7pPG9Ci5kY?si=glfDtd3lnNp86sUk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=t7pPG9Ci5kY"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="1068"
                    height="597"
                    src="https://www.youtube.com/embed/FcHR6nAoQhE?si=pbwAeztCZkOl6pZt"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=FcHR6nAoQhE"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="1068"
                    height="597"
                    src="https://www.youtube.com/embed/PdywgBWbu-I?si=jIOrKsJHasLOjEhK"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=PdywgBWbu-I"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="1068"
                    height="597"
                    src="https://www.youtube.com/embed/2gWkn8j5QRg?si=haWVSwwF2EHPShHn"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=2gWkn8j5QRg"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="1068"
                    height="597"
                    src="https://www.youtube.com/embed/6eAmQhSScPU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://youtu.be/6eAmQhSScPU"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="560"
                    height="597"
                    src="https://www.youtube.com/embed/WCOqAKPgYP4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=WCOqAKPgYP4&t=46s"
                    target="_blank"
                  ></Link>
                </div>
              </div>
              <div className="customer-block">
                <div className="customer-tale-video">
                  <iframe
                    width="560"
                    height="597"
                    src="https://www.youtube.com/embed/52PCZFlRdPM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Link
                    className="secondary-yt-tab"
                    href="https://www.youtube.com/watch?v=52PCZFlRdPM"
                    target="_blank"
                  ></Link>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </React.Fragment>
  );
}

export default CaseStudies;
