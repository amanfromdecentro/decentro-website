const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { default: urls } = require("../../urls");

export default async (req, res) => {
  const blogs = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    ...Object.values(urls.BLOGS).map((path) => ({
      url: path,
      changefreq: "daily",
      priority: 0.3,
    })),
  ];

  console.log("blogs:>>", blogs)
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: urls.VIRTUAL_ACCOUNTS, changefreq: "daily", priority: 0.3 },
    { url: urls.UPI_COLLECTIONS, changefreq: "daily", priority: 0.3 },
    { url: urls.UI_STREAM, changefreq: "daily", priority: 0.3 },
    { url: urls.RECURRING_PAYMENTS, changefreq: "daily", priority: 0.3 },
    { url: urls.INSTANT_PAYOUTS, changefreq: "daily", priority: 0.3 },
    { url: urls.KYC_AND_ONBOARDING, changefreq: "daily", priority: 0.3 },
    { url: urls.LEDGERS, changefreq: "daily", priority: 0.3 },
    { url: urls.LENDING, changefreq: "daily", priority: 0.3 },
    { url: urls.FINANCIAL_SERVICES, changefreq: "daily", priority: 0.3 },
    { url: urls.HYPERSTREAMS, changefreq: "daily", priority: 0.3 },
    { url: urls.SCAN_AND_EXTRACT, changefreq: "daily", priority: 0.3 },
    { url: urls.AADHAAR_XML, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES_CKYC_APIS, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES_GST_APIS, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES_UPI_APIS, changefreq: "daily", priority: 0.3 },
    {
      url: urls.RESOURCES_CREDIT_BUREAU_APIS,
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: urls.RESOURCES_UPI_AUTOPAY_APIS,
      changefreq: "daily",
      priority: 0.3,
    },
    { url: urls.RESOURCES_ENACH_APIS, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES_DIGILOCKER_APIS, changefreq: "daily", priority: 0.3 },
    {
      url: urls.RESOURCES_UPIID_VERIFICATION,
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: urls.RESOURCES_BANK_ACCOUNT_VALIDATION,
      changefreq: "daily",
      priority: 0.3,
    },
    { url: urls.RESOURCES_DIGITAL_LENDING, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES_DEBT_COLLECTION, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES_BULK_PAYOUTS, changefreq: "daily", priority: 0.3 },
    {
      url: urls.RESOURCES_AADHAAR_VERIFICATION,
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: urls.RESOURCES_PHONE_INTELLIGENCE,
      changefreq: "daily",
      priority: 0.3,
    },
    { url: urls.ABOUT, changefreq: "daily", priority: 0.3 },
    { url: urls.PRESS, changefreq: "daily", priority: 0.3 },
    { url: urls.PARTNERS, changefreq: "daily", priority: 0.3 },
    { url: urls.CAREER, changefreq: "daily", priority: 0.3 },
    { url: urls.CUSTOMER_STORIES, changefreq: "daily", priority: 0.3 },
    { url: urls.BLOG, changefreq: "daily", priority: 0.3 },
    { url: urls.PRIVACY, changefreq: "daily", priority: 0.3 },
    { url: urls.TERMS, changefreq: "daily", priority: 0.3 },
    { url: urls.MSA, changefreq: "daily", priority: 0.3 },
    { url: urls.HELP, changefreq: "daily", priority: 0.3 },
    { url: urls.HELP_FAQS, changefreq: "daily", priority: 0.3 },
    { url: urls.PARTNER_SIGNUP, changefreq: "daily", priority: 0.3 },
    { url: urls.BUG_REPORT_FORM, changefreq: "daily", priority: 0.3 },
    { url: urls.BUG_REPORT_POLICY, changefreq: "daily", priority: 0.3 },
    { url: urls.FOUNDERS_FORGE, changefreq: "daily", priority: 0.3 },
    { url: urls.RESOURCES_BBPS, changefreq: "daily", priority: 0.3 },
    ...blogs,
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
