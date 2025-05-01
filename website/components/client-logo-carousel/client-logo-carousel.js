import Image from "next/image";
import styles from "../../styles/components-styles/client-logo-carousel/client-logo-carousel.module.scss";
const ClientLogoCarousel = (props) => {
  const redirectStoriesPage = (event) => {
    window.open("/customer-stories", "_blank");
  };
  return (
    <>
      <div
        className={styles["banner-client-section"]}
      >
        {props?.partnersPage ? (
          <h2
            className={styles["banner-client-partners-page-heading"]}
            dangerouslySetInnerHTML={{ __html: props.data.header }}
          ></h2>
        ) : (
          <p className={styles["banner-client-tagline"]}>
            Trusted by{" "}
            <span className={styles["highlight"]}>1200+ businesses</span>
            &nbsp;globally to launch their fintech products{" "}
            <span className={styles["highlight"]}>10X faster</span>
          </p>
        )}
        <div className="client-list-carousel">
          <div className={styles["slider-wrapper"]}>
            <div className={styles["slider"]}>
              <div className={styles["slide-track"]}>
                {/* Need to send maxWidths also with these data to handle different image widths in future */}
                {props.data.clientLogos.map((item, index) => {
                  return (
                    <div className={styles["slide"]} key={index}>
                      <Image
                        style={{ maxWidth: `${item.maxWidth}` }}
                        src={item.imageSrc}
                        alt="client-logo"
                        width={140}
                        height={50}
                      />
                    </div>
                  );
                })}

                {/* 2nd Pair Repeat */}
                {props.data.clientLogos.map((item, index) => {
                  return (
                    <div className={styles["slide"]} key={index}>
                      <Image
                        style={{ maxWidth: `${item.maxWidth}` }}
                        src={item.imageSrc}
                        alt="client-logo"
                        width={140}
                        height={50}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLogoCarousel;
