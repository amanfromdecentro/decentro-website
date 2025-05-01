const requests = {
  DECENTRO_WORKFLOW_BASE_URL_PROD: "https://workflow.decentro.tech/webhook",
  SG_SIGNUP: "/sg_signup/signup",
  SG_MODE_LIST: "/sg_signup/mode_list",
  SG_STAGE_LIST: "/sg_signup/stage_list",
  SG_PRODUCT_LIST: "/sg_signup/product_list",
  SIGNUP: "/global/signup/",
  SIGNUP_DEBT_COLLECTION: "/dc/signup/",
  MODE_LIST: "/signup/mode_list",
  PRODUCT_LIST: "webhook/sg_signup/product_list",
  STAGE_LIST: "webhook/sg_signup/stage_list",
  NEWSLETTER_SUBSCRIBE:
    "https://api.moosend.com/v3/subscribers/4dee5aab-9980-48a6-8d38-5d64da1b1f7e/subscribe.json?apikey=4ea174c1-f494-431f-9128-21c183bc4b88",
  FINTECH_FELLOWSHIP_SIGNUP: "https://decentro.typeform.com/to/pWX0BTZa",
  SIGNUP_ONBOARDING: "/sign_up_onboarding",
  UNIQUENESS_CHECK: "/sign_up_onboarding/uniqueness_check",
  NEOWISE_SIGNUP: "/signup",
  NEOWISE_CITY_LIST: "/signup/city_list",
  NEOWISE_STAGE_LIST: "/signup/stage_list",
  NEOWISE_MODE_LIST: "/signup/mode_list",
  STRAPI_STAGING_BASE_URL: "https://staging.decentro.tech/strapi/",
  STRAPI_STAGING_API_BASE_URL: "https://staging.decentro.tech/strapi/api",
  STRAPI_STAGING_IP_BASE_URL: "https://strapi.decentro.tech",
  STRAPI_STAGING_API_IP_BASE_URL: "https://strapi.decentro.tech/api",
  STRAPI_DECENTRO_FAQS_MASTER_LINKS: "/decentro-faq-master-links",
  STRAPI_DECENTRO_FAQS_MASTER_CARDS: "/decentro-faq-master-cards",
  STRAPI_DECENTRO_FAQS_SUBLINKS: "/decentro-faq-sublinks",
  STRAPI_DECENTRO_FAQS: "/decentro-faq-mains",
  STRAPI_DECENTRO_FAQ_NAV_LINKS: "/decentro-faq-navigations",
  STRAPI_DECENTRO_SECTION_FAQS: "/decentro-section-faqs",
  STRAPI_DECENTRO_META_TAGS: "/decentro-faq-meta-tags",
  STRAPI_POPULATE_ALL_QUERY: "?populate=*",
  ASSETS_BASE_URL_S3:
    "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com",
  DOC_SG_VA: "https://global.docs.decentro.tech/docs/accounts-overview-and-guide",
  DOC_SG_PAYMENT_COLLECTION:
    "https://global.docs.decentro.tech/docs/payments-overview-and-guide",
  DOC_SG_LEDGERS:
    "https://global.docs.decentro.tech/docs/ledgers-overview-and-guide",
  DOC_SG_PAYOUTS:
    "https://global.docs.decentro.tech/docs/payments-overview-and-guide",
};

export default requests;
