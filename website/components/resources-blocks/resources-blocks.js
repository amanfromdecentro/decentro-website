import React, { useEffect, useState } from "react";
import styles from "../../styles/components-styles/resources-blocks/resources-blocks.module.scss";
import Link from "next/link";
import Image from "next/image";

const ResourcesBlocks = (props) => {
    const openItem = (link) => {
        window.open(link, "_blank");
    };
    const [showMore, setShowMore] = useState(false)
    const [toShow, setToShow] = useState([])

    const initialData = props.data.resources

    const showContents = () => {
        setToShow([...initialData])
        setShowMore(prev => !prev)
    }

    useEffect(() => {
        if (props.data.resources.length > 6) {
            setShowMore(false)
            const visibleData = props?.data?.resources?.slice(0, 6);
            setToShow(visibleData)
        } else {
            setToShow(props.data.resources)
        }

    }, [])

    return (
        <div className={styles["recommendation-container"]}>
            <Image
                src={props.data.image}
                alt="Flow"
                width={130}
                height={40}
            />
            <h2>
                {props.data.subheading}
            </h2>
            <div className={styles["recommendation-cards"]}>
                {toShow.map((item, index) => {
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
            {!showMore && <button
                className={styles["show-more"]}
                onClick={(event) => {
                    showContents();
                }}
            >
                <span>View More</span>
            </button>}
        </div>
    );
};

export default ResourcesBlocks;
