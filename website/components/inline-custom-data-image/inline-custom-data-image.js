import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const InlineCustomDataImage = (props) => {
  return (
    <div
      className="inline-custom-data-image"
      style={{
        flexFlow: props.reverse == true ? "row" : "row-reverse",
      }}
      id={props.data.id}
    >
      <div className="left-container">
        <p
          className="title"
          dangerouslySetInnerHTML={{ __html: props.data.title }}
        />
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: props.data.description }}
        />
        <div className="bullet-points">
          <ul>
            {props.data.bulletPoints.map((point, index) => {
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
              );
            })}
          </ul>
        </div>
        <div className="recommended">
          <p className="content-subheader">Recommended For</p>
          <div className="item-list">
            {props.data.imageList.map((image, index) => {
              return (
                <div className="item" key={index}>
                  <div className="image-content">
                    <img src={image.imageSrc} alt={image.imageTitle} />
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: image.imageTitle }} />
                </div>
              );
            })}
          </div>
          {props?.data?.CTAText && props?.data?.ctaButtonLink && <div className="partner-with-us-btn">
            <Link
              href={props.data.ctaButtonLink}
            >
              {props.data.CTAText}
              <FaChevronRight />
            </Link>
          </div>}
        </div>
      </div>
      <div
        className="right-container"
        style={{
          justifyContent: props.reverse == true ? "flex-end" : "flex-start",
        }}
      >
        <div className="image-content">
          <img src={props.data.imageSrc} alt={props.data.title} />
        </div>
      </div>
    </div>
  );
};

export default InlineCustomDataImage;
