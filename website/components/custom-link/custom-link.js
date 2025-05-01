// components/CustomLink.js
import { useRouter } from "next/router";
import Link from "next/link";
import { getStoredUTMParams, setStoredUTMParams } from "../utils/utmUtils";

const CustomLink = ({ href, children, ...props }) => {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    const url = new URL(href, window.location.origin);
    const currentUTMParams = getStoredUTMParams();

    // Append current UTM params to new URL
    Object.keys(currentUTMParams).forEach((key) => {
      if (currentUTMParams[key]) {
        url.searchParams.set(key, currentUTMParams[key]);
      }
    });

    // Navigate to the URL with UTM parameters
    router.push(url.toString());
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default CustomLink;
