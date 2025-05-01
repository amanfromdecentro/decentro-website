// Styles Imports
import styles from "../../styles/components-styles/resources-sectors/resources-sectors.module.scss";

const ResourcesSectors = (props) => {
  return (
    <div className={styles["why-decentro"]}>
      <div className={styles["why-decentro-steps"]}>
        {props.data.map((item, index) => {
          return (
            <div className={styles["item"]} key={index}>
              <div className={styles["item-image"]}>
                <img src={item.imageSrc} alt="reduced capex" />
              </div>
              <p className={styles["item-title"]}>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesSectors;
