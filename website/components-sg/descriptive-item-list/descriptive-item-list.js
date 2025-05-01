// Styles Imports
import styles from "../../styles/components-styles/descriptive-item-list/descriptive-item-list.module.scss";

const DescriptiveItemList = (props) => {
  return (
    <div className={styles["why-decentro"]}>
      <img
        className={`${styles["banner-bg"]}`}
        src="/images/bg-banners/blue-bg-why-decentro.svg"
        alt="bg-banner"
      />
      <img
        className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
        src="/images/bg-banners/lines-bg-why-decentro.svg"
        alt="bg-banner"
      />
      <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
      <p className={styles["tagline"]}>{props.data.tagline}</p>
      <div className={styles["why-decentro-steps"]}>
        {props.data.items.map((item, index) => {
          return (
            <div className={styles["item"]} key={index}>
              <div className={styles["item-image-title-container"]}>
                <div className={styles["item-image"]}>
                  <img src={item.imageSrc} alt="header-icon" />
                </div>
                <p
                  className={styles["item-title"]}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></p>
              </div>
              <p className={styles["item-description"]}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DescriptiveItemList;
