import Link from "next/link";
import React, { useState } from "react";

const PodcastsAndVideos = (props) => {
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
    if (contentToShowList.length > 1) {
      handleContentShowHide(contentToShow);
    } else if (contentToShowList.length == 1) {
      handleContentShowHide(contentToShow);
      handleLoadButtonDisable();
    }
  };

  return (
    <div className="podcasts-and-videos">
      <h2>
        <span>Podcasts & Feature</span> Videos
      </h2>
      <p>
        Hit play and listen to the latest podcasts and videos featuring Team
        Decentro.
      </p>
      <div className="podcasts-videos-contents">
        <div className="visible-content initial">
          <div className="podcasts-videos-row">
            <div className="podcasts-videos-step">
              <Link href="https://www.aninews.in/news/business/decentro-deepens-global-saas-offering-with-ledgers-for-automated-reconciliation20240808171101/" className="podcasts-videos-link" target="_blank" rel="noreferrer" >
                <div className="item">
                  <img src="/images/press-buzz/aninews_2024.jpg"
                    alt="ANI" />
                  <p> Decentro Deepens Global SaaS Offering with Ledgers for Automated Reconciliation </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://e27.co/how-fintech-infra-firm-decentro-leverages-collaborations-to-capture-sea-market-20240424/"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img src="/images/press-buzz/e27pr.jpg" alt="e27" />
                  <p>
                    How fintech infra firm Decentro leverages collaborations to
                    capture SEA market
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://e27.co/the-death-of-distance-how-innovation-is-resolving-cross-border-payment-hurdles-20240427/"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/e27-death-of-distance.jpg"
                    alt="e27"
                  />
                  <p>
                    The death of distance: How innovation is resolving
                    cross-border payment hurdles
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://yourstory.com/2023/07/decentro-acquires-neowise-saas-platform-for-debt-recovery"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/neowise-acquire.jpg"
                    alt="Your Story"
                  />
                  <p>
                    Decentro acquires Neowise, a SaaS debt recovery platform
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://www.cnbctv18.com/startup/fintech-startup-decentrotech-begins-operations-in-singapore-15995891.htm"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/decentro-singapore.jpg"
                    alt="CNBC TV 18"
                  />
                  <p>
                    Fintech startup Decentro.tech begins operations in Singapore
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://www.cxotoday.com/press-release/y-combinator-and-rapyd-ventures-backed-decentro-expands-to-singapore/"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/cxotoday-press.jpg"
                    alt="cxo today"
                  />
                  <p>
                    Y-Combinator and Rapyd Ventures backed Decentro Expands to
                    Singapore
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://cxotoday.com/press-release/decentro-becomes-the-youngest-fintech-company-to-receive-the-final-payment-aggregator-license-from-rbi/"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/rbi-license.jpg"
                    alt="cxo today"
                  />
                  <p>
                    Decentro becomes the youngest fintech company to receive the payment aggregator license from RBI.
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://www.entrepreneur.com/en-in/news-and-trends/decentro-launches-flow-and-fabric-full-stack-payments/452255"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/entrepreneur-flow-fabric-launch.webp"
                    alt="entrepreneur"
                  />
                  <p>
                    Decentro Launches Flow and Fabric – Full-Stack Payments And
                    Embedded Finance Solutions
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://www.apnnews.com/decentro-launches-flow-and-fabric-full-stack-payments-and-embedded-finance-solutions-for-companies-in-india/"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/apnnews-flow-fabric.jpg"
                    alt="apn news"
                  />
                  <p>
                    Decentro Launches Flow And Fabric – Full-Stack Payments And
                    Embedded Finance Solutions For Companies In India
                  </p>
                </div>
              </Link>
            </div>
            {/* HERE ----------------------  */}
            <div className="podcasts-videos-step">
              <div className="item youtube-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/6kxqDEShoN4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="youtube-description">
                Hear Rohit Taneja weigh in on Series A, and Decentro&apos;s
                Growth Plans | Startup Street | CNBC - TV18
              </p>
              <Link
                href="https://www.youtube.com/watch?v=6kxqDEShoN4&t=470s"
                className="secondary-yt-tab"
                target="_blank"
                rel="noreferrer"
              ></Link>
            </div>

            <div className="podcasts-videos-step">
              <Link
                href="https://www.linkedin.com/posts/decentro_bnpl-india-fintech-activity-6992726039512723456-MZvt?utm_source=share&utm_medium=member_ios"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/singapore-fintech-festival.jpeg"
                    alt="singapore fintech festival"
                  />
                  <p>
                    Team Decentro set foot in Singapore at Singapore Fintech
                    Festival&apos;22
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <div className="item youtube-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/52PCZFlRdPM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="youtube-description">
                Enabling Gupshup&apos;s Conversational Banking and Finance
                Journey via Decentro&apos;s API Suite
              </p>
              <Link
                href="https://www.youtube.com/watch?v=52PCZFlRdPM"
                className="secondary-yt-tab"
                target="_blank"
                rel="noreferrer"
              ></Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://www.voiceoffintech.com/episodes/decentro"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/voice-of-fintech-podcast.jpg"
                    alt="voice of fintech"
                  />
                  <p>
                    Understanding BaaS and Embedded Banking with Rohit Taneja |
                    Voice of FinTech
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://anchor.fm/gomedici/episodes/Financial-Infra--APIs-for-Business-Banking---With-Rohit-Taneja--Founder--CEO--Decentro-epj5rj"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/Medici-Financial-Podcast.jpg"
                    alt="medici financial"
                  />
                  <p>
                    Listen in on the World of financial infra. APIs for Business
                    Banking | Medici
                  </p>
                </div>
              </Link>
            </div>
            <div className="podcasts-videos-step">
              <Link
                href="https://anchor.fm/frontier-fintech-podcast/episodes/EP13---Rohit-Taneja---CEO-of-Decentro---Money-is-just-bits-and-bytes-on-someones-ledger-e17s9qa"
                className="podcasts-videos-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="item">
                  <img
                    src="/images/press-buzz/anchor-podcast-rohit.jpg"
                    alt="anchor"
                  />
                  <p>
                    Listen in on how Money is just bits and bytes on
                    someone&apos;s ledger | Frontier Fintech Podcast
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="visible-content later">
          <div className="podcasts-videos-row">
            <div className="podcasts-videos-step">
              <div className="item youtube-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/642SEG5mNj8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="youtube-description">
                Decentro&apos;s Growth Blueprint | Daily Dispatch | YourStory
              </p>
              <Link
                href="https://www.youtube.com/watch?v=642SEG5mNj8"
                className="secondary-yt-tab"
                target="_blank"
                rel="noreferrer"
              ></Link>
            </div>
            <div className="podcasts-videos-step">
              <div className="item youtube-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3RPlBbJdph8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="youtube-description">
                Building API Platform for Banking Integration | Life Self
                Mastery Podcast
              </p>
              <Link
                href="https://www.youtube.com/watch?v=3RPlBbJdph8"
                className="secondary-yt-tab"
                target="_blank"
                rel="noreferrer"
              ></Link>
            </div>
            <div className="podcasts-videos-step">
              <div className="item youtube-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fSS-FSDrm3Q"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="youtube-description">
                Building a Fintech Startup with Rohit Taneja | Creek
              </p>
              <Link
                href="https://www.youtube.com/watch?v=fSS-FSDrm3Q"
                className="secondary-yt-tab"
                target="_blank"
                rel="noreferrer"
              ></Link>
            </div>
            {/* <div className="podcasts-videos-step">
                            <div className="item youtube-video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/gZaZ8DWrdWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p className="youtube-description">How to Take a Fintech Startup from Zero to One - Xartup</p>
                            <Link href="https://www.youtube.com/watch?v=gZaZ8DWrdWo">
                                <a className="secondary-yt-tab" target="_blank" rel="noreferrer">

                                </a>
                            </Link>
                        </div> */}
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
        <span>Load More</span>
      </button>
    </div>
  );
};

export default PodcastsAndVideos;
