import Link from "next/link";
import requests from "../../requests";

const BookDemoBanner = () => {
  return (
    <div className="inline-image-and-paragraph">
      <div className="text-content">
        <h1>
          Boost your workflow <br />
          with{" "}
          <span className="banner-title-highlighted">powerful resources</span>
        </h1>
        <p className="tagline">
          Learn in-depth about how various banking & financial APIs can empower
          your business along with quick info-nuggets on how these function.
        </p>
        <Link href="/global/signup">Book A Demo</Link>
      </div>
      <div className="image-content">
        <img
          src="/images/home/book-demo-banner.svg"
          alt="Decentro is a full-stack API banking platform for financial integrations."
        />
      </div>
    </div>
  );
};

export default BookDemoBanner;
