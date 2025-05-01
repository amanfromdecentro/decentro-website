"use client";

import * as React from "react";
import styles from "../../styles/components-styles/currency-converter/currency-converter.module.scss";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

export default function CurrencyConverter() {
  const [amount, setAmount] = React.useState(1000);
  const [fromSelectedCurrency, setFromSelectedCurrency] = React.useState({
    currency: "",
    flag: "",
    value: "",
  });
  const [toSelectedCurrency, setToSelectedCurrency] = React.useState({
    currency: "",
    flag: "",
    value: "",
  });
  const [timeStamp, setTimeStamp] = React.useState();
  const [isFromDropdownOpen, setIsFromDropdownOpen] = React.useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = React.useState(false);
  const receivedAmount =
    Number.parseFloat(amount || 0) * fromSelectedCurrency.value || 0;

  const [currencies, setCurrencies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchCurrencies() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://workflow.decentro.tech/webhook/fx/currencies",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const formattedCurrencies = Object.keys(
          data.currencies.currency_flags
        ).map((code) => ({
          code,
          flag: data.currencies.currency_flags[code],
          value: data.currencies.currencies[code]
            ? Math.round(data.currencies.currencies[code] * 100) / 100
            : null, // Ensuring value is rounded to 2 decimal places
        }));
        setCurrencies(formattedCurrencies);
        const timeAgo = formatDistanceToNow(
          new Date(data.currencies.timestamp),
          { addSuffix: true }
        );

        setTimeStamp(timeAgo);
        const defaultFromCurrency = formattedCurrencies.find(
          (item) => item.code === "USD"
        );

        const defaultToCurrency = formattedCurrencies.find(
          (currency) => currency.code === "INR"
        );
        if (defaultFromCurrency) {
          setFromSelectedCurrency({
            currency: defaultFromCurrency.code,
            flag: defaultFromCurrency.flag,
            value: defaultFromCurrency.value,
          });
        }
        if (defaultToCurrency) {
          setToSelectedCurrency({
            currency: defaultToCurrency.code,
            flag: defaultToCurrency.flag,
            value: defaultToCurrency.value,
          });
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching currencies:", error);
      }
    }

    fetchCurrencies();
  }, []);

  const commissionRate = 0.0048; //0.48%

  const netAmount = receivedAmount ? receivedAmount * (1 - commissionRate) : 0;

  const fromDropdownRef = React.useRef(null);
  const toDropdownRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (
      fromDropdownRef.current &&
      !fromDropdownRef.current.contains(event.target)
    ) {
      setIsFromDropdownOpen(false);
    }
    if (
      toDropdownRef.current &&
      !toDropdownRef.current.contains(event.target)
    ) {
      setIsToDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {!isLoading && (
        <div className={styles["converter"]}>
          <div className={styles["converter-card"]}>
            {/* Amount Input Section */}
            <div className={styles["converter-input-wrapper"]}>
              <div className={styles["converter-input-container"]}>
                <div className={styles["converter-input-row"]}>
                  <label className={styles["converter-label"]}>
                    Enter Amount
                  </label>
                  <input
                    type="text"
                    value={amount.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                    onChange={(e) => {
                      let numericValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
                      if (numericValue.length > 8) {
                        numericValue = numericValue.slice(0, 8); // Limit to 8 digits
                      }
                      setAmount(+numericValue);
                    }}
                    className={styles["converter-amount-input"]}
                    placeholder="0"
                  />
                </div>
                <div className={styles["converter-currency-selector"]}>
                  <button
                    className={styles["converter-currency-button"]}
                    onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
                  >
                    <Image
                      src={fromSelectedCurrency.flag}
                      alt="US"
                      width={35}
                      height={20}
                    />
                    <div className={styles["from-currency"]}>
                      {fromSelectedCurrency.currency}
                    </div>
                    <svg
                      className={styles["converter-dropdown-icon"]}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  {isFromDropdownOpen && (
                    <div
                      ref={fromDropdownRef}
                      className={styles["converter-dropdown"]}
                    >
                      {currencies
                        .filter((currency) => currency.code !== "INR")
                        .map((currency) => (
                          <button
                            key={currency.code}
                            className={styles["converter-dropdown-item"]}
                            onClick={() => {
                              setFromSelectedCurrency((prev) => ({
                                currency: currency.code,
                                flag: currency.flag,
                                value: currency.value,
                              }));
                              setIsFromDropdownOpen(false);
                            }}
                          >
                            <img src={currency.flag} />
                            <div>{currency.code}</div>
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Exchange Rate */}
            <div className={styles["converter-rate"]}>
              <div className={styles["converter-rate-text"]}>
                <span>1 {fromSelectedCurrency.currency} = </span>
                <span className={styles["converter-rate-value"]}>
                  {fromSelectedCurrency.value} {toSelectedCurrency.currency}
                </span>
              </div>
              <div className={styles["converter-rate-update"]}>
                Updated <span>{timeStamp}</span>
              </div>
            </div>
            <hr className={styles["vertical-line"]} />

            {/* Received Amount Section */}
            <div className={styles["converter-output-wrapper"]}>
              <Image
                className={styles["decentro-fx"]}
                src="/images/currency-converter/decentro-fx.svg"
                alt="India"
                width={65}
                height={20}
              />
              <div className={styles["converter-output-container"]}>
                <div className={styles["converter-output-row"]}>
                  <label className={styles["converter-label"]}>
                    You Receive&nbsp;
                    <span>(Incl. Decentro Fee)</span>
                  </label>
                  <div className={styles["converter-amount-output"]}>
                    {"\u20B9"}
                    {netAmount.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </div>
                </div>
                <div className={styles["converter-currency-selector"]}>
                  <button
                    disabled={true}
                    className={styles["converter-currency-output-button"]}
                    onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
                  >
                    <Image
                      src={toSelectedCurrency.flag}
                      alt="India"
                      width={35}
                      height={20}
                    />
                    <div className={styles["to-currency"]}>
                      {toSelectedCurrency.currency}
                    </div>
                    <svg
                      className={styles["converter-dropdown-icon"]}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  {isToDropdownOpen && (
                    <div
                      ref={toDropdownRef}
                      className={styles["converter-dropdown"]}
                    >
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          className={styles["converter-dropdown-item"]}
                          onClick={() => {
                            setToSelectedCurrency((prev) => ({
                              currency: currency.code,
                              flag: currency.flag,
                              value: currency.value,
                            }));
                            setIsToDropdownOpen(false);
                          }}
                        >
                          <img src={currency.flag} />
                          <div>{currency.code}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Comparison Rates */}
            <div className={styles["converter-comparison"]}>
              <div className={styles["converter-comparison-item"]}>
                <div className={styles["converter-comparison-left"]}>
                  <div className={styles["converter-comparison-title"]}>
                    Banks
                  </div>
                  <div className={styles["converter-comparison-rate"]}>
                    {"\u20B9"}
                    {Number(
                      receivedAmount - receivedAmount * 0.012
                    ).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>

                <div className={styles["converter-comparison-loss"]}>
                  You lose <span>1.2% {"\u25BC"}</span>
                </div>
              </div>
              <div className={styles["converter-comparison-item"]}>
                <div className={styles["converter-comparison-left"]}>
                  <div className={styles["converter-comparison-title"]}>
                    PayPal
                  </div>
                  <div className={styles["converter-comparison-rate"]}>
                    {"\u20B9"}
                    {Number(
                      receivedAmount - receivedAmount * 0.015
                    ).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div className={styles["converter-comparison-loss"]}>
                  You lose <span>1.5% {"\u25BC"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
