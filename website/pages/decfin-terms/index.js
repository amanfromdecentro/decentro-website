import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";

const DecfinTermsAndConditions = () => {
  const [loading, setLoading] = useState(true);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const iframe = document.getElementById("terms-iframe");
    if (iframe) {
      iframe.onload = () => {
        setLoading(false);
      };
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Terms & Conditions | API Banking Platform | Decentro</title>
        <link rel="canonical" href="https://decentro.tech/terms/" />
        <meta
          name="description"
          content="Terms & Conditions | API Banking Platform | Decentro"
        />
        <meta name="keywords" content="terms, conditions, decentro" />
        <meta
          property="og:title"
          content="Terms & Conditions | API Banking Platform | Decentro"
        />
        <meta property="og:image" content="./images/banner.svg" />
      </Head>

      <div className="documents-container">
        <div className="document-type-list">
          <Link
            href="/decfin-terms/"
            activeclassname="active"
            style={{
              background: "#F7FAFF",
            }}
          >
            Decentro (PA) T&Cs
          </Link>
          <Link href="/decentro-terms/" activeclassname="active">
            Decentro (TSP) T&Cs
          </Link>
          <Link href="/privacy/" activeclassname="active">
            Privacy Policy
          </Link>
          <Link href="/agreement/" activeclassname="active">
            Master Services Agreement (PA)
          </Link>
          <Link href="/report-bug" activeclassname="active">
            Report A Bug
          </Link>
        </div>
        <div className="document-content">
          <div className="terms-and-conditions">
            <h2>Decentro (PA) T&Cs</h2>
            <p>Updated on Nov 04, 2024</p>
            <div className="terms-content">
              {loading && (
                <div
                  className="loading-overlay"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "100px",
                  }}
                >
                  Loading...
                </div>
              )}
              <iframe
                id="terms-iframe"
                src="https://docs.google.com/document/d/e/2PACX-1vTx2snl20ylVbnPub-WL3FyVisPMpMkoVY9SemwkCK7P8Fp_DBoqADZM_z4uKXZFBFrrGdT4MmeelTf/pub?embedded=true"
              ></iframe>
              {/* <iframe src="https://decentro-icons.s3.ap-south-1.amazonaws.com/website-documents/Decfin+T%26C.pdf#view=FITW">
                                Your browser does not support iframes. <a href="https://decentro-icons.s3.ap-south-1.amazonaws.com/website-documents/Decfin+T%26C.pdf">Download the PDF</a>
                            </iframe> */}
            </div>
          </div>
          <div className="scroll-to-top-btn">
            <button
              onClick={() => {
                scrollToTop();
              }}
            >
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DecfinTermsAndConditions;
