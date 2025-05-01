import React from "react";
import styles from "../../styles/components-styles/cutout-items/cutout-items.module.scss";
import Image from "next/image";

const CutoutItems = (props) => {
    return (
        <div className={styles["rows-suite"]} id={props.id ? props.id : ""}>
            <div className={styles["rows-suite-wrapper"]}>
                {props.data.rowsList.map((item, index) => {
                    return (
                        <div className={styles["rows-suite-container"]} key={index}>
                            <div className={styles["block"]}>
                                <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                                <div
                                    className={styles["unit-grid"]}
                                    style={{
                                        gridTemplateColumns: `repeat(${item.list.length}, 1fr)`,
                                        gridGap: "40px",
                                    }}
                                >
                                    {item.list.map((itm, idx) => {
                                        return (
                                            <div className={styles["item-block"]} key={idx}>
                                                <div className={styles["image"]}>
                                                    <Image src={itm.imageSrc} width={58} height={48} />
                                                </div>
                                                <h3
                                                    dangerouslySetInnerHTML={{ __html: itm.title }}
                                                ></h3>
                                                <p
                                                    className={styles["description"]}
                                                    dangerouslySetInnerHTML={{ __html: itm.description }}
                                                ></p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CutoutItems;
