import styles from "../../styles/components-styles/client-logo-carousel/client-logo-carousel.module.scss";
const ClientLogoCarousel = (props) => {
  return (
    <>
      <div className={styles["banner-client-section"]}>
        <p className={styles["banner-client-tagline"]}>
          Trusted by{" "}
          <span className={styles["highlight"]}>1200+ businesses</span>
          &nbsp;globally to launch their fintech products{" "}
          <span className={styles["highlight"]}>10X faster</span>
        </p>
        <div className="client-list-carousel">
          <div className={styles["slider-wrapper"]}>
            <div className={styles["slider"]}>
              <div className={styles["slide-track"]}>
                {/* Need to send maxWidths also with these data to handle different image widths in future */}
                {props.data.clientLogos.map((item, index) => {
                  return (
                    <div className={styles["slide"]} key={index}>
                      <img
                        style={{ maxWidth: `${item.maxWidth}` }}
                        src={item.imageSrc}
                        alt="client-logo"
                      />
                    </div>
                  );
                })}

                {/* 2nd Pair Repeat */}
                {props.data.clientLogos.map((item, index) => {
                  return (
                    <div className={styles["slide"]} key={index}>
                      <img src={item.imageSrc} alt="client-logo" />
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
