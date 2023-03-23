import Image from "next/image"
import styles from "@styles/LlamaCard.module.css"

const LlamaCard = (props: { Imagesrc: string, title: string, text: string }): JSX.Element => {
    return (
        <div className={styles.LlamaCard}>
            <div className={styles.ImageContainer}>
                <Image
                    src={props.Imagesrc}
                    fill
                    alt=''
                />
            </div>
            <div className={styles.TextContainer}>
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.text}
                </p>
            </div>

        </div>
    )
}

export { LlamaCard }