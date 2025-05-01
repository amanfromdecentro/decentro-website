import React from "react";
import styles from "../../styles/components-styles/multi-column-block/multi-column-block.module.scss";
import Link from "next/link";

const MultiColumnBlock = (props) => {
    return (
        <div className={styles["api-suite"]} id={props.id ? props.id : ""}>
            {props?.data?.title && (
                <h2 dangerouslySetInnerHTML={{ __html: props.data.title }}></h2>
            )}
            {props?.data?.tagline && <p
                className={styles["tagline"]}
                dangerouslySetInnerHTML={{ __html: props.data.tagline }}
            ></p>}
            <div className={styles["api-suite-wrapper"]}>
                {props.data.suiteList.map((item, index) => {
                    return (
                        <div className={styles["api-suite-container"]} key={index}>
                            <div className={styles["block"]}>
                                <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                                <p
                                    className={styles["tagline"]}
                                    dangerouslySetInnerHTML={{ __html: item.tagline }}
                                ></p>
                                <div className={styles["mid-container"]}>
                                    {/* <CommonTable data={testData} /> */}
                                    {item.midComponent}



                                    <Link
                                        href={"https://docs.decentro.tech/docs/kyc-and-onboarding-identities#-id-converte"}
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
                                </div>

                                {/* <TextAndButtonBannerTransparent data={learnMoreData1} /> */}
                                {/* <div
                            className={styles["unit-grid"]}
                            style={{
                                gridTemplateColumns: `repeat(${props.data.apiSuiteList[0].list.length}, 1fr)`,
                                gridGap: "40px",
                            }}
                        >
                            {props.data.apiSuiteList[0].list.map((itm, idx) => {
                                return (
                                    <div className={styles["item-block"]} key={idx}>
                                        <div className={styles["image"]}>
                                            <Image src={itm.imageSrc} width={38} height={38} />
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
                        </div> */}
                            </div>
                            {index !== props.data.suiteList.length - 1 && (
                                <hr
                                    style={{
                                        height: "0",
                                        width: "100%",
                                        border: "none",
                                        borderBottom: "2px dashed #B9C8E0",
                                        marginTop: "80px",
                                    }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MultiColumnBlock;
