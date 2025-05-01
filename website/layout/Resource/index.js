import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/page-styles/upi-autopay-apis.module.scss";
import ProductBanner from "../../components/product-banner/product-banner";
import TableOfContents from "../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../components/use-cases/use-cases";
import RecommendedPages from "../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../components/bullet-points-text-block/bullet-points-text-block";
import DescriptiveItemListFour from "../../components/descriptive-item-list-four/descriptive-item-list-four";
import HeadingAndItems from "../../components/heading-and-items/heading-and-items";

const ResourceLayout = (props) => {

    return (
        <React.Fragment>
            <Head>
                <title>{props?.data?.seo?.title}</title>
                <link
                    rel="canonical"
                    href={props?.data?.seo?.canonical}
                />
                <link
                    rel="alternate"
                    href={props?.data?.seo?.alternate}
                    hreflang="en-IN"
                />
                <meta
                    name="description"
                    content={props?.data?.seo?.description}
                />
                <meta name="keywords" content={props?.data?.seo?.keywords} />
                <meta
                    property="og:title"
                    content={props?.data?.seo?.ogTitle}
                />
                <meta property="og:image" content={props?.data?.seo?.ogImg} />
            </Head>
            <div className={styles["upi-autopay-apis"]}>
                <ProductBanner data={props?.data?.productBanner} />
                <TableOfContents data={props?.data?.tableOfContents} />
                <InlineImageAndParagraph
                    id="upiAutopayForBusiness"
                    data={props?.data?.inlineImageAndParagraph}
                    reverse={false}
                />
                <InlineImageAndParagraph
                    id="upiAutoPayIntentFlow"
                    data={props?.data?.inlineImageAndParagraph2}
                    reverse={true}
                />
                {/* 5 */}
                <HeadingAndItems data={props?.data?.headingAndItems} />

                <TextAndButtonBannerTransparent data={props?.data?.textAndButtonBannerTransparent} />
                <DescriptiveItemListFour data={props?.data?.descriptiveItemListFour} />
                <UseCases id="KeyFeatures" data={props?.data?.useCases} />
                <TextAndButtonBannerTransparent data={props?.data?.textAndButtonBannerTransparent2} />
                <div
                    className={styles["upi-autopay-apis-applications"]}
                    id="upiAutopayLeveraging"
                >
                    <h2>
                        {props?.data?.adjacentData?.heading?.light} <span>{props.data.adjacentData?.heading?.bold}</span>
                    </h2>
                    <div className={styles["upi-autopay-apis-applications-content"]}>
                        {props?.data?.adjacentData?.data.map((each, index) => (
                            <InlineImageAndParagraph
                                zoom={true}
                                data={each}
                                reverse={index % 2 === 1}
                                boldBlack
                            />
                        ))}
                    </div>
                </div>
                <TextAndButtonBannerTransparent data={props.data.textAndButtonBannerTransparent3} />
                <BulletPointsAndTextBlock
                    id="howCanDecentroHelp"
                    data={props.data.bulletPointsAndTextBlock}
                />
                <TextAndButtonBannerTransparent data={props.data.textAndButtonBannerTransparent4} />
                <RecommendedPages data={props.data.recommendedPages} />
            </div>
        </React.Fragment>
    );
};

export default ResourceLayout;
