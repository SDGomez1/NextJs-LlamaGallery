import styles from "../styles/LlamaCard.module.css";
import Image from "next/image";

const LlamaCard = ({Imagesrc, title, text}) => {
	return (
		<div className={styles.LlamaCard}>
			<div className={styles.ImageContainer}>
				<Image
					src={Imagesrc}
					fill
					alt = ''
				/>
			</div>
            <div className={styles.TextContainer}>
                <h4>
                    {title}
                </h4>
                <p>
                    {text}
                </p>
            </div>
            
		</div>
	);
};

export { LlamaCard };
