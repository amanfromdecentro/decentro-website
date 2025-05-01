import React, { createContext, useContext, useEffect, useState } from "react";

const SelfOnboardingContext = createContext();

export const SelfOnboardingModal = ({ children }) => {
  // modal state
  const [showModal, setShowModal] = useState(false);
  const [otpVerificationSuccess, isOtpVerificationSuccess] = useState(false);
  // open modal handler
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <SelfOnboardingContext.Provider
      value={{
        openModal,
        setShowModal,
        showModal,
        otpVerificationSuccess,
        isOtpVerificationSuccess,
      }}
    >
      {children}
    </SelfOnboardingContext.Provider>
  );
};

export default SelfOnboardingContext;
