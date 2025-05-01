const phoneNumberRegex = /^[1-9][0-9]*$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const otpRegex = /^[0-9]+$/;
const phoneNumberValidation = (phoneNumber) => {
  if (phoneNumber.match(phoneNumberRegex)) {
    return true;
  }
  return false;
};

const emailInputValidation = (email) => {
  if (email.match(emailRegex)) {
    return true;
  }
  return false;
};

const sixDigitOtpValidation = (otp) => {
  if (otp.match(otpRegex)) {
    return true;
  }
  return false;
};

export { phoneNumberValidation, emailInputValidation, sixDigitOtpValidation };
