import styles from "../../styles/components-styles/info-box-container/info-box-container.module.scss";
import { FaChevronRight } from "react-icons/fa";


const InfoBoxContainer = (props) => {

    const scrollToSection = (sectionRef) => {
        var elToScroll = document.querySelector("#" + sectionRef);
        elToScroll.scrollIntoView({ alignToTop: true, behavior: "smooth" });
    };

    return (
        <>
            <div className={styles["main-box-container"]}>
                {props.data.map((item, index) => {
                    return (
                        <div className={styles["info-container"]} key={index}>
                            <div className="info-top">
                                <div className={styles["box-item"]}>
                                    <div className={styles["box-item-image"]}>
                                        <img src={item.imageSrc} alt="reduced capex" />
                                    </div>
                                    <p className={styles["box-item-title"]}>{item.title} <span className={styles["box-item-title-heading-highlighted"]}>{item.highlightedTitle}</span></p>
                                </div>
                            </div>
                            <div className={styles["info-middle"]}>
                                {item.middleInfo}
                            </div>
                            <div className={styles["info-bottom"]}>
                                <button className={styles["know-more-btn"]} onClick={() => {
                                    scrollToSection(item.id);
                                }}>
                                    {item.CTAText}
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    )

                })}
            </div>

        </>
    )
}

export default InfoBoxContainer