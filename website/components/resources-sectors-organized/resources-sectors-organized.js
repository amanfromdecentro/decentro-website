// Styles Imports
import styles from "../../styles/components-styles/resources-sectors-organized/resources-sectors-organized.module.scss";

const ResourcesSectorsOrganized = (props) => {
  return (
    <div className={styles["why-decentro"]}>
      <div className={styles["why-decentro-steps"]}>
        {props.data.map((item, index) => {
          return (
            <div className={styles["item"]} key={index}>
              <div className={styles["item-image"]}>
                <img src={item.imageSrc} alt="reduced capex" />
              </div>
              <p
                className={styles["item-title"]}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></p>
              {/* <p className={styles["item-title"]}>{item.title}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesSectorsOrganized;
