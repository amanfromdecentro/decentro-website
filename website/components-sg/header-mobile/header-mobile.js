import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import urls from "../../sgUrls";

function HeaderMobileSG() {
  const [click, setClick] = useState(false);
  let location = useRouter();
  let headerSubHeading = "";

  headerSubHeading =
    location.pathname == "/customer-stories/" ? "Customer Stories" : "";
  const handleClick = (event) => {
    event.stopPropagation();
    setClick(!click);
    document
      .getElementsByClassName("dropdown-overlay")[0]
      .classList.toggle("overlay");
    document.getElementsByTagName("body")[0].classList.toggle("stop-scroll");
    document.querySelector("#dropdown-company").classList.remove("show");
    document.querySelector("#dropdown-payments").classList.add("show");
  };
  const closeMobileMenu = () => {
    setClick(false);
    document
      .getElementsByClassName("dropdown-overlay")[0]
      .classList.remove("overlay");
    document.getElementsByTagName("body")[0].classList.remove("stop-scroll");
  };

  headerSubHeading =
    location.pathname == "/customer-stories/" ? "Customer Stories" : "";

  useEffect(() => {
    document.addEventListener("click", function (event) {
      event.stopPropagation();
      if (
        document.getElementById("dropdown-payments") != null &&
        document.getElementById("dropdown-company") != null
      ) {
        if (
          document
            .getElementById("dropdown-payments")
            .classList.contains("show")
        ) {
          document.querySelector("#dropdown-payments").classList.remove("show");
        }
        if (
          document.getElementById("dropdown-company").classList.contains("show")
        ) {
          document.querySelector("#dropdown-company").classList.remove("show");
        }
      }
    });
  }, []);

  return (
    <div>
      <div className="dropdown-overlay"></div>
      <header id="header">
        <div className="menu-mobile">
          <div className="head">
            {headerSubHeading == "" ? (
              <Link href="/global">
                <img src="/images/home/decentro-logo.svg" alt="Decentro Logo" />
              </Link>
            ) : (
              <div className="header-logo-subheader">
                <Link href="/global">
                  <img
                    src="/images/home/decentro-logo.svg"
                    alt="Decentro Logo"
                  />
                </Link>
                <p>{headerSubHeading}</p>
              </div>
            )}

            {/* To be uncommented when menu items are available */}

            <div className="mobile-menu-button" onClick={handleClick}>
              {click ? (
                <FontAwesomeIcon icon={faTimes} width={18} />
              ) : (
                <FontAwesomeIcon icon={faBars} width={18} />
              )}
            </div>
          </div>

          {/* To be uncommented when menu items are available */}

          <ul id="mobile-menu" className={click ? "active" : ""}>
            <li
              className="dropdown-menu"
              onClick={(event) => {
                event.stopPropagation();
                document
                  .querySelector("#dropdown-company")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-payments")
                  .classList.toggle("show");
              }}
            >
              <span>
                Products
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
              <ul className="dropdown show" id="dropdown-payments">
                <li onClick={closeMobileMenu}>
                  {/* <Link href={urls.VIRTUAL_ACCOUNTS}>
                    <img
                      src="/images/icons/va-home-active.svg"
                      alt="Virtual Accounts"
                    />
                    Multi-Collect
                  </Link> */}
                  <Link href={urls.PAYMENT_COLLECTION}>
                    <img
                      src="/images/icons/menu/upi-collect-menu.svg"
                      alt="UPI Collections"
                    />
                    Global Payment Collection
                  </Link>
                  <Link href={urls.LEDGERS}>
                    <img
                      src="/images/icons/menu/ledgers-menu.svg"
                      alt="Ledgers"
                    />
                    Ledgers
                    <label class="badge">New</label>
                  </Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href={urls.INSTANT_PAYOUTS}>
                    <img
                      src="/images/icons/menu/payout-menu.svg"
                      alt="Payouts"
                    />
                    Global Payouts
                  </Link>
                  <Link href={urls.MULTI_CURRENCY_ACCOUNTS}>
                    <img
                      src="/images/icons/va-home-active.svg"
                      alt="Payouts"
                    />
                    Multi Currency Accounts
                    <label class="badge">New</label>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="dropdown-menu"
              onClick={(event) => {
                event.stopPropagation();
                document
                  .querySelector("#dropdown-payments")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-company")
                  .classList.toggle("show");
              }}
            >
              <span>
                Company
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
              <ul className="dropdown" id="dropdown-company">
                <li onClick={closeMobileMenu}>
                  <Link href={urls.ABOUT}>About Us</Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href={urls.CAREER}>Careers</Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href={urls.RESOURCES}>Resources</Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href="https://decentro.tech/blog/global/">Blog</Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href={urls.PRESS}>Press &amp; Buzz</Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href={urls.CUSTOMER_STORIES}>Customer Stories</Link>
                </li>
                {/* <li onClick={closeMobileMenu}>
                  <Link href="/compliance/">Compliance</Link>
                </li> */}
              </ul>
            </li>
            {/* Developers option  */}
            <li
              className="dropdown-menu"
              onClick={(event) => {
                window.open("https://global.docs.decentro.tech/", "_blank");
              }}
            >
              <span>Developers</span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default HeaderMobileSG;
