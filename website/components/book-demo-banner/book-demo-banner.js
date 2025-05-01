import Link from "next/link";
import requests from "../../requests";
import Image from "next/image";

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
        <Link href={requests.SIGNUP} target="_blank"
          rel="noopener noreferrer">Book A Demo</Link>
      </div>
      <div className="image-content">
        <Image
          src="/images/home/book-demo-banner.svg"
          alt="Decentro is a full-stack API banking platform for financial integrations."
          width={560}
          height={515}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default BookDemoBanner;
