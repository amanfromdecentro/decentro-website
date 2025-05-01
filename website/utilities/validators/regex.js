export const REGEXP = {
    name: /^[A-Za-z]+( [A-Za-z]+)*$/,
    companyName: /^[a-zA-Z0-9\s]+$/,
    gstin: /^[a-zA-Z0-9\s]+$/,
    mobile: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    amount: /^\d+$/,
    UPIIDRegex: /^[\w.-]+@[\w.-]+$/,
    accountNumberRegex: /^[a-zA-Z0-9]{9,18}$/,
}