import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10rem 2rem 4rem 2rem",
        // paddingTop: "10rem",
        minHeight: "60vh",
        boxSizing: "border-box",
      }}
    >
      <Image src="/images/404.svg" alt="404" width={310} height={260} />
      <h1
        style={{
          fontSize: "2.5rem",
          lineHeight: "120%",
          fontWeight: "700",
        }}
      >
        404
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "100%",
            textAlign: "center",
            lineHeight: "120%",
            fontWeight: "300",
            fontSize: "1rem",
            color: "#43425D",
          }}
        >
          Oops! Looks like you’re lost in the digital wilderness.
          <br />
          We couldn’t find what you were looking for, but don’t worry—our
          website is still full of treasures!
        </p>

        <p
          style={{
            width: "100%",
            textAlign: "center",
            lineHeight: "120%",
            fontWeight: "300",
            fontSize: "1rem",
            color: "#43425D",
          }}
        >
          Go back&nbsp;
          <Link
            href={"/"}
            style={{
              textDecoration: "underline",
            }}
          >
            HOME
          </Link>{" "}
          and start fresh.
        </p>
        <p
          style={{
            width: "100%",
            textAlign: "center",
            lineHeight: "120%",
            fontWeight: "300",
            fontSize: "1rem",
            color: "#43425D",
          }}
        >
          Or simply enjoy this moment of zen, and we’ll guide you back to
          safety.
          <br />
          The internet is vast, but you’ve got this!
        </p>
      </div>
    </div>
  );
};

export default Custom404;
