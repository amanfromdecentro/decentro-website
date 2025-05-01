import styles from "../../styles/components-styles/inline-images/inline-images.module.scss";

const InlineImages = (props) => {
  return (
    <div className={styles["inline-images"]}>
      <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }} />
      {props.data.tagline ? (
        <p dangerouslySetInnerHTML={{ __html: props.data.tagline }} />
      ) : null}
      <div className={styles["image-list"]}>
        {props.data.imageList.map((item, index) => {
          return (
            <div className={styles["image-content"]} key={index}>
              <img src={item.imageSrc} alt={item.altText} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InlineImages;
