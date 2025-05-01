import Image from "next/image";
import styles from "../../styles/components-styles/inline-grey/inline-grey.module.scss";

const InlineGrey = (props) => {
    return (
        <div className={styles["inline-grey-container"]}>
            <div className={styles["inline-content-container"]}>
                <div className={styles["img-container"]}>
                    <Image
                        width={120}
                        height={120}
                        src={props?.data?.img}
                    />
                </div>
                <p className={styles["text-container"]}>
                    {props.data.text}
                </p>
            </div>
        </div>
    )
}

export default InlineGrey;