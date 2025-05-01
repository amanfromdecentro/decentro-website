import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { SelfOnboardingModal } from "../contexts/SelfOnboardingContext";
import { HelpSectionProvider } from "../contexts/HelpSectionContext";
import "../styles/globals.scss";
// Global components styles also to be imported here
import "../styles/book-demo-banner/book-demo-banner.scss";
import "../styles/text-and-button-banner/text-and-button-banner.scss";
import "../styles/text-and-button-banner-gray/text-and-button-banner-gray.scss";
import "../styles/components-styles/text-and-button-banner-transparent/text-and-button-banner-transparent.scss";
import "../styles/footer.scss";
import "../components/header/header.scss";
import "../components/header-mobile/header-mobile.scss";
import "../styles/page-styles/terms.scss";
import "../styles/page-styles/nodal.scss";
import "../styles/page-styles/privacy.scss";
import "../styles/page-styles/agreement.scss";
import "../styles/page-styles/signup.scss";
import "../styles/components-styles/decentro-signup-banner/decentro-signup-banner.scss";
import "../styles/components-styles/member-box/member-box.scss";
import "../styles/components-styles/mentor-box/mentor-box.scss";
import "../pages/press-buzz/press-buzz-style.scss";
import "../components/podcasts-and-videos/podcasts-and-videos.scss";
import "../pages/customer-stories/customer-stories.scss";
import "../components/help-banner/help-banner.scss";
import "../components/inline-components/inline-components.scss";
import "../components/help-accordion/help-accordion.scss";
import "../components/grid-template/grid-template.scss";
import "../pages/help/faqs/faq-master.scss";
import "../components/faq-details/faq-details.scss";
import "../components/faq-navigation/faq-navigation.scss";
import "../styles/components-styles/inline-image-text-map/inline-image-text-map.scss";
import "../styles/page-styles/neowise-signup.scss";
import "../styles/components-styles/inline-custom-data-image/inline-custom-data-image.scss";
import "../styles/components-styles/countdown-timer/countdown-timer.scss";
import "../components/header-mobile/header-mobile-updated.scss";
import "../components/horizontal-comparison/horizontal-comparison.scss";

// import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import HeaderMobile from "../components/header-mobile/header-mobile";
import HeaderSG from "../components-sg/header/header";
import HeaderMobileSG from "../components-sg/header-mobile/header-mobile";
import {
  appendUTMParams,
  getStoredUTMParams,
  getUTMParamsFromURL,
  mergeUTMParams,
  setStoredUTMParams,
} from "../utilities/utmUtils";
import { loadScript, loadScriptWithPriority } from "../utilities/scriptLoader";
// import FooterSG from "../components-sg/footer/footer";

//  Lazy load Header component
// const Header = dynamic(() => import("../components/header/header"), {
//   ssr: false,
// });

// // Lazy load HeaderMobile component
// const HeaderMobile = dynamic(
//   () => import("../components/header-mobile/header-mobile"),
//   {
//     ssr: false,
//   }
// );

// Lazy load Footer component
const Footer = dynamic(() => import("../components/footer/footer"), {
  ssr: false,
});

// Lazy load HeaderSG component
// const HeaderSG = dynamic(() => import("../components-sg/header/header"), {
//   ssr: false,
// });

// // Lazy load HeaderMobileSG component
// const HeaderMobileSG = dynamic(
//   () => import("../components-sg/header-mobile/header-mobile"),
//   {
//     ssr: false,
//   }
// );

// Lazy load FooterSG component
const FooterSG = dynamic(() => import("../components-sg/footer/footer"), {
  ssr: false,
});

// Create a context for user journey
const UserJourneyContext = createContext();

// Custom hook to use the UserJourneyContext
export const useUserJourney = () => useContext(UserJourneyContext);
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [viewType, setViewType] = useState("desktop");
  // To track user journey for conversions
  const [userJourney, setUserJourney] = useState([]);
  const isInitialMount = useRef(true);
  // To track user journey for conversions
  useEffect(() => {
    const handleRouteChange = (url) => {
      const fullUrl = new URL(url, window.location.origin).href;
      const newUTMParams = getUTMParamsFromURL(fullUrl);
      const currentTimestamp = new Date().toISOString();

      setUserJourney((prevJourney) => {
        const lastEntry = prevJourney[prevJourney.length - 1];
        if (lastEntry && lastEntry.url === fullUrl) {
          // If the last entry is the same as the current URL, don't add a new entry
          return prevJourney;
        }
        return [
          ...prevJourney,
          {
            url: fullUrl,
            timestamp: currentTimestamp,
            utmParams: newUTMParams,
          },
        ];
      });
    };

    if (isInitialMount.current) {
      // Initial load
      handleRouteChange(window.location.href);
      isInitialMount.current = false;
    } else {
      // Subsequent route changes
      router.events.on("routeChangeComplete", handleRouteChange);
    }

    // Clean up
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // Function to get UTM params from URL
  const getUTMParamsFromURL = (url) => {
    const parsedUrl = new URL(url, window.location.origin);
    const utmParams = {};
    parsedUrl.searchParams.forEach((value, key) => {
      if (key.startsWith("utm_")) {
        utmParams[key] = value;
      }
    });
    return utmParams;
  };

  useEffect(() => {
    const handleResize = () => {
      setViewType(window.innerWidth < 1024 ? "mobile" : "desktop");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      router.asPath === "/sign-up-onboarding" ||
      router.asPath === "/sign-up-onboarding/"
    ) {
      router.replace("/signup");
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      const newUTMParams = getUTMParamsFromURL(url);

      if (Object.values(newUTMParams).some((param) => param)) {
        appendUTMParams(newUTMParams);
      }
    };

    // Initial load
    handleRouteChange(window.location.href);

    // Handle route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const structuredData = {
    careers: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Careers",
      url: "https://www.decentro.tech/careers",
    },
    about: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "About Us",
      url: "https://www.decentro.tech/about",
    },
    sg: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Decentro Singapore",
      url: "https://www.decentro.tech/global",
    },
    docs: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Decentro APIs",
      url: "https://docs.decentro.tech/",
    },
  };

  useEffect(() => {
    // Initialize critical scripts immediately
    const initCriticalScripts = () => {
      // GTM with minimal initial configuration
      loadScriptWithPriority(
        `
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `,
        "high"
      );
    };

    // Initialize non-critical scripts later
    const initNonCriticalScripts = () => {
      // GTM Full Configuration
      loadScriptWithPriority(
        `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-58TJJ42');
      `,
        "medium"
      );

      // Hotjar
      loadScriptWithPriority(
        `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3474406,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;r.defer=true;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
        "low"
      );

      // Microsoft Clarity
      // loadScriptWithPriority(
      //   `
      //   (function(c,l,a,r,i,t,y){
      //     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      //     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      //     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      //   })(window,document,"clarity","script","lps9yrv6md");
      // `,
      //   "low"
      // );
    };

    // Load scripts based on user interaction
    const handleUserInteraction = () => {
      initNonCriticalScripts();
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    // Initialize critical scripts
    initCriticalScripts();

    // Add event listeners for non-critical scripts
    window.addEventListener("scroll", handleUserInteraction, { passive: true });
    window.addEventListener("mousemove", handleUserInteraction, {
      passive: true,
    });
    window.addEventListener("touchstart", handleUserInteraction, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <>
      <UserJourneyContext.Provider value={{ userJourney, setUserJourney }}>
        <Head>
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet" />
          {/* <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-58TJJ42');`,
            }}
          />
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3474406,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
            }}
          /> */}
          {/* <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "lps9yrv6md");
            `,
            }}
          /> */}
          {/* Google Analytics (gtag.js) */}
          {/* <script
            defer
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6NBW6WWGPQ"
          />
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6NBW6WWGPQ');
            `,
            }}
          /> */}
          {/* Google tag (gtag.js)  */}
          {/* <script
            defer
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11419699036"
          /> */}

          {/* <script
            defer
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'AW-11419699036');`,
            }}
          /> */}

          {/* {Object.keys(structuredData).map((pageKey) => (
            <script
              defer
              key={pageKey}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData[pageKey], null, 2),
              }}
            />
          ))} */}
        </Head>
        <HelpSectionProvider>
          {
            // router.pathname !== "/signup-formik" &&
            // router.pathname !== "/partner-signup-formik" &&
            router.pathname !== "/signup" &&
              router.pathname !== "/signup/" &&
              router.pathname !== "/dc/signup" &&
              router.pathname !== "/dc/signup/" &&
              router.pathname !== "/global/signup" &&
              router.pathname !== "/global/signup/" &&
              router.pathname !== "/signup-new/" &&
              router.pathname !== "/signup-new" &&
              router.pathname !== "/partner-signup/" &&
              router.pathname !== "/partner-signup" &&
              router.pathname !== "/report-bug/report" &&
              router.pathname !== "/report-bug/report/" &&
              !router.pathname.includes("/global") &&
              !router.pathname.includes("/global/") ? (
              viewType === "desktop" ? (
                <Header />
              ) : (
                <HeaderMobile />
              )
            ) : null
          }
          {(router.pathname.includes("/global") ||
            router.pathname.includes("/global/")) &&
            router.pathname !== "/global/signup" &&
            router.pathname !== "/global/signup/" ? (
            viewType === "desktop" ? (
              <HeaderSG />
            ) : (
              <HeaderMobileSG />
            )
          ) : null}
          {/* <HelpSectionProvider> */}
          <SelfOnboardingModal>
            <Component {...pageProps} />
          </SelfOnboardingModal>
          {/* </HelpSectionProvider> */}
          <div id="portal"></div>
          {
            // router.pathname !== "/signup-formik" &&
            // router.pathname !== "/partner-signup-formik" &&
            router.pathname !== "/signup" &&
              router.pathname !== "/signup/" &&
              router.pathname !== "/dc/signup" &&
              router.pathname !== "/dc/signup/" &&
              router.pathname !== "/global/signup" &&
              router.pathname !== "/global/signup/" &&
              router.pathname !== "/signup-new/" &&
              router.pathname !== "/signup-new" &&
              router.pathname !== "/partner-signup/" &&
              router.pathname !== "/partner-signup" &&
              router.pathname !== "/report-bug/report" &&
              router.pathname !== "/report-bug/report/" &&
              !router.pathname.includes("/global") &&
              !router.pathname.includes("/global/") ? (
              <Footer />
            ) : null
          }
          {(router.pathname.includes("/global") ||
            router.pathname.includes("/global/")) &&
            router.pathname !== "/global/signup" &&
            router.pathname !== "/global/signup/" ? (
            <FooterSG />
          ) : null}
        </HelpSectionProvider>
        {/* Google Tag Manager (noscript)  */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58TJJ42"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </UserJourneyContext.Provider >
    </>
  );
}

export default MyApp;
