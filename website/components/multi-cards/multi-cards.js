import React from "react";
import styles from "../../styles/components-styles/recommended-pages/recommended-pages.module.scss";
import Link from "next/link";

const MultiCards = (props) => {
    const openItem = (link) => {
        window.open(link, "_blank");
    };
    return (
        <div className={styles["recommendation-container"]}>
            <h2>
                Use <span>Decentro&apos;s Payment Aggregator</span> The Below Products
            </h2>
            <div className={styles["recommendation-cards"]}>
                {props.data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                openItem(item.pageLink);
                            }}
                            className={styles["card-container-link"]}
                        >
                            <div className={styles["card"]}>
                                <div className={styles["card-image"]}>
                                    {item?.imageSrc ?
                                        <img src={item?.imageSrc} alt="card banner" />
                                        :
                                        <video
                                            autoPlay="autoplay"
                                            loop
                                            muted
                                            playsInline
                                            className={styles["video-background"]}
                                            width={250}
                                            height={200}
                                        >
                                            <source src={item?.videoSrc} type="video/mp4"></source>
                                        </video>
                                    }
                                </div>
                                <p className={styles["card-title"]}>{item.title}</p>
                                <p className={styles["card-description"]}>{item.description}</p>
                                <p className={styles["card-link-container"]}>
                                    <Link
                                        href={item.pageLink}
                                        className={styles["card-link"]}
                                        onClick={(event) => {
                                            event.preventDefault();
                                        }}
                                    >
                                        Explore Now
                                        <img
                                            src="/images/recommended-pages/next.svg"
                                            alt="arrow-right"
                                        />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MultiCards;
