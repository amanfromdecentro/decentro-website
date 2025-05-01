const nextConfig = {
  mode: "production",
  optimization: {
    usedExports: true, // Enable tree shaking
    minimize: true, // Enable code minification
  },
  reactStrictMode: true,
  swcMinify: true,
  // Add only these new performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      // Redirect /faq to /blog
      {
        source: "/help/faqs/upi-integration-website",
        destination: "/blog/upi-payment-gateway-integration",
        permanent: true,
      },
      // Redirect /terms to /decentro-terms
      {
        source: "/terms",
        destination: "/decentro-terms",
        permanent: true,
      },
      // Redirect /products/payments/ to /
      {
        source: "/products/payments",
        destination: "/",
        permanent: true, // 301 redirect
      },
      // Redirect /products/business-accounts/ to /
      {
        source: "/products/business-accounts",
        destination: "/",
        permanent: true,
      },
      // Redirect /products/accounts/ to /
      {
        source: "/products/accounts",
        destination: "/",
        permanent: true,
      },
      // Redirect /upi-collections to /upi-payment-gateway
      {
        source: "/products/upi-collections",
        destination: "/products/upi-payment-gateway",
        permanent: true,
      },
      {
        source: "/products/payouts",
        destination: "/products/instant-payouts",
        permanent: true,
      },
      // Handle /signup route with UTM parameters
      {
        source: "/sign-up-onboarding",
        destination: "/signup",
        has: [{ type: "query", key: "utm_source" }],
        permanent: false, // Temporary redirect, change to true if needed
      },
      // Broken links found in relation to blogs - redirecting them below
      {
        source: "/verticals/nbfcs-fintech-lenders",
        destination: "/",
        permanent: true,
      },
      {
        source: "/the-great-indian-fintech-fellowship",
        destination: "/",
        permanent: true,
      },
      {
        source: "/verticals/neobanks",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products/aml-compliance",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/verticals/marketplaces",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products/wallets-prepaid-cards",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/verticals/gig-economy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fintech-fellowship",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products/wallets-cards",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/savings-accounts",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/verticals/wealth-personal-finance-managers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/verticals/enterprise-resource-planning-system-erp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/verticals/erps",
        destination: "/",
        permanent: true,
      },
      {
        source: "/verticals/gig-platforms",
        destination: "/",
        permanent: true,
      },
      {
        source: "/partners",
        destination: "/partner-program",
        permanent: true,
      },
      {
        source: "/resources/mobile-to-vpa",
        destination: "/api-hub/mobile-to-vpa",
        permanent: true,
      },
      {
        source: "/resources/upi-verification",
        destination: "/api-hub/upi-verification",
        permanent: true,
      },
      {
        source: "/resources/vendor-onboarding",
        destination: "/resources/vendor-onboarding-apis",
        permanent: true,
      },
      {
        source: "/sg/:path*",
        destination: "/global/:path*",
        permanent: true,
      },
    ];
  },

  // Add webpack config inside the object
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;