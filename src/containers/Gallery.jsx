import styles from "../styles/Gallery.module.css";
import { LlamaCard } from "../components/LlamaCard";
const Gallery = ({ LlamaInfo }) => {
	const generateCards = LlamaInfo.map((c) => {
		return (
			<LlamaCard
				key={c.id}
				title={c.nombre}
				text={c.ubicacion}
				Imagesrc={c.imagen}
			/>
		);
	});
	return (
		<section className={styles.Gallery}>
			<h1>Llama Fans</h1>
			<h3>llamas for all the people</h3>
			<div className={styles.GalleryGrid}>{generateCards}</div>
		</section>
	);
};

export { Gallery };
