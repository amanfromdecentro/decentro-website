import React from "react";
import Link from "next/link";

const TextAndButtonBannerTransparent = (props) => (
  <div className="text-and-button-banner-transparent">
    {props.data.text ? (
      <p dangerouslySetInnerHTML={{ __html: props.data.text }}></p>
    ) : (
      ""
    )}
    {props.data.ctaButtonText ? (
      <Link
        href={props.data.ctaButtonLink}
        target={props.data.newTab ? "_blank" : ""}
      >
        {props.data.ctaButtonText}
      </Link>
    ) : (
      ""
    )}
  </div>
);

export default TextAndButtonBannerTransparent;
