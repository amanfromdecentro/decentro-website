import React from "react";
import ImageGallery from "react-image-gallery";

const DecentroCareersGallery = (props) => {
  return (
    <>
      <ImageGallery
        items={props.images}
        infinite={true}
        showFullscreenButton={true}
        showBullets={true}
        thumbnailPosition="bottom"
        showPlayButton={true}
        lazyLoad={true}
        autoPlay={false}
        slideDuration={450}
      />
    </>
  );
};

export default DecentroCareersGallery;
