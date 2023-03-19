import Image from "next/image";
import styles from "../styles/LlamaPage.module.css"

const LlamaPage = ({imageSrc, title, location, country}) => {
	return (
		<>
			<div className={styles.Container}>
				<div className={styles.ImageContainer}>
					<Image src={imageSrc} fill/>
				</div>
				<div className={styles.TextContainer}>
					<h2>{title}</h2>
                    <p>{location}</p>
                    <p>{country}</p>
                    <button> Añadir a Favoritos</button>
				</div>
			</div>
		</>
	);
};

export { LlamaPage };
